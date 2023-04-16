import React from "react"

// scss
import './Make-collections.scss'

import AppImg1 from '../../../imgs/feature/make-collections-app-1.png'
import AppImg2 from '../../../imgs/feature/make-collections-app-2.png'
import Decor from '../../../imgs/feature/make-collections-decor.png'

// svg 
import Stars from '../../../imgs/svg/no-stres-user-stars-2.svg'

export default function MakeCollections() {
    return (
        <section className="make-collections">
            <div className="make-collections__container _container">
                <div className="make-collections__wrapper">
                    <div className="make-collections__block-img block-img">
                        <div className="block-img__wrapper">
                            <div className="block-img__inner">
                                <div className="block-img__content">
                                    <div className="block-img__item item-one">
                                        <img className="app" src={AppImg1} alt="App" />
                                        <img className="block-img__stars" src={Stars} alt="Stars" />
                                    </div>
                                    <div className="block-img__item item-two">
                                        <img className="app" src={AppImg2} alt="App" />
                                    </div>
                                </div>
                                <img className="block-img__decor" src={Decor} alt="Decor" />
                            </div>
                        </div>
                    </div>
                    <div className="make-collections__block-text block-text">
                        <div className="block-text__inner">
                            <h2 className="block-text__title _section-title">Make collections fast, flexible, fun </h2>
                            <p>Give customers a modern B2B payments experience, with more ways to pay (including credit terms). Zero setup or risk for you. They’ll stay with you longer, purchase more from you, and you’ll get cash in your bank so much faster!</p>
                        </div>
                    </div>
                </div>
                <div className="make-collections__decor"></div>
            </div>
        </section>
    )
}