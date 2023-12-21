import { Img } from './Authorization.styled';

export const AuthorizationImg = ({pageIllustrations}) => {
  return (
    <Img >
      <use href={`${pageIllustrations}#icon-auth`} />
    </Img>
  );
};
