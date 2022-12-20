import { Container, Item, List, Text, Title } from './TextList.styled'
import TextListSvgSelector from './TextListSvgSelector'


const TextList = () => {
    return (
        <Container>
            <Title>Переваги</Title>
        <List>
            <Item>
                <TextListSvgSelector id={"quality"}/>
                <Text>Якість виконання роботи</Text>
            </Item>
            <Item>
               <TextListSvgSelector id={"material"}/>
               <Text>Матеріал, з якого виконані вироби, гіпоалергенний та підходить
            навіть для немовлят</Text> 
            </Item>
            <Item>
                <TextListSvgSelector id={"diversity"}/>
                <Text>Різноманітність у виборі візерунка, кольору, розміру виробу та
            надання допомоги у підборі саме під ваш запит</Text>
            </Item>
        </List>
    </Container>
    )
} 

export default TextList