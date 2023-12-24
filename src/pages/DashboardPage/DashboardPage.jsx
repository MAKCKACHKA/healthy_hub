import { useState } from "react";
import { TimeSelection } from "../../components/DashboardComponents/TimeSelection/TimeSelection";
import { WaterGraph } from "../../components/DashboardComponents/WaterGraph/WaterGraph";
import { CaloriesGraph } from "../../components/DashboardComponents/CaloriesGraph/CaloriesGraph";
import { WeightGraph } from "../../components/DashboardComponents/WeightGraph/WeightGraph";
import { DashboardPageWrapper, GraphsWrapper, WrapperCenter } from "./DashboardPage.styled";


export default function DashboardPage() {
  
  const [month, setMonth] = useState(null);
  const [dateOfMonths, setDateOfMonths] = useState([])

  return (
    <WrapperCenter>
      <DashboardPageWrapper>
      <TimeSelection month={month} setMonth={setMonth} />
      <GraphsWrapper>
        <CaloriesGraph month={month} />
        <WaterGraph month={month} dateOfMonths={dateOfMonths} setDateOfMonths={setDateOfMonths} />
      </GraphsWrapper>
      <WeightGraph month={month} />
      </DashboardPageWrapper>
    </WrapperCenter>
  );
}
