import styled from "@emotion/styled";
import { tablet } from "utils/breakpoints";
import { btnBgColor, cubicBezier, hoverIconColor } from "utils/variables";

export const Container = styled.div``

export const List = styled.ul`display: flex;
align-items: center;
padding:0;
margin:0;
list-style:none;`

export const Item = styled.li`
:not(:last-child){
        margin-right: 34px;
    }
    @media screen and (min-width:${tablet}){
        :not(:last-child){
            margin-right: 40px;
        }
    }`

export const Link = styled.a``

export const Svg = styled.svg`
height:34px;
width:34px;
 fill: ${btnBgColor};
        transition: fill 250ms ${cubicBezier};
    
        :hover,
        :focus {
            fill: ${hoverIconColor};
        }`