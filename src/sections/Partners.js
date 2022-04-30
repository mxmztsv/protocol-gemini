import {Container, Grid, Hidden} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper styles
import 'swiper/css';

import partner1 from '../assets/svg/partner1.svg'
import partner2 from '../assets/svg/partner2.svg'
import partner3 from '../assets/svg/partner 3.svg'
import partnerPlug from '../assets/svg/partner thumbnail.svg'

export const Partners = () => {

    // const isMd = useMediaQuery('(min-width:600px)')

    return (
        <section className="partners">
            <h2 className="title">
                Partners
            </h2>
            <Hidden smDown>
                <Container>
                    <Grid container>
                        <Grid item md={3} sm={6}>
                            <div className="partner__img__wrapper">
                                <img src={partner1} alt="partner 1 image" className="partner__img"/>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6}>
                            <div className="partner__img__wrapper">
                                <img src={partner2} alt="partner 2 image" className="partner__img"/>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6}>
                            <div className="partner__img__wrapper">
                                <img src={partner3} alt="partner plug image" className="partner__img"/>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6}>
                            <div className="partner__img__wrapper">
                                <img src={partnerPlug} alt="partner plug image" className="partner__img"/>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Hidden>

            <Hidden smUp>

                <div className="work__swiper__wrapper">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2.5}
                        // slidesPerView={'auto'}
                        centeredSlides={false}
                        // setWrapperSize={true}
                        grabCursor={true}
                    >
                        <SwiperSlide>
                            <div className="partner__img__wrapper">
                                <img src={partner1} alt="partner 1 image" className="partner__img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner__img__wrapper">
                                <img src={partner2} alt="partner 2 image" className="partner__img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner__img__wrapper">
                                <img src={partner3} alt="partner plug image" className="partner__img"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner__img__wrapper">
                                <img src={partnerPlug} alt="partner plug image" className="partner__img"/>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

            </Hidden>

        </section>
    )

}
