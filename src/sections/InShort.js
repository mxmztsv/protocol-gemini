import {Grid, Hidden} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper styles
import 'swiper/css';

import xmark from '../assets/svg/x-mark-cyan.svg'

export const InShort = () => {

    const isMd = useMediaQuery('(min-width:600px)')

    return (
        <section className="in-short">
            <h2 className="title">
                In short
            </h2>
            <Hidden mdDown>
                <Grid container>
                    <Grid item md={4} xs={12}>
                        <div className="in-short__card__container in-short__card__container_left">
                            <div className="in-short__card">
                                <img src={xmark} className="in-short__card__xmark"/>
                                <div className="in-short__card__text__wrapper">
                                    <p className="in-short__card__title">
                                        GET REWARDS
                                    </p>
                                    <p className="in-short__card__text">
                                        You will help build a useful network of "Small Data Points" that are upvoted and
                                        downvoted by the community. All the while you will be rewarded for your
                                        contributions with our very own GEMz
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className="in-short__card__container">
                            <div className="in-short__card">
                                <img src={xmark} className="in-short__card__xmark"/>
                                <div className="in-short__card__text__wrapper">
                                    <p className="in-short__card__title">
                                        LET'S HAVE SOME FUN
                                    </p>
                                    <p className="in-short__card__text">
                                        This is where it gets REAL fun-This network of 3D data points will have community
                                        access for any user to build their own QUESTS, STRUCTURES, BUILDINGS, and eventually
                                        NPCs. Kinda like a video game that you can see on top of the real world!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className="in-short__card__container in-short__card__container_right">
                            <div className="in-short__card">
                                <img src={xmark} className="in-short__card__xmark"/>
                                <div className="in-short__card__text__wrapper">
                                    <p className="in-short__card__title">
                                        BUILDING THE FUTURE
                                    </p>
                                    <p className="in-short__card__text">
                                        You will help build a useful network of "Small Data Points" that are upvoted and
                                        downvoted by the community. All the while you will be rewarded for your
                                        contributions with our very own GEMz
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>

            <Hidden mdUp>

                <div className="work__swiper__wrapper">
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={ isMd ? 2 : 1.2}
                        // slidesPerView={'auto'}
                        centeredSlides={true}
                        // setWrapperSize={true}
                        grabCursor={true}
                    >
                        <SwiperSlide>
                            <div className="in-short__card">
                                <img src={xmark} className="in-short__card__xmark"/>
                                <div className="in-short__card__text__wrapper">
                                    <p className="in-short__card__title">
                                        GET REWARDS
                                    </p>
                                    <p className="in-short__card__text">
                                        You will help build a useful network of "Small Data Points" that are upvoted and
                                        downvoted by the community. All the while you will be rewarded for your
                                        contributions with our very own GEMz
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="in-short__card">
                                <img src={xmark} className="in-short__card__xmark"/>
                                <div className="in-short__card__text__wrapper">
                                    <p className="in-short__card__title">
                                        LET'S HAVE SOME FUN
                                    </p>
                                    <p className="in-short__card__text">
                                        This is where it gets REAL fun-This network of 3D data points will have community
                                        access for any user to build their own QUESTS, STRUCTURES, BUILDINGS, and eventually
                                        NPCs. Kinda like a video game that you can see on top of the real world!
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="in-short__card">
                                <img src={xmark} className="in-short__card__xmark"/>
                                <div className="in-short__card__text__wrapper">
                                    <p className="in-short__card__title">
                                        BUILDING THE FUTURE
                                    </p>
                                    <p className="in-short__card__text">
                                        You will help build a useful network of "Small Data Points" that are upvoted and
                                        downvoted by the community. All the while you will be rewarded for your
                                        contributions with our very own GEMz
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

            </Hidden>


        </section>
    )

}
