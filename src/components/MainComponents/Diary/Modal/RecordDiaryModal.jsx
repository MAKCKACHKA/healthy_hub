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
  BtnAddNewProduct,
  ContainerForBtns,
  BtnRemoveProduct,
  BtnConfirm,
} from './RecordDiaryModal.styled';
import icons from '../../../../assets/icons.svg';

import { useDispatch } from 'react-redux';
import { addFoodIntake, getCurrentUser } from '../../../../redux/operations';
import { useFormik } from 'formik';

const RecordDiaryModal = ({ onClose, image, mealType, onRecord }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      mealType: mealType,
      foods: [
        {
          name: '',
          nutrition: {
            carbohydrates: '',
            protein: '',
            fat: '',
          },
          calories: '',
        },
      ],
    },
    onSubmit: async (values) => {
      try {
        if (values.foods && values.foods.length > 0 && values.foods[0]) {
          const foodIntakeData = {
            mealType: mealType.toLowerCase(),
            foods: values.foods.map((food) => ({
              name: food.name ? food.name : 'string',
              nutrition: {
                carbohydrates: food.nutrition.carbohydrates
                  ? Number(food.nutrition.carbohydrates)
                  : 0,
                protein: food.nutrition.protein
                  ? Number(food.nutrition.protein)
                  : 0,
                fat: food.nutrition.fat ? Number(food.nutrition.fat) : 0,
              },
              calories: food.calories ? Number(food.calories) : 0,
            })),
          };

          await dispatch(addFoodIntake(foodIntakeData));
          onRecord(foodIntakeData);
          await dispatch(getCurrentUser());

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

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...formik.values.foods];
    updatedProducts.splice(index, 1);
    formik.setFieldValue('foods', updatedProducts);
  };

  const handleAddProduct = () => {
    formik.setFieldValue('foods', [
      ...formik.values.foods,
      {
        name: '',
        nutrition: {
          carbohydrates: '',
          protein: '',
          fat: '',
        },
        calories: '',
      },
    ]);
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalTitle>Record your meal</ModalTitle>
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
                  <BtnRemoveProduct
                    type="button"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    <svg width="20" height="20" fill="none">
                      <use href={`${icons}#icon-trash`}></use>
                    </svg>
                  </BtnRemoveProduct>
                </Product>
              </ProductList>
            ))}
            <BtnAddNewProduct type="button" onClick={handleAddProduct}>
              + Add more
            </BtnAddNewProduct>
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
};

export default RecordDiaryModal;
