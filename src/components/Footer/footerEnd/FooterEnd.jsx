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
                    p.
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default FooterEnd
