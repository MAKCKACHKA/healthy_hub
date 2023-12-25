import DiaryItem from './DiaryItem/DiaryItem';

import breakfastImage from '../../../assets/meals/breakfast-image.svg';
import dinnerImage from '../../../assets/meals/dinner-image.svg';
import lunchImage from '../../../assets/meals/lunch-image.svg';
import snackImage from '../../../assets/meals/snack-image.svg';

import {
  CardsWrap,
  DiaryLink,
  Title,
  TitleWrapper,
  Container,
} from './Diary.styled';

const Diary = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Diary</Title>
        <DiaryLink to="/diary">See more</DiaryLink>
      </TitleWrapper>
      <CardsWrap>
        <DiaryItem title={'Breakfast'} image={breakfastImage} />
        <DiaryItem title={'Lunch'} image={lunchImage} />
        <DiaryItem title={'Dinner'} image={dinnerImage} />
        <DiaryItem title={'Snack'} image={snackImage} />
      </CardsWrap>
    </Container>
  );
};

export default Diary;
