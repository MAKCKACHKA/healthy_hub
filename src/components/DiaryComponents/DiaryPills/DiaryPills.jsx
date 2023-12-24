import {
  DiaryPillImg,
  MealParamsItemWrapper,
  DiaryPillsWrapper,
  HeaderOfPill,
  MealParamsItem,
  MealParamsItemData,
  MealParamsList,
  MealPillWrapper,
  PillElement,
  TypeOfMeal,
  MealPillItem,
  MealPillParamsList,
  MealPillParamsitem,
  NumberOfMeal,
  NameOfMeal,
  MealPillList,
  MealPillAddSvg,
  MealPillAddParagraph,
  MealPillAdd,
  MealPillEdit,
  MealPillEditSvg,
  MealPillEditText,
  MobileWrapper,
  //   MobileHeader,
  MealPillParamsitemText,
  MealPillParamsitemWrapper,
} from './DiaryPills.styled';
import breakfastImage from '../../../assets/breakfast-image.svg';
import lunchImage from '../../../assets/lunch-image.svg';
import dinnerImage from '../../../assets/dinner-image.svg';
import snackImage from '../../../assets/snack-image.svg';
import icons from './../../../assets/icons.svg';

import { useState, useEffect } from 'react';
import { selectUserData } from '../../../redux/selesctors';
import { useSelector } from 'react-redux';
// import { getCurrentUser } from '../../../redux/operations';
// import { useDispatch } from 'react-redux';

export const DiaryPills = () => {
  const user = useSelector(selectUserData);

  useEffect(() => {
    if (user && user.consumedMealsByDay) {
      console.log(user.consumedMealsByDay);
    }
  }, [user]);

  const [diaryData, setDiaryData] = useState([
    {
      title: 'Breakfast',
      image: breakfastImage,
      totalCarbohydrates: 0,
      totalProtein: 0,
      foods: [],
    },
    {
      title: 'Lunch',
      image: lunchImage,
      totalCarbohydrates: 0,
      totalFat: 0,
      totalProtein: 0,
      foods: [],
    },
    {
      title: 'Dinner',
      image: dinnerImage,
      totalCarbohydrates: 0,
      foods: [],
    },
    {
      title: 'Snack',
      image: snackImage,
      totalCarbohydrates: 0,
      foods: [],
    },
  ]);

  useEffect(() => {
    // if (user && user.consumedMealsByDay && user.consumedMealsByDay === 0) {
    //   const consumedBreakfast =
    //     user.consumedMealsByDay && user.consumedMealsByDay.breakfast
    //       ? user.consumedMealsByDay.breakfast
    //       : 0;
    //   const consumedLunch =
    //     user.consumedMealsByDay && user.consumedMealsByDay.lunch
    //       ? user.consumedMealsByDay.lunch
    //       : 0;
    //   const consumedDinner =
    //     user.consumedMealsByDay && user.consumedMealsByDay.dinner
    //       ? user.consumedMealsByDay.dinner
    //       : 0;
    //   const consumedSnack =
    //     user.consumedMealsByDay && user.consumedMealsByDay.snack
    //       ? user.consumedMealsByDay.snack
    //       : 0;

    if (user && user.consumedMealsByDay) {
      console.log(user.consumedMealsByDay);
      const consumedBreakfast = user.consumedMealsByDay.breakfast || {};
      const consumedLunch = user.consumedMealsByDay.lunch || {};
      const consumedDinner = user.consumedMealsByDay.dinner || {};
      const consumedSnack = user.consumedMealsByDay.snack || {};

      if (
        consumedBreakfast &&
        consumedLunch &&
        consumedDinner &&
        consumedDinner
      ) {
        console.log(consumedBreakfast);
        console.log(consumedLunch);
        console.log(consumedDinner);
        console.log(consumedSnack);
        setDiaryData([
          {
            title: 'Breakfast',
            image: breakfastImage,
            totalCarbohydrates:
              consumedBreakfast !== 0
                ? consumedBreakfast.totalCarbohydrates
                : 0,
            totalFat: consumedBreakfast !== 0 ? consumedBreakfast.totalFat : 0,
            totalProtein:
              consumedBreakfast !== 0 ? consumedBreakfast.totalProtein : 0,
            foods:
              consumedBreakfast !== 0
                ? consumedBreakfast.foods
                  ? consumedBreakfast.foods
                  : []
                : [],
          },
          {
            title: 'Lunch',
            image: lunchImage,
            totalCarbohydrates:
              consumedLunch !== 0 ? consumedLunch.totalCarbohydrates : 0,
            totalFat: consumedLunch !== 0 ? consumedLunch.totalFat : 0,
            totalProtein: consumedLunch !== 0 ? consumedLunch.totalProtein : 0,
            foods:
              consumedLunch !== 0
                ? consumedLunch.foods
                  ? consumedLunch.foods
                  : []
                : [],
          },
          {
            title: 'Dinner',
            image: dinnerImage,
            totalCarbohydrates:
              consumedDinner !== 0 ? consumedDinner.totalCarbohydrates : 0,
            totalFat: consumedDinner !== 0 ? consumedDinner.totalFat : 0,
            totalProtein:
              consumedDinner !== 0 ? consumedDinner.totalProtein : 0,
            foods:
              consumedDinner !== 0
                ? consumedDinner.foods
                  ? consumedDinner.foods
                  : []
                : [],
          },
          {
            title: 'Snack',
            image: snackImage,
            totalCarbohydrates:
              consumedSnack !== 0 ? consumedSnack.totalCarbohydrates : 0,
            totalFat: consumedSnack !== 0 ? consumedSnack.totalFat : 0,
            totalProtein: consumedSnack !== 0 ? consumedSnack.totalProtein : 0,
            foods:
              consumedSnack !== 0
                ? consumedSnack.foods
                  ? consumedSnack.foods
                  : []
                : [],
          },
        ]);
      }
    }
  }, [user]);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 834);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 834);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DiaryPillsWrapper>
      {diaryData &&
        diaryData.map((meal) => (
          <PillElement key={meal.title}>
            <HeaderOfPill>
              {/* <MobileHeader> */}
              <DiaryPillImg src={meal.image} alt="Plate" />
              <TypeOfMeal>{meal.title}</TypeOfMeal>
              {/* </MobileHeader> */}
              <MealParamsList>
                <MealParamsItemWrapper>
                  <MealParamsItem>Carbonohidrates:</MealParamsItem>
                  <MealParamsItemData>
                    {meal.totalCarbohydrates}
                  </MealParamsItemData>
                </MealParamsItemWrapper>
                <MealParamsItemWrapper>
                  <MealParamsItem>Protein:</MealParamsItem>
                  <MealParamsItemData>{meal.totalFat}</MealParamsItemData>
                </MealParamsItemWrapper>
                <MealParamsItemWrapper>
                  <MealParamsItem>Fat:</MealParamsItem>
                  <MealParamsItemData>{meal.totalProtein}</MealParamsItemData>
                </MealParamsItemWrapper>
              </MealParamsList>
            </HeaderOfPill>
            <MealPillWrapper>
              <MealPillList>
                {meal.foods.map((food, index) => (
                  <MealPillItem key={index}>
                    <NumberOfMeal>{index + 1}</NumberOfMeal>
                    {isSmallScreen ? (
                      <MobileWrapper>
                        <NameOfMeal>{food.name}</NameOfMeal>
                        <MealPillParamsList>
                          <MealPillParamsitemWrapper>
                            <MealPillParamsitemText>
                              Carb.
                            </MealPillParamsitemText>
                            <MealPillParamsitem>
                              {food.nutrition.carbohydrates}
                            </MealPillParamsitem>
                          </MealPillParamsitemWrapper>
                          <MealPillParamsitemWrapper>
                            <MealPillParamsitemText>
                              Prot.
                            </MealPillParamsitemText>
                            <MealPillParamsitem>
                              {food.nutrition.protein}
                            </MealPillParamsitem>
                          </MealPillParamsitemWrapper>
                          <MealPillParamsitemWrapper>
                            <MealPillParamsitemText>
                              Fat.
                            </MealPillParamsitemText>
                            <MealPillParamsitem>
                              {food.nutrition.fat}
                            </MealPillParamsitem>
                          </MealPillParamsitemWrapper>
                        </MealPillParamsList>
                      </MobileWrapper>
                    ) : (
                      <>
                        <NameOfMeal>{food.name}</NameOfMeal>
                        <MealPillParamsList>
                          <MealPillParamsitem>
                            {food.nutrition.carbohydrates}
                          </MealPillParamsitem>
                          <MealPillParamsitem>
                            {food.nutrition.protein}
                          </MealPillParamsitem>
                          <MealPillParamsitem>
                            {food.nutrition.fat}
                          </MealPillParamsitem>
                        </MealPillParamsList>
                      </>
                    )}
                    <MealPillEdit>
                      <MealPillEditSvg>
                        <use href={`${icons}#icon-edit`}></use>
                      </MealPillEditSvg>
                      <MealPillEditText>Edit</MealPillEditText>
                    </MealPillEdit>
                  </MealPillItem>
                ))}
                <MealPillItem>
                  <NumberOfMeal>{meal.foods.length + 1}</NumberOfMeal>
                  <MealPillAdd>
                    <MealPillAddSvg>
                      <use href={`${icons}#icon-add`}></use>
                    </MealPillAddSvg>
                    <MealPillAddParagraph>
                      Record your meal
                    </MealPillAddParagraph>
                  </MealPillAdd>
                </MealPillItem>
              </MealPillList>
            </MealPillWrapper>
          </PillElement>
        ))}
    </DiaryPillsWrapper>
  );
};
