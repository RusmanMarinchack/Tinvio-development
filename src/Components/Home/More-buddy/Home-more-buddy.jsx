import React, { useState, useRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"

// scss
import './Home-more-buddy.scss'

// svg 
import MoreSuddyStars from "../../../imgs/svg/more-buddy-stars.svg"

// png
import MoreBuddyChats1 from '../../../imgs/more-buddy-chats-1.png'
import MoreBuddyChats2 from '../../../imgs/more-buddy-chats-2.png'
import MoreBuddyChats3 from '../../../imgs/more-buddy-chats-3.png'
import MoreBuddyChats4 from '../../../imgs/more-buddy-chats-4.png'
import MoreBuddyChats5 from '../../../imgs/more-buddy-chats-5.png'
import MoreBuddyChats6 from '../../../imgs/more-buddy-chats-6.png'
import DecorRectanges from '../../../imgs/decor-rectanges.png'

export default function MoreBuddy() {
    const [tabIndex, setTabIndex] = useState(1)
    const [moreText, setMoreText] = useState('')
    const [imgChatOne, setImgChatOne] = useState('')
    const [imgChatTwo, setImgChatTwo] = useState('')

    let titleActive = ['More budyy', 'More speedy', 'More money']

    let refPrintTitle = useRef()
    let refImgChat1 = useRef()
    let refImgChat2 = useRef()
    let [count, setCount] = useState(0);

    const  { ref , inView , entry }  =  useInView ( { 
        threshold : 0.3, 
      } ) ;

    function printText() {
        if (inView) {
            if(count <= titleActive[tabIndex - 1].length) {
                setTimeout(() => {
                    refPrintTitle.current.style.width = `${count}ch`
                    setCount(count + 1)
                }, 40)
            }
        } else {
            refPrintTitle.current.style.width = `0ch`
            setCount(0)
        }
    }

    useEffect(() => {
        printText()
    }, [count])

    useEffect(() => {
        printText()
    }, [inView])
    
    
    useEffect(() => {
        let delay1 = 250
        let delay2 = 500

        setCount(0)
        setMoreText(titleActive[tabIndex - 1])

        if (tabIndex === 1) {
            setTimeout(() => {
                setImgChatOne(MoreBuddyChats1)
            }, delay1)
            
            setTimeout(() => {
                setImgChatTwo(MoreBuddyChats2)
            }, delay2)
        } else if (tabIndex === 2) {
            setTimeout(() => {
                setImgChatOne(MoreBuddyChats3)
            }, delay1)
            
            setTimeout(() => {
                setImgChatTwo(MoreBuddyChats4)
            }, delay2)
        } else if (tabIndex === 3) {
            setTimeout(() => {
                setImgChatOne(MoreBuddyChats5)
            }, delay1)
            
            setTimeout(() => {
                setImgChatTwo(MoreBuddyChats6)
            }, delay2)
        }

        refImgChat1.current.classList.remove('active')
        setTimeout(() => {
            refImgChat1.current.classList.add('active')
        }, 0)

        refImgChat2.current.classList.remove('active')

        setTimeout(() => {
                refImgChat2.current.classList.add('active')
        }, delay1)
    

    }, [tabIndex])

    return (
        <>
            <section className="more-buddy" ref={ref}>
                <div className="more-buddy__container _container">
                    <div className="more-buddy__wrapper">
                        <div className="more-buddy__block-text block-text">
                            <div className="block-text__inner">
                            <h2 className="block-text__title _title">
                            Smarter supply chain transactions. <span className="red" ref={refPrintTitle}>{moreText}</span>
                            </h2>
                            <div className="block-text__tabs tabs">
                                <div className="tabs__header">
                                    <button
                                    className={`tabs__btn ${tabIndex === 1 ? 'active' : ''}`} 
                                    onClick={() => setTabIndex(1)}
                                    >Chats</button>
                                    <button className={`tabs__btn ${tabIndex === 2 ? 'active' : ''}`} 
                                    onClick={() => setTabIndex(2)}
                                    >Orders</button>
                                    <button className={`tabs__btn ${tabIndex === 3 ? 'active' : ''}`} 
                                    onClick={() => setTabIndex(3)}
                                    >Payments</button>
                                </div>
                                <div className={`tabs__body ${tabIndex === 1 ? 'active' : ''}`}>
                                    <ul>
                                        <li>Create chats with any business (even if they’re not on Tinvio)</li>
                                        <li>Fully integrated with your favorite chat apps</li>
                                        <li>Real-time messages and alerts</li>
                                    </ul>
                                </div>
                                <div className={`tabs__body ${tabIndex === 2 ? 'active' : ''}`}>
                                    <ul>
                                        <li>Create or confirm purchase orders at lightning speed</li>
                                        <li>Manage inventory details and availability in real-time</li>
                                        <li>24/7 order insights and data reports</li>
                                    </ul>
                                </div>
                                <div className={`tabs__body ${tabIndex === 3 ? 'active' : ''}`}>
                                    <ul>
                                        <li>Send invoices and easily track them until they’re paid</li>
                                        <li>Real-time payments settlement and reconciliation</li>
                                        <li>Safe, secure, and compliant</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="block-text__btn btn-red">More Features</button></div>   
                        </div>
                        <div className="more-buddy__block-img block-img">
                            <div className="block-img__decor">
                                <div className="block-img__item">
                                    <div className="block-img__chats-1" ref={refImgChat1}>
                                        <img src={imgChatOne} alt="Photo mob chats" />
                                    </div>
                                    <div className="block-img__chats-2" ref={refImgChat2}>
                                        <img src={imgChatTwo} alt="Photo mob chats" />
                                    </div>
                                </div>
                                <div className="block-img__stars">
                                    <img src={MoreSuddyStars} alt="Stars" />
                                </div>
                                <div className="block-img__cubes">
                                    <img src={DecorRectanges} alt="Сubes" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="decor-one"></div>
            </section>
        </>
    )
}