import React from 'react'
import './Hero.css'

const Hero = (props) => {
    return (
        <section className="hero-section">
            <div className="hero-container">
            <div className="hero-cta">
                <div><p><span className="hero-title">Beautifully crafted, custom attire</span></p></div>
                <div><p><span className="hero-subtitle">Shop our collection of custom t-shirts, baby clothes, and headbands</span></p></div>
                <div><button className="hero-cta-button">SHOP NOW</button></div>
            </div>
            </div>
        </section>
    )
}

export default Hero
