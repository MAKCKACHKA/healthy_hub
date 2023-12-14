import { Link } from 'react-router-dom';
import DailyGoal from '../Daily goal/DailyGoal';
import Water from '../Water/Water';
import Food from '../Food/Food';

export default function TodayWrap() {
  return (
    <div>
      <div>
        <h2>Today</h2>
        <Link to="/dashboard">On the way to the goal</Link>
      </div>
      <div>
        <DailyGoal />
        <Water />
        <Food />
      </div>
    </div>
  );
}
