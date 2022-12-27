import { Container, Section } from "./Stock.styled"
import StockList from "./StockList/StockList"

const Stock = () => {
    return (
        <Section id="stock">
            <Container>
                <StockList/>
            </Container>
        </Section>
    )
}
export default Stock