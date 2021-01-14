import React from 'react'
import './AboutMe.css'
import myImage from '../../images/about-me.jpg'

const AboutMe = () => {
    return (
        <section className="section-aboutme">
            <div className="heading-aboutme-container">
                <div className="heading-aboutme-left">
                    
                </div>
                <div className="heading-aboutme-title">
                    <div className="heading-line-inline"></div>
                    <h2 className="aboutme-h2">About Me</h2>
                </div>
                <div className="heading-aboutme-right"> 
                <div className="heading-line"></div>
                </div>
            </div>
            <div className="aboutme-container">
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
