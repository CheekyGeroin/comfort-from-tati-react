import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { Container, Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <Logo />
        <Navigation />
        <LanguageSwitcher />
        <HeaderLinks />
      </Container>
    </Header>
  );
};

export default AppBar;
