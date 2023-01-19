import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, tablet } from 'utils/breakpoints';

export const Svg = styled.svg`
  @media screen and (min-width: ${tablet}) {
    width: 60px;
    height: 20px;
  }
  @media screen and (min-width: ${desktop}) {
    width: 80px;
    height: 24px;
  }
`;

export const Link = styled(NavLink)`
@media screen and (min-width:${tablet}){
  margin-right:40px;
} 
  @media screen and (min-width: ${desktop}) {
    margin-right: 72px;
  }
`;
