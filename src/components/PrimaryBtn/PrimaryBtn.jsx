import { PrimaryBtnStyled } from './PrimaryBtn.styled';

export const PrimaryBtn = ({ type = 'submit', text, onClick = null }) => {
  return (
    <PrimaryBtnStyled type={type} onClick={onClick}>
      {text}
    </PrimaryBtnStyled>
  );
};
