import styled from "@emotion/styled";
import { desktop, tablet } from 'utils/breakpoints';
import { secondTextColor } from "utils/variables";

export const Header = styled.header`
position: absolute;
  width: 100%;
  z-index: 999;
padding-top: 34px;
padding-bottom: 17px;
  border-bottom: 2px solid ${secondTextColor};
  @media screen and (min-width: ${tablet}) {
    padding-top: 52px;
    padding-bottom: 32px;
  };
  @media screen and (min-width: ${desktop}) {
    padding-top: 53px;
    padding-bottom: 35px;
  };
`

export const Container = styled.div`
display: flex;
  align-items: center;
  position: relative;
  @media screen and (min-width: ${tablet}) {
    justify-content: center;
  };
`