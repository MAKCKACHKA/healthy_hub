// import icons from '../../assets/icons.svg';
// import clap from '../../assets/emoji/clap.png';
import icons from '../../../assets/icons.svg';

import { CloseBtn, ModalMenuBody } from './ModalStyles';

export const MenuModal = ({ setMenuModal, children }) => {
  return (
    <ModalMenuBody>
      <CloseBtn
        style={{ display: 'block' }}
        onClick={() => {
          setMenuModal(false);
        }}
      >
        <use href={`${icons}#icon-close-circle`} />
      </CloseBtn>

      {children}
    </ModalMenuBody>
  );
};
