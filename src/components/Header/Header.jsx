import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selesctors';
import { HeaderAuth } from './HeaderVariables/HeaderAuth';
import { HeaderNotAuth } from './HeaderVariables/HeaderNotAuth';

export const Header = () => {
  const isLogedin = useSelector(selectToken);
  return <>{isLogedin ? <HeaderAuth /> : <HeaderNotAuth />}</>;
};
