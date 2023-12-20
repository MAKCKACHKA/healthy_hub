import { SingInOrUpLink, SingInOrUpWrap } from './SingInOrUp';

export const SignInOrUp = ({
  descriptionText,
  linkText,
  to,
  flexDirectionColumn,
}) => {
  return (
    <SingInOrUpWrap $flexDirectionColumn={flexDirectionColumn}>
      <p>{descriptionText}</p>
      <SingInOrUpLink to={to}>{linkText}</SingInOrUpLink>
    </SingInOrUpWrap>
  );
};
