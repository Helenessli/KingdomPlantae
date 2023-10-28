import Grid from "./components/visual/grid";

export default function App() {
  let tileStates = [];
  for (let i = 0; i < 50; i++) {
    tileStates.push([...Array(50)].map(() => Math.round(Math.random() * 3)));
  }

  return (
    <div className = "App" >
      <Grid tileStates = {tileStates} />
    </div>
  );
}