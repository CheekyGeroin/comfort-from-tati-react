import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { desktop, tablet } from "utils/breakpoints";
import { mainFont, mainFontWeight } from "utils/variables";

export const Container = styled.div`
@media screen and (min-width:${tablet}){
    margin-top:40px;
    margin-bottom:50px;
}
@media screen and (min-width:${desktop}){
    margin-top:71px;
    margin-bottom:40px;
}
`

export const List = styled.ul`
list-style:none;
margin:0;
padding:0;
display:flex;
align-items:center;
justify-content: flex-start;
@media screen and (min-width:${tablet}) and (max-width:1279px){
    flex-wrap:wrap;
}
@media screen and (min-width:${desktop}){
    justify-content: center;
}
`

export const Item = styled.li`

@media screen and (min-width:${tablet}){
    :not(:last-child){
        margin-right:40px;
    }
}
@media screen and (min-width:${tablet}) and (max-width:1279px){
    :last-child{
        margin-top:10px;
    }
}
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
@media screen and (min-width:${tablet}){
    font-size: 22px;
line-height: 1.14;
&.active{
    text-decoration:underline;
}
}
`