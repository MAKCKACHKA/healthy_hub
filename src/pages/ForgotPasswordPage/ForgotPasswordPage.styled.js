import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 24px;
  margin-top: 24px;
  justify-content: center;

  @media screen and (min-width: 834px) {
    gap: 60px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    flex-direction: row;
    gap: 104px;
    /* margin-left: 150px; */
  }
`;
