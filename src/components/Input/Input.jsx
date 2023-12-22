import { InputStyled } from './Input.styled';

export const Input = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  valid,
}) => {
  return (
    <InputStyled
      autoComplete="off"
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      $valid={valid}
    />
  );
};
