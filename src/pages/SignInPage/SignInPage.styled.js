import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignInSection = styled.section`
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 100%;
    margin: 40px 0 72px 150px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ForgotPassLink = styled(Link)`
  display: block;
  text-align: center;
  margin-bottom: 54px;
  color: inherit;

  @media screen and (min-width: 768px) {
    margin-bottom: 222px;
  }

  @media screen and (min-width: 1200px) {
    text-align: start;
    margin-left: 25px;
    margin-bottom: 184px;
  }
`;

export const TextPartWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    margin-left: 104px;
    padding-top: 80px;
  }
`;
