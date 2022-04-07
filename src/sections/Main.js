import React from "react";
import {Header} from "../components/Header";

import xmark from '../assets/svg/x-mark.svg'
import barcode from '../assets/svg/barcode.svg'
import sight from '../assets/svg/sight.svg'
import {AudioPlayer} from "../components/AudioPlayer";


//todo: обрезать видео для гифки

//todo: задержка анимаций

export const Main = () => {
    return (
        <section className="main">
            <div className="blind_top"/>
            <Header/>
            <div className="main__xmarks__row">
                <img src={xmark} className="x-mark"/>
                <img src={xmark} className="x-mark"/>
            </div>
            <img src={sight} className="sight"/>
            <img src={barcode} className="barcode"/>
            <h1 className="main__title">Step into the Future...</h1>
            <div className="main__audio-player__wrapper">
                <div className="main__audio-player__container">
                    <AudioPlayer/>
                </div>
            </div>
            <div className="blind_bottom"/>
        </section>
    )
}
