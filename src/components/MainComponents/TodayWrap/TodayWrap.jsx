import DailyGoal from '../Daily goal/DailyGoal';
import Water from '../Water/Water';
import Food from '../Food/Food';
import {
  StyledContainer,
  HeadingWrapper,
  StyledLink,
} from './TodayWrap.styled';

export default function TodayWrap() {
  return (
    <div>
      <HeadingWrapper>
        <h2>Today</h2>
        <StyledLink to="/dashboard">
          On the way to the goal{' '}
          <svg stroke="grey">
            <use href="/healthy_hub/src/assets/icons.svg#icon-arrow-right"></use>
          </svg>
        </StyledLink>
      </HeadingWrapper>
      <StyledContainer>
        <DailyGoal />
        <Water />
        <Food />
      </StyledContainer>
    </div>
  );
}
