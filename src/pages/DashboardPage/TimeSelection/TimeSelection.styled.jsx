import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

export const HeaderWrapper = styled.div`
        display: flex;
        align-items: center;

`

export const Header = styled.h1`
       font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 36px;
        margin-right: 12px;
`;

export const GoBackToMainPageWrapper  = styled(Link)`
        width: 24px;
        height: 24px;
        display: inline-block;
        cursor: pointer;        
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
        
`;

export const MonthPickerWrapper = styled.div`
        display: flex;
        cursor: pointer;
        margin-left: 6px;
        align-items: center;
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
`;