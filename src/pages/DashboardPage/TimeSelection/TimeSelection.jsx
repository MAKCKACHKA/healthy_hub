// import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import icons from './../../../assets/icons.svg';
import React from 'react';
import { GoBackToMainPageSvg, GoBackToMainPageWrapper, Header, HeaderWrapper, MonthPickerSvgInactive, MonthPickerSvgActive, MonthPickerWrapper, MonthList, MonthListItem, ChoosenMonth } from './TimeSelection.styled';


export const TimeSelection = ({month, setMonth}) => {


    // const [month, setMonth] = useState(null);
    const [isArrowClicked, setClickOfArrow] = useState(null)

    const onClickOfArrow = () => {
        setClickOfArrow(!isArrowClicked)
    }
    
    const onChooseOfMonth = (choosedMonth) => {
        setMonth(choosedMonth)
    }

    //Go back on the main page arrow button

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
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth()
        const currentMonthName = new Date(currentDate.getFullYear(), currentMonth, 1)
            .toLocaleString('en-US', { month: 'long' });
        return setMonth(currentMonthName)
    }

    useEffect(() => {
        if (!month) {
            setInitMonth()
        }
    }, [month])
    
    const ListOfMonthes = ({onChooseOfMonth}) => (
        <MonthList>
        {currentAndPreviousMonth().map((month) => (
            <MonthListItem key={month} onClick={() => onChooseOfMonth(month)}>{month}</MonthListItem>
        ))}
        </MonthList>
    )


    return (
        <HeaderWrapper>
            <GoBackToMainPage/>
            <MonthPicker />
            {month && <ChoosenMonth>{month}</ChoosenMonth>}
        </HeaderWrapper>
    )
}









    // const MonthPicker = styled.div`
    //     .react-datepicker__header.react-datepicker-year-header {
    //         display: none;
    //     };
    //     .react-datepicker__navigation.react-datepicker__navigation--previous {
    //         display: none;
    //     };
    //     .react-datepicker__navigation.react-datepicker__navigation--next{
    //         display: none;
    //     };
    // `;
    // const filterDate = (date) => {
    //     const currentDate = new Date();
    //     return ([date.getMonth() === currentDate.getMonth(), date.getMonth() === currentDate.getMonth() - 1]   
    //     );
    // };
    // console.log(date.getMonth())
        // const currentDatee = new Date()
        // console.log(currentDatee.getTime())



    // <MonthPicker>
    // <DatePicker
    //     selected={date}
    //     onChange={(date) => setDate(date)}
    //     dateFormat="MMMM"
    //     excludeDates={[
    //         previousMonth, currentMonth,
    //     ]}
    //     showMonthYearPicker
    //     customInput={<CustomMonthInput />}
    // />
    // <DatePicker
    // selected={date}
    // onChange={(date) => setDate(date)}
    // dateFormat="MMMM"
    // showMonthYearPicker
    // customInput={<CustomMonthInput />}
    // dropdownMode="select"
    // filterDate={filterDate}
    // />
    // </MonthPicker> 