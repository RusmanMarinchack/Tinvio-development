import React from "react"

// scss
import './Score.scss'

// png
import Banner1920 from '../../../imgs/feature/score-banner.1920.png'
import Banner1440 from '../../../imgs/feature/score-banner.1440.png'
import Banner1280 from '../../../imgs/feature/score-banner.1280.png'
import Banner1024 from '../../../imgs/feature/score-banner.1024.png'
import Banner768 from '../../../imgs/feature/score-banner.768.png'
import Banner370 from '../../../imgs/feature/score-banner.370.png'

// svg 
import {ReactComponent as Marck} from '../../../imgs/svg/check-mark.svg'
import {ReactComponent as Arrow} from '../../../imgs/svg/arrow-right.svg'
import {ReactComponent as Сall} from '../../../imgs/svg/call.svg'
import ScoreLine1 from '../../../imgs/svg/score-line-1.svg'
import ScoreLine1576 from '../../../imgs/svg/score-line-1-576.svg'
import ScoreLine2 from '../../../imgs/svg/score-line-2.svg'
import ScoreLine2576 from '../../../imgs/svg/score-line-2-576.svg'

export default function Score() {
    return (
        <section className="score">
            <div className="score__container _container">
                <div className="score__wrapper">
                    <div className="score__header score-header">
                        <h2 className="score-header__title _section-title">Send invoices, save the trees </h2>
                        <p>Send invoices digitally, and track them all the way until they’re paid. It’s easier to reconcile and more organized than printouts. If they’re overdue, automatically send a friendly reminder or two!</p>
                    </div>
                    <div className="score__banner score-banner">
                        <picture>
                            <source srcSet={Banner1920} media={"(min-width: 1919.98px)"}></source>
                            <source srcSet={Banner1440} media={"(min-width: 1439.98px)"}></source>
                            <source srcSet={Banner1280} media={"(min-width: 1279.98px)"}></source>
                            <source srcSet={Banner1024} media={"(min-width: 1023.98px)"}></source>
                            <source srcSet={Banner768} media={"(min-width: 399.98px)"}></source>
                            <img src={Banner370} alt="Banner" className="score-banner__img" />
                        </picture>
                        
                        <div className="score-banner__oreder oreder item">
                            <div className="oreder__inner">
                                <h5 className="oreder__name">Send an invoice for this order</h5>
                                <div className="oreder__sub-name">
                                    <p>
                                        <spam>Need a template?</spam>
                                        <spam>Generate Invoice</spam>
                                    </p>
                                    <Arrow></Arrow>
                                </div>
                            </div>
                            <button className="oreder__btn btn-white">Send Invoice</button>
                            <picture>
                                <source  srcSet={ScoreLine1} media="(min-width: 575.98px)"/>
                                <img className="line-1" src={ScoreLine1576} alt="Line" />
                            </picture>
                            
                            <picture>
                                <source  srcSet={ScoreLine2} media="(min-width: 575.98px)"/>
                                <img className="line-2" src={ScoreLine2576} alt="Line" />
                            </picture>
                        </div>
                        <div className="score-banner__reminders reminders item">
                            <div className="reminders__inner">
                                <span>
                                    <Сall></Сall>
                                </span>
                                <p>Send Reminders</p>
                            </div>
                            <Marck className="mark"></Marck>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}