import {
  HeaderContainer2,
  LogoLink,
  AvatarIcon,
  NavLink,
} from '../Header.styled';
import { NonAuthNav } from '../Header.styled';

import icons from '../../../assets/icons.svg';
import { useLocation } from 'react-router-dom';

export const HeaderNotAuth = () => {
  const location = useLocation();
  const isSignIn = location.pathname.includes('signin');
  const isSignUp = location.pathname.includes('signup');

  return (
    <HeaderContainer2>
      <LogoLink to="/welcome">HealthyHub</LogoLink>

      <NonAuthNav>
        {isSignIn ? (
          <NavLink style={{ color: '#E3FFA8' }} to="/signin">
            Sign in
          </NavLink>
        ) : (
          <NavLink to="/signin">Sign in</NavLink>
        )}
        <span> / </span>
        {isSignUp ? (
          <NavLink style={{ color: '#E3FFA8' }} to="/signup">
            Sign up
          </NavLink>
        ) : (
          <NavLink to="/signup">Sign up</NavLink>
        )}
        <AvatarIcon>
          <use href={`${icons}#icon-profile-circle`} />
        </AvatarIcon>
      </NonAuthNav>
    </HeaderContainer2>
  );
};
