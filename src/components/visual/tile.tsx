let DirtTile = () => <div className =
  "w-[25px] h-[25px] bg-[#a7594c] hover:bg-[#814a3f] hover:cursor-pointer"
/>;

let SproutTile = () => <div className =
  "w-[25px] h-[25px] bg-[#77ff00] hover:bg-[#000000] hover:cursor-pointer"
/>;

let TeenTile = () => <div className = 
  "w-[25px] h-[25px] bg-[#14911f] hover:bg-[#000000] hover:cursor-pointer"
/>;

let AdultTile = () => <div className = 
  "w-[25px] h-[25px] bg-[#ff00e6] hover:bg-[#000000] hover:cursor-pointer"
/>;

let tileTypes  = [ DirtTile, SproutTile, TeenTile, AdultTile ];

export default function Tile({ tileState }: { tileState: number }) {
  return tileTypes[tileState]();
}