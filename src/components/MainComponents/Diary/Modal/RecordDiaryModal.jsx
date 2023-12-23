import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

const RecordDiaryModal = ({ onClose, image, mealType }) => {
  const dispatch = useDispatch();

  const schema = Yup.object({
    products: Yup.array().of(
      Yup.object().shape({
        name: Yup.string()
          .required('Name is required')
          .trim('Name cannot include leading and trailing spaces')
          .strict(true),
        carbonohidrates: Yup.number()
          .required('Carbonohydrates is required')
          .typeError('Must be a number')
          .min(0, 'Must be a positive number')
          .max(100, 'The maximum allowable value is 100')
          .test(
            'maxDigitsAfterDecimal',
            'Must have 1 digit after decimal',
            (number) => /^\d+(\.\d{1})?$/.test(number)
          ),
        protein: Yup.number()
          .required('Protein is required')
          .typeError('Must be a number')
          .min(0, 'Must be a positive number')
          .max(100, 'The maximum allowable value is 100')
          .test(
            'maxDigitsAfterDecimal',
            'Must have 1 digit after decimal',
            (number) => /^\d+(\.\d{1})?$/.test(number)
          ),
        fat: Yup.number()
          .required('Fat is required')
          .typeError('Must be a number')
          .min(0, 'Must be a positive number')
          .max(100, 'The maximum allowable value is 100')
          .test(
            'maxDigitsAfterDecimal',
            'Must have 1 digit after decimal',
            (number) => /^\d+(\.\d{1})?$/.test(number)
          ),
        calories: Yup.number()
          .required('Calories is required')
          .typeError('Must be a number')
          .min(0, 'Must a be positive number')
          .max(1000, 'The maximum allowable value is 1000')
          .integer('Must be an integer'),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      products: [
        {
          mealType: mealType,
          name: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        },
      ],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const foodIntakeData = {
        mealType: mealType.toLowerCase(),
        foodDetails: {
          name: values.products[0].name ? values.products[0].name : 'string',
          nutrition: {
            carbohydrates: values.products[0].carbonohidrates
              ? Number(values.products[0].carbonohidrates)
              : 0,
            protein: values.products[0].protein
              ? Number(values.products[0].protein)
              : 0,
            fat: values.products[0].fat ? Number(values.products[0].fat) : 0,
          },
          calories: values.products[0].calories
            ? Number(values.products[0].calories)
            : 0,
        },
      };

      dispatch(addFoodIntake(foodIntakeData));

      onClose();
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
      { name: '', carbonohidrates: '', protein: '', fat: '', calories: '' },
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
                      name={`products[${index}].name`}
                      placeholder="The name of the product or dish"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`carbonohidrates-${index}`}
                      name={`products[${index}].carbonohidrates`}
                      placeholder="Carbonoh."
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`protein-${index}`}
                      name={`products[${index}].protein`}
                      placeholder="Protein"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`fat-${index}`}
                      name={`products[${index}].fat`}
                      placeholder="Fat"
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`calories-${index}`}
                      name={`products[${index}].calories`}
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
