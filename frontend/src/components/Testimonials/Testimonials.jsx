import React from 'react'
import './Testimonials.css'
import Testimonial from './Testimonial/Testimonial'
import customer1 from '../../images/src-images/customer1.jpg'
import customer2 from '../../images/src-images/customer2.jpg'
import customer3 from '../../images/src-images/customer3.jpg'
import customer4 from '../../images/src-images/customer4.jpg'

const Testimonials = () => {
    return (
            <section className="section-testimonials">
                <div className="heading-testimonials-container">
                        <div className="heading-testimonials-left">
                            <div className="heading-line"></div>
                        </div>
                        <div className="heading-testimonials-title">
                            <h2 className="testimonials-h2">Testimonials</h2>
                            <div className="heading-line-inline"></div>
                        </div>
                        <div className="heading-testimonials-right">
                        </div>
                </div>
            <div className="testimonials-container">

                <Testimonial 
                    customerImg={customer1}
                    customerName="Olivia Jane"
                    customerTitle="Procrasinator"
                    customerReview='“Holy Cow!  Katrina is amazing.  Product arrived before expected.”'
                />
                <Testimonial 
                    customerImg={customer2}
                    customerName="Sophia First"
                    customerTitle="Explorer Extroardinare"
                    customerReview="“This headband is nuts.  Cash me on the outside!”"
                />
                <Testimonial 
                    customerImg={customer3}
                    customerName="Amber"
                    customerTitle="Fashionado"
                    customerReview="“Check my baby out.  How cute is she! What a nice onesie!”"
                />
                <Testimonial 
                    customerImg={customer4}
                    customerName="Mother Theresa"
                    customerTitle="Mamasaurous Rex"
                    customerReview="“This T-Shirt is the biz-niz.  Look how fly I look!”"
                />
                
            </div>
        </section>
    )
}

export default Testimonials
