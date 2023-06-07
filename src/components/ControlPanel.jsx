import React from 'react'
import insta from '../images/instagram.png'
import linkedin from '../images/linkedinn.png'
import facebook from '../images/facebook.png'
import video from '../images/karyera-video.mp4'
import register from '../images/register.jpeg'
import lesson from '../images/lesson.jpeg'
import lesson2 from '../images/lesson2.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";

const ControlPanel = () => {

    AOS.init();
    return (
        <>

            <div className="control-panel_hero">
                <div className="control-panel_body">
                    <h1>Rəsmi Təcrübə Proqramı</h1>
                </div>
            </div>

            <div className="control-panel_sections">
                <div className="functionality-section">
                    <div className="__description">
                    <h3>Real iş mühitində tam və rəsmi təcrübə proqramı sistemi</h3>
                   
                    </div>

                    <div className="__image">
                        <img src={lesson} alt="" />
                    </div>
                </div>

                <div className="class-section">
                    <div className="__image">
                        <img src={register} alt="" />
                    </div>

                    <div className="__description">
                        
                        <h3>Təcrübə ilə bağlı dəqiq analizlər<br />aparmaq imkanı</h3>
                      
                    </div>
                </div>

                <div className="customer-section">
                    <div className="__description">
                    <h3>Bilik və bacarıqları göstərmək şansı</h3>
                    </div>

                    <div className="__image">
                        <img src={lesson2} alt="" />
                    </div>
                </div>

            </div>

    



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

export default ControlPanel