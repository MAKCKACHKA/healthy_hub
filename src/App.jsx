import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const ForgotPasswordPage = lazy(() =>
  import('./pages/ForgotPasswordPage/ForgotPasswordPage')
);

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const RecommendedFoodPage = lazy(() =>
  import('./pages/RecommendedFoodPage/RecommendedFoodPage')
);
const SettingsPage = lazy(() => import('./pages/SettingsPage/SettingsPage'));

import { AppWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from './redux/selesctors';
import { getCurrentUser, setAuthToken } from './redux/operations';

// const test = import.meta.env.VITE_API_TEST;

function PrivateRoute({ children }) {
  const token = useSelector(selectToken);
  return token ? <Navigate to="/main" /> : children;
}
function PublicRoute({ children }) {
  const token = useSelector(selectToken);
  return !token ? <Navigate to="/welcome" /> : children;
}

function App() {
  const token = useSelector(selectToken);
  // const user = useSelector(selectUserData);
  // useEffect(() => {
  //   console.log(token, user);
  // }, [user, token]);

  const dispatch = useDispatch();

  useEffect(() => {
    setAuthToken(token);
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [token, dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Nonauth */}
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <WelcomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PrivateRoute>
                <SignUpPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PrivateRoute>
                <SignInPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PrivateRoute>
                <ForgotPasswordPage />
              </PrivateRoute>
            }
          />

          {/* Auth */}
          <Route
            path="/main"
            element={
              <PublicRoute>
                <MainPage />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PublicRoute>
                <DashboardPage />
              </PublicRoute>
            }
          />
          <Route
            path="/diary"
            element={
              <PublicRoute>
                <DiaryPage />
              </PublicRoute>
            }
          />
          <Route
            path="/recommended-food"
            element={
              <PublicRoute>
                <RecommendedFoodPage />
              </PublicRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PublicRoute>
                <SettingsPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
