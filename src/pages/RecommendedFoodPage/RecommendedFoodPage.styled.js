import styled from 'styled-components';

const StyledRecommendedFoodPage = styled.div`
  width: 320px;
  margin: 0 auto;

  h3 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .main_div {
    width: 100%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .img_div {
    outline: 1px solid tomato;
    max-width: 300px;
    height: 312px;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    max-width: 300px;
    margin-top: 24px;
  }

  ul > li {
    display: block;
    width: 100%;
    height: 86px;
    padding: 20px 80px 20px 24px;
    background-color: #9bde90;
    outline: 1px solid tomato;
  }

  @media screen and (min-width: 834px) {
    width: calc(834px - (27px * 2));
    margin: 0 auto;

    .img_div {
      width: 100%;
      max-width: 380px;
      height: 396px;
      margin: 0 auto;
    }

    img {
      width: 100%;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      max-width: 100%;
    }

    ul > li {
      width: 380px;
      height: 86px;
      padding: 20px 160px 20px 24px;
      background-color: #9bde90;
      outline: 1px solid tomato;
    }
  }

  @media screen and (min-width: 1440px) {
    width: calc(1440px - 150px - 27px);

    .wrapper {
      display: flex;
      flex-direction: row;
      column-gap: 24px;
      margin-top: 16px;
    }

    .img_div {
      max-width: 536px;
      height: 560px;
      margin-top: 8px;
      /* margin: 0 auto; */
    }

    ul {
      margin-top: 0;
      width: 676px;
    }

    ul > li {
      width: 328px;
      padding: 20px 108px 20px 24px;
    }
  }
`;

export default StyledRecommendedFoodPage;
