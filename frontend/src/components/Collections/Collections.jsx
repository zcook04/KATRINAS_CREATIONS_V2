import React from 'react'
import './Collections.css'
import Collection from './Collection/Collection'
import img1 from '../../images/t-shirt-girl400pxW.jpg'
import img2 from '../../images/infant400pxW.jpg'
import img3 from '../../images/headband400pxW.jpg'

const Collections = (props) => {
    return (
        <section className="section-collections">
            <div className="collections-container">
                <h2 className="collections-h2">BROWSE OUR COLLECTIONS</h2>
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