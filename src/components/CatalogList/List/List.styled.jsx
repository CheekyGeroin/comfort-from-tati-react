import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { cubicBezier, secondTextColor } from "utils/variables";

export const CatalogList = styled.ul`
padding:0;
list-style:none;
@media screen and (max-width:767px){
    max-width: 315px;
    margin-left: auto;
    margin-right: auto;
  };
  @media screen and (min-width:${tablet}){
    display: grid;
    grid-template-columns: repeat(2, 303px);
    grid-template-rows: repeat(4, 182px);
  };
  @media screen and (min-width: ${desktop}) {
    grid-template-columns: repeat(3, 370px);
    grid-template-rows: repeat(2, 270px);
    grid-column-gap: 14px;
  };
`

export const FirstItem = styled.li`
position: relative;
  transition: transform 250ms ${cubicBezier};
  
    :hover,
    :focus {
      transform: scale(1.05);
    };
    @media screen and (max-width:767px){
      margin-bottom:10px;
    };

    @media screen and (min-width:${tablet}){
      grid-column: 1;
      grid-row: 1 / 2;
      align-self: flex-start;
    };
    @media screen and (min-width:${desktop}){
      grid-column: 1;
      grid-row: 1 / 3;
    };
    `
export const SecondItem = styled.li`
position: relative;
  transition: transform 250ms ${cubicBezier};
  
    :hover,
    :focus {
      transform: scale(1.05);
    };
    @media screen and (max-width:767px){
      margin-bottom:10px;
    };
    @media screen and (min-width:${tablet}){
       grid-column: 2;
      grid-row: 4;
      align-self: flex-end;
    };
    @media screen and (min-width:${desktop}){
      grid-column: 2 / 3;
      grid-row: 1;
      align-self: center;
    };
    `
export const ThirdItem = styled.li`
position: relative;
  transition: transform 250ms ${cubicBezier};
  
    :hover,
    :focus {
      transform: scale(1.05);
    };
    @media screen and (max-width:767px){
      margin-bottom:10px;
    };
    @media screen and (min-width:${tablet}){
       grid-column: 2;
      grid-row: 1 / 2;
      align-self: flex-start;
    };
    @media screen and (min-width:${desktop}){
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      align-self: baseline;
    };
    `
export const FourthItem = styled.li`
position: relative;
  transition: transform 250ms ${cubicBezier};
  
    :hover,
    :focus {
      transform: scale(1.05);
    };
    @media screen and (max-width:767px){
      margin-bottom:10px;
    };
    @media screen and (min-width:${tablet}){
       grid-column: 2;
      grid-row:3;
      align-self: flex-end;
    };
    @media screen and (min-width:${desktop}){
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      align-self: flex-end;
    };
    `
export const FifthItem = styled.li`
position: relative;
  transition: transform 250ms ${cubicBezier};
  
    :hover,
    :focus {
      transform: scale(1.05);
    };
    @media screen and (min-width:${tablet}){
        grid-column: 1;
      grid-row: 4;
      align-self: flex-end;
    };
    @media screen and (min-width:${desktop}){
      grid-column: 3 / 4;
      grid-row: 2;
      align-self: flex-end;
    };
    `
export const Link = styled.a``

export const ImageContainer = styled.div``

export const Img = styled.img`
border: none;
  border-radius: 20px;`

export const FifthImg = styled.img`
border: none;
  border-radius: 20px;
  @media screen and (min-width:${tablet}) and (max-width:1279px){
    max-width:289px;
    height: 162px;
  }
  `
export const TextContainer = styled.div`
 position: absolute;
  bottom: 15px;
  left: 22px;
  z-index: 3;
`

export const Text = styled.p`
margin:0;
padding:0;
text-decoration: underline;
  color: ${secondTextColor};
  @media screen and (min-width: ${desktop}) {
    font-size: 22px;
    line-height: 1.36;
  }`
