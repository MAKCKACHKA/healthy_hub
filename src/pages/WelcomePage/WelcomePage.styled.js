import styled from 'styled-components';

export const HeroSection = styled.section`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    margin-top: 40px;
    gap: 80px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 104px;
    justify-content: center;
  }
`;

export const HeroImg = styled.svg`
  width: 300px;
  height: 296px;
  display: block;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`;

export const HeroDescWrap = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    padding-bottom: 286px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    text-align: left;
    padding: 0;
  }
`;

export const HeroTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  text-align: center;
  word-wrap: break-word;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`;

export const SubTitleHero = styled.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;
  padding: 0;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;
