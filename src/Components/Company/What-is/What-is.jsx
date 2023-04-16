import React from "react"
import CountUp from "react-countup"
import { useSpring, animated } from 'react-spring';
import { useInView } from "react-intersection-observer"
// import { AnimatedNumber } from 'react-animated-numbers';

// scss
import './What-is.scss'

// png
import Decor from '../../../imgs/Company/what-is-decor.png'

export default function WhatIs() {
const {ref, inView, entry} = useInView({})



const AnimatedNumber = () => {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: 10000 },
      config: { duration: 5000 },
    });
  
    return (
      <animated.span>{number.toFixed()}</animated.span>
    );
  };

console.log(inView)

    return (
        <section className="what-is">
            <div className="what-is__container _container">
                <div className="what-is__wrapper" ref={ref}>
                    <div className="what-is__item down sides members">
                        <div className="what-is__inner">
                            <div className="what-is__label">
                                {
                            inView && <CountUp 
                                    start={0}
                                    end={250}
                                    duration={1}
                                    separator=""
                                    />
                                }
                                <span className="red">+</span>
                            </div>
                            <div className="what-is__value">Team Members</div>
                        </div>
                        <div className="members__decor-one"></div>
                        <div className="members__decor-two"></div>
                        <div className="members__decor-three"></div>
                    </div>
                    <div className="what-is__item up nationalities">
                        <div className="what-is__inner">
                            <div className="what-is__label">

                            {
                            inView && <CountUp 
                                start={0}
                                end={10}
                                duration={1}
                                separator=""
                                />
                            }
                                <span className="red">+</span></div>
                                <div className="what-is__value">Nationalities</div>
                            </div>
                            <div className="nationalities__decor-one"></div>
                            <div className="nationalities__decor-two">
                            <img src={Decor} alt="Decor" />
                        </div>
                    </div>
                    <div className="what-is__item down businesses">
                        <div className="what-is__inner">
                            <div className="what-is__label">
                            {
                            inView && <CountUp 
                                start={0}
                                end={5000}
                                duration={1}
                                separator=""
                                />
                            }
                            <span className="red">+</span></div>
                            <div className="what-is__value">Businesses</div>
                        </div>

                        <div className="businesses__decor-one"></div>
                        <div className="businesses__decor-two">
                            <img src={Decor} alt="Decor" />
                        </div>
                    </div>
                    <div className="what-is__item up sides transactions">
                        <div className="what-is__inner">
                            <div className="what-is__label">$
                            {
                            inView && <CountUp 
                                start={0}
                                end={500}
                                duration={1}
                                separator=""
                                />
                                }
                            <span className="red">M</span></div>
                            <div className="what-is__value">Transactions</div>
                        </div>
                        <div className="transactions__decor-one"></div>
                        <div className="transactions__decor-two">
                            <img src={Decor} alt="Decor" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}