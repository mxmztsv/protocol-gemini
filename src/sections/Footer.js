import {Hidden} from "@mui/material";

import logo from '../assets/svg/Protocol-Gemini_Flat 3.svg'
import coreblocks from '../assets/svg/coreblocks.svg'

export const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <Hidden smDown>
                    <div className="footer__wrapper__corner"/>
                </Hidden>
                <div className="footer__wrapper">
                    <div className="footer__text__wrapper">
                        <img src={logo} alt="protocol gemini logo" className="footer__logo"/>
                        <div className="footer__text__col">
                            <p className="footer__text">
                                For Business, Collaboration or Investment inquiries, please contact us
                            </p>
                            <p className="footer__text">
                                © 2022 Protocol Gemini. All Rights Reserved, Milestone Fitness Inc.
                            </p>
                            {/*<Hidden smUp>*/}
                            {/*    <a href="https://www.coreblocks.io/" className="coreblocks">*/}
                            {/*        <img src={coreblocks} alt="CoreBlocks logo" className="coreblocks__logo"/>*/}
                            {/*        Powered by CoreBlocks*/}
                            {/*    </a>*/}
                            {/*</Hidden>*/}
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://www.coreblocks.io/" className="coreblocks">
                <img src={coreblocks} alt="CoreBlocks logo" className="coreblocks__logo"/>
                Powered by CoreBlocks
            </a>
        </footer>
    )

}
