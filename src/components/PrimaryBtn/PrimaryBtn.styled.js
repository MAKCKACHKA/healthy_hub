import styled from 'styled-components';

export const PrimaryBtnStyled = styled.button`
  width: 100%;
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
