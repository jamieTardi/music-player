import React, {  useState} from 'react';
import './styles/app.css';
import Song from './components/Song';
import Player from './components/Player';
import data from './util';
import Social from './components/Social'
import Libary from './components/Libary' 



function App() {
  //main state
  const [counter, setCounter] = useState(1)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [songPlaying, setSongPlaying] = useState(true)
  const [songInfo, setSongInfo] = useState ({ 
    currentTime: 0,
    duration: 0
})
  const [hideLib, setHideLib] = useState(false)
  const audioRef = useState(null)

  const songEndHandler = e => {
    setCounter(counter + 1)
    setCurrentSong(songs[counter])
  }

  //Time update and state update
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    let duration = e.target.duration
    
    setSongInfo({...songInfo,
        currentTime: current,
        duration
                    })
}


 
  return (
    <div className="App">
    <div className="song-player-container">
    <Libary hideLib={hideLib} songPlaying={songPlaying} currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} />
    <audio onEnded={songEndHandler} ref={audioRef} onTimeUpdate={timeUpdateHandler} src={currentSong.audio} onLoadedMetadata={timeUpdateHandler}></audio>
    <Song hideLib={hideLib} setHideLib={setHideLib} currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} />
    <Player audioRef={audioRef} songPlaying={songPlaying} setSongPlaying={setSongPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} counter={counter} setCounter={setCounter} songInfo={songInfo} setSongInfo={setSongInfo}/>
    <Social />
    </div>
    
    </div>
  );
}

export default App;

