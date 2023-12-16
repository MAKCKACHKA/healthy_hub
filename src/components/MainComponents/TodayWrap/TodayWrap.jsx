import { Link } from 'react-router-dom';
import DailyGoal from '../Daily goal/DailyGoal';
import Water from '../Water/Water';
import Food from '../Food/Food';
import { StyledContainer } from './TodayWrap.styled';

export default function TodayWrap() {
  return (
    <div>
      <div>
        <h2>Today</h2>
        <Link to="/dashboard">On the way to the goal</Link>
      </div>
      <StyledContainer>
        <DailyGoal />
        <Water />
        <Food />
      </StyledContainer>
    </div>
  );
}
