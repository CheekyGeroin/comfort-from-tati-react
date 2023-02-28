// import PropTypes from 'prop-types';
import { useBasket } from 'utils/basketContext'
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
  const {addItem} = useBasket()

  
  const { title, description, size, price, basketInfo } = data
  const { imgDesk, imgDesk2x, basketTitle, basketPrice } = basketInfo
  const handleClick = () => {
    

    addItem(imgDesk, imgDesk2x, basketTitle, basketPrice)
  }

  
  
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
            <Link to="/basket" onClick={handleClick}>Оформити замовлення</Link>
          </BtnContainer>
        </InfoContainer>
    )
}



export default Info