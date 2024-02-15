import React from 'react'
import { footerData } from '../../data'
import { List } from './list'

export const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__block">
          {footerData.map((item)=><List {...item}/>)}
        </div>
      </div>
    </footer>
  )
}
