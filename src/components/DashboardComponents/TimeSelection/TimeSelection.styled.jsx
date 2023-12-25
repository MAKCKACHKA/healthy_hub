import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

export const HeaderWrapper = styled.div`
        display: flex;
        align-items: center;
        max-width: 1372px;
        margin-left: auto;
        margin-right: auto;
`;

export const Header = styled.h1`
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 36px;
        margin-right: 12px;
        @media screen and (max-width: 834px) {
                font-size: 24px;
                font-weight: 500;
                line-height: 30px;
        }
        
`;

export const GoBackToMainPageWrapper  = styled(Link)`
        width: 24px;
        height: 24px;
        display: inline-block;
        cursor: pointer;   
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }     
`;

export const GoBackToMainPageSvg  = styled.svg`
        width: 24px;
        height: 24px;
        stroke: var(--primary-text-color);
        fill:transparent;
        transform: rotate(180deg);
        transition:
                stroke 0.3s;
        &:hover,
        &:focus {
                stroke: var(--primary-btn-color);
        }
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }
`;

export const MonthPickerWrapper = styled.div`
        display: flex;
        cursor: pointer;
        margin-left: 6px;
        align-items: center;
        position: relative;
`;

const MonthPickerSvg = css`
        width: 16px;
        height: 16px;
        fill: transparent;
`

export const MonthPickerSvgInactive = styled.svg`
        ${MonthPickerSvg};
        stroke: var(--primary-text-color);
        transition:
                stroke 0.3s;
        &:hover,
        &:focus {
                stroke: var(--primary-btn-color);
                }
        
`;

export const MonthPickerSvgActive = styled.svg`
        ${MonthPickerSvg};
        stroke: var(--primary-btn-color);
        transform: rotate(180deg);
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }
`;

export const MonthList = styled.ul`
        width: 212px;
        flex-shrink: 0;
        border-radius: 12px;
        background: rgba(15, 15, 15, 1);
        box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);
        position: absolute;
        top: 100%;
        margin-top: 4px;
        z-index: 1;
        box-sizing: border-box;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        gap: 4px;

`
export const MonthListItem = styled.li`
        padding-left: 16px;
        padding-top: 2px;
        padding-bottom: 2px;
        background-color: transparent;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        transition:
                background-color 0.3s,
                color 0.3s;
                
        &:hover,
        &:focus {
                color: var(--primary-btn-color);
                background:  rgba(255, 255, 255, 0.03);
                }
`

export const ChoosenMonth = styled.h3`
        text-align: right;
        display: flex;
        margin-left: auto;
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        @media screen and (max-width: 834px) {
                font-size: 16px;
                line-height: 22px;     
        }
`