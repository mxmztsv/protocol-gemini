import gif from '../assets/gif/roadmap.gif'
import lines from '../assets/svg/video-lines.svg'
import arrow from '../assets/svg/arraw-bottom-left-sm.svg'

export const Roadmap = () => {
    return (
        <section className="roadmap">
            <h2 className="title">
                Roadmap
                <img src={arrow} className="roadmap__arrow"/>
            </h2>
            <div className="roadmap__gif__container">
                <div className="roadmap__gif__border">
                    <img src={gif} className="roadmap__gif"/>
                </div>
                <img src={lines} className="roadmap__gif__lines"/>
            </div>
        </section>
    )

}
