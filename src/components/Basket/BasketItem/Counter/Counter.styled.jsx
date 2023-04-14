import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { footerAccentFontWeight, mainFont, mainTextColor } from "utils/variables";

export const CounterContainer = styled.div`
max-width:34px;
display:flex;
align-items:center; 
border: 2px solid ${mainTextColor};
border-radius: 11px;
box-shadow: inset 0px 4.66514px 4.66514px rgba(0, 0, 0, 0.25);

@media screen and (min-width:${tablet}){
    max-width:73px;
}
@media screen and (min-width:${desktop}){
    max-width:116px;
}
`

export const Btn = styled.button`
font-size:${mainFont};
font-weight:${footerAccentFontWeight};
font-size: 10px;
line-height:1.14;
letter-spacing:0.04em;
font-variant:small-caps;
color:${mainTextColor};
border:none;
background-color:transparent;

@media screen and (min-width:${tablet}){
    font-size:18px;
}

@media screen and (min-width:${desktop}){
    font-size:26px;
}`

export const Value = styled.p`
font-size:${mainFont};
font-weight:${footerAccentFontWeight};
font-size: 10px;
line-height:1.14;
letter-spacing:0.04em;
font-variant:small-caps;
color:${mainTextColor};
margin:0;
padding:0;

@media screen and (min-width:${tablet}){
    font-size:18px;
}

@media screen and (min-width:${desktop}){
    font-size:26px;
    margin-left:6px;
    margin-right:6px;
}`