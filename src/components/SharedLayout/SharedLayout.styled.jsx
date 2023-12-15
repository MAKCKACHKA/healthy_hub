import styled from 'styled-components';

export const Container = styled.main`
  min-width: 320px;
  padding: 0 10px;
  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 0 27px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    padding: 0 34px;
  }
`;
