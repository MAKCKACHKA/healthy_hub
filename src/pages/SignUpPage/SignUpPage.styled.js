import styled from 'styled-components';

export const BtnWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    max-width: 380px;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
    justify-content: left;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 auto;
  }
`;
