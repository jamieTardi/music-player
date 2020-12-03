import React, {useState} from 'react';
import './styles/app.css';
import Song from './components/Song';
import Player from './components/Player';
import data from './util';
import Social from './components/Social'
import Libary from './components/Libary' 
import LibrarySongs from './components/LibrarySongs'


function App() {
  //main state
  const [counter, setCounter] = useState(1)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [songInfo, setSongInfo] = useState ({ 
    currentTime: 0,
    duration: 0
})

 
  return (
    <div className="App">
    <div className="song-player-container">
    <Libary currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong} />
    <Song currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} />
    <Player currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} counter={counter} setCounter={setCounter} songInfo={songInfo} setSongInfo={setSongInfo}/>
    <Social />
    </div>
    
    </div>
  );
}

export default App;
