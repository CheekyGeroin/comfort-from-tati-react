import styled from "@emotion/styled";
import { desktop, mobile, tablet } from 'utils/breakpoints';
import { secondTextColor } from "utils/variables";

export const Header = styled.header`
position: absolute;
  width: 100%;
  z-index: 999;
padding-top: 34px;
padding-bottom: 17px;
  border-bottom: 2px solid ${secondTextColor};
  @media screen and (min-width: ${tablet}) {
    padding-top: 52px;
    padding-bottom: 32px;
  };
  @media screen and (min-width: ${desktop}) {
    padding-top: 53px;
    padding-bottom: 35px;
  };
`

export const Container = styled.div`
max-width: ${mobile};
 padding: 0 15px;
 margin: 0;
 margin-left: auto;
 margin-right: auto;
 @media screen and (min-width:${tablet}){
  justify-content: center;
    max-width: ${tablet};
 }
 @media screen and (min-width:${desktop}){
    max-width: ${desktop};
 }
display: flex;
  align-items: center;
  position: relative;
  
`