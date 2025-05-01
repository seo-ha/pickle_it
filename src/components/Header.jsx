import React from 'react'
import { Link } from 'react-router'
import { useThemeToggleStore } from '../store/themeStore';
import { DarkToggleButton, HeaderStyle } from '../styles/layout';



function Header() {

  const {toggleTheme, isDark} = useThemeToggleStore();

  return (
    <HeaderStyle>
      <Link to={'/'} className='header-logo'>피클<span>잇</span></Link>

      <span>편집</span>
      <DarkToggleButton onClick={toggleTheme}>{isDark ? "🌝" : "🌚"}</DarkToggleButton>
    </HeaderStyle>
  )
}

export default Header