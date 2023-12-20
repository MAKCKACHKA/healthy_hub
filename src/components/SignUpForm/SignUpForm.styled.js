import styled from 'styled-components';

export const GoalFormWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    gap: 16px;
  }
`;

export const LabelStyled = styled.label`
  color: var(--primary-title-text-color);
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
`;

export const GenderAgeRadioBtn = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 24px;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const GenderAgeFormWrapp = styled.div`
  margin-bottom: 40px;
`;

export const SecondaryBtnWropp = styled.div`
  margin: 0 auto;
  margin: ${(props) => props.$currentStep === 4 && '20px auto 0'};
`;

export const ParametrsFormWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const AvtivityFormWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--primary-title-text-color);
`;

export const ActivityBtnWrapp = styled.div`
  @media screen and (min-width: 1200px) {
    width: 212px;
  }
`;
