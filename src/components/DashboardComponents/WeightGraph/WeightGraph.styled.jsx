import styled from 'styled-components';

export const WeightSectionhWrapper = styled.div`
    margin-top: 20px;
    max-width: 1372px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        margin-top: 40px;
    }
    @media screen and (max-width: 834px) {
        margin-top: 27px;
    }
`
export const WeightHeadingWrapper = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
`
export const WeightHeader = styled.h2`
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;  
    margin-right: 40px;
`

export const WeightAverageTitle = styled.p`
    color:var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    margin-right: 8px;
`

export const WeightAverageNumber = styled.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`
export const WeightGraphWrapper = styled.div`
    border-radius: 12px;
    background: var(--layout-color);
    padding: 24px 21px 36px;
    display: flex;
    gap: 6px;
    flex-shrink: 0;
    flex-direction: column;
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        padding-bottom: 44px;
    }

`

export const WeightArrayList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`

export const MonthArrayList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`

export const WeightArrayItem = styled.li`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--primary-title-text-color);
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px
    }
    @media screen and (max-width: 834px) {
        
    }
`



export const MonthArrayItem = styled.li`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    width: 14px;
    height: 14px;

`