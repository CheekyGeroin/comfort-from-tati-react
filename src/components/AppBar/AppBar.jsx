import PropTypes from 'prop-types';
import BurgerIcon from 'components/BurgerMenu/BurgerIcon/BurgerIcon';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { useState } from 'react';
import { desktopPoint, mobilePoint, tabletPoint } from 'utils/breakpoints';
import { CatalogHeader, Container, Header, MenuContainer } from './AppBar.styled';

const AppBar = ({accent}) => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(true);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };
 

  return (
    <div>
      {accent ? <CatalogHeader>
      {mobilePoint && (
        <div>
          <Container>
          {!open && (
            <MenuContainer>
              <Logo />
              <LanguageSwitcher />
              <BurgerIcon id="open" onClick={handleOpenMenu} />
            </MenuContainer>
          )}
        </Container>
        {open && <BurgerMenu onClick={handleCloseMenu} />}
        </div>
      )}
      {tabletPoint && (
        <div>
          <Container>
          {!open && (
            <MenuContainer>
              <Logo />
              <LanguageSwitcher />
              <BurgerIcon id="open" onClick={handleOpenMenu} />
            </MenuContainer>
          )}
          </Container>
          {open && <BurgerMenu onClick={handleCloseMenu} />}
        </div>
      )}
      {desktopPoint && (
        <Container>
          <Logo />
          <Navigation />
          <LanguageSwitcher />
          <HeaderLinks />
        </Container>
      )}
      </CatalogHeader> :
    <Header>
      {mobilePoint && (
        <div>
          <Container>
          {!open && (
            <MenuContainer>
              <Logo />
              <LanguageSwitcher />
              <BurgerIcon id="open" onClick={handleOpenMenu} />
            </MenuContainer>
          )}
        </Container>
        {open && <BurgerMenu onClick={handleCloseMenu} />}
        </div>
      )}
      {tabletPoint && (
        <div>
          <Container>
          {!open && (
            <MenuContainer>
              <Logo />
              <LanguageSwitcher />
              <BurgerIcon id="open" onClick={handleOpenMenu} />
            </MenuContainer>
          )}
          </Container>
          {open && <BurgerMenu onClick={handleCloseMenu} />}
        </div>
      )}
      {desktopPoint && (
        <Container>
          <Logo />
          <Navigation />
          <LanguageSwitcher />
          <HeaderLinks />
        </Container>
      )}
    </Header>}
    </div>
  );
};

AppBar.propTypes = {
  accent:PropTypes.bool.isRequired,
}
export default AppBar;
