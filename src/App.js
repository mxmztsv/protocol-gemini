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
                </>
            )}
        </div>
    );
}

export default App;
