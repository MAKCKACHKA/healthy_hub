import styled from 'styled-components';

const StyledRecommendedFoodPage = styled.div`
  padding: 10px;

  .main_div {
    width: 100%;
  }

  .img_div {
    outline: 1px solid tomato;
    width: 300px;
    height: 312px;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    max-width: 300px;
  }

  ul > li {
    display: block;
    width: 100%;
    height: 86px;
    background-color: #9bde90;
    outline: 1px solid tomato;
  }
`;

export default StyledRecommendedFoodPage;
