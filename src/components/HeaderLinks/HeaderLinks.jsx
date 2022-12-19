
import { CallLink, Container, Item, List, Link } from './HeaderLinks.styled';
import HeaderLinksSvgSelector from './HeaderLinksSvgSelector';


const HeaderLinks = () => {
  
  return (
    <Container>
      <List>
      <Item>
        <CallLink href="tel:+380979760305">
          <HeaderLinksSvgSelector id={"phone"} />
        </CallLink>
      </Item>
      <Item>
        <Link to='/basket'>
          <HeaderLinksSvgSelector id={"cart"} />
        </Link>
      </Item>
    </List>
    </Container>
  );
};
export default HeaderLinks
