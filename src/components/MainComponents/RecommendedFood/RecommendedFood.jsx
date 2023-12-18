import StyledRecommendedFoodSection from './RecommendedFood.styled';
import icons from '../../../assets/icons.svg';

export default function RecommendedFoodPage() {
  const food = [1, 2, 3, 4];

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
    <StyledRecommendedFoodSection>
      <h2>Recommended Food</h2>
      <div className="wrapper">
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
        <a className="href" href="././Recommended-food">
          See more
          <svg className="svg">
            <use href={`${icons}#icon-arrow-right`} />
          </svg>
        </a>
      </div>
    </StyledRecommendedFoodSection>
  );
}
