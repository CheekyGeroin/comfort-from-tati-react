import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";

export const Container = styled.div`

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





