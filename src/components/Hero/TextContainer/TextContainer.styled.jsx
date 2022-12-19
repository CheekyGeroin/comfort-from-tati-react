import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { btnBgColor, cubicBezier, hoverBtnColor, mainFontWeight, mainTextColor, secondFont, secondTextColor } from "utils/variables";

export const Container = styled.div`
 position: relative;
  z-index: 2;
  align-items: center;`

export const TitleContainer = styled.div`
margin-bottom: 30px;
  @media screen and (min-width:${tablet}) and (max-width:1279px){
    max-width: 617px;
    margin-left: auto;
    margin-right: auto;
  };
  @media screen and (min-width:${desktop}){
    margin-bottom: 50px;
  };`

export const Title = styled.h1`
color: ${secondTextColor};
  font-family: ${secondFont};
  font-size: 40px;
  font-weight: ${mainFontWeight};
  line-height: 1;
  text-align: center;
  position: relative;`

export const BtnContainer = styled.div`
display: flex;
  justify-content: center;`

export const Link = styled.a`
font-size: 28px;
  line-height: 1;
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  color: ${mainTextColor};
  text-decoration: none;

  margin-right: auto;
  margin-left: auto;
  padding: 10px 26px;

  background-color: ${btnBgColor};
  border: none;
  border-radius: 24px 4px 24px 4px;
  box-shadow: inset 4px 4px 4px rgba(246, 247, 241, 0.3), inset -6px -6px 3px rgba(240, 182, 156, 0.6);
  transition: background-color 250ms ${cubicBezier};
  &:hover,
  &:focus {
    background-color: ${hoverBtnColor};
  };
  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;

    padding: 12px 37px;
    border-radius: 35px 5px 35px 5px;
  };
`
