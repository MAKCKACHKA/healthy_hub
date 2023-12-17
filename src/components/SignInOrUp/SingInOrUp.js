import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SingInOrUpWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const SingInOrUpLink = styled(Link)`
  font-weight: 500;
  color: var(--primary-title-text-color);
`;
