import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddButton,
  Title,
  CardWrap,
  DiaryImage,
  TitleWrap,
  InfoWrap,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
  Value,
  BtnRemoveProduct,
} from './DiaryItem.styled.jsx';

import icons from '../../../../assets/icons.svg';

import RecordDiaryModal from '../Modal/RecordDiaryModal.jsx';
import {
  deleteFoodIntake,
  getCurrentUser,
} from '../../../../redux/operations.js';
import { selectUserData } from '../../../../redux/selesctors.js';

const DiaryItem = ({ title, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nutritionInfo, setNutritionInfo] = useState(null);
  const dispatch = useDispatch();
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const user = useSelector(selectUserData);

  useEffect(() => {
    const mealType = String(title.toLowerCase());
    if (user && user.consumedMealsByDay && mealType) {
      if (user.consumedMealsByDay[mealType]) {
        setNutritionInfo(user.consumedMealsByDay[mealType]);
      }
    }
  }, [user, title]);

  const handleDelete = async () => {
    try {
      setNutritionInfo(null);
      await dispatch(deleteFoodIntake(title.toLowerCase()));
      await dispatch(getCurrentUser());
    } catch (error) {
      console.error(error);
    }
  };

  const handleRecord = (data) => {
    setNutritionInfo(data);
    title.toLowerCase();
    toggleModal();
  };

  return (
    <CardWrap>
      <TitleWrap>
        <DiaryImage src={image} alt="Plate" />
        <Title>{title}</Title>
      </TitleWrap>
      {nutritionInfo && nutritionInfo.foods.length === 0 && (
        <AddButton onClick={toggleModal}>+ Record your meal</AddButton>
      )}
      {!nutritionInfo && (
        <AddButton onClick={toggleModal}>+ Record your meal</AddButton>
      )}

      {isModalOpen && (
        <RecordDiaryModal
          onClose={toggleModal}
          image={image}
          mealType={title}
          onRecord={handleRecord}
        />
      )}

      {nutritionInfo && nutritionInfo.foods && nutritionInfo.foods[0] && (
        <InfoWrap>
          <CarbonohidratesWrap>
            Carbohydrates: <Value>{nutritionInfo.totalCarbohydrates}</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            Protein: <Value>{nutritionInfo.totalProtein}</Value>
          </ProteinWrap>
          <FatWrap>
            Fat: <Value>{nutritionInfo.totalFat}</Value>
          </FatWrap>
          <BtnRemoveProduct
            width="20"
            height="20"
            fill="none"
            onClick={handleDelete}
          >
            <use href={`${icons}#icon-trash`}></use>
          </BtnRemoveProduct>
        </InfoWrap>
      )}
    </CardWrap>
  );
};

export default DiaryItem;
