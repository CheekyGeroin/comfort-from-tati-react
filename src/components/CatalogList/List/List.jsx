import {
  CatalogList,
  ImageContainer,
  Img,
  Item,
  Link,
  Text,
  TextContainer,
} from './List.styled';

const List = () => {
  return (
    <CatalogList>
      <Item>
        <Link href='#'>
          <ImageContainer>
            <Img
              src={require('images/catalog/plaid-289w.jpg')}
              alt="Пледи"
              srcSet={`${require('images/catalog/plaid-289w.jpg')} 289w, ${require('images/catalog/plaid-315w.jpg')} 315w, ${require('images/catalog/plaid-366w.jpg')} 366w, ${require('images/catalog/plaid-578w.jpg')} 578w, ${require('images/catalog/plaid-630w.jpg')} 630w, ${require('images/catalog/plaid-732w.jpg')} 732w`}
              sizes="(min-width: 1280px) 366px, (min-width: 768px) 289px, (max-width: 767px) 315px, 100vw"
            />
          </ImageContainer>
          <TextContainer>
            <Text>Пледи</Text>
          </TextContainer>
        </Link>
      </Item>
      <Item>
        <Link href='#'>
          <ImageContainer>
            <Img
              src={require('images/catalog/bathroom-315w.jpg')}
              alt="Пледи"
              srcSet={`${require('images/catalog/bathroom-315w.jpg')} 315w, ${require('images/catalog/bathroom-356w.jpg')} 356w, ${require('images/catalog/bathroom-368w.jpg')} 368w, ${require('images/catalog/bathroom-630w.jpg')} 630w, ${require('images/catalog/bathroom-712w.jpg')} 712w, ${require('images/catalog/bathroom-736w.jpg')} 736w`}
              sizes="(min-width:1280px) 356px,(min-width:768px) 368px,(max-width:767px) 315px, 100vw"
            />
          </ImageContainer>
          <TextContainer>
            <Text>Килим у ванну</Text>
          </TextContainer>
        </Link>
      </Item>
      <Item>
        <Link href='#'>
          <ImageContainer>
            <Img
              src={require('images/catalog/individual-315w.jpg')}
              alt="Пледи"
              srcSet={`${require('images/catalog/individual-315w.jpg')} 315w, ${require('images/catalog/individual-368w.jpg')} 368w, ${require('images/catalog/individual-630w.jpg')} 630w, ${require('images/catalog/individual-736w.jpg')} 736w`}
              sizes="(min-width:768px) 368px,(max-width:767px) 315px, 100vw"
            />
          </ImageContainer>
          <TextContainer>
            <Text>Індивідуальне замовлення</Text>
          </TextContainer>
        </Link>
      </Item>
      <Item>
        <Link href='#'>
          <ImageContainer>
            <Img
              src={require('images/catalog/kids-315w.jpg')}
              alt="Пледи"
              srcSet={`${require('images/catalog/kids-315w.jpg')} 315w, ${require('images/catalog/kids-356w.jpg')} 356w, ${require('images/catalog/kids-369w.jpg')} 369w, ${require('images/catalog/kids-630w.jpg')} 630w, ${require('images/catalog/kids-712w.jpg')} 712w, ${require('images/catalog/kids-738w.jpg')} 738w`}
              sizes="(min-width:1280px) 356px,(min-width:768px) 369px,(max-width:767px) 315px, 100vw"
            />
          </ImageContainer>
          <TextContainer>
            <Text>Дитячі пледи</Text>
          </TextContainer>
        </Link>
      </Item>
      <Item>
        <Link href='#'>
          <ImageContainer>
            <Img
              src={require('images/catalog/colour-289w.jpg')}
              alt="Пледи"
              srcSet={`${require('images/catalog/colour-289w.jpg')} 289w, ${require('images/catalog/colour-315w.jpg')} 315w, ${require('images/catalog/colour-370w.jpg')} 370w, ${require('images/catalog/colour-578w.jpg')} 578w, ${require('images/catalog/colour-630w.jpg')} 630w, ${require('images/catalog/colour-740w.jpg')} 740w`}
              sizes="(min-width:1280px) 370px,(min-width:768px) 289px,(max-width:767px) 315px, 100vw"
            />
          </ImageContainer>
          <TextContainer>
            <Text>Кольори</Text>
          </TextContainer>
        </Link>
      </Item>
    </CatalogList>
  );
};

export default List;
