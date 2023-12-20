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

export default function Food(props) {
  return (
    <Container>
      <Heading>Food</Heading>
      <FullFrame>
        <BigChart
          calories={props.stats.dailyCalories}
          currentCalories={props.meals.totalConsumedCaloriesPerDay}
        />
        <SmallCharts>
          <Chart>
            <DoughnutElement
              heightpx={48}
              widthpx={48}
              color="#FFC4F7"
              percentage={Math.round(
                (props.meals.totalConsumedCarbohydratesPerDay * 100) /
                  props.stats.dailyNutrition?.carbohydrates
              )}
            />
            <Percentage>
              {Math.round(
                (props.meals.totalConsumedCarbohydratesPerDay * 100) /
                  props.stats.dailyNutrition?.carbohydrates
              )}
              %
            </Percentage>
            <ChartInfo>
              <h3>Carbohidrates</h3>
              <div>
                <p>
                  Goal: <span>{props.stats.dailyNutrition?.carbohydrates}</span>
                </p>
                <p>
                  left:{' '}
                  <span>
                    {props.stats.dailyNutrition?.carbohydrates -
                      props.meals.totalConsumedCarbohydratesPerDay}
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
              percentage={Math.round(
                (props.meals.totalConsumedProteinPerDay * 100) /
                  props.stats.dailyNutrition?.protein
              )}
            />
            <Percentage>
              {Math.round(
                (props.meals.totalConsumedProteinPerDay * 100) /
                  props.stats.dailyNutrition?.protein
              )}
              %
            </Percentage>
            <ChartInfo>
              <h3>Protein</h3>
              <div>
                <p>
                  Goal: <span>{props.stats.dailyNutrition?.protein}</span>
                </p>
                <p>
                  left:
                  <span>
                    {props.stats.dailyNutrition?.protein -
                      props.meals.totalConsumedProteinPerDay}
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
              percentage={Math.round(
                (props.meals.totalConsumedFatPerDay * 100) /
                  props.stats.dailyNutrition?.fat
              )}
            />
            <Percentage>
              {Math.round(
                (props.meals.totalConsumedFatPerDay * 100) /
                  props.stats.dailyNutrition?.fat
              )}
              %
            </Percentage>
            <ChartInfo>
              <h3>Fat</h3>
              <div>
                <p>
                  Goal: <span>{props.stats.dailyNutrition?.fat}</span>
                </p>
                <p>
                  left:
                  <span>
                    {props.stats.dailyNutrition?.fat -
                      props.meals.totalConsumedFatPerDay}
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
