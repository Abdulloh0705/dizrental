import React from 'react'
import './adres.scss'
import { IoCalendarClearOutline } from 'react-icons/io5'
const Aders = () => {
    return (
        <>
            <div className="adres">
                <div className="container">
                    <div className="adres_box">
                        <h2 className="adres_title">
                            Заказать аренду online
                        </h2>
                        <div className="adres_box-box">

                            <div className="adres_input">
                                <div className="nachalo">
                                    <button className="input_btn">
                                        <IoCalendarClearOutline />
                                    </button>
                                    <input className="input_nachalo"
                                        type="text"
                                        placeholder='Начало аренды'
                                    />
                                </div>
                                <div className="zavershena">
                                    <button className="input_btn">
                                        <IoCalendarClearOutline />
                                    </button>
                                    <input className="input_zavershena"
                                        type="text"
                                        placeholder='Завершение аренды'
                                    />
                                </div>
                            </div>
                            <div className="adres_chek">
                                <div className="cheks_1">
                                    <div className="cheks">
                                        <input type="checkbox" />
                                        <p className="chek_text">
                                            Внедорожник
                                        </p>
                                    </div>
                                    <div className="cheks">
                                        <input type="checkbox" />
                                        <p className="chek_text">
                                            Бизнес
                                        </p>
                                    </div>
                                    <div className="cheks">
                                        <input type="checkbox" />
                                        <p className="chek_text">
                                            Премиум
                                        </p>
                                    </div>
                                </div>
                                <div className="cheks_2">
                                    <div className="cheks">
                                        <input type="checkbox" />
                                        <p className="chek_text">
                                            Спорт
                                        </p>
                                    </div>
                                    <div className="cheks">
                                        <input type="checkbox" />
                                        <p className="chek_text">
                                            Спорткар
                                        </p>
                                    </div>
                                    <div className="cheks">
                                        <input type="checkbox" />
                                        <p className="chek_text">
                                            Внедорожник
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <button className="chek_btn">
                            Найти варианты
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aders
