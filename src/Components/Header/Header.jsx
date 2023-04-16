import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import { Context } from '../../Context'

// scss
import './Header.scss'

// png
import En from "../../imgs/lenguages/en.png"
import Id from "../../imgs/lenguages/id.png"
import Th from "../../imgs/lenguages/th.png"
import Vh from "../../imgs/lenguages/vh.png"
import In from "../../imgs/in.png"
import Instagram from "../../imgs/instagram.png"
import GooglePlay from "../../imgs/google-play.png"
import AppStore from "../../imgs/app-store.png"

// svg
import Logo from '../../imgs/svg/logo.svg'
import { ReactComponent as Arrow} from '../../imgs/svg/arrow.svg'

export default function Header() {
    let {scrollForm, setHeaderHeight} = useContext(Context)

    let [classBurger, setClassbrurger] = useState('')
    let [menuClicked, setMenuClicked] = useState(true)
    let [activeLink, setActiveLink] = useState(window.location.pathname)

    let headerRef = useRef()
    let linkRef = useRef()

    useEffect(() => {
        setHeaderHeight(headerRef.current)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > headerRef.current.clientHeight) {
                headerRef.current.classList.add('_scroll')
            } else {
                headerRef.current.classList.remove('_scroll')
            }
        })
    }, [])

 
    function activeLenguage(e) {
        if(e.currentTarget.classList[0] === 'lenguages__active') {
            e.currentTarget.classList.toggle('active')
        }
    }

    function activeBurger(e) {
        setMenuClicked(!menuClicked)

        if (menuClicked && (e.currentTarget.classList[0] === 'header__burger')) {
            setClassbrurger('active')
        } else {
            setClassbrurger('')
        }
    }

    function removeActiveBurger() {
        if(activeLink === '/') {
              setClassbrurger('')
        }
    }


    return (
        <header className={`header`} ref={headerRef}>
            <div className="header__container _container">
                <div className="header__logo">
                    <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <div className={`header__lenguages lenguages ${classBurger}`}>
                        <div className={`lenguages__active`} onClick={activeLenguage}>
                            <span>EN</span>
                            <Arrow></Arrow>
                        </div>
                        <ul className="lenguages__list">
                            <li className="lenguages__item">
                                <span data-lenguages="en" >
                                    <img src={En} alt="Lenguages" />
                                </span>
                            </li>
                            <li className="lenguages__item">
                                <span data-lenguages="id" >
                                    <img src={Id} alt="Lenguages" />
                                </span>
                            </li>
                            <li className="lenguages__item">
                                <span data-lenguages="th" >
                                    <img src={Th} alt="Lenguages" />
                                </span>
                            </li>
                            <li className="lenguages__item">
                                <span data-lenguages="vh" >
                                    <img src={Vh} alt="Lenguages" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav className={`header__nav nav ${classBurger}`}>
                    <ul className="nav__menu">
                        <li className="nav__item"><a className={`nav__link ${activeLink === "/" ? "active" : ''}`} href="/" ref={linkRef}>home</a></li>
                        <li className="nav__item"><a className={`nav__link ${activeLink === "/feature" ? "active" : ''}`} href="/feature" ref={linkRef}>Features</a></li>
                        <li className="nav__item"><a className={`nav__link ${activeLink === "/company" ? "active" : ''}`} href="/company" ref={linkRef}>Company</a></li>
                    </ul>

                    <div className="nav__footer nav-footer">
                        <div className="header__block-btns">
                            <button className='header__btn-start mob btn-red' 
                            onClick={() => {
                                removeActiveBurger()
                                scrollForm()
                            }}
                            >Get Started</button>
                        </div>
                        <div className="nav-footer__links">
                            <ul className="nav-footer__list">
                                <li className="nav-footer__item">
                                    <a href="#" className="nav-footer__link">
                                        <img src={In} alt="Link" />
                                    </a>
                                </li>
                                <li className="nav-footer__item">
                                    <a href="#" className="nav-footer__link">
                                        <img src={Instagram} alt="Link" />
                                    </a>
                                </li>
                                <li className="nav-footer__item">
                                    <a href="#" className="nav-footer__link">
                                        <img src={GooglePlay} alt="Link" />
                                    </a>
                                </li>
                                <li className="nav-footer__item">
                                    <a href="#" className="nav-footer__link">
                                        <img src={AppStore} alt="Link" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="header__block-btns">
                    <button className={`header__btn-start ${activeLink !== '/' ? 'btn-red': 'btn-white'}`} onClick={scrollForm}>Get Started</button>
                </div>
                <div className={`header__burger ${classBurger}`} onClick={activeBurger}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}