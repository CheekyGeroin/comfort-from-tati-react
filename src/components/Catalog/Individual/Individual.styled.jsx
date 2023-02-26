import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, mobile, tablet } from 'utils/breakpoints';
import {
  cubicBezier,
  mainFont,
  mainFontWeight,
  mainTextColor,
  secondFont,
} from 'utils/variables';

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

export const SelectContainer = styled.div`
margin-bottom:50px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 80px;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 2px solid ${mainTextColor};
  margin-bottom:20px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  font-size: 28px;
  line-height:1;
  letter-spacing: 0.03em;
  @media screen and (max-width:1279px){
    text-transform: capitalize;
  }

  color: ${mainTextColor};
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 78px;
    line-height: 1.28;
  }
`;

export const Form = styled.form``;

export const SelectList = styled.ul`
padding:0;
margin:0;
  list-style: none;
  @media screen and (min-width: ${desktop}) {
    display: flex;
    flex-wrap: wrap;
    jusitify-content: flex-start;
    align-items: center;
    max-width: 970px;
    margin: -40px;
  }
`;

export const SelectItem = styled.li`
  margin: 0;
  padding: 0;
  @media screen and (max-width:767px){
    :not(:last-child){
      margin-bottom:20px;
    }
  }
  @media screen and (min-width: ${tablet}) and (max-width: 1279px) {
    :not(:last-child) {
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    display: flex;
    flex-basis: calc((100% - 2 * 80px) / 2);
    margin: 40px;
  }
`;

export const FormContainer = styled.div`
margin-bottom:50px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 80px;
  }
`;

export const List = styled.ul`
padding:0;
margin:0;
  list-style: none;
`;

export const Item = styled.li`
:not(:last-child) {
      margin-bottom: 20px;
    }
@media screen and (min-width: ${tablet}) {
    :not(:last-child) {
      margin-bottom: 25px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    :not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  font-size:28px;
  line-height:1;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: ${mainTextColor};

  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
  }
`;

export const Select = styled.select`
  border: 1px solid ${mainTextColor};
  border-radius: 5px;
  background-color: #efefef;
  font-family:${mainFont};
  font-weight:${mainFontWeight};
  font-size:18px;
  line-height:1.11;
  letter-spacing: 0.04em;
  color:#4B8798;
    margin-top: 10px;
    padding: 7px 14px;
    width:316px;
  @media screen and (min-width: ${tablet}) {
    width:445px;
  
    padding:17px 14px;
    font-size: 22px;
    line-height: 1.14;
  }
  @media screen and (min-width: ${desktop}) {
    width: 405px;

    padding: 21px;
  }
`;

export const Option = styled.option`
  font-family: ${mainFont};
  font-style: normal;
  font-weight: ${mainFontWeight};
  font-size: 22px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  font-variant: small-caps;
  color: ${mainTextColor};
  border-bottom: 1px solid ${mainTextColor};
`;

export const Input = styled.input`
  font-family: ${mainFont};
  font-style: normal;
  font-weight: ${mainFontWeight};
  font-size:18px;
  line-height:1.11;
  

  letter-spacing: 0.04em;
  font-variant: small-caps;

  margin-top: 10px;
  color: #4b8798;
  background-color: #efefef;
  border: 1px solid ${mainTextColor};
  border-radius: 5px;
  padding: 7px 14px;
  max-width:286px;

  @media screen and (min-width: ${tablet}) {
    
    max-width:415px;
    padding:17px 14px;
    font-size: 22px;
  line-height: 1.14;
  }
  @media screen and (min-width: ${desktop}) {
    max-width: 405px;
    padding: 21px;
  }
`;

export const Textarea = styled.textarea`
font-family: ${mainFont};
  font-style: normal;
  font-weight: ${mainFontWeight};
  font-size:18px;
  line-height:1.11;
  

  letter-spacing: 0.04em;
  font-variant: small-caps;
  resize: none;
  background-color: #efefef;
  margin-top: 10px;
  border-radius:5px;
  padding:7px 14px;
  @media screen and (max-width:767px){
    max-width:286px;
  }
  @media screen and (min-width:${tablet}) and (max-width:1279px){
    max-width:415px;
  }
  @media screen and (min-width:${tablet}){
    font-size:22px;
    line-height:1.14;
    padding:17px 14px;
  }
  @media screen and (min-width:${desktop}){
    padding:21px;
  }
`;

export const Link = styled(NavLink)``;

export const ButtonContainer = styled.div`
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 80px;
  }
`;

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonItem = styled.li`

}`;

export const Btn = styled.button`
  font-family: ${secondFont};
  font-style: normal;
  font-weight: ${mainFontWeight};
  font-size: 40px;
  line-height: 1.25;

  cursor: pointer;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 35px 5px;
  color: ${mainTextColor};
  box-shadow: ${props => props.boxShadow};
  transition: background-color 250ms ${cubicBezier},
    box-shadow 250ms ${cubicBezier};
  :hover,
  :focus {
    background-color: ${props => props.bgHoverColor};
    box-shadow: ${props => props.boxShadowHover};
  }
  
  @media screen and (min-width: ${tablet}) {
    padding: 12px 40px;
  }
`;
export const Svg = styled.svg`
@media screen and (min-width:${tablet}){
  width:79px;
  height:21px;
  margin-right:10px;
}
@media screen and (min-width:${desktop}){
  width:80px;
  height:22px;
}`

