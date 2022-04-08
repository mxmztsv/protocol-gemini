import React, {useState} from "react";
import './App.css';
import {Main} from "./sections/Main";
import {Loader} from "./sections/Loader";
import {About} from "./sections/About";
import {HowDoesThisWork} from "./sections/HowDoesThisWork";

function App() {

    const [loading, setLoading] = useState(true)

    return (
        <div className="App">
            {loading ? <Loader setLoading={setLoading}/> : (
                <>
                    <Main/>
                    <About/>
                    <HowDoesThisWork/>
                </>


            )}
        </div>
    );
}

export default App;
