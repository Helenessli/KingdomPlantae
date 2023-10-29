type DisplayData = number[][];

export default function conway(displayData: DisplayData) {
  let copy = [...displayData].map(row => [...row]);  // Hard copy here

  let h = displayData.length;
  let w = (displayData.length == 0) ? 0 : displayData[0].length;
  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      // Get number of neighbors for state 0, 1, 2, 3
      let neighbors = [0, 0, 0, 0];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (0 <= x + i && x + i < h &&
            0 <= y + j && y + j < w) {
            neighbors[displayData[x + i][y + j]]++;
          }
        }
      }

      // Update tileStates based on number of neighbors
      let numAlive = neighbors[1] + neighbors[2] + neighbors[3];
      if (displayData[x][y] != 0) {
        if (displayData[x][y] != 3 && (numAlive == 2 || numAlive == 3 || numAlive == 4)) {
          copy[x][y] = displayData[x][y] + 1;
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