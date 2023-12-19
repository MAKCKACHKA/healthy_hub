import {
  Container,
  Heading,
  FullFrame,
  Cont,
  StyledName,
  StyledValue,
} from './DailyGoal.styled';

export default function DailyGoal() {
  return (
    <Container>
      <Heading>Daily Goal</Heading>
      <FullFrame>
        <Cont>
          <svg style={{ stroke: 'var(--colories-graf-color)' }}>
            <use href="/healthy_hub/src/assets/icons.svg#icon-bubble"></use>
          </svg>
          <div>
            <StyledName>Calories</StyledName>
            <StyledValue>1700</StyledValue>
          </div>
        </Cont>
        <Cont>
          <svg style={{ stroke: 'var(--water-color)' }}>
            <use href="/healthy_hub/src/assets/icons.svg#icon-milk"></use>
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
