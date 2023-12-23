import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  line-height: 1.4;
  margin-bottom: ${(props) => (props.$valid[props.name] ? '4px' : '0')};
  padding: 8px 10px;
  color: var(--primary-title-text-color);
  border: 1px solid var(--primary-btn-color);
  border: ${(props) => {
    if (props.className && props.value !== '') {
      switch (props.className) {
        case 'correct':
          return '1px solid #3cbc81 ';

        case 'incorrect':
          return '1px solid var(--error-validate-input)';
      }
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

export const InputWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;
