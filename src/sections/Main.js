import React, {useState} from "react";
import {Header} from "../components/Header";
import {AudioPlayer} from "../components/AudioPlayer";
import useMediaQuery from '@mui/material/useMediaQuery';
import bg from '../assets/img/main-bg-borderless.png'
import bgSm from '../assets/img/main-mobile-bg.png'
import xmark from '../assets/svg/x-mark.svg'
import barcode from '../assets/svg/barcode.svg'
import {TypeWriter} from "../components/TypeWriter";

//todo: обрезать видео для гифки

//todo: задержка анимаций

export const Main = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const isSm = useMediaQuery('(max-width:600px)')

    const toggleOpenCloseMenu = () => {
        setIsMenuOpened(!isMenuOpened)
    }


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
            <img src={barcode} className="barcode"/>

            <TypeWriter strings={["Enhance", "Experience", "Elevate"]}/>
            <div className="main__audio-player__wrapper">
                <div className="main__audio-player__container">
                    <AudioPlayer/>
                </div>
            </div>
            <div className="blind_bottom"/>
        </section>
    )
}
