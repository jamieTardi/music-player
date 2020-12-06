import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'



export default function Song({currentSong, setCurrentSong, hideLib, setHideLib}) {

    const showLibary = () => {
        setHideLib(prev => !prev)
        
    }
    
    return (
        <div className="song-container">
            <div className="library-button-container">
                <div className="library-button" onClick={showLibary}><p><FontAwesomeIcon className="music-icon" icon={faMusic}/>Library</p></div>
            </div>
            <img src={currentSong.cover} alt={currentSong.name} className="album-cover"/>
    <h2>{currentSong.name}</h2>
    <h3>{currentSong.artist}</h3>
            
        </div>
    )
}
