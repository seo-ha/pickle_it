import React, { useState } from 'react'
import { supabase } from '../../lib/supabaseClient';

function SignupPage() {

  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSignup = async(e) =>{
    e.preventDefault();
    setLoading(true);

    const {data:existingUser, error:usernameError} = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username)
    .single();

    if(existingUser) {
      alert('이미 사용 중인 아이디입니다.');
      setLoading(false);
      return;
    }

    const {data, error} = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      alert('회원가입 실패: ' + error.message);
      setLoading(false);
      return;
    }

    const user = data.user;

    const {error : profileError} = await supabase.from('profiles').insert([
      {
        id: user.id,
        username,
        email
      }
    ])

    if (profileError) {
      alert('프로필 저장 실패: ' + profileError.message);
    } else {
      alert('회원가입 성공! 이메일 인증을 완료해주세요.');
      // window.location.href = '/login'; // 필요 시 이동
    }

    setLoading(false);
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
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