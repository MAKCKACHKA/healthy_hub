import{s as a}from"./index-4a3c05f4.js";const m=a.form`
  @media screen and (min-width: 768px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
    max-width: ${i=>i.$currentStep===4&&"328px"};
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 auto;
  }
`,n=a.section`
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 444px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 100%;
    margin: 40px 0 72px 150px;
    display: flex;
    flex-wrap: wrap;
  }
`;export{m as F,n as S};
