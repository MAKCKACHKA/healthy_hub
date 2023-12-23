import { useState } from 'react';

import {
  AddButton,
  Title,
  CardWrap,
  DiaryImage,
  TitleWrap,
} from './DiaryItem.styled.jsx';

import RecordDiaryModal from '../Modal/RecordDiaryModal.jsx';

const DiaryItem = ({ title, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <CardWrap>
      <TitleWrap>
        <DiaryImage src={image} alt="Plate" />
        <Title>{title}</Title>
      </TitleWrap>
      <AddButton onClick={toggleModal}>+ Record your meal</AddButton>
      {isModalOpen && (
        <RecordDiaryModal
          onClose={toggleModal}
          image={image}
          mealType={title}
        />
      )}
    </CardWrap>
  );
};

export default DiaryItem;
