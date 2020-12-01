import React, { useState } from 'react'



export default function Song({currentSong, setCurrentSong}) {
    console.log(currentSong)

    
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt="" className="album-cover"/>
    <h2>{currentSong.name}</h2>
    <h3>{currentSong.artist}</h3>
            
        </div>
    )
}
