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
import { Overflow,TestForDiv,CaloriesAverageNumber, CaloriesAverageTitle, CaloriesHeader, CaloriesHeadingWrapper, CaloriesSectionhWrapper, СaloriesGraphWrapper, ScrollerWrapper, HeaderData } from './CaloriesGraph.styled';

// c этого -----------------------------------------------

import axios from 'axios';
import { useState, useEffect } from 'react';
import { getMonthlyStatistics, signin, signup } from '../../../redux/operations';
import { useDispatch } from "react-redux";

axios.defaults.baseURL = 'https://healthy-hub-rest-api.onrender.com/api';

export const CaloriesGraph = ({ month }) => {

  const [dataOfUser, setDataOfUser] = useState([]); 
  const dispatch = useDispatch()

  useEffect(() => {

    if (month !== null) {
      const fetchData = async month => {
        try {
          const data = await dispatch(getMonthlyStatistics(month));
          setDataOfUser(data.payload)
        }
        catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData(month)
    }
  }, [month])

//по сюда ------------------------------------------------

//логика получения данных пользователя, не теряй

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
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
  const averageValueOfTheCaloriesGraph = Math.round(sum / lengthOfGraph)
  return averageValueOfTheCaloriesGraph
  }

  // отсюда ----------------------------------------------

  const dataCap = numberOfDay => {
    if (dataOfUser.length !== 0) {
      const foundItem = dataOfUser.weightPerDay.find(el => numberOfDay === el.day.toString());
      if (foundItem) {
        return foundItem.weight;
      } else {
        return 0;
      }
    }
    return 0;
}
    
  // до сюда ---------------------------------------------
  
  //логика получения данных по дням 


  const options = {
      maintainAspectRatio: false, 
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
              return String(value).slice(0, 1) + `K`;
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
            footer: () => 'calories',
          },
        },
      },
  };

  const labels = numberOfDaysInTheMonth(month)

  const scrollerTest = () => {
    if (labels.length > 14) {
      return true
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
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
        data: labels.map(el => dataCap(el)),
      },
    ],
  };
    
  const averageValueOfTheCaloriesGraph = avarageCalc()
  
  return (
    <CaloriesSectionhWrapper>
      <CaloriesHeadingWrapper>
      <CaloriesHeader>Calories</CaloriesHeader>
        {averageValueOfTheCaloriesGraph &&
          (<HeaderData>
            <CaloriesAverageTitle>Average value:</CaloriesAverageTitle>
            <CaloriesAverageNumber>{averageValueOfTheCaloriesGraph}cal</CaloriesAverageNumber>
          </HeaderData>)
        }
      </CaloriesHeadingWrapper>
      <ScrollerWrapper>
        <Overflow>
          <СaloriesGraphWrapper>
            {/* <TestForDiv> */}
              <Line options={options} data={data}/>
            {/* </TestForDiv> */}
          </СaloriesGraphWrapper>
        </Overflow>
      </ScrollerWrapper>
    </CaloriesSectionhWrapper>
  )   
}