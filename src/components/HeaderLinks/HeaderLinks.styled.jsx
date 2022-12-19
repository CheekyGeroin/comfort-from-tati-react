import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { tablet } from "utils/breakpoints";


export const Container = styled.div`
display: flex;
  top: 25px;
  right: 179px;
  @media screen and (max-width:1279px){
    position: absolute;
  };
  @media screen and (min-width:${tablet}){
    top: 43px;
    right: 199px;
  };`

export const List = styled.ul`
list-style:none;
display:flex;
align-items:center;
`

export const Item = styled.li`
:not(:last-child){
    margin-right:12px;
 };
@media screen and (min-width: ${tablet}){
 :not(:last-child){
    margin-right:20px;
 };
};
`

export const CallLink = styled.a`

`

export const Link = styled(NavLink)``

export const Svg = styled.svg``