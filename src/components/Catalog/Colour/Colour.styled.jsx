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
export const Svg = styled.svg`
width:22px;
height:13px;
@media screen and (min-width:${tablet}){
   width:38px;
   height:19px;
}
@media screen and (min-width:${desktop}){
   width:47px;
   height:28px;
}`