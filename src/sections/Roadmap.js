import gif from '../assets/gif/roadmap.gif'
import lines from '../assets/svg/video-lines.svg'
import arrow from '../assets/svg/arraw-bottom-left-sm.svg'
import {Hidden} from "@mui/material";

export const Roadmap = () => {
    return (
        <section className="roadmap">
            <h2 className="title roadmap__title">
                Roadmap
                <img src={arrow} className="roadmap__arrow"/>
            </h2>
            <div className="roadmap__gif__container">
                <div className="roadmap__gif__border">
                    <img src={gif} className="roadmap__gif"/>
                </div>
                <Hidden smDown>
                    <img src={lines} className="roadmap__gif__lines"/>
                </Hidden>
            </div>
        </section>
    )

}
