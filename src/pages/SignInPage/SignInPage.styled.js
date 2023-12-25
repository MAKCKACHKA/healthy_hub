import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignInSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 24px;
  margin-top: 24px;
  @media screen and (min-width: 834px) {
    gap: 80px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    max-width: 100%;
    margin: 40px 0 72px;
  }
`;

export const ForgotPassLink = styled(Link)`
  display: block;
  text-align: center;
  color: inherit;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-left: 25px;
  }
`;

export const TextPartWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 56px;

  @media screen and (min-width: 834px) {
    width: 444px;
    gap: 222px;
  }

  @media screen and (min-width: 1440px) {
    gap: 0;
    padding-top: 80px;
  }
`;

export const BodyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    width: 444px;
  }

  @media screen and (min-width: 1440px) {
    align-content: normal;
  }
`;
