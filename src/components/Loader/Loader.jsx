import { BeatLoader } from 'react-spinners';
const override = {
  display: 'flex',
  margin: '30vh auto 100vh',
  justifyContent: 'center',
  position: 'fixed',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(2)',
};

export const Loader = () => {
  return <BeatLoader cssOverride={override} color="#E3FFA8" size={9} />;
};
