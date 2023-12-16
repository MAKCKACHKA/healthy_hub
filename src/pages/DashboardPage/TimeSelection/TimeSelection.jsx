// import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import icons from './../../../assets/icons.svg';
import React from 'react';
import { GoBackToMainPageSvg, GoBackToMainPageWrapper, Header, HeaderWrapper, MonthPickerSvgInactive, MonthPickerSvgActive, MonthPickerWrapper } from './TimeSelection.styled';


export const TimeSelection = () => {

    const [date, setDate] = useState(null);
    const [isArrowCliced, setClickOfArrow] = useState(false)

    const GoBackToMainPage = (() => (
        <GoBackToMainPageWrapper to="/main">
            <GoBackToMainPageSvg>
                <use href={`${icons}#icon-arrow-right`}></use>
            </GoBackToMainPageSvg> 
        </GoBackToMainPageWrapper>
    ));

    const onClick = () => {
        setClickOfArrow(!isArrowCliced)
    }

    const MonthPicker = (({ onClick }) => (
        <MonthPickerWrapper onClick={onClick}>
            <Header>Months</Header>
            {!isArrowCliced ?
                <MonthPickerSvgInactive>
                    <use href={`${icons}#icon-arrow-down`}></use>
                </MonthPickerSvgInactive>
                :
                <>
                    <MonthPickerSvgActive>
                        <use href={`${icons}#icon-arrow-down`}></use>
                    </MonthPickerSvgActive> 
                    <ListOfMonthes/>
                </>
            }
        </MonthPickerWrapper>
    ));

    const currentDate = new Date();
    const previousMonth = currentDate.getMonth() - 1;
    const currentMonth = currentDate.getMonth()

    const previousMonthName = new Date(currentDate.getFullYear(), previousMonth, 1)
    .toLocaleString('en-US', { month: 'long' });

    const currentMonthName = new Date(currentDate.getFullYear(), currentMonth, 1)
    .toLocaleString('en-US', { month: 'long' });
    
    const currentAndPreviousMonth = [previousMonthName,currentMonthName]

    const ListOfMonthes = (() => (
        <ul>
            {currentAndPreviousMonth.map((month) => {
                return <li>{month}</li>
            })}
        </ul>
    ))



   

    return (
        <HeaderWrapper>
            <GoBackToMainPage />
            <MonthPicker onClick={onClick} />
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











{/* <MonthPicker>
                
            <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="MMMM"
                excludeDates={[
                    previousMonth, currentMonth,
                ]}
                showMonthYearPicker
                customInput={<CustomMonthInput />}
            />
            <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="MMMM"
            showMonthYearPicker
            customInput={<CustomMonthInput />}
            dropdownMode="select"
            filterDate={filterDate}
            />
            </MonthPicker> */}