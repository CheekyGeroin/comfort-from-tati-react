import styled from "@emotion/styled";
import { desktop, mobile, tablet } from "utils/breakpoints";

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
  `
export const NavContainer = styled.div`
display:flex;
margin: 20px 0;
align-items: center;
@media screen and (min-width:${tablet}){
    margin-top:40px;
    margin-bottom:50px;
    align-items:baseline;
}
@media screen and (min-width:${desktop}){
    margin-top:71px;
    margin-bottom:40px;
    justify-content:center;
}
`