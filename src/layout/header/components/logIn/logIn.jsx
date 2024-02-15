import React from 'react'
import { headerLogInData } from '../../headerData'
import style from "./login.module.scss"

export const LogIn = () => {
    return (
        <>
            {headerLogInData.map((item) =>
                <div className={style.wrapper}>
                    <div className={style.box}>
                        <img className={style.flag} src={item.img} alt="flag" />
                        <select className={style.sel}>
                            <option value={item.lang}>{item.lang}</option>
                        </select>
                    </div>
                    <button className={style.btn}>
                        <img className={style.btn_icon} src={item.icon} alt="icon" />
                        <p className={style.text}>{item.text}</p>
                    </button>
                </div>
            )}

        </>
    )
}
