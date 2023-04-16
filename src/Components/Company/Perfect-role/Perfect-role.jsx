import React from "react"
import { motion } from 'framer-motion'

// scss
import './Perfect-role.scss'

// png 
import imgUser1 from '../../../imgs/Company/perfect-role-city-one.png'
import imgUser1_1280 from '../../../imgs/Company/perfect-role-city-one_1280.png'
import imgUser1_768 from '../../../imgs/Company/perfect-role-city-one_768.png'
import imgUser1_370 from '../../../imgs/Company/perfect-role-city-one_370.png'
import imgUser2_1280 from '../../../imgs/Company/perfect-role-city-two_1280.png'
import imgUser2_768 from '../../../imgs/Company/perfect-role-city-two_768.png'
import imgUser2_370 from '../../../imgs/Company/perfect-role-city-two_370.png'
import imgUser2 from '../../../imgs/Company/perfect-role-city-two.png'
import imgUser3_1280 from '../../../imgs/Company/perfect-role-city-three_1280.png'
import imgUser3_768 from '../../../imgs/Company/perfect-role-city-three_768.png'
import imgUser3_370 from '../../../imgs/Company/perfect-role-city-three_370.png'
import imgUser3 from '../../../imgs/Company/perfect-role-city-three.png'
import imgUser4 from '../../../imgs/Company/perfect-role-city-four.png'
import imgUser4_1280 from '../../../imgs/Company/perfect-role-city-four_1280.png'
import imgUser4_768 from '../../../imgs/Company/perfect-role-city-four_768.png'
import imgUser4_370 from '../../../imgs/Company/perfect-role-city-four_370.png'
import Decor from '../../../imgs/Company/perfect-role-decor.png'

// svg 
import Stras1 from '../../../imgs/svg/your-business-stars-1.svg'

export default function PerfectRole() {

    let imgAnimation = {
        hidden: {
            opacity: 0
        },
        visible: custom => ({
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }

    return (
        <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="perfect-role">
            <div className="perfect-role__container _container">
                <div className="perfect-role__wrapper">
                    <div className="perfect-role__gallery perfect-role-gallery">
                        <motion.div custom={1} variants={imgAnimation} className="perfect-role-gallery__item item-1">
                            <picture>
                                <source srcSet={imgUser1} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser1_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser1_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser1_370} alt="User" />
                            </picture>
                        </motion.div>
                        <motion.div custom={2} variants={imgAnimation} className="perfect-role-gallery__item item-2">
                            <picture>
                                <source srcSet={imgUser2} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser2_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser2_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser2_370} alt="User" />
                            </picture>
                        </motion.div>
                        <motion.div custom={3} variants={imgAnimation} className="perfect-role-gallery__item item-3">
                        <picture>
                                <source srcSet={imgUser3} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser3_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser3_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser3_370} alt="User" />
                            </picture>
                        </motion.div>
                        <motion.div custom={4} variants={imgAnimation} className="perfect-role-gallery__item item-4">
                        <picture>
                                <source srcSet={imgUser4} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser4_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser4_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser4_370} alt="User" />
                            </picture>
                        </motion.div>
                    </div>
                    <div className="perfect-role__block-title">
                        <h2 className="perfect-role__title">
                            <span className="stars-1"></span>
                            Global, local, remote. Find the perfect role
                        </h2>
                        <a href="#" className="perfect-role__btn btn-white">Explore Roles</a>
                    </div>
                </div>
            </div>
            <div className="decor one"></div>
            <div className="decor two">
                <img src={Decor} alt="Decor" />
            </div>
        </motion.section>
    )
}