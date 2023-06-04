import React, { useEffect, useState } from 'react'
import { partnersData } from '../partnersData'


const Partner = () => {
    return (
        <div>
            <section className="partners_section">
                <div className="partner-wrapper">
                    {partnersData.map((partner, i) => (

                        <div key={partner.id} className="partner-container">
                                <div className='partner-img'>{partner.image}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Partner