import styled from "@emotion/styled";
import { tablet } from "utils/breakpoints";

export const VideoPlayer = styled.video`
@media screen and ( min-width:${tablet}){
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;
    overflow: hidden;
    z-index: -1;
  };
  @media screen and (max-width:1279px){
      display: none;
  };
`
