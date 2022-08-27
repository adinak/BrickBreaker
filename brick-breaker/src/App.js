"use-strict";

import './App.css';
import BoardGame from './board_game/BoardGame.react';

// TODO: 
// 1. add header to the game

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoardGame />
      </header>
    </div>
  );
}

export default App;
