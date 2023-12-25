import styled from 'styled-components';
import { Field } from 'formik';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 864px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Title = styled.h1`
  color: var(--primary-title-text-color);

  font-size: 24px;

  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 864px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const ButtonWraper = styled.div`
  display: none;
  @media screen and (min-width: 864px) {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-right: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 45px;
  }
`;
export const ButtonWraperDown = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 40px;
  @media screen and (min-width: 864px) {
    display: none;
  }
`;
export const CancelBtn = styled.button`
  width: 300px;
  background-color: transparent;
  border: 0;
  color: var(--primary-text-color);
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;

  @media screen and (min-width: 864px) {
    width: 212px;
  }
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

  @media screen and (min-width: 864px) {
    width: 212px;
  }
`;

export const IconWrapper = styled.svg`
  display: inline-block;
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 864px) {
    width: 380px;
    height: 374px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 528px;
  }
`;
export const WrapImgAndForm = styled.div`
  flex-direction: column;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
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
  @media screen and (min-width: 864px) {
    max-width: 490px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 864px) {
    width: 212px;
  }
`;
export const LabelImg = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 864px) {
    width: 218px;
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

export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-text-color);
`;
export const YourActivityInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 20px;

  & > ${RadioLabel} {
    margin-top: 12px;
  }

  & > ${RadioLabel}:not(:first-child) {
    margin-top: 20px;
  }
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

export const GenderRadios = styled.div`
  display: flex;
  gap: 12px;
`;

export const FileInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`;
export const AvatarIcon = styled.svg`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  stroke: var(--primary-title-text-color);
`;

export const UploadWrap = styled.div`
  position: relative;
  display: flex;
  column-gap: 6px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 100%;
  height: 100%;
`;

export const ImageInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &::-webkit-file-upload-button {
    display: none;
  }
`;

export const UploadIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primary-btn-color);
`;
