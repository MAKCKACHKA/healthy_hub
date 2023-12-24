import styled from 'styled-components';

export const FormStyled = styled.form`
  @media screen and (min-width: 864px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 212px;
    max-width: ${(props) => props.$currentStep === 4 && '328px'};
  }

  @media screen and (min-width: 864px) and (max-width: 1439px) {
    margin: 0 auto;
  }
`;
