import { Container, Item, Link, List, Logo, Text } from './About.styled';
import AboutSvgSelector from './AboutSvgSelector';

const About = () => {
  return (
    <Container>
    <Logo>Comfort From Tati</Logo>
    <Text>Тепло і затишок в душі та домі</Text>
    <List>
      <Item>
        <Link href="https://t.me/ComfortFromTati">
          <AboutSvgSelector id={'tg'} />
        </Link>
      </Item>
      <Item>
        <Link href="https://instagram.com/comfort.from.tati?igshid=NzNkNDdiOGI=">
          <AboutSvgSelector id={'inst'} />
        </Link>
      </Item>
      <Item>
        <Link href="viber://chat?number=%2B380979760305">
          <AboutSvgSelector id={'vib'} />
        </Link>
      </Item>
    </List>
  </Container>
  );
};

export default About;
