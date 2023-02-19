import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { footerAccentFontWeight, secondTextColor } from "utils/variables";

export const Container = styled.div`
@media screen and (max-width:1279px){
        display: none;
    }
@media screen and (min-width:$desktop){
    margin-right: 26px;
}`

export const Title = styled.h2`
padding:0;
margin:0;
 margin-bottom: 12px;
 `

export const InnerLink = styled.a`
 color: ${secondTextColor};
    text-decoration: underline;
    font-weight: ${footerAccentFontWeight};
    font-size: 22px;
    line-height: 1.36;
`

export const Link = styled(NavLink)`
 color: ${secondTextColor};
    font-size: 22px;
    line-height: 1.14;
    text-decoration:none;`

export const List = styled.ul`
list-style:none;
padding:0;
margin:0;`

export const Item = styled.li`
:not(:last-child){
        margin-bottom: 12px;
    }
`

