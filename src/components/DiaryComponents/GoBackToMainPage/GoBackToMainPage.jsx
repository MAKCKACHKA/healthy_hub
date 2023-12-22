import { GoBackToMainPageSvg, GoBackToMainPageWrapper, Header, HeaderWrapper } from "./GoBackToMainPage.styled"
import icons from './../../../assets/icons.svg';

export const GoBackToMainPage = () => {
    return (
        <HeaderWrapper>
            <GoBackToMainPageWrapper to="/main">
                <GoBackToMainPageSvg>
                    <use href={`${icons}#icon-arrow-right`}></use>
                </GoBackToMainPageSvg>
            </GoBackToMainPageWrapper>
            <Header>Diary</Header>
        </HeaderWrapper>   
    )
}