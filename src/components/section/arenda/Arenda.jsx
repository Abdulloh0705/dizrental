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

              <div className="card_1">

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
              <div className="card_2">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Arenda
