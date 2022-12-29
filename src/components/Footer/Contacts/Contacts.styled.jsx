import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { btnBgColor, cubicBezier, footerAccentFontWeight, hoverIconColor, mainFontWeight, secondTextColor } from "utils/variables";

export const Container = styled.div`
margin-right:26px;
@media screen and (max-width:767px){
        display: none;
    }`

export const Title = styled.h2`
padding:0;
margin:0;
 text-decoration: underline;
    color: ${secondTextColor};
    font-weight: ${mainFontWeight};
    font-size: 18px;
    line-height: 1.67;
    
    margin-bottom: 30px;
    @media screen and (min-width:${desktop}){
        font-weight: ${footerAccentFontWeight};
            font-size: 22px;
            line-height: 1.36;
            margin-bottom: 25px;
    }`

export const List = styled.ul`
list-style:none;
padding:0;
margin:0;`

export const Item = styled.li`
display: flex;
    align-items: center;
    :not(:last-child){
        margin-bottom: 12px;
    }
    @media screen and (min-width:${tablet}){
        :not(:last-child){
            margin-bottom: 17px;
        }
    }
    @media screen and (min-width:${desktop}){
        :not(:last-child){
            margin-bottom: 12px;
        }
    }`

export const Text = styled.p`
padding:0;
margin:0;
font-size: 18px;
    line-height: 1.11;
    color: #fff;
    text-transform: uppercase;
    @media screen and (min-width:${tablet}){
        font-size: 22px;
            line-height: 1.14;
    }
`

export const Svg = styled.svg`
width:34px;
height:36px;
margin-right: 6px;
fill: ${btnBgColor};
    transition: fill 250ms ${cubicBezier};

    :hover,
    :focus {
        fill: ${hoverIconColor};
    }
`
