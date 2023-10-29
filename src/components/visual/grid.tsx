import Tile from "./tile";

type TileStates = Array<Array<number>>;

export default function Grid({ tileStates }: { tileStates: TileStates }) {
  let h = tileStates.length;
  let w = (tileStates.length == 0) ? 0 : tileStates[0].length;

  return (
    <div className = "bg-[#a7594c] border-[1px] border-black" >
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
