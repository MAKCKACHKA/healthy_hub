import styled from 'styled-components';

export const Img = styled.svg`
  width: 300px;
  height: 296px;
  display: block;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin: 0;
  }
`;
