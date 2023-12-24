import icons from '../../../assets/icons.svg';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 864px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

const GoalContainer = styled.div`
  margin-left: 0;

  @media (min-width: 864px) {
    margin-left: 104px;
  }
`;

const YourGoalTitle = styled.p`
  font-size: 30px;
  color: var(--primary-title-text-color);
  padding-bottom: 16px;
`;

const OtherText = styled.p`
  font-size: 22px;
  color: var(--primary-text-color);
  width: 100%; /* Adjust as needed */
  max-width: 444px;
  padding-bottom: 24px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  gap: 8px;
`;

const RadioInput = styled(Field)`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

const CustomRadio = styled.span`
  box-sizing: border-box;
  min-width: 12px;
  height: 12px;
  border: 1px solid var(--primary-text-color);
  position: relative;
  cursor: pointer;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: transparent;
    transition:
      background-color 0.3s,
      border-color 0.3s;
    position: relative;
  }

  ${RadioInput}:checked + & > span {
    background-color: var(--primary-btn-color);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NextButton = styled.button`
  background-color: var(--primary-btn-color);
  color: var(--secondary-text-color);
  width: 212px;
  height: 36px;
  padding: 8px 10px;
  gap: 10px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
`;

const BackButton = styled.button`
  color: var(--primary-text-color);
  width: 192px;
  font-weight: 400;
  height: 20px;
  background: transparent;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const YourGoal = () => {
  const handleNextPage = (values) => {
    console.log('Selected Goal:', values.selectedGoal);
  };

  const handleBack = () => {
    console.log('Back clicked');
  };

  return (
    <Container>
      <svg style={{ stroke: 'var(--colories-graf-color)' }}>
        <use href={`${icons}#icon-bubble`} />
      </svg>
      <GoalContainer>
        <Formik initialValues={{ selectedGoal: '' }} onSubmit={handleNextPage}>
          {() => (
            <Form>
              <YourGoalTitle>YourGoal</YourGoalTitle>
              <OtherText>Choose a goal so that we can help you effectively</OtherText>

              <RadioLabel>
                <RadioInput type="radio" name="selectedGoal" value="loseFat" />
                <CustomRadio>
                  <span></span>
                </CustomRadio>
                Lose Fat
              </RadioLabel>

              <RadioLabel>
                <RadioInput type="radio" name="selectedGoal" value="maintain" />
                <CustomRadio>
                  <span></span>
                </CustomRadio>
                Maintain
              </RadioLabel>

              <RadioLabel>
                <RadioInput type="radio" name="selectedGoal" value="gainMuscle" />
                <CustomRadio>
                  <span></span>
                </CustomRadio>
                Gain Muscle
              </RadioLabel>

              <ButtonContainer>
                <NextButton type="submit" className="btn-next">
                  Next Page
                </NextButton>
                <BackButton type="button" onClick={handleBack} className="btn-back">
                  Back
                </BackButton>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </GoalContainer>
    </Container>
  );
};

export default YourGoal;