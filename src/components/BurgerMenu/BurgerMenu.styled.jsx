import styled from "@emotion/styled";
import { tablet } from "utils/breakpoints";
import { burgerBgColor } from "utils/variables";

export const Container = styled.div`
position:absolute;
top:0;
right:0;
width:320px;
z-index:2;
max-height:691px;
background-color:${burgerBgColor};
padding:105px 0 105px 30px;
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
top:20px;
right:30px;

@media screen and (min-width:${tablet}){
    top:35px;
    right:50px;
}
`

export const MenuContainer = styled.div``

export const SocialContainer = styled.div``

export const ContactsContainer = styled.div``