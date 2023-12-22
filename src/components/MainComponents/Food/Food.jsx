import {
  Container,
  Heading,
  FullFrame,
  SmallCharts,
  Chart,
  Percentage,
  ChartInfo,
} from './Food.styled';
import BigChart from './BigChart/BigChart';
import DoughnutElement from './Doughnut/Doughnut.jsx';
import { useSelector } from 'react-redux';
import {
  selectDailyNutrition,
  selectUserMeals,
  selectUserData,
} from '../../../redux/selesctors.js';

export default function Food(props) {
  const dailyNutrition = useSelector(selectDailyNutrition);
  const dailyMeals = useSelector(selectUserMeals);
  const userStats = useSelector(selectUserData);

  return (
    <Container>
      <Heading>Food</Heading>
      <FullFrame>
        <BigChart
          calories={userStats?.dailyCalories}
          currentCalories={dailyMeals?.totalConsumedCaloriesPerDay || 0}
        />
        <SmallCharts>
          <Chart>
            <DoughnutElement
              heightpx={48}
              widthpx={48}
              color="#FFC4F7"
              percentage={
                Math.round(
                  (dailyMeals.totalConsumedCarbohydratesPerDay * 100) /
                    dailyNutrition?.carbohydrates
                ) || 0
              }
            />
            <Percentage>
              {Math.round(
                (dailyMeals.totalConsumedCarbohydratesPerDay * 100) /
                  dailyNutrition?.carbohydrates
              ) || 0}
              %
            </Percentage>
            <ChartInfo>
              <h3>Carbohidrates</h3>
              <div>
                <p>
                  Goal: <span>{dailyNutrition?.carbohydrates}</span>
                </p>
                <p>
                  left:{' '}
                  <span>
                    {dailyNutrition?.carbohydrates -
                      dailyMeals.totalConsumedCarbohydratesPerDay ||
                      dailyNutrition?.carbohydrates}
                  </span>
                </p>
              </div>
            </ChartInfo>
          </Chart>
          <Chart>
            <DoughnutElement
              heightpx={48}
              widthpx={48}
              color="#FFF3B7"
              percentage={
                Math.round(
                  (dailyMeals.totalConsumedProteinPerDay * 100) /
                    dailyNutrition?.protein
                ) || 0
              }
            />
            <Percentage>
              {Math.round(
                (dailyMeals.totalConsumedProteinPerDay * 100) /
                  dailyNutrition?.protein
              ) || 0}
              %
            </Percentage>
            <ChartInfo>
              <h3>Protein</h3>
              <div>
                <p>
                  Goal: <span>{dailyNutrition?.protein}</span>
                </p>
                <p>
                  left:{' '}
                  <span>
                    {dailyNutrition?.protein -
                      dailyMeals.totalConsumedProteinPerDay ||
                      dailyNutrition?.protein}
                  </span>
                </p>
              </div>
            </ChartInfo>
          </Chart>
          <Chart>
            <DoughnutElement
              heightpx={48}
              widthpx={48}
              color="#B6B6B6"
              percentage={
                Math.round(
                  (dailyMeals.totalConsumedFatPerDay * 100) /
                    dailyNutrition?.fat
                ) || 0
              }
            />
            <Percentage>
              {Math.round(
                (dailyMeals.totalConsumedFatPerDay * 100) / dailyNutrition?.fat
              ) || 0}
              %
            </Percentage>
            <ChartInfo>
              <h3>Fat</h3>
              <div>
                <p>
                  Goal: <span>{dailyNutrition?.fat}</span>
                </p>
                <p>
                  left:{' '}
                  <span>
                    {dailyNutrition?.fat - dailyMeals?.totalConsumedFatPerDay ||
                      dailyNutrition?.fat}
                  </span>
                </p>
              </div>
            </ChartInfo>
          </Chart>
        </SmallCharts>
      </FullFrame>
    </Container>
  );
}
