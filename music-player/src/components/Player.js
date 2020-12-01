import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from '@fortawesome/free-solid-svg-icons'

export default function Player({currentSong, setCurrentSong, songs, counter, setCounter}) {
    const [hidePause, setHidePause] = useState(true)

    const audioRef = useRef(null)

    const playSongHandler = () => {
        //Play song function using the reference.
        audioRef.current.play()
        setHidePause(prev => !prev)
    }

    const pauseSongHandler = () => {
        audioRef.current.pause()
        setHidePause(prev => !prev)
    }

    const skipSong = (e) => {
        if (counter <= 8 || counter === 0){
        setCounter(counter + 1)
        console.log(counter)
        setCurrentSong(songs[counter])
        }
        else{
            setCounter(0)
        }
        
    }

    const skipBack =() => {
        if (counter > -1 && counter <= 8){
            setCounter(counter - 1)
        console.log(counter)
        setCurrentSong(songs[counter])
        }
        else {
            setCounter(0)
        }
    }
    return (
        <div className="player-container">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>

            {/* Player control and fontawesome prop/componenet */}
            <div className="play-control">
            <FontAwesomeIcon className="skip-back" size="2x" onClick={skipBack} icon={faAngleDoubleLeft}/>
                <FontAwesomeIcon className={hidePause ? "show" : "hide"} size="3x" onClick={playSongHandler} icon={faPlay}/>
                <FontAwesomeIcon className={hidePause ? "hide" : "show"} size="3x" onClick={pauseSongHandler} icon={faPause}/>
                <FontAwesomeIcon className="skip-forward" onClick={skipSong} size="2x" icon={faAngleDoubleRight}/>

            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}
