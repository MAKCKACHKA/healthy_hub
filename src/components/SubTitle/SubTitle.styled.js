import styled from 'styled-components';

export const SubTitleStyled = styled.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;

  @media screen and (min-width: 864px) {
    font-size: 21px;
    line-height: 1.45;
  }

  @media screen and (min-width: 864px) and (max-width: 1439px) {
    text-align: center;
  }
`;
