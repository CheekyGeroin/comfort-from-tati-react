import { Container, Section, Title } from "./CatalogList.styled"
import List from "./List/List"

const CatalogList = () => {
    return (
        <Section id="catalog">
            <Container>
                <Title>Каталог</Title>
                <List/>

            </Container>
        </Section>
    )
}

export default CatalogList