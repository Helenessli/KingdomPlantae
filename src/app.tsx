import Board from "./components/board";

type DisplayData = number[][];

const updateTestCase: DisplayData = [];
for (let i = 0; i < 25; i++) {
  updateTestCase.push([...Array(40)].map(() => Math.round(Math.random() * 0.55)));
}

export default function App() {
  return (
    <div className = "w-screen h-screen flex content-center justify-center flex-wrap" >
      <Board initialData = { updateTestCase } />
    </div>
  );
}