import React from "react";
import {Container, Grid, Hidden} from "@mui/material";
import {VideoPlayer} from "../components/VideoPlayer";

import dots from '../assets/svg/video-dots.svg'
import lines from '../assets/svg/video-lines.svg'
import arrow from '../assets/svg/arrow-bottom-left.svg'
import arrowsCorners from '../assets/svg/arrows-corners.svg'
import planet from '../assets/svg/planet.svg'
import cubes from '../assets/svg/cubes1.svg'
import useMediaQuery from "@mui/material/useMediaQuery";

export const About = () => {

    const isSm = useMediaQuery('(max-width:600px)')

    return (
        <section className="about">
            {/*<Container disableGutters={false}>*/}
                <Grid container direction={ isSm ? "column-reverse" : "row"}>
                    <Grid item sm={7} xs={12}>
                        <div className="about__video-player">
                            <VideoPlayer/>
                        </div>
                        <img src={dots} className="about__video-player__dots"/>
                        <img src={lines} className="about__video-player__lines"/>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <div className="about__text__wrapper">
                            <h3 className="about__title">
                                ABOUT THE PROJECT
                                <span className="purple">Protocol: Gemini</span>
                            </h3>
                            <p className="about__text">
                                Protocol: Gemini is a utility-based-app using current GPS data while allowing a dynamic
                                and unique user curated 3-Dimensional element.
                            </p>
                            <p className="about__text">
                                With our unique rewards based contribution model, users of the app will not only be able
                                to create something awesome, but get paid to do so using our minted ERC-20 utility token
                                called:
                            </p>
                            <p className="about__text_accent">
                                GEMz = Geo-Encrypted-Mappoints - (on the Z axis)
                            </p>
                            <p className="about__text">
                                We are re-defining the term "Pay-to-Play";
                                by paying YOU to help build the network/community.
                                By creating a usable platform for people to get info that is USEFUL and EFFECTIVE as
                                well as voted on by a true democratic model (our users tell us what???s real or cool) we
                                will be providing a unique system for interacting. That???s not where the utility of the
                                app is going to end though.

                            </p>
                        </div>

                    </Grid>

                </Grid>
            <Hidden smDown>
                <img src={planet} className="about__planet"/>
                <img src={arrowsCorners} className="about__arrows-corners"/>
            </Hidden>
            <Hidden lgDown>
                <img src={cubes} className="about__cubes"/>
                <img src={arrow} className="about__arrow"/>
            </Hidden>
            <Hidden smUp>
                <div className="about__particles__row">
                    <div className="left-col">
                        <img src={planet} className="about__planet"/>
                        <img src={arrowsCorners} className="about__arrows-corners"/>
                    </div>
                    <img src={arrow} className="about__arrow"/>
                </div>
            </Hidden>
            {/*</Container>*/}
        </section>
    )

}
