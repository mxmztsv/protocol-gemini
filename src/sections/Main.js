import React, {useState} from "react";
import {Header} from "../components/Header";
import {AudioPlayer} from "../components/AudioPlayer";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Hidden} from "@mui/material";

import border from '../assets/img/main-bg-border.png'
import bg from '../assets/img/main-bg-borderless.png'
import bgSm from '../assets/img/main-mobile-bg.png'
import xmark from '../assets/svg/x-mark.svg'
import barcode from '../assets/svg/barcode.svg'
import sight from '../assets/svg/sight.svg'
import menu from '../assets/svg/menu.svg'
import {Menu} from "../components/Menu";
import {MainTitle} from "../components/MainTitle";

//todo: обрезать видео для гифки

//todo: задержка анимаций

export const Main = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const isSm = useMediaQuery('(max-width:600px)')

    const toggleOpenCloseMenu = () => {
        setIsMenuOpened(!isMenuOpened)
    }

    // const mainTitle = useTypewriter({
    //     words: ['Enhance', 'Experience', 'Elevate', 'Your Future', 'Step into the Future...'],
    //     loop: true,
    // })

    return (
        <section className="main">
            <div className="blind_top"/>
            <Header/>
            {/*<div className="main__bg"/>*/}
            <img src={isSm ? bgSm : bg} className="main__bg"/>
            <div className="main__xmarks__row">
                <img src={xmark} className="x-mark"/>
                <img src={xmark} className="x-mark"/>
            </div>
            {/*<Hidden smDown>*/}
            {/*    <img src={sight} className="sight"/>*/}
            {/*</Hidden>*/}
            <img src={barcode} className="barcode"/>
            {/*<h1 className="main__title" data-text="STEP INTO THE FUTURE...">Step into the Future...</h1>*/}
            <h1 className="main__title" data-text="STEP INTO THE FUTURE...">Step into the Future...</h1>
            {/*<MainTitle/>*/}
            <div className="main__audio-player__wrapper">
                <div className="main__audio-player__container">
                    <AudioPlayer/>
                </div>
            </div>
            <div className="blind_bottom"/>
        </section>
    )
}
