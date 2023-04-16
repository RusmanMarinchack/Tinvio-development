import React, { useState } from "react"

// scss
import './FAQ.scss'

// png 
import DecorImg from '../../../imgs/way-us-decor-3.png'

export default function FAQ() {
    let [state, setState] = useState(null) 
    let [accordeonHeight, setAccordeonHeight] = useState(null)

    function indexAcordeon(index, element) {
        let item = element.parentNode.parentNode;
        let body = element.parentNode.nextElementSibling

        setState(index)
        setAccordeonHeight(body.scrollHeight)

        if (item.classList.contains('active')) {
            item.classList.remove('active')
            body.style.height = `0px`
        } else {
            item.classList.add('active')
            body.style.height = `${accordeonHeight}px`
        }
    }


    return (
        <section className="faq">
            <div className="faq__container _container">
                <h2 className="faq__title section-title">FAQ</h2>
                <div className="faq__wrapper">
                    <div className="faq__accordeon accordeon">
                        <div className={`accordeon__item ${state === 1 ? 'active' : ''}`}>
                            <div className="accordeon__header" onClick={(e) => indexAcordeon(1, e.target)}>
                                <button className="accordeon__btn">How to get started with Tinvio? <span className="plus"></span></button>
                            </div>
                            <div className="accordeon__body" style={{height: state === 1 ? accordeonHeight + 'px' : '0px'}}>
                                <p>You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing chats, orders, and invoices. For payments, our Customer Success team will reach out for account verification and onboarding. Once verified, you'll be good to go!</p>                                
                            </div>
                        </div>

                        <div className={`accordeon__item ${state === 2 ? 'active' : ''}`}>
                            <div className="accordeon__header" onClick={(e) => indexAcordeon(2, e.target)}>
                                <button className="accordeon__btn">How does Tinvio work? <span className="plus"></span></button>
                            </div>
                            <div className="accordeon__body" style={{height: state === 2 ? accordeonHeight + 'px' : '0px'}}>
                                <p>This dashboard is an easy all-in-one interface for you to manage chats, orders, invoices, and payments with your merchants. Merchants just need to download the free Tinvio mobile app to exchange messages, place orders, and make payments. It’s zero friction for them!</p>
                            </div>
                        </div>

                        <div className={`accordeon__item ${state === 3 ? 'active' : ''}`}>
                            <div className="accordeon__header" onClick={(e) => indexAcordeon(3, e.target)}>
                                <button className="accordeon__btn">How to collect payments on Tinvio? <span className="plus"></span></button>
                            </div>
                            <div className="accordeon__body" style={{height: state === 3 ? accordeonHeight + 'px' : '0px'}}>
                                <p>Once your account is verified, you'll be able to request and reconcile payments for all your orders and invoices on Tinvio. Your merchants will receive notifications for each payment request in their favorite channels (e.g. Tinvio app, WhatsApp), and they'll be able to complete payment in a fast and flexible checkout experience. You'll receive real-time updates and reports for all your payments!</p>
                            </div>
                        </div>

                        <div className={`accordeon__item ${state === 4 ? 'active' : ''}`}>
                            <div className="accordeon__header" onClick={(e) => indexAcordeon(4, e.target)}>
                                <button className="accordeon__btn">What are the supported payment methods? <span className="plus"></span></button>
                            </div>
                            <div className="accordeon__body" style={{height: state === 4 ? accordeonHeight + 'px' : '0px'}}>
                                <p>We’re always enabling new payment methods. Our Customer Success teams will advise on the available methods in your market (including transaction fees for that method). In general, we support bank transfers, credit cards, and B2B BNPL options!</p>
                            </div>
                        </div>

                        <div className={`accordeon__item ${state === 5 ? 'active' : ''}`}>
                            <div className="accordeon__header" onClick={(e) => indexAcordeon(5, e.target)}>
                                <button className="accordeon__btn">I have more product questions! Who do I contact? <span className="plus"></span></button>
                            </div>
                            <div className="accordeon__body" style={{height: state === 5 ? accordeonHeight + 'px' : '0px'}}>
                                <p>If you're already signed up, you can live chat with "Team Tinvio" in the dashboard or mobile app. Otherwise, you can contact us at support@tinvio.com for more information!</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="decor one"></div>
            <div className="decor two"></div>
            <div className="decor three"></div>
            <div className="decor four">
                <img src={DecorImg} alt="Decor" />
            </div>
            <div className="decor five">
                <img src={DecorImg} alt="Decor" />
            </div>
        </section>
    )
}