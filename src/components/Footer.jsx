import React, { useContext } from 'react'
import { Link } from 'react-router'
import { FooterStyle } from '../styles/layout';
import { MainContext } from '../App';

const Footer = () => {

  const {setPopup} = useContext(MainContext)

  return (
    <FooterStyle>
      <Link className={`nav-btn`}>편집</Link>
      <Link className={`nav-btn`}>달력</Link>
      <button className={`nav-btn`} onClick={()=>setPopup(true)}>+</button>
      <Link className={`nav-btn`}>게시판</Link>
      <Link className={`nav-btn`}>마이</Link>
    </FooterStyle>
  )
}

export default Footer