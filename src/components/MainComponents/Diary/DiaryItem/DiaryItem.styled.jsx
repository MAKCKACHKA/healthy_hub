import styled from 'styled-components';

export const CardWrap = styled.li`
  @media screen and (min-width: 864px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`;

export const TitleWrap = styled.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: white;
  font-family: 'Poppins', sans-serif;

  @media screen and (min-width: 864px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 864px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbonohidratesWrap = styled.p`
  color: white;
  font-size: 14px;
  min-width: 150px;
`;

export const ProteinWrap = styled.p`
  color: white;
  font-size: 14px;
  width: 110px;
`;

export const FatWrap = styled.p`
  color: white;
  font-size: 14px;
  width: 60px;
`;

export const Value = styled.span`
  color: gray;
  font-weight: 500;
`;

export const DiaryImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: #e3ffa8;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
export const BtnRemoveProduct = styled.svg`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  width: 20px;
  height: 20px;
`;
