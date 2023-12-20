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

axios.defaults.baseURL = 'https://healthy-hub-rest-api.onrender.com/api';

export default function TodayWrap() {
  const [userStats, setUserStats] = useState({});
  const [token, setToken] = useState('');
  const [waterConsumed, setWaterConsumed] = useState(0);
  const [mealsConsumed, setMealsConsumed] = useState(0);

  useEffect(() => {
    async function logIn() {
      await axios
        .post('/auth/signin', {
          email: 'john.doe@example.com',
          password: 'randompassword123',
        })
        .then((response) => {
          setToken(response.data.user.token);
          console.log(token);
        });
    }

    logIn();
  }, [token]);

  useEffect(() => {
    async function fetchUser() {
      await axios
        .get('/user/current', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserStats(response.data.user);
          setWaterConsumed(response.data.consumedWaterByDay);
          setMealsConsumed(response.data.consumedMealsByDay);
          console.log(response.data);
        });
    }
    if (token !== '') fetchUser();
  }, [token]);

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
          calories={userStats.dailyCalories}
          water={userStats.dailyWater}
        />
        <Water
          waterobjective={userStats.dailyWater}
          watercurrent={waterConsumed.ml ? waterConsumed.ml : waterConsumed}
          token={token}
        />
        <Food stats={userStats} meals={mealsConsumed} />
      </StyledContainer>
    </div>
  );
}
