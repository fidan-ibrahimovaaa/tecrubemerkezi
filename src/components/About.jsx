import React from 'react'
import { partnerData } from '../partnerData'
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";
import office from '../images/office.jpeg'
import diplom from '../images/diplom.jpeg'
import team from '../images/team.jpg'


const About = () => {

  AOS.init();
  return (
    <>
      <section data-aos="zoom-in-left" className="about-img">
        <div className="img-container">
          <img src={team} alt="Team" />
        </div>
      </section>

      <section className="about_advantages">
        <h2 data-aos="zoom-in"> <span>Haqqımızda</span></h2>

        <div className="about_body">
          <div className="about_main">
            <h4 data-aos="fade-right">Bizimlə tanış olun!</h4>
            <div data-aos="fade-right" data-aos-delay="300" className="about_description">
              <p><b>Karyera və İşə Hazırlıq Mərkəzi</b> 9 Noyabr 2021-ci il tarixində fəaliyyətə başlayıb.<b>Mərkəz</b> bir müddət <b>"Təcrübə və Təqaüd Proqramları"</b>  brendi ilə fəaliyyətini davam etdirib.</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="300" className="about_description">
              <p><b>Karyera və İşə Hazırlıq Mərkəzi</b> tələbə və məzunlar üçün real iş mühitində təcrübə təşkil edir və gəncləri işə hazırlaşdırır. Ölkəmizdə ilk və rəqibsiz fəaliyyət göstərən layihənin məqsədi tələbə-gənclərin fərdi inkişafına, təcrübəli mütəxəssis kimi formalaşmasına dəstək olmaqdır.</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="400" className="about_description">
              <p> Proqram həmçinin müəssisələrin kadr potensialını zənginləşdirməkdən, dövlətimizə və cəmiyyətimizə faydalı olacaq mütəxəssislərin yetişməsinə və dövlətin gənclər siyasətinə kiçik töhfə verməkdən ibarətdir.</p>
            </div>
          </div>
          <div data-aos="fade-left" className="about_img">
            <img src={office} alt="about1" />
          </div>
        </div>
      </section>

      <section className="user_advantages">


        <div className="user_body">
          <div data-aos="fade-right" className="user_img">
            <img src={diplom} alt="about2" />
          </div>
          <div className="user_main">

            <div data-aos="fade-left" data-aos-delay="300" className="user_description">
              <p className='about_paragraph'>Təşkil etdiyimiz təcrübə proqramları minimum 3 ay, həftə içi 3 və ya 5 gün,
                gün ərzində 3 və ya 4 saat olmaqla səhər və günorta növbələri üzrə, bir çox vəzifələr üzrə isə
                axşam növbəsi üçün 2 saat müddətinə həyata keçirilir.</p>
              <p className='about_paragraph'>Proqramlarımızı uğurla başa vuran təcrübəçilərə ikili imza və möhürlə təsdiq
                edilmiş rəsmi TƏCRÜBƏ DİPLOMU təqdim edilir.</p>
              <p className='about_paragraph'>Proqramlarımızı uğurla başa vuran təcrübəçilərə ikili imza və möhürlə təsdiq
                edilmiş rəsmi TƏCRÜBƏ DİPLOMU təqdim edilir.</p>
              <p className='about_paragraph'>Təcrübə proqramlarımızda iştirak ödənişlidir.
                IT sahəsi üzrə aylıq ödəniş 200 AZN, digər sahələr üzrə 150 AZN müəyyən edilib.</p>
            </div>

          </div>

        </div>
      </section>


      <section className='advantages about_section_advantages'>
        <h2 data-aos="zoom-in" className='about_section_title'> <span> "Karyera Və İşə Hazırlıq Mərkəzi"-nin </span>  üstünlükləri ilə ilk iş təcrübələrinizə bizimlə başlayın!</h2>

        <div data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" className="benefits">
          <div className="user benefit">
            <i class="fa-solid fa-user-group"></i>
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
            <a href="#">Ətraflı</a>
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
                <p>Təcrübə ilə  bağlı dəqiq analizlər aparmaq imkanı </p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Bilik və bacarıqları göstərmək şansı</p>
              </div>
            </div>
            <a href="#">Ətraflı</a>
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

                <p>Təcrübə Mərkəzinin təşkil etdiyi təcrübə proqramı əzində rəsmi diplom əldə etmək imkanı</p>
              </div>
              <div className="adv-text">
                <i className="fa-solid fa-circle-check"></i>
                <p>Təcrübə müddəti ərzində iş rejimində çalışmaq imkanı</p>
              </div>
            </div>
            <a href="#">Ətraflı</a>
          </div>
        </div>
      </section>

      <div className="partners-center about_section_partners">
        <h2 data-aos="zoom-in">Bizimlə əməkdaşlıq edən <span>tərəfdaşlar</span> </h2>
        <div data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" className="partner">
          {partnerData.map((partner, index) => (

            <div className="slide" key={partner.id}> {partner.image}</div>

          ))}
        </div>
      </div>

      <section className="counter">
        <h2 data-aos="zoom-in">Biz sizin  təcrübə və iş imkanı əldə etməyiniz üçün  buradayıq!</h2>
        <p></p>
        <div className="counter_container">
          <div className="counter_box">
            <p className='number'>
              <CountUp end={18}
                duration={5}
                suffix={'+'}
              /></p>
            <span>Təcrübə proqramı</span>
          </div>
          <div className="counter_box">
            <p className='number'>
              <CountUp end={2000}
                duration={200}
                suffix={'+'}
              />
            </p>
            <span> Təcrübəçilərimiz </span>
          </div>
          <div className="counter_box">
            <p className='number'>
              <CountUp end={70}
                duration={5}
                suffix={'+'}
              />
            </p>
            <span>Partnyorlarımız</span>
          </div>

          <div className="counter_box">
            <p className='number'>
              <CountUp end={460}
                duration={5}
                suffix={'+'}
              /></p>
            <span> İşə qəbul </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default About