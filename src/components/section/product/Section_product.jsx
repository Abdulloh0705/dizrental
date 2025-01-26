import React, { useEffect } from 'react'
import '../product/product.scss'
import AOS from 'aos';

const Section_product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,    
    });
  }, []);
  return (
    <>
      <div className="cards1">
        <div className="cards">
        <p className="new">
            Москва
          </p>
        <div className="card" >
          
          <img src="./public/cars/1.png" alt="" className="card1_img1"  data-aos="fade-up-right"/>
          <h2 className="section_title" data-aos="fade-up-right">
            BMW X2, 2021
          </h2>
          <div className="card_info" data-aos="fade-up-right">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
        <div className="cards">
        <p className="new">
        Дубай
          </p>
        <div className="card">
          
          <img src="./public/cars/2.png" alt="" className="card1_img1" data-aos="fade-up"
     data-aos-duration="3000"/>
          <h2 className="section_title" data-aos="fade-up"
     data-aos-duration="3000">
          Kia Sportage, 2022
          </h2>
          <div className="card_info" data-aos="fade-up"
     data-aos-duration="3000">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
        <div className="cards">
        <p className="new">
            Москва
          </p>
        <div className="card">
          
          <img src="./public/cars/3.png" alt="" className="card1_img1" data-aos="fade-up-left"/>
          <h2 className="section_title" data-aos="fade-up-left">
          Lexus IS, 2018
          </h2>
          <div className="card_info" data-aos="fade-up-left">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
      </div>
      <div className="cards1">
        <div className="cards">
        <p className="new">
        Дубай
          </p>
        <div className="card">
          
          <img src="./public/cars/4.png" alt="" className="card1_img1" data-aos="fade-up-right"/>
          <h2 className="section_title" data-aos="fade-up-right">
          Jaguar XF,  2012
          </h2>
          <div className="card_info" data-aos="fade-up-right">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
        <div className="cards">
        <p className="new">
        Дубай
          </p>
        <div className="card">
          
          <img src="./public/cars/5.png" alt="" className="card1_img1" data-aos="fade-up"
     data-aos-duration="3000"/>
          <h2 className="section_title" data-aos="fade-up"
     data-aos-duration="3000">
          Toyota RAV4,  2017
          </h2>
          <div className="card_info" data-aos="fade-up"
     data-aos-duration="3000">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
        <div className="cards">
        <p className="new">
            Москва
          </p>
        <div className="card">
          
          <img src="./public/cars/6.png" alt="" className="card1_img1" data-aos="fade-up-left"/>
          <h2 className="section_title" data-aos="fade-up-left">
          2021 Mazda 6, 2021
          </h2>
          <div className="card_info" data-aos="fade-up-left">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
      </div>
      <div className="cards1">
      <div className="cards">
        <p className="new">
            Москва
          </p>
        <div className="card">
          
          <img src="./public/cars/3.png" alt="" className="card1_img1" data-aos="fade-up-right"/>
          <h2 className="section_title" data-aos="fade-up-right">
          Lexus IS, 2018
          </h2>
          <div className="card_info" data-aos="fade-up-right">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
        <div className="cards">
        <p className="new">
        Дубай
          </p>
        <div className="card">
          
          <img src="./public/cars/2.png" alt="" className="card1_img1" data-aos="fade-up"
     data-aos-duration="3000" />
          <h2 className="section_title">
          Kia Sportage, 2022
          </h2>
          <div className="card_info">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
        <div className="cards">
        <p className="new">
            Москва
          </p>
        <div className="card">
          
          <img src="./public/cars/1.png" alt="" className="card1_img1" data-aos="fade-up-left"/>
          <h2 className="section_title" data-aos="fade-up-left">
            BMW X2, 2021
          </h2>
          <div className="card_info" data-aos="fade-up-left">
            <img src="./public/moto.png" alt="" className="moto" />
            <p className="info_title1">2,3 л/бензин</p>
            <img src="./public/balon.png" alt="" className="balon" />
            <p className="info_title2">317 л.с.</p>
          </div>
          <div className="line"></div>
         <div className="price">
         <button className="section_card-book">
            Забронировать
          </button>
          <p className="ot">
            от
          </p>
          <h2 className="section_card-price">
            7.150
          </h2>
          <p className="rubcut">
            руб/сут
          </p>
         </div>
        </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Section_product
