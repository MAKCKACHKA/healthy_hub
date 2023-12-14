import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const ForgotPasswordPage = lazy(() =>
  import('./pages/ForgotPasswordPage/ForgotPasswordPage')
);

const YourGoalPage = lazy(() => import('./pages/YourGoalPage/YourGoalPage'));
const SelectGenderPage = lazy(() =>
  import('./pages/SelectGenderPage/SelectGenderPage')
);
const BodyParameters = lazy(() =>
  import('./pages/BodyParametersPage/BodyParameters')
);
const YourActivityPage = lazy(() =>
  import('./pages/YourActivityPage/YourActivityPage')
);

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const RecommendedFoodPage = lazy(() =>
  import('./pages/RecommendedFoodPage/RecommendedFoodPage')
);
const SettingsPage = lazy(() => import('./pages/SettingsPage/SettingsPage'));

import { AppWrapper } from './App.styled';
import { useSelector } from 'react-redux';
import { selectToken } from './redux/selesctors';

// const test = import.meta.env.VITE_API_TEST;

// function PublicRoute({ children }) {
//   const token = useSelector(selectToken);
//   return !token ? <Navigate to="/welcome" /> : children;
// }
// function PrivateRoute({ children }) {
//   const token = useSelector(selectToken);
//   return token ? <Navigate to="/main" /> : children;
// }

function App() {
  const test = useSelector(selectToken);
  useEffect(() => {
    console.log(test);
  }, []);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Nonauth */}
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Не зазначето в ТЗ але в макеті є */}
          <Route path="/your-goal" element={<YourGoalPage />} />
          <Route path="/select-gender" element={<SelectGenderPage />} />
          <Route path="/body-parameters" element={<BodyParameters />} />
          <Route path="/your-activity" element={<YourActivityPage />} />

          {/* Auth */}
          <Route path="/main" element={<MainPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/recommended-food" element={<RecommendedFoodPage />} />
          <Route path="/settings" element={<SettingsPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
