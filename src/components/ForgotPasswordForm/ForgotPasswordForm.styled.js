import styled from 'styled-components';

export const FormStyled = styled.form`
  @media screen and (min-width: 768px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
    max-width: ${(props) => props.$currentStep === 4 && '328px'};
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 auto;
  }
`;