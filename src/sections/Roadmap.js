import {useState} from "react";
import arrow from '../assets/svg/arraw-bottom-left-sm.svg'
import switcher from '../assets/svg/switcher.svg'
import switcherActive from '../assets/svg/switcher_active.svg'
import phase01 from '../assets/img/phase01.png'
import phase02 from '../assets/img/phase02.png'
import {Hidden} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper styles
import 'swiper/css';

export const Roadmap = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [progressValue, setProgressValue] = useState(25);
    const [tabsNavigator, setTabsNavigator] = useState([
        {
            textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
            img: switcherActive
        },
        {
            textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
            img: switcher
        },
        {
            textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
            img: switcher
        }
    ]);

    const phasesContent = [
        [
            {
                title: "Core Team Established",
                date: "JUNE-OCT.2020",
                text: [
                    "Alin Matei: UI/UX",
                    "Sergii Golotovskiy: Worldbuilder"
                ]
            },
            {
                title: "GEMz contract",
                date: "JULY 27.2020",
                text: [
                    "ERC-20 Utility Token Minted",
                    "INITIAL SUPPLY: 100B"
                ]
            },
            {
                title: "Team Expansion",
                date: "AUG.2020 - FEB.2022",
                text: [
                    "Engwind: 3D Visionary",
                    "Expanded advisory board: multi disc",
                    "Expanded art dept: multiple part-time",
                    "Stealth dev team: Backend, App, AR"
                ]
            },
            {
                title: "Initial Prototype",
                date: "DEC.10.2021",
                text: [
                    "MVP Mobile app live on iOS store via Testflight. Expanded features to be added for Beta"
                ]
            },
        ],
        [
            {
                title: "FIRST LIVE EVENTS",
                date: "ETA Q1 23'",
                text: [
                    "Post Seed-Round",
                    "Limited closed BETA for pre-selected VIPs",
                    "Android Version Begins Coding"
                ]
            },
            {
                title: "INITIAL TOKEN OFFERING",
                date: "ETA Q2 23'",
                text: [
                    "Public Token offering/or availability on DEX"
                ]
            },
            {
                title: "METAGATE RELEASE",
                date: "ETA Q3 22'",
                text: [
                    "Metaverse Hub",
                    "tbd Gear, Vaults, Multiplayer, +more!"
                ]
            },
            {
                title: "Official Beta",
                date: "ETA Q4 22'",
                text: [
                    "After Seed Round",
                    "Limited Pre-selected",
                    "Will Be Adding Android Cap"
                ]
            },
        ],
        [
            {
                text: [
                    "FUll ACCESS APP",
                    "BUILDER TOOLS",
                    "IMMERSIVE REALITIES",
                    "HARDWARE INTEGRATIONS"
                ]
            },
            {
                text: [
                    "P:G WALLET",
                    "METAVERSE+",
                    "COMMUNITY GRANTS"
                ]
            },
            {
                text: [
                    "TBA",
                    "TBA"
                ]
            },
            {
                text: [
                    "PARTNERSHIPS",
                    "+EVENTS",
                    "PROMOTIONS ETC..."
                ]
            },
        ],
    ]

    const showFirstTab = () => {
        setActiveTab(1)
        setProgressValue(25)
        setTabsNavigator([
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
                img: switcher
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
                img: switcher
            }
        ])
    }

    const showSecondTab = () => {
        setActiveTab(2)
        setProgressValue(50)
        setTabsNavigator([
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
                img: switcher
            }
        ])
    }

    const showThirdTab = () => {
        setActiveTab(3)
        setProgressValue(100)
        setTabsNavigator([
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text transparent",
                img: switcherActive
            },
            {
                textClassName: "roadmap__tabs__navigator__switchers__item__text cyan",
                img: switcherActive
            }
        ])
    }

    const isMd = useMediaQuery('(min-width:600px)')

    return (
        <section className="roadmap">
            <h2 className="title roadmap__title">
                Roadmap
                <img src={arrow} className="roadmap__arrow"/>
            </h2>
            <div className="roadmap__tabs__navigator__wrapper">
                <div className="roadmap__tabs__navigator">
                    <div className="roadmap__tabs__navigator__switchers">
                        <div className="roadmap__tabs__navigator__switchers__item_left" onClick={showFirstTab}>
                            <p className={tabsNavigator[0].textClassName}>
                                PHASE 01
                            </p>
                            <img src={tabsNavigator[0].img} alt="tab switcher"
                                 className="roadmap__tabs__navigator__switchers__item__img"/>
                        </div>
                        <div className="roadmap__tabs__navigator__switchers__item" onClick={showSecondTab}>
                            <p className={tabsNavigator[1].textClassName}>
                                PHASE 02
                            </p>
                            <img src={tabsNavigator[1].img} alt="tab switcher"
                                 className="roadmap__tabs__navigator__switchers__item__img"/>
                        </div>
                        <div className="roadmap__tabs__navigator__switchers__item_right" onClick={showThirdTab}>
                            <p className={tabsNavigator[2].textClassName}>
                                PHASE 03
                            </p>
                            <img src={tabsNavigator[2].img} alt="tab switcher"
                                 className="roadmap__tabs__navigator__switchers__item__img"/>
                        </div>
                    </div>
                    <div className="roadmap__tabs__navigator__progress__wrapper">
                        <progress value={progressValue} max="100" className="roadmap__tabs__navigator__progress"/>
                    </div>
                </div>
            </div>

            {(activeTab === 1) &&
                <>
                    <Hidden mdDown>
                        <div className="roadmap__tab">
                            {
                                phasesContent[0].map((point, index) => {
                                    return (
                                        <div className="roadmap__tab__card">
                                            <p className="roadmap__tab__card__title">
                                                {point.title}
                                            </p>
                                            <p className="roadmap__tab__card__date">
                                                {point.date}
                                            </p>
                                            {
                                                point.text.map((p, ind) => {
                                                    return (
                                                        <p className="roadmap__tab__card__text">
                                                            {p}
                                                        </p>
                                                    )
                                                })
                                            }
                                            <img src={phase01} className="roadmap__tab__card__img"/>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={isMd ? 2.1 : 1.2}
                            centeredSlides={false}
                            grabCursor={true}
                        >
                            {
                                phasesContent[0].map((point, index) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="roadmap__tab__card">
                                                <p className="roadmap__tab__card__title">
                                                    {point.title}
                                                </p>
                                                <p className="roadmap__tab__card__date">
                                                    {point.date}
                                                </p>
                                                {
                                                    point.text.map((p, ind) => {
                                                        return (
                                                            <p className="roadmap__tab__card__text">
                                                                {p}
                                                            </p>
                                                        )
                                                    })
                                                }
                                                <img src={phase01} className="roadmap__tab__card__img"/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </Hidden>
                </>

            }

            {(activeTab === 2) &&
                <>
                    <Hidden mdDown>
                        <div className="roadmap__tab">
                            {
                                phasesContent[1].map((point, index) => {
                                    return (
                                        <div className="roadmap__tab__card">
                                            <p className="roadmap__tab__card__title">
                                                {point.title}
                                            </p>
                                            <p className="roadmap__tab__card__date">
                                                {point.date}
                                            </p>
                                            {
                                                point.text.map((p, ind) => {
                                                    return (
                                                        <p className="roadmap__tab__card__text">
                                                            {p}
                                                        </p>
                                                    )
                                                })
                                            }
                                            <img src={phase02} className="roadmap__tab__card__img"/>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={isMd ? 2.1 : 1.2}
                            centeredSlides={false}
                            grabCursor={true}
                        >
                            {
                                phasesContent[1].map((point, index) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="roadmap__tab__card">
                                                <p className="roadmap__tab__card__title">
                                                    {point.title}
                                                </p>
                                                <p className="roadmap__tab__card__date">
                                                    {point.date}
                                                </p>
                                                {
                                                    point.text.map((p, ind) => {
                                                        return (
                                                            <p className="roadmap__tab__card__text">
                                                                {p}
                                                            </p>
                                                        )
                                                    })
                                                }
                                                <img src={phase02} className="roadmap__tab__card__img"/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </Hidden>
                </>
            }

            {(activeTab === 3) &&
                <>
                    <Hidden mdDown>
                        <div className="roadmap__tab">
                            {
                                phasesContent[2].map((point, index) => {
                                    return (
                                        <div className="roadmap__tab__card">
                                            {
                                                point.text.map((p, ind) => {
                                                    return (
                                                        <p className="roadmap__tab__card__text_phase03">
                                                            {p}
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={isMd ? 2.1 : 1.2}
                            centeredSlides={false}
                            grabCursor={true}
                        >
                            {
                                phasesContent[2].map((point, index) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="roadmap__tab__card">
                                                {
                                                    point.text.map((p, ind) => {
                                                        return (
                                                            <p className="roadmap__tab__card__text_phase03">
                                                                {p}
                                                            </p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </Hidden>
                </>
            }

        </section>
    )

}
