import React from 'react'
import style from "./added.module.scss"
import rating from "/public/added_rating.svg"
export const Added = ({img, name, id, text}) => {
  return (
    <div className={style.wrapper} key={id}>
        <img className={style.img} src={img} alt="img" />
        <h3 className={style.title}>{name}</h3>
        <p className={style.text}>{text}</p>
        <img className={style.rating} src={rating} alt="img" />
    </div>
  )
}
