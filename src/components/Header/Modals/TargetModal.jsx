import { ImageWrapper } from '../Header.styled';
// import icons from '../../assets/icons.svg';
import run from '../../../assets/emoji/run.png';
// import clap from '../../assets/emoji/clap.png';

import {
  ButtonWraperDown,
  CustomRadio,
  FormInputs,
  RadioField,
  RadioLabel,
  SaveBtn,
  YourActivityInput,
} from './ModalStyles';
import { Formik, Form } from 'formik';
// import icons from '../../assets/icons.svg';

export const TargetModal = () => {
  return (
    <div className="SSSSS">
      <h4>Target selection</h4>
      <p>The service will adjust your calorie intake to your goal</p>
      <ul>
        <li>
          <ImageWrapper>
            <img src={run} alt="Running" />
          </ImageWrapper>
          <p>Lose fat</p>
        </li>
        <li>
          <ImageWrapper>
            <img src={run} alt="Running" />
          </ImageWrapper>
          <p>Maintain</p>
        </li>
        <li>
          <ImageWrapper>
            <img src={run} alt="Running" />
          </ImageWrapper>
          <p>Gain Muscle</p>
        </li>
      </ul>
    </div>
  );
};

export const TargetModal1 = () => {
  const initialValues = {
    target: 'Gain Muscle',
  };

  const handleSave = (values) => {
    console.log('Form data saved:', values);
  };

  //   const handleCancel = (resetForm) => {
  //     resetForm({ values: initialValues });
  //   };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSave}>
      {({ values }) => (
        <Form>
          <FormInputs>
            <YourActivityInput>
              Your target : {values.target}
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="target1"
                  name="target"
                  value="Lose fat"
                />
                <CustomRadio>
                  <span></span>
                </CustomRadio>
                Lose fat
              </RadioLabel>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="target2"
                  name="target"
                  value="Maintain"
                />
                <CustomRadio>
                  <span></span>
                </CustomRadio>
                Maintain
              </RadioLabel>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="target3"
                  name="target"
                  value="Gain Muscle"
                />
                <CustomRadio>
                  <span></span>
                </CustomRadio>
                Gain Muscle
              </RadioLabel>
            </YourActivityInput>
          </FormInputs>
          <ButtonWraperDown>
            <SaveBtn type="submit">Save</SaveBtn>
          </ButtonWraperDown>
        </Form>
      )}
    </Formik>
  );
};
