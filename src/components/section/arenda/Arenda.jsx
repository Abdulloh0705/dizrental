import React from 'react'
import '../arenda/arenda.scss'
const Arenda = () => {
  return (
    <>
      <div className="arenda">
        <div className="container">
          <div className="arenda_box">
            <div className="arenda_title">
              <h2 className="title">
                Аренда премиум автомобилей для мероприятий
              </h2>
            </div>
            <div className="arenda_cards">

              <div className="card_1" data-aos="fade-right">

                <div className="card_img">
                  <img src="/public/4.png" alt="" className="card_img1" />
                </div>
                <div className="card_esse">
                  <h3 className="card_title1">
                    Аренда авто на свадьбу
                  </h3>
                  <p className="card_text1">
                    Предоставляем аренду премиальных автомобилей для свадьбы с водителем
                  </p>
                </div>
              </div>
              <div className="card_2" data-aos="fade-left">
                <div className="card_img">
                  <img src="/public/5.png" alt="" className="card_img1" />
                </div>
                <div className="card_esse">
                  <h3 className="card_title2">
                    Аренда авто для фотосессий
                  </h3>
                  <p className="card_text2">
                    Предоставляем аренду премиальных автомобилей для фотосессий или видеосъемки
                  </p>
                </div>

              </div>
            </div>
            <div className="rule_box">
              <div className="rule_title">
                <h2 className="rule_title-title">
                  3 шага, чтобы арендовать авто
                </h2>
              </div>
              <div className="rule_cards"  data-aos="zoom-in-up">
                <div className="rule_card1">
                  <div className="rule_card-img">
                    <img src="/public/rule1.png" alt="" className="rule_img" />
                    <p className="rule_img-title">
                      1
                    </p>
                  </div>
                  <div className="rule_card-text">
                    <h3 className="rule_card-title">
                    Подать заявку
                    </h3>
                    <p className="rule_card-text">
                    Оформляете заявку на сайте, 
                    связываетесь по телефону 
                    или в мессенджерах и 
                    бронируете автомобиль
                    </p>
                  </div>
                </div>
                <div className="rule_card1">
                  <div className="rule_card-img">
                    <img src="/public/rule2.png" alt="" className="rule_img" />
                    <p className="rule_img-title">
                      2
                    </p>
                  </div>
                  <div className="rule_card-text">
                    <h3 className="rule_card-title">
                    Договор
                    </h3>
                    <p className="rule_card-text">
                    Подписываете договор на 
                    аренду автомобиля, 
                    вносите оплату и 
                    страховой депозит
                    </p>
                  </div>
                </div>
                <div className="rule_card1" >
                  <div className="rule_card-img">
                    <img src="/public/rule3.png" alt="" className="rule_img" />
                    <p className="rule_img-title">
                      3
                    </p>
                  </div>
                  <div className="rule_card-text">
                    <h3 className="rule_card-title">
                    Получение
                    </h3>
                    <p className="rule_card-text">
                    Забираете авто в нашем салоне или мы можем доставить в любую точку Москвы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Arenda
