import { useState } from "react";
import Board from "./components/board";

type DisplayData = number[][];

const updateTestCase: DisplayData = [];
for (let i = 0; i < 25; i++) {
  updateTestCase.push([...Array(40)].map(() => Math.round(Math.random() * 0.55)));
}
updateTestCase[0][0] = 4;

let initMachineData = [[0, 0], [-1, 0], [-2, 0], [-3, 0], [-4, 0], [-5, 0]];

export default function App() {
  const [tickIntervalMs, setTickIntervalMs] = useState(500);
  const [lastDir, setLastDir] = useState("unknown");
  const [foodCnt, setFoodCnt] = useState(0);

  return (
    <div className = "w-screen h-screen flex content-center justify-center flex-wrap" >
      <Board initDisplayData = { updateTestCase } initMachineData = { initMachineData } tickInterval = { tickIntervalMs } 
      gridWidth = {40}
      gridHeight = {25}
      lastDir = {lastDir}
      setLastDir = {setLastDir}
      foodCnt = {foodCnt}
      setFoodCnt = {setFoodCnt}
      />
      <button className = "border-black border-2 rounded-xl w-14 h-10 mx-3"
        onClick={() => setTickIntervalMs((tickIntervalMs+800)%1200)}>
          {(tickIntervalMs === 100? "3x" : (tickIntervalMs === 500? "2x" : "1x"))}
        </button>
    </div>
  );
}