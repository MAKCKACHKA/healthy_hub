import{s as i}from"./index-adf44996.js";const a=i.form`
  @media screen and (min-width: 834px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 212px;
    max-width: ${n=>n.$currentStep===4&&"328px"};
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin: 0 auto;
  }
`,t=i.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 24px;
  margin-top: 24px;

  @media screen and (min-width: 834px) {
    gap: 60px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    flex-direction: row;
    gap: 104px;
    margin-left: 150px;
  }
`;export{a as F,t as S};
