import React from 'react'

const Success = ({ icon, image, details, workplace, name }) => {
  return (

    <div className="card" >

      <div className='quotation-mark'>{icon}</div>
      <div className="details">{details}</div>

      <div className="user-success">
        <div className="user-img">
          <div className='img'>{image}</div>
        </div>
        <div className="user-name">
          <h4>{name}</h4>
          <span>{workplace}</span>
        </div>
      </div>

    </div>

  )
}

export default Success