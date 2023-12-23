import styled from 'styled-components';

export const SingInFormStyled = styled.form`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    max-width: 380px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ErrorMessageInput = styled.div`
  font-size: 12px;
  line-height: 1.2;
  margin-left: 10px;
  color: var(--error-validate-input);
`;