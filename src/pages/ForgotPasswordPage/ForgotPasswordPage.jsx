import pageIllustrations from '../../assets/pageIllustrations.svg';
import { AuthorizationImg } from '../../components/AuthorizationImg/AuthorizationImg';
import { ForgotPasswordForm } from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import { SignInOrUp } from '../../components/SignInOrUp/SignInOrUp';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Title } from '../../components/Title/Title';
import { TextPartWrapper } from '../SignInPage/SignInPage.styled';
import { Section } from './ForgotPasswordPage.styled';

export default function ForgotPasswordPage() {
  return (
    <Section>
      <AuthorizationImg pageIllustrations={pageIllustrations} />
      <TextPartWrapper>
        <div>
          <Title titleText={'Forgot your password'} />
          <SubTitle
            description={'We will send you an email with recovery instructions'}
          />
          <ForgotPasswordForm />
        </div>

        <SignInOrUp
          descriptionText={`If you don't have an account yet`}
          linkText={'Sign up'}
          to={'/signup'}
        />
      </TextPartWrapper>
    </Section>
  );
}
