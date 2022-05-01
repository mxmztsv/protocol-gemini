import {useState} from "react";
import gif from '../assets/gif/roadmap.gif'
import lines from '../assets/svg/video-lines.svg'
import arrow from '../assets/svg/arraw-bottom-left-sm.svg'
import switcher from '../assets/svg/switcher.svg'
import switcherActive from '../assets/svg/switcher_active.svg'
import {Hidden} from "@mui/material";

export const Roadmap = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [progressValue, setProgressValue] = useState(25);
    const [tabsNavigator, setTabsNavigator] = useState([
        {
            textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
            img: switcherActive
        },
        {
            textClassName: "roadmap__tabs__navigator__switchers__item__text",
            img: switcher
        },
        {
            textClassName: "roadmap__tabs__navigator__switchers__item__text",
            img: switcher
        }
    ]);

    const showFirstTab = () => {
        setActiveTab(1)
        setProgressValue(25)
        setTabsNavigator([
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text",
                img: switcher
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text",
                img: switcher
            }
        ])
    }

    const showSecondTab = () => {
        setActiveTab(2)
        setProgressValue(50)
        setTabsNavigator([
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text",
                img: switcher
            }
        ])
    }

    const showThirdTab = () => {
        setActiveTab(3)
        setProgressValue(100)
        setTabsNavigator([
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
                img: switcherActive
            }
        ])
    }


    return (
        <section className="roadmap">
            <h2 className="title roadmap__title">
                Roadmap
                <img src={arrow} className="roadmap__arrow"/>
            </h2>
            {/*<div className="roadmap__gif__container">*/}
            {/*    <div className="roadmap__gif__border">*/}
            {/*        <img src={gif} className="roadmap__gif"/>*/}
            {/*    </div>*/}
            {/*    <Hidden smDown>*/}
            {/*        <img src={lines} className="roadmap__gif__lines"/>*/}
            {/*    </Hidden>*/}
            {/*</div>*/}
            <div className="roadmap__tabs__navigator__wrapper">
                <div className="roadmap__tabs__navigator">
                    <div className="roadmap__tabs__navigator__switchers">
                        <div className="roadmap__tabs__navigator__switchers__item" onClick={showFirstTab}>
                            <p className={tabsNavigator[0].textClassName}>
                                PHASE 01
                            </p>
                            <img src={tabsNavigator[0].img} alt="tab switcher" className="roadmap__tabs__navigator__switchers__item__img"/>
                        </div>
                        <div className="roadmap__tabs__navigator__switchers__item" onClick={showSecondTab}>
                            <p className={tabsNavigator[1].textClassName}>
                                PHASE 02
                            </p>
                            <img src={tabsNavigator[1].img} alt="tab switcher" className="roadmap__tabs__navigator__switchers__item__img"/>
                        </div>
                        <div className="roadmap__tabs__navigator__switchers__item" onClick={showThirdTab}>
                            <p className={tabsNavigator[2].textClassName}>
                                PHASE 03
                            </p>
                            <img src={tabsNavigator[2].img} alt="tab switcher" className="roadmap__tabs__navigator__switchers__item__img"/>
                        </div>
                    </div>
                    <div className="roadmap__tabs__navigator__progress__wrapper">
                        <progress value={progressValue} max="100" className="roadmap__tabs__navigator__progress"/>
                    </div>
                </div>
            </div>

        </section>
    )

}
