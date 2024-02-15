import React from 'react'
import { headerInputData } from '../../headerData'
import search from "/public/search.svg"
import menu from "/public/menu.svg"
import style from "./search.module.scss"
export const Search = () => {
    return (
        <div>
            {headerInputData.map((item) =>
                <div className={style.wrapper}>
                    <div className={style.box}>
                        <img className={style.menu_img} src={menu} alt="icon" />
                        <select className={style.sel}>
                            <option value={item.rukn}>{item.rukn}</option>
                        </select>
                    </div>
                    <form className={style.form}>
                        <input className={style.input} placeholder={item.text} type="text" />
                        <button className={style.search_btn}>
                            <img className={style.btn_img} src={search} alt="icon" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}
