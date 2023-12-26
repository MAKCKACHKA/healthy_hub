import Modal from 'react-modal';
import { useState } from 'react';
import {
  Container,
  Heading,
  FullFrame,
  Info,
  SubHeading,
  ValueContainer,
  Value,
  LeftValue,
  IntakeButton,
  DeleteButton,
  ModalHeading,
  StyledInput,
  ErrorMessage,
  ModalForm,
  CancelModal,
} from './Water.styled';
import WaterChart from './WaterChart/WaterChart';
import icons from '../../../assets/icons.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData } from '../../../redux/selesctors';
import {
  getCurrentUser,
  addWaterIntake,
  deleteWaterIntake,
} from '../../../redux/operations';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    background: '#0F0F0F',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px 40px',
    border: 'none',
  },
  overlay: {
    background: '#050505CC',
  },
};

Modal.setAppElement('#root');

export default function Water() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [numberValue, setNumberValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputBorder, setInputBorder] = useState('var(--primary-btn-color)');
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setInputBorder('var(--primary-btn-color)');
    setErrorMessage('');
  }

  const modalWaterAdd = async (e) => {
    e.preventDefault();
    if (isValid) {
      await dispatch(
        addWaterIntake({ ml: e.target.children[0].children[0].value })
      );
      closeModal();
      setInputBorder('var(--primary-btn-color)');

      await dispatch(getCurrentUser());
    }
  };

  const deleteWater = async () => {
    await dispatch(deleteWaterIntake());
    await dispatch(getCurrentUser());
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setNumberValue(inputValue);
    if (inputValue === '') {
      setIsValid(false);
      setErrorMessage('This field is required*');
      setInputBorder('var(--error-validate-input)');
    } else if (parseInt(inputValue) < 0) {
      setIsValid(false);
      setErrorMessage('Enter a positive number*');
      setInputBorder('var(--error-validate-input)');
    } else {
      setIsValid(true);
      setErrorMessage('');
      setInputBorder('#3CBC81');
    }
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value.trim();

    if (inputValue === '') {
      setIsValid(false);
      setErrorMessage('This field is required*');
      setInputBorder('var(--error-validate-input)');
    } else if (parseInt(numberValue) < 0) {
      setIsValid(false);
      setErrorMessage('Enter a positive number*');
      setInputBorder('var(--error-validate-input)');
    } else {
      setIsValid(true);
      setErrorMessage('');
      setInputBorder('#3CBC81');
    }
  };

  function calcLeft() {
    if (userData?.consumedWaterByDay?.ml) {
      if (userData?.user?.dailyWater - userData?.consumedWaterByDay?.ml >= 0)
        return userData?.user?.dailyWater - userData?.consumedWaterByDay?.ml;
      else return 0;
    } else {
      return userData?.user?.dailyWater;
    }
  }

  return (
    <Container>
      <Heading>Water</Heading>
      <FullFrame>
        <WaterChart
          percentage={Math.round(
            (userData.consumedWaterByDay?.ml * 100) / userData.user?.dailyWater
          )}
        />
        <Info>
          <SubHeading>Water consumption</SubHeading>
          <ValueContainer>
            <Value>
              {userData?.consumedWaterByDay?.ml || 0} <span>ml</span>
            </Value>
            <LeftValue>
              <span>left : </span>
              {calcLeft()}
              ml
            </LeftValue>
          </ValueContainer>
          <IntakeButton onClick={openModal}>
            <svg>
              <use href={`${icons}#icon-add`} />
            </svg>
            Add Water Intake
          </IntakeButton>
        </Info>
      </FullFrame>
      <DeleteButton width="20" height="20" fill="none" onClick={deleteWater}>
        <use href={`${icons}#icon-trash`}></use>
      </DeleteButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalHeading>Add water Intake</ModalHeading>
        <ModalForm onSubmit={(e) => modalWaterAdd(e)}>
          <label>
            How much water
            <StyledInput
              type="number"
              placeholder="Enter millilitters"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => handleBlur(e)}
              $borderColor={inputBorder}
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </label>
          <button>Confirm</button>
        </ModalForm>
        <CancelModal onClick={closeModal}>Cancel</CancelModal>
      </Modal>
    </Container>
  );
}
