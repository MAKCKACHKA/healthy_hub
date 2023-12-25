import styled from 'styled-components';

export const SingInFormStyled = styled.form`
  margin-bottom: 14px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const ErrorMessageInput = styled.div`
  font-size: 12px;
  line-height: 1.2;
  margin-left: 10px;
  color: var(--error-validate-input);
`;
