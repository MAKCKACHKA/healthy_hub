import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { WaterAverageNumber, WaterAverageTitle, WaterHeader, WaterHeadingWrapper, WaterSectionhWrapper, WaterGraphWrapper } from './WaterGraph.styled';

export const WaterGraph = ({month, dateOfMonths, setDateOfMonths}) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const numberOfDaysInTheMonth = month => {
    const date = new Date(`${month} 1, 2000`);
    const monthNumber = date.getMonth() + 1;
    const daysInMonth = new Date(2023, monthNumber, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => (index + 1).toString());
    return daysArray
  }

  const avarageCalc = () => {
  const dataOfGraph = data.datasets[0].data
  const lengthOfGraph = labels.length
  let sum = 0
  for (let i = 0; i < lengthOfGraph; i += 1) {
    sum += dataOfGraph[i]
  }
  const averageValueOfTheWaterGraph = Math.round(sum / lengthOfGraph)
  return averageValueOfTheWaterGraph
  }

  const dataCap = () => faker.number.int({ min: 750, max: 2500 })

  const options = {
      responsive: true,
      scales: {
        y: {
          min: 0,
          max: 3000,
          grid: {
            color: '#292928',
          },
          gridLines: {
            display: false,
            color: '#B6B6B6',
          },
          ticks: {
            stepSize: 1000,
            color: '#B6B6B6',
            callback: function (value) {
              if (String(value).length === 1) {
                return value;
              }
              return String(value).slice(0, 1) + `L`;
            },
          },
        },
        x: {
          grid: {
            color: '#292928',
          },
          ticks: {
            color: '#B6B6B6',
          },
          scales: {
            x: {
              min: 0,
              max: 10,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          cornerRadius: 8,
          caretSize: 0,
          padding: 10,
          borderColor: 'rgba(227, 255, 168, 0.1)',
          borderWidth: 3,
          backgroundColor: '#0f0f0f',
          titleFont: {
            weight: 'bold',
            size: 32,
            color: 'white',
          },
          displayColors: false,
          yAlign: 'bottom',
          xAlign: 'auto',
          bodyFont: {
            size: 32,
          },
          footerFont: {
            size: 16,
          },
          footerAlign: 'center',
          labelAlign: 'center',
          callbacks: {
            title: () => null,
            label: context => context.raw,
            footer: () => 'milliliters',
          },
        },
      },
  };

  const labels = numberOfDaysInTheMonth(month)

  const data = {
    labels,
    datasets: [
      {
        label: 'Water',
        fill: false,
        showLine: true,
        borderColor:'#e3ffa8',
        borderWidth: 1,
        tension: 0.4,
        pointRadius: 0,
        pointBorderColor: '#e3ffa8',
        pointHoverRadius: 3,
        pointHitRadius: 12,
        pointBackgroundColor: '#e3ffa8',
        data: labels.map(() => dataCap()),
      },
    ],
  };
    
  const averageValueOfTheWaterGraph = avarageCalc()
  
  return (
    <WaterSectionhWrapper>
      <WaterHeadingWrapper>
      <WaterHeader>Water</WaterHeader>
        {averageValueOfTheWaterGraph &&
          (<>
          <WaterAverageTitle>Average value:</WaterAverageTitle>
          <WaterAverageNumber>{averageValueOfTheWaterGraph}ml</WaterAverageNumber>
          </>)
        }
      </WaterHeadingWrapper>
      <WaterGraphWrapper>
        <Line options={options} data={data}></Line>
      </WaterGraphWrapper>
    </WaterSectionhWrapper>
  )   
}