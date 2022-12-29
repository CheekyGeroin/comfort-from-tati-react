import styled from '@emotion/styled';
import { desktop, tablet } from 'utils/breakpoints';

export const Section = styled.section`
  background: rgba(5, 45, 56, 0.5);
  background-size: contain;
`;

export const BgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 231px;
  padding-bottom: 187px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    background-image: linear-gradient(
        0deg,
        rgba(3, 31, 38, 0.3),
        rgba(3, 31, 38, 0.3)
      ),
      url(${require('images/hero/hero-mob.jpg')});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(3, 31, 38, 0.3),
          rgba(3, 31, 38, 0.3)
        ),
        url(${require('images/hero/hero-mob@2x.jpg')});
    }
  }

  @media screen and (min-width: ${tablet}) {
    position: relative;
    padding-top: 242px;
    padding-bottom: 206px;
  }

  @media screen and (min-width: ${tablet}) and (max-width: 1279px) {
    background-image: linear-gradient(
        0deg,
        rgba(3, 31, 38, 0.3),
        rgba(3, 31, 38, 0.3)
      ),
      url(${require('images/hero/hero-tabl.jpg')});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(3, 31, 38, 0.3),
          rgba(3, 31, 38, 0.3)
        ),
        url(${require('images/hero/hero-tabl@2x.jpg')});
    }
  }
  @media screen and (min-width: ${desktop}) {
    padding-top: 279px;
    padding-bottom: 228px;
  }
`;
