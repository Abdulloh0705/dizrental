import React from 'react'
import '../footerEnd/footerEnd.scss'
const FooterEnd = () => {
  return (
    <>
      <div className="footer_end">
        <div className="container">
          <div className="footer_end_box">
            <div className="footer_end_big-card1">
              <img src="/public/1.svg" alt="" className="big-card1_img" />
              <div className="footer_end_card1-call">
                <div className="footer_end_card1-call2">
                  <a href="tel:+7 (499) 110-20-47" className="footer_end_call">
                    +7 (499) 110-20-47
                  </a>
                  <p className="footer_end_call-text">
                    Рабочие часы: с 10:00 до 20:00
                  </p>

                </div>
                <a href="tel:+7 (499) 110-20-47" className="footer_end_call-btn">
                  Заказать звонок
                </a>
              </div>
              <p className="footer_end_card1-text1">г. Москва, Автомобильный проезд, д.3 стр.5</p>
              <p className="footer_end_card1-text1">info@dizrental.ru</p>
            </div>
            <div className="footer_end_big-card2">
              <div className="footer_end_small_card2-link">
                <div className="card_links1">
                  <h3 className="card_links1-title">Клиентам</h3>
                  <ul>
                    <li className="card_links">
                      <a href="" className="card_link">О нас</a>
                      <a href="" className="card_link">Условия</a>
                      <a href="" className="card_link">Отзывы</a>
                      <a href="" className="card_link">Статьи</a>
                      <a href="" className="card_link">Контакты</a>
                    </li>
                  </ul>
                </div>
                <div className="card_links1">
                  <h3 className="card_links1-title">Автопарк</h3>
                  <ul>
                    <li className="card_links">
                      <a href="" className="card_link">Внедорожники</a>
                      <a href="" className="card_link">СпортКар</a>
                      <a href="" className="card_link">Бизнес</a>
                      <a href="" className="card_link">Премиум</a>
                      <a href="" className="card_link">Комфорт</a>
                    </li>
                  </ul>
                </div>
                <div className="card_links1">
                  <h3 className="card_links1-title">Мероприятие</h3>
                  <ul>
                    <li className="card_links">
                      <a href="" className="card_link">На свадьбу</a>
                      <a href="" className="card_link">На фотосессию</a>
                      <a href="" className="card_link">На видеосъемку</a>
                      <a href="" className="card_link">На день рождения</a>
                    </li>
                  </ul>
                </div>
               
              </div>
              <div className="footer_end-line"></div>
              <div className="footer_end-the-end">
                <p className="the-end_title">
                © 2023 DizRental
                </p>
                <p className="the-end_text">
                Политика конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterEnd
