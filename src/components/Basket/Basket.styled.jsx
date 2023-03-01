import styled from "@emotion/styled";
import { desktop, mobile, tablet } from "utils/breakpoints";
import { mainFontWeight, mainTextColor, secondFont } from "utils/variables";
export const Container = styled.div`
max-width: ${mobile};
 padding: 0 15px;
 margin: 0;
 margin-left: auto;
 margin-right: auto;
 @media screen and (min-width:${tablet}){
    max-width: ${tablet};
 }
 @media screen and (min-width:${desktop}){
    max-width: ${desktop};
 }
  `

export const TitleContainer = styled.div`
margin-top:20px;
margin-bottom:10px;
@media screen and (min-width:${tablet}){
    margin-top:40px;
    margin-bottom:30px;
}
@media screen and (min-width:${desktop}){
    margin-top:140px;
    margin-bottom:40px;
}`

export const BasketTitle = styled.h1`
font-family:${secondFont};
font-weight:${mainFontWeight};
font-size:28px;
line-height:1;
letter-spacing:0.03em;
color:${mainTextColor};
@media screen and (max-width:1279px){
    text-transform:capitalize;
}
@media screen and (min-width:${tablet}){
font-size:40px;
line-height:1.25;
}
@media screen and (min-width:${desktop}){
    font-size:55px;
    line-height:1.30;
}
`

export const ListContainer = styled.div`
margin-bottom:20px;
@media screen and (min-width:${tablet}){
    margin-bottom:30px;
}
@media screen and (min-width:${desktop}){
    margin-bottom: 40px;
}`

export const BasketList = styled.ul`
list-style:none;
margin:0;
padding:0;
`

export const BasketListItem = styled.li`
padding:5px 0;
border-top:2px solid ${mainTextColor};
border-bottom: 2px solid ${mainTextColor};
@media screen and (min-width:${tablet}){
padding:10px 0;
}
@media screen and (min-width:${desktop}){
padding:40px 0;
}
`
