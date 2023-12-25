import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SingInOrUpWrap = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 833px) {
    ${(prop) => prop.$flexDirectionColumn && 'flex-direction: column;'}
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin-left: 32px;
  }
`;

export const SingInOrUpLink = styled(Link)`
  font-weight: 500;
  color: var(--primary-title-text-color);
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
