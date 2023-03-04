import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { footerAccentFontWeight, mainFont, mainTextColor } from "utils/variables";

export const CounterContainer = styled.div`
max-width:34px;
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
font-size: 6px;
line-height:1.14;
letter-spacing:0.04em;
font-variant:small-caps;
color:${mainTextColor};

@media screen and (min-width:${tablet}){
    font-size:14px;
}

@media screen and (min-width:${desktop}){
    font-size:22px;
}`

export const Value = styled.p`
font-size:${mainFont};
font-weight:${footerAccentFontWeight};
font-size: 6px;
line-height:1.14;
letter-spacing:0.04em;
font-variant:small-caps;
color:${mainTextColor};

@media screen and (min-width:${tablet}){
    font-size:14px;
}

@media screen and (min-width:${desktop}){
    font-size:22px;
}`