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
import { faker } from '@faker-js/faker';
import { WeightAverageNumber, WeightAverageTitle, WeightHeader, WeightHeadingWrapper, WeightSectionhWrapper, WeightGraphWrapper, WeightArrayList, MonthArrayList, WeightArrayItem, MonthArrayItem } from './WeightGraph.styled';

export const WeightGraph = ({month, dateOfMonths, setDateOfMonths }) => {

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

  const numberOfDaysInTheMonth = (month) => {
    const date = new Date(`${month} 1, 2000`);
    const monthNumber = date.getMonth() + 1;
    const daysInMonth = new Date(2023, monthNumber, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => (index + 1).toString());
    return daysArray 
  }

  const daysArray = numberOfDaysInTheMonth(month)

  const monthArray = () => {
    if (daysArray.length !== 0) {
      return (
        <MonthArrayList>
        
          {daysArray.map((el) => (
            <MonthArrayItem key={el}>{el}</MonthArrayItem>
          ))}
        
        </MonthArrayList>
      )}
    return null;
  }

  const dataCap = () => faker.number.int({ min: 63, max: 75 })
  
  const weightCap = () => {
    const countOfDays = daysArray.length
    const dataArray = []
    for (let i = 0; i < countOfDays; i += 1) {
      dataArray.push(dataCap())
    }
    return dataArray
  }

  const weightArray = () => {
    const weightArr = weightCap()
    if (weightArr.length !== 0) {
      return (
        <WeightArrayList>
        
          {weightArr.map((el) => (
            <WeightArrayItem key={Math.random()}>{el}</WeightArrayItem>
          ))}
        
        </WeightArrayList>
      )}
    return null;
  }

  const avarageCalc = () => {
    const dataOfGraph = weightCap()
    const countOfDays = daysArray.length
    if(!weightCap() || !daysArray.length){return}
    let sum = 0
    for (let i = 0; i < countOfDays; i += 1) {
      sum += dataOfGraph[i]
    }
    const averageValueOfTheWeightGraph = Math.round(sum / countOfDays)
    return averageValueOfTheWeightGraph
  }

  // const labels = dateOfMonths

  // const averageValueOfTheWeightGraph = avarageCalc()
  
  // const monthsCount = array => {
  //   labels.map(el => {
  //     return(<li>el</li>)
  //   })
  // }



  // console.log(monthsCount(monthArray))

  return (
    <WeightSectionhWrapper>
      <WeightHeadingWrapper>
        <WeightHeader>Weight</WeightHeader>
          {avarageCalc() && <>
            <WeightAverageTitle>Average value:</WeightAverageTitle>
            <WeightAverageNumber>{avarageCalc()}kg</WeightAverageNumber>
          </>}
      </WeightHeadingWrapper>
      <WeightGraphWrapper>
          {weightArray()}
          {monthArray()}
      </WeightGraphWrapper>
    </WeightSectionhWrapper>
  )   
}
