import TodayWrap from '../../components/MainComponents/TodayWrap/TodayWrap';
import Diary from '../../components/MainComponents/Diary/Diary';
import RecommendedFood from '../../components/MainComponents/RecommendedFood/RecommendedFood';
import { StyledWrap } from './Main.styles';

export default function MainPage() {
  return (
    <>
      <p>MainPage</p>
      <TodayWrap />
      <StyledWrap>
        <Diary />
        <RecommendedFood />
      </StyledWrap>
    </>
  );
}
