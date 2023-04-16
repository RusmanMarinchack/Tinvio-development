import React from "react";

import HomeMain from './Main/Home-main'
import HomeWorck from "./Worck/Home-worck";
import HomeMoreBuddy from "./More-buddy/Home-more-buddy";
import HomeBrends from "./Brends/Home-Brends";
import WhyUs from "./Why-us/Why-us";
import SupplyChain from "./Supply-chain/Supply-Chain";
import SectionContact from "./Section-contact/Section-Contact";

export default function Home() {
    return (
        <main className="main">
            <HomeMain />
            <HomeWorck/>
            <HomeMoreBuddy/>
            <HomeBrends/>
            <WhyUs/>
            <SupplyChain />
            <SectionContact/>
        </main>
    )
} 