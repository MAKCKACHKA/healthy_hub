import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

export const ModalBody = styled.div`
  h4 {
    color: var(--primary-title-text-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 8px;
  }
  background-color: var(--bsg-color);
  z-index: 15;
  width: 100vw;
  left: -14px;
  padding: 24px 0px 24px 15px;
  position: fixed;
  top: 0;

  @media screen and (max-width: 833px) {
    height: 100vh;
  }

  @media screen and (min-width: 834px) {
    position: absolute;
    background-color: var(--layout-color);
    width: 392px;
    left: 0;
    top: 74px;
    padding: 20px 24px 40px;
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    border-radius: 12px;
  }
`;
export const CloseBtn = styled.svg`
  display: none;
  position: absolute;
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: var(--primary-title-text-color);
  top: 20px;
  right: 32px;
  transition: stroke 0.3s;

  &:hover {
    stroke: var(--primary-text-color);
  }

  @media screen and (min-width: 834px) {
    display: block;
  }
`;

export const Descriptione = styled.p`
  color: var(--Color-Primary-Grey, #b6b6b6);
  width: 284px;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
`;

export const ModalTitle = styled.h4`
  color: var(--primary-title-text-color);

  font-size: 24px;

  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const ButtonWraperDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const ConfirmBtn = styled.button`
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
  line-height: 1.42;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  @media screen and (min-width: 834px) {
    width: 166px;
  }
`;
export const CancelBtn = styled.button`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 0;
  background: transparent;
  width: 300px;
  height: 36px;
  color: var(--primary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  @media screen and (min-width: 834px) {
    display: none;
    width: 166px;
  }
`;

export const TextInput = styled(Field)`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-btn-color);
  background: transparent;
  color: var(--primary-title-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 300px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (min-width: 834px) {
    width: 166px;
  }
`;

export const YourActivityInput = styled.label`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 12px;
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

export const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  padding: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  border-radius: 12px;
  border: 1px solid var(--dashboard-bcg-color);
  transition:
    border-color 0.3s,
    background 0.3s;

  ${RadioField}:checked + & {
    border-color: var(--water-color);
    background: rgba(255, 255, 255, 0.01);
  }
`;

export const TargetName = styled.p`
  margin: 0;
  color: var(--primary-text-color);
  align-self: center;
  transition: color 0.3s;

  &:hover {
    color: var(--water-color);
  }

  ${RadioField}:checked ~ & {
    color: var(--water-color);
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40px;
`;
export const WeightForm = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`;

export const UserModalBody = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 24px;
  right: 0;
  bottom: -130px;
  gap: 24px;
  width: 158px;
  height: 112px;
  flex-shrink: 0;
  background-color: wheat;
  z-index: 10;

  border-radius: 12px;
  background: var(--secondary-text-color);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
`;
export const ModalLink = styled(Link)`
  width: 86px;
  color: var(--primary-title-text-color);
  stroke: var(--primary-title-text-color);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;

  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    display: flex;
    width: 16px;
    height: 16px;
    justify-content: center;
    align-items: center;
  }

  transition:
    stroke 0.3s,
    color 0.3s;

  &:hover {
    color: var(--primary-text-color);
    stroke: var(--primary-text-color);
  }
`;
export const ModalButton = styled.button`
  width: 86px;
  color: var(--primary-title-text-color);
  stroke: var(--primary-title-text-color);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;

  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: 0;
  padding: 0;

  svg {
    display: flex;
    width: 16px;
    height: 16px;
    justify-content: center;
    align-items: center;
  }

  transition:
    stroke 0.3s,
    color 0.3s;

  &:hover {
    color: var(--primary-text-color);
    stroke: var(--primary-text-color);
  }
`;

export const ModalMenuBody = styled.div`
  width: 95%;
  padding: 24px;
  background-color: var(--layout-color);
  position: absolute;
  z-index: 1;
  top: 65px;
  left: 50%;
  transform: translate(-50%, -0%);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 834px) {
    display: none;
  }
`;

export const LogOutText = styled.h4`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`;
export const ConfirmBtnLogOut = styled.button`
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
  line-height: 1.42;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
export const CancelBtnLogOut = styled.button`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 0;
  background: transparent;
  width: 300px;
  height: 36px;
  color: var(--primary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
