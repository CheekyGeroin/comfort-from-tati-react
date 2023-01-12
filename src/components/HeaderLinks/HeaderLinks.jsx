
import { desktopPoint, mobilePoint, tabletPoint } from 'utils/breakpoints';
import { CallLink, Container, Item, List, Link } from './HeaderLinks.styled';
import HeaderLinksSvgSelector from './HeaderLinksSvgSelector';


const HeaderLinks = () => {
  const smallSize = mobilePoint || tabletPoint
  
  return (
    <Container>
      <List>
      <Item>
          <CallLink href="tel:+380979760305">
            {smallSize && (<HeaderLinksSvgSelector id={"small_phone"} />)}
            {desktopPoint && <HeaderLinksSvgSelector id={"phone"} />}
        </CallLink>
      </Item>
      <Item>
          <Link to='/basket'>
            {smallSize && (<HeaderLinksSvgSelector id={"small_cart"} />)}
          {desktopPoint &&<HeaderLinksSvgSelector id={"cart"} />}
        </Link>
      </Item>
    </List>
    </Container>
  );
};
export default HeaderLinks
