import React from 'react';
import styled from 'styled-components';
import DoughnutElement from '../Doughnut/doughnut';

const Value = styled.p`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.18; /* 118.75% */
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50px;

  span {
    color: #b6b6b6;
    /* Body text/1 */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42; /* 142.857% */
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const BigChart = () => {
  return (
    <Container>
      <DoughnutElement color="#45FFBC" widthpx={168} heightpx={168} />
      <Value>
        1360 <span>calories</span>
      </Value>
    </Container>
  );
};

export default BigChart;
