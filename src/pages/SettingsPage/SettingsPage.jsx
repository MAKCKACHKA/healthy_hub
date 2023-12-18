import * as Yup from 'yup';

import {
  Avatar,
  AvatarIcon,
  ButtonWraper,
  ButtonWraperDown,
  CancelBtn,
  CustomRadio,
  FileInput,
  FormInputs,
  GenderRadios,
  IconWrapper,
  ImageInput,
  Label,
  LabelImg,
  RadioField,
  RadioLabel,
  SaveBtn,
  TextInput,
  Title,
  TitleContainer,
  UploadIcon,
  UploadWrap,
  WrapImgAndForm,
  YourActivityInput,
} from './SettingsPage.styled';
import Illustration from '../../assets/pageIllustrations.svg';
import { Formik, Form } from 'formik';
import icons from '../../assets/icons.svg';

export default function SettingsPage() {
  const initialValues = {
    name: 'Max',
    photo: '',
    age: '19',
    gender: 'Male',
    height: '',
    weight: '',
    activity: '1.55',
  };

  const handleSave = (values) => {
    console.log('Form data saved:', values);
  };

  const handleCancel = (resetForm) => {
    resetForm({ values: initialValues });
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().required('Name is required'),
    // photo: Yup.string().url('Invalid URL'),
    age: Yup.number()
      .positive('Must be a positive number')
      .integer('Must be an integer')
      .max(100, 'Cannot be greater than 100')
      .nullable(),
    height: Yup.number()
      .positive('Must be a positive number')
      .max(300, 'Cannot be greater than 300')
      .nullable(),
    weight: Yup.number()
      .positive('Must be a positive number')
      .max(500, 'Cannot be greater than 500')
      .nullable(),
    // activity: Yup.string().required('Activity is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSave}
      validationSchema={validationSchema}
    >
      {({ resetForm, values, setFieldValue, errors, touched }) => (
        <Form>
          <TitleContainer>
            <Title>Profile setting</Title>
            <ButtonWraper>
              <CancelBtn type="button" onClick={() => handleCancel(resetForm)}>
                Cancel
              </CancelBtn>
              <SaveBtn type="submit">Save</SaveBtn>
            </ButtonWraper>
          </TitleContainer>
          <WrapImgAndForm>
            <IconWrapper>
              <use href={`${Illustration}#icon-settings`} />
            </IconWrapper>
            <FormInputs>
              <Label htmlFor="name">
                Your name
                <TextInput type="text" id="name" name="name" />
              </Label>
              <LabelImg htmlFor="photo">
                Your photo
                <FileInput>
                  {values.photo === '' ? (
                    <AvatarIcon>
                      <use href={`${icons}#icon-profile-circle`} />
                    </AvatarIcon>
                  ) : (
                    <Avatar
                      src={values.photo}
                      // src={URL.createObjectURL(values.photo)}
                      alt="Selected"
                    />
                  )}
                  <UploadWrap>
                    <UploadIcon>
                      <use href={`${icons}#icon-direct-inbox`} />
                    </UploadIcon>
                    <ImageInput
                      type="file"
                      accept="image/*"
                      id="photo"
                      name="photo"
                      onChange={(e) => {
                        setFieldValue(
                          'photo',
                          URL.createObjectURL(e.target.files[0])
                        );
                      }}
                    />
                    Download new photo
                  </UploadWrap>
                </FileInput>
              </LabelImg>
              <Label htmlFor="age">
                Your age
                <TextInput
                  type="number"
                  id="age"
                  name="age"
                  className={touched.age && errors.age ? 'error' : ''}
                />
                {touched.age && errors.age && (
                  <div className="error-message">{errors.age}</div>
                )}
              </Label>
              <Label>
                Gender
                <GenderRadios>
                  <RadioLabel>
                    <RadioField type="radio" name="gender" value="Male" />
                    Male
                    <CustomRadio>
                      <span></span>
                    </CustomRadio>
                  </RadioLabel>
                  <RadioLabel>
                    <RadioField type="radio" name="gender" value="Female" />
                    Female
                    <CustomRadio>
                      <span></span>
                    </CustomRadio>
                  </RadioLabel>
                </GenderRadios>
              </Label>
              <Label htmlFor="height">
                Height
                <TextInput
                  type="number"
                  id="height"
                  name="height"
                  className={touched.height && errors.height ? 'error' : ''}
                />
                {touched.height && errors.height && (
                  <div className="error-message">{errors.height}</div>
                )}
              </Label>
              <Label htmlFor="weight">
                Weight
                <TextInput
                  type="number"
                  id="weight"
                  name="weight"
                  className={touched.weight && errors.weight ? 'error' : ''}
                />
                {touched.weight && errors.weight && (
                  <div className="error-message">{errors.weight}</div>
                )}
              </Label>
              <YourActivityInput>
                Your activity
                <RadioLabel>
                  <RadioField
                    type="radio"
                    id="activity1"
                    name="activity"
                    value="1.2"
                  />
                  <CustomRadio>
                    <span></span>
                  </CustomRadio>
                  1.2 - if you do not have physical activity and sedentary work
                </RadioLabel>
                <RadioLabel>
                  <RadioField
                    type="radio"
                    id="activity2"
                    name="activity"
                    value="1.375"
                  />
                  <CustomRadio>
                    <span></span>
                  </CustomRadio>
                  1.375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </RadioLabel>
                <RadioLabel>
                  <RadioField
                    type="radio"
                    id="activity3"
                    name="activity"
                    value="1.55"
                  />
                  <CustomRadio>
                    <span></span>
                  </CustomRadio>
                  1.55 - if you play sports with average loads 3-5 times a week
                </RadioLabel>
                <RadioLabel>
                  <RadioField
                    type="radio"
                    id="activity4"
                    name="activity"
                    value="1.725"
                  />
                  <CustomRadio>
                    <span></span>
                  </CustomRadio>
                  1.725 - if you train fully 6-7 times a week
                </RadioLabel>
                <RadioLabel>
                  <RadioField
                    type="radio"
                    id="activity4"
                    name="activity"
                    value="1.9"
                  />
                  <CustomRadio>
                    <span></span>
                  </CustomRadio>
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </RadioLabel>
              </YourActivityInput>
            </FormInputs>
            <ButtonWraperDown>
              <CancelBtn type="button" onClick={() => handleCancel(resetForm)}>
                Cancel
              </CancelBtn>
              <SaveBtn type="submit">Save</SaveBtn>
            </ButtonWraperDown>
          </WrapImgAndForm>
        </Form>
      )}
    </Formik>
  );
}
