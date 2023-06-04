import React from 'react'
import video from '../images/karyera-video.mp4'
import insta from '../images/instagram.png'
import linkedin from '../images/linkedinn.png'
import facebook from '../images/facebook.png'

import AOS from "aos";
import "aos/dist/aos.css";

const UserInterface = () => {

    AOS.init();

    return (
        <>
            <div className="user-interface_hero">
                <div className="user-interface_body">
                    <h1 data-aos="fade-right">Real İş Mühiti</h1>
                </div>
            </div>

            <div className="user-interface_stages">
                <div className="user-interface_stage">

                    <div className="registration-stage">
                        <div className="__description" data-aos="fade-right" data-aos-delay="500">
                            {/* <div><span>1</span></div> */}
                            <p>Səmimi kollektivlə işləmək imkanı</p>
                        </div>
                        <div className="__image" data-aos="fade-left" data-aos-delay="300">
                            <img src="https://res.cloudinary.com/dn2b3gtui/image/upload/q_100/v1684935895/photo1684932994_4_lebm0a.jpg" alt="kollektiv" />
                        </div>
                    </div>

                    <div className="search-stage">
                        <div className="__image" data-aos="fade-right" data-aos-delay="300">
                            <img src="https://res.cloudinary.com/dn2b3gtui/image/upload/v1684934744/photo1684932994_3_lkaj8q.jpg" alt="register" />
                        </div>

                        <div className="__description" data-aos="fade-left" data-aos-delay="500">
                            {/* <div><span>1</span></div> */}
                            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom"><br/>
                            <br />
                            Yerinə yetirilən təlimlər, <br />seminarlarda,tapşırıqlarda iştirak etmək imkanı</p>
                            
                        </div>
                    </div>

                    <div className="information-stage">
                        <div className="__description">
                            {/* <div><span>1</span></div> */}
                            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom"><br/>
                            <br />
                            <br />
                            <br />
                            Həftə sonu mərkəzdə keçirilən <br />oyunlarda kollektivliklə birlikdə əylənmək imkanı</p>
                            
                           
                        </div>

                        <div className="__image" data-aos="zoom-in" data-aos-delay="400">
                            <img src="https://res.cloudinary.com/dn2b3gtui/image/upload/q_100/v1684935254/photo1684932994_2_nubqrs.jpg"  />
                        </div>
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

export default UserInterface