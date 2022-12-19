import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, tablet } from 'utils/breakpoints';
import { logoFontWeight, secondFont } from 'utils/variables';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    margin-right: auto;
  }
  @media screen and (min-width: ${tablet}) {
    margin-right: auto;
  }
  @media screen and (min-width: ${desktop}) {
    margin-right: 51px;
  } ;
`;
export const Link = styled(NavLink)`
  font-size: 18px;
  line-height: 1;
  font-family: ${secondFont};
  font-weight: ${logoFontWeight};
  background: linear-gradient(90.33deg, #f3d0b7 -1.9%, #b3d1d9 104.41%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1;
  @media screen and (min-width: ${tablet}) {
    font-size: 23px;
    line-height: 1.31;
  };
`;
