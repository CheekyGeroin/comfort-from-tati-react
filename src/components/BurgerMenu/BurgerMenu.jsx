import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import Navigation from 'components/Navigation/Navigation';
import { mobilePoint, tabletPoint } from 'utils/breakpoints';
import BurgerIcon from './BurgerIcon/BurgerIcon';
import {
  ContactsContainer,
  Container,
  LinksContainer,
  MenuContainer,
  SocialContainer,
} from './BurgerMenu.styled';
import Social from './Social/Social';
import Contacts from 'components/Footer/Contacts/Contacts';

const BurgerMenu = () => {
  return (
    <div>
      {mobilePoint && (
        <Container>
          <LinksContainer>
            <HeaderLinks />
            <LanguageSwitcher />
            <BurgerIcon id="close" />
          </LinksContainer>
          <MenuContainer>
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
            <HeaderLinks />
            <LanguageSwitcher />
            <BurgerIcon id="close" />
          </LinksContainer>
          <MenuContainer>
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

export default BurgerMenu;
