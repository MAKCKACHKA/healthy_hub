import {
  ButtonWraper,
  CancelBtn,
  CustomRadio,
  FormInputs,
  IconWrapper,
  Label,
  RadioField,
  RadioLabel,
  SaveBtn,
  TextInput,
  Title,
  TitleContainer,
  WrapImgAndForm,
  YourActivityInput,
} from './SettingsPage.styled';
import Illustration from '../../assets/pageIllustrations.svg';
import { Formik, Field, Form } from 'formik';

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
    console.log(values.photo);
  };

  const handleCancel = (resetForm) => {
    resetForm({ values: initialValues });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSave}>
      {({ resetForm, values, setFieldValue }) => (
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
              <Label htmlFor="photo">
                Your photo
                {values.photo && <img src={values.photo} alt="Selected" />}
                <input
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
              </Label>
              <Label htmlFor="age">
                Your age
                <TextInput type="number" id="age" name="age" />
              </Label>
              <div role="group" aria-labelledby="my-radio-group">
                <Label>Gender</Label>
                <div>
                  <RadioLabel>
                    <Field type="radio" name="gender" value="Male" />
                    Male
                  </RadioLabel>
                  <RadioLabel>
                    <Field type="radio" name="gender" value="Female" />
                    Female
                  </RadioLabel>
                </div>
              </div>
              <Label htmlFor="height">
                Height
                <TextInput type="number" id="height" name="height" />
              </Label>
              <Label htmlFor="weight">
                Weight
                <TextInput type="number" id="weight" name="weight" />
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
                  <CustomRadio />
                  1.2 - if you do not have physical activity and sedentary work
                </RadioLabel>
                <RadioLabel>
                  <RadioField
                    type="radio"
                    id="activity2"
                    name="activity"
                    value="1.375"
                  />
                  <CustomRadio />
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
                  <CustomRadio />
                  1.55 - if you play sports with average loads 3-5 times a week
                </RadioLabel>
                <RadioLabel>
                  <RadioField
                    type="radio"
                    id="activity4"
                    name="activity"
                    value="1.725"
                  />
                  <CustomRadio />
                  1.725 - if you train fully 6-7 times a week
                </RadioLabel>
              </YourActivityInput>
            </FormInputs>
          </WrapImgAndForm>
        </Form>
      )}
    </Formik>
  );
}
