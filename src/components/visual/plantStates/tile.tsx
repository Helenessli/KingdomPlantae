import AdultTile from "./adult"
import DeadTile from "./dead"
import GrassTile from "./grass"
import SproutTile from "./sprout"
import TeenTile from "./teen"

export default function Tile({tileState}: any) : any
{
    return(
        <div>
            {tileState == 0? <GrassTile/> : <></> }
            {tileState == 1? <SproutTile/> : <></> }
            {tileState == 2? <TeenTile/> : <></> }
            {tileState == 3? <AdultTile/> : <></> }
            {tileState == 4? <DeadTile></DeadTile> : <></> }
        </div>
    )
}