import styled from 'styled-components';
import { Field } from 'formik';

export const ModalBody = styled.div`
  width: 392px;
  height: 352px;
  background-color: var(--layout-color);
  position: absolute;
  z-index: 1;
  top: 74px;
`;

export const ModalTitle = styled.h4`
  color: var(--primary-title-text-color);

  font-size: 24px;

  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const ButtonWraperDown = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 40px;
  /* @media screen and (min-width: 768px) {
    display: none;
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
  width: 300px;
  height: 36px;
  color: var(--secondary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  /* line-height: 1.42; */

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`;

export const FormInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 40px;
  column-gap: 60px;
  max-width: 300px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    max-width: 490px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

export const TextInput = styled(Field)`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-text-color);
  background: transparent;
  color: var(--primary-title-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 100%;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const YourActivityInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
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

  ${RadioField}:checked + & > span {
    background-color: var(--primary-btn-color);
  }
`;
