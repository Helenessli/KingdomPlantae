let DirtTile = () => <div className =
  "w-[25px] h-[25px] bg-[#a7594c] hover:bg-[#814a3f] hover:cursor-pointer"
/>;

let SproutTile = () => <div className =
  "w-[25px] h-[25px] bg-[#77ff00] hover:bg-[#a0a0a0] hover:cursor-pointer rounded-full"
/>;

let TeenTile = () => <div className = 
  "w-[25px] h-[25px] bg-[#0d7416] hover:bg-[#a0a0a0] hover:cursor-pointer rounded-full"
/>;

let AdultTile = () => <div className="bg-[#ff0000]">
  <div className = 
  "w-[25px] h-[25px] bg-[#ffb61a] hover:bg-[#a0a0a0] hover:cursor-pointer rounded-full"
/>
</div>;

let tileTypes  = [ DirtTile, SproutTile, TeenTile, AdultTile ];

export default function Tile({ tileState }: { tileState: number }) {
  return tileTypes[tileState]();
}