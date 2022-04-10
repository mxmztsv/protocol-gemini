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
                </>
            )}
        </div>
    );
}

export default App;
