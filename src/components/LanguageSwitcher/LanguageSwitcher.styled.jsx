import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {  tablet } from 'utils/breakpoints';
import { btnBgColor } from 'utils/variables';

export const Container = styled.div`
display: flex;
  align-items: center;
  top: 20px;
  right: 85px;
  margin-right:20px;

  @media screen and (min-width:${tablet}){
    top: 39px;
    right: 105px;
    
  };
  `;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin:0;
  
`;

export const Item = styled.li`
:not(:last-child){
  margin-right:12px;
}
  @media screen and (min-width:${tablet}){
    :not(:last-child) {
    margin-right: 6px;
  }
  }
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  line-height: 1.67;
  color: #afafaf;
  cursor: pointer;
  ${props => {
    if (props.active === 'ua') {
      return ` text-decoration: underline;
    color: ${btnBgColor};`;
    }
    if (props.active === 'en') {
      return ` text-decoration: underline;
    color: ${btnBgColor};`;
    }
  }}

  @media screen and (min-width: ${tablet}) {
    font-size: 22px;
    line-height: 1.36;
  }
`;
