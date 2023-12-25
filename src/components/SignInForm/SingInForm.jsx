import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import icon from '../../assets/icons.svg';
import { signin } from '../../redux/operations.js';
import { validationShemasSignIn } from '../../validationShemas/validationShemasSingIn';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import { Input } from '../Input/Input';
import { ErrorMessageInput, SingInFormStyled } from './SignInForm.styled';
import { InputWrapp } from '../Input/Input.styled';
import {
  InputIconErrorWrapp,
  ShowPasswordBtn,
  SvgIcon,
} from '../SignUpForm/SignUpForm.styled.js';

export const SingInForm = () => {
  const [type, setType] = useState('password');

  const dispatch = useDispatch();

  const handleSubmitForm = ({ email, password }, actions) => {
    dispatch(signin({ email, password }));

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationShemasSignIn,
    onSubmit: handleSubmitForm,
  });

  return (
    <SingInFormStyled onSubmit={formik.handleSubmit}>
      <InputWrapp>
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
            <ShowPasswordBtn type="button" onClick={() => setType('password')}>
              <svg width={16} height={16}>
                <use href={`${icon}#icon-eye-off`}></use>
              </svg>
            </ShowPasswordBtn>
          )}
        </InputIconErrorWrapp>
      </InputWrapp>

      <PrimaryBtn text={'Sign In'} />
    </SingInFormStyled>
  );
};
