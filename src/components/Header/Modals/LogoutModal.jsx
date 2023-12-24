import ReactModal from 'react-modal';
import icons from '../../../assets/icons.svg';
import {
  ButtonWraperDown,
  CancelBtnLogOut,
  CloseBtn,
  ConfirmBtnLogOut,
  LogOutText,
} from './ModalStyles';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/operations';

const customStyles = {
  overlay: {
    backgroundColor: '#0505056f',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#050505',
    border: 'none',
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
    padding: '40px',
    maxWidth: '800px',
  },
};

export function LogOutModal({ modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();

  function UserLogOut() {
    dispatch(signOut());
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      appElement={document.getElementById('root')}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <CloseBtn onClick={closeModal} style={{ display: 'block' }}>
        <use href={`${icons}#icon-close-circle`} />
      </CloseBtn>
      <LogOutText>Are you sure you want to log out of your account?</LogOutText>
      <ButtonWraperDown style={{ justifyContent: 'center' }}>
        <ConfirmBtnLogOut
          type="button"
          onClick={() => {
            UserLogOut();
            closeModal();
          }}
        >
          Confirm
        </ConfirmBtnLogOut>
        <CancelBtnLogOut type="button" onClick={closeModal}>
          Cancel
        </CancelBtnLogOut>
      </ButtonWraperDown>
    </ReactModal>
  );
}
