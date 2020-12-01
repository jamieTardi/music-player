import React, {useState} from 'react';
import './styles/app.css';
import Song from './components/Song';
import Player from './components/Player';
import data from './util';

function App() {
  //main state
  const [counter, setCounter] = useState(0)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  console.log(currentSong)
  return (
    <div className="App">
      <div className="song-player-container">
    <Song currentSong={currentSong} setCurrentSong={setCurrentSong}/>
    <Player currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} counter={counter} setCounter={setCounter}/>
    </div>
    </div>
  );
}

export default App;
