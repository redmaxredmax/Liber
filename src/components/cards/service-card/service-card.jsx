import React from 'react'
import style from "./service.module.scss"
export const ServiceCard = ({ img, title, text, id }) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img className={style.img} src={img} alt="img" />
      </div>
      <div >
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  )
}
