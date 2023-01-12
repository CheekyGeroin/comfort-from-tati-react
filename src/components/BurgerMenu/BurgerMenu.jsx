import PropTypes from 'prop-types';
import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import Navigation from 'components/Navigation/Navigation';
import { mobilePoint, tabletPoint } from 'utils/breakpoints';
import BurgerIconClose from './BurgerIcon/BurgerIconClose';
import {
  ContactsContainer,
  Container,
  LinksContainer,
  MenuContainer,
  SocialContainer,
} from './BurgerMenu.styled';
import Social from './Social/Social';
import Contacts from 'components/Footer/Contacts/Contacts';

const BurgerMenu = ({ onClick }) => {
  return (
    <div>
      {mobilePoint && (
        <Container>
          <LinksContainer>
            <LanguageSwitcher />
            <BurgerIconClose id="close" onClick={onClick} />
          </LinksContainer>
          <MenuContainer>
            <HeaderLinks />
            <Navigation />
          </MenuContainer>
          <SocialContainer>
            <Social />
          </SocialContainer>
          <ContactsContainer>
            <Contacts />
          </ContactsContainer>
        </Container>
      )}
      {tabletPoint && (
        <Container>
          <LinksContainer>
            <LanguageSwitcher />
            <BurgerIconClose id="close" onClick={onClick} />
          </LinksContainer>
          <MenuContainer>
            <HeaderLinks />
            <Navigation />
          </MenuContainer>
          <SocialContainer>
            <Social />
          </SocialContainer>
        </Container>
      )}
    </div>
  );
};

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default BurgerMenu;
