import { useState, useEffect } from "react";
import { updateBoard } from "./components/gameLogic";
import Board from "./components/board";

type DisplayData = number[][];

const updateTestCase: DisplayData = [];
for (let i = 0; i < 25; i++) {
  updateTestCase.push([...Array(40)].map(() => Math.round(Math.random() * 0.55)));
}

export default function App() {
  // const [tileStates, setTileStates] = useState(updateTestCase);
  // const [tickIntervalMs, setTickIntervalMs] = useState(500);
  // const [monster, setMonster]: any = useState([[0, 0]]); //x,y coordinates of each monster part
  // const [lastDir, setLastDir] = useState("unknown");
  // const [razor, setRazor]: any = useState([]); //3x3 boolean grid showing current razor configuration
  // const [foodCnt, setFoodCnt]: any = useState(0); //resets to zero after reaching 20

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTileStates(updateTileStates(tileStates));
  //     setMonster(updateBoard(monster, tileStates, setTileStates, updateTileStates, gridWidth, gridHeight, lastDir, setLastDir, foodCnt, setFoodCnt));
  //   }, tickIntervalMs);
  //   return () => clearInterval(interval);
  // }, [tileStates]);

  return (
    <div className = "w-screen h-screen flex content-center justify-center flex-wrap" >
      <Board initialData = { updateTestCase } />
      {/* <button className="border-black border-2 rounded-xl w-14 h-10 mx-3"onClick={() => setTickIntervalMs((tickIntervalMs+800)%1200)}>{(tickIntervalMs === 100? "3x" : (tickIntervalMs === 500? "2x" : "1x"))}</button> */}
    </div>
  );
}