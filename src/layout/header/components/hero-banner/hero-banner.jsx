import React from 'react'
import style from "./banner.module.scss"
import { heroBannerData } from '../../../../data.js'

export const HeroBanner = () => {
  return (
    <div>
      <ul className={style.list}>
        {heroBannerData.map((item)=>
        <li className={style.item} key={item.id}>
          <img className={style.img} src={item.img} alt="img" />
          <p className={style.name}>{item.name}</p>
        </li>
        )}
      </ul>
    </div>
  )
}
