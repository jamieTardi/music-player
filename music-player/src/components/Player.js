import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleDoubleLeft, faAngleDoubleRight, faPause } from '@fortawesome/free-solid-svg-icons'

export default function Player({audioRef, songPlaying, setSongPlaying, currentSong, setCurrentSong, songs, counter, setCounter, songInfo, setSongInfo}) {
    //State setting and refrences
    const [hidePause, setHidePause] = useState(true)
    
    
    
//Drag the slider to change the song postion
const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
setSongInfo({...songInfo, currentTime: e.target.value})
}
  
    //Time formatting function
    const getTime = (time) => {
        return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    
//Play song function using the reference.
const playSongHandler = () => {
    setSongPlaying(true)
    console.log(songPlaying)
    audioRef.current.play()
    
    setHidePause(prev => !prev)
  }
    

    //pause current song and change classname to previous
    const pauseSongHandler = () => {
        audioRef.current.pause()
        setHidePause(prev => !prev)
    }

    //Skip the current Song forward by 1
    const skipSong = () => {
        if (counter <= 8 || counter === 0){
        setCounter(counter + 1)
        setCurrentSong(songs[counter])
        }
        else{
            setCounter(0)
        }
        
    }

    //Skip current song back by 1
    const skipBack =() => {
        if (counter > -1 && counter <= 18){
            setCounter(counter - 1)
        setCurrentSong(songs[counter])
        }
        else {
            setCounter(0)
        }
    }

    useEffect(() => {
        if (songPlaying && audioRef.current.paused) {
            audioRef.current.play()
        }
    }, [songPlaying, currentSong])

    return (
        <div className="player-container">
            <div className="time-control">
    <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler}/>
                <p>{getTime(songInfo.duration)}</p>
            </div>

            {/* Player control and fontawesome prop/componenet */}
            <div className="play-control">
            <FontAwesomeIcon className="skip-back" size="2x" onClick={skipBack} icon={faAngleDoubleLeft}/>
                <FontAwesomeIcon className={hidePause ? "show" : "hide"} size="3x" onClick={playSongHandler} icon={faPlay}/>
                <FontAwesomeIcon className={hidePause ? "hide" : "show"} size="3x" onClick={pauseSongHandler} icon={faPause}/>
                <FontAwesomeIcon className="skip-forward" onClick={skipSong} size="2x" icon={faAngleDoubleRight}/>

            </div>
            
        </div>
    )
}
