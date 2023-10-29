import { useState, useEffect } from "react";

import Grid from "./visual/grid";
import conway from "../logics/conway";
import machine from "../logics/machine";
import razor from "../logics/razor";

type DisplayData = number[][];
type MachineData = number[][];

export default function Board(
  { initDisplayData, initMachineData, tickInterval }: 
  { initDisplayData: DisplayData, initMachineData: MachineData, tickInterval: number }
) {
  const [ displayData, setDisplayData ] = useState(initDisplayData);
  const [ machineData, setMachineData ] = useState(initMachineData);

  useEffect(() => {
    const interval = setInterval(() => {
      const [ d, m ] = updateBoard(displayData, machineData);
      setDisplayData(d);
      setMachineData(m);
    }, tickInterval);
    return () => clearInterval(interval);
  }, [displayData, machineData]);

  return <Grid displayData = { displayData } />;
}

function updateBoard(displayData: DisplayData, machineData: MachineData ) {
  displayData = conway(displayData);
  displayData = machine(displayData);
  displayData = razor(machineData, displayData);
  return [ displayData, machineData ];
}