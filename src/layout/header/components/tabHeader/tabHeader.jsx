import React from 'react'
import { tabHeaderData } from '../../headerData'
import style from "./tab.module.scss"

export const TabHeader = () => {
  return (
    <div>
        <ul className={style.list}>
           {tabHeaderData.map((item)=>
           <li className={style.item} key={item.id}>
            <a className={style.link} href={item.path}>{item.name}</a>
           </li>
           )} 
        </ul><br />
    </div>
  )
}
