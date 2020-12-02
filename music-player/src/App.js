import React, {useState} from 'react';
import './styles/app.css';
import Song from './components/Song';
import Player from './components/Player';
import data from './util';
import Libary from './components/Libary'
import Social from './components/Social'

function App() {
  //main state
  const [counter, setCounter] = useState(0)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [songInfo, setSongInfo] = useState ({ 
    currentTime: null,
    duration: null
})
  console.log(currentSong)
  return (
    <div className="App">
      <Libary />
    <div className="song-player-container">
    <Song currentSong={currentSong} setCurrentSong={setCurrentSong} />
    <Player currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} counter={counter} setCounter={setCounter} songInfo={songInfo} setSongInfo={setSongInfo}/>
    </div>
    <Social />
    </div>
  );
}

export default App;
