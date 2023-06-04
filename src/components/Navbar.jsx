
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

import React, { useState, useRef } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)






  const searchBtn = useRef()
  const closingBtn = useRef()
  const searchForm = useRef()


  const formActive = (e) => {
    const kliklenenElement = e.target


    if (kliklenenElement === searchBtn.current) {
      searchBtn.current.classList.remove('fa-magnifying-glass')
      closingBtn.current.style.display = 'block'
      searchBtn.current.style.display = "block"
      searchForm.current.classList.add('js-active')
    }
  }

  const closingInput = (e) => {
    const kliklenenElement = e.target


    if (kliklenenElement === closingBtn.current) {
      searchForm.current.classList.remove('js-active')
      closingBtn.current.style.display = 'none'
      searchBtn.current.classList.add('fa-magnifying-glass')
      searchBtn.current.style.display = 'block'
    }
  }

  // seacrh
  const [query, setquery] = useState('')
  const handleChangeSearch = (e) => {
    setquery(e.target.value)
    const results = posts.filter(post => {
      if (e.target.value === "") return posts
      return post.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setstate({
      query: e.target.value,
      list: results
    })
  }
  const [state, setstate] = useState({
    query: '',
    list: []
  })
  const posts = [
    {
      url: '',
      tags: ['react', 'blog'],
      title: 'How to create a react search bar',
    },
    {
      url: '',
      tags: ['node', 'express'],
      title: 'How to mock api data in Node',
    },
    // more data here
  ]

  return (
    <>
      <nav className='navbar'>

        <div className="nav-container">

          <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>


          <div className={isMobile ? "nav-links-mobile" : "nav-link-left"}
            onClick={() => setIsMobile(false)} >


            <ul className='nav-links'>
              <li><Link to='/' className='main-menu_item line'>Ana səhifə</Link></li>
              <li><Link to='/about' className='main-menu_item line'>Haqqımızda</Link></li>
              <li><Link to='/prog' className='main-menu_item line'>Proqramlar</Link></li>
              <li><Link to='/partner' className='main-menu_item line'>Tərəfdaşlar</Link></li>
              <li><Link to='/news' className='main-menu_item line'>Xəbərlər</Link></li>
              <li><Link to='/contact' className='main-menu_item line'>Əlaqə</Link></li>
              <li><Link to='/body' className='main-menu_item line'>CV</Link></li>
            </ul>


          </div>

          <div className="nav-link-right">
            <Popup trigger=
              {<button className='login-btn'
              > Sertfikatını yoxla</button>}
              modal nested>
              {
                close => (
                  <div className='modal'>
                    <div className='content'>
                   <h1>Sertfikatı yoxlamaq üçün formu doldurun</h1> 
                    </div>
                    <div>
                    <form action="" id='loginform' className='form_phone input_flex'>
                    
                    <input type="text" id='text' className='form_input' name='office name' placeholder='* Sertfikatın ID kodu' />
                    </form>
                      <button  type='submit' className='login__btn' onClick=
                        {() => close()}>
                       Yoxla
                      </button>
                    </div>
                  </div>
                )
              }
            </Popup>
            <Link to='/login' className='login-btn-partner'>Tərəfdaş ol</Link>



          </div>



          <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <i className="fas fa-times"></i> : <i className="fa-solid fa-bars"></i>}
          </button>


        </div>
      </nav>
    </>
  )
}

export default Navbar