import React from "react";
import exit from "../assets/svg/exit.svg";
import img from "../assets/img/follow-us-img.png";
import instagram from "../assets/svg/instagram.svg";
import linkedin from "../assets/svg/linkedin.svg";
import twitter from "../assets/svg/twitter.svg";
import discord from "../assets/svg/discord.svg";

export const Menu = ({ close, toggleOpenCloseForm }) => {

    const openFormHandler = () => {
        close()
        toggleOpenCloseForm()
    }

    return (
        <div className="menu">
            <div className="exit__container">
                <div className="menu__btn__wrapper" onClick={close}>
                    <p className="menu__btn__text">
                        EXIT
                    </p>
                    <img src={exit} alt="menu button" className="menu__btn__img"/>
                </div>
            </div>
            <div className="menu__content">
                <ul className="menu__list">
                    <li className="menu__list__item">
                        <a href="#" className="menu__list__item__text">
                            TQN//VIP//NFTs
                        </a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#" className="menu__list__item__text">
                            What’s This?
                        </a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#" className="menu__list__item__text">
                            Blackpaper
                        </a>
                    </li>
                    <li className="menu__list__item">
                        <a href="#" className="menu__list__item__text">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <div className="follow-us__info__socials">
                    <a href="https://www.instagram.com/protocolgemini/" className="follow-us__info__socials__item__link">
                        <img src={instagram} alt="instagram link" className="follow-us__info__socials__item__img instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/company/protocol-gemini" className="follow-us__info__socials__item__link">
                        <img src={linkedin} alt="linked in link" className="follow-us__info__socials__item__img linkedin"/>
                    </a>
                    <a href="https://twitter.com/ProtocolGemini" className="follow-us__info__socials__item__link">
                        <img src={twitter} alt="twitter link" className="follow-us__info__socials__item__img twitter"/>
                    </a>
                    <a href="https://discord.gg/zASFUun8Tf" className="follow-us__info__socials__item__link">
                        <img src={discord} alt="discord link" className="follow-us__info__socials__item__img discord"/>
                    </a>
                </div>

                <div className="menu__btn__join-us__wrapper">
                    {/*<button className="join-us__form-btn">Join us</button>*/}
                    <button className="btn menu__join-us__btn" onClick={openFormHandler}>
                        Join us
                    </button>
                </div>

            </div>



        </div>
    )
}
