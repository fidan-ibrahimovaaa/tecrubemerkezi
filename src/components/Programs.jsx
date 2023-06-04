import React from 'react'

import { progTotalData } from '../progTotalData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
const Programs = () => {
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  return (
    <div>
      <section className="prog">
        <h2> İşə qəbul nəticələrimiz yüksək olan 5 tələbatlı sahə</h2>
        <div className="prog-wrapper_promation">
          <Slider {...settings} >
            {progTotalData.map((prog, i) => (
              <div key={prog.id} className="prog-container">
                <div className='prog-img'>{prog.image}</div>
                <div className="prog-body">

                </div>
              </div>

            ))}
          </Slider>
        </div>

      </section>
    </div>
  )
}

export default Programs