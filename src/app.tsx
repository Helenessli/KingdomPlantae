<<<<<<< HEAD
import { useState, useEffect } from "react";
import { movementDecision } from "./components/machineLogic";

import Grid from "./components/visual/grid";
import TickSlider from "./components/tickSlider";
=======
import {useCallback, useRef, useState, useEffect } from "react";
import TickButton from "./components/tickButton";

import Grid from "./components/visual/grid";
>>>>>>> 15de3cad7b8887d9ff744c2540437044a29a620e

type TileStates = Array<Array<number>>

//CONSTANTS
const gridWidth: number = 40; //number of tiles wide
const gridHeight: number = 25; //number of tiles high

const updateTestCase: TileStates = []
for (let i = 0; i < 25; i++) {
  updateTestCase.push([...Array(40)].map(() => Math.round(Math.random() * 0.55)));
}


export default function App() {
  const [tileStates, setTileStates] = useState(updateTestCase);
  const [tickIntervalMs, setTickIntervalMs] = useState(500);
<<<<<<< HEAD
  const [monster, setMonster]: any = useState([[0, 0]]); //x,y coordinates of each monster part
  const [lastDir, setLastDir] = useState("unknown");
  const [razor, setRazor]: any = useState([]); //3x3 boolean grid showing current razor configuration
  const [foodCnt, setFoodCnt]: any = useState(0); //resets to zero after reaching 20
=======
>>>>>>> 15de3cad7b8887d9ff744c2540437044a29a620e

  useEffect(() => {
    const interval = setInterval(() => {
      setTileStates(updateTileStates(tileStates));
      let x = movementDecision(monster, tileStates, gridWidth, gridHeight, lastDir, setLastDir);
    }, tickIntervalMs);
    return () => clearInterval(interval);
  }, [tileStates]);

<<<<<<< HEAD
  
=======
  // const cycletickinterval(() => {
  //   settickintervalms((tickintervalms + 400)%1200);
  // });

  // const wrapperSetTickIntervalsMs = useCallback(() => {
  //   return tickIntervalMs;
  // }, [setTickIntervalMs]);
>>>>>>> 15de3cad7b8887d9ff744c2540437044a29a620e

  return (
    <div className="w-screen h-screen flex content-center justify-center flex-wrap" >
      <Grid tileStates={tileStates} />
      <button className="border-black border-2 rounded-xl w-14 h-10 mx-3"onClick={() => setTickIntervalMs((tickIntervalMs+800)%1200)}>{(tickIntervalMs === 100? "3x" : (tickIntervalMs === 500? "2x" : "1x"))}</button>
    </div>
  );
}
// <TickButton tickIntervalMs={tickIntervalMs} setTickIntervalMs={() => setTickIntervalMs}/>

function updateTileStates(tileStates: TileStates): TileStates {
  let copy = [...tileStates].map(row => [...row]);  // Hard copy here

  let h = tileStates.length;
  let w = (tileStates.length == 0) ? 0 : tileStates[0].length;
  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      // Get number of neighbors for state 0, 1, 2, 3
      let neighbors = [0, 0, 0, 0];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (0 <= x + i && x + i < h &&
            0 <= y + j && y + j < w) {
            neighbors[tileStates[x + i][y + j]]++;
          }
        }
      }

      // Update tileStates based on number of neighbors
      let numAlive = neighbors[1] + neighbors[2] + neighbors[3];
      if (tileStates[x][y] != 0) {
        if (tileStates[x][y] != 3 && (numAlive == 2 || numAlive == 3 || numAlive == 4)) {
          copy[x][y] = tileStates[x][y] + 1;
        } else {
          copy[x][y] = 0;
        }
      } else if (numAlive > 2) {
        copy[x][y] = 1;
      }
    }
  }

  

  return copy;
}
