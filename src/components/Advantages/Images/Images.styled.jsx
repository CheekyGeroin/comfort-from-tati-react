import styled from '@emotion/styled';
import { desktop, tablet } from 'utils/breakpoints';

export const List = styled.ul`
  list-style: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: ${tablet}) and (max-width: 1279px) {
    display: flex;
    flex-direction: column-reverse;

    margin-right: 24px;
  }

  @media screen and (min-width: ${desktop}) {
    display: flex;
    align-items: center;

    margin-right: 56px;
  } ;
`;

export const Item = styled.li`
  @media screen and (min-width: ${tablet}) {
    :not(:first-of-type) {
      margin-bottom: 14px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    :not(:last-child) {
      margin-right: 21px;
    }
    :first-of-type {
      align-self: flex-end;
    }
  } ;
`;

export const FirstContainer = styled.div`
  position: relative;
  ::before {
    content: ' ';

    display: block;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      rgba(3, 31, 38, 0.3),
      rgba(3, 31, 38, 0.3)
    );
  }
  @media screen and(min-width:${tablet}) {
    ::before {
      border-radius: 8px 18px 8px 105px;
      max-height: 177px;
    }
  }
  @media screen and(min-width:${desktop}) {
    ::before {
      max-height: 266px;
    }
  } ;
`;
export const SecondContainer = styled.div`
  position: relative;

  ::before {
    content: ' ';

    display: block;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      rgba(3, 31, 38, 0.3),
      rgba(3, 31, 38, 0.3)
    );
  }
  @media screen and(min-width:${tablet}) {
    ::before {
      border-radius: 8px 94px 8px 16px;
      max-height: 370px;
    }
  }
  @media screen and(min-width:${desktop}) {
    ::before {
      border-radius: 10px 120px 10px 20px;
      max-height: 428px;
    }
  } ;
`;

export const FirstImage = styled.picture`
  border: none;
  @media screen and (min-width: ${tablet}) {
    border-radius: 8px 18px 8px 105px;
  } ;
`;

export const SecondImage = styled.picture`
  border: none;
  @media screen and (min-width: ${tablet}) {
    border-radius: 8px 94px 8px 16px;
  }
  @media screen and (min-width: ${desktop}) {
    border-radius: 10px 120px 10px 20px;
  } ;
`;
