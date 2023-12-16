import StyledRecommendedFoodPage from './RecommendedFoodPage.styled';

export default function RecommendedFoodPage() {
  const food = ['1', '2', '3', '4', '5', 6, 7, 8, 9, 10];

  return (
    <StyledRecommendedFoodPage>
      <div className="main_div">
        <h3>Recommended Food</h3>
        <div className="wrapper">
          <div className="img_div">
            <img src="" alt="" width={300} />
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
