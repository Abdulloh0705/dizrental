import React from 'react'
import '../input/input.scss'
const Input = () => {
    return (
        <>
            <div className="input">
                <div className="container">
                    <div className="input_box">
                        <h2 className="input_theme">
                            Арендовать авто прямо сейчас!
                        </h2>
                        <div className="title-input">
                            <div className="title_text" data-aos="fade-down-right">
                                <p className="text1">
                                    Dizrental в Москве предлагает широкий выбор моделей от
                                    ведущих производителей, таких как Mercedes, BMW, Audi .
                                    Клиенты могут выбирать между спортивными автомобилями,
                                    роскошными седанами или эксклюзивными внедорожниками,
                                    чтобы насладиться комфортом и эстетикой этих превосходных
                                    машин.
                                </p>
                                <p className="text2">
                                    Благодаря услугам аренды, каждый желающий
                                    может ощутить себя владельцем такого
                                    автомобиля на несколько дней или даже
                                    на несколько часов, без необходимости
                                    покупки и обслуживания.
                                </p>
                            </div>
                            <div className="inputs" data-aos="fade-down-left">
                                <input type="your name"
                                placeholder='your name'
                                className="name" />
                                <input type="your name"
                                placeholder='+7 (916) 123-45-67'
                                className="name" />
                                <button className="kitob">
                                Забронировать
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input

