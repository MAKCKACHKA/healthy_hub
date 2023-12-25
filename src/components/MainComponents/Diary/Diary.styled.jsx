import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 864px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const DiaryLink = styled(Link)`
  color: #b6b6b6;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;

  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (min-width: 864px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const CardsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`;
