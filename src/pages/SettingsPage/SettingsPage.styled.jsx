import styled from 'styled-components';
import { Field } from 'formik';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 16px; */
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: var(--primary-title-text-color);

  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;

  /* @media screen and (min-width: 768px) {
    margin: 0 auto 80px;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    justify-content: left;
  } */
`;

export const ButtonWraper = styled.div`
  display: flex;
  gap: 12px;

  /* @media screen and (min-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    justify-content: left;
  } */
`;

export const CancelBtn = styled.button`
  width: 192px;
  background-color: transparent;
  border: 0;
  color: var(--primary-text-color);
  text-align: center;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;

  /* @media screen and (min-width: 768px) {
    width: 212px;
  } */
`;

export const SaveBtn = styled.button`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--primary-btn-color);
  width: 212px;
  height: 36px;

  color: var(--secondary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
`;

export const IconWrapper = styled.svg`
  width: 536px;
  height: 528px;
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  /* margin-right: 5px; */
`;
export const WrapImgAndForm = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: flex-start; */
  /* gap: 40px; */
  justify-content: space-around;
`;

export const FormInputs = styled.div`
  max-width: 570px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 40px;
  column-gap: 60px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
`;

export const TextInput = styled(Field)`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-text-color);
  background: var(--layout-color);
  color: var(--primary-title-text-color, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;

export const YourActivityInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-text-color);
`;
export const RadioField = styled(Field)`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;
export const CustomRadio = styled.span`
  width: 12px;
  height: 12px;
  border: 1px solid var(--primary-text-color);
  position: relative;
  cursor: pointer;
  border-radius: 50%;

  &::after {
    content: '';
    width: 7px;
    height: 6px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }
  ${RadioField}:checked + &::after {
    background-color: green;
  }
`;
