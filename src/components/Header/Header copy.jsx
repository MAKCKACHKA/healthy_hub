import {
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
  MobileMenuBtn,
  MobileLogoBtnWrap,
} from './Header.styled';

import looseFatMen from '../../assets/emoji/Lose-fat-men.png';
import maintainMen from '../../assets/emoji/Maintake-men.png';
import looseFatGirl from '../../assets/emoji/Lose-fat-girl.png';
import maintainGirl from '../../assets/emoji/Maintake-girl.png';
import muscle from '../../assets/emoji/Gain-muscle.png';

import icons from '../../assets/icons.svg';
// import { useLocation } from 'react-router-dom';

// import run from '../../assets/emoji/Lose-fat-men.png';
import clap from '../../assets/emoji/Waight.png';
import { TargetModal } from './Modals/TargetModal';
import { useEffect, useState } from 'react';
import { WeightModal } from './Modals/WeightModal';

import { UserModal } from './Modals/UserModal';
import { MenuModal } from './Modals/MenuModal';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selesctors';

export const Header = () => {
  // const location = useLocation();
  // const isSignIn = location.pathname.includes('signin');
  // const isSignUp = location.pathname.includes('signup');

  const isLogedin = useSelector(selectToken);

  const [targetModal, setTargetModal] = useState(false);
  const [weightModal, setWeightModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if ((targetModal || weightModal) && screenWidth < 765) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };
    handleResize();
  }, [targetModal, weightModal]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setTargetModal(false);
        setWeightModal(false);
        setUserModal(false);
        setMenuModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const testInfo = {
    name: 'Konstantin',
    image: '',
    goal: 'Gain Muscle',
    weight: 75,
    date: '05.06.2023',
  };

  const [targetValue, setTargetValue] = useState(testInfo.goal);
  const [weightValue, setWeightValue] = useState(testInfo.weight);

  const gender = 'male';
  const run = gender === 'male' ? looseFatMen : looseFatGirl;
  const maintain = gender === 'male' ? maintainMen : maintainGirl;

  const GoalImg =
    targetValue === 'Gain Muscle'
      ? muscle
      : targetValue === 'Maintain'
      ? maintain
      : run;

  const initialValuesT = {
    target: targetValue,
  };
  const initialValuesW = {
    weight: weightValue,
  };

  return (
    <HeaderContainer2>
      <MobileLogoBtnWrap>
        <LogoLink to="/main">Your health</LogoLink>

        <MobileMenuBtn
          type="button"
          onClick={() => {
            if (menuModal) {
              setMenuModal(false);
            } else {
              setMenuModal(true);
            }
          }}
        >
          <svg>
            <use href={`${icons}#icon-menu`} />
          </svg>
          {/* <img src={menu} alt="Goal" /> */}
        </MobileMenuBtn>
      </MobileLogoBtnWrap>
      <FunctionPanel>
        <ControlPanel>
          <InfoContainer
            onClick={() => {
              setTargetModal(true);
              setWeightModal(false);
              setUserModal(false);
            }}
          >
            <ImageWrapper>
              <img src={GoalImg} alt="Goal" />
            </ImageWrapper>
            <TextContainer>
              <p>Goal</p>
              <EditableText>
                {targetValue}
                <DropIcon>
                  <use href={`${icons}#icon-arrow-down`} />
                </DropIcon>
              </EditableText>
            </TextContainer>
          </InfoContainer>
          <InfoContainer
            onClick={() => {
              setWeightModal(true);
              setTargetModal(false);
              setUserModal(false);
            }}
          >
            <ImageWrapper>
              <div>
                <img src={clap} alt="Clapping hands" />
              </div>
            </ImageWrapper>
            <TextContainer>
              <p>Weight</p>
              <EditableText>
                {weightValue} <KgSpan>kg</KgSpan>
                <EditIcon>
                  <use href={`${icons}#icon-edit`} />
                </EditIcon>
              </EditableText>
            </TextContainer>
          </InfoContainer>
          {targetModal && (
            <TargetModal
              setTargetModal={setTargetModal}
              run={run}
              maintain={maintain}
              muscle={muscle}
              setTargetValue={setTargetValue}
              initialValues={initialValuesT}
            />
          )}
          {weightModal && (
            <WeightModal
              setWeightModal={setWeightModal}
              initialValues={initialValuesW}
              setWeightValue={setWeightValue}
            />
          )}
        </ControlPanel>
        <AvatarContainer
          onClick={() => {
            setTargetModal(false);
            setWeightModal(false);
            setMenuModal(false);
            if (userModal) {
              setUserModal(false);
            } else {
              setUserModal(true);
            }
          }}
        >
          <p>{testInfo.name}</p>
          <AvatarIcon>
            <use href={`${icons}#icon-profile-circle`} />
          </AvatarIcon>
          <DropIcon>
            <use href={`${icons}#icon-arrow-down`} />
          </DropIcon>
          {userModal && <UserModal />}
        </AvatarContainer>
        {menuModal && (
          <MenuModal setMenuModal={setMenuModal}>
            {targetModal && (
              <TargetModal
                setTargetModal={setTargetModal}
                run={run}
                maintain={maintain}
                muscle={muscle}
                setTargetValue={setTargetValue}
                initialValues={initialValuesT}
              />
            )}
            {weightModal && (
              <WeightModal
                setWeightModal={setWeightModal}
                initialValues={initialValuesW}
                setWeightValue={setWeightValue}
              />
            )}
            <InfoContainer
              onClick={() => {
                setTargetModal(true);
                setWeightModal(false);
                setUserModal(false);
              }}
            >
              <ImageWrapper>
                <img src={GoalImg} alt="Goal" />
              </ImageWrapper>
              <TextContainer>
                <p>Goal</p>
                <EditableText>
                  {targetValue}
                  <DropIcon>
                    <use href={`${icons}#icon-arrow-right`} />
                  </DropIcon>
                </EditableText>
              </TextContainer>
            </InfoContainer>
            <InfoContainer
              onClick={() => {
                setWeightModal(true);
                setTargetModal(false);
                setUserModal(false);
              }}
            >
              <ImageWrapper>
                <div>
                  <img src={clap} alt="Clapping hands" />
                </div>
              </ImageWrapper>
              <TextContainer>
                <p>Weight</p>
                <EditableText>
                  {weightValue} <KgSpan>kg</KgSpan>
                  <EditIcon>
                    <use href={`${icons}#icon-edit`} />
                  </EditIcon>
                </EditableText>
              </TextContainer>
            </InfoContainer>
          </MenuModal>
        )}
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
