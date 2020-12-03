import React, { useState } from 'react'

export default function LibrarySongs({ currentSong, song, setCurrentSong, songs, id, key }) {
    const chooseSongHandler = () => {
        const selectedSong = songs.filter(theSong => theSong.id === id)
        setCurrentSong(selectedSong[0])
       
      }
    return (
        <div className="libary-song" onClick={chooseSongHandler}>
            <img src={song.cover} alt={song.name} className="album-cover" height="250px" width="250px"/>
     <div className="name-container">  
    <h3 className="song-name">{song.name}</h3>
    <h4 className="artist-name">{song.artist}</h4>
    </div>     
        </div>
    )
}
