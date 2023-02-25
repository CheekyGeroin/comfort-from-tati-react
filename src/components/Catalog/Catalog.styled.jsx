import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";

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