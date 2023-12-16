import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <>
      <Header />
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
