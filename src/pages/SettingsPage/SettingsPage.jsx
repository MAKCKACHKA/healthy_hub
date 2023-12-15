import { IconWrapper } from './SettingsPage.styled';
import Illustration from '../../assets/Illustration.svg';

export default function SettingsPage() {
  return (
    <>
      <h2>Profile setting</h2>
      <IconWrapper>
        <use href={`${Illustration}#icon-Illustration`} />
      </IconWrapper>
    </>
  );
}
