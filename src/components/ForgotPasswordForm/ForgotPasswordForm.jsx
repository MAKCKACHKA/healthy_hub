import { useFormik } from 'formik';
import { validationShemasEmail } from '../../validationShemas/validationShemasSingIn';
import { FormStyled } from './ForgotPasswordForm.styled';
import { ErrorMessageInput } from '../SignInForm/SignInForm.styled';
import { Input } from '../Input/Input';
import { PrimaryBtn } from '../PrimaryBtn/PrimaryBtn';
import { InputWrapp } from '../Input/Input.styled';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/operations';

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ email }, actions) => {
    dispatch(forgotPassword({ email }));

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationShemasEmail,
    onSubmit: handleSubmitForm,
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
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
      </InputWrapp>
      <PrimaryBtn text={'Send'} />
    </FormStyled>
  );
};
