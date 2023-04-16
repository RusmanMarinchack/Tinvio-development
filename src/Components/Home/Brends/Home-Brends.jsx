import React from "react"
import { motion } from "framer-motion"

// scss
import './Home-Brends.scss'

// svg
import Pymnts from '../../../imgs/svg/pymnts.svg'
import Techcinasia from '../../../imgs/svg/techcinasia.svg'
import Techcrunch from '../../../imgs/svg/techcrunch.svg'
import Venturedeat from '../../../imgs/svg/venturedeat.svg'
import Stars from '../../../imgs/svg/brends-stars.svg'

// png 
import Decor1 from '../../../imgs/brends-decor-1.png'
import Decor2 from '../../../imgs/brends-decor-2.png'
import Decor3 from '../../../imgs/brends-decor-3.png'

export default function Brends() {

    const brendAnimation = {
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
        <section className="brends">
            <div className="brends__container _container">
                <h2 className="brends__title _title">Featured On</h2>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                className="brends__wrapper">
                    <motion.div custom={1} variants={brendAnimation} className="brends__item">
                        <img src={Techcrunch} alt="Techcrunch" />
                    </motion.div>
                    <motion.div custom={2} variants={brendAnimation} className="brends__item">
                        <img src={Techcinasia} alt="Techcinasia" />
                    </motion.div>
                    <motion.div custom={3} variants={brendAnimation} className="brends__item">
                        <img src={Pymnts} alt="Pymnts" />
                    </motion.div>
                    <motion.div custom={4} variants={brendAnimation} className="brends__item">
                        <img src={Venturedeat} alt="Venturedeat" />
                    </motion.div>
                </motion.div>
                
                <div className="brends__decor-1">
                    <img src={Decor1} alt="Decor" />
                </div>
                
                <div className="brends__decor-2">
                </div>
                
                <div className="brends__decor-3">
                </div>
            </div>
            <img className="brends__decor-stars" src={Stars} alt="Stars" />
        </section>
    )
}