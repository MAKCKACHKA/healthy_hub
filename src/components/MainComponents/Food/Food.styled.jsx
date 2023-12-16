import styled from 'styled-components';

export const Heading = styled.h4`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`;

export const FullFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #0f0f0f;
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 834px) {
    flex-direction: row;
    justify-content: start;
    gap: 40px;
    padding: 36px 40px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`;

export const SmallCharts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Chart = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Percentage = styled.p`
  margin: 0;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42; /* 142.857% */
  position: relative;
  right: 50px;
`;

export const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #fff;
    /* Headline text/H3 */
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33; /* 133.333% */
    margin: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  div > p {
    color: var(--Color-Primary-White, #fff);
    /* Body text/1 */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42; /* 142.857% */
    margin: 0;
  }

  div > p > span {
    color: var(--Color-Primary-Grey, #b6b6b6);
    /* Body text/2 */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42; /* 142.857% */
  }
`;
