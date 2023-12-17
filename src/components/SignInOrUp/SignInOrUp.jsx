import { SingInOrUpLink, SingInOrUpWrap } from './SingInOrUp';

export const SignInOrUp = ({ descriptionText, linkText, to }) => {
  return (
    <SingInOrUpWrap>
      <p>{descriptionText}</p>
      <SingInOrUpLink to={to}>{linkText}</SingInOrUpLink>
    </SingInOrUpWrap>
  );
};
