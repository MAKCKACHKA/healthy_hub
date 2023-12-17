import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  line-height: 1.4;
  margin-bottom: ${(props) => (props.$valid[props.name] ? '4px' : '0')};
  padding: 8px 10px;
  color: var(--primary-title-text-color);
  border: 1px solid var(--primary-btn-color);
  border: ${(props) => {
    if (props.$valid && props.$touched !== undefined) {
      return props.$valid[props.name] && props.$touched[props.name]
        ? '1px solid var(--error-validate-input)'
        : '1px solid var(--primary-btn-color)';
    }
  }};
  border-radius: 12px;
  background-color: transparent;

  &::placeholder {
    margin-left: 10px;
    color: var(--primary-text-color);
  }

  &:focus-visible {
    outline: none;
  }
`;

// props.$valid[props.name] && props.$touched[props.name]
//   ? '1px solid var(--error-validate-input)'
// : '1px solid var(--primary-btn-color)'
