import StyledRecommendedFoodPage from './RecommendedFoodPage.styled';

export default function RecommendedFoodPage() {
  const food = ['1', '2', '3', '4', '5', 6, 7, 8, 9, 10];

  return (
    <StyledRecommendedFoodPage>
      <div className="main_div">
        <p>RecommendedFoodPage</p>
        <div>
          <div className="img_div">
            <img src="" alt="" width={300} height={312} />
          </div>
          <ul>
            {food.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </StyledRecommendedFoodPage>
  );
}
