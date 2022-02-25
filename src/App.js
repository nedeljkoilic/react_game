import React, { useState } from 'react';
import './App.css';
import StarMatch from './komponente/StarMatch';
function App() {
  const [gameID, setGameID]= useState(1);

  return (
    <div className='game'>
      <h1>Odaberite broj</h1>
      <StarMatch key ={gameID} onReset = {()=>setGameID(gameID+1) }/>
      
    </div>
  );
}

export default App;
