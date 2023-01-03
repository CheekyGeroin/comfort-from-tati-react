import BurgerIcon from 'components/BurgerMenu/BurgerIcon/BurgerIcon';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { desktopPoint, mobilePoint, tabletPoint } from 'utils/breakpoints';
import { Container, Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      {mobilePoint && <Container>
        <Logo />
        <LanguageSwitcher />
        <BurgerIcon id='open'/>
      </Container>}
      {tabletPoint && <Container>
        <Logo />
        <LanguageSwitcher />
        <BurgerIcon id='open'/>
      </Container>}
      {desktopPoint && <Container>
        <Logo />
        <Navigation />
        <LanguageSwitcher />
        <HeaderLinks />
      </Container>}
    </Header>
  );
};

export default AppBar;
