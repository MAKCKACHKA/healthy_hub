import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import icon from '../../assets/icons.svg';
import { signup } from '../../redux/operations.js';
import { validationShemaUser } from '../../validationShemas/validationShemasSingIn';
import { FormStyled } from '../ForgotPasswordForm/ForgotPasswordForm.styled';
import { InputWrapp } from '../Input/Input.styled';
import { Input } from '../Input/Input';
import { ErrorMessageInput } from '../SignInForm/SignInForm.styled';
import { RadioBtn } from '../RadioBtn/RadioBtn';
import {
  GoalFormWrapp,
  GenderAgeFormWrapp,
  LabelStyled,
  GenderAgeRadioBtn,
  ParametrsFormWrapp,
  AvtivityFormWrapp,
  ActivityBtnWrapp,
  SvgIcon,
  InputIconErrorWrapp,
  ShowPasswordBtn,
} from './SignUpForm.styled';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import { useState } from 'react';

export const SignUpForm = ({ currentStep }) => {
  const [type, setType] = useState('password');

  const dispatch = useDispatch();

  const handleSubmitForm = (values, actions) => {
    const user = { ...values };
    user.coefficientOfActivity = Number(user.coefficientOfActivity);
    dispatch(signup({ ...user }));

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      goal: 'lose fat',
      gender: 'male',
      age: '',
      height: '',
      weight: '',
      coefficientOfActivity: '1.2',
    },

    validationSchema: validationShemaUser,
    onSubmit: handleSubmitForm,
  });

  return (
    <FormStyled $currentStep={currentStep} onSubmit={formik.handleSubmit}>
      {currentStep === 0 && (
        <InputWrapp>
          <InputIconErrorWrapp>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              valid={formik.errors}
              className={
                !formik.errors.name && formik.values.name
                  ? 'correct'
                  : 'incorrect'
              }
            />
            {!formik.errors.name && formik.values.name && (
              <SvgIcon width={16} height={16}>
                <use href={`${icon}#icon-correct`}></use>
              </SvgIcon>
            )}
            {formik.errors.name && !formik.values.name && (
              <>
                <SvgIcon width={16} height={16}>
                  <use href={`${icon}#icon-error`}></use>
                </SvgIcon>
                <ErrorMessageInput id="name">
                  {formik.errors.name}
                </ErrorMessageInput>
              </>
            )}

            {formik.errors.name && formik.values.name !== '' && (
              <ErrorMessageInput id="name">
                {formik.errors.name}
              </ErrorMessageInput>
            )}
          </InputIconErrorWrapp>

          <InputIconErrorWrapp>
            <Input
              name="email"
              type="text"
              placeholder="E-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
              valid={formik.errors}
              className={
                !formik.errors.email && formik.values.email
                  ? 'correct'
                  : 'incorrect'
              }
            />
            {!formik.errors.email && formik.values.email && (
              <SvgIcon width={16} height={16}>
                <use href={`${icon}#icon-correct`}></use>
              </SvgIcon>
            )}
            {formik.errors.email && formik.values.email !== '' && (
              <>
                <SvgIcon width={16} height={16}>
                  <use href={`${icon}#icon-error`}></use>
                </SvgIcon>
                <ErrorMessageInput id="email">
                  {formik.errors.email}
                </ErrorMessageInput>
              </>
            )}
          </InputIconErrorWrapp>

          <InputIconErrorWrapp>
            <Input
              name="password"
              type={type}
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              valid={formik.errors}
              className={
                !formik.errors.password && formik.values.password
                  ? 'correct'
                  : 'incorrect'
              }
            />
            {!formik.errors.password && formik.values.password && (
              <SvgIcon id="password" width={16} height={16}>
                <use href={`${icon}#icon-correct`}></use>
              </SvgIcon>
            )}
            {formik.errors.password && formik.values.password !== '' && (
              <>
                <SvgIcon id="password" width={16} height={16}>
                  <use href={`${icon}#icon-error`}></use>
                </SvgIcon>
                <ErrorMessageInput id="password">
                  {formik.errors.password}
                </ErrorMessageInput>
              </>
            )}
            {type === 'password' ? (
              <ShowPasswordBtn type="button" onClick={() => setType('text')}>
                <svg width={16} height={16}>
                  <use href={`${icon}#icon-eye`}></use>
                </svg>
              </ShowPasswordBtn>
            ) : (
              <ShowPasswordBtn
                type="button"
                onClick={() => setType('password')}
              >
                <svg width={16} height={16}>
                  <use href={`${icon}#icon-eye-off`}></use>
                </svg>
              </ShowPasswordBtn>
            )}
          </InputIconErrorWrapp>
        </InputWrapp>
      )}
      {currentStep === 1 && (
        <GoalFormWrapp>
          <RadioBtn
            name="goal"
            type="radio"
            value="lose fat"
            labelText="Lose Fat"
            onChange={formik.handleChange}
            defaultChecked
          />
          <RadioBtn
            name="goal"
            type="radio"
            value="maintain"
            labelText="Maintain"
            onChange={formik.handleChange}
          />
          <RadioBtn
            name="goal"
            type="radio"
            value="gain muscle"
            labelText="Gain Muscle"
            onChange={formik.handleChange}
          />
        </GoalFormWrapp>
      )}

      {currentStep === 2 && (
        <GenderAgeFormWrapp>
          <LabelStyled htmlFor="gender">Gender</LabelStyled>

          <GenderAgeRadioBtn>
            <RadioBtn
              id="gender"
              name="gender"
              type="radio"
              value="male"
              labelText="Male"
              onChange={formik.handleChange}
              defaultChecked
            />
            <RadioBtn
              name="gender"
              type="radio"
              value="female"
              labelText="Female"
              onChange={formik.handleChange}
            />
          </GenderAgeRadioBtn>
          <LabelStyled htmlFor="age">Your age</LabelStyled>
          <InputIconErrorWrapp>
            <Input
              name="age"
              type="number"
              placeholder="Enter your age"
              onChange={formik.handleChange}
              value={formik.values.age}
              valid={formik.errors}
            />
            {formik.errors.age && formik.values.age && (
              <ErrorMessageInput id="password">
                {formik.errors.age}
              </ErrorMessageInput>
            )}
          </InputIconErrorWrapp>
        </GenderAgeFormWrapp>
      )}
      {currentStep === 3 && (
        <ParametrsFormWrapp>
          <div>
            <LabelStyled htmlFor="height">Height</LabelStyled>
            <InputIconErrorWrapp>
              <Input
                name="height"
                type="number"
                placeholder="Enter your height (cm)"
                onChange={formik.handleChange}
                value={formik.values.height}
                valid={formik.errors}
                className={
                  !formik.errors.height && formik.values.height
                    ? 'correct'
                    : 'incorrect'
                }
              />
              {!formik.errors.height && formik.values.height && (
                <SvgIcon width={16} height={16}>
                  <use href={`${icon}#icon-correct`}></use>
                </SvgIcon>
              )}
              {formik.errors.height && formik.values.height && (
                <>
                  <SvgIcon width={16} height={16}>
                    <use href={`${icon}#icon-error`}></use>
                  </SvgIcon>
                  <ErrorMessageInput id="password">
                    {formik.errors.height}
                  </ErrorMessageInput>
                </>
              )}
            </InputIconErrorWrapp>
          </div>

          <div>
            <LabelStyled htmlFor="weight">Weight</LabelStyled>
            <InputIconErrorWrapp>
              <Input
                name="weight"
                type="number"
                placeholder="Enter your weight"
                onChange={formik.handleChange}
                value={formik.values.weight}
                valid={formik.errors}
                className={
                  !formik.errors.weight && formik.values.weight
                    ? 'correct'
                    : 'incorrect'
                }
              />
              {!formik.errors.weight && formik.values.weight && (
                <SvgIcon width={16} height={16}>
                  <use href={`${icon}#icon-correct`}></use>
                </SvgIcon>
              )}
              {formik.errors.weight && formik.values.weight && (
                <>
                  <SvgIcon width={16} height={16}>
                    <use href={`${icon}#icon-error`}></use>
                  </SvgIcon>
                  <ErrorMessageInput id="password">
                    {formik.errors.weight}
                  </ErrorMessageInput>
                </>
              )}
            </InputIconErrorWrapp>
          </div>
        </ParametrsFormWrapp>
      )}

      {currentStep === 4 && (
        <AvtivityFormWrapp>
          <RadioBtn
            name="coefficientOfActivity"
            type="radio"
            value="1.2"
            labelText="1.2 - if you do not have physical activity and sedentary work"
            onChange={formik.handleChange}
            defaultChecked
          />
          <RadioBtn
            name="coefficientOfActivity"
            type="radio"
            value="1.375"
            labelText="1.375 - if you do short runs or light gymnastics 1-3 times a week"
            onChange={formik.handleChange}
          />
          <RadioBtn
            name="coefficientOfActivity"
            type="radio"
            value="1.55"
            labelText="1.55 - if you play sports with average loads 3-5 times a week"
            onChange={formik.handleChange}
          />
          <RadioBtn
            name="coefficientOfActivity"
            type="radio"
            value="1.725"
            labelText="1.725 ​​- if you train fully 6-7 times a week"
            onChange={formik.handleChange}
          />
          <RadioBtn
            name="coefficientOfActivity"
            type="radio"
            value="1.9"
            labelText="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
            onChange={formik.handleChange}
          />
        </AvtivityFormWrapp>
      )}
      {currentStep === 4 && (
        <ActivityBtnWrapp>
          <PrimaryBtn text="Sing Up" />
        </ActivityBtnWrapp>
      )}
    </FormStyled>
  );
};
