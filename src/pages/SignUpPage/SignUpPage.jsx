import { useState } from 'react';
import pageIllustrations from '../../assets/pageIllustrations.svg';
import { AuthorizationImg } from '../../components/AuthorizationImg/AuthorizationImg';
import { PrimaryBtn } from '../../components/PrimaryBtn/PrimaryBtn';
import { SecondaryBtn } from '../../components/SecondaryBtn/SecondaryBtn';
import { SignInOrUp } from '../../components/SignInOrUp/SignInOrUp';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Title } from '../../components/Title/Title';
import { Section } from '../ForgotPasswordPage/ForgotPasswordPage.styled';
import { TextPartWrapper } from '../SignInPage/SignInPage.styled';
import { BtnWrapp } from './SignUpPage.styled';
import { SecondaryBtnWropp } from '../../components/SignUpForm/SignUpForm.styled';

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0);

  let currentText = 'Sign up';

  switch (currentStep) {
    case 1:
      currentText = 'Your goal';
      break;
    case 2:
      currentText = 'Select gender, Age';
      break;
    case 3:
      currentText = 'Body parameters';
      break;
    case 4:
      currentText = 'Your Activity';
      break;

    default:
      break;
  }

  let currentDesc = 'You need to register to use the service';

  switch (currentStep) {
    case 1:
      currentDesc = 'Choose a goal so that we can help you effectively';
      break;
    case 2:
      currentDesc = 'Choose a goal so that we can help you effectively';
      break;
    case 3:
      currentDesc = 'Enter your parameters for correct performance tracking';
      break;
    case 4:
      currentDesc = 'To correctly calculate calorie and water intake';
      break;

    default:
      break;
  }

  return (
    <Section>
      <AuthorizationImg
        pageIllustrations={pageIllustrations}
        currentStep={currentStep}
      />
      <TextPartWrapper>
        <div>
          <Title titleText={currentText} />
          <SubTitle description={currentDesc} />
          <SignUpForm currentStep={currentStep} />
          <BtnWrapp>
            {currentStep < 4 && (
              <PrimaryBtn
                type="button"
                text="Next"
                onClick={() => setCurrentStep(currentStep + 1)}
              />
            )}
            {currentStep > 0 && (
              <SecondaryBtnWropp $currentStep={currentStep}>
                <SecondaryBtn
                  type="button"
                  text="Back"
                  onClick={() => setCurrentStep(currentStep - 1)}
                />
              </SecondaryBtnWropp>
            )}
          </BtnWrapp>
        </div>

        {currentStep === 0 && (
          <SignInOrUp
            descriptionText={`Do you already have an account?`}
            linkText={'Sign in'}
            to={'/signin'}
            flexDirectionColumn={true}
          />
        )}
      </TextPartWrapper>
    </Section>
  );
}
