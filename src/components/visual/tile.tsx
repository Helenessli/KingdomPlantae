const DirtTile = () => <div className =
  "w-[25px] h-[25px] bg-[#a7594c] hover:bg-[#814a3f] hover:cursor-pointer"
/>;

const SproutTile = () => <div className = {
  "w-0 h-0 border-[12.5px] border-solid border-transparent border-b-[#77ff00] relative top-[-12.5px] \
  after:content-[''] after:absolute after:left-[-12.5px] after:top-[12.5px] after:w-0 after:h-0 \
  after:border-[12.5px] after:border-solid after:border-transparent after:border-t-[#77ff00]"}
/>;

const TeenTile = () => <div className = {
  // "w-[25px] h-[25px] bg-[#14911f] hover:bg-[#000000] hover:cursor-pointer rounded-full"
  "w-0 h-0 border-[12.5px] border-solid border-transparent border-b-[#14911f] relative top-[-12.5px] \
  after:content-[''] after:absolute after:left-[-12.5px] after:top-[12.5px] after:w-0 after:h-0 \
  after:border-[12.5px] after:border-solid after:border-transparent after:border-t-[#14911f]"}
/>;

const AdultTile = () => <div className = 
  // "w-[25px] h-[25px] bg-[#ff00e6] hover:bg-[#000000] hover:cursor-pointer rounded-full"
  {
    "w-0 h-0 border-[12.5px] border-solid border-transparent border-b-[#ff00e6] relative top-[-12.5px] \
    after:content-[''] after:absolute after:left-[-12.5px] after:top-[12.5px] after:w-0 after:h-0 \
    after:border-[12.5px] after:border-solid after:border-transparent after:border-t-[#ff00e6]"}
/>;

const tileTypes = [ DirtTile, SproutTile, TeenTile, AdultTile ];

export default function Tile({ tileState }: { tileState: number }) {
  return tileTypes[tileState]();
}