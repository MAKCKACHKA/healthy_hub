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
import axios from 'axios';

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
axios.defaults.baseURL = 'https://healthy-hub-rest-api.onrender.com/api';

export default function Water({ waterobjective, watercurrent, token }) {
  const [percentage, setPercentage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(watercurrent);

  useEffect(() => {
    setCurrent(watercurrent);
  }, [watercurrent]);

  useEffect(() => {
    setPercentage(Math.round((current * 100) / waterobjective));
  }, [current]);

  async function calcPercentage(e) {
    e.preventDefault();
    console.log(`Bearer ${token}`);
    await axios.post(
      '/user/water-intake',
      { ml: e.target.children[0].children[0].value },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    let quantity = e.target.children[0].children[0].value;
    setPercentage(percentage + Math.round((quantity * 100) / waterobjective));
    setCurrent(current + Math.round(e.target.children[0].children[0].value));
    closeModal();
  }

  async function deleteWater() {
    await axios.delete('/user/water-intake', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCurrent(0);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Heading>Water</Heading>
      <FullFrame>
        <WaterChart percentage={percentage} />
        <Info>
          <SubHeading>Water consumption</SubHeading>
          <ValueContainer>
            <Value>
              {current} <span>ml</span>
            </Value>
            <LeftValue>
              <span>left : </span>
              {waterobjective >= current ? waterobjective - current : 0}
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
        contentLabel="Example Modal"
      >
        <ModalHeading>Add water Intake</ModalHeading>
        <ModalForm onSubmit={calcPercentage}>
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
