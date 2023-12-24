import styled from 'styled-components';

export const Section = styled.section`
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 864px) {
    max-width: 444px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 100%;
    margin: 40px 0 72px 150px;
    display: flex;
    flex-wrap: wrap;
  }
`;
