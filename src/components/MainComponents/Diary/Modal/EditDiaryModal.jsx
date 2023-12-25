import {
  Backdrop,
  Modal,
  ModalTitle,
  WrapperFormTitle,
  Image,
  Title,
  FormFormic,
  Input,
  BtnCancel,
  WrapperInput,
  ContentWrapper,
  ProductList,
  Product,
  ContainerForBtns,
  BtnConfirm,
} from './RecordDiaryModal.styled';
import { useDispatch } from 'react-redux';
import { getCurrentUser, updateFoodIntake } from '../../../../redux/operations';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

export default function EditDiaryModal({
  onClose,
  image,
  mealType,
  onRecord,
  meal,
}) {
  const dispatch = useDispatch();
  const [foods, setFoods] = useState([
    {
      name: meal ? meal.name : '',
      nutrition: {
        carbohydrates: meal ? meal.nutrition.carbohydrates : '',
        protein: meal ? meal.nutrition.protein : '',
        fat: meal ? meal.nutrition.fat : '',
      },
      calories: meal ? meal.calories : '',
    },
  ]);

  useEffect(() => {
    setFoods([
      {
        name: meal ? meal.name : '',
        nutrition: {
          carbohydrates: meal ? meal.nutrition.carbohydrates : '',
          protein: meal ? meal.nutrition.protein : '',
          fat: meal ? meal.nutrition.fat : '',
        },
        calories: meal ? meal.calories : '',
      },
    ]);
  }, [meal]);

  const formik = useFormik({
    initialValues: {
      mealType: mealType,
      foods: foods,
    },
    onSubmit: async (values) => {
      try {
        if (values.foods && values.foods.length > 0 && values.foods[0]) {
          const firstFood = values.foods[0];

          const foodIntakeData = {
            mealType: mealType.toLowerCase(),
            foodDetails: {
              name: firstFood.name ? firstFood.name : 'string',
              nutrition: {
                carbohydrates: firstFood.nutrition.carbohydrates
                  ? Number(firstFood.nutrition.carbohydrates)
                  : 0,
                protein: firstFood.nutrition.protein
                  ? Number(firstFood.nutrition.protein)
                  : 0,
                fat: firstFood.nutrition.fat
                  ? Number(firstFood.nutrition.fat)
                  : 0,
              },
              calories: firstFood.calories ? Number(firstFood.calories) : 0,
            },
          };

          dispatch(
            updateFoodIntake({
              foodId: meal._id,
              foodIntakeData: foodIntakeData,
            })
          );

          onRecord(foodIntakeData);
          setTimeout(() => {
            dispatch(getCurrentUser());
          }, 100);
          onClose();
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalTitle>Edit your meal</ModalTitle>
        <WrapperFormTitle>
          <Image src={image} alt="Plate" />
          <Title>{mealType}</Title>
        </WrapperFormTitle>
        <FormFormic onSubmit={formik.handleSubmit}>
          <ContentWrapper>
            {formik.values.foods.map((food, index) => (
              <ProductList key={index}>
                <Product>
                  <WrapperInput>
                    <Input
                      type="text"
                      id={`name-${index}`}
                      name={`foods[${index}].name`}
                      placeholder="The name of the product or dish"
                      onChange={formik.handleChange}
                      value={food.name}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`carbonohidrates-${index}`}
                      name={`foods[${index}].nutrition.carbohydrates`}
                      placeholder="Carbonoh."
                      onChange={formik.handleChange}
                      value={food.nutrition.carbohydrates}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`protein-${index}`}
                      name={`foods[${index}].nutrition.protein`}
                      placeholder="Protein"
                      onChange={formik.handleChange}
                      value={food.nutrition.protein}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`fat-${index}`}
                      name={`foods[${index}].nutrition.fat`}
                      placeholder="Fat"
                      onChange={formik.handleChange}
                      value={food.nutrition.fat}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`calories-${index}`}
                      name={`foods[${index}].calories`}
                      placeholder="Calories"
                      onChange={formik.handleChange}
                      value={food.calories}
                    />
                  </WrapperInput>
                </Product>
              </ProductList>
            ))}
          </ContentWrapper>
          <ContainerForBtns>
            <BtnCancel type="button" onClick={onClose}>
              Cancel
            </BtnCancel>
            <BtnConfirm type="submit">Confirm</BtnConfirm>
          </ContainerForBtns>
        </FormFormic>
      </Modal>
    </Backdrop>
  );
}
