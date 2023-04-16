import React from "react"
import { NavLink } from "react-router-dom"

import './LegalInfo.scss'

// Modal
import Modal from "../Modal/Modal"

// Form
import FormWrapper from "../Form/FormWrapper"
import Thank from "../Thank/Thank"

export default function LegalLenfo({ children }) {

    return (
        <main className="main">
            <section className="legal-info">
                <div className="legal-info__container _container">
                    <h1 className="legal-info__title _title">Tinvio Legal Info</h1>
                    <div className="legal-info__wrapper">
                        <div className="legal-info__header">
                            <NavLink to="/privacy-policy" className="legal-info__btn">Privacy Policy</NavLink>
                            <NavLink to="/terms-service" className="legal-info__btn">Terms of Service</NavLink>
                        </div>

                        {children}

                    </div>
                </div>
            </section>
            <Modal>
                    <FormWrapper title={"Hi, we’re <span class='red'>Tinvio!</span> And you?"}/>
                    <Thank/>
                </Modal> 
        </main>

    )
}