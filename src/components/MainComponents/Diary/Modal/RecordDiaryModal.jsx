import React from 'react';
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
import trashImage from '../../../../assets/trash.png';
import { useDispatch } from 'react-redux';
import { addFoodIntake } from '../../../../redux/operations';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

const RecordDiaryModal = ({ onClose, image, mealType }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      products: [
        {
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
      ],
    },
    onSubmit: async (values) => {
      try {
        if (
          values.products &&
          values.products.length > 0 &&
          values.products[0].foods &&
          values.products[0].foods.length > 0
        ) {
          const foodIntakeData = {
            mealType: mealType.toLowerCase(),
            foods: values.products.map((product) => ({
              name: product.foods[0].name ? product.foods[0].name : 'string',
              nutrition: {
                carbohydrates: product.foods[0].nutrition.carbohydrates
                  ? Number(product.foods[0].nutrition.carbohydrates)
                  : 0,
                protein: product.foods[0].nutrition.protein
                  ? Number(product.foods[0].nutrition.protein)
                  : 0,
                fat: product.foods[0].nutrition.fat
                  ? Number(product.foods[0].nutrition.fat)
                  : 0,
              },
              calories: product.foods[0].calories
                ? Number(product.foods[0].calories)
                : 0,
            })),
          };

          console.log('Food intake data:', foodIntakeData);

          dispatch(addFoodIntake(foodIntakeData));

          console.log('Backend response:', response);
          console.log('Response data:', response.data);

          onClose();
        } else {
          console.error('Invalid products array structure');
        }
      } catch (error) {
        console.error('Submission error:', error);
        console.error(
          'Error details:',
          error.response ? error.response.data : 'No response data'
        );
      }
    },
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...formik.values.products];
    updatedProducts.splice(index, 1);
    formik.setFieldValue('products', updatedProducts);
  };

  const handleAddProduct = () => {
    formik.setFieldValue('products', [
      ...formik.values.products,
      {
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
            {formik.values.products.map((product, index) => (
              <ProductList key={index}>
                <Product>
                  <WrapperInput>
                    <Input
                      type="text"
                      id={`name-${index}`}
                      name={`products[${index}].foods[0].name`}
                      placeholder="The name of the product or dish"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`carbonohidrates-${index}`}
                      name={`products[${index}].foods[0].nutrition.carbohydrates`}
                      placeholder="Carbonoh."
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`protein-${index}`}
                      name={`products[${index}].foods[0].nutrition.protein`}
                      placeholder="Protein"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`fat-${index}`}
                      name={`products[${index}].foods[0].nutrition.fat`}
                      placeholder="Fat"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`calories-${index}`}
                      name={`products[${index}].foods[0].calories`}
                      placeholder="Calories"
                    />
                  </WrapperInput>
                  <BtnRemoveProduct
                    type="button"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    <img src={trashImage} alt="Trash" />
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
