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

function App() {

    const [loading, setLoading] = useState(true)

    return (
        <div className="App">
            {loading ? <Loader setLoading={setLoading}/> : (
                <>
                    <Main/>
                    <PurpleBackground height={2000} y={300}/>
                    <About/>
                    <PurpleBackground height={900} y={1800}/>
                    <HowDoesThisWork/>
                    <PurpleBackground height={2200} y={2500}/>
                    <WhatsThePoint/>
                    <PurpleBackground height={1500} y={4200}/>
                    <AugmentedReality/>
                    <PurpleBackground height={2000} y={5400}/>
                    <Roadmap/>
                    <PurpleBackground height={900} y={7100}/>
                    <InShort/>
                    <BuyNFT/>
                    <PurpleBackground height={2000} y={7900}/>
                    <Partners/>
                    <ProtocolGemini/>
                    <PurpleBackgroundFooter height={1500} y={8866}/>
                    <Footer/>
                </>
            )}
        </div>
    );
}

export default App;
