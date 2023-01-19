import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { desktop, mobile, tablet } from 'utils/breakpoints';
import { btnBgColor, cubicBezier, hoverBtnColor, mainFontWeight, mainTextColor, secondFont } from 'utils/variables';

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

export const TitleContainer = styled.div`
  border-bottom: 2px solid ${mainTextColor};
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 27px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h1`
  color: ${mainTextColor};
  font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  margin:0;
  padding:0;
  text-transform:capitalize;
  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: 0.03em;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 78px;
    line-height: 1.28;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media screen and (min-width: ${tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 80px;
  }
`;

export const Item = styled.li`
margin:0;
  @media screen and (min-width: ${desktop}) {
    :not(:last-child) {
      margin-right: 74px;
    }
  }
`;

export const ImgContainer = styled.div`
display:flex;
margin:0;`;

export const Link = styled(NavLink)`
  text-decoration: none;
  
`;
export const TextContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
border:none;
border-radius:0 0 20px 20px;
background-color:${btnBgColor};
    transition: background-color 250ms ${cubicBezier};
    :hover, :focus {
        background-color:${hoverBtnColor};
    }
@media screen and (min-width:${tablet}){
  padding:13px 24px 17px 24px;
}
@media screen and (min-width:${desktop}){
    padding: 15px 45px 18px 50px;
    
}`;

export const Text = styled.p`
font-family: ${secondFont};
  font-weight: ${mainFontWeight};
  text-transform: capitalize;
  color:${mainTextColor};
margin:0;
padding:0;
  @media screen and (min-width: ${tablet}) {
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: 0.03em;
  }`;



export const Img = styled.img`
border:none;
border-radius:20px 20px 0 0;`;
