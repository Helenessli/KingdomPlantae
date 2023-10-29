import { useState, useEffect } from "react";

import Grid from "./visual/grid";
import conway from "../logics/conway";
import machine from "../logics/machine";
import razor from "../logics/razor";

type DisplayData = number[][];
type MachineData = number[][];

export default function Board(
  { initDisplayData, initMachineData, tickInterval, 
    gridWidth,
    gridHeight,
    lastDir,
    setLastDir,
    foodCnt,
    setFoodCnt}: 
  { initDisplayData: DisplayData, initMachineData: MachineData, tickInterval: number, gridWidth: number,
    gridHeight: number,
    lastDir: string,
    setLastDir: any,
    foodCnt: number,
    setFoodCnt: any,}
) {
  const [ displayData, setDisplayData ] = useState(initDisplayData);
  const [ machineData, setMachineData ] = useState(initMachineData);

  useEffect(() => {
    const interval = setInterval(() => {
      const [ d, m ] = updateBoard(displayData, machineData, gridWidth,
        gridHeight,
        lastDir,
        setLastDir,
        foodCnt,
        setFoodCnt);
      setDisplayData(d);
      setMachineData(m);
    }, tickInterval);
    return () => clearInterval(interval);
  }, [displayData, machineData]);

  return <Grid displayData = { displayData } />;
}

function updateBoard(displayData: DisplayData, machineData: MachineData, gridWidth: number, gridHeight: number, lastDir: string, setLastDir: any, foodCnt: number, setFoodCnt: any, ) {
  displayData = conway(displayData);
  [ machineData, displayData ] = machine(machineData, displayData, gridWidth,
    gridHeight,
    lastDir,
    setLastDir,
    foodCnt,
    setFoodCnt);
  displayData = razor(machineData, displayData);

  return [ displayData, machineData ];
}