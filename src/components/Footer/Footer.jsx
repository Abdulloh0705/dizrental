import React from 'react'

import "./footer.scss"
import FooterEnd from './footerEnd/FooterEnd'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_box">
            <div className="footer_card1">
              <img src="/public/14.png" alt="" className="footer_card1-img" />

            </div>
            <div className="footer_card2">
              <div className="footer_card2-all">
                <div className="footer_card2-esse">
                  <h2 className="footer_crad2-title">
                    Остались вопросы?
                  </h2>
                  <p className="footer_card2-text">
                    Менеджер свяжется с
                    вами в течение 15 минут
                    и сможет ответить на
                    все интересующие вопросы
                  </p>
                  <a href="tel:+7 (499) 110-20-47" className="footer_card2-number">
                    +7 (499) 110-20-47
                  </a>
                </div>
                <div className="footer_card2-inputBox">
                  <input
                    type="text"
                    placeholder="your name"
                    className="card2-input1" />
                  <input
                    type="text"
                    placeholder="your call number"
                    className="card2-input2" />
                  <bottom className="card2-bottom">
                    Забронировать
                  </bottom>
                  <div className="card2_input-checbox">
                    <input
                      type="checkbox"
                      className="input3-checkbox" />
                    <p className="input3-checkbox_text">
                      Отправляя форму, я соглашаюсь
                      с политикой обработки персональных данных
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <FooterEnd/>
        </div>
      </div>
    </>
  )
}

export default Footer
