import React, {useState} from "react";
import {Container} from "@mui/material";

import logo from '../assets/svg/logo.svg'
import {JoinUs} from "./JoinUs";
// import logo from '../assets/svg/Protocol-Gemini_Flat 2.svg'

export const Header = () => {

    const [isFormOpen, setIsFormOpen] = useState(false)

    const toggleOpenCloseForm = () => {
        setIsFormOpen(!isFormOpen)
    }

    return (
        <header>
            {/*<Container disableGutters={true}>*/}
                <div className="header__wrapper">
                    <img src={logo} alt="logo" className="header__logo"/>
                    <div className="right-col">
                        <ul className="navbar">
                            <li><a href="#">TQN//VIP//NFTs</a></li>
                            <li><a href="#">What’s This?</a></li>
                            <li><a href="#">Blackpaper</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div className="header__btn__wrapper">
                            <button className="btn" onClick={toggleOpenCloseForm}>
                                JOIN US
                            </button>
                        </div>
                    </div>
                </div>
            {/*</Container>*/}
            { isFormOpen && <JoinUs close={toggleOpenCloseForm}/> }
        </header>
    )
}
