import React, { useContext } from "react"

// scss
import './Sounds-easy.scss'

// Context
import { Context } from "../../../Context"

// svg 
import Stars from '../../../imgs/svg/sounds-easy-stars.svg'

// png
import Decor from '../../../imgs/way-us-decor-3.png'

export default function SoundsEasy() {
const {scrollForm} = useContext(Context)


    return (
        <section className="sounds-easy">
            <div className="sounds-easy__container _container">
                <div className="sounds-easy__wrapper">
                    <h2 className="sounds-easy__title _section-title">Sounds easy? Supply chain transactions don’t have to be complicated </h2>
                    <button className="sounds-easy__btn btn-white" onClick={scrollForm}>Get Started</button>
                </div>
                
                <div className="decor-1">
                    <img src={Decor} alt="Decor" />
                </div>
                <div className="decor-2"></div>
            </div>
            <img className="sounds-easy__stars" src={Stars} alt="Stars" />
        </section>
    )
}