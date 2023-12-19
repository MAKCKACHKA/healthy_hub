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

export default function Water({ waterobjective, watercurrent }) {
  const [current, setCurrent] = useState(
    watercurrent == null ? 0 : watercurrent
  );
  const [left, setLeft] = useState(waterobjective);
  const [percentage, setPercentage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPercentage(Math.round((current * 100) / waterobjective));
  }, [current]);

  function calcPercentage(e) {
    e.preventDefault();
    let quantity = e.target.children[0].children[0].value;
    setPercentage(percentage + Math.round((quantity * 100) / waterobjective));
    setCurrent(current + Math.round(e.target.children[0].children[0].value));
    closeModal();
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
              {waterobjective >= current ? waterobjective - current : 0}ml
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
      <DeleteButton
        width="20"
        height="20"
        fill="none"
        onClick={() => setCurrent(0)}
      >
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
