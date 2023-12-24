import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../redux/selesctors';
import { signOut } from '../../redux/operations';
// import { setToken } from '../../redux/auth/auth';

const SharedLayout = () => {
  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  function logout() {
    // setToken(null);
    dispatch(signOut());
    // console.log(token);
  }

  return (
    <>
      <Header />
      {token && (
        <button
          type="button"
          onClick={() => {
            logout();
          }}
        >
          LOGOUT
        </button>
      )}
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster reverseOrder={false} />
    </>
  );
};

export default SharedLayout;
