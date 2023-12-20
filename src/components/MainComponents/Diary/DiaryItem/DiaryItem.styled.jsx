import styled from 'styled-components';

export const CardWrap = styled.li`
  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;

export const CarbonohidratesWrap = styled.p`
  min-width: 190px;
`;

export const ProteinWrap = styled.p`
  width: 110px;
`;

export const FatWrap = styled.p`
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
`;
