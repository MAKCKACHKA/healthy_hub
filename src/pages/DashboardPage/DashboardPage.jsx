import { useState } from "react";
import { TimeSelection } from "./TimeSelection/TimeSelection";
import { CaloriesGraph } from "./CaloriesGraph/CaloriesGraph";
import { WaterGraph } from "./WaterGraph/WaterGraph";

export default function DashboardPage() {
  
  const [month, setMonth] = useState(null);

  return (
    <>
      <TimeSelection month={month} setMonth={setMonth} />
      <CaloriesGraph />
      <WaterGraph />
      <CaloriesGraph />
    </>
  );
}
