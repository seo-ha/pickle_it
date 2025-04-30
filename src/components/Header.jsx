import React from 'react'
import { Link } from 'react-router'
import style from '../styles/header.module.scss'

function Header() {
  return (
    <header>
      <Link to={'/'} className={style.header__logo}>피클<span>잇</span></Link>

      <nav>
        <ul className={style.nav_gnb}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header