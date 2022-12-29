import { Container, InnerLink, Item, List } from "./Navigation.styled"


const Navigation = () => {
    return (
        <Container>
        <List>
            <Item><InnerLink href="#catalog">Каталог</InnerLink></Item>
            <Item><InnerLink href="#stock">Акції</InnerLink></Item>
            <Item><InnerLink href="#contacts">Контакти</InnerLink></Item>
            <Item><InnerLink href="#questions">Запитання</InnerLink></Item>
        </List>
        </Container>
    )
}
export default Navigation