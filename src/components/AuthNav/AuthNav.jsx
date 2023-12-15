import { AuthNavLink, SignInBtn, SignUpBtn } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavLink>
      <SignInBtn to="/signin">Sign in</SignInBtn>
      <SignUpBtn to="/signup">Sign up</SignUpBtn>
    </AuthNavLink>
  );
};
