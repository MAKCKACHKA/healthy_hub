import TodayWrap from '../../components/MainComponents/TodayWrap/TodayWrap';
import Diary from '../../components/MainComponents/Diary/Diary';
import RecommendedFood from '../../components/MainComponents/RecommendedFood/RecommendedFood';
import { StyledWrap } from './Main.styles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '../../redux/operations';

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <TodayWrap />
      <StyledWrap>
        <Diary />
        <RecommendedFood />
      </StyledWrap>
    </>
  );
}
