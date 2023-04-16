import React from "react"

import Develop from "./Develop/Develop"
import FeatureHome from "./Feature-home/Featurne-home"
import Manage from "./Manage/Manage"
import Nostres from "./Nostres/Nostres"
import SoundsEasy from "./Sounds-easy/Sounds-easy"
import Score from "./Score/Score"
import MakeCollections from "./Make-collections/Make-collections"
import Detalies from "./Detalies/Detalies"
import YourBusiness from "./Your-business/Your-business"
import Expand from "./Expand/Expand"
import FAQ from "./FAQ/FAQ"

// Modal
import Modal from "../Modal/Modal"

// Form
import FormWrapper from "../Form/FormWrapper"
import Thank from "../Thank/Thank"


export default function Feature() {

    return (
        <>
        <main className="main">
            <FeatureHome/>
            <Develop/>
            <Manage/>
            <Nostres/>
            <SoundsEasy/>
            <Score/>
            <MakeCollections/>
            <Detalies/>
            <YourBusiness/>
            <Expand/>
            <FAQ/>

            <Modal>
                <FormWrapper title={"Hi, we’re <span class='red'>Tinvio!</span> And you?"}/>
                <Thank/>
            </Modal> 
        </main>
        </>
    )
}   