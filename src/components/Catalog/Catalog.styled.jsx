import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";

export const NavContainer = styled.div`
display:flex;
    @media screen and (min-width:${tablet}){
        align-items:baseline;
    }
@media screen and (min-width:${desktop}){
    
justify-content:center;
}
`