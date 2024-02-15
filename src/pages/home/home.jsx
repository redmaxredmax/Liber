import React from 'react'
import { MainLayout } from '../../layout'
import { HeroBanner } from '../../layout/header/components/hero-banner'
import { audioData, serviceCardData } from '../../data'
import { ServiceCard } from '../../components/cards/service-card'
import { partsData } from '../../data'
import "./home.scss"
import { Parts } from '../../components/cards/parts-card/parts'
import btn from "/public/added_slider.svg"
import { addedData } from '../../data'
import { Added } from '../../components/added/added'

export const Home = () => {
  return (
    <div>
      <MainLayout>
        <section className='container hero__container'>
          <div className="hero__wrapper">
            <h2 className='hero__title'>
              Кўп ўқилаётганлар
            </h2>
            <div className='hero__banner'>
              <HeroBanner />
            </div>

          </div>
          <div className="hero__card">
            <h3 className='card__title'>Китоб ўқишни ёқтирасизми?</h3>
            <p className='card__text'>
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <button className='card__btn'>
              Обуна бўлиш
            </button>
          </div>
        </section>
        <section className='service'>
          <div className="container service__container">
            {serviceCardData.map((item) => <ServiceCard {...item} />
            )}
          </div>
        </section>
        <section className='parts'>
          <div className="parts__container container">
            <h2 className='parts__title'>Рукнлар</h2>
            <div className="parts__wrapper">
              {partsData.map((item) =>
                <Parts img={item.img} name={item.name} />
              )}
            </div>
          </div>
        </section>
        <section className='added'>
          <div className="added__container container">
            <div className="added__box">
              <h2 className='added__title'>Янги қўшилганлар</h2>
              <img src={btn} alt="img" />
            </div>
            <div className="added__block">
              {addedData.map((item) => <Added img={item.img} name={item.name} text={item.text} />
              )}
            </div>
          </div>
        </section>
        <section className='audio'>
          <div className="container audio__container">
            <div className="added__box">
              <h2 className='added__title'>
                Аудио китоблар
              </h2>
              <img src={btn} alt="img" />
            </div>
            <div className="added__block">
              {audioData.map((item) => <Added img={item.img} name={item.name} text={item.text} />
              )}
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}
