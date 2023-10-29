import React, { useState } from "react";
import App from '../app';

export default function MainMenu() {

  const [playStartGame, setStartGame]:any = useState(false);
  function startGame() {
    setStartGame(true)

  }

  return (
    <>
    {playStartGame? <App/> :
    
    <div className="main-menu">
      <h1>Welcome to Kingdom Plantae</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
    }
    </>
  );

  
}
