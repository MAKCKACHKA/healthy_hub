import { useState } from "react";
import { TimeSelection } from "./TimeSelection/TimeSelection";
import { WaterGraph } from "./WaterGraph/WaterGraph";
import { CaloriesGraph } from "./CaloriesGraph/CaloriesGraph";
import { GraphsWrapper } from "./DashboardPage.styled";
import { WeightGraph } from "./WeightGraph/WeightGraph";

export default function DashboardPage() {
  
  const [month, setMonth] = useState(null);
  const [dateOfMonths, setDateOfMonths] = useState([])

  return (
    <div>
      <TimeSelection month={month} setMonth={setMonth} />
      <GraphsWrapper>
        <CaloriesGraph month={month} />
        <WaterGraph month={month} dateOfMonths={dateOfMonths} setDateOfMonths={setDateOfMonths} />
      </GraphsWrapper>
      <WeightGraph month={month} />
    </div>
  );
}
