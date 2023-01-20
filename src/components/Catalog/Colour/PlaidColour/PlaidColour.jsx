import ColourList from "../ColourList/ColourList"
import { colourPlaid } from "data/catalog/colour"
const PlaidColour = () => {
    return (
        <div>
            <ColourList data={colourPlaid} />
        </div>
    )
}

export default PlaidColour