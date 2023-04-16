import React, { useContext } from "react"
import { motion } from "framer-motion"

import './Company-home.scss'

// Contect
import { Context } from "../../../Context"

// svg 
import {ReactComponent as Chat} from '../../../imgs/svg/Chat.svg'

// png
import ChatApp from '../../../imgs/Company/Comapny-home-chat.png'
import Decor from '../../../imgs/Company/company-home-decor.png'

export default function CompanyHome() {
    const {scrillContactUs} = useContext(Context)

    const textAnimation = {
        hidden: {
            opacity: 0
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.2 } 
        })
    }

    return (
        <motion.section
        initial="hidden"
        whileInView='visible'
        viewport={{ onse: true }}
        className="company-home">
            <div className="company-home__block-title box-title">
                <div className="box-title__container _container">
                    <motion.h1 custom={1} variants={textAnimation} className="box-title__title _title"><span className="stars"></span>Hi, we’re <span className="red">Tinvio</span>!</motion.h1>
                    <motion.p custom={2} variants={textAnimation}>We’re reimaging how merchants and suppliers transact. </motion.p>
                </div>
            </div>

            <div className="company-home__wrapper company-home-wrapper">
                <div className="company-home-wrapper__container _container">
                    <div className="company-home-wrapper__left wrapper-left">
                        <div className="wrapper-left__inner">
                            <p>Tinvio is built for B2B transactions. It's an app, it's a dashboard, it's a checkout link, it's a digital wallet, it's a credit line, it's money in (and out) of your bank, and so much more. Tradition meets modern in a delightful chat-led user experience. The best part? We make it fast, flexible, and fun.</p>
                            <p>Why do we do it? It's painfully frustrating for businesses to transact. Our generation are minting NFTs on blockchains everyday and about to colonize Mars, but in our supply chains, businesses are still exchanging cold hard cash, writing checks, and keying manual bank transfers. We're going to reimagine the status quo, we're going to digitize the zillions of these offline receivables and payables. One transaction at a time.</p>
                            <button onClick={scrillContactUs} className="company-home-wrapper__btn btn-white"><Chat></Chat> Contact Us</button>
                        </div>
                    </div>
                    <div className="company-home-wrapper__right">
                        <div className="company-home-wrapper__block-img">
                            <img className="company-home-wrapper__img" src={ChatApp} alt="App" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="decor-one"></div>
            <div className="decor-two"></div>
            <div className="decor-three">
                <img src={Decor} alt="Decor" />
            </div>
            <div className="decor-four"></div>
        </motion.section>
    )
}