import React from "react";
const CELL_SIZE = 15;
const WIDTH = 800;
const HEIGHT = 600;

const numRows = 50;
const numCols = 50;

class Game extends React.Component {
  rows: number;
  cols: number;
  board: number[][];
  constructor() {
    super(HEIGHT / CELL_SIZE);
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
    this.board = this.makeEmptyBoard();
  }

  cutPlants(board: number[][], monster: number[][], razors: boolean[][]) {
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
              A[0] + r < numRows &&
              A[1] + c > 0 &&
              A[1] + c < numCols
            ) {
              if (board[A[0] + r][A[1] + c] != 0) board[A[0] + r][A[1] + c] = 1;
            }
            if (
              B[0] + r > 0 &&
              B[0] + r < numRows &&
              B[1] + c > 0 &&
              B[1] + c < numCols
            ) {
              if (board[B[0] + r][B[1] + c] != 0) board[B[0] + r][B[1] + c] = 1;
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

  moveMonster(monster: number[][], newx: number, newy: number): number[][] {
    for (let i = monster.length; i > 0; i--) {
      monster[i][0] = monster[i - 1][0];
      monster[i][1] = monster[i - 1][1];
    }
    monster[0][0] = newx;
    monster[0][1] = newy;
    return monster;
  }

  makeEmptyBoard() {
    let board: number[][] = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        board[x][y] = 0;
      }
    }
    return board;
  }

  calculateNeighbors(board: number[][], x: number, y: number) {
    let neighbors: number[] = [0, 0, 0, 0];
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows) {
        neighbors[board[x1][y1]]++;
      }
    }
    return neighbors;
  }
  runIteration() {
    let newBoard = this.makeEmptyBoard();

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y);
        let num_alive = neighbors[1] + neighbors[2] + neighbors[3];
        if (this.board[y][x] != 0) {
          if (num_alive == 0 || num_alive == 1) newBoard[x][y] == 0; //rule1
          else if (num_alive == 2 || num_alive == 3 || num_alive == 4) {
            if (this.board[x][y] != 3) newBoard[x][y] = this.board[x][y] + 1;
          } else newBoard[x][y] = 0;
        } else if (num_alive == 3) this.board[x][y] = 1;
      }
    }
  }

  render() {
    return <div></div>;
  }
}

export default Game;
