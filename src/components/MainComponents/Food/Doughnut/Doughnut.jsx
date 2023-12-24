import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const StyledDoughnut = styled(Doughnut)`
  width: ${(props) => props.$widthpx}px !important;
  height: ${(props) => props.$heightpx}px !important;
`;

ChartJS.register(ArcElement);

const DoughnutElement = (props) => {
  const options = {
    cutout: '80%',

    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: { enabled: false },
    hover: { mode: null },
    events: [],
  };

  const data = {
    labels: ['Filled', 'Empty'],
    datasets: [
      {
        data: [
          props.percentage,
          props.percentage <= 100 ? 100 - props.percentage : 0,
        ],
        backgroundColor: [props.color, '#292928'],
        borderColor: ['transparent', '#292928'],
        borderWidth: [0, 0],
        borderRadius: [props.percentage >= 100 ? 0 : 168, 0],
      },
    ],
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      ctx.save();

      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;

      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;

      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = '#292928';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <StyledDoughnut
      $widthpx={props.widthpx}
      $heightpx={props.heightpx}
      data={data}
      options={options}
      plugins={[backgroundCircle]}
    />
  );
};

export default DoughnutElement;
