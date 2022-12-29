import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { btnBgColor, catalogBgColor, cubicBezier, hoverIconColor, logoFontWeight, secondFont, secondTextColor } from "utils/variables";

export const Container = styled.div`
 @media screen and (min-width:${tablet}){
        margin-right: 87px;
    }
    @media screen and (min-width:${desktop}){
        margin-right: 26px;
    }`

export const Logo = styled.p`
padding:0;
margin:0;
    font-size: 18px;
  line-height: 2.15;
  font-weight: ${logoFontWeight};
  font-family: ${secondFont};
  margin-bottom: 6px;
  background: linear-gradient(90.33deg, ${btnBgColor} -1.9%, ${catalogBgColor} 104.41%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media screen and (min-width:${tablet}){
    font-size: 30px;
    line-height: 1.31;
    margin-bottom: 10px;
  }`

export const Text = styled.p`
padding:0;
margin:0;
font-size: 18px;
    line-height: 1.11;
    color: ${secondTextColor};
    margin-bottom: 30px;
    @media screen and (max-width:767px){
        max-width: 168px;
    }
    @media screen and (min-width:${tablet}){
        font-size: 22px;
        line-height: 1.14;
        margin-bottom: 40px;
    }`

export const List = styled.ul`
display: flex;
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

export const Link = styled.a`
fill: ${btnBgColor};
        transition: fill 250ms ${cubicBezier};
    
        :hover,
        :focus {
            fill: ${hoverIconColor};
        }`

export const Svg = styled.svg`
height:34px;
width:34px;
 fill: ${btnBgColor};
        transition: fill 250ms ${cubicBezier};
    
        :hover,
        :focus {
            fill: ${hoverIconColor};
        }
 
`