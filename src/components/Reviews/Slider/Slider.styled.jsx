import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { btnBgColor, footerAccentFontWeight, mainFont, mainFontWeight, mainTextColor } from "utils/variables";

export const Wrapper = styled.div`
position:relative;
max-width:316px;
border:4px solid ${btnBgColor};
border-radius:20px;

padding: 30px 32px;
margin-right:auto;
margin-left:auto;
@media screen and (min-width:${desktop}){
    max-width:501px;
    padding:32px;
};
@media screen and (min-width:${desktop}){
    padding: 36px 34px;
    max-width:797px;
};`

export const Slide = styled.div`
text-align: center;`

export const TextContainer = styled.div``

export const Name = styled.p`
font-family:${mainFont};
font-weight: ${footerAccentFontWeight};
color:${mainTextColor};

font-size:20px;
line-height:1.2;

margin-bottom:6px;

@media screen and (min-width:${tablet}){
    font-size:32px;

    margin-bottom:30px;
};

`

export const Text = styled.p`
font-family:${mainFont};
font-weight:${mainFontWeight};
color:${mainTextColor};

font-size:18px;
line-height:1.1;

@media screen and (min-width:${tablet}){
    font-size:22px;
    line-height:1.2;
}
`

export const LeftArrow = styled.button`
position:absolute;
top:calc(50% - 20px);
left:-90px;

background-color:transparent;
border:1px solid ${mainTextColor};
border-radius:50%;
cursor:pointer;

padding:24px 15px;

transform:rotate(180deg);
`

export const RightArrow = styled.button`
position:absolute;
top:calc(50% - 20px);
right:-90px;

background-color:transparent;
border:1px solid ${mainTextColor};
border-radius:50%;
cursor:pointer;

padding:24px 15px;
`

