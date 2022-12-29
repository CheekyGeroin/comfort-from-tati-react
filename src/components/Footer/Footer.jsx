import About from "./About/About"
import Catalog from "./Catalog/Catalog"
import Contacts from "./Contacts/Contacts"
import { Container, Section } from "./Footer.styled"
import Links from "./Links/Links"

const Footer = () => {
    return (
        <Section>
            <Container>
                <About />
                <Catalog />
                <Links />
                <Contacts />
            </Container>
        </Section>
    )
}

export default Footer