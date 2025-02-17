import React, { useEffect } from "react";
import "./section.scss";
import Section_product from "./product/Section_product";
import Input from "./input/Input";
import Arenda from "./arenda/Arenda";
import { FaCarSide } from "react-icons/fa";
import Main from "../main/Main";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,    
    });
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section_box">
            <div className="section_theme">
              <h2 className="section_theme-title">Наш автопарк</h2>
              <button className="section_theme-btn">Смотреть все</button>
            </div>
            <div className="section_btns" data-aos="fade-right">
              <div className="section_btns-filtr">
              <FaCarSide />
                <p className="ection_btns-title">Внедорожники</p>
              </div>
              <div className="section_btns-filtr">
                <img className="filtr_img2" src="/public/filtr2.png" alt="" />
                <p className="ection_btns-title">Бизнес</p>
              </div>
              <div className="section_btns-filtr">
                <img className="filtr_img3" src="/public/filtr3.png" alt="" />
                <p className="ection_btns-title">Спорткар</p>
              </div>
              <div className="section_btns-filtr">
                <img className="filtr_img4" src="/public/filtr4.png" alt="" />
                <p className="ection_btns-title">Премиум</p>
              </div>
              <div className="section_btns-filtr">
                <img className="filtr_img5" src="/public/filtr5.png" alt="" />
                <p className="ection_btns-title">Комфорт</p>
              </div>
            </div>
            <div className="section_cards">
              <Section_product />
            </div>
            <div className="section_info" data-aos="zoom-in-up">
              <p className="section_info-text1">
                Москва известна своими величественными аллеями, роскошными
                торговыми центрами и впечатляющей архитектурой. В таком
                окружении неудивительно, что спрос на аренду элитных автомобилей
                в Москве растет с каждым годом.
              </p>
              <p className="section_info-text2">
                Эти роскошные автомобили стали неотъемлемой частью жизни
                успешных бизнесменов, звезд шоу-бизнеса и просто людей,
                стремящихся испытать неповторимые ощущения от комфорта и мощи.
              </p>
            </div>
          </div>
          <div className="section__inputs">
            <Input />
          </div>
          <div className="arenda">
            <Arenda />
            
          </div>
         
        </div>
      </div>
    
    </>
  );
};

export default Section;
