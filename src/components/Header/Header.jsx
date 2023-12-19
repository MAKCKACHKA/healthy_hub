import {
  // Navigation,
  // StyledLink,
  // HeaderContainer,
  // NonAuthNav,
  // NavLink,
  HeaderContainer2,
  LogoLink,
  AvatarIcon,
  DropIcon,
  EditIcon,
  ControlPanel,
  InfoContainer,
  ImageWrapper,
  TextContainer,
  EditableText,
  AvatarContainer,
  FunctionPanel,
  KgSpan,
} from './Header.styled';
// import sprite from 'assets/sprite.svg';
import icons from '../../assets/icons.svg';
// import { useLocation } from 'react-router-dom';

import run from '../../assets/emoji/run.png';
import clap from '../../assets/emoji/clap.png';

export const Header = () => {
  // const location = useLocation();
  // const isSignIn = location.pathname.includes('signin');
  // const isSignUp = location.pathname.includes('signup');

  const testInfo = {
    name: 'Konstantin',
    image: '',
    goal: 'Gain Muscle',
    weight: 75,
    date: '05.06.2023',
  };

  return (
    <HeaderContainer2>
      <LogoLink to="/main">Your health</LogoLink>
      <FunctionPanel>
        <ControlPanel>
          <InfoContainer>
            <ImageWrapper>
              <img src={run} alt="Running" />
            </ImageWrapper>
            <TextContainer>
              <p>Goal</p>
              <EditableText>
                {testInfo.goal}
                <DropIcon>
                  <use href={`${icons}#icon-arrow-down`} />
                </DropIcon>
              </EditableText>
            </TextContainer>
          </InfoContainer>
          <InfoContainer>
            <ImageWrapper>
              <div>
                <img src={clap} alt="Clapping hands" />
              </div>
            </ImageWrapper>
            <TextContainer>
              <p>Weight</p>
              <EditableText>
                {testInfo.weight} <KgSpan>kg</KgSpan>
                <EditIcon>
                  <use href={`${icons}#icon-edit`} />
                </EditIcon>
              </EditableText>
            </TextContainer>
          </InfoContainer>
          <div className="SSSSS">
            <h4>Target selection</h4>
            <p>The service will adjust your calorie intake to your goal</p>
            <ul>
              <li>
                <ImageWrapper>
                  <img src={run} alt="Running" />
                </ImageWrapper>
                <p>Lose fat</p>
              </li>
              <li>
                <ImageWrapper>
                  <img src={run} alt="Running" />
                </ImageWrapper>
                <p>Maintain</p>
              </li>
              <li>
                <ImageWrapper>
                  <img src={run} alt="Running" />
                </ImageWrapper>
                <p>Gain Muscle</p>
              </li>
            </ul>
          </div>
        </ControlPanel>
        <AvatarContainer>
          <p>{testInfo.name}</p>
          <AvatarIcon>
            <use href={`${icons}#icon-profile-circle`} />
          </AvatarIcon>
          <DropIcon>
            <use href={`${icons}#icon-arrow-down`} />
          </DropIcon>
        </AvatarContainer>
      </FunctionPanel>
    </HeaderContainer2>
    // <HeaderContainer2>
    //   {isSignUp ? (
    //     <LogoLink to="/welcome">Your health</LogoLink>
    //   ) : (
    //     <LogoLink to="/welcome">HealthyHub</LogoLink>
    //   )}
    //   <NonAuthNav>
    //     {isSignIn ? (
    //       <NavLink style={{ color: '#E3FFA8' }} to="/signin">
    //         Sign in
    //       </NavLink>
    //     ) : (
    //       <NavLink to="/signin">Sign in</NavLink>
    //     )}
    //     <span> / </span>
    //     {isSignUp ? (
    //       <NavLink style={{ color: '#E3FFA8' }} to="/signup">
    //         Sign up
    //       </NavLink>
    //     ) : (
    //       <NavLink to="/signup">Sign up</NavLink>
    //     )}{' '}
    //     <AvatarIcon>
    //       <use href={`${icons}#icon-profile-circle`} />
    //     </AvatarIcon>
    //   </NonAuthNav>
    //   {/* <HeaderContainer>
    //     <Navigation>
    //     <StyledLink to="/welcome">WelcomePage</StyledLink>
    //     <StyledLink to="/signup">SignUpPage</StyledLink>
    //     <StyledLink to="/signin">SignInPage</StyledLink>
    //     <StyledLink to="/forgot-password">ForgotPasswordPage</StyledLink>

    //     <StyledLink to="/set-params">SetParamsPage</StyledLink>

    //     <StyledLink to="/main">MainPage</StyledLink>
    //     <StyledLink to="/dashboard">DashboardPage</StyledLink>
    //     <StyledLink to="/diary">DiaryPage</StyledLink>
    //     <StyledLink to="/recommended-food">RecommendedFoodPage</StyledLink>
    //     <StyledLink to="/settings">SettingsPage</StyledLink>
    //   </Navigation>
    //   </HeaderContainer> */}
    // </HeaderContainer2>
  );
};
