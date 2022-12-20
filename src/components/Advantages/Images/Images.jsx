import { FirstContainer, SecondContainer, FirstImage, SecondImage, Item, List } from "./Images.styled";


const Images = () => {
  return (
    <List>
      <Item>
        <FirstContainer>
          <FirstImage>
            <source media="(min-width:768px)" srcSet={require('images/adv/pink-plaid-260w.jpg')} />
            <source media="(min-width:1280px)" srcSet={require('images/adv/pink-plaid-265w.jpg') } />
            <img  src={require("images/adv/pink-plaid-260w.jpg")} alt="рожевий та жовтий пледи" />
          </FirstImage>
        </FirstContainer>
      </Item>
      <Item>
        <SecondContainer>
          <SecondImage>
            <source media="(min-width:768px)" srcSet={require('images/adv/blue-plaid-260w.jpg')} />
            <source media="(min-width:1280px)" srcSet={require('images/adv/blue-plaid-301w.jpg') } />
            <img  src={require("images/adv/blue-plaid-260w.jpg")} alt="синій плед" />
          </SecondImage>
        </SecondContainer>
      </Item>
    </List>
  );
};

export default Images;
