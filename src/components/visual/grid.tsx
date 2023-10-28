import React from "react";

import Tile from "./plantStates/tile";

import "./grid.css";

export default function Grid(
  { height, width, tileStates }:
  { height: number, width: number, tileStates: Array<Array<number>> }
) {
  let tiles: Array<React.ReactNode> = [];
  for (let i = 0; i < height; i++) {
    let row: Array<React.ReactNode> = [];
    for (let j = 0; j < width; j++) {
      row.push(<Tile tileState = { tileStates[i][j] } />)
    }
    tiles.push(<div className = "Row" children = { row } />);
  }

  return (
    <div className = "Grid" >
      {tiles}
    </div>
  );
}