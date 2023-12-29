import { useDispatch } from 'react-redux';
import icons from '../../../assets/icons.svg';

import {
  ModalBody,
  ConfirmBtn,
  Descriptione,
  CloseBtn,
  TextInput,
  WeightForm,
  Label,
  CancelBtn,
} from './ModalStyles';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import { addUserWeight, getCurrentUser } from '../../../redux/operations';

export const WeightModal = ({
  setWeightModal,
  initialValues,
  setWeightValue,
  setOverlay,
  setMenuModal,
}) => {
  const dispatch = useDispatch();

  const handleSave = (values) => {
    dispatch(addUserWeight(values));
    setWeightValue(values.weight);

    setTimeout(() => {
      dispatch(getCurrentUser());
    }, 300);
    setWeightModal(false);
    setOverlay(false);
    setMenuModal(false);
  };

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  const formattedDate = formatDate(new Date());

  const validationSchema = Yup.object().shape({
    weight: Yup.number()
      .positive('Must be a positive number')
      .min(30, 'Must be at least 30')
      .max(400, 'Value to high')
      .nullable(),
  });

  return (
    <ModalBody>
      <CloseBtn
        onClick={() => {
          setWeightModal(false);
          setOverlay(false);
          setMenuModal(false);
        }}
      >
        <use href={`${icons}#icon-close-circle`} />
      </CloseBtn>

      <h4>Enter your current weight</h4>
      <Descriptione>You can record your weight once a day </Descriptione>
      <p>
        Today <span>{formattedDate}</span>
      </p>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSave}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <WeightForm>
              <Label>
                <TextInput
                  placeholder="Enter your weight"
                  type="number"
                  id="weight"
                  name="weight"
                  className={touched.weight && errors.weight ? 'error' : ''}
                />
                {touched.weight && errors.weight && (
                  <div className="error-message">{errors.weight}</div>
                )}
              </Label>
              <ConfirmBtn type="submit">Confirm</ConfirmBtn>
              <CancelBtn
                type="button"
                onClick={() => {
                  setWeightModal(false);
                  setOverlay(false);
                  setMenuModal(false);
                }}
              >
                Cancel
              </CancelBtn>
            </WeightForm>
          </Form>
        )}
      </Formik>
    </ModalBody>
  );
};
