import React from 'react'
import '../arenda/arenda.scss'
const Arenda = () => {
  return (
    <>
      <div className="arenda">
        <div className="container">
        <h2 className="arenda_title">
                Аренда премиум автомобилей для мероприятий
                </h2>
            <div className="arenda_box">
                
                <div className="arenda_cards">
               
                    <div className="arenda_cards-card1">
                        <img className="arenda_img" src="/public/4.png" alt="" />
                       <div className="title-text">
                       <h3 className="arenda_cards-title">
                        Аренда авто на свадьбу
                        </h3>
                        <p className="arenda_cards-text">
                        Предоставляем аренду премиальных автомобилей для свадьбы с водителем
                        </p>
                       </div>
                    </div>
                    <div className="arenda_cards-card2">
                        <img className="arenda_img" src="/public/5.png" alt="" />
                       <div className="title-text">
                       <h3 className="arenda_cards-title">
                        Аренда авто на свадьбу
                        </h3>
                        <p className="arenda_cards-text">
                        Предоставляем аренду премиальных автомобилей для свадьбы с водителем
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
