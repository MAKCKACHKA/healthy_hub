import { Link } from 'react-router-dom';
import DailyGoal from '../Daily goal/DailyGoal';
import Water from '../Water/Water';
import Food from '../Food/Food';
import Diary from '../Diary/Diary';
import RecommentedFood from '../RecommentedFood/RecommentedFood';

export default function TodayWrap() {
  return (
    <div>
      <div>
        <div>
          <h2>Today</h2>
          <Link to="/dashboard">On the way to the goal</Link>
        </div>
        <DailyGoal />
        <Water />
        <Food />
      </div>
      <Diary />
      <RecommentedFood />
    </div>
  );
}
