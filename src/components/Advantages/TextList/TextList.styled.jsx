import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { mainFont, mainFontWeight, mainTextColor, secondFont } from "utils/variables";

export const Svg = styled.svg`
 margin-bottom: 10px;`

export const Container = styled.div``

export const Title = styled.h2`
font-size: 28px;
  line-height: 1;
  color:${mainTextColor};
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    text-align: center;
  };
  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
  };
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 40px;
  };`

export const List = styled.ul`
list-style:none;
padding:0;`

export const Item = styled.li`
:not(:last-child) {
    margin-bottom: 10px;
  };
  @media screen and (min-width: ${tablet}) {
    :not(:last-child) {
      margin-bottom: 25px;
    };
  };
`

export const Text = styled.p`
 line-height: 1.11;
 font-family:${mainFont};
 font-weight:${mainFontWeight};
 color:${mainTextColor};
  @media screen and (min-width: ${tablet}) {
    font-size: 22px;
    line-height: 1.14;
  };
`
