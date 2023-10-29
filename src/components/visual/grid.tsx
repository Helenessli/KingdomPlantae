import Tile from "./tile";

export default function Grid({ tileStates }: { tileStates: Array<Array<number>> }) {
  let h = tileStates.length;
  let w = (tileStates.length == 0) ? 0 : tileStates[0].length;

  return (
    <div className = "bg-[#a7594c]" >
      {[...Array(h)].map( (_v, i) => 
        <div className = "flex flex-row" key = { i } >
          {[...Array(w)].map( (_v, j) => 
            <Tile tileState = { tileStates[i][j] } key = { j } /> 
          )}
        </div>
      )}
    </div>
  );
}
