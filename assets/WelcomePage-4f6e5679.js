import{s as i,L as n,j as e}from"./index-8f948d4b.js";import{I as a}from"./pageIllustrations-29d4d5fd.js";const r=i.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    margin: 0 auto 80px;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    justify-content: left;
  }
`,d=i(n)`
  width: 142px;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`,o=i(n)`
  width: 122px;
  padding: 8px 10px;
  text-align: center;
  color: var(--primary-title-text-color);
`,p=()=>e.jsxs(r,{children:[e.jsx(d,{to:"/signin",children:"Sign in"}),e.jsx(o,{to:"/signup",children:"Sign up"})]}),s=i.ul`
  list-style: disc;
  margin-left: 16px;
  padding-left: 10px;
  color: var(--primary-title-text-color);

  @media screen and (min-width: 768px) {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }

  @media screen and (min-width: 1200px) {
    display: block;
  }
`,t=i.li`
  margin-bottom: 16px;
  height: 20px;
  &::marker {
    font-size: 1.3em;
    color: var(--primary-btn-color);
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin: 0;
  }
`,x=()=>e.jsxs(s,{children:[e.jsx(t,{children:"Set goals"}),e.jsx(t,{children:"Watch your calories"}),e.jsx(t,{children:"Keep track of your water intake"}),e.jsx(t,{children:"Control your weight"})]}),c=i.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    /* margin: 40px auto 80px; */
    gap: 80px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 104px;
    justify-content: center;
  }
`,l=i.svg`
  width: 300px;
  height: 296px;
  display: block;
  margin: 0 auto 40px;
  @media screen and (min-width: 768px) {
    width: 380px;
    height: 376px;
    /* margin: 40px auto 80px; */
  }

  @media screen and (min-width: 1200px) {
    width: 592px;
    height: 588px;
    margin: 0;
  }
`,m=i.div`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 444px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 286px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0;
    text-align: left;
    padding: 0;
  }
`,h=i.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  text-align: center;
  word-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`,g=i.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;
  padding: 0;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;function u(){return e.jsxs(c,{children:[e.jsx("div",{children:e.jsx(l,{height:300,children:e.jsx("use",{href:`${a}#icon-auth`})})}),e.jsxs(m,{children:[e.jsx(h,{children:"Set goals and achieve them"}),e.jsx(g,{children:"The service will help you set goals and follow them."}),e.jsx(p,{}),e.jsx(x,{})]})]})}export{u as default};
