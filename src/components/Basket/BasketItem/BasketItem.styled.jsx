import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { footerAccentFontWeight, mainFont, mainFontWeight, mainTextColor } from "utils/variables";


export const ImgContainer = styled.div`
margin-right:4px;
@media screen and (min-width:${tablet}){
    margin-right:9px;
}
@media screen and (min-width:${desktop}){
    margin-right:14px;
}
`

export const Img = styled.img``

export const TitleContainer = styled.div`
margin-bottom:5px;
@media screen and (min-width:${tablet}){
margin-bottom:11px;
}
@media screen and (min-width:${desktop}){
margin-bottom:12px;
}`

export const Title = styled.h2`
font-family:${mainFont};
font-weight:${footerAccentFontWeight};
font-size:11px;
line-height:1.07;
letter-spacing: 0.04em;
font-variant: small-caps;
color:${mainTextColor};
@media screen and (min-width:${tablet}){
font-size:22px;
line-height:1.14;
}
`

export const Form = styled.form`
display:flex;
align-items:center;`

export const FormList = styled.ul`
list-style:none;
margin:0;
padding:0;`

export const FormItem = styled.li`
:not(:last-child){
    margin-bottom:5px;
}
@media screen and (min-width:${tablet}){
    :not(:last-child){
    margin-bottom:11px;
}
}
@media screen and (min-width:${desktop}){
    :not(:last-child){
    margin-bottom:27px;
}
}
`

export const Label = styled.label`
display:flex;
flex-direction:column;
font-family:${mainFont};
font-weight:${mainFontWeight};
font-size:11px;
line-height:0.86;
letter-spacing: 0.04em;
font-variant: small-caps;
color:${mainTextColor};
@media screen and (min-width:${tablet}){
    font-size:18px;
    line-height:1.11;
}
@media screen and (min-width:${desktop}){
    font-size:22px;
    line-height:1.14;
}
`

export const Select = styled.select`
margin-top:2px;
@media screen and (min-width:${tablet}){
    margin-top:3px;
}
@media screen and (min-width:${desktop}){
    margin-top:5px;
}`

export const Option = styled.option``

export const CounterContainer = styled.div`
margin-left:auto;
margin-right:auto;`


export const PriceContainer = styled.div`

`

export const Price = styled.p`
font-family:${mainFont};
font-weight:${footerAccentFontWeight};
font-size:11px;
line-height:1.07;
letter-spacing:0.04em;
font-variant:small-caps;
color:${mainTextColor};
margin:0;
padding:0;


@media screen and (min-width:${tablet}){
font-size: 22px;
line-height:1.14;
}

@media screen and (min-width:${desktop}){
    font-size:40px;
    line-height:0.62;
}
`


