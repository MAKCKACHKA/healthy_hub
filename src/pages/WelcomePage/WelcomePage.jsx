import pageIllustrations from '../../assets/pageIllustrations.svg';

import { AuthNav } from '../../components/AuthNav/AuthNav';
import { ServiceBenefitsList } from '../../components/ServiceBenefitsList/ServiceBenefitsList';
import {
  HeroImg,
  HeroDescWrap,
  HeroTitle,
  SubTitleHero,
  HeroSection,
} from './WelcomePage.styled';

export default function WelcomePage() {
  return (
    <HeroSection>
      <HeroImg height={300}>
        <use href={`${pageIllustrations}#icon-auth`} />
      </HeroImg>
      <HeroDescWrap>
        <HeroTitle>Set goals and achieve them</HeroTitle>
        <SubTitleHero>
          The service will help you set goals and follow them.
        </SubTitleHero>
        <AuthNav />
        <ServiceBenefitsList />
      </HeroDescWrap>
    </HeroSection>
  );
}
