import React, { useState } from 'react'
import { supabase } from '../../lib/supabaseClient';
import { replace, useNavigate } from 'react-router';

function SignupPage() {

  const nav = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);

  const defaultCategories = [
    { name: 'diary', color: 'blue' },
    { name: 'book', color: 'yellow' },
    { name: 'music', color: '#e74141' },
    { name: 'ticket', color: '#ebabeb' },
    { name: 'movie', color: 'green' },
  ];

  const [isUsernameChecked, setIsUsernameChecked] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState('');

  const checkUsername = async () => {
    if (!username) {
      alert('아이디를 입력해주세요.');
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .eq('username', username)
      .maybeSingle();

    if (data) {
      setIsUsernameChecked(false);
      setUsernameMessage('❌ 이미 사용 중인 아이디입니다.');
    } else {
      setIsUsernameChecked(true);
      setUsernameMessage('✅ 사용 가능한 아이디입니다.');
    }
  };

  const handleSignup = async(e) =>{
    e.preventDefault();
    setLoading(true);

    // 중복 확인 여부
    if (!isUsernameChecked) {
      alert('아이디 중복 확인을 해주세요.');
      setLoading(false);
      return;
    }

    // 중복 아이디 최종 확인
    const { data: existingUser, error: usernameError } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', username)
      .maybeSingle();

    if (existingUser) {
      alert('이미 사용 중인 아이디입니다.');
      setLoading(false);
      return;
    }

    // 회원가입 요청
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      alert('회원가입 실패: ' + signUpError.message);
      setLoading(false);
      return;
    }

    // user.id 가져오기: signUpData.user가 없을 경우 세션에서 가져옴
    let userId = signUpData?.user?.id;

    if (!userId) {
      const { data: sessionData } = await supabase.auth.getSession();
      userId = sessionData?.session?.user?.id;
    }

    if (!userId) {
      alert('회원 정보 확인에 실패했습니다.');
      setLoading(false);
      return;
    }

    // 프로필 저장
    const { error: profileError } = await supabase.from('profiles').insert([
      {
        id: userId,
        username,
        email,
      },
    ]);

    if (profileError) {
      alert('프로필 저장 실패: ' + profileError.message);
      setLoading(false);
      return;
    }

    // 기본 카테고리 저장
    const defaultCategories = [
      { name: 'diary', color: 'blue' },
      { name: 'book', color: 'yellow' },
      { name: 'music', color: '#e74141' },
      { name: 'ticket', color: '#ebabeb' },
      { name: 'movie', color: 'green' },
    ];

    const { error: categoryError } = await supabase.from('categories').insert(
      defaultCategories.map((category) => ({
        ...category,
        user_id: userId,
        created_at: new Date().toISOString(),
      }))
    );

    if (categoryError) {
      alert('카테고리 생성 실패: ' + categoryError.message);
    }

    alert('회원가입이 완료되었습니다!');
    setLoading(false);
    nav('/login', { replace: false });
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <div>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsUsernameChecked(false);
              setUsernameMessage('');
            }}
            required
            style={{ display: 'block', width: '100%', marginBottom: '10px' }}
          />
          <button type="button" onClick={checkUsername}>아이디 확인</button>
        </div>
        {usernameMessage && <p>{usernameMessage}</p>}
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" disabled={loading}>
          {loading ? '가입 중...' : '회원가입'}
        </button>
      </form>
    </div>
  )
}

export default SignupPage