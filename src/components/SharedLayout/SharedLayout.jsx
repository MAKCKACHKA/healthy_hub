import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../Loader/Loader';
// import { setToken } from '../../redux/auth/auth';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster reverseOrder={false} />
    </>
  );
};

export default SharedLayout;
