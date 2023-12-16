import React from 'react';
import styled from 'styled-components';

const BarBG = styled.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const FillChart = styled.div`
  height: ${(props) => props.$percentage}%;
  width: 100%;
  background: #b6c3ff;
  border-radius: 20px;
`;

const Percentage = styled.p`
  color: #b6c3ff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37; /* 137.5% */
  margin: 0;
  margin-bottom: 6px;
`;

const WaterChart = ({ percentage }) => {
  return (
    <BarBG>
      <Percentage>{percentage} %</Percentage>
      <FillChart $percentage={percentage} />
    </BarBG>
  );
};

export default WaterChart;
