import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavLink = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    margin: 0 auto 80px;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    justify-content: left;
  }
`;

export const SignInBtn = styled(Link)`
  width: 142px;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`;

export const SignUpBtn = styled(Link)`
  width: 122px;
  padding: 8px 10px;
  text-align: center;
  color: var(--primary-title-text-color);
`;
