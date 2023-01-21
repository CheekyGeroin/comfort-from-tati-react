import ColourList from "../ColourList/ColourList"
import { colourPlaid } from "data/catalog/colour"
import { Container, Subtitle } from "./PlaidColour.styled"
const PlaidColour = () => {
    return (
        <div>
            <Container>
                <Subtitle>Кольори для пледів всіх розмірів</Subtitle>
            </Container>
            <ColourList data={colourPlaid} />
        </div>
    )
}

export default PlaidColour