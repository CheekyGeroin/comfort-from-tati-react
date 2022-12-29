import styled from "@emotion/styled";
import { desktop, mobile, tablet } from "utils/breakpoints";
import { mainTextColor } from "utils/variables";

export const Section = styled.section`
 background-color: ${mainTextColor};
  padding-top: 25px;
  padding-bottom: 32px;
  @media screen and (min-width: ${tablet}) {
    padding-top: 38px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: ${desktop}) {
    padding-bottom: 60px;
  }`

export const Container = styled.div`
max-width: ${mobile};
 padding: 0 15px;
 margin: 0;
 margin-left: auto;
 margin-right: auto;
 @media screen and (min-width:${tablet}){
    max-width: ${tablet};
    display: flex;
    align-items: baseline;
    justify-content:space-between;
 }
 @media screen and (min-width:${desktop}){
    max-width: ${desktop};
 }

`
