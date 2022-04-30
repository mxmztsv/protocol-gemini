import {Container, Grid} from "@mui/material";
import {useForm} from 'react-hook-form';

import img from '../assets/img/follow-us-img.png'
import instagram from '../assets/svg/instagram.svg'
import linkedin from '../assets/svg/linkedin.svg'
import discord from '../assets/svg/discord.svg'
import twitter from '../assets/svg/twitter.svg'
import marker from '../assets/svg/marker.svg'

export const ProtocolGemini = () => {

    //todo: валидация

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="protocol">
            <h2 className="title">
                Protocol: <span className="purple">Gemini</span>
            </h2>
            <Container disableGutters>
                <div className="follow-us__row">
                    <Grid container>
                        <Grid item md={6} xs={12}>
                            <div className="follow-us__img__container">
                                <img src={img} className="follow-us__img"/>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div className="follow-us__info__container">
                                <div className="follow-us__info">
                                    <p className="follow-us__info__title">
                                        Would you like to know more?
                                        <span className="purple">Follow us:</span>
                                    </p>
                                    <p className="follow-us__info__text">
                                        Please Be Sure To Submit Your Email To Be The First Being Notified About The
                                        Launch .
                                    </p>
                                    <div className="follow-us__info__socials">
                                        <a href="https://www.instagram.com/protocolgemini/"
                                           className="follow-us__info__socials__item__link">
                                            <img src={instagram} alt="instagram link"
                                                 className="follow-us__info__socials__item__img instagram"/>
                                        </a>
                                        <a href="https://www.linkedin.com/company/protocol-gemini"
                                           className="follow-us__info__socials__item__link">
                                            <img src={linkedin} alt="linked in link"
                                                 className="follow-us__info__socials__item__img linkedin"/>
                                        </a>
                                        <a href="https://twitter.com/ProtocolGemini"
                                           className="follow-us__info__socials__item__link">
                                            <img src={twitter} alt="twitter link"
                                                 className="follow-us__info__socials__item__img twitter"/>
                                        </a>
                                        <a href="https://discord.gg/zASFUun8Tf"
                                           className="follow-us__info__socials__item__link">
                                            <img src={discord} alt="discord link"
                                                 className="follow-us__info__socials__item__img discord"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="stay-in-the-loop">
                    <div className="form__container">
                        <p className="form__title">
                            Stay In The Loop
                        </p>
                        <div className="form__wrapper">
                            <div className="form__list">
                                <div className="form__list__item">
                                    <img src={marker} className="form__list__item__marker"/>
                                    <p className="form__list__item__text">
                                        Get on the early access list for Protocol: Gemini BETA (coming soon)
                                    </p>
                                </div>
                                <div className="form__list__item">
                                    <img src={marker} className="form__list__item__marker"/>
                                    <p className="form__list__item__text">
                                        Be one of our earliest supporters, get exclusive NFT badges, Tickets to live
                                        events and more!
                                    </p>
                                </div>
                                <div className="form__list__item">
                                    <img src={marker} className="form__list__item__marker"/>
                                    <p className="form__list__item__text">
                                        Learn how GEMz work, NFT 2.0 items and experiences, limited release discounts,
                                        signup for our newsletter, Find out about Twitter Spaces and event etc.
                                        Check it all out by signing up below
                                    </p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="form">
                                <input className="protocol__form__input form__input"
                                       placeholder="Email" {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })} />
                                <div className="form__btn__wrapper">
                                    <button type="submit" className="btn_invert">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )

}
