import {
  HeaderContainer,
  Navigation,
  StyledLink,
  // IconWrapper,
} from './Header.styled';
// import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/welcome">
          {/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */}
          WelcomePage
        </StyledLink>
        <StyledLink to="/signup">SignUpPage</StyledLink>
        <StyledLink to="/signin">SignInPage</StyledLink>
        <StyledLink to="/forgot-password">ForgotPasswordPage</StyledLink>

        <StyledLink to="/your-goal">YourGoalPage</StyledLink>
        <StyledLink to="/select-gender">SelectGenderPage</StyledLink>
        <StyledLink to="/body-parameters">BodyParameters</StyledLink>
        <StyledLink to="/your-activity">YourActivityPage</StyledLink>

        <StyledLink to="/main">MainPage</StyledLink>
        <StyledLink to="/dashboard">DashboardPage</StyledLink>
        <StyledLink to="/diary">DiaryPage</StyledLink>
        <StyledLink to="/recommended-food">RecommendedFoodPage</StyledLink>
        <StyledLink to="/settings">SettingsPage</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
