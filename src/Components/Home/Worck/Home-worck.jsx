import React from "react"
import { motion } from "framer-motion"

// scss
import './Home-worck.scss'

// svg 
import { ReactComponent as ArrowLeft } from "../../../imgs/svg/curved-arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../../imgs/svg/curved-arrow-right.svg"
import { ReactComponent as Play } from "../../../imgs/svg/icon-play.svg"
import Stars1 from "../../../imgs/svg/home-work-decor-stars-1.svg"
import Stars2 from "../../../imgs/svg/home-work-decor-stars-2.svg"
import Stars4 from "../../../imgs/svg/home-work-decor-stars-4.svg"
import Stars3 from "../../../imgs/svg/home-work-decor-stars-3.svg"
import ChatsIcon from '../../../imgs/svg/home-worc-icon-1.svg'
import OrdersIcon from '../../../imgs/svg/home-worc-icon-2.svg'
import PaymentsIcon from '../../../imgs/svg/home-worc-icon-3.svg'


// png
import DecorRectangesWhite from '../../../imgs/decor-rectanges-white.png'

export default function HomeWorck() {
    const textAnimation = {
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

    const animationItemLeft = {
        hidden: {
            x: -150,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }   
        })
    }

    const animationItemRigth = {
        hidden: {
            x: +150,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }   
        })
    }

    return (
        <>
            <section className="section-worck">
                <div className="section-worck__container _container">
                    <div className="section-worck__decor decor-1">
                        <img src={DecorRectangesWhite} alt="Decor" />
                    </div>
                    <div className="section-worck__decor decor-2">
                        <img src={DecorRectangesWhite} alt="Decor" />
                    </div>
                    <div className="section-worck__decor decor-3"></div>
                    
                    
                    <div className="section-worck__wrapper">
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: true }}
                        className="section-worck__info worck-info">
                            <div className="worck-info__list">
                                <motion.div custom={1} variants={animationItemLeft} className="worck-info__item chats">
                                    <div className="worck-info-card__icon">
                                            <img src={ChatsIcon} alt="Icon" />
                                    </div>
                                    <div className="worck-info__card worck-info-card">
                                        <h4 className="worck-info-card__title">Chats</h4>
                                        <p>Connect to anyone in your supply chain and exchange messages </p>
                                    </div>
                                    <div className="worck-info__stars">
                                        <img src={Stars1} alt="Stars"  />
                                    </div>
                                    <ArrowRight className="worck-info-card__arrow-right"></ArrowRight>
                                </motion.div>
                                <motion.div custom={2} variants={animationItemRigth} className="worck-info__item orders">
                                <div className="worck-info-card__icon">
                                        <img src={OrdersIcon} alt="Icon" />
                                    </div>
                                    <div className="worck-info__card worck-info-card">    
                                        <h4 className="worck-info-card__title">Orders</h4>
                                        <p>Create or confirm purchase orders with tap of a button </p>
                                    </div>
                                    <div className="worck-info__stars">
                                        <img src={Stars2} alt="Stars"  />
                                    </div>
                                    <ArrowLeft className="worck-info-card__arrow-left"></ArrowLeft>
                                </motion.div>
                                <motion.div custom={3} variants={animationItemLeft} className="worck-info__item payments">
                                    <div className="worck-info-card__icon">
                                        <img src={PaymentsIcon} alt="Icon" />
                                    </div>
                                    <div className="worck-info__card worck-info-card">
                                        <h4 className="worck-info-card__title">Payments</h4>
                                        <p>Send invoices and reconcile payments in one dashboard </p>
                                    </div>
                                    <div className="worck-info__stars stars-1">
                                        <img src={Stars3} alt="Stars"  />
                                    </div>
                                    <div className="worck-info__stars stars-2">
                                        <img src={Stars4} alt="Stars"  />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3, once: true }}
                        className="section-worck__content worck-content">
                            <div className="worck-content__inner">
                                <motion.h2 custom={1} variants={textAnimation} className="worck-content__title _section-title">Check out how it works </motion.h2>
                                <motion.p custom={2} variants={textAnimation}>It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments across your supply chain — all within one dashboard.</motion.p>
                                <motion.button custom={3} variants={textAnimation} className="worck-content__btn-video btn-white"><Play></Play> <span>Play Video</span></motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}