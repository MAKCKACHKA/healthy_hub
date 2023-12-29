import icons from '../../../assets/icons.svg';

import { CloseBtn, ModalMenuBody } from './ModalStyles';

export const MenuModal = ({ setMenuModal, setOverlay, children }) => {
  return (
    <ModalMenuBody>
      <CloseBtn
        style={{ display: 'block' }}
        onClick={() => {
          setMenuModal(false);
          setOverlay(false);
        }}
      >
        <use href={`${icons}#icon-close-circle`} />
      </CloseBtn>

      {children}
    </ModalMenuBody>
  );
};
