import ColourList from "../ColourList/ColourList"
import { colourBath } from "data/catalog/colour"
const BathColour = () => {
    return (
        <div>
            <ColourList data={colourBath} />
        </div>
    )
}

export default BathColour