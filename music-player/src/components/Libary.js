import React, { useState } from 'react'
import LibrarySongs from '../components/LibrarySongs'

export default function Libary({songs, currentSong, setCurrentSong}) {
    
    return (
        <div className="libary-container">
          
          <div className="library-songs">
        {songs.map((song) => 
            <LibrarySongs song={song} setCurrentSong={setCurrentSong} songs={songs} id={song.id} key={song.id}  />
        )}
          </div>
            
        </div>
    )
}
