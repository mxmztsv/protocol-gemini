import React, {useEffect, useState} from "react";
import './App.css';
import {Main} from "./sections/Main";
import {Header} from "./components/Header";
import {Loader} from "./sections/Loader";

function App() {

    const [loading, setLoading] = useState(true)

    return (
        <div className="App">
            { loading ? <Loader setLoading={setLoading}/> : (

                <Main/>

            ) }
        </div>
    );
}

export default App;
