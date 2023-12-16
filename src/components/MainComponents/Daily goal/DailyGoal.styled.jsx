import styled from 'styled-components';

export const Heading = styled.h4`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`;

export const FullFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #0f0f0f;
  border-radius: 12px;
  padding: 16px 12px;

  @media (min-width: 834px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 32px;
  }
`;

export const Cont = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledName = styled.p`
  color: #b6b6b6;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33; /* 133.333% */
  margin: 0;
`;

export const StyledValue = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.11;
  margin: 0;

  span {
    color: #b6b6b6;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }
`;

export const Container = styled.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;
