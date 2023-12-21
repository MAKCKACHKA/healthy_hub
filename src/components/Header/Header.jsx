import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selesctors';
import { HeaderAuth } from './HeaderVariables/HeaderAuth';
import { HeaderNotAuth } from './HeaderVariables/HeaderNotAuth';
import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  const isLogedin = useSelector(selectToken);
  return (
    <>
      {isLogedin ? <HeaderAuth /> : <HeaderNotAuth />}
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/welcome">WelcomePage</StyledLink>
          <StyledLink to="/signup">SignUpPage</StyledLink>
          <StyledLink to="/signin">SignInPage</StyledLink>
          <StyledLink to="/forgot-password">ForgotPasswordPage</StyledLink>

          <StyledLink to="/set-params">SetParamsPage</StyledLink>

          <StyledLink to="/main">MainPage</StyledLink>
          <StyledLink to="/dashboard">DashboardPage</StyledLink>
          <StyledLink to="/diary">DiaryPage</StyledLink>
          <StyledLink to="/recommended-food">RecommendedFoodPage</StyledLink>
          <StyledLink to="/settings">SettingsPage</StyledLink>
        </Navigation>
      </HeaderContainer>
    </>
  );
};
