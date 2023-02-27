import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, mobile, tablet } from 'utils/breakpoints';
import {
  btnBgColor,
  cubicBezier,
  hoverBtnColor,
  mainFontWeight,
  mainTextColor,
  secondFont,
} from 'utils/variables';

export const Container = styled.div`
  max-width: ${mobile};
  padding: 0 15px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${tablet}) {
    max-width: ${tablet};
  }
  @media screen and (min-width: ${desktop}) {
    max-width: ${desktop};
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 2px solid ${mainTextColor};
  margin-bottom: 20px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 27px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h1`
  color: ${mainTextColor};
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.03em;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 78px;
    line-height: 1.28;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 80px;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

export const Item = styled.li`
  margin: 0;
  :not(:last-child) {
    margin-right: 20px;
  }
  @media screen and (max-width: 767px) {
    :last-child {
      margin-top: 10px;
    }
  }
  @media screen and (min-width: ${tablet}) {
    :not(:last-child) {
      margin-right: 31px;
    }
  }
  @media screen and (min-width: ${tablet}) and (max-width: 1279px) {
    :last-child {
      margin-top: 25px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    :not(:last-child) {
      margin-right: 74px;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  margin: 0;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 13px 7px 13px;
  border: none;
  border-radius: 0 0 20px 20px;
  background-color: ${btnBgColor};
  transition: background-color 250ms ${cubicBezier};
  :hover,
  :focus {
    background-color: ${hoverBtnColor};
  }
  @media screen and (min-width: ${tablet}) {
    padding: 13px 24px 17px 16px;
  }
  @media screen and (min-width: ${desktop}) {
    padding: 15px 45px 18px 50px;
  }
`;

export const Text = styled.p`
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: ${mainTextColor};
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
  }
`;

export const Img = styled.img`
  border: none;
  border-radius: 20px 20px 0 0;
`;
