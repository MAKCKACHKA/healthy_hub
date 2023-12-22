import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
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
  ModalForm,
  CancelModal,
} from './Water.styled';
import WaterChart from './WaterChart/WaterChart';
import icons from '../../../assets/icons.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, selectToken } from '../../../redux/selesctors';
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
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  console.log(userData);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalWaterAdd = (e) => {
    e.preventDefault();
    dispatch(addWaterIntake({ ml: e.target.children[0].children[0].value }));
    closeModal();
    dispatch(getCurrentUser());
    console.log('Water Added');
  };

  const deleteWater = () => {
    dispatch(deleteWaterIntake());
    dispatch(getCurrentUser());
    console.log('Water Deleted');
  };

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
              {userData.user?.dailyWater - userData.consumedWaterByDay?.ml ||
                userData.user?.dailyWater}
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
            <input type="number" placeholder="Enter millilitters" />
          </label>
          <button>Confirm</button>
        </ModalForm>
        <CancelModal onClick={closeModal}>Cancel</CancelModal>
      </Modal>
    </Container>
  );
}
