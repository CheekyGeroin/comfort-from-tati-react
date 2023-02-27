import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { desktop, tablet } from "utils/breakpoints";
import { mainFont, mainFontWeight } from "utils/variables";

export const Container = styled.div`

`

export const List = styled.ul`
list-style:none;
margin:0;
padding:0;
display:flex;
align-items:center;
justify-content: flex-start;
@media screen and (max-width:1279px){
    flex-wrap:wrap;
}
@media screen and (min-width:${desktop}){
    justify-content: center;
}
`

export const Item = styled.li`

:not(:last-child){
    margin-right:10px;
}
@media screen and (max-width: 767px){
    :nth-of-type(3){
        margin-top:6px;
        margin-bottom:6px;
    }
}

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
font-size:18px;
line-height:1.67;
letter-spacing: 0.04em;
&.active{
    text-decoration:underline;
}
@media screen and (min-width:${tablet}){
    font-size: 22px;
line-height: 1.14;

}
`