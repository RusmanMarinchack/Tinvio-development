import React from "react"

// scss
import './Powered.scss'

// png
import Powered1 from '../../../imgs/Company/powered-1.png'
import Powered2 from '../../../imgs/Company/powered-2.png'
import Powered3 from '../../../imgs/Company/powered-3.png'
import Powered4 from '../../../imgs/Company/powered-4.png'
import Decor from '../../../imgs/Company/powered-decor.png'
import DecorBox from '../../../imgs/Company/company-home-decor.png'

export default function Powered() {
    return (
        <section className="powered">
            <div className="powered__container _container">
                <h2 className="powered__title _section-title"><span className="stars"></span> Powered by <span className="red">Teamvio</span></h2>
                <div className="powered__wrapper">
                    <div className="powered__inner left">
                        <div className="powered__item one">
                            <img src={Powered1} alt="Proces" />
                        </div>
                        <div className="powered__item two">
                            <img src={Powered3} alt="Proces" />
                        </div>
                        <div className="powered__item three">
                                <img src={Powered2} alt="Proces" />
                            </div>
                            <div className="powered__box box">
                                <p>Up for a challenge? We're always looking for the best</p>
                                <a href="#" className="powered__btn btn-white">Join Us</a>

                                <div className="box__decor-one"></div>
                                <div className="box__decor-two"></div>
                                <div className="box__decor-three">
                                    <img src={DecorBox} alt="Decor" />
                                </div>
                            </div>
                            <div className="powered__item four">
                                <img src={Powered4} alt="Proces" />
                            </div>
                    </div>
                </div>
            </div>

            <div className="decor-one"></div>
            <div className="decor-two"></div>
            <div className="decor-three"></div>
            <div className="decor-four">
                <img src={Decor} alt="Decor" />
            </div>
        </section>
    )
}