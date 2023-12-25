import styled from 'styled-components';

export const GoalFormWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const InputIconErrorWrapp = styled.div`
  position: relative;
  &:hover button {
    opacity: 1;
  }
  &:hover svg[id='password'] {
    opacity: 0;
  }
`;

export const SvgIcon = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 1;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  padding: 0;
  background-color: transparent;
  border: none;
  opacity: 0;
`;
