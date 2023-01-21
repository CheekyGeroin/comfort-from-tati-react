import styled from "@emotion/styled";
import { desktop } from "utils/breakpoints";
import { mainFontWeight, mainTextColor, secondFont } from "utils/variables";

export const Container = styled.div`
border-bottom: 2px solid ${mainTextColor};
margin-bottom:40px;`

export const Subtitle = styled.h2`
font-family:${secondFont};
font-weight:${mainFontWeight};
margin:0;
padding:0;
color:${mainTextColor};

@media screen and (min-width:${desktop}){
    font-size:70px;
    line-height:1.28;
    letter-spacing: 0.03em;
}
`