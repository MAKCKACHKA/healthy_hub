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
  const [current, setCurrent] = useState(0);
  const [objective, setObjective] = useState(1500);
  const [percentage, setPercentage] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (current <= objective) {
      setPercentage(Math.round((current * 100) / objective));
    }
  }, [current, objective]);

  function calcPercentage(e) {
    e.preventDefault();
    let quantity = e.target.children[0].children[0].value;
    setPercentage(percentage + Math.round((quantity * 100) / objective));
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
              <b>left : </b>
              <span>
                {objective - current >= 0 ? objective - current : 0}ml
              </span>
            </LeftValue>
          </ValueContainer>
          <IntakeButton onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 8H12"
                stroke="#0F0F0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12V4"
                stroke="#0F0F0F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Water Intake
          </IntakeButton>
        </Info>
      </FullFrame>
      <DeleteButton
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        onClick={() => setCurrent(0)}
      >
        <path
          d="M7.5 2.5H12.5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
          stroke="#E3FFA8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5"
          stroke="#E3FFA8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
