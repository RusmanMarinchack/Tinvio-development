import React from "react"

// scss
import './Develop.scss'

// svg 
import Stars from '../../../imgs/svg/developer-stars.svg'

// png 
import DvelopApp from '../../../imgs/feature/develop-app.png'
import Decor1 from '../../../imgs/feature/developer-decor-1.png'
import Decor2 from '../../../imgs/feature/developer-decor-2.png'
import Decor3 from '../../../imgs/feature/developer-decor-3.png'

export default function Develop() {
    return (
        <section className="develop">
            <div className="develop__container _container">
                <h2 className="develop__title _title">
                    <div className="_container">
                        Supercharge your business with Tinvio
                    </div>
                </h2>
                <div className="develop__wrapper">
                    <div className="_container">
                        <div className="develop__block-text block-text">
                            <div className="block-text__list">
                                <div className="block-text__item">
                                    <h4>Chats</h4>
                                    <p>Send messages, invoices, and payment links directly to customers (even if they’re not on Tinvio)</p>
                                </div>
                                <div className="block-text__item">
                                    <h4>Orders</h4>
                                    <p>Manage all your orders, and magically update inventory in a format designed to prevent mistakes</p>
                                </div>
                            </div>
                            <div className="block-text__list">
                                <div className="block-text__item">
                                    <h4>Payments</h4>
                                    <p>Collect payments and reconcile against invoices, without ever checking bank statements</p>
                                </div>
                                <div className="block-text__item">
                                    <h4>And more in one dashboard...</h4>
                                </div>
                            </div>
                        </div>
                        <div className="develop__block-img">
                            <img src={DvelopApp} alt="App" />
                        </div>
                    </div>

                    <div className="decor-1">
                        <img src={Decor1} alt="Decor" />
                    </div>
                    <div className="decor-2" alt="Decor" />
                    <div className="decor-3" alt="Decor" />
                </div>
                <img className="stars" src={Stars} alt="Decor" />

            </div>
        </section>
    )
}