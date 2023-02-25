import styled from '@emotion/styled';
import { desktop, tablet } from 'utils/breakpoints';
import { mainFontWeight, mainTextColor, secondFont } from 'utils/variables';

export const Container = styled.div`
  border-bottom: 2px solid ${mainTextColor};
  margin-bottom:20px;
  @media screen and (min-width:${tablet}){
    margin-bottom:30px;
  }
  @media screen and (min-width:${desktop}){
    margin-bottom: 40px;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  margin: 0;
  padding: 0;
  color: ${mainTextColor};
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.03em;

  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
  }
  @media screen and (max-width: 1279px) {
    text-transform: capitalize;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 70px;
    line-height: 1.28;
  }
`;
