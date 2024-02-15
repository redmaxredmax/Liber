import React from 'react'
import logo from "/public/logo.svg"
import menu from "/public/menu.svg"
import { Search } from './components/search'
import "./header.scss"
import { LogIn } from './components/logIn'
import { TabHeader } from './components/tabHeader/tabHeader'



export const Header = () => {
  return (
    <>
      <div className='container header__container'>
        <a href="#">
          <img className='header__logo' src={logo} alt="icon" />
        </a>
        <div className='header__search'>
          <Search />
        </div>
        <div className="header__logIn">
          <LogIn />
        </div>
      </div><br />
      <div className='container tabHeader__container'>
        <TabHeader/>
      </div>
      </>
  )
}
