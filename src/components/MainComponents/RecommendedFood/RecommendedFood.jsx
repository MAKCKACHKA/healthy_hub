import StyledRecommendedFoodSection from './RecommendedFood.styled';
import icons from '../../../assets/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecFood,
  selectIsLoadAuth,
  selectIsLoadData,
} from '../../../redux/selesctors';
import { useEffect } from 'react';
import { refreshRecommendedFood } from '../../../redux/operations';
import { NavLink } from 'react-router-dom';
import { Loader } from '../../Loader/Loader';

export default function RecommendedFoodPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadAuth && selectIsLoadData);
  const food = useSelector(selectRecFood);
  let reducedArr = [];

  useEffect(() => {
    dispatch(refreshRecommendedFood());
  }, [dispatch]);

  if (food) {
    reducedArr = food.slice(0, 4);
  }

  return (
    <StyledRecommendedFoodSection>
      <h2>Recommended Food</h2>
      {isLoading && <Loader />}
      <div className="wrapper">
        <ul>
          {reducedArr?.map(({ amount, calories, img, name, _id }) => {
            return (
              <li key={_id}>
                <div className="description">
                  <div className="small_img_div">
                    <img src={img} alt="" width={46} height={46} />
                  </div>
                  <section>
                    <h4>{name}</h4>
                    <p>
                      {amount}
                      <span>{calories} calories</span>
                    </p>
                  </section>
                </div>
              </li>
            );
          })}
        </ul>
        <NavLink className="href" to="/recommended-food">
          See more
          <svg className="svg">
            <use href={`${icons}#icon-arrow-right`} />
          </svg>
        </NavLink>
      </div>
    </StyledRecommendedFoodSection>
  );
}
