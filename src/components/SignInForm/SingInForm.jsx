import { useFormik } from 'formik';
import { validationShemasSignIn } from '../../validationShemas/validationShemasSingIn';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import { Input } from '../Input/Input';
import {
  ErrorMessageInput,
  SingInFormStyled,
} from './SignInForm.styled';
import { InputWrapp } from '../Input/Input.styled';

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
      <InputWrapp>
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
          valid={formik.errors}
          touched={formik.touched}
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorMessageInput id="email">
            {formik.errors.email}
          </ErrorMessageInput>
        )}

        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          valid={formik.errors}
          touched={formik.touched}
        />
        {formik.errors.password && formik.touched.password && (
          <ErrorMessageInput id="password">
            {formik.errors.password}
          </ErrorMessageInput>
        )}
      </InputWrapp>

      <PrimaryBtn text={'Sign In'} />
    </SingInFormStyled>
  );
};
