import React from "react"

// scss
import './Detalies.scss'

// png
import App1 from '../../../imgs/feature/detalies-app-1.png'
import App2 from '../../../imgs/feature/detalies-app-2.png'
import Decor from '../../../imgs/feature/sounds-easy-decor.png'

// svg
import Stars from '../../../imgs/svg/detalis-stars.svg'

export default function Detalies() {
    return (
        <section className="detalies">
            <div className="detalies__container _container">
                <div className="detalies__wrapper">
                    <div className="detalies__block-text block-text">
                        <div className="block-text__inner">
                            <h2 className="block-text__title _section-title">Get smarter about all the little details </h2>
                            <p>Monitor your transactions activity on one dashboard. Generate customized order, inventory, and payments reports. Prevent fraud, improve operations, manage working capital, and grow grow grow!</p>
                        </div>
                    </div>
                    <div className="detalies__block-img block-img">
                        <div className="block-img__wrapper">
                            <div className="block-img__inner">
                                <div className="block-img__content">
                                    <div className="block-img__item item-one">
                                        <img className="app" src={App1} alt="App" />
                                        <img className="stars" src={Stars} alt="stars" />
                                    </div>
                                    <div className="block-img__item item-two">
                                        <img className="app" src={App2} alt="App" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <img className="decor-1" src={Decor} alt="Decor" />
                    </div>
                </div>
            </div>
            
            <div className="decor-2">
                <img src={Decor} alt="Decor" />
            </div>
            <div className="decor-3"></div>
        </section>
    )
}