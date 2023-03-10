import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { desktop, tablet } from "utils/breakpoints";
import { btnBgColor, cubicBezier, hoverIconColor } from "utils/variables";


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
padding:0;
margin:0;
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

export const Link = styled(NavLink)`
`

export const Svg = styled.svg`
fill: ${btnBgColor};
transition: fill 250ms ${cubicBezier};
:hover, :focus{
  fill: ${hoverIconColor};
}

@media screen and (max-width:1279px){
  width:19px;
  height:19px;
}
@media screen and (min-width:${desktop}){
  width:32px;
  height:32px;
}
`