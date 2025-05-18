import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { FooterStyle } from '../styles/layout';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { toogleBooleanStore } from '../store/toogleBooleanStore';

const Footer = () => {

  const {setPopup} = toogleBooleanStore()
  const location = useLocation().pathname;
  const nav = useNavigate()

  const handleLocation = () =>{
    if(location === '/') {
      setPopup(true)
    } else {
      nav('/',{replace: true})
    }
  }

  return (
    <FooterStyle>
      <Link className={`nav-btn`}>편집</Link>
      <Link className={`nav-btn`}>달력</Link>
      <button className={`nav-btn`} onClick={()=>handleLocation()}>
        {location === '/' ? <FaPlus className='ico_plus'/> : <AiOutlineHome className='ico_home'/>}
      </button>
      <Link className={`nav-btn`}>게시판</Link>
      <Link className={`nav-btn`}>마이</Link>
    </FooterStyle>
  )
}

export default Footer