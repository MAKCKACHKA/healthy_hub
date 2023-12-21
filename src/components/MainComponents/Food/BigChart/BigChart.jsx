import React from 'react';
import styled from 'styled-components';
import DoughnutElement from '../Doughnut/Doughnut.jsx';

const Value = styled.p`
  color: var(--primary-title-text-color);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.18;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 168px;
  text-align: center;

  span {
    color: var(--primary-text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const BigChart = ({ calories, currentCalories }) => {
  const calculatePercentage = () => {
    return Math.round((currentCalories * 100) / calories);
  };

  return (
    <Container>
      <DoughnutElement
        percentage={calculatePercentage()}
        color="#45FFBC"
        widthpx={168}
        heightpx={168}
      />
      <Value>
        {currentCalories} <span>calories</span>
      </Value>
    </Container>
  );
};

export default BigChart;
