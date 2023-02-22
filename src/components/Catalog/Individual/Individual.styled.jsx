import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, mobile, tablet } from 'utils/breakpoints';
import { mainFont, mainFontWeight, mainTextColor, secondFont } from 'utils/variables';

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
margin-bottom:80px;

`;

export const TitleContainer = styled.div`
  border-bottom: 2px solid ${mainTextColor};
  margin-bottom:40px;
`;

export const Title = styled.h2`
  font-family: ${secondFont};
  font-weight: 300;
  letter-spacing: 0.03em;

  color: ${mainTextColor};
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${desktop}) {
    font-size: 78px;
    line-height: 1.28;
  }
`;

export const Form = styled.form``;

export const SelectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  jusitify-content: flex-start;
  align-items: center;
  list-style: none;
  @media screen and (min-width: ${desktop}) {
    max-width: 970px;
    margin: -40px;
  }
`;

export const SelectItem = styled.li`
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${desktop}) {
    display: flex;
    flex-basis: calc((100% - 2 * 80px) / 2);
    margin: 40px;
  }
`;

export const FormContainer = styled.div`
@media screen and (min-width:${desktop}){
  margin-bottom: 80px;
}`;

export const List = styled.ul`
list-style:none;

`;

export const Item = styled.li`
@media screen and (min-width:${desktop}){
    :not(:last-child){
        margin-bottom:40px;
    }
}`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${secondFont};
  font-weight: 300;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: ${mainTextColor};
  @media screen and (min-width: ${desktop}) {
    font-size: 40px;
    line-height: 1.25;
  }
`;

export const Select = styled.select`
border:1px solid ${mainTextColor};
border-radius:5px;
background-color:#EFEFEF;
@media screen and (min-width:${desktop}){
    margin-top:10px;
    width:405px;
    
    padding: 21px;
}`;

export const Option = styled.option`
font-family: ${mainFont};
font-style: normal;
font-weight: ${mainFontWeight};
font-size: 22px;
line-height: 1.14;
letter-spacing: 0.04em;
font-variant: small-caps;
color:${mainTextColor};
border-bottom:1px solid ${mainTextColor};
`;

export const Input = styled.input`
font-family:${mainFont};
font-style: normal;
font-weight: ${mainFontWeight};
font-size: 22px;
line-height: 1.14;

letter-spacing: 0.04em;
font-variant: small-caps;

color: #4B8798;
background-color:#EFEFEF;
border: 1px solid ${mainTextColor};
border-radius:5px;

@media screen and (min-width:${desktop}){
    max-width:405px;
    padding: 21px;
}
`;

export const Textarea = styled.textarea`
  resize: none;
  background-color:#EFEFEF;
  margin-top:10px;
`;

export const Link = styled(NavLink)``;

export const ButtonContainer = styled.div``

export const ButtonList = styled.ul`
list-style:none;
display:flex;
align-items:center;
justify-content: space-between;
@media screen and (min-width:${desktop}){
  margin-bottom:80px;
}`

export const ButtonItem = styled.li`

}`

export const Btn = styled.button`
font-family:${secondFont};
font-style: normal;
font-weight: ${mainFontWeight};
font-size: 40px;
line-height: 1.25;

letter-spacing: 0.03em;
text-transform: capitalize;
background-color: ${props => props.bgColor};
border:none;
border-radius:35px 5px;
color:${mainTextColor};
box-shadow: ${props=> props.boxShadow};
@media screen and (min-width:${desktop}){
  padding:12px 40px;
}
`