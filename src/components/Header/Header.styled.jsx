import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: var(--primary-text-color);
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff;
  }
`;
export const HeaderContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  background: var(--layout-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 18px 10px;
  align-items: center;
  z-index: 50;
  margin-bottom: 20px;
  @media screen and (min-width: 834px) {
    padding: 26px 27px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
    padding: 26px 34px;
  }
`;

export const NonAuthNav = styled.nav`
  display: flex;
  stroke: var(--primary-title-text-color);
  align-items: center;
  gap: 3px;
`;

export const LogoLink = styled(Link)`
  color: var(--primary-text-color);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.37;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  gap: 30px;
  align-items: center;
  height: 28px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    height: 48px;
  }

  &:hover,
  &:focus {
    color: var(--primary-title-text-color);
  }
`;
export const NavLink = styled(Link)`
  cursor: pointer;
  color: var(--primary-title-text-color);
  text-align: right;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  transition: color 0.3s;
  &:hover,
  &:focus {
    color: var(--primary-text-color);
  }
  @media screen and (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42;
  }
`;
export const AvatarIcon = styled.svg`
  margin-left: 6px;
  width: 28px;
  height: 28px;
  stroke: var(--primary-title-text-color);
`;
export const AvatarImage = styled.img`
  margin-left: 6px;
  width: 28px;
  height: 28px;
  border-radius: 28px;
`;

export const AuthNav = styled.div``;

export const UserInfoNav = styled.div``;

export const DropIcon = styled.svg`
  width: 14px;
  height: 14px;
  margin-left: 12px;
  stroke: var(--primary-btn-color);
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
export const EditIcon = styled.svg`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  stroke: var(--primary-btn-color);
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
export const ControlPanel = styled.div`
  align-items: center;
  display: none;

  @media screen and (min-width: 834px) {
    gap: 40px;
    display: flex;
  }
  @media screen and (min-width: 1440px) {
    gap: 80px;
  }
  position: relative;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 200px;
  /* z-index: 12; */
  overflow: none;
`;

export const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  padding: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
`;

export const TextContainer = styled.div`
  position: relative;
  /* z-index: 2; */
  overflow: none;
  p {
    color: var(--primary-title-text-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;
    font-style: normal;
    text-transform: capitalize;
  }
`;

export const EditableText = styled.p`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    margin-left: 4px;
  }
  p {
    color: var(--primary-title-text-color);
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.33;
  }
  @media screen and (min-width: 834px) {
    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.42;
    }
  }
`;
export const FunctionPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 834px) {
    gap: 75px;
  }
  @media screen and (min-width: 1440px) {
    gap: 124px;
  }
`;
export const KgSpan = styled.span`
  color: var(--primary-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin-right: 12px;
`;

export const MobileMenuBtn = styled.button`
  border-radius: 12px;
  border: 0;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
    stroke: var(--primary-btn-color);
    transition: opacity, 0.3s;
  }

  &:hover {
    svg {
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 834px) {
    display: none;
  }
`;

export const MobileLogoBtnWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
