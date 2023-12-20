import { CustomSpan, RadioBtnLabel, RadioInput } from './RadioBtn.styled';

export const RadioBtn = ({
  name,
  value,
  labelText,
  onChange,
  defaultChecked,
}) => {
  return (
    <RadioBtnLabel>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <CustomSpan>
        <span></span>
      </CustomSpan>
      {labelText}
    </RadioBtnLabel>
  );
};
