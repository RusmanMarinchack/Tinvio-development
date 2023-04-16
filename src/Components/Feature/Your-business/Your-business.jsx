import React from "react"
import { motion } from 'framer-motion'

// scss
import './Your-business.scss'

// png 
import imgUser1 from '../../../imgs/feature/your-business-user-1.png'
import imgUser1_1280 from '../../../imgs/feature/your-business-user-1-1280.png'
import imgUser1_768 from '../../../imgs/feature/your-business-user-1-768.png'
import imgUser1_370 from '../../../imgs/feature/your-business-user-1-370.png'
import imgUser2_1280 from '../../../imgs/feature/your-business-user-2-1280.png'
import imgUser2_768 from '../../../imgs/feature/your-business-user-2-768.png'
import imgUser2_370 from '../../../imgs/feature/your-business-user-2-370.png'
import imgUser2 from '../../../imgs/feature/your-business-user-2.png'
import imgUser3_1280 from '../../../imgs/feature/your-business-user-3-1280.png'
import imgUser3_768 from '../../../imgs/feature/your-business-user-3-768.png'
import imgUser3_370 from '../../../imgs/feature/your-business-user-3-370.png'
import imgUser3 from '../../../imgs/feature/your-business-user-3.png'
import imgUser4 from '../../../imgs/feature/your-business-user-4.png'
import imgUser4_1280 from '../../../imgs/feature/your-business-user-4-1280.png'
import imgUser4_768 from '../../../imgs/feature/your-business-user-4-768.png'
import imgUser4_370 from '../../../imgs/feature/your-business-user-4-370.png'


export default function YourBusiness() {

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
        className="your-business">
            <div className="your-business__container _container">
                <div className="your-business__wrapper">
                    <div className="your-business__gallery your-business-gallery">
                        <motion.div custom={1} variants={imgAnimation} className="your-business-gallery__item item-1">
                            <picture>
                                <source srcSet={imgUser1} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser1_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser1_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser1_370} alt="User" />
                            </picture>
                        </motion.div>
                        <motion.div custom={2} variants={imgAnimation} className="your-business-gallery__item item-2">
                            <picture>
                                <source srcSet={imgUser2} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser2_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser2_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser2_370} alt="User" />
                            </picture>
                        </motion.div>
                        <motion.div custom={3} variants={imgAnimation} className="your-business-gallery__item item-3">
                        <picture>
                                <source srcSet={imgUser3} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser3_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser3_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser3_370} alt="User" />
                            </picture>
                        </motion.div>
                        <motion.div custom={4} variants={imgAnimation} className="your-business-gallery__item item-4">
                        <picture>
                                <source srcSet={imgUser4} media="(min-width: 1279.98px)"></source>
                                <source srcSet={imgUser4_1280} media="(min-width: 767.98px)"></source>
                                <source srcSet={imgUser4_768} media="(min-width: 399.98px)"></source>
                                <img src={imgUser4_370} alt="User" />
                            </picture>
                        </motion.div>
                    </div>
                    <div className="your-business__block-title">
                        <h2 className="your-business__title">
                            <span className="stars-1" />
                            It’s your business. Run it like a rockstar
                            <span className="stars-2" />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="decor one"></div>
            <div className="decor two"></div>
        </motion.section>
    )
}