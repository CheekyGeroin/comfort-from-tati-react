import styled from '@emotion/styled';
import { desktop, mobile, tablet } from 'utils/breakpoints';
import { secondTextColor } from 'utils/variables';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${secondTextColor};
  @media screen and (min-width: ${tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: ${desktop}) {
    padding-top: 80px;
    padding-bottom: 80px;
  } ;
`;

export const Container = styled.div`
max-width: ${mobile};
 padding: 0 15px;
 margin: 0;
 margin-left: auto;
 margin-right: auto;
 @media screen and (min-width:${tablet}){
    max-width: ${tablet};
    display: flex;
    align-items: stretch;
 }
 @media screen and (min-width:${desktop}){
    max-width: ${desktop};
 }
  
`;
