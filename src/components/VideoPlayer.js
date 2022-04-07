import React from 'react';
import {Player} from 'video-react';
// import '~video-react/dist/video-react.css';
import '../../node_modules/video-react/dist/video-react.css';
import video from '../assets/video/Intro.mp4'


export const VideoPlayer = () => {
    return (
        <section className="video-player">
            <Player>
                <source src={video}/>
            </Player>
        </section>
    );
};
