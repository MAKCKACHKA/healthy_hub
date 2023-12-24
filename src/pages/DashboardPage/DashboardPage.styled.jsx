import styled from 'styled-components';

export const WrapperCenter = styled.div`
    @media screen and (max-width: 1439px) {
        display: flex;
        justify-content: center;
    } 
    
`

export const DashboardPageWrapper = styled.div`
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        width: 780px;
    }
    @media screen and (max-width: 834px) {
        width: 320px;
        overflow: hidden;
    } 
`

export const GraphsWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        flex-direction: column;
        gap: 0px;
    }
    @media screen and (max-width: 834px) {
        flex-direction: column;
        gap: 0px;
    }
`




  