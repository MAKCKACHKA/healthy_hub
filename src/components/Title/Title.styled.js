import styled from 'styled-components';

export const TitleStiled = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  word-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
    text-align:center;
  }

  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`;