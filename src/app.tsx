import { useState, useEffect } from "react";

import Grid from "./components/visual/grid";

type TileStates = Array<Array<number>>

let updateTestCase: TileStates = []
for (let i = 0; i < 25; i++) {
  updateTestCase.push([...Array(40)].map(() => Math.round(Math.random() * 0.6)));
}

export default function App() {
  const [tileStates, setTileStates] = useState(updateTestCase);

  useEffect(() => {
    const interval = setInterval(() => {
      setTileStates(updateTileStates(tileStates));
      console.log(1);
    }, 1000);
    return () => clearInterval(interval);
  }, [tileStates]);

  return (
    <div className = "w-screen h-screen flex content-center justify-center flex-wrap" >
      <Grid tileStates = {tileStates} />
    </div>
  );
}

function updateTileStates(tileStates: TileStates): TileStates {
  let copy = [...tileStates].map(row => [...row]);  // Hard copy here

  let h = tileStates.length;
  let w = (tileStates.length == 0) ? 0 : tileStates[0].length;
  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      // Get number of neighbors for state 0, 1, 2, 3
      let neighbors = [ 0, 0, 0, 0 ];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (0 <= x + i && x + i < h && 
              0 <= y + j && y + j < w ) {
            neighbors[tileStates[x+i][y+j]]++;
          }
        }
      }

      // Update tileStates based on number of neighbors
      let num_alive = neighbors[1] + neighbors[2] + neighbors[3];
      if (tileStates[x][y] != 0) {
        if (tileStates[x][y] != 3 && (num_alive == 2 || num_alive == 3 || num_alive == 4)) {
          copy[x][y] = tileStates[x][y] + 1;
        } else {
          copy[x][y] = 0;
        }
      } else if (num_alive == 3) {
        copy[x][y] = 1;
      }
    }
  }

  return copy;
}