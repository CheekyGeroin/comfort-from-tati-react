import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, tablet } from 'utils/breakpoints';
import { btnBgColor, cubicBezier, secondFont, secondTextColor } from 'utils/variables';

export const Container = styled.nav`
  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${tablet}) and (max-width: 1279px) {
    margin-bottom: 70px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-right: 51px;
  } ;
`;

export const List = styled.ul`
  list-style: none;
  padding:0;
  @media screen and (min-width: ${desktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
  } ;
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    :nth-of-type(3) {
      display: none;
    }
  }
  @media screen and (max-width: 1279px) {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    :not(:last-child) {
      margin-right: 80px;
    }
  } ;
`;

export const Link = styled(NavLink)`
  color: ${secondTextColor};
  font-size: 40px;
  line-height: 1.25;
  text-decoration: none;

  @media screen and (max-width: 1279px) {
    font-family: ${secondFont};
    font-weight: 300;
  }
  @media screen and (min-width: ${tablet}) {
    transition: background-color 250ms ${cubicBezier},
      border-radius 250ms ${cubicBezier},
      padding 250ms ${cubicBezier};

    :hover,
    :focus {
      padding: 0 12px;
      background-color: ${btnBgColor};
      border-radius: 5px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 22px;
    line-height: 1.14;
    :hover,
    :focus {
      padding: 7px 21px;
    }
  } ;
`;

export const InnerLink = styled.a`
  color: ${secondTextColor};
  font-size: 40px;
  line-height: 1.25;
  text-decoration: none;

  @media screen and (max-width: 1279px) {
    font-family: ${secondFont};
    font-weight: 300;
  }
  @media screen and (min-width: ${tablet}) {
    transition: background-color 250ms ${cubicBezier},
      border-radius 250ms ${cubicBezier},
      padding 250ms ${cubicBezier};

    :hover,
    :focus {
      padding: 0 12px;
      background-color: ${btnBgColor};
      border-radius: 5px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 22px;
    line-height: 1.14;
    :hover,
    :focus {
      padding: 7px 21px;
    }
  } ;
`;
