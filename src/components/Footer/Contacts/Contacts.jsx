import { Container, Title, List, Item, Text } from "./Contacts.styled"
import ContactsSvgSelector from "./ContactsSvgSelector"

const Contacts = () => {
    return (
        <Container id='contacts'>
        <Title>Контакти</Title>
        <List>
            <Item>
                <ContactsSvgSelector id={'email'}/>
                <Text>Tseluiko_Tanya@ukr.net</Text>
            </Item>
            <Item>
                <ContactsSvgSelector id={'phone'}/>
                <Text>+380 97 976 03 05</Text>
            </Item>
        </List>
    </Container>
    )
}

export default Contacts