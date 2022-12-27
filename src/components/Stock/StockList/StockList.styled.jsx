import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { btnBgColor, cubicBezier, hoverBtnColor, mainFontWeight, mainTextColor, secondFont } from "utils/variables";

export const List = styled.ul`
padding: 0;
margin:0;

list-style:none;

@media screen and (min-width: ${tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 451px;
  }
  @media screen and (min-width:1600px){
    max-height: 454px;
  }
`

export const Item = styled.li`
margin: 0;
  :nth-of-type(2) {
    background-color: #b3d1d9;
    padding: 42px 75px 43px 30px;
    @media screen and (min-width:${tablet}){
      padding: 68px 26px 108px 15px;
    }
    @media screen and (min-width:${desktop}){
      padding: 84px 38px 112px 29px;
    }
    @media screen and (min-width:1600px){
      padding: 68px 175px 112px 58px;
    }
  }
  :nth-of-type(3){
    @media screen and (min-width:${tablet}) and (max-width:1279px){
      display: none;
    }
  }
`

export const Container = styled.div`
position: relative;
  ::before{
    content: "";
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    max-height: 450px;
    
    background: linear-gradient(0deg,
          rgba(3, 31, 38, 0.3),
          rgba(3, 31, 38, 0.3));
  }
`

export const Img = styled.img`
 display: inline-block;
  margin: 0;
  padding: 0;`

export const Text = styled.p`
font-size: 28px;
  line-height: 1;
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  text-transform: capitalize;
  margin-bottom: 20px;
  @media screen and (min-width:${tablet}){
    font-size: 40px;
    line-height: 1.25;
    margin-bottom: 37px;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 37px;
  }
  @media screen and (min-width:1600px){
    font-size: 40px;
    max-width: 225px;
  }
`

export const Link = styled.a`
font-size: 28px;
    line-height: 1;
    padding: 10px 26px;
    background-color: ${btnBgColor};
    border-radius: 24px 4px 24px 4px;
    border: none;
    color: ${mainTextColor};
    font-family: ${secondFont};
    font-weight: ${mainFontWeight};
    box-shadow: inset 4px 4px 4px rgba(246, 247, 241, 0.3), inset -6px -6px 3px rgba(240, 182, 156, 0.6);
    transition: background-color 250ms ${cubicBezier};
    &:hover, &:focus{
        background-color: ${hoverBtnColor};
    }
    @media screen and (min-width:${tablet}){
        padding: 12px 34px;
        border-radius: 32px 4px 32px 4px;
        font-size: 40px;
        line-height: 1.25;
    }
    @media screen and (min-width:${desktop}){
        font-size: 37px;
    }
`

