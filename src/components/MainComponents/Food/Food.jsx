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
import DoughnutElement from './Doughnut/doughnut';

export default function Food() {
  return (
    <Container>
      <Heading>Food</Heading>
      <FullFrame>
        <BigChart />
        <SmallCharts>
          <Chart>
            <DoughnutElement heightpx={48} widthpx={48} color="#FFC4F7" />
            <Percentage>80%</Percentage>
            <ChartInfo>
              <h3>Carbohidrates</h3>
              <div>
                <p>
                  Goal: <span>170</span>
                </p>
                <p>
                  left: <span>34</span>
                </p>
              </div>
            </ChartInfo>
          </Chart>
          <Chart>
            <DoughnutElement heightpx={48} widthpx={48} color="#FFF3B7" />
            <Percentage>80%</Percentage>
            <ChartInfo>
              <h3>Protein</h3>
              <div>
                <p>
                  Goal: <span>127.5</span>
                </p>
                <p>
                  left: <span>8</span>
                </p>
              </div>
            </ChartInfo>
          </Chart>
          <Chart>
            <DoughnutElement heightpx={48} widthpx={48} color="#B6B6B6" />
            <Percentage>80%</Percentage>
            <ChartInfo>
              <h3>Fat</h3>
              <div>
                <p>
                  Goal: <span>56</span>
                </p>
                <p>
                  left: <span>11,2</span>
                </p>
              </div>
            </ChartInfo>
          </Chart>
        </SmallCharts>
      </FullFrame>
    </Container>
  );
}
