import lines from '../assets/svg/lines-grey.svg'
import {Grid, Hidden} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import step1 from '../assets/svg/step1.svg'
import step2 from '../assets/svg/step2.svg'
import step3 from '../assets/svg/step3.svg'
import useMediaQuery from "@mui/material/useMediaQuery";


export const HowDoesThisWork = () => {

    const isMd = useMediaQuery('(min-width:600px)')


    return (
        <section className="work">
            <h2 className="work__title title">
                So... How Does This Work, Exactly?
            </h2>
            <Hidden lgDown>
                <img src={lines} className="work__lines"/>
            </Hidden>
            <Hidden mdDown>
                <div className="work__cards__container">
                    <Grid container>
                        <Grid item md={4} xs={12}>
                            <div className="work__card__container" id="work__card__container_1">
                                <div className="work__card__wrapper">
                                    <div className="work__card__bg">
                                        <img src={step1} alt="step 1" className="work__card__img"/>
                                    </div>
                                    <p className="work__card__number">01</p>
                                    <p className="work__card__title">
                                        Step One
                                    </p>
                                    <p className="work__card__text">
                                        Mark a Point
                                    </p>
                                    <p className="work__card__text">
                                        of Interest (POI)
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div className="work__card__container" id="work__card__container_2">
                                <div className="work__card__wrapper">
                                    <div className="work__card__bg">
                                        <img src={step2} alt="step 2" className="work__card__img"/>
                                    </div>
                                    <p className="work__card__number">02</p>
                                    <p className="work__card__title">
                                        Step Two
                                    </p>
                                    <p className="work__card__text">
                                        Our community confirms that location is accurate or useful.
                                    </p>
                                    <p className="work__card__text">
                                        (Sorry! NO Trolls or Bots!)
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div className="work__card__container" id="work__card__container_3">
                                <div className="work__card__wrapper">
                                    <div className="work__card__bg">
                                        <img src={step3} alt="step 3" className="work__card__img"/>
                                    </div>
                                    <p className="work__card__number">03</p>
                                    <p className="work__card__title">
                                        Step Three
                                    </p>
                                    <p className="work__card__text">
                                        Profit… Seriously, You Get Paid For Contributions on our Network
                                        And the best part? You can use it on ANYTHING you want!
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className="work__swiper__wrapper">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={ isMd ? 2 : 1.4}
                        // slidesPerView={'auto'}
                        centeredSlides={true}
                        // setWrapperSize={true}
                        grabCursor={true}
                    >
                        <SwiperSlide>
                            <div className="work__card__wrapper">
                                <div className="work__card__bg">
                                    <img src={step1} alt="step 1" className="work__card__img"/>
                                </div>
                                <p className="work__card__number">01</p>
                                <p className="work__card__title">
                                    Step One
                                </p>
                                <p className="work__card__text">
                                    Mark a Point
                                </p>
                                <p className="work__card__text">
                                    of Interest (POI)
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="work__card__wrapper">
                                <div className="work__card__bg">
                                    <img src={step2} alt="step 2" className="work__card__img"/>
                                </div>
                                <p className="work__card__number">02</p>
                                <p className="work__card__title">
                                    Step Two
                                </p>
                                <p className="work__card__text">
                                    Our community confirms that location is accurate or useful.
                                </p>
                                <p className="work__card__text">
                                    (Sorry! NO Trolls or Bots!)
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="work__card__wrapper">
                                <div className="work__card__bg">
                                    <img src={step3} alt="step 3" className="work__card__img"/>
                                </div>
                                <p className="work__card__number">03</p>
                                <p className="work__card__title">
                                    Step Three
                                </p>
                                <p className="work__card__text">
                                    Profit… Seriously, You Get Paid For Contributions on our Network
                                    And the best part? You can use it on ANYTHING you want!
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Hidden>

        </section>
    )

}
