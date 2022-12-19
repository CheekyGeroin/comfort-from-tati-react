import { FirstContainer, SecondContainer,  FirstImage, SecondImage, Item, List } from "./Images.styled";

const Images = () => {
  return (
    <List>
      <Item>
        <FirstContainer>
          <FirstImage
            src="images/adv/pink-plaid-260w.jpg"
            alt="рожевий та жовтий пледи"
            srcSet="images/adv/pink-plaid-260w.jpg 260w,
              images/adv/pink-plaid-265w.jpg 265w,
              images/adv/pink-plaid-520w.jpg 520w,
              images/adv/pink-plaid-530w.jpg 530w"
            sizes="(min-width: 1280px) 265px, (min-width:768px) 260px, 100vw"
          />
        </FirstContainer>
      </Item>
      <Item>
        <SecondContainer>
          <SecondImage
            src="images/adv/blue-plaid-260w.jpg"
            alt="синій плед"
            srcSet="images/adv/blue-plaid-260w.jpg 260w,
              images/adv/blue-plaid-301w.jpg 301w,
              images/adv/blue-plaid-520w.jpg 520w,
              images/adv/blue-plaid-602w.jpg 602w"
            sizes="(min-width: 1280px) 301px, (min-width:768px) 260px, 100vw"
          />
        </SecondContainer>
      </Item>
    </List>
  );
};

export default Images;
