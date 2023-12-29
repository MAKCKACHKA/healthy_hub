import{u as t}from"./index-96a574da.js";const i=t.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`,p=t.label`
  color: var(--primary-title-text-color);
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
`,r=t.div`
  display: flex;
  gap: 100px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`,n=t.div`
  margin-bottom: 40px;
`,e=t.div`
  margin: 0 auto;
  margin: ${o=>o.$currentStep===4&&"20px auto 0"};
`,d=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`,s=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--primary-title-text-color);
`,c=t.div`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,x=t.div`
  position: relative;
  &:hover button {
    opacity: 1;
  }
  &:hover svg[id='password'] {
    opacity: 0;
  }
`,m=t.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 1;
`,l=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  padding: 0;
  background-color: transparent;
  border: none;
  opacity: 0;
`;export{s as A,i as G,x as I,p as L,d as P,m as S,l as a,n as b,r as c,c as d,e};
