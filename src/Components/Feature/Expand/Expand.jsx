import React, {useContext} from "react"

// scss
import './Expand.scss'

// Context
import { Context } from "../../../Context"

// png 
import DecorImg from '../../../imgs/way-us-decor-3.png'

export default function Expand() {
const {scrollForm} = useContext(Context)

    return (
        <section className="expand">
            <div className="expand__container _container">
                <div className="expand__wrapper">
                    <div className="expand__sub-title">Are you ready?</div>
                    <h2 className="expand__title _section-title">Supercharge your business, the Tinvio way</h2>
                    <button className="expand__btn btn-red" onClick={scrollForm}>Get Started</button>
                </div>
            </div>

            <div className="decor one"></div>
            <div className="decor two"></div>
            <div className="decor three">
                <img src={DecorImg} alt="Decor" />
            </div>
            <div className="decor four">
                <img src={DecorImg} alt="Decor" />
            </div>
        </section>
    )
}