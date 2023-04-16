import React, {useContext} from "react"
import { motion } from "framer-motion"

// Context
import { Context } from "../../../Context"

// scss
import './Home-main.scss'


// png 
import AppDecstop from '../../../imgs/app-desctop.png'
import AppMob from '../../../imgs/app-mob.png'
import DecorRectanges from '../../../imgs/decor-rectanges.png'
import Decor from '../../../imgs/decor-rectanges-white.png'

// svg
import Stars from '../../../imgs/svg/home-main-decor-stars.svg'

export default function HomeMain() {
const {scrollForm} = useContext(Context)
    
    const textAnimation = {
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
    


    return ( 
        <>
        <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="home-main">
            <div className="home-main__container _container">
                <div className="home-main__wrapper">
                    <div className="home-main__blok-text blok-text">
                        <div className="blok-text__inner">
                            <motion.h1 custom={1} variants={textAnimation} className="blok-text__title _title">
                                <img className="stars" src={Stars} alt="Stars" />Collecting payments <span className="red">is easy</span>, right?
                            </motion.h1>
                            <motion.p custom={2} variants={textAnimation}>Manage all your supply chain transactions in one dashboard. Get paid faster, reconcile quicker, grow bigger. </motion.p>
                            <motion.button custom={3} variants={textAnimation} onClick={scrollForm} className="blok-text__btn btn-red">Get Started Now </motion.button>
                            <motion.span custom={4} variants={textAnimation} className="blok-text__label">
                                It's free to try!
                            </motion.span>
                        </div>
                    </div>
                    <div className="home-main__blok-img blok-img">
                        <div className="blok-img__decors decors">
                            <div className="decors__item">
                                <img className="blok-img__img-mob" src={AppMob} alt="Image" />
                                <img className="blok-img__img-desctop" src={AppDecstop} alt="Image" />
                            </div>
                            <img className="decors__min" src={DecorRectanges} alt="Decor" />
                            <img className="decors__big" src={DecorRectanges} alt="Decor" />
                        </div>
                    </div>
                </div>  
            </div>
            <div className="decor-one"></div>
            <div className="decor-two"></div>
            <div className="decor-three">
                <img src={Decor} alt="Decor" />
            </div>
        </motion.section>
        </>
    )
}