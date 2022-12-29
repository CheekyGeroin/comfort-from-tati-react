import styled from "@emotion/styled";
import { desktop } from "utils/breakpoints";
import { footerAccentFontWeight, secondTextColor } from "utils/variables";

export const Container = styled.div`
@media screen and (max-width:1279px){
        display: none;
    }
    @media screen and (min-width:${desktop}){
        margin-right: 26px;
    }
`

export const List = styled.ul`
list-style:none;
padding:0;
margin:0;`

export const Item = styled.li`
:not(:last-child){
        margin-bottom: 12px;
    }`

export const Link = styled.a`
color: ${secondTextColor};
    font-weight: ${footerAccentFontWeight};
    text-decoration: underline;
    font-size: 22px;
    line-height: 1.36;
`
