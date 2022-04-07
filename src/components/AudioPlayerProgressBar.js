import React, {useState, useRef, useEffect} from "react";

export const AudioPlayerProgressBar = ({ progressValue }) => {

    const [progress, setProgress] = useState([])

    useEffect(() => {
        let val = Math.floor(progressValue / 5)
        // console.log('val', val)
        let progressItemsArr = []
        for (let i = 0; i <= 20; i++) {
            if (i <= val) {
                progressItemsArr.push({
                    background: '#1EEDD9'
                })
            } else {
                progressItemsArr.push({
                    background: '#6e6c76'
                })
            }
        }
        setProgress(progressItemsArr)
    }, [progressValue])

    return (
        <div className="audio-player-progress-bar">
            {
                progress.map((element, index) => {
                    // console.log(element)

                    return (
                        <div className="audio-player-progress-bar__wrapper">
                            <div className="audio-player-progress-bar__item" id={`progress-bar__item__${index + 1}`} style={{'background': element.background}}/>

                        </div>
                        )
                })
            }
        </div>
    )
}
