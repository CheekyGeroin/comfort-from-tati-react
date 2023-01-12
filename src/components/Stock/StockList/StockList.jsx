import { Img, Item, Link, List, Text, Container } from './StockList.styled';

const StockList = () => {
  return (
    <List>
      <Item>
        <Container>
          <Img
            src={require('images/sales/pink-plaid-175w.jpg')}
            alt="Рожевий плед"
            srcSet={`${require('images/sales/pink-plaid-175w.jpg')} 175w, ${require('images/sales/pink-plaid-320w.jpg')} 320w,${require('images/sales/pink-plaid-350w.jpg')} 350w, ${require('images/sales/pink-plaid-375w.jpg')} 375w, ${require('images/sales/pink-plaid-385w.jpg')} 385w, ${require('images/sales/pink-plaid-640w.jpg')} 640w, ${require('images/sales/pink-plaid-750w.jpg')} 750w, ${require('images/sales/pink-plaid-770w.jpg')} 770w`}
            sizes="(min-width:1600px) 385px, (min-width:1280px) 320px, (min-width:768px) 175px, (max-width:767px) 375px, 100vw"
          />
        </Container>
      </Item>
      <Item>
        <Text>Отримай знижку 15% за підписку</Text>
        <Link>Отримати</Link>
      </Item>
      <Item>
        <Container>
          <Img
            src={require('images/sales/yellow-plaid-320w.jpg')}
            alt="жовтий плед"
            srcSet={`${require('images/sales/yellow-plaid-320w.jpg')} 320w, ${require('images/sales/yellow-plaid-375w.jpg')} 375w, ${require('images/sales/yellow-plaid-385w.jpg')} 385w, ${require('images/sales/yellow-plaid-640w.jpg')} 640w, ${require('images/sales/yellow-plaid-750w.jpg')} 750w, ${require('images/sales/yellow-plaid-770w.jpg')} 770w`}
            sizes="(min-width:1600px) 385px, (min-width:1280px) 320px, (max-width:767px) 375px, 100vw"
          />
        </Container>
      </Item>
      <Item>
        <Container>
          <Img
            src={require('images/sales/grey-plaid-282w.jpg')}
            alt="Сірий плед"
            srcSet={`${require('images/sales/grey-plaid-282w.jpg')} 282w, ${require('images/sales/grey-plaid-320w.jpg')} 320w, ${require('images/sales/grey-plaid-345w.jpg')} 345w, ${require('images/sales/grey-plaid-375w.jpg')} 375w, ${require('images/sales/grey-plaid-564w.jpg')} 564w, ${require('images/sales/grey-plaid-640w.jpg')} 640w, ${require('images/sales/grey-plaid-690w.jpg')} 690w, ${require('images/sales/grey-plaid-750w.jpg')} 750w`}
            sizes="(min-width:1600px) 345px, (min-width:1280px) 320px, (min-width:768px) 282px, (max-width:767px) 375px,  100vw"
          />
        </Container>
      </Item>
    </List>
  );
};
export default StockList;
