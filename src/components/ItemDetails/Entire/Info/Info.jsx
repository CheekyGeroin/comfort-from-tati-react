// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { addItem } from 'redux/basketSlice'
import {
  AccentContainer,
  InfoContainer,
  BtnContainer,
  Item,
  Link,
  List,
  ListText,
  Text,
  TextContainer,
  Title,
  TitleContainer, Span} from './Info.styled'
const Info = ({ data }) => {
  const dispatch = useDispatch()

  
  const { title, description, size, price, } = data
  
    return (
        <InfoContainer>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <AccentContainer>
            <Text>Всі замовлення виконуються індивідуально під вас</Text>
          </AccentContainer>
          <TextContainer>
            <List>
              <Item>
                <ListText><Span>Опис:</Span>{description}</ListText>
              </Item>
              <Item>
                <ListText><Span>Розмір:</Span>{size}</ListText>
              </Item>
              <Item>
                <ListText><Span>Ціна:</Span>{price}</ListText>
              </Item>
            </List>
          </TextContainer>
          <BtnContainer>
            <Link to="basket" onClick={()=>{dispatch(addItem(title, price))}}>Оформити замовлення</Link>
          </BtnContainer>
        </InfoContainer>
    )
}



export default Info