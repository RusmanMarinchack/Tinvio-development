import React from "react"

// Form
import Form from "../../Form/FormWrapper"

// scss
import './Section-Contact.scss'

// png
import Map from '../../../imgs/map.png'
import decor from '../../../imgs/decor-rectanges-white.png'

// svg 
import StarsDecor from '../../../imgs/svg/section-contact-stars.svg'

export default function SectionContact() {

    return (
        <section className="section-contact">
            <div className="section-contact__wrap">
                <div className="section-contact__wrapper-rotate">
                    
                    <div className="section-contact__container _container">
                        <h2 className="section-contact__title _section-title">Fill up the form and we’ll get in touch within a few hours</h2>
                        <div className="section-contact__wrapper">
                            <div className="section-contact__map section-contact-map">
                                <div className="section-contact-map__map">
                                    <img src={Map} alt="Map" />
                                </div>
                            </div>
                            
                            <Form title={"Hi, we’re <span class='red'>Tinvio!</span> And you?"}/>
                        </div>
                        <img className="section-contact__decor decor-1" src={decor} alt="Decor" />
                        <img className="section-contact__decor decor-2" src={decor} alt="Decor" />
                    </div>

                </div>
                <div className="section-contact__decor-stars">
                        <img src={StarsDecor} alt="Stars" />
                    </div>
            </div>
        </section>
    )
}
