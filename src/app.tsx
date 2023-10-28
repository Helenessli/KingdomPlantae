import Grid from "./components/visual/grid";

export default function App() {
  let tileStates = [];
  for (let i = 0; i < 25; i++) {
    tileStates.push([...Array(40)].map(() => Math.round(Math.random() * 3)));
  }

  return (
    <div className = "w-screen h-screen flex content-center justify-center flex-wrap" >
      <Grid tileStates = {tileStates} />
    </div>
  );
}