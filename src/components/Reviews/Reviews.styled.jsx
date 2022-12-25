import styled from '@emotion/styled';
import { desktop, mobile, tablet } from 'utils/breakpoints';
import { mainFontWeight, mainTextColor, secondFont, secondTextColor } from 'utils/variables';

export const Section = styled.section`
  background-color: ${secondTextColor};
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (min-width: ${desktop}) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Container = styled.div`
  max-width: ${mobile};
  padding: 0 15px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${tablet}) {
    max-width: ${tablet};
  }
  @media screen and (min-width: ${desktop}) {
    max-width: ${desktop};
  }
`;

export const Title = styled.h2`
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  font-size: 40px;
  line-height: 1.2;
  color:${mainTextColor};

  text-align: center;

  margin: 0;
  padding: 0;

  margin-bottom: 30px;
  @media screen and(min-width:${desktop}) {
    margin-bottom: 40px;
  }
`;
