import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner-container">
                    <div className="banner-container-image">
                        <img src="src\public\tornillo-render.png" alt="" />
                    </div>

                    <div className="banner-container-text">
                        <h3>HACEMOS <span>REALIDAD</span> TUS IDEAS</h3>
                        <button className='btn'>Contactanos</button>
                    </div>




            </div>
        </>
    )
}

export default Banner