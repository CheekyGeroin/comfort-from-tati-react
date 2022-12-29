import styled from '@emotion/styled';
import { desktop, tablet } from 'utils/breakpoints';
import { cubicBezier, secondTextColor } from 'utils/variables';

export const CatalogList = styled.ul`
  padding: 0;
  list-style: none;
  @media screen and (max-width: 767px) {
    max-width: 315px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: ${tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 303px);
    grid-template-rows: repeat(4, 182px);
  }
  @media screen and (min-width: ${desktop}) {
    grid-template-columns: repeat(3, 370px);
    grid-template-rows: repeat(2, 270px);
    grid-column-gap: 14px;
  } ;
`;

export const FirstItem = styled.li`
  position: relative;
  transition: transform 250ms ${cubicBezier};

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${tablet}) {
    grid-column: 1;
    grid-row: 1 / 2;
    align-self: flex-start;
  }
  @media screen and (min-width: ${desktop}) {
    grid-column: 1;
    grid-row: 1 / 3;
  } ;
`;
export const SecondItem = styled.li`
  position: relative;
  transition: transform 250ms ${cubicBezier};

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${tablet}) {
    grid-column: 2;
    grid-row: 4;
    align-self: flex-end;
  }
  @media screen and (min-width: ${desktop}) {
    grid-column: 2 / 3;
    grid-row: 1;
    align-self: center;
  } ;
`;
export const ThirdItem = styled.li`
  position: relative;
  transition: transform 250ms ${cubicBezier};

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${tablet}) {
    grid-column: 2;
    grid-row: 1 / 2;
    align-self: flex-start;
  }
  @media screen and (min-width: ${desktop}) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    align-self: baseline;
  } ;
`;
export const FourthItem = styled.li`
  position: relative;
  transition: transform 250ms ${cubicBezier};

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${tablet}) {
    grid-column: 2;
    grid-row: 3;
    align-self: flex-end;
  }
  @media screen and (min-width: ${desktop}) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: flex-end;
  } ;
`;
export const FifthItem = styled.li`
  position: relative;
  transition: transform 250ms ${cubicBezier};

  :hover,
  :focus {
    transform: scale(1.05);
  }
  @media screen and (min-width: ${tablet}) {
    grid-column: 1;
    grid-row: 4;
    align-self: flex-end;
  }
  @media screen and (min-width: ${desktop}) {
    grid-column: 3 / 4;
    grid-row: 2;
    align-self: flex-end;
  } ;
`;
export const FirstImageContainer = styled.div`
  position:relative;
  ::before {
    content: ' ';
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 2;
    max-width: 315px;
    max-height: 437px;

    border-radius: 20px;

    background: linear-gradient(
      0deg,
      rgba(3, 31, 38, 0.3),
      rgba(3, 31, 38, 0.3)
    );
  }
  @media screen and (min-width: ${tablet}) {
    ::before {
      max-width: 289px;
      max-height: 541px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    ::before {
      max-width: 366px;
    }
  }
`;

export const SecondImageContainer = styled.div`
  position:relative; 
  ::before {
    content: ' ';
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 2;
    width: 315px;
    max-height: 177px;

    border-radius: 20px;

    background: linear-gradient(
      0deg,
      rgba(3, 31, 38, 0.3),
      rgba(3, 31, 38, 0.3)
    );
  }
  @media screen and (min-width: ${tablet}) {
    ::before {
      width: 368px;
      max-height: 162px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    ::before {
      max-width: 356px;
      max-height: 258px;
    }
  }
`;

export const ThirdImageContainer = styled.div`
  position:relative;
   ::before {
    content: ' ';
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 2;
    width: 315px;
    max-height: 281px;

    border-radius: 20px;

    background: linear-gradient(
      0deg,
      rgba(3, 31, 38, 0.3),
      rgba(3, 31, 38, 0.3)
    );
  }
  @media screen and (min-width: ${tablet}) {
    ::before {
      width: 368px;
      max-height: 352px;
    }
  }
`;

export const FourthImageContainer = styled.div`
  position:relative;
   ::before {
    content: ' ';
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 2;
    width: 315px;
    max-height: 177px;

    border-radius: 20px;

    background: linear-gradient(
      0deg,
      rgba(3, 31, 38, 0.3),
      rgba(3, 31, 38, 0.3)
    );
  }
  @media screen and (min-width: ${tablet}) {
    ::before {
      width: 368px;
      max-height: 179px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    ::before {
      max-width: 356px;
      max-height: 258px;
    }
  }
`;

export const FifthImageContainer = styled.div`
  position:relative;
  ::before {
    content: ' ';
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 2;
    max-width: 315px;
    max-height: 130px;

    border-radius: 20px;

    background: linear-gradient(
      0deg,
      rgba(3, 31, 38, 0.3),
      rgba(3, 31, 38, 0.3)
    );
  }
  @media screen and (min-width: ${tablet}) {
    ::before {
      max-width: 289px;
      max-height: 162px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    ::before {
      max-width: 370px;
    }
  }
`;

export const Link = styled.a``;

export const ImageContainer = styled.div``;

export const Img = styled.img`
  border: none;
  border-radius: 20px;
`;

export const FifthImg = styled.img`
  border: none;
  border-radius: 20px;
  @media screen and (min-width: ${tablet}) and (max-width: 1279px) {
    max-width: 289px;
    height: 162px;
  }
`;
export const TextContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 22px;
  z-index: 3;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  text-decoration: underline;
  color: ${secondTextColor};
  @media screen and (min-width: ${desktop}) {
    font-size: 22px;
    line-height: 1.36;
  }
`;
