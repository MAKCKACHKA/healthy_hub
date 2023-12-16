import styled from 'styled-components';

export const Heading = styled.h4`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`;

export const FullFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: #0f0f0f;
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 40px;
  }
`;

export const IntakeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background: #e3ffa8;
  border: none;
  outline: none;
  padding: 8px 10px;
  width: 166px;

  color: var(--Color-Primary-Black-2, #0f0f0f);
  /* Button text/1 */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const SubHeading = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`;

export const Value = styled.p`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21; /* 121.429% */
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  span {
    color: #b6b6b6;
    margin: 0;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42; /* 142.857% */
  }
`;

export const LeftValue = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 0;

  b {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }

  span {
    color: #b6b6b6;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

export const Info = styled.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`;

export const DeleteButton = styled.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`;
