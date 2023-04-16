import React, {useState} from "react"

// scss
import './Manage.scss'

// svg
import { ReactComponent as Plus } from '../../../imgs/svg/plus.svg'
import { ReactComponent as Clip } from '../../../imgs/svg/clip.svg'
import { ReactComponent as ArrowRight } from '../../../imgs/svg/arrow-right.svg'
import { ReactComponent as Dolar } from '../../../imgs/svg/dolar.svg'
import { ReactComponent as AddLinks } from '../../../imgs/svg/add-links.svg'

// png 
import AppImg from '../../../imgs/feature/manage-app.png'
import DecorBlockLinks from '../../../imgs/decor-rectanges-white.png'
import DecorLeft from '../../../imgs/way-us-decor-3.png'
import DecorBlock from '../../../imgs/way-us-decor-3.png'

export default function Manage() {
    const [focusMsg, setFocusMsg] = useState(false)


    return (
        <section className="manage">
            <div className="manage__container _container">
                <div className="manage__wrapper">
                    <div className="manage__left manage-left">
                        <div className="manage-left__inner">
                            <h4 className="manage-left__title">Manage orders</h4>
                            <p>Yay, you’ve got a new order! Check and confirm the order in lightning speed</p>
                            <div className="manage-left__img-app">
                                <img src={AppImg} alt="App" />
                            </div>
                        </div>
                        <img className="manage-left__decor-1" src={DecorBlock} alt="Decor" />
                        <div className="manage-left__decor-2"></div>
                        <div className="manage-left__decor-3"></div>
                    </div>
                    <div className="manage__right manage-right">
                        <div className="manage-right__inner">
                            <div className="manage-right__messages messages">
                                <form action="#" className="messages__form messages-form" >
                                    <button type="button" className="btn clip">
                                        <Clip></Clip>
                                    </button>
                                    <button type="button" className="btn plus">
                                        <Plus></Plus>
                                    </button>
                                    <div className={`messages-form__item ${focusMsg ? 'focus' : ''}`}>
                                        <input 
                                        onFocus={() => 
                                            setFocusMsg(true)
                                        } 
                                        onBlur={() => 
                                            setFocusMsg(false)
                                        } 
                                        type="text" placeholder="Type something..."/>
                                        <button className="messages-form__submit">
                                            <ArrowRight></ArrowRight>
                                        </button>
                                    </div>
                                </form>
                                <h5 className="messages__title">Send messages</h5>
                                <img className="messages__decor-1" src={DecorBlock} alt="Decor" />
                                <div className="messages__decor-2"></div>
                                <div className="messages__decor-3"></div>
                            </div>
                            <div className="manage-right__bottom">
                                <div className="manage-right__create create">
                                    <div className="create__inner">
                                        <h5 className="create__title">Create invoices</h5>
                                        <button className="create__btn">
                                            <span>
                                                <Dolar></Dolar>
                                            </span>
                                        </button>
                                    </div>
                                    <img className="create__decor-1" src={DecorBlock} alt="Decor" />
                                    <div className="create__decor-2"></div>
                                    <div className="create__decor-3"></div>
                                </div>
                                <div className="manage-right__add-links add-links">
                                    <div className="add-links__inner">
                                        <button className="add-links__btn">
                                            <AddLinks></AddLinks>
                                        </button>
                                        <h5 className="add-links__title">Share payment links</h5>
                                    </div>
                                    <div  className="add-links__decor-1">
                                        <img src={DecorBlockLinks} alt="Decor" />
                                    </div>
                                    <div className="add-links__decor-2"></div>
                                    <div className="add-links__decor-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}