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
  AvatarImage,
  OverlayContainer,
} from '../Header.styled';

import looseFatMen from '../../../assets/emoji/Lose-fat-men.png';
import maintainMen from '../../../assets/emoji/Maintake-men.png';
import looseFatGirl from '../../../assets/emoji/Lose-fat-girl.png';
import maintainGirl from '../../../assets/emoji/Maintake-girl.png';
import muscle from '../../../assets/emoji/Gain-muscle.png';

import icons from '../../../assets/icons.svg';
import clap from '../../../assets/emoji/Waight.png';

import { useEffect, useState } from 'react';
import { GoalModal } from '../Modals/GoalModal';
import { WeightModal } from '../Modals/WeightModal';

import { UserModal } from '../Modals/UserModal';
import { MenuModal } from '../Modals/MenuModal';
import { LogOutModal } from '../Modals/LogoutModal';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/selesctors';

export const HeaderAuth = () => {
  const [goalModal, setGoalModal] = useState(false);
  const [weightModal, setWeightModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [overlay, setOverlay] = useState(false);
  const [linked, setLinked] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      setIsOpen(true);
      setOverlay(false);
    }
    if (linked) {
      setOverlay(false);
    }
  }, [modalIsOpen, overlay, linked]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if ((goalModal || weightModal) && screenWidth < 834) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };
    handleResize();
  }, [goalModal, weightModal]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setGoalModal(false);
        setWeightModal(false);
        setUserModal(false);
        setMenuModal(false);
        setOverlay(false);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const { user } = useSelector(selectUserData);

  const testInfo = {
    name: user ? user.name : '',
    image: user ? user.avatarURL : '',
    goal: user ? user.goal : 'lose fat',
    weight: user ? user.weight : 0,
  };

  const [goalValue, setGoalValue] = useState(testInfo.goal);
  const [weightValue, setWeightValue] = useState(testInfo.weight);

  const gender = user ? user.gender : 'male' || 'female';
  const run = gender === 'male' ? looseFatMen : looseFatGirl;
  const maintain = gender === 'male' ? maintainMen : maintainGirl;

  const GoalImg =
    goalValue === 'gain muscle'
      ? muscle
      : goalValue === 'maintain'
      ? maintain
      : run;

  useEffect(() => {
    if (user && user.goal) {
      setGoalValue(user.goal);
      setWeightValue(user.weight);
    }
  }, [user]);

  const initialValuesT = {
    goal: goalValue,
  };
  const initialValuesW = {
    weight: weightValue,
  };

  return (
    <HeaderContainer2>
      <OverlayContainer
        style={overlay ? { display: 'block' } : { display: 'none' }}
        onClick={() => {
          setOverlay(false);
          setGoalModal(false);
          setWeightModal(false);
          setUserModal(false);
          setMenuModal(false);
        }}
      />
      <LogOutModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

      <MobileLogoBtnWrap>
        <LogoLink to="/main">HealthyHub</LogoLink>

        <MobileMenuBtn
          type="button"
          onClick={() => {
            if (menuModal) {
              setMenuModal(false);
            } else {
              setMenuModal(true);
            }
            setOverlay(true);
          }}
        >
          <svg>
            <use href={`${icons}#icon-menu`} />
          </svg>
        </MobileMenuBtn>
      </MobileLogoBtnWrap>
      {user && (
        <FunctionPanel>
          <ControlPanel>
            <InfoContainer
              onClick={() => {
                setGoalModal(true);
                setWeightModal(false);
                setUserModal(false);
                setOverlay(true);
              }}
            >
              <ImageWrapper>
                <img src={GoalImg} alt="Goal" />
              </ImageWrapper>
              <TextContainer>
                <p>Goal</p>
                <EditableText>
                  {goalValue}
                  <DropIcon>
                    <use href={`${icons}#icon-arrow-down`} />
                  </DropIcon>
                </EditableText>
              </TextContainer>
            </InfoContainer>
            <InfoContainer
              onClick={() => {
                setWeightModal(true);
                setGoalModal(false);
                setUserModal(false);
                setOverlay(true);
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
            {goalModal && (
              <GoalModal
                setMenuModal={setMenuModal}
                setGoalModal={setGoalModal}
                run={run}
                maintain={maintain}
                muscle={muscle}
                setGoalValue={setGoalValue}
                initialValues={initialValuesT}
                setOverlay={setOverlay}
              />
            )}
            {weightModal && (
              <WeightModal
                setMenuModal={setMenuModal}
                setWeightModal={setWeightModal}
                initialValues={initialValuesW}
                setWeightValue={setWeightValue}
                setOverlay={setOverlay}
              />
            )}
          </ControlPanel>
          <AvatarContainer
            onClick={() => {
              setGoalModal(false);
              setWeightModal(false);
              setMenuModal(false);
              if (userModal) {
                setUserModal(false);
              } else {
                setUserModal(true);
              }
              setOverlay(true);
            }}
          >
            <p>{testInfo.name}</p>
            {testInfo.image === '' ? (
              <AvatarIcon>
                <use href={`${icons}#icon-profile-circle`} />
              </AvatarIcon>
            ) : (
              <AvatarImage src={testInfo.image} />
            )}
            <DropIcon>
              <use href={`${icons}#icon-arrow-down`} />
            </DropIcon>
            {userModal && (
              <UserModal setIsOpen={setIsOpen} setLinked={setLinked} />
            )}
          </AvatarContainer>
          {menuModal && (
            <MenuModal setMenuModal={setMenuModal} setOverlay={setOverlay}>
              {goalModal && (
                <GoalModal
                  setGoalModal={setGoalModal}
                  run={run}
                  maintain={maintain}
                  muscle={muscle}
                  setGoalValue={setGoalValue}
                  initialValues={initialValuesT}
                  setOverlay={setOverlay}
                  setMenuModal={setMenuModal}
                />
              )}
              {weightModal && (
                <WeightModal
                  setWeightModal={setWeightModal}
                  initialValues={initialValuesW}
                  setWeightValue={setWeightValue}
                  setOverlay={setOverlay}
                  setMenuModal={setMenuModal}
                />
              )}
              <InfoContainer
                onClick={() => {
                  setGoalModal(true);
                  setWeightModal(false);
                  setUserModal(false);
                  setOverlay(true);
                }}
              >
                <ImageWrapper>
                  <img src={GoalImg} alt="Goal" />
                </ImageWrapper>
                <TextContainer>
                  <p>Goal</p>
                  <EditableText>
                    {goalValue}
                    <DropIcon>
                      <use href={`${icons}#icon-arrow-right`} />
                    </DropIcon>
                  </EditableText>
                </TextContainer>
              </InfoContainer>
              <InfoContainer
                onClick={() => {
                  setWeightModal(true);
                  setGoalModal(false);
                  setUserModal(false);
                  setOverlay(true);
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
      )}
    </HeaderContainer2>
  );
};
