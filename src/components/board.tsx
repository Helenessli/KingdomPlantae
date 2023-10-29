import { useState, useEffect } from "react";

import Grid from "./visual/grid";
import conway from "../logics/conway";
import machine from "../logics/machine";
import razor from "../logics/razor";

type DisplayData = number[][];

export default function Board({ initialData } : { initialData : DisplayData }) {
  const [displayData, setDisplaydata] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplaydata(updateDisplayData(displayData));
    }, 500);
    return () => clearInterval(interval);
  }, [displayData]);

  return <Grid displayData = { displayData } />;
}

function updateDisplayData(displayData: DisplayData): DisplayData {
  displayData = conway(displayData);
  displayData = machine(displayData);
  displayData = razor(displayData);
  return displayData;
}