import React, {useState} from "react";
import './App.css';
import {Main} from "./sections/Main";
import {Loader} from "./sections/Loader";
import {About} from "./sections/About";
import {HowDoesThisWork} from "./sections/HowDoesThisWork";
import {WhatsThePoint} from "./sections/WhatsThePoint";
import {AugmentedReality} from "./sections/AugmentedReality";
import {Roadmap} from "./sections/Roadmap";
import {InShort} from "./sections/InShort";
import {BuyNFT} from "./sections/BuyNFT";
import {Partners} from "./sections/Partners";
import {ProtocolGemini} from "./sections/ProtocolGemini";
import {Footer} from "./sections/Footer";
import {PurpleBackground} from "./components/PurpleBackground";
import {PurpleBackgroundFooter} from "./components/PurpleBackgroundFooter";
import {Hidden} from "@mui/material";

function App() {

    const [loading, setLoading] = useState(true)

    return (
        <div className="App">
            {loading ? <Loader setLoading={setLoading}/> : (
                <>
                    <Main/>
                    <About/>
                    <HowDoesThisWork/>
                    <WhatsThePoint/>
                    <AugmentedReality/>
                    <Roadmap/>
                    <InShort/>
                    <BuyNFT/>
                    <Partners/>
                    <ProtocolGemini/>
                    <Footer/>

                    <Hidden lgDown>
                        <PurpleBackground height={2000} y={300}/>
                        <PurpleBackground height={900} y={1800}/>
                        <PurpleBackground height={2200} y={2500}/>
                        <PurpleBackground height={1500} y={4200}/>
                        <PurpleBackground height={2000} y={5400}/>
                        <PurpleBackground height={900} y={6950}/>
                        <PurpleBackground height={2200} y={7700}/>
                        {/*<Hidden xlUp>*/}
                            <PurpleBackgroundFooter height={1500} y={9000}/>
                            {/*<PurpleBackgroundFooter height={1500} y={0}/>*/}
                        {/*// todo: уползает фон куда-то...*/}
                        {/*</Hidden>*/}
                    </Hidden>

                    <Hidden lgUp>
                        <PurpleBackground height={1800} y={300}/>
                        <PurpleBackground height={1100} y={1700}/>
                        <PurpleBackground height={2600} y={2500}/>
                        <PurpleBackground height={2700} y={5100}/>
                        <PurpleBackground height={2300} y={6800}/>
                    </Hidden>
                </>
            )}
        </div>
    );
}

export default App;
