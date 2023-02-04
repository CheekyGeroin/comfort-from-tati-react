import BathColour from "./BathColour/BathColour"
import KidsColour from "./KidsColour/KidsColour"
import PlaidColour from "./PlaidColour/PlaidColour"
import { Container } from "./Colour.styled"

const Colour = () => {
    return (
        <Container>
        <PlaidColour />
        <KidsColour />
        <BathColour/>
    </Container>
    )
}
export default Colour