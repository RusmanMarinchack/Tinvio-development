import React from "react"
import { motion } from "framer-motion"

// scss
import './Supply-Chain.scss'

// png
import Bbs1 from '../../../imgs/bbs.png'
import Nex2 from '../../../imgs/nex.png'
import Gembul3 from '../../../imgs/gembul.png'
import Tk4 from '../../../imgs/tk.png'
import Nayla5 from '../../../imgs/nayla.png'
import Group6 from '../../../imgs/group.png'
import d7 from '../../../imgs/d.png'
import KhePs8 from '../../../imgs/kho-ps.png'
import GongCha9 from '../../../imgs/gongcha.png'
import EsTeh10 from '../../../imgs/es-teh.png'
import Decor1 from '../../../imgs/supply-chain-decor-1.png'
import Decor2 from '../../../imgs/supply-chain-decor-2.png'
import Decor3 from '../../../imgs/supply-chain-decor-3.png'
import Decor4 from '../../../imgs/supply-chain-decor-4.png'

// svg
import { ReactComponent as CurvedLine } from '../../../imgs/svg/curved-line.svg'

export default function SupplyChain() {

    const elementAnimationLeft = {
        hidden: {
            opacity: 0
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.2 } 
        })
    }

    const elementAnimationRight = {
        hidden: {
            opacity: 0
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.2 } 
        })
    }

    const elementAnimationCenter = {
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
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="supply-chain">
            <div className="supply-chain__container _container">
                <h2 className="supply-chain__title _section-title">We’ll put a smile on your supply chain </h2>
                <div className="supply-chain__wrapper">
                    <div className="supply-chain__inner column-one left">
                        <motion.div custom={1} variants={elementAnimationLeft} className="supply-chain__item">
                            <img src={Bbs1} alt="Icon" />
                        </motion.div>
                    </div>
                    <div className="supply-chain__inner column-two left">
                        <motion.div custom={2} variants={elementAnimationLeft} className="supply-chain__item">
                            <img src={Nex2} alt="Icon" />
                        </motion.div>
                        <motion.div custom={2} variants={elementAnimationLeft} className="supply-chain__item">
                            <img src={Gembul3} alt="Icon" />
                        </motion.div>
                    </div>
                    <div className="supply-chain__inner column-three left">
                        <motion.div custom={3} variants={elementAnimationLeft} className="supply-chain__item">
                            <img src={Tk4} alt="Icon" />
                        </motion.div>
                        <motion.div custom={3} variants={elementAnimationLeft} className="supply-chain__item">
                            <img src={Nayla5} alt="Icon" />
                        </motion.div>
                    </div>
        
                    <motion.div custom={3} variants={elementAnimationCenter} className="supply-chain__center center">
                        <div className="center__decor"></div>
                        <div className="center__decor-opacity"></div>
                        <div className="center__wrapper">
                            <div className="center__content">
                                <div className="center__text">
                                    <span>5000+ </span>
                                    happy businesses
                                </div>
                                <CurvedLine className="curved-line"></CurvedLine>
                            </div>
                            
                        </div>
                    </motion.div>

                    <div className="supply-chain__inner column-three right">
                        <motion.div custom={3} variants={elementAnimationRight} className="supply-chain__item">
                            <img src={Group6} alt="Icon" />
                        </motion.div>
                        <motion.div custom={3} variants={elementAnimationRight} className="supply-chain__item">
                            <img src={d7} alt="Icon" />
                        </motion.div>
                    </div>
                    <div className="supply-chain__inner column-two right">
                        <motion.div custom={2} variants={elementAnimationRight} className="supply-chain__item">
                            <img src={KhePs8} alt="Icon" />
                        </motion.div>
                        <motion.div custom={2} variants={elementAnimationRight} className="supply-chain__item">
                            <img src={GongCha9} alt="Icon" />
                        </motion.div>
                    </div>
                    <div className="supply-chain__inner column-one right">
                        <motion.div custom={1} variants={elementAnimationRight} className="supply-chain__item">
                            <img src={EsTeh10} alt="Icon" />
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <div className="supply-chain__decort decort-1">
                <img src={Decor1} alt="Dector" />
            </div>
            
            <div className="supply-chain__decort decort-2">
                <img src={Decor2} alt="Dector" />
            </div>
            
            <div className="supply-chain__decort decort-3">
                <img src={Decor3} alt="Dector" />
            </div>
            
            <div className="supply-chain__decort decort-4">
                <img src={Decor4} alt="Dector" />
            </div>
        </motion.section>
    )
}