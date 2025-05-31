import React from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate } from 'react-router'
import { DarkToggleButton } from '../../styles/layout'
import { useThemeToggleStore } from '../../store/themeStore'

function Mypage() {

  const nav = useNavigate()
  const {toggleTheme, isDark} = useThemeToggleStore();

  const handleLogout = async()=>{
    const {error} = await supabase.auth.signOut()
    if (error) {
      console.error('로그아웃 실패:', error.message);
      alert('로그아웃에 실패했습니다.');
    } else {
      alert('로그아웃 되었습니다.');
      nav('/login',{replace:false})
    }
  }

  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
      <DarkToggleButton onClick={toggleTheme}>{isDark ? "🌝" : "🌚"}</DarkToggleButton>
    </div>
  )
}

export default Mypage