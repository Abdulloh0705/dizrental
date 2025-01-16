import React from 'react'
import "./header.scss";
import Aders from '../adres/Aders';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_box">
            <div className="header_esse">
              <h2 className="header_title">
                Аренда авто в Москве
              </h2>
              <p className="header_text">Прокат или аренда автомобиля с водителем и без</p>
            </div>
          </div>
          <div className="header__line"></div>
          <div className="header_info">
            <div className="header_info-info">
              <span className="info_num">
                1
              </span>
              <p className="info_text">
                Большой парк
                автомобилей в наличии
              </p>
            </div>
            <div className="header_info-info">
              <span className="info_num">
                2
              </span>
              <p className="info_text">
                Доставка авто
                до вашей геолокации
              </p>
            </div>
            <div className="header_info-info">
              <span className="info_num">
                3
              </span>
              <p className="info_text">
                Скидки постоянным
                клиентам
              </p>
            </div>
            <div className="header_info-info">
              <span className="info_num">
                4
              </span>
              <p className="info_text">
                Любая форма
                оплаты
              </p>
            </div>
            <div className="header_info-info">
              <span className="info_num">
                5
              </span>
              <p className="info_text">
                Выгодные цены
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Header