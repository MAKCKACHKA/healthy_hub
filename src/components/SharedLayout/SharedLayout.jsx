import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoadAuth, selectIsLoadData } from '../../redux/selesctors';
// import { setToken } from '../../redux/auth/auth';

const SharedLayout = () => {
  const isLoadData = useSelector(selectIsLoadData);
  const isLoadAuth = useSelector(selectIsLoadAuth);
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster reverseOrder={false} />
      {isLoadData && isLoadAuth && <Loader />}
    </>
  );
};

export default SharedLayout;
