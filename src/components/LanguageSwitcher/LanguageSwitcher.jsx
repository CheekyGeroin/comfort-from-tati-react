import { Container, Item, List, Link } from "./LanguageSwitcher.styled"



const LanguageSwitcher = () => {
    return (
        <Container>
            <List>
            <Item><Link to="/">UA</Link></Item>
            <Item><Link to="/en">EN</Link></Item>
        </List>
        </Container>
    )
}
export default LanguageSwitcher