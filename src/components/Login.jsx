import React from 'react'
import backgroundimage from '../images/backgroundimage.jpg'

const Login = () => {

  return (
    <>
      <div className="login_container" style={{
        background: `url(${backgroundimage})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover'
      }}>

        <div className="login_card_body">
          <h2>Forumu doldurun</h2>
          <form action="" id='loginform'>
            <div className="login_form-group">
              <label htmlFor="login-form-number">Əlaqə nömrəsi </label>
              <div className='form_phone input_flex'>
                <input type="text" className='phone_code-disabled' id='phone_code' placeholder='+994' disabled />
                <input type="tel" id='number' className='form_input' name='number' placeholder='Əlaqə nömrəsi' />
              </div>
            </div>
            <div className="login_form-group">
              <label htmlFor="password">Şirkətin adı</label>
              <div className='form_phone input_flex'>
                <input type="text" id='text' className='form_input' name='office name' placeholder='Şirkətin adı' />
              </div>

              <div className="login_form-group">
                <label htmlFor="password">Vöen</label>
                <div className='form_phone input_flex'>
                  <input type="text" id='text' className='form_input' name='vöen' placeholder='Vöen' />
                </div>
              </div>

              <div className="login_form-group">
                <label htmlFor="password">Fəaliyyət istiqaməti </label>
                <div className='form_phone input_flex'>
                  <input type="text" id='text' className='form_input' name='action' placeholder='Fəaliyyət istiqaməti ' />
                </div>
              </div>

              <div className="login_form-group">
                <label htmlFor="password">Ünvanı </label>
                <div className='form_phone input_flex'>
                  <input type="text" id='text' className='form_input' name='office name' placeholder='Ünvanı' />
                </div>
              </div>

              <div className="login_form-group">
                <label htmlFor="password">Əlaqələndirici şəxs: (Ad, Soyad)  </label>
                <div className='form_phone input_flex'>
                  <input type="text" id='text' className='form_input' name='full name' placeholder='Əlaqələndirici şəxs: (Ad, Soyad) ' />
                </div>
              </div>
            </div>
            <button type='submit' className='login__btn'>Göndər</button>
          </form>
          
        </div>
        {/* <div className="login_img">
        <img src={loginImg} alt="" />
      </div> */}

      </div>


    </>
  )
}

export default Login
