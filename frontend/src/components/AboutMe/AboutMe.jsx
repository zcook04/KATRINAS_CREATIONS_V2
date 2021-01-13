import React from 'react'
import './AboutMe.css'
import myImage from '../../images/about-me.jpg'

const AboutMe = () => {
    return (
        <section className="section-aboutme">
            <div className="aboutme-container">
                <div className="aboutme-bg-top">
                    <h2 className="aboutme-h2">ABOUT ME</h2>
                </div>
                <div className="aboutme-bg-bottom">
                    <div className="aboutme-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida lobortis potenti morbi a leo fames. Faucibus</p>
                        <button className="aboutme-messageme-button">Message Me!</button>
                    </div>
                    <div className="aboutme-content-image">
                        <img src={myImage} alt="My Family"/>
                    </div>
                   
                </div>
                
            </div>
            
        </section>
    )
}

export default AboutMe
