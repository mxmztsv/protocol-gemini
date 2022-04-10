import React, {useState} from "react";
import {Grid} from "@mui/material";

import nft1 from '../assets/gif/nft/nft1.gif'
import nft2 from '../assets/gif/nft/nft2.gif'

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

    const nft = [
        {
            img: nft1,
            name: 'skeleton'
        },
        {
            img: nft2,
            name: 'doggo'
        },
        {
            img: nft1,
            name: 'one more'
        },
    ]

    return (
        <section className="buy">
            <h2 className="title">
                Buy NFT
            </h2>

            <Grid container>
                <Grid item md={7} xs={12}>
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
                            <button className="buy__nft__btn">BUY</button>
                        </div>
                    </div>
                </Grid>
                <Grid item md={5} xs={12}>
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

                </Grid>
            </Grid>

        </section>
    )

}
