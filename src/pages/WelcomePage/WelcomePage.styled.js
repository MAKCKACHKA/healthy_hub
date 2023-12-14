import styled from 'styled-components';

export const HeroSection = styled.section`
  @media screen and (min-width: 1439px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 40px 0 0 150px;
  }
`;

export const HeroImg = styled.img`
  margin: 24px auto;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 40px auto 80px;
  }

  @media screen and (min-width: 1439px) {
    width: 592px;
    margin: 0;
  }
`;

export const HeroDescWrap = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 286px;
  }

  @media screen and (min-width: 1439px) {
    margin: 0;
    margin-left: 104px;
    text-align: left;
    padding: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const SubTitleHero = styled.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;
  padding: 0 20px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1439px) {
    padding: 0;
  }
`;
