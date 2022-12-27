import styled from "@emotion/styled";
import { desktop, mobile, tablet } from "utils/breakpoints";
import { catalogBgColor } from "utils/variables";

export const Section = styled.section`
background-color: ${catalogBgColor};
  @media screen and (min-width:$tablet){
    padding-top: 6px;
  }`

export const Container = styled.div`
max-width: ${mobile};
 padding: 0 15px;
 margin: 0;
 margin-left: auto;
 margin-right: auto;
 @media screen and (min-width:${tablet}){
    max-width: ${tablet};
 }
 @media screen and (min-width:${desktop}){
    max-width: ${desktop};
 }
 @media screen and (min-width:1600px){
      max-width: 1600px;
  }
 `
