import styled from 'styled-components';

export const BtnWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    max-width: 380px;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 212px;
    justify-content: left;
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin: 0 auto;
  }
`;
