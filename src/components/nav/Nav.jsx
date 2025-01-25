import React, { useEffect, useState } from 'react';
import "./nav.scss";
import { LuPhoneCall } from 'react-icons/lu';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaCar } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
    const [activeLocation, setActiveLocation] = useState('Москва');

    const handleLocationClick = (event, location) => {
        event.preventDefault();
        setActiveLocation(location);
    };
    useEffect(() => {
        AOS.init({
          duration: 1300, // Animatsiya davomiyligi (ms)
          once: true,     // Faqat bir marta animatsiya qilish
        });
      }, []);

    return (
        <div className='nav'>
            <div className="container">
                <div className="nav__box">
                    <div className="nav__logo-box" data-aos="fade-right">
                        <a href="#" className="nav__logo"> <img src="1.svg" alt="logo" /> </a>
                        <ul className="nav__logo-list">
                            {['Москва', 'Дубай'].map((location) => (
                                <li key={location}>
                                    <a href="#" className={`nav__logo-link ${activeLocation === location ? 'active' : ''}`} onClick={(e) => handleLocationClick(e, location)}>
                                        <img src={activeLocation === location ? "main.svg" : "main-2.svg"} alt={location} /> {location}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="nav__list" data-aos="flip-up">
                        <li className="nav__item"><a href="#Подобрать авто" className="nav__link">Подобрать авто</a></li>
                        <li className="nav__item"><a href="#Условия" className="nav__link">Условия</a></li>
                        <li className="nav__item"><a href="#Цены" className="nav__link">Цены</a></li>
                        <li className="nav__item"><a href="#О нас" className="nav__link">О нас</a></li>
                        <li className="nav__item"><a href="#Контакты" className="nav__link">Контакты</a></li>
                    </ul>
                    <div className="nav__box-extra" data-aos="fade-left">
                        <div className="nav__icon-box">
                            <a href="#" className="icon_call">
                                <LuPhoneCall />
                            </a>
                            <a target="_blank" href="https://t.me/izana0705 ,https://t.me/freemustafa " className="icon_teg">
                                <BiLogoTelegram />
                            </a>
                        </div>
                        <div className="call">

                            <a href="tel:+7 (499) 110-20-47" className="call_link">+7 (499) 110-20-47</a>
                            <a href="tel:+7 (499) 110-20-47" className='teg_link'>Заказать звонок</a>
                        </div>
                        <div className="info_prof">
                            <button className="info"><FaCar /></button>
                            <button className="prof"><CgProfile /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
