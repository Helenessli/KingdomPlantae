import Grid from "./components/visual/grid";

import "./app.css";

export default function App() {
  let tileStates = Array(15).map(() => Array(15).map(() => 0));

  return (
    <div className = "App" >
      <Grid height = {15} width = {15} tileStates = {tileStates} />
    </div>
  );
}