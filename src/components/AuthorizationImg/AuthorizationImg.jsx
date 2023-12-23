import { Img } from './Authorization.styled';

export const AuthorizationImg = ({ pageIllustrations, currentStep }) => {
  let svgPath = 'icon-auth';

  switch (currentStep) {
    case 1:
      svgPath = 'icon-Goals';
      break;
    case 2:
      svgPath = 'icon-gender-and-age';
      break;
    case 3:
      svgPath = 'icon-body-parameters';
      break;
    case 4:
      svgPath = 'icon-activity';
      break;

    default:
      break;
  }
  return (
    <Img>
      <use href={`${pageIllustrations}#${svgPath}`} />
    </Img>
  );
};
