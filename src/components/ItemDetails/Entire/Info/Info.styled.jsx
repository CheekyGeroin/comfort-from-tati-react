import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, tablet } from 'utils/breakpoints';
import {
  btnBgColor,
  cubicBezier,
  footerAccentFontWeight,
  hoverBtnColor,
  hoverIconColor,
  mainFont,
  mainFontWeight,
  mainTextColor,
  secondFont,
  secondTextColor,
} from 'utils/variables';

export const InfoContainer = styled.div`
@media screen and (min-width:${desktop}){
  margin-left:25px;
}`;

export const TitleContainer = styled.div`
  border-bottom: 2px solid ${mainTextColor};
  margin-bottom: 20px;
  padding-bottom: 10px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 40px;
  }
`;

export const AccentContainer = styled.div`
  background-color: ${hoverIconColor};
  display: inline-block;
  padding: 20px 12px;
  margin-bottom: 20px;
  @media screen and (min-width: ${tablet}) {
    padding: 31px 113px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${desktop}) {
    padding: 31px 75px;
    margin-bottom: 40px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 40px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  :not(:last-child) {
    border-bottom: 2px solid ${mainTextColor};
    padding-bottom: 10px;
    margin-bottom: 25px;
  }
`;

export const Link = styled(NavLink)`
  background-color: ${btnBgColor};
  color: ${mainTextColor};
  box-shadow: inset 4px 4px 4px rgba(246, 247, 241, 0.3),
    inset -6px -6px 3px rgba(240, 182, 156, 0.6);
  border-radius: 35px 5px;
  text-decoration: none;
  text-align:center;
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  padding: 10px 14px;
  transition: background-color 250ms ${cubicBezier},
    box-shadow 250ms ${cubicBezier};

  :hover,
  :focus {
    background-color: ${hoverBtnColor};
    box-shadow: inset 4px 4px 4px rgba(246, 247, 241, 0.3),
      inset -6px -6px 3px rgba(240, 182, 156, 0.5);
  }

  @media screen and (min-width: ${tablet}) {
    padding: 12px 40px;
    font-size: 40px;
    line-height: 1.25;
  }
`;

export const Text = styled.p`
  font-family: ${mainFont};
  font-weight: ${mainFontWeight};
  line-height: 1.11
  letter-spacing: 0.04em;
  text-align: center;
  color: ${secondTextColor};
  margin: 0;
  padding: 0;
  font-size: 18px;

  @media screen and (min-width: ${tablet}) {
    font-size: 22px;
    line-height: 1.14;
  }
`;

export const ListText = styled.p`
  font-family: ${mainFont};
  color: ${mainTextColor};
  font-weight: ${mainFontWeight};
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.04em;
  font-variant: small-caps;
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${tablet}) {
    font-size: 22px;
    line-height: 1.14;
  }
`;

export const Span = styled.span`
  font-weight: ${footerAccentFontWeight};
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;

  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.03em;
  color: ${mainTextColor};

  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
  }
  @media screen and (max-width: 1279px) {
    text-transform: capitalize;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 78px;
    line-height: 1.28;
  }
`;
