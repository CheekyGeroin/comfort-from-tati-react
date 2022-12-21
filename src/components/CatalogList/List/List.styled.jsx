import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";
import { cubicBezier } from "utils/variables";

export const CatalogList = styled.ul`
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

export const Item = styled.li`
 position: relative;
  transition: transform 250ms ${cubicBezier};
  
    :hover,
    :focus {
      transform: scale(1.05);
    }
    @media screen and (max-width:767px){
      :not(:last-child){
        margin-bottom: 10px;
      }
    }`

export const Link = styled.a``

export const ImageContainer = styled.div``

export const Img = styled.img``

export const TextContainer = styled.div``

export const Text = styled.p``
