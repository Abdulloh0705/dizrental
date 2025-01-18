import React from 'react'
import '../skitka/skitka.scss'
const Skitka = () => {
    return (
        <>
            <div className="skitka">
                <div className="container">
                    <div className="skitka_box">
                        <div className="skitka_esse">
                            <h2 className="skitka_title">
                                Скидки и акции
                            </h2>
                            <p className="skitka_text1">
                                Аренда элитных автомобилей в Москве
                                предоставляет возможность воплотить
                                мечты в реальность и создать
                                незабываемые впечатления. Будь
                                то эксклюзивная свадьба, впечатляющий
                                деловой приезд или просто желание
                                испытать роскошь и элегантность
                                автомобиля премиум-класса,
                                эта услуга открывает двери
                                в мир высокого стиля и комфорта.
                            </p>
                            <p className="skitka_text2">
                                Аренда элитных автомобилей в Москве -
                                это возможность позволить себе
                                немного роскоши и создать
                                незабываемые моменты, которые
                                останутся в памяти надолго.
                            </p>
                        </div>
                        <div className="skitka_card">
                            <img src="/public/7.png" alt="" />
                            <div className="skitka_card-text">
                                <h3 className="card_title">
                                    Скидки постоянным клиентам
                                </h3>
                                <p className="card_text">
                                    Постоянным клиентам мы
                                    предоставляем скидки до
                                    30% при повторной аренде.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skitka
