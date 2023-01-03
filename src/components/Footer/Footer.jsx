import { desktopPoint, mobilePoint, tabletPoint } from "utils/breakpoints"
import About from "./About/About"
import Catalog from "./Catalog/Catalog"
import Contacts from "./Contacts/Contacts"
import { Container, Section } from "./Footer.styled"
import Links from "./Links/Links"

const Footer = () => {
    return (
        <Section>
            {mobilePoint&& <Container>
                <About />
            </Container>}
            {tabletPoint&&<Container>
                <About />
                <Contacts />
            </Container>}
            {desktopPoint&& <Container>
                <About />
                <Catalog />
                <Links />
                <Contacts />
            </Container>}
        </Section>
    )
}

export default Footer