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
import { ScrollerWrapper, Overflow, WeightAverageNumber, WeightAverageTitle, WeightHeader, WeightHeadingWrapper, WeightSectionhWrapper, WeightGraphWrapper, WeightArrayList, MonthArrayList, WeightArrayItem, MonthArrayItem, HeaderData } from './WeightGraph.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMonthlyStatistics } from '../../../redux/operations';

export const WeightGraph = ({month}) => {
  const dispatch = useDispatch()
  const [dataOfUser, setDataOfUser] = useState({}); 
  const [weightCap, setWeightCap] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
    if (month !== null) {
        try {
          const data = await dispatch(getMonthlyStatistics(month));
          // console.log(data.payload)
          setDataOfUser(data.payload);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData(month)
  }, [month])
  
  useEffect(() => {
    if (Object.keys(dataOfUser).length) {
      const dataCap = numberOfDay => {
        if (dataOfUser.weightPerDay.length !== 0) {
          const foundItem = dataOfUser.weightPerDay.find(el => numberOfDay + 1 === el.day);
          if (foundItem) {
            return foundItem.weight;
          } else {
            return 0;
          }
        }
        else {
          return 0;
        }
      }
      const weightCapFu = () => {
        const countOfDays = daysArray.length
        const dataArray = []
        for (let i = 0; i < countOfDays; i += 1) {
          if (dataCap(i) !== 0) {
            const foundItem = dataCap(i)
            if (foundItem) {
              dataArray.push(foundItem)
            } else {
              dataArray.push(0)
            }
          }
          else {
            const indexOfTheLastOne = dataArray.length - 1
            const theLastOneWalue = dataArray[indexOfTheLastOne]
            if (dataArray.length !== 0 && theLastOneWalue !== 0) {
              dataArray.push(theLastOneWalue)
            } else {
              dataArray.push(0)
            }
           
          }
        }
        setWeightCap(dataArray)
      }  
      weightCapFu()
    } else {
      // console.log('bruh')
  }
}, [dataOfUser])

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
    Legend
  );

  const numberOfDaysInTheMonth = (month) => {

    // const date = new Date(`${month} 1, 2000`);
  // const monthNumber = date.getMonth() + 1;
  // const daysInMonth = 
  // const daysArray = Array.from({ length: daysInMonth }, (_, index) => (index + 1).toString());


  // const monthNumber = month
  // const daysInMonth = new Date().getDate()
  // const daysInMonth = 
  
      // console.log(month)
  // console.log(new Date().getMonth())
  // console.log(month !== new Date().getMonth())
  
    // console.log(monthNumberTested)

    let monthNumberTested 

    if (month !== new Date().getMonth()) {
      monthNumberTested = new Date().getDate()
    } else {
      monthNumberTested = new Date(2023, month, 0).getDate();
    }
    const daysArray = Array.from({ length: monthNumberTested }, (_, index) => (index + 1).toString());
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

  // const dataCap = () => faker.number.int({ min: 63, max: 75 })
  
  
    // отсюда ----------------------------------------------

  const fakeDataTestWeight = [
      {day: 15, weight: 133},
      {day: 16, weight: 133},
      {day: 17, weight: 132},
      {day: 18, weight: 132},
      {day: 19, weight: 131},
      {day: 20, weight: 131},
      {day: 21, weight: 130}
    ]
  
  const weightArray = () => {
    const weightArr = weightCap
    // console.log(weightArr)
    if (weightArr.length !== 0) {
      return (
        <WeightArrayList>
          {weightArr.map((el) => (
            <WeightArrayItem key={Math.random()}>{el}</WeightArrayItem>
          ))}
        
        </WeightArrayList>
      )}
    return (<div></div>);
  }
  
  
  // const dataCap = numberOfDay => {
  //   // console.log(numberOfDay)
  //   // console.log(fakeDataTestWeight)
  //   if (fakeDataTestWeight.length !== 0) {
  //     const foundItem = fakeDataTestWeight.find(el => numberOfDay === el.day.toString());
  //     if (foundItem) {
  //       return foundItem.weight;
  //     } else {
  //       return 0;
  //     }
  //   }
  //   return 0;
  // }

  

 // до сюда ---------------------------------------------
  // numberOfDaysInTheMonth(month)
  //логика получения данных по дням 




  // const avarageCalc = () => {
  //   const dataOfGraph = weightCap()
  //   const countOfDays = daysArray.length
  //   if(!weightCap() || !daysArray.length){return}
  //   let sum = 0
  //   for (let i = 0; i < countOfDays; i += 1) {
  //     sum += dataOfGraph[i]
  //   }
  //   const averageValueOfTheWeightGraph = Math.round(sum / countOfDays)
  //   return averageValueOfTheWeightGraph
  // }

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
          {dataOfUser.avgWeight ?
            (<HeaderData>
              <WeightAverageTitle>Average value:</WeightAverageTitle>
              <WeightAverageNumber>{dataOfUser.avgWeight}kg</WeightAverageNumber>
            </HeaderData>) :
            (<HeaderData>
              <WeightAverageTitle>Average value:</WeightAverageTitle>
              <WeightAverageNumber>no added data yet</WeightAverageNumber>
            </HeaderData>)
            }
      </WeightHeadingWrapper>
      <ScrollerWrapper>
        <Overflow>
          <WeightGraphWrapper>
              {weightArray()}
              {monthArray()}
          </WeightGraphWrapper>
        </Overflow>
      </ScrollerWrapper>
    </WeightSectionhWrapper>
  )   
}
