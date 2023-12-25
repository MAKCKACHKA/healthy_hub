import styled from 'styled-components';

export const DiaryPillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1372px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  @media screen and (min-width: 834px) and (max-width: 1440px) {
    max-width: 834px;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (max-width: 834px) {
    max-width: 320px;
    justify-content: center;
    gap: 100px;
  }
`;

export const PillElement = styled.div`
  height: 278px;
  width: 676px;
  margin-top: 16px;
  margin-right: 0;
  @media screen and (min-width: 834px) and (max-width: 1439px) {
    padding-bottom: 44px;
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(1) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
    &:nth-child(2) {
      margin-bottom: 20px;
    }
    &:nth-child(3) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 834px) and (max-width: 1440px) {
    width: 780px;
  }

  @media screen and (max-width: 834px) {
    width: 300px;
  }
`;

export const DiaryPillImg = styled.img`
  width: 36px;
  height: 36px;
`;

export const HeaderOfPill = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  flex-wrap: wrap;
  @media screen and (max-width: 834px) {
    flex-wrap: wrap;
    ul {
      width: 200px;
    }
  }
`;

export const MobileHeader = styled.div`
  @media screen and (max-width: 834px) {
  }
`;

export const TypeOfMeal = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-left: 12px;
  width: 104px;
  @media screen and (max-width: 834px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const MealParamsList = styled.ul`
  display: flex;
  margin-left: 126px;
  gap: 20px;
  @media screen and (min-width: 834px) and (max-width: 1440px) {
    margin-left: 196px;
    gap: 32px;
  }
  @media screen and (max-width: 834px) {
    margin-left: 0;
    width: 178px;
    flex-wrap: wrap;
    margin-top: 12px;
  }
`;

export const MealParamsItemWrapper = styled.div`
  display: flex;
`;

export const MealParamsItem = styled.li`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-title-text-color);
`;

export const MealParamsItemData = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--primary-text-color);
  margin-left: 4px;
`;

export const MealPillWrapper = styled.div`
  border-radius: 12px;
  background-color: var(--secondary-text-color);
  padding: 32px 14px;
  @media screen and (max-width: 834px) {
    padding: 16px 12px;
  }
`;

export const MealPillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow-y: scroll;
  height: 232px;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  @media screen and (max-width: 834px) {
    gap: 16px;
  }
  @media screen and (min-width: 834px) {
    height: 176px;
  }
`;

export const MealPillItem = styled.li`
  display: flex;
  position: relative;
  @media screen and (max-width: 834px) {
    height: 44px;
  }
`;

export const NumberOfMeal = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: var(--primary-title-text-color);
  width: 16px;
  display: flex;
  justify-content: center;
`;

export const MobileWrapper = styled.div`
  @media screen and (max-width: 834px) {
    margin-left: 16px;
    position: relative;
  }
`;

export const NameOfMeal = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-title-text-color);
  margin-left: 16px;
  width: 260px;
  height: 20px;
  @media screen and (max-width: 834px) {
    width: 176px;
    margin-left: 0;
    margin-bottom: 6px;
  }
`;

export const MealPillParamsList = styled.ul`
  display: flex;
  margin-left: 32px;
  gap: 32px;
  @media screen and (min-width: 834px) and (max-width: 1440px) {
    margin-left: 110px;
  }
  @media screen and (max-width: 834px) {
    gap: 6px;
    margin-left: 0;
  }
`;

export const MealPillParamsitemWrapper = styled.div`
  display: flex;
`;

export const MealPillParamsitemText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const MealPillParamsitem = styled.li`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 80px;
  height: 20px;
  color: var(--primary-title-text-color);
  &:last-child {
    width: 30px;
  }

  @media screen and (max-width: 834px) {
    width: auto;
    font-size: 12px;
    line-height: 18px;
    margin-left: 6px;
  }
`;

export const MealPillEdit = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (max-width: 834px) {
    margin-left: 17px;
    align-items: flex-start;
    margin: 0;
    position: absolute;
    left: 211px;
  }
`;
export const MealPillEditSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primary-text-color);
`;
export const MealPillEditText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 6px;
`;

export const MealPillAdd = styled.div`
  display: flex;
  align-items: stretch;
  margin-left: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  @media screen and (max-width: 834px) {
  }
`;

export const MealPillAddSvg = styled.svg`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  stroke: var(--primary-btn-color);
`;

export const MealPillAddParagraph = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--primary-btn-color);
  margin-left: 6px;
`;
