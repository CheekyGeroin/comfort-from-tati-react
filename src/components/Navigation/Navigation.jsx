import { Container, InnerLink, Item, Link, List } from "./Navigation.styled"


const Navigation = () => {
    return (
        <Container>
        <List>
            <Item><Link to="/catalog">Каталог</Link></Item>
            <Item><InnerLink href="#stock">Акції</InnerLink></Item>
            <Item><InnerLink href="#contacts">Контакти</InnerLink></Item>
            <Item><InnerLink href="#questions">Запитання</InnerLink></Item>
        </List>
        </Container>
    )
}
export default Navigation