import React, {useContext} from "react"

// scss
import './Contact-us.scss'

// png 
import Decor from '../../../imgs/Company/contact-us-decor.png'

// Contect
import { Context } from "../../../Context"


export default function ContactUs() {
    const {contactUsRef, scrollForm} = useContext(Context)

    return (
        <section className="contact-us" id="contact-us" ref={contactUsRef}>
            <div className="contact-us__container _container">
                <h2 className="contact-us__title _section-title">Contact us</h2>

                <div className="contact-us__wrapper">
                    <div className="contact-us__item contact-us-item">
                        <div className="contact-us-item__inner">
                            <h5 className="contact-us-item__title">Product Support</h5>
                            <p>Need help? Live chat with “Team Tinvio” in the app or dashboard</p>
                            <a href="#" className="contact-us-item__btn btn-white">Get Help</a>
                        </div>

                        <div className="contact-us-item__decor-one"></div>
                        <div className="contact-us-item__decor-two"></div>
                        <div className="contact-us-item__decor-three">
                            <img src={Decor} alt="Decor" />
                        </div>
                    </div>
                    <div className="contact-us__item contact-us-item center">
                        <div className="contact-us-item__inner">
                            <h5 className="contact-us-item__title">Business & Partnerships</h5>
                            <p>Interested in collaborating or partnering with Tinvio?</p>
                            <button onClick={scrollForm} className="contact-us-item__btn btn-white">Contact Us</button>
                        </div>

                        <div className="contact-us-item__decor-four"></div>
                        <div className="contact-us-item__decor-five"></div>
                        <div className="contact-us-item__decor-six">
                            <img src={Decor} alt="Decor" />
                        </div>
                    </div>
                    <div className="contact-us__item contact-us-item">
                        <div className="contact-us-item__inner">
                            <h5 className="contact-us-item__title">Media Relations</h5>
                            <p>Working on a story? We’re happy to share more about Tinvio</p>
                            <a href="#" className="contact-us-item__btn btn-white">Get Coffee</a>
                        </div>
                        <div className="contact-us-item__decor-seven"></div>
                        <div className="contact-us-item__decor-eight"></div>
                        <div className="contact-us-item__decor-nine">
                            <img src={Decor} alt="Decor" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="decor-one"></div>
            <div className="decor-two"></div>
            <div className="decor-three">
                <img src={Decor} alt="Decor" />
            </div>
        </section>
    )
}