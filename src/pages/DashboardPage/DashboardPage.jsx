import { useState } from "react";
import { TimeSelection } from "./TimeSelection/TimeSelection";
import { WaterGraph } from "./WaterGraph/WaterGraph";
import { CaloriesGraph } from "./CaloriesGraph/CaloriesGraph";
import { GraphsWrapper } from "./DashboardPage.styled";

export default function DashboardPage() {
  
  const [month, setMonth] = useState(null);

  return (
    <div>
      <TimeSelection month={month} setMonth={setMonth} />
      <GraphsWrapper>
        <CaloriesGraph month={month} />
        <WaterGraph month={month} />
      </GraphsWrapper>
    </div>
  );
}
