import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Iframe from 'react-iframe'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    const serviceID = 'service_k0zqshm'
    const templateID = 'template_e1yr1se'
    const publicKEY = 'Ics7pEQTHxuPVs5eY'

    emailjs.sendForm(serviceID, templateID, form.current, publicKEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset()
  };

  return (

    <>
      <div className='contact-hero'>
        <div className="contact_head">
          <h2 data-aos="fade-right">Əlaqə</h2>
        </div>
      </div>

      <div className="contact__container">
        <div className="contact_title">
        </div>

        <div className="contact_info">

          <div className="contact_flex" data-aos="flip-left">

            <i class="fa-solid fa-location-dot"></i>

            <h4>Ünvan</h4>
            <p>Bakı şəhəri, Nəsimi ray, Bülbül pr 44 (Gülüstan Residence, I korpus, 3-cü mərtəbə)</p>

          </div>

          <div className="contact_flex" data-aos="flip-left">

            <i className="fa-solid fa-phone"></i>

            <h4>Əlaqə</h4>
            <a href="tel:+994706075222">+994 70 214 52 50</a>

          </div>

          <div className="contact_flex" data-aos="flip-left">

            <i className="fa-solid fa-envelope"></i>

            <h4>E-poçt</h4>
            <a href="mailto:info@startpoint.az">tecrubemerkezi.az@gmail.com</a>

          </div>
        </div>

      </div>

      <div className="contact_form">
        <div className="contact__form_hero">

          <form ref={form} onSubmit={sendEmail}>
            <h3>Məlumatları doldurun</h3>
            {/* Fullname input */}
            <div className="text_center">
              <input type="text"
                className='form-area'
                placeholder='Ad, Soyad'
                name='fullname' />
            </div>
            {/* Phone input */}
            <div className="text_center">
              <input type="text"
                className='form-area'
                placeholder='Əlaqə nömrəsi'
                name='number' />
            </div>

            {/* Email input */}

            <div className="text_center">
              <input type="email"
                className='form-area'
                placeholder='Email'
                name='email' />
            </div>

            {/* Message input */}
            <div className="text_center">
              <textarea type="text"
                className='form-area'
                placeholder='Mesajınızı daxil edin...'
                name='message' />
            </div>

            <button className='contact_btn' type='submit'>Göndər</button>


          </form>

          <div className="contact_img">

            <img src="https://res.cloudinary.com/dn2b3gtui/image/upload/c_scale,q_100,w_700,h_563/v1685259924/backgroundimage_ocma6i.jpg" alt="tecrubemerkezi" />
          </div>

        </div>

      </div>

      <div className="contact_iframe">
        <Iframe url="https://maps.google.com/maps?q=Baku,Gulustan residence&t=&z=10&ie=UTF8&iwloc=&output=embed" 
          width="100%"
          height="455px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative" />
      </div>
    </>
  )
}

export default Contact