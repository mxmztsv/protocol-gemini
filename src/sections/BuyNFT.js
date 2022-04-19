import React, {useState} from "react";
import {Grid, Hidden} from "@mui/material";

import nft1 from '../assets/gif/nft/nft1.gif'
import nft2 from '../assets/gif/nft/nft3.gif'
import cubes2 from '../assets/svg/cubes2.svg'

export const BuyNFT = () => {

    const [selectedNftIndex, setSelectedNftIndex] = useState(0)

    const selectNextNft = () => {
        if (selectedNftIndex < nft.length - 1) {
            setSelectedNftIndex(prevState => prevState + 1)
        } else {
            setSelectedNftIndex(0)
        }
    }

    const selectPrevNft = () => {
        if (selectedNftIndex > 0) {
            setSelectedNftIndex(prevState => prevState - 1)
        } else {
            setSelectedNftIndex(nft.length - 1)
        }
    }

    const mintHandler = () => {
        window.location.href = 'https://opensea.io/ProtocolGeminiVault'
    }

    const nft = [
        {
            img: nft1,
            name: 'skeleton'
        },
        {
            img: nft1,
            name: 'another one'
        },
        {
            img: nft2,
            name: 'cat'
        },
    ]

    return (
        <section className="buy">
            <h2 className="title">
                Buy NFT
            </h2>

            <Hidden smDown>
                <Grid container>
                    <Grid item sm={7} xs={12}>
                        <div className="buy__nft__col">
                            <div className="buy__nft__container">
                                <div className="buy__nft__wrapper">
                                    <div className="buy__nft__border">
                                        <img src={nft[selectedNftIndex].img}
                                             alt={nft[selectedNftIndex].name + ' nft image'}
                                             className="buy__nft__img"
                                        />
                                    </div>
                                    <div className="buy__nft__pagination__wrapper">
                                        { nft.map((nft, index) => {
                                            if (index === selectedNftIndex) {
                                                return (
                                                    <div className="buy__nft__pagination__item_selected"/>
                                                )
                                            } else {
                                                return (
                                                    <div className="buy__nft__pagination__item"/>
                                                )
                                            }
                                        }) }
                                    </div>
                                </div>
                                <div className="buy__nft__btn__wrapper">
                                    <button className="buy__nft__btn" onClick={mintHandler}>
                                        BUY
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <div className="buy__nft-name__col">
                            <div className="buy__nft-name__wrapper">
                                <p className="buy__nft-name">
                                    {'BUY ' + nft[selectedNftIndex].name + ' KEY NFT'}
                                </p>
                                <p className="buy__subtitle">
                                    Buy Event Ticket NFT
                                </p>
                            </div>

                            <div className="buy__navigation-btn__container">
                                <button className="buy__navigation-btn_left" onClick={selectPrevNft}/>
                                <button className="buy__navigation-btn_right" onClick={selectNextNft}/>
                            </div>
                        </div>

                        <Hidden lgDown>
                            <img src={cubes2} className="buy__cubes"/>
                        </Hidden>

                    </Grid>
                </Grid>
            </Hidden>

            <Hidden smUp>
                <div className="buy__nft-name__wrapper">
                    <p className="buy__nft-name">
                        {'BUY ' + nft[selectedNftIndex].name + ' KEY NFT'}
                    </p>
                    <p className="buy__subtitle">
                        Buy Event Ticket NFT
                    </p>
                </div>

                <div className="buy__nft__container">
                    <div className="buy__nft__wrapper">
                        <div className="buy__nft__border">
                            <img src={nft[selectedNftIndex].img}
                                 alt={nft[selectedNftIndex].name + ' nft image'}
                                 className="buy__nft__img"
                            />
                        </div>
                        <div className="buy__nft__pagination__wrapper">
                            { nft.map((nft, index) => {
                                if (index === selectedNftIndex) {
                                    return (
                                        <div className="buy__nft__pagination__item_selected"/>
                                    )
                                } else {
                                    return (
                                        <div className="buy__nft__pagination__item"/>
                                    )
                                }
                            }) }
                        </div>
                    </div>
                    <div className="buy__navigation-btn__container">
                        <button className="buy__navigation-btn_left" onClick={selectPrevNft}/>
                        <div className="buy__nft__btn__wrapper">
                            <button className="buy__nft__btn" onClick={mintHandler}>
                                BUY
                            </button>
                        </div>
                        <button className="buy__navigation-btn_right" onClick={selectNextNft}/>
                    </div>

                </div>
            </Hidden>


        </section>
    )

}
