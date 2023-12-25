import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 708px;
  min-height: 558px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 8px;
  transform: translate(-50%, -50%) scale(1);
  transition:
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 300ms;

  @media screen and (max-width: 833px) {
    width: 90%;
    padding: 24px;
  }
`;

export const ModalTitle = styled.h1`
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  color: #fff;

  @media screen and (max-width: 833px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const WrapperFormTitle = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;
export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  color: #fff;

  @media screen and (max-width: 833px) {
    font-size: 1.125rem;
    line-height: 32px;
  }
`;

export const FormFormic = styled.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ContentWrapper = styled.div`
  max-height: 352px;
  margin-bottom: 16px;
  overflow-y: auto;

  @media screen and (max-width: 833px) {
  }
`;

export const ProductList = styled.ul`
  padding: 10px;
  overflow-y: auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 833px) {
    height: calc(100% - 44px);
    gap: 24px;
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: 8px;
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }
`;

export const Product = styled.li`
  & > div:nth-child(-n + 3) {
    margin-bottom: 0;
  }
  margin-bottom: 12px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 38.15% 15.26% 13.12% 9.3% 11.94% 3.05%;
  align-items: center;

  & > div:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  & > div:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  & > div:nth-child(3) {
    grid-column-start: 3;
    grid-column-end: 4;
  }

  @media screen and (max-width: 833px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    & > div:nth-child(-n + 3) {
      flex-basis: 100%;
      margin-bottom: 16px;
    }

    & > div:nth-last-child(-n + 3) {
      flex-basis: calc(40.48%);
    }
  }
`;

export const Input = styled.input`
  padding: 8px 10px;
  width: 100%;
  border: 1px solid var(--primary-btn-color);
  border-radius: 12px;
  background-color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #fff;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--primary-text-color);
    font-size: 14px;
    line-height: 1.42;
  }
`;

export const BtnAddNewProduct = styled.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--primary-btn-color);
  cursor: pointer;
`;

export const BtnRemoveProduct = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ContainerForBtns = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 833px) {
    flex-direction: row-reverse;
  }
`;

export const BtnConfirm = styled.button`
  padding: 8px 10px;
  width: 212px;
  background-color: var(--primary-btn-color);
  color: #000;
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  @media screen and (max-width: 833px) {
    width: 212px;
  }
`;

export const BtnCancel = styled.button`
  padding: 8px 10px;
  width: 416px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #808080;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary-btn-color);
  }

  @media screen and (max-width: 833px) {
    width: 212px;
  }
`;
