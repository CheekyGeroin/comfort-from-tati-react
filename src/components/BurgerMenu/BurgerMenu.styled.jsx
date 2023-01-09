import styled from "@emotion/styled";
import { tablet } from "utils/breakpoints";
import { burgerBgColor } from "utils/variables";

export const Container = styled.div`
// position:relative;
width:375px;
max-height:691px;
background-color:${burgerBgColor};
@media screen and (min-width:${tablet}){
    padding:150px 0 206px 50px;
    width:${tablet};
    max-height:752px;
}
`

export const LinksContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;

@media screen and (min-width:${tablet}){
    top:35px;
    right:50px;
}
`

export const MenuContainer = styled.div``

export const SocialContainer = styled.div``

export const ContactsContainer = styled.div``