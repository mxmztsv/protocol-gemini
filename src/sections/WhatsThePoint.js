import screen1 from '../assets/img/screen1.png'
import screen2 from '../assets/img/screen2.png'
import screen3 from '../assets/img/screen3.png'
import lines from '../assets/svg/lines-grey.svg'
import {Hidden} from "@mui/material";

export const WhatsThePoint = () => {
    return (
        <section className="point">
            <h2 className="title point__title">
                What's the Point?
            </h2>
            <div className="point__container">
                <div className="point__wrapper">
                    <img src={screen1} alt="screen 1" className="point__screen__img"/>
                    <div className="point__card__container">
                        <div className="point__card">
                            <div className="point__card__title__wrapper">
                                <p className="point__card__title">
                                    Keep it Simple Stupid.
                                </p>
                            </div>
                            <div className="point__card__text__wrapper">
                                <p className="point__card__text">
                                    Good locations are either good or bad. The idea is to make a useful dataset and have the
                                    community moderate. No one will be able to BUY reviews. EVER.
                                </p>
                            </div>
                        </div>
                        <img src={lines} className="point__card__lines point__card__lines-left"/>
                    </div>
                </div>
            </div>
            <div className="point__container point__container_right">
                <div className="point__wrapper">
                    <Hidden smUp>
                        <img src={screen2} alt="screen 2" className="point__screen__img"/>
                    </Hidden>
                    <div className="point__card__container">
                        <div className="point__card">
                            <div className="point__card__title__wrapper">
                                <p className="point__card__title">
                                    We Sweat the Little Things
                                </p>
                            </div>
                            <div className="point__card__text__wrapper-right">
                                <p className="point__card__text">
                                    “You’ve arrived at your destination”
                                </p>
                                <p className="point__card__text">
                                    “Oh yeah? Well then, where the hell am I ?”
                                </p>
                                <p className="point__card__text">
                                    No more getting lost. You will be able to find bathrooms, specific businesses in strip
                                    malls, Individual suites inside large buildings, handicap ramps, and all the small stuff
                                    in between!
                                </p>
                            </div>
                        </div>
                        <img src={lines} className="point__card__lines point__card__lines-right"/>
                    </div>
                    <Hidden smDown>
                        <img src={screen2} alt="screen 2" className="point__screen__img"/>
                    </Hidden>
                </div>
            </div>
            <div className="point__container">
                <div className="point__wrapper">
                    <img src={screen3} alt="screen 3" className="point__screen__img"/>
                    <div className="point__card__container">
                        <div className="point__card">
                            <div className="point__card__title__wrapper">
                                <p className="point__card__title">
                                    It's Your Data.
                                </p>
                            </div>
                            <div className="point__card__text__wrapper">
                                <p className="point__card__text">
                                    Stop giving your data to companies that sell it and give you nothing for it. It's your
                                    data, why shouldn't you get paid for it?
                                </p>
                            </div>
                        </div>
                        <img src={lines} className="point__card__lines point__card__lines-left"/>
                    </div>
                </div>
            </div>



        </section>
    )
}
