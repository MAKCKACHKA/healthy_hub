import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1372px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 834px) and (max-width: 1440px) {
    width: 780px;
  }
  @media screen and (max-width: 834px) {
    max-width: 320px;
  }
`;

export const Header = styled.h1`
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  margin-right: 12px;
  @media screen and (max-width: 834px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const GoBackToMainPageWrapper = styled(Link)`
  width: 24px;
  height: 24px;
  display: inline-block;
  cursor: pointer;
  margin-right: 12px;
`;

export const GoBackToMainPageSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--primary-text-color);
  fill: transparent;
  transform: rotate(180deg);
  transition: stroke 0.3s;
  &:hover,
  &:focus {
    stroke: var(--primary-btn-color);
  }
`;
