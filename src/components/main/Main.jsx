
import React from 'react'
import Skitka from './skitka/Skitka'
import "../main/main.scss"
import Main_and from './main_and/Main_and'
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="main_skitka">
            <Skitka />
          </div>
          <div className="main_box">
            <div className="big_cards">
              <h2 className="main_box-title">
                Наши услуги
              </h2>
              <div className="main_box-cards">
                <div className="main_card-1">
                  <img src="/public/8.png" alt="" />
                  <h2 className="card_title1">
                    Доставляем авто в любую точку Москвы
                  </h2>
                </div>
                <div className="main_card-1">
                  <img src="/public/9.png" alt="" />
                  <h2 className="card_title2">
                    Аренда авто с личным водителем
                  </h2>
                </div>
                <div className="main_card-1">
                  <img src="/public/10.png" alt="" />
                  <h2 className="card_title3">
                    Водитель на подмену
                  </h2>
                </div>
              </div>
              <h2 className="zakazat">
                6 причин заказат аренду авто в  DizRental
              </h2>
              <div className="zakazat_card_box">
                <div className="zakazat_card1">
                  <div className="card_small1">
                    <div className="dizrental_card">
                      <img src="/public/smallImg1.png" alt="" className="dizrenatal_img" />
                      <div className="dizrental_text_card">
                        <h3 className="dizrental_title">
                          Страховка
                        </h3>
                        <p className="dizrental_text">
                          Все наши автомобили застрахованы по ОСАГО И КАСКО
                        </p>
                      </div>
                    </div>
                    <div className="dizrental_card">
                      <img src="/public/smallImg2.png" alt="" className="dizrenatal_img" />
                      <div className="dizrental_text_card">
                        <h3 className="dizrental_title">
                        Ценовая политика
                        </h3>
                        <p className="dizrental_text">
                        Всегда доступные цены и приятные бонусы постоянным клиентам
                        </p>
                      </div>
                    </div>
                    <div className="dizrental_card">
                      <img src="/public/smallImg3.png" alt="" className="dizrenatal_img" />
                      <div className="dizrental_text_card">
                        <h3 className="dizrental_title">
                        Автопарк
                        </h3>
                        <p className="dizrental_text">
                        Весь автопарк в отличном состоянии 
                        и всегда пополняется новыми моделями
                        </p>
                      </div>
                    </div>


                  
                  </div>
                  <div className="card_small2">
                  <div className="dizrental_card">
                      <img src="/public/smallImg2.png" alt="" className="dizrenatal_img" />
                      <div className="dizrental_text_card">
                        <h3 className="dizrental_title">
                        Ценовая политика
                        </h3>
                        <p className="dizrental_text">
                        Всегда доступные цены и приятные бонусы постоянным клиентам
                        </p>
                      </div>
                    </div>
                    <div className="dizrental_card">
                      <img src="/public/smallImg4.png" alt="" className="dizrenatal_img" />
                      <div className="dizrental_text_card">
                        <h3 className="dizrental_title">
                        Оплата
                        </h3>
                        <p className="dizrental_text">
                        Любая удобная для вас форма оплаты (нал/безнал, банковский перевод)
                        </p>
                      </div>
                    </div>
                    <div className="dizrental_card">
                      <img src="/public/smallImg5.png" alt="" className="dizrenatal_img" />
                      <div className="dizrental_text_card">
                        <h3 className="dizrental_title">
                        Скорость
                        </h3>
                        <p className="dizrental_text">
                        Оформление аренды любого авто в течении не более 15 минут
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_and">
          <Main_and />
        </div>
      </div>
    </>
  )
}

export default Main
