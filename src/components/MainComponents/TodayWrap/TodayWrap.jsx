import DailyGoal from '../Daily goal/DailyGoal';
import Water from '../Water/Water';
import Food from '../Food/Food';
import {
  StyledContainer,
  HeadingWrapper,
  StyledLink,
} from './TodayWrap.styled';
import icons from '../../../assets/icons.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData, selectToken } from '../../../redux/selesctors';

axios.defaults.baseURL = 'https://healthy-hub-rest-api.onrender.com/api';

export default function TodayWrap() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUserData);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      <HeadingWrapper>
        <h2>Today</h2>
        <StyledLink to="/dashboard">
          On the way to the goal
          <svg>
            <use href={`${icons}#icon-arrow-right`} />
          </svg>
        </StyledLink>
      </HeadingWrapper>
      <StyledContainer>
        <DailyGoal
          calories={user.user?.dailyCalories}
          water={user.user?.dailyWater}
        />
        {/*
          <Water
            waterobjective={user.dailyWater}
            watercurrent={user.consumedWaterByDay}
            token={token}
          />
  */}
        {/*<Food stats={user} meals={user.consumedMealsByDay} />*/}
      </StyledContainer>
    </div>
  );
}
