import React from "react"

// scss
import './Footer.scss'

// svg
import Logo from '../../imgs/svg/logo.svg'

// png
import In from "../../imgs/in.png"
import Instagram from "../../imgs/instagram.png"
import GooglePlay from "../../imgs/google-play.png"
import AppStore from "../../imgs/app-store.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content footer-content">
                <div className="footer-content__container _container">
                    <div className="nav__footer nav-footer">
                        <div className="footer-content__inner">
                            <div className="footer-content__logo">
                                <a href="#">
                                    <img src={Logo} alt="Logo" />
                                </a>
                            </div>
                            <span className="well"></span>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/feature">Features</a></li>
                                <li><a href="/Company">Company</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
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
                                    </ul>
                                    <span className="well"></span>
                                    <ul className="nav-footer__list">
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
                </div>
            </div>
            <div className="footer__bottom footer-bottom">
                    <div className="footer-bottom__container _container">
                        <div className="footer-bottom__item"><a className="footer-bottom__link" href="#">© Tinvio™ 2020. All Rights Reserved</a></div>
                        <span className="well"></span>
                        <div className="footer-bottom__item"><a className="footer-bottom__link" href="/privacy-policy">Privacy Policy</a></div>
                        <span className="well"></span>
                        <div className="footer-bottom__item"><a className="footer-bottom__link" href="/terms-service">Terms of Service</a></div>
                    </div>
            </div>
        </footer>
    )
}