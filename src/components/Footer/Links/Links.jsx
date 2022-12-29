import { Container, Item, Link, List } from "./Links.styled";

const Links = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link href="#stock">Акції</Link>
        </Item>
        <Item>
          <Link href="#contacts">Контакти</Link>
        </Item>
        <Item>
          <Link href="#questions">Запитання</Link>
        </Item>
      </List>
    </Container>
  );
};

export default Links;
