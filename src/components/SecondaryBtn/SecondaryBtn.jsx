import { SecondaryBtnStyled } from './SecondaryBtn.styled';

export const SecondaryBtn = ({ type = 'submit', text, onClick = null }) => {
  return (
    <SecondaryBtnStyled type={type} onClick={onClick}>
      {text}
    </SecondaryBtnStyled>
  );
};
