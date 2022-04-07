import React, {useState} from "react";
import './App.css';
import {Main} from "./sections/Main";
import {Loader} from "./sections/Loader";
import {About} from "./sections/About";

function App() {

    const [loading, setLoading] = useState(true)

    return (
        <div className="App">
            {loading ? <Loader setLoading={setLoading}/> : (
                <>
                    <Main/>
                    <About/>
                </>


            )}
        </div>
    );
}

export default App;
