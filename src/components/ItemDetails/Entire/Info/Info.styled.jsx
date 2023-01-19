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

export const InfoContainer = styled.div``;

export const TitleContainer = styled.div`
  border-bottom: 2px solid ${mainTextColor};
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
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 40px;
  }
`;

export const BtnContainer = styled.div``;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  @media screen and (min-width: ${tablet}) {
    :not(:last-child) {
      border-bottom: 2px solid ${mainTextColor};
      margin-bottom: 25px;
      padding-bottom: 10px;
    }
  }
`;

export const Link = styled(NavLink)`
  background-color: ${btnBgColor};
  color: ${mainTextColor};
  box-shadow: inset 4px 4px 4px rgba(246, 247, 241, 0.3),
    inset -6px -6px 3px rgba(240, 182, 156, 0.6);
  border-radius: 35px 5px;
  text-decoration: none;
  font-family:${secondFont};
  font-weight:${mainFontWeight};
  transition: background-color 250ms ${cubicBezier}, box-shadow 250ms ${cubicBezier};

  :hover, :focus{
    background-color:${hoverBtnColor};
    box-shadow: inset 4px 4px 4px rgba(246, 247, 241, 0.3), inset -6px -6px 3px rgba(240, 182, 156, 0.5);
  }

  @media screen and (min-width: ${tablet}) {
    padding: 12px 40px;
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: 0.03em;
    text-transform: capitalize;
  }
`;

export const Text = styled.p`
font-family:${mainFont};
font-weight:${mainFontWeight}
text-align:center;
color:${secondTextColor};
margin:0;
padding:0;

@media screen and (min-width:${tablet}){
font-size: 22px;
line-height: 1.14;
letter-spacing: 0.04em;
}
`;

export const ListText = styled.p`
  font-family: ${mainFont};
  color: ${mainTextColor};
  font-weight: ${mainFontWeight};
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${tablet}) {
    font-size: 22px;
    line-height: 1.14;
    letter-spacing: 0.04em;
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
  color: ${mainTextColor};

  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: 0.03em;
  }
  @media screen and (max-width: 1279px) {
    text-transform: capitalize;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 78px;
    line-height: 1.28;
  }
`;
