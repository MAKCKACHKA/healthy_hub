import StyledRecommendedFoodPage from './RecommendedFoodPage.styled';
import Illustration from '../../assets/pageIllustrations.svg';
import { useDispatch } from 'react-redux';
import { refreshRecommendedFood } from '../../redux/operations';
import {
  selectRecFood,
  selectIsLoadAuth,
  selectIsLoadData,
} from '../../redux/selesctors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';

export default function RecommendedFoodPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadAuth && selectIsLoadData);
  const food = useSelector(selectRecFood);
  let reducedArr = [];

  useEffect(() => {
    dispatch(refreshRecommendedFood());
  }, [dispatch]);

  if (food) {
    reducedArr = food.slice(0, 10);
  }

  return (
    <StyledRecommendedFoodPage>
      <div className="main_div">
        <h3>Recommended Food</h3>
        <div className="wrapper">
          <svg className="img_div">
            <use href={`${Illustration}#icon-recommented-food`} />
          </svg>
          {isLoading && <Loader />}
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
        </div>
      </div>
    </StyledRecommendedFoodPage>
  );
}
