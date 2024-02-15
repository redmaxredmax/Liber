import React from 'react'
import style from "./list.module.scss"
export const List = ({ id, title, text1, text2, text3, img1, img2 }) => {
    return (
        <div className={style.wrapper}>
            <h3 className={style.title}>{title}</h3>
            <a href='#' className={style.text}>{text1}</a>
            <a href='#' className={style.text}>{text2}</a>
            <a href='#' className={style.text}>{text3}</a>
            <div className={style.block}>
                <img className={style.img} src={img1} alt="" />
                <img className={style.img} src={img2} alt="" />
            </div>
        </div>
    )
}
