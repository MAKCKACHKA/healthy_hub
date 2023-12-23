import { useEffect, useState } from 'react';
import icons from './../../../assets/icons.svg';
import React from 'react';
import { GoBackToMainPageSvg, GoBackToMainPageWrapper, Header, HeaderWrapper, MonthPickerSvgInactive, MonthPickerSvgActive, MonthPickerWrapper, MonthList, MonthListItem, ChoosenMonth } from './TimeSelection.styled';
export const TimeSelection = ({ month, setMonth }) => {
    
    const [isArrowClicked, setClickOfArrow] = useState(null)

    const onClickOfArrow = () => {
        setClickOfArrow(!isArrowClicked)
    }

    const onChooseOfMonth = (choosedMonth) => {
        setMonth(choosedMonth)
    }

    const GoBackToMainPage = (() => (
        <GoBackToMainPageWrapper to="/main">
            <GoBackToMainPageSvg>
                <use href={`${icons}#icon-arrow-right`}></use>
            </GoBackToMainPageSvg>
        </GoBackToMainPageWrapper>
    ));

    const MonthPicker = () => (
        <MonthPickerWrapper onClick={onClickOfArrow}>
            <Header>Months</Header>
            {!isArrowClicked ? (
                <MonthPickerSvgInactive>
                    <use href={`${icons}#icon-arrow-down`}></use>
                </MonthPickerSvgInactive>
            ) : (
                <>
                    <MonthPickerSvgActive>
                        <use href={`${icons}#icon-arrow-down`}></use>
                    </MonthPickerSvgActive>
                    <ListOfMonthes onChooseOfMonth={onChooseOfMonth} />
                </>
            )}
        </MonthPickerWrapper>
    )

    const currentAndPreviousMonth = () => {
        const currentDate = new Date();
        const previousMonth = currentDate.getMonth() - 1;
        const currentMonth = currentDate.getMonth()
        const previousMonthName = new Date(currentDate.getFullYear(), previousMonth, 1)
            .toLocaleString('en-US', { month: 'long' });
        const currentMonthName = new Date(currentDate.getFullYear(), currentMonth, 1)
            .toLocaleString('en-US', { month: 'long' });
        return [previousMonthName, currentMonthName]
    }

    const setInitMonth = () => {
        const currentMonth = new Date().getMonth()+1
        return setMonth(currentMonth)
    }

    useEffect(() => {
        if (!month) {
            setInitMonth()
        }
    }, [month])

    const ListOfMonthes = ({onChooseOfMonth}) => (
        <MonthList>
        {currentAndPreviousMonth().map((month) => (
            <MonthListItem key={month} onClick={() => onChooseOfMonth(
                new Date(`${month} 1, 2000`).getMonth() + 1
            )}>{month}</MonthListItem>
        ))}
        </MonthList>
    )

    return (
        <HeaderWrapper>
            <GoBackToMainPage/>
            <MonthPicker />
            {month &&
                <ChoosenMonth>
                {new Date(2000, month-1, 1).toLocaleString('en-US', { month: 'long' })}
            </ChoosenMonth>}
        </HeaderWrapper>
    )
}