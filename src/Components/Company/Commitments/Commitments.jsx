import React from "react"

// scss
import './Commitments.scss'

import Pen from '../../../imgs/svg/pen.svg'
import Message from '../../../imgs/svg/message.svg'
import Raket from '../../../imgs/svg/raket.svg'

// png
import DecorThree from '../../../imgs/Company/commitments-decor-three.png'
import DecorFour from '../../../imgs/Company/commitments-decor-four.png'

export default function Commitments() {
    return (
        <section className="commitments">
            <div className="commitments__container _container">
                <h2 className="commitments__title _section-title">Our Core Commitments</h2>
                <div className="commitments__wrapper">
                    <div className="commitments__item commitments-item">
                        <div className="commitments-item__icon">
                            <img src={Pen} alt="Icon" />
                        </div>
                        <h5 className="commitments-item__title">Every pixel matters</h5>
                        <p>Biased towards perfection</p>
                    </div>
                    <div className="commitments__item commitments-item">
                        <div className="commitments-item__icon">
                            <img src={Message} alt="Icon" />
                        </div>
                        <h5 className="commitments-item__title">Shut the fluff</h5>
                        <p>Clear and direct communication</p>
                    </div>
                    <div className="commitments__item commitments-item">
                        <div className="commitments-item__icon">
                            <img src={Raket} alt="Icon" />
                        </div>
                        <h5 className="commitments-item__title">Break things fast</h5>
                        <p>Ownership with ruthless agility</p>
                    </div>
                </div>
            </div>
            <div className="decor-one"></div>
            <div className="decor-two"></div>
            <div className="decor-three">
                <img src={DecorThree} alt="Decor" />
            </div>
            <div className="decor-four">
                <img src={DecorFour} alt="Decor" />
            </div>
        </section>
    )
}