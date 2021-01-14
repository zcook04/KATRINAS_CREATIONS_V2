import React from 'react'
import './Testimonial.css'


const Testimonial = ({customerReview, customerName, customerTitle, customerImg}) => {
    const pictureDivStyle = {
        background: `url(${customerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "75px",
        height: "75px"
    }
    return (
        <article className="testimonial-card-container">
            <div className="testimonial-review">
                <p>{customerReview}</p>
            </div>
            <div className="testimonial-customer-info">
                <div className="testimonial-customer-pic" style={pictureDivStyle}>

                </div>
                <h3>{customerName}</h3>
                <h4>{customerTitle}</h4>
            </div>
        </article>
    )
}

export default Testimonial
