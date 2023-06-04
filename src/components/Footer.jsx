import React from 'react'
import logblack from '../images/logblack.jpg'
import {Link} from 'react-router-dom'
const Footer = () => {

    const currentYear = (new Date().getFullYear()) 
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear 
    
  return (
    <section className="footer">
        <div className="footer-body">
            <div className="sp-logo">
                <img src={logblack} alt="logblack" width={'270px'}  height={'270px'}/>
            </div>
            <div className="sports">
                <h4 className='footer-title'>Faydalı linklər</h4>
                <div className="sport">
                    <a href="https://heydar-aliyev-foundation.org/az">Heydər Əliyev Fondu </a>
                    <a href="https://yashat.gov.az">Yaşat Fondu</a>
                    <a href="https://qdf.gov.az">Qarabağ Dirçəliş Fondu</a>
                    <Link to="/CV">CV Yarat</Link>
                </div>
            </div>
            <div className="companies">
                <h4 className='footer-title'>Mərkəz</h4>
                <div className="company">
                    <a href="#">Ana səhifə</a>
                    <Link to="/about">Haqqımızda</Link>
                    <Link to="/partner">Tərəfdaşlar</Link>
                    <a href="#">Xəbərlər</a>
                    <Link to="/CV">CV</Link>
                </div>
            </div>

            <div className="contact">
                <h4 className='footer-title'>Əlaqə</h4>
                <Link to="/contact">+994 70 214 52 50</Link>
                <div className="icons">
                <a href="https://instagram.com/tecrubemerkezi.az?igshid=MzRlODBiNWFlZA=="><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/tecrubemerkezi.az?mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://youtube.com/@tecrubemerkezi"><i className="fa-brands fa-youtube"></i></a>
                
                </div>
            </div>
        </div>
        <div className="footer-content">
            <p>© <span>{ yearTxt }</span> <Link to="/" className='footer_link'>tecrübemerkezi.az </Link> Bütün hüquqlar qorunur.</p>
        </div>
    </section>
  )
}

export default Footer