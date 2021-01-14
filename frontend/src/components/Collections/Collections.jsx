import React from 'react'
import './Collections.css'
import Collection from './Collection/Collection'
import img1 from '../../images/t-shirt-girl400pxW.jpg'
import img2 from '../../images/infant400pxW.jpg'
import img3 from '../../images/headband400pxW.jpg'

const Collections = (props) => {
    return (
        <section className="section-collections">
            <div className="heading-collections-container">
                    <div className="heading-collections-left">
                        <div className="heading-line"></div>
                    </div>
                    <div className="heading-collections-title">
                        <h2 className="collections-h2">Browse Our Collections</h2>
                        <div className="heading-line-inline"></div>
                    </div>
                    <div className="heading-collections-right">
                    </div>
            </div>
            <div className="collections-container">

                <div className="collections-bg">
                    <div className="collections-bg-top"></div>
                    <div className="collections-bg-bottom"></div>
                    <div className="section-collection">
                        <Collection img={img1} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida lobortis potenti morbi a leo fames. Faucibus " collectionType="t-shirt image"
                        collectionTitle="Womens T-Shirts"/>
                        <Collection img={img2} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida lobortis potenti morbi a leo fames. Faucibus " collectionType="infant image" collectionTitle="Infant Attire"/>
                        <Collection img={img3} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida lobortis potenti morbi a leo fames. Faucibus " collectionType="headband image" collectionTitle="Headbands"/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Collections