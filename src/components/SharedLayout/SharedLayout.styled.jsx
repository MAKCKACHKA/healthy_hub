import styled from 'styled-components';

export const Container = styled.main`
  min-width: 320px;
  padding: 0 10px 40px;

  @media screen and (min-width: 864px) {
    padding: 0 27px 60px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 34px;
  }
`;
