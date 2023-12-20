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

//         .required('Carbonohidrates is required')
//         .typeError('Must be a number')
//         .min(0, 'Must be a positive number')
//         .max(100, 'The maximum allowable value is 100')
//         .test(
//           'maxDigitsAfterDecimal',
//           'Must have 1 digits after decimal',
//           (number) => /^\d+(\.\d{1})?$/.test(number)
//         ),
//       protein: yup
//         .number()
//         .required('Protein is required')
//         .typeError('Must be a number')
//         .min(0, 'Must be a positive number')
//         .max(100, 'The maximum allowable value is 100')
//         .test(
//           'maxDigitsAfterDecimal',
//           'Must have 1 digits after decimal',
//           (number) => /^\d+(\.\d{1})?$/.test(number)
//         ),
//       fat: yup
//         .number()
//         .required('Fat is required')
//         .typeError('Must be a number')
//         .min(0, 'Must be a positive number')
//         .max(100, 'The maximum allowable value is 100')
//         .test(
//           'maxDigitsAfterDecimal',
//           'Must have 1 digits after decimal',
//           (number) => /^\d+(\.\d{1})?$/.test(number)
//         ),
//       calories: yup
//         .number()
//         .required('Calories is required')
//         .typeError('Must be a number')
//         .min(0, 'Must a be positive number')
//         .max(1000, 'The maximum allowable value is 1000')
//         .integer('Must be an integer'),
//     })
//   ),
// });

const RecordDiaryModal = ({ onClose, onSubmit, image, mealType }) => {
  const formik = useFormik({
    initialValues: {
      carbonohidrates: '',
      protein: '',
      fat: '',
      calories: '',
    },
    onSubmit: (values) => {
      onSubmit(values);
      onClose();
    },
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleRemoveProduct = () => {
    formik.setValues({
      carbonohidrates: '',
      protein: '',
      fat: '',
      calories: '',
    });
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
            <ProductList>
              <Product>
                <WrapperInput>
                  <Input
                    type="text"
                    id="carbonohidrates"
                    name="carbonohidrates"
                    placeholder="The name of the product or dish"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    type="number"
                    id="field1"
                    name="field1"
                    placeholder="Carbonoh."
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    type="number"
                    id="protein"
                    name="protein"
                    placeholder="Protein"
                  />
                </WrapperInput>
                <WrapperInput>
                  <Input type="number" id="fat" name="fat" placeholder="Fat" />
                </WrapperInput>
                <WrapperInput>
                  <Input
                    type="number"
                    id="calories"
                    name="calories"
                    placeholder="Calories"
                  />
                </WrapperInput>
                <BtnRemoveProduct type="button" onClick={handleRemoveProduct}>
                  <img src={trashImage} alt="trash" />
                </BtnRemoveProduct>
              </Product>
            </ProductList>
            <BtnAddNewProduct>+ Add more</BtnAddNewProduct>
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
