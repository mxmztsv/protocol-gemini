import React from "react";
import ReactCompareImage from 'react-compare-image';
import {ImgComparatorHandle} from "../components/ImgComparatorHandle";
import {Grid} from "@mui/material";

import img1 from '../assets/img/reality-img1.png'
import img2 from '../assets/img/reality-img2.png'
import lines from '../assets/svg/lines-grey.svg'
import cubes2 from '../assets/svg/cubes2.svg'
import barcode from '../assets/svg/barcode.svg'


export const AugmentedReality = () => {
    return (
        <section className="reality">
            <h2 className="title">
                Augmented Reality?... <span className="cyan">Check</span>
            </h2>
            <div className="reality__comparator__row">
                <div className="reality__comparator__wrapper">
                    <div className="reality__comparator">
                        <ReactCompareImage leftImage={img1}
                                           rightImage={img2}
                                           sliderLineColor="#7E5EFF"
                                           sliderLineWidth={3}
                                           handle={<ImgComparatorHandle/>}
                        />
                    </div>
                </div>
            </div>
            <div className="reality__comparator__row_2">
                <div className="reality__comparator__wrapper">
                    <div className="reality__comparator">
                        <ReactCompareImage leftImage={img2}
                                           rightImage={img1}
                                           sliderLineColor="#7E5EFF"
                                           sliderLineWidth={3}
                                           handle={<ImgComparatorHandle/>}
                        />
                    </div>
                </div>
            </div>
            <Grid container>
                <Grid item md={7} xs={12}>

                </Grid>
                <Grid item md={5} xs={12}>
                    <div className="reality__text__wrapper">
                        <p className="reality__text">
                            Traditional GPS takes place on either the X or the Y axis but we would be adding the Z axis.
                        </p>
                        <p className="reality__text">
                            Upon that framework, our users will be able to create entirely new worlds that live
                            alongside our own. Now, within that world we can anchor EXPERIENCES:
                        </p>
                        <p className="reality__text">
                            That experience can be a a game, a quest, a treasure hunt, a piece of art, a statue a note,
                        </p>
                        <p className="reality__text">
                            You can make a beautiful piece of music and anchor it into a park bench where you had a
                            memorable experience. You can put your mark on the world and share it with whomever you
                            want!
                        </p>
                        <img src={lines} className="reality__lines"/>
                    </div>
                </Grid>
            </Grid>
            <img src={barcode} className="reality__barcode"/>
            <img src={cubes2} className="reality__cubes"/>
        </section>
    )

}
