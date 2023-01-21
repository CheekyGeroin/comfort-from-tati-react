import ColourList from "../ColourList/ColourList"
import { colourKids } from "data/catalog/colour"
import { Container, Subtitle } from "./KidsColour.styled"
const KidsColour = () => {
    return (
        <div>
            <Container>
                <Subtitle>Кольори для дитячих пледів </Subtitle>
            </Container>
            <ColourList data={colourKids} />
        </div>
    )
}

export default KidsColour