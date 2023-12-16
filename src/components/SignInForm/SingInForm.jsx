import { useFormik } from 'formik';
import { validationShemasSignIn } from '../../validationShemas/validationShemasSingIn';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import { Input } from '../Input/Input';
import {
  EmailInputWrap,
  ErrorMessageInput,
  PasswordInputWrap,
  SingInFormStyled,
} from './SignInForm.styled';

export const SingInForm = () => {
  const handleSubmitForm = ({ email, password }, actions) => {
    console.log({ email, password });

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
      <EmailInputWrap>
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
          valid={formik.isValid}
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorMessageInput id="email">
            {formik.errors.email}
          </ErrorMessageInput>
        )}
      </EmailInputWrap>
      <PasswordInputWrap>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          valid={formik.isValid}
        />
        {formik.errors.password && formik.touched.password && (
          <ErrorMessageInput id="password">
            {formik.errors.password}
          </ErrorMessageInput>
        )}
      </PasswordInputWrap>
      <PrimaryBtn text={'Sign In'} />
    </SingInFormStyled>
  );
};
