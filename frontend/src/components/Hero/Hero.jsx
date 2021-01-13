import React from 'react'
import './Hero.css'

const Hero = (props) => {
    return (
        <div className="hero-container">
            <div className="hero-title">
                <span className="hero-katrinas">katrinas</span> <span className="hero-creations">creations</span> 
            </div>
            <div className="hero-cta">
                <p>Beautifully crafted, custom designs</p>
                <button className="hero-cta-button">SHOP NOW</button>
            </div>
        </div>
    )
}

export default Hero
