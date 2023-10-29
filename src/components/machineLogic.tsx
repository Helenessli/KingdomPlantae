export function movementDecision(
  monster: number[][],
  tileStates: number[][],
  gridWidth: number,
  gridHeight: number,
  lastDir: string,
  setLastDir: any
) {
  const directionMove: any = {
    up: [0, 1],
    down: [0, -1],
    right: [1, 0],
    left: [-1, 0],
  };
  function checkGrass(dir: String, gridHeight: number, gridWidth: number) {
    //checks for grass and returns num of grass it can eat, and in the area
    let xi = 0;
    let yi = 0;
    let xf = 0;
    let yf = 0;

    //head location
    const x = monster[0][0];
    const y = monster[0][1];

    let res = 0;
    let food = 0;

    if (dir == "up") {
      xi = -2;
      xf = 2;
      yi = 1;
      yf = 5;
    }

    if (dir == "down") {
      xi = -2;
      xf = 2;
      yi = -5;
      yf = -1;
    }

    if (dir == "left") {
      xi = -5;
      xf = -1;
      yi = -2;
      yf = 2;
    }

    if (dir == "right") {
      xi = 1;
      xf = 5;
      yi = -2;
      yf = 2;
    }

    for (let i = yi; i <= yf; i++) {
      for (let j = xi; j <= xf; j++) {
        if (
          y + i >= 0 &&
          y + i < gridHeight &&
          x + j >= 0 &&
          x + j < gridWidth
        ) {
          let val = tileStates[y + i][x + j] % 10;
          if (val < 4) {
            if (i == 0 || j == 0) {
              food += tileStates[y + i][x + j] % 10;
            } else {
              res += tileStates[y + i][x + j] % 10;
            }
          }
        }
      }
    }
    return [food, res];
  }
  function greedyDecision(
    directions: string[],
    len: number,
    gridHeight: number,
    gridWidth: number
  ) {
    const headPos = monster[0];
    let max = 0; //max amount of food in straight line
    let max_det = 0; //determines which dir if max food is same for two different dir
    let dir = "unknown";
    if (Math.floor(Math.random() * 100) >=70)
    {
      for (let i = 0; i < len; i++) {
        let [food, det] = checkGrass(directions[i], gridHeight, gridWidth);
        if (food > max) {
          max = food;
          max_det = det;
          dir = directions[i];
        } else if (food == max && det > max_det) {
          max_det = det;
          dir = directions[i];
        }
      }
    }
    else if (lastDir != "unknown"){
      dir = lastDir
      let x = headPos[0] + directionMove[dir][0];
      let y = headPos[1] + directionMove[dir][1];

      if (x < 0 || x >= gridWidth || y < 0 || y >= gridHeight)
      {
        dir = "unknown";
      }
    }

    if (dir == "unknown") {
      //if each dir has no food at all, randomize
      dir = directions[Math.floor(Math.random() * len)];
      let x = headPos[0] + directionMove[dir][0];
      let y = headPos[1] + directionMove[dir][1];
      while (x < 0 || x >= gridWidth || y < 0 || y >= gridHeight) {
        //make it make sure its not out of bounds
        dir = directions[Math.floor(Math.random() * len)];
        x = headPos[0] + directionMove[dir][0];
        y = headPos[1] + directionMove[dir][1];
      }
    }
    setLastDir(dir);
    return dir;
  }
  function moveMonster(newx: number, newy: number) {
    let monsterState = [...monster];

    for (let i = monster.length - 1; i > 0; i--) {
      monsterState[i][0] = monster[i - 1][0];
      monsterState[i][1] = monster[i - 1][1];
    }
    monsterState[0][0] = newx;
    monsterState[0][1] = newy;
    return monsterState;
  }

  let dir = "unknown";
  if (monster.length == 1) {
    //check all 4 sides
    dir = greedyDecision(
      ["up", "down", "right", "left"],
      4,
      gridHeight,
      gridWidth
    );
  } else {
    //check only 3 sides
    let direction = ["up", "left", "down"];
    if (monster[0][0] - monster[1][0] == 0) {
      direction =
        monster[0][1] == monster[1][1] + 1
          ? ["left", "up", "right"]
          : ["left", "down", "right"];
    } else if (monster[0][1] == monster[1][1] + 1)
      direction = ["up", "right", "down"];

    dir = greedyDecision(direction, 3, gridHeight, gridWidth);
  }
  let res = moveMonster(monster[0][0] + directionMove[dir][0], monster[0][1] + directionMove[dir][1]);
  console.log(`x: ${res[0][0]}, y: ${res[0][1]}`)//x and y)
  //update the movement and then update headposition
  return 
}

export function cutPlants(
  monster: number[][],
  tileStates: number[][],
  razors: boolean[][],
  gridWidth: number,
  gridHeight: number
) {
  let index = 2;
  while (index < monster.length) {
    let A: [number, number];
    let B: [number, number];
    if (monster[index][0] - monster[index - 1][0] == 0) {
      //same row, so blades are vertically stacked
      A = [monster[index][0] - 3, monster[index][1] - 1]; //top left corner of each 3x3 blade unit
      B = [monster[index][0] + 1, monster[index][1] - 1];
    } else {
      A = [monster[index][0] - 1, monster[index][1] - 3];
      B = [monster[index][0] - 1, monster[index][1] + 1];
    }
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (razors[r][c]) {
          if (
            A[0] + r > 0 &&
            A[0] + r < gridWidth &&
            A[1] + c > 0 &&
            A[1] + c < gridHeight
          ) {
            if (tileStates[A[0] + r][A[1] + c] != 0)
              tileStates[A[0] + r][A[1] + c] = 1;
          }
          if (
            B[0] + r > 0 &&
            B[0] + r < gridWidth &&
            B[1] + c > 0 &&
            B[1] + c < gridHeight
          ) {
            if (tileStates[B[0] + r][B[1] + c] != 0)
              tileStates[B[0] + r][B[1] + c] = 1;
          }
        }
      }
    }
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (razors[r][c]) {
          razors[r][c] = false;
          if (r == 0 && c == 0) razors[0][1] = true;
          else if (r == 0 && c == 1) razors[0][2] = true;
          else if (r == 0 && c == 2) razors[1][2] = true;
          else if (r == 1 && c == 2) razors[2][2] = true;
          else if (r == 2 && c == 2) razors[2][1] = true;
          else if (r == 2 && c == 1) razors[2][0] = true;
          else if (r == 2 && c == 0) razors[1][0] = true;
          else razors[0][0] = true;
        }
      }
    }
  }
}