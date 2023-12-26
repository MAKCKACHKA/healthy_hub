import styled from 'styled-components';

export const Heading = styled.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`;

export const FullFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 864px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 40px;
  }
`;

export const IntakeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background: var(--primary-btn-color);
  border: none;
  outline: none;
  padding: 8px 10px;
  width: 166px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  svg {
    height: 16px;
    width: 16px;
    stroke: #0f0f0f;
  }
`;

export const SubHeading = styled.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`;

export const Value = styled.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LeftValue = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`;

export const Info = styled.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 864px) {
    flex-grow: 2;
  }
`;

export const DeleteButton = styled.svg`
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  width: 262px;
  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const ModalHeading = styled.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`;

export const ModalForm = styled.form`
  label {
    display: flex;
    flex-direction: column;
    color: var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 32px;
  }

  button {
    border-radius: 12px;
    background: var(--primary-btn-color);
    color: var(--secondary-text-color);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 16px;
    padding: 8px 10px;
    transition: opacity 0.2s;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;

export const StyledInput = styled.input`
  margin-top: 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${(props) => props.$borderColor};
  border-radius: 12px;
  padding: 8px 10px;
  color: #fff;
  height: 36px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  &::placeholder {
    color: var(--Color-Primary-Grey, #b6b6b6);
    font-size: 14px;

    line-height: 1.42;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`;

export const CancelModal = styled.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
