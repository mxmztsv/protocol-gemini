import React, {useState, useEffect} from "react"

export const TypeWriter = ({ strings = [] }) => {

    const [displayedText, setDisplayedText] = useState("")
    const [isAnimationIsDone, setIsAnimationIsDone] = useState(false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const typeString = async (string) => {
        for (let i = 0; i <= string.length; i++) {
            await sleep(200).then(() => {
                setDisplayedText(string.slice(0, i))
            })
        }
    }

    const typeStrings = async () => {
        // const reversedStrings = strings
        // while (true) {
            for (const element of strings) {
                await typeString(element)
                await sleep(2000)
            }
        // }

    }

    useEffect(async () => {
        await sleep(1000)
        // await typeStrings()
        typeStrings().then(async () => {
            await sleep(2000)
            setIsAnimationIsDone(true)
        })
    }, []);


    return (
        <div className="typewriter">
            {/*<div className="typewriter__string">*/}
            {/*    <p className="typewriter__string__text">*/}
            {/*        {displayedText}*/}
            {/*    </p>*/}
            {/*    <p className="typewriter__string__cursor">*/}
            {/*        l*/}
            {/*    </p>*/}
            {/*</div>*/}
            {
                isAnimationIsDone ? (
                    <p className="typewriter__string__text glitch" data-text="YOUR FUTURE... HAS ARRIVED">
                        Your Future... has arrived
                    </p>
                ) : (
                    <>
                        <div className="typewriter__string">
                            <p className="typewriter__string__text">
                                {displayedText}
                            </p>
                            <p className="typewriter__string__cursor">
                                l
                            </p>
                        </div>
                        <p className="typewriter__string__text blink">
                            Your Future...
                        </p>
                    </>

                )
            }

        </div>
    )
}
