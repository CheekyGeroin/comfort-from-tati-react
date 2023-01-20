import ColourList from "../ColourList/ColourList"
import { colourKids } from "data/catalog/colour"
const KidsColour = () => {
    return (
        <div>
            <ColourList data={colourKids} />
        </div>
    )
}

export default KidsColour