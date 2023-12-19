import {
  Container,
  Heading,
  FullFrame,
  Cont,
  StyledName,
  StyledValue,
} from './DailyGoal.styled';
import icons from '../../../assets/icons.svg';

export default function DailyGoal() {
  return (
    <Container>
      <Heading>Daily Goal</Heading>
      <FullFrame>
        <Cont>
          <svg style={{ stroke: 'var(--colories-graf-color)' }}>
            <use href={`${icons}#icon-bubble`} />
          </svg>
          <div>
            <StyledName>Calories</StyledName>
            <StyledValue>1700</StyledValue>
          </div>
        </Cont>
        <Cont>
          <svg style={{ stroke: 'var(--water-color)' }}>
            <use href={`${icons}#icon-milk`} />
          </svg>
          <div>
            <StyledName>Water</StyledName>
            <StyledValue>
              1500 <span>ml</span>
            </StyledValue>
          </div>
        </Cont>
      </FullFrame>
    </Container>
  );
}
