import React from "react"
import { motion } from 'framer-motion'

// scss
import './Nostres.scss'

// svg
import { ReactComponent as Calendar } from '../../../imgs/svg/Calendar.svg'
import { ReactComponent as Edit } from '../../../imgs/svg/Edit.svg'
import { ReactComponent as Arrow } from '../../../imgs/svg/arrow-right.svg'
import usersStars1 from '../../../imgs/svg/no-stres-user-stars-1.svg'
import usersStars2 from '../../../imgs/svg/no-stres-user-stars-2.svg'
import { ReactComponent as Line1 } from '../../../imgs/svg/no-stres-line-1.svg'
import { ReactComponent as Line2 } from '../../../imgs/svg/no-stres-line-2.svg'
import { ReactComponent as Line3 } from '../../../imgs/svg/no-stres-line-3.svg'

// png 
import user1 from '../../../imgs/feature/no-stres-user-1.png'
import user2 from '../../../imgs/feature/no-stres-user-2.png'
import Decor from '../../../imgs/feature/sounds-easy-decor.png'

export default function Nostres() {

    let textAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom => (
            {
                x: 0,
                opacity: 1,
                transition: {delay: custom * 0.2}
            }
        )
    }

    let imgAnimation = {
        hidden: {
            opacity: 0
        },
        visible: custom => (
            {
                opacity: 1,
                transition: {delay: custom * 0.2}
            }
        )
    }

    let itemRightAnimation = {
        hidden: {
            x: +100,
            opacity: 0
        },
        visible: custom => (
            {
                x: 0,
                opacity: 1,
                transition: {delay: custom * 0.2}
            }
        )
    }

    let itemLeftAnimation = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: custom => (
            {
                x: 0,
                opacity: 1,
                transition: {delay: custom * 0.2}
            }
        )
    }

    return (
        <motion.section 
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className="nostres">
            <div className="nostres__container _container">
                <div className="nostres__wrapper">
                    <div className="nostres__block-text block-text">
                        <div className="block-text__inner">
                            <motion.h2 custom={1} variants={textAnimation} className="block-text__title _section-title">Breeze through orders without the stress</motion.h2>
                            <motion.p custom={2} variants={textAnimation}>Your customers will love that they can browse item catalogs and check availability before placing orders. You’ll receive orders in beautifully formatted lists. Confirm or amend them in a few taps, even when on-the-go!</motion.p>
                        </div>
                    </div>
                    <div className="nostres__block-img block-img">
                        <div className="block-img__wrapper">
                            <div className="block-img__inner">
                                <div className="block-img__content">
                                    <div className="block-img__users-img-1 users-img">
                                        <motion.div custom={1} variants={imgAnimation} className="users-img__inner">
                                            <img src={user1} alt="User" />
                                        </motion.div>
                                        <img className="users-img__decor-stars-1" src={usersStars1} alt="Stars" />
                                    </div>
                                    <div className="block-img__users-img-2 users-img">
                                        <motion.div custom={3} variants={imgAnimation} className="users-img__inner">
                                            <img src={user2} alt="User" />
                                        </motion.div>
                                        <img className="users-img__decor-stars-2" src={usersStars2} alt="Stars" />
                                    </div>
                                    <motion.div custom={1} variants={itemLeftAnimation} className="block-img__field-order field-order">
                                        <div className="field-order__inner">
                                            <span>
                                                <Edit></Edit>
                                            </span>
                                            <p>Add Catalog to Order List </p>
                                        </div>
                                        <Arrow></Arrow>
                                        <Line1 className="line-1"></Line1>
                                        <Line3 className="line-3"></Line3>
                                    </motion.div>
                                    <motion.div custom={2} variants={itemRightAnimation} className="block-img__field-delivery field-delivery">
                                        <div className="field-delivery__inner">
                                            <div className="label">
                                                <span>
                                                    <Calendar></Calendar>
                                                </span>
                                                <p>Delivery on</p>
                                            </div>
                                            <div className="value">Tue, 27 Oct</div>
                                        </div>
                                        
                                    </motion.div>
                                    <motion.div custom={3} variants={itemLeftAnimation} className="block-img__confirm-order confirm-order">
                                        <Line2 className="line-2"></Line2>
                                        <div className="confirm-order__inner">
                                            <div className="confirm-order__length">
                                                <div className="label">Total Amount</div>
                                                <div className="value">$ <span>1340.00</span></div>
                                            </div>
                                            <button className="confirm-order__btn">Confirm Order (9 Items)</button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="decor-1">
                <img src={Decor} alt="Decor" />
            </div>

            <div className="decor-2">
                <img src={Decor} alt="Decor" />
            </div>

            <div className="decor-3">
                <img src={Decor} alt="Decor" />
            </div>
        </motion.section>
    )
}