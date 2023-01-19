// import PropTypes from 'prop-types';
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
  
  const {title, description, size, price} = data
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
            <Link>Оформити замовлення</Link>
          </BtnContainer>
        </InfoContainer>
    )
}

// Info.propTypes = {
//   data: PropTypes.objectOf(
//     PropTypes.exact({
//      id:PropTypes.string.isRequired,
//      title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       size: PropTypes.string.isRequired,
//       price: PropTypes.string.isRequired,
//    }),
//   ),

// }

export default Info