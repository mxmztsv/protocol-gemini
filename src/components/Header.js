import React, {useState} from "react";
import {Container, Hidden} from "@mui/material";

import logo from '../assets/svg/logo.svg'
import logoText from '../assets/svg/Protocol-Gemini_Flat 2.svg'
import {JoinUs} from "./JoinUs";
import logoSmall from '../assets/svg/Protocol-Gemini_Flat 3.svg'
import {Menu} from "./Menu";
import menu from "../assets/svg/menu.svg";

export const Header = () => {

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isMenuOpened, setIsMenuOpened] = useState(false)


    const toggleOpenCloseMenu = () => {
        setIsMenuOpened(!isMenuOpened)
    }

    const toggleOpenCloseForm = () => {
        setIsFormOpen(!isFormOpen)
    }

    return (
        <header>
            {/*<Container disableGutters={true}>*/}
                <div className="header__wrapper">
                    {/*<Hidden lgDown>*/}
                    {/*    <img src={logo} alt="logo" className="header__logo"/>*/}
                    {/*</Hidden>*/}
                    <div className="header__logo__wrapper">
                        <img src={logoSmall} alt="logo" className="header__logo"/>
                        <Hidden lgDown>
                            <img src={logoText} alt="logo" className="header__logo__text"/>
                        </Hidden>
                        <Hidden mdUp>
                            <img src={logoText} alt="logo" className="header__logo__text"/>
                        </Hidden>
                    </div>

                    <Hidden mdDown>
                        <div className="right-col">
                            <ul className="navbar">
                                <li><a href="#">What’s This?</a></li>
                                <li><a href="#">Blackpaper</a></li>
                                <li><a href="#">TQN//VIP//NFTs</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                            <div className="header__btn__wrapper">
                                <button className="btn" onClick={toggleOpenCloseForm}>
                                    JOIN US
                                </button>
                            </div>
                        </div>
                    </Hidden>
                </div>
            {/*</Container>*/}
            <Hidden mdUp>
                { isMenuOpened ? (
                    <Menu close={toggleOpenCloseMenu} toggleOpenCloseForm={toggleOpenCloseForm}/>
                ) : (
                    <div className="menu__btn__container">
                        <div className="menu__btn__wrapper" onClick={toggleOpenCloseMenu}>
                            <p className="menu__btn__text">
                                MENU
                            </p>
                            <img src={menu} alt="menu button" className="menu__btn__img"/>
                        </div>
                        <div className="menu__btn__line"/>
                    </div>
                )}

            </Hidden>
            { isFormOpen && <JoinUs close={toggleOpenCloseForm}/> }
        </header>
    )
}
