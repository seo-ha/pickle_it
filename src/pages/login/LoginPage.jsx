import React, { useState } from 'react'
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router';

function LoginPage() {

  const nav = useNavigate();
  const [username, setUsername]   = useState('');
  const [password, setPassword]   = useState('');
  const [loading, setLoading]     = useState(false);

  const handleLogin = async(e) =>{
    e.preventDefault();
    setLoading(true);
    //브랜치 연습

    // 1. 아이디로 이메일 조회
    const { data: profile, error: findError } = await supabase
      .from('profiles')
      .select('email')
      .eq('username', username)
      .single();

    if (!profile || findError) {
      alert('존재하지 않는 아이디입니다.');
      setLoading(false);
      return;
    } 

    const {error : signInError} = await supabase.auth.signInWithPassword({
      email : profile.email,
      password
    });

    if(signInError) { 
      alert('비밀번호가 일치하지 않습니다.');
      setLoading(false);
      return;
    }

    nav('/',{replace:false});

  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button onClick={()=>nav('/signup')}>회원가입</button>
        <button type="submit" disabled={loading}>
          {loading ? '로그인 중...' : '로그인'}
        </button>
      </form>
    </div>
  )
}

export default LoginPage