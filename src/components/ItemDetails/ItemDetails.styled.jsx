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
    display: flex;
 }
 @media screen and (min-width:${desktop}){
    max-width: ${desktop};
 }
  `

export const EntireContainer = styled.div`
margin-bottom:30px;
@media screen and (min-width: ${tablet}){
margin-bottom:50px;
}
@media screen and (min-width:${desktop}){
    display:flex;
    align-items:center;
    margin-bottom:79px;
}`

export const OtherContainer = styled.div``




