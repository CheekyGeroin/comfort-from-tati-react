import { Container, Item, Link, List } from "./Social.styled";
import SocialSvgSelector from "./SocialSvgSelector";

const Social = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link href="https://t.me/ComfortFromTati">
            <SocialSvgSelector id="tg" />
          </Link>
        </Item>
        <Item>
          <Link href="https://instagram.com/comfort.from.tati?igshid=NzNkNDdiOGI=">
            <SocialSvgSelector id="inst" />
          </Link>
        </Item>
        <Item>
          <Link href="viber://chat?number=%2B380979760305">
            <SocialSvgSelector id="vib" />
          </Link>
        </Item>
      </List>
    </Container>
  );
};

export default Social