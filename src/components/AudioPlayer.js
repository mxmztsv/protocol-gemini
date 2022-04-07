import React, {useState, useRef, useEffect} from "react";

import music from '../assets/audio/TQN Preview Soundtrack copy.mp3'
import play from '../assets/svg/play.svg'
import pause from '../assets/svg/pause.svg'
import {AudioPlayerProgressBar} from "./AudioPlayerProgressBar";

export const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)

    const audioPlayer = useRef()

    const whilePlaying = () => {
        setCurrentTime(audioPlayer.current.currentTime / audioPlayer.current.duration * 100)
        // console.log(audioPlayer.current.currentTime)
    }

    useEffect(() => {

        setInterval(() => {
            whilePlaying()
        }, 1000)
    }, [])

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        if (!isPlaying) {
            audioPlayer.current.play()
        } else {
            audioPlayer.current.pause()
        }
    }

    return (
        <div className="audio-player">
            {/*<audio controls src={music} ref={audioPlayer} loop/>*/}
            <audio src={music} ref={audioPlayer} loop preload="metadata"/>


            <button className="play-btn" id="play-btn" onClick={togglePlayPause}>
                <img src={isPlaying ? pause : play} alt="play/pause music button"/>
            </button>

            {/*<AudioPlayerProgressBar progressValue={audioPlayer.current.currentTime}/>*/}
            <AudioPlayerProgressBar progressValue={currentTime}/>
        </div>
    )
}
