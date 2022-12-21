import styled from "@emotion/styled";
import { desktop, mobile, tablet } from "utils/breakpoints";
import { catalogBgColor, mainFontWeight, mainTextColor, secondFont } from "utils/variables";

export const Section = styled.section`
background-color: ${catalogBgColor};
  padding-top: 31px;
  padding-bottom: 31px;
  @media screen and (min-width: ${tablet}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media screen and (min-width: ${desktop}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

export const Container = styled.div`
max-width: ${mobile};
 padding: 0 15px;
 margin: 0;
 margin-left: auto;
 margin-right: auto;
 @media screen and (min-width:${tablet}){
    max-width: ${tablet};
 };
 @media screen and (min-width:${desktop}){
    max-width: ${desktop};
 };`

export const Title = styled.h2`
font-family: ${secondFont};
  font-size: 28px;
  font-weight: ${mainFontWeight};
  line-height: 1;
  text-align: center;
  color:${mainTextColor};

  margin-bottom: 30px;
  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
    margin-bottom: 40px;
  };`
