import StyledRecommendedFoodPage from './RecommendedFoodPage.styled';
import Illustration from '../../assets/pageIllustrations.svg';

export default function RecommendedFoodPage() {
  const food = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const data = {
    carbohydrates: 14,
    protein: 0.3,
    fat: 0.2,
    name: 'Apples',
    amount: '100 g',
    img: 'https://ftp.goit.study/img/you_health/Apples.png',
    calories: 52,
  };

  const { name, amount, img, calories } = data;

  return (
    <StyledRecommendedFoodPage>
      <div className="main_div">
        <h3>Recommended Food</h3>
        <div className="wrapper">
          <svg className="img_div">
            <use href={`${Illustration}#icon-recommented-food`} />
          </svg>
          <ul>
            {food.map((el) => {
              return (
                <li key={el}>
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
