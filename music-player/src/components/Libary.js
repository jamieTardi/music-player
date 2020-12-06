import React, { useState } from 'react'
import LibrarySongs from '../components/LibrarySongs'

export default function Libary({ songPlaying, audioRef, songs, setCurrentSong, hideLib}) {
    
    return (
        <div className={hideLib ? "show libary-container" : "hide"}>
          
          <div className="library-songs">
        {songs.map((song) => 
            <LibrarySongs songPlaying={songPlaying} audioRef={audioRef} song={song} setCurrentSong={setCurrentSong} songs={songs} id={song.id} key={song.id}  />
        )}
          </div>
            
        </div>
    )
}
