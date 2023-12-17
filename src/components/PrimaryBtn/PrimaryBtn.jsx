import { PrimaryBtnStyled } from './PrimaryBtn.styled';

export const PrimaryBtn = ({ type='submit', text }) => {
  return <PrimaryBtnStyled type={type}>{text}</PrimaryBtnStyled>;
};