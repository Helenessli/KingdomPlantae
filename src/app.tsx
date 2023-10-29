import { ChangeEvent, useState } from "react";
import Board from "./components/board";
import ControlButtons from "./components/ui/controlButtons";

type DisplayData = number[][];

const updateTestCase: DisplayData = [];
for (let i = 0; i < 25; i++) {
  updateTestCase.push([...Array(40)].map(() => Math.round(Math.random() * 0.55)));
}
updateTestCase[10][10] = 4;
updateTestCase[11][10] = 14;
updateTestCase[12][10] = 14;
updateTestCase[13][10] = 14;
updateTestCase[14][10] = 14;
updateTestCase[15][10] = 14;
let initMachineData = [[10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10]];

export default function App() {
  const [tickIntervalMs, setTickIntervalMs] = useState(500);
  const [tickPaused, setTickPaused] = useState(false);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "tickInterval") {
      setTickIntervalMs((tickIntervalMs + 800) % 1200);
    }
    else if (event.target.name === "tickPaused") {
      setTickPaused(!tickPaused);
    }
  }

  return (
    <div className="w-screen h-screen flex content-center justify-center flex-wrap" >
      <Board initDisplayData={updateTestCase} initMachineData={initMachineData} tickInterval={tickIntervalMs} tickPaused={tickPaused}/>
      <ControlButtons tickIntervalMs={tickIntervalMs} tickPaused={tickPaused} handleChange={handleChange}/>
    </div>
  );
}
// <button className="border-black border-2 rounded-xl w-14 h-10 mx-3"
// onClick={() => setTickIntervalMs((tickIntervalMs + 800) % 1200)}>
// {(tickIntervalMs === 100 ? "3x" : (tickIntervalMs === 500 ? "2x" : "1x"))}
// </button>
