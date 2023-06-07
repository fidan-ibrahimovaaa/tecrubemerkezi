import React from 'react'
import { programsData } from '../programsData'
import { successData } from '../successData'
import video from '../images/karyera-video.mp4'
import Success from './Success'

import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import AOS from "aos";
import "aos/dist/aos.css";
import karyera from '../images/karyeraisehazirliq.jpg'
import blog1 from '../images/blog1.jpeg';
import blog2 from '../images/blog2.jpeg';
import blog3 from '../images/blog3.jpeg';
import insta from '../images/instagram.png'
import linkedin from '../images/linkedinn.png'
import facebook from '../images/facebook.png'
import { partnerData } from '../partnerData'
import upphoto from '../images/upphoto.png'

const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,



    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  AOS.init();


  return (
    <>

      <header className='header'>
        <div className="head-text" data-aos="zoom-out-right" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h1><span>Təcrübən yoxdur?</span><br />İş tapa bilmirsən?</h1>
          <p>İşə bizimlə hazırlaş!</p>
        </div>
        <div data-aos="zoom-out-left" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="600" className="head-photo">
          <img src={upphoto} alt="sekil" />
        </div>
      </header>


      <div className="partners-center">

        <div data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" className="partner">
          {partnerData.map((partner, i) => (
            <div className="slide" key={partner.id}> {partner.image} </div>
          ))}


        </div>
       
      </div>

      <section className='advantages'>
        <h2 data-aos="fade-right"> <span> "Karyera Və İşə Hazırlıq Mərkəzi"-nin </span>  üstünlükləri ilə ilk iş təcrübələrinizə bizimlə başlayın! </h2>
        <div className="benefits" data-aos="zoom-out-up">
          <div className="user benefit">
            <i className="fa-solid fa-user-group"></i>
            <h4>Real iş mühiti</h4>
            <div className="adv-main">
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Səmimi kollektivlə işləmək imkanı</p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Yerinə yetirilən təlimlər,seminarlarda,tapşırıqlarda iştirak etmək imkanı</p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Həftə sonu mərkəzdə keçirilən oyunlarda kollektivliklə birlikdə əylənmək imkanı</p>
              </div>
            </div>
            <Link to='/userinterface'>Ətraflı</Link>
          </div>

          <div className="management benefit">
          <i class="fa-solid fa-rectangle-list"></i>
            <h4>Rəsmi Təcrübə Proqramı</h4>
            <div className="adv-main">
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Real iş mühitində tam və rəsmi təcrübə proqramı sistemi</p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Təcrübə ilə  bağlı dəqiq analizlər aparmaq imkanı</p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Bilik və bacarıqları göstərmək şansı</p>
              </div>
            </div>
            <Link to='/controlpanel'>Ətraflı</Link>
          </div>

          <div className="operator benefit">
          <i class="fa-solid fa-briefcase"></i>
            <h4>İşə qəbul şansı</h4>
            <div className="adv-main">
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Aktiv təcrübəçilərin işlə təmin olunmaq imkanı</p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Təcrübə Mərkəzinin təşkil etdiyi təcrübə proqramı ərzində rəsmi diplom əldə etmək imkanı</p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Təcrübə müddəti ərzində iş rejimində çalışmaq imkanı</p>
              </div>
            </div>
            <Link to='/operatorpanel'>Ətraflı</Link>
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="program-heading">
          <h2>TƏCRÜBƏ PROQRAMLARI</h2>
          <button><Link to='/prog'>Bütün təcrübə elanları</Link></button>
        </div>
        <div className="program-wrapper">
          {programsData.map((program, i) => (
            <div className="program-container" key={program.id}>
              <div className='program-img' >{program.image}</div>
              <div className="program-body">
                <p className='program-title'>{program.title}</p>
                <p className='address'><i class="fa-sharp fa-solid fa-building"></i> {program.address}</p>
                <p className='location'><i class="fa-solid fa-location-dot"></i> {program.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-us">
        <h2 data-aos="fade-right">Nə əldə edəcəksiniz?</h2>
        <div className="why-us_body">

          <div data-aos="fade-right" data-aos-delay="300" className="why-us_text">
            <h4> İlk Iş Təcrübəsini bizimlə yaşayın! </h4>
            <div className="why-us_description">
              <p>- Real iş mühitində təcrübə;</p>
              <p>- Praktiki proqram;</p>
              <p>- Rəsmi Təcrübə Diplomu;</p>
              <p>- İşə qəbul şansı;</p>
              <p>- Mehriban kollektivlə möhtəşəm <br /><pre>təcrübə imkanı</pre></p>
            </div>
            <div className="why-us_btn">
              <a href="#">Ətraflı</a>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
          </div>

          <div className="why-us_img" data-aos="fade-left">
            <img src={karyera} alt="karyera" />
            <div className="rectangle"></div>
          </div>
        </div>
      </section>

      <section className="success">
        <div className="success-header">
          <h2>Nailiyyətlərimiz</h2>
        </div>

        <div className="success-card">
          <Slider {...settings} >

            {successData.map((success, index) => (
              <Success key={success.id} icon={success.icon} details={success.details} image={success.image} workplace={success.workplace} name={success.name} />

            ))}
          </Slider>
        </div>
      </section>

      <section className="blogs">
        <h2 data-aos="fade-right">Bloqlar</h2>
        <div className="packages" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <div className="package ">
            <div className="package-title">
              <img src={blog1} alt="" />
            </div>
            <div className="info-title">
              <p className='title'>
              Bu gün ofisimizdə Ulu Öndər Heydər Əliyevin 100 illik yubileyinə həsr etdiyimiz "Karyera planlaması" mövzusunda iş müsahibəsinə hazırlıq təlimi baş tutdu...
              </p>
            </div>
            <div className="package-main">
              <div className="details">
                <i class="fa-solid fa-calendar-days"></i>
                <p className="detail">15/05/2023</p>
              </div>
            </div>
          </div>

          <div className="package">
            <div className="package-title">
              <img src={blog2} alt="" />
            </div>
            <div className="info-title">
              <p className='title'>
              8-10 iyun tarixlərində “Baku Crystal Hall”da “Heydər Əliyev və Azərbaycan sahibkarlığı” mövzusunda keçiriləcək yerli şirkətlərin tanıtım sərgisində biz də varıq!...
              </p>
            </div>
            <div className="package-main">
              <div className="details">
                <i class="fa-solid fa-calendar-days"></i>
                <p className="detail">20/05/2023</p>
              </div>
            </div>
          </div>

          <div className="package">
            <div className="package-title">
              <img src={blog3} alt="" />
            </div>
            <div className="info-title">
              <p className='title'>
              Karyera və İşə Hazırlıq Mərkəzinin "Logitrans" şirkəti ilə birgə təşkil etdiyi "Logistika ixtisası üzrə inkişaf proqramı" uğurla başladı...
              </p>
            </div>
            <div className="package-main">
              <div className="details">
                <i class="fa-solid fa-calendar-days"></i>
                <p className="detail">02/05/2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-package">
          <Link to='/news'>Ətraflı</Link>
        </div>
      </section>


      <section className="promotion">
        <div className="promotion-main">
          <h2 data-aos="fade-right">İlk iş təcrübəniz bizdən!</h2>
          <p data-aos="fade-right">Sosial media hesablarımızdan faydalanın.</p>
          <div data-aos="zoom-out" data-aos-delay="300" className="prm-buttons">
            <a href="https://instagram.com/tecrubemerkezi.az?igshid=MzRlODBiNWFlZA=="><img src={insta} alt="insta"  className='insta'/></a>
            <a href="https://www.linkedin.com/in/karyera-v%C9%99-i%C5%9F%C9%99-haz%C4%B1rl%C4%B1q-m%C9%99rk%C9%99zi-041292226"><img className='linkedin' src={linkedin} alt="linkedin" /></a>
            <a href="https://www.facebook.com/tecrubemerkezi.az?mibextid=ZbWKwL"><img className='facebook' src={facebook} alt="facebook" /></a>

          </div>
        </div>
        <div className="promotion-video">
          <video src={video} width="750" height="500" controls loop muted autoPlay>
          </video>

        </div>
      </section>

    </>
  )
}

export default Home


