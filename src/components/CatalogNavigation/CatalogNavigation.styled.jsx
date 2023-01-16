import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { desktop } from "utils/breakpoints";
import { mainFont, mainFontWeight } from "utils/variables";

export const Container = styled.div``

export const List = styled.ul`
list-style:none;
margin:0;
padding:0;
display:flex;
align-items:center;
justify-content: center;
`

export const Item = styled.li`
@media screen and (min-width:${desktop}){
    :not(:last-child){
        margin-right:72px;
    }
}`

export const Link = styled(NavLink)`
text-decoration:none;
color:#377384;
font-family: ${mainFont};
font-weight: ${mainFontWeight};
letter-spacing: 0.04em;
@media screen and (min-width:${desktop}){
    font-size: 22px;
line-height: 1.14;
}
`