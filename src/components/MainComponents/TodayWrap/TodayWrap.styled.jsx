import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    padding: 0 28px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
