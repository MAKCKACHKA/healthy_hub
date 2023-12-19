import styled from 'styled-components';

// @media screen and (min-width: 768px) {
//     font-size: 21px;
//     line-height: 1.45;
//   }

//   @media screen and (min-width: 768px) and (max-width: 1199px) {
//     text-align: center;
//   }

export const CaloriesSectionhWrapper = styled.div`
    margin-top: 16px;
`
export const CaloriesHeadingWrapper = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
`
export const CaloriesHeader = styled.h2`
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;  
    margin-right: 40px;
    @media screen and (max-width: 834px) {
        margin-right: 77px;
        font-size: 18px;
        line-height: 26px;
    }
`

export const СaloriesGraphWrapper = styled.div`
    border-radius: 12px;
    background:var(--layout-color);
    padding-left: 15px;
    padding-top: 25px;
    padding-right: 15px;
    padding-bottom: 25px;
    min-width: 676px;
    min-height: 382px;
    /* width: 676px;
    height: 382px; */
    flex-shrink: 0;
`

export const CaloriesAverageTitle = styled.p`
    color:var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    margin-right: 8px;
`

export const CaloriesAverageNumber = styled.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`