import React from "react"
import CompanyHome from "./Company-home/Company-home"
import WhatDone from "./What-done/What-done"
import WhatIs from "./What-is/What-is"
import Powered from "./Powered/Powered"
import Commitments from "./Commitments/Commitments"
import PerfectRole from "./Perfect-role/Perfect-role"
import ContactUs from "./Contact-us/Contact-us"

// scss
import './Company.scss'

import Modal from "../Modal/Modal"
import FormWrapper from "../Form/FormWrapper"
import Thank from "../Thank/Thank"


export default function Company() {
    return (
        <main className="main">
            <CompanyHome/>
            <WhatDone/>
            <WhatIs/>
            <Powered/>
            <Commitments/>
            <PerfectRole/>
            <ContactUs/>

            <Modal>
                <FormWrapper title={"Hi, we’re <span class='red'>Tinvio!</span> And you?"}/>
                <Thank/>
            </Modal>
        </main>
    )
}