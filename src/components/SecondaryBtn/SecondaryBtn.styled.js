import styled from 'styled-components';

export const SecondaryBtnStyled = styled.button`
  width: 192px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: var(--primary-title-text-color);
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
