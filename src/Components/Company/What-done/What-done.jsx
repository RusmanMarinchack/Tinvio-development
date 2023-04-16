import React from "react"

// scss
import './What-done.scss'

// png
import Account from '../../../imgs/Company/account.png'
import App from '../../../imgs/Company/what-done-app.png'
import App_1280 from '../../../imgs/Company/what-done-app_1280.png'
import Decor1 from '../../../imgs/Company/what-done-decor.png'
import Decor2 from '../../../imgs/Company/what-done-decor-2.png'
import DecorItem from '../../../imgs/decor-rectanges.png'

export default function WhatDone() {
    return (
        <section className="what-done">
            <div className="what-done__container _container">
                <h2 className="what-done__title _title">What we’ve done</h2>

                <div className="what-done__wrapper">
                    <div className="what-done__top what-done-top">
                        <div className="what-done-top__item texts">
                            <div className="texts__inner">
                                <h5>2021</h5>
                                <ul>
                                    <li>Launch Tinvio Checkout for on-platform payments, supplier web dashboard and more</li>
                                    <li>Series A funding to build embedded supply chain financing products for our users</li>
                                    <li>Expand into new verticals and markets. Close the year with 200 team members and 4000+ active businesses across the region</li>
                                </ul>
                            </div>
                            <div className="texts__decor"></div>
                        </div>
                        <div className="what-done-top__item images">
                            <img className="images__img" src={Account} alt="Account" />
                            <div className="images__decor-one"></div>
                            <div className="images__decor-two"></div>
                            <div className="images__decor-three">
                                <img src={Decor1} alt="Decor" />
                            </div>
                            <div className="images__decor-four">
                                <img src={Decor1} alt="Decor" />
                            </div>
                        </div>
                    </div>
                    <div className="what-done__bottom what-done-bottom">
                        <div className="what-done-bottom__item app">
                            <h5 className="app__title">Dark mode too!</h5>
                            <picture>
                                <source srcSet={App} media="(min-width: 1279.98px)" />
                                <img src={App_1280} alt="App" />
                            </picture>
                            <div className="app__decor-one"></div>
                            <div className="app__decor-two"></div>
                            <div className="app__decor-three">
                                <img src={Decor1} alt="Decor" />
                            </div>
                        </div>
                        <div className="what-done-bottom__item texts-one">
                            <div className="texts-one__inner">
                                <h5>2020</h5>
                                <ul>
                                    <li>Seed funding led by Sequoia, GFC</li>
                                    <li>Launch multi-country localization, digital invoicing and more</li>
                                    <li>Adapt to Covid-19. Triple our team size to 100. Activate 1000+ new businesses</li>
                                </ul>
                            </div>
                            <div className="texts-one__decor-one"></div>
                            <div className="texts-one__decor-two"></div>
                            <div className="texts-one__decor-three">
                                <img src={Decor1} alt="Decor" />
                            </div>
                        </div>
                        <div className="what-done-bottom__item texts-two">
                            <div className="texts-two__inner">
                                <h5>Q3 2019</h5>
                                <ul>
                                    <li>Our founder Ajay raises pre-seed in Europe. 
    Moves back home to Singapore to start Tinvio </li>
                                    <li>Zero to one in team, product, processes. Launch merchant mobile app</li>
                                    <li>Ajay meets our COO Tedo. Expand into Indonesia and more markets </li>
                                </ul>
                            </div>
                            <div className="texts-two__decor-one"></div>
                            <div className="texts-two__decor-two">
                                <img src={Decor1} alt="Decor" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="decor-one">
                <img src={Decor1} alt="Decor" />
            </div>

            <div className="decor-two">
                <img src={Decor2} alt="Decor" />
            </div>
        </section>
    )
}