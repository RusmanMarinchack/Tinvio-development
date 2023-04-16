import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper"

// scss
import './Why-us.scss'

// swiper css
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

// png
import ProductEggs from '../../../imgs/product-eggs.png'
import ProductFig from '../../../imgs/product-fig.png'
import ProductMilk from '../../../imgs/product-milk.png'
import ProductCoffe from '../../../imgs/product-coffe.png'
import Decor1 from '../../../imgs/way-us-decor-1.png'
import Decor2 from '../../../imgs/way-us-decor-2.png'
import Decor3 from '../../../imgs/way-us-decor-3.png'
import Decor4 from '../../../imgs/way-us-decor-4.png'

// svg
import FathiraDida from '../../../imgs/svg/fathira-dida.svg'
import PunnasiriChaipatikul from '../../../imgs/svg/punnasiri-chaipatikul.svg'
import PaulineLimgenco from '../../../imgs/svg/pauline-limgenco.svg'
import HafidzIndah from '../../../imgs/svg/hafidz-indah.svg'
import ProductFigStars from '../../../imgs/svg/product-fig-stars.svg'
import ProductCoffeStars from '../../../imgs/svg/product-coffe-stars.svg'
import ProductMilkStars from '../../../imgs/svg/product-milk-stars.svg'
import ProductEggsStars from '../../../imgs/svg/product-eggs-stars.svg'
// import brackets from '../../../imgs/svg/brackets.svg'
 
export default function WhyUs() {
    return (
        <section className="why-us">
            <div className="why-us__container _container">
                <h2 className="why-us__title _section-title">Why choose Tinvio?</h2>
                <div className="why-us__wrapper">
                    <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    loop={true}
                    className="why-us__swiper"
                    >
                        <SwiperSlide className="why-us__swiper-item why-us-item coffe">
                            <div className="why-us-item__inner">
                                <div className="why-us-item__blok-img">
                                    <img className="stars" src={ProductCoffeStars} alt="Stars" />
                                    <img className="element" src={ProductCoffe} alt="Product" />
                                </div>
                                <div className="why-us-item__discription">
                                    <div className="why-us-item__text">
                                        <p>With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.</p>
                                    </div>
                                    <div className="why-us-item__logo">
                                        <div className="why-us-item__img">
                                            <img src={PaulineLimgenco} alt="Logo" />
                                        </div>
                                        <div className="why-us-item__name">
                                            <div className="name">Pauline Limgenco</div>
                                            <div className="sub-name">Director (Moonleaf)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="why-us__swiper-item why-us-item milk">
                            <div className="why-us-item__inner">
                                <div className="why-us-item__blok-img">
                                <img className="stars" src={ProductMilkStars} alt="Stars" />
                                    <img className="element" src={ProductMilk} alt="Product" />
                                </div>
                                <div className="why-us-item__discription">
                                    <div className="why-us-item__text">
                                        <p>Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.</p>
                                    </div>
                                    <div className="why-us-item__logo">
                                        <div className="why-us-item__img">
                                            <img src={PunnasiriChaipatikul} alt="Logo" />
                                        </div>
                                        <div className="why-us-item__name">
                                            <div className="name">Punnasiri Chaipatikul</div>
                                            <div className="sub-name">Business Development Manager (Phaitong Station)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="why-us__swiper-item why-us-item fig">
                            <div className="why-us-item__inner">
                                <div className="why-us-item__blok-img">
                                    <img className="stars" src={ProductFigStars} alt="Stars" />
                                    <img className="element" src={ProductFig} alt="Product" />
                                </div>
                                <div className="why-us-item__discription">
                                    <div className="why-us-item__text">
                                        <p>Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.</p>
                                    </div>
                                    <div className="why-us-item__logo">
                                        <div className="why-us-item__img">
                                            <img src={HafidzIndah} alt="Logo" />
                                        </div>
                                        <div className="why-us-item__name">
                                            <div className="name">Hafidz & Indah</div>
                                            <div className="sub-name">Owners (Sejadah Grocery)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="why-us__swiper-item why-us-item eggs">
                            <div className="why-us-item__inner">
                                <div className="why-us-item__blok-img">
                                    <img className="stars" src={ProductEggsStars} alt="Stars" />
                                    <img className="element" src={ProductEggs} alt="Product" />
                                </div>
                                <div className="why-us-item__discription">
                                    <div className="why-us-item__text">
                                        <p>Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.</p>
                                    </div>
                                    <div className="why-us-item__logo">
                                        <div className="why-us-item__img">
                                            <img src={FathiraDida} alt="Logo" />
                                        </div>
                                        <div className="why-us-item__name">
                                            <div className="name">Fathira Dida</div>
                                            <div className="sub-name">Owner (Baker Old)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            
            <div className="why-us__decor-1">
                <img src={Decor1} alt="Decor" />
            </div>
            
            <div className="why-us__decor-3">
                <img src={Decor3} alt="Decor" />
            </div>
            
            <div className="why-us__decor-2">
                <img src={Decor2} alt="Decor" />
            </div>
            
            <div className="why-us__decor-4">
                <img src={Decor4} alt="Decor" />
            </div>
        </section>
    )
}