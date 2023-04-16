import React, { useContext } from "react"
import { motion } from "framer-motion"

// scss
import './Feature-home.scss'

// Context
import { Context } from "../../../Context"

// png
import App from '../../../imgs/feature/app.png'
import Request from '../../../imgs/feature/request.png'
import Banner1920 from '../../../imgs/feature/feature-banner-1920.png'
import Banner1440 from '../../../imgs/feature/feature-banner-1440.png'
import Banner1280 from '../../../imgs/feature/feature-banner-1280.png'
import Banner1024 from '../../../imgs/feature/feature-banner-1024.png'
import Banner768 from '../../../imgs/feature/feature-banner-768.png'
import Banner576 from '../../../imgs/feature/feature-banner-576.png'
import Decor from '../../../imgs/decor-rectanges-white.png'

// svg
import {ReactComponent as BigLine} from '../../../imgs/svg/big-line.svg'
import {ReactComponent as MinLine} from '../../../imgs/svg/min-line.svg'

export default function FeatureHome() {
    const {formRef, scrollForm} = useContext(Context)

    const textAnimation = {
        hidden: {
            opacity: 0
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.2 } 
        })
    }

    const textRightAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 } 
        })
    }

    const textLeftAnimation = {
        hidden: {
            x: +100,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 } 
        })
    }

    return (
        <>
        <motion.section 
        initial='hidden'
        whileInView='visible'
        viewport={{ onse: true }}
        className="featurn-home">
            <div className="featurn-home__container _container">
                <div className="featurn-home__wrapper">
                    <div className="featurn-home__block-title">
                        <motion.h1 custom={1} variants={textAnimation} className="featurn-home__title _title">One dashboard, all your supply chain transactions</motion.h1>
                        <motion.div custom={2} variants={textAnimation} className="featurn-home__subtitle">From orders to real-time cash in your bank.Run your business like a rockstar.</motion.div>
                        <motion.button custom={3} variants={textAnimation} className="featurn-home__btn btn-red" onClick={scrollForm} ref={formRef}>Try It for Free </motion.button>
                    </div>
                    <div className="featurn-home__banner">
                        <picture>
                            {/* <source srcSet={Banner1920} media="(min-width: 1920.98px)"/> */}
                            <source srcSet={Banner1440} media="(min-width: 1919.98px)"/>
                            <source srcSet={Banner1280} media="(min-width: 1279.98px)"/>
                            <source srcSet={Banner1024} media="(min-width: 1023.98px)"/>
                            <source srcSet={Banner768} media="(min-width: 575.98px)"/>
                            <img className="featurn-home__backgraund-img" src={Banner576} alt="Banner" />
                        </picture>
                        <motion.img custom={1} variants={textRightAnimation} className="featurn-home__app" src={App} alt="App" />
                        <motion.img custom={2} variants={textLeftAnimation} className="featurn-home__request" src={Request} alt="App" />
                        <BigLine className="featurn-home__big-line"></BigLine>
                        <MinLine className="featurn-home__min-line"></MinLine>
                        
                        <div className="featurn-home__decor decor-1">
                            <img src={Decor} alt="App" />
                        </div>
                        
                        <div className="featurn-home__decor decor-2">
                            <img src={Decor} alt="App" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
        </>
    )
}