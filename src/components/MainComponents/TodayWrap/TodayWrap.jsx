import DailyGoal from '../Daily goal/DailyGoal';
import Water from '../Water/Water';
import Food from '../Food/Food';
import {
  StyledContainer,
  HeadingWrapper,
  StyledLink,
} from './TodayWrap.styled';
import icons from '../../../assets/icons.svg';

export default function TodayWrap() {
  return (
    <div>
      <HeadingWrapper>
        <h2>Today</h2>
        <StyledLink to="/dashboard">
          On the way to the goal
          <svg>
            <use href={`${icons}#icon-arrow-right`} />
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
