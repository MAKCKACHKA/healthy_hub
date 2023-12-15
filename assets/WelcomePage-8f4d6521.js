import{s as i,L as n,j as e}from"./index-ad7ba18f.js";const a="/healthy_hub/assets/Illustration-d4bd7f5a.png",r=i.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    margin: 0 auto 80px;
    justify-content: center;
  }

  @media screen and (min-width: 1439px) {
    justify-content: left;
  }
`,d=i(n)`
  width: 142px;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,o=i(n)`
  width: 122px;
  padding: 8px 10px;
  text-align: center;
  color: var(--primary-title-text-color);
`,s=()=>e.jsxs(r,{children:[e.jsx(d,{to:"/signin",children:"Sign in"}),e.jsx(o,{to:"/signup",children:"Sign up"})]}),p=i.ul`
  list-style: disc;
  margin-left: 16px;
  padding-left: 10px;
  color: var(--primary-title-text-color);

  @media screen and (min-width: 834px) {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
  }

  @media screen and (min-width: 1439px) {
    display: block;
  }
`,t=i.li`
  margin-bottom: 16px;
  height: 20px;
  &::marker {
    font-size: 1.3em;
    color: var(--primary-btn-color);
  }

  @media screen and (min-width: 835px) and (max-width: 1439px) {
    margin: 0;
  }
`,x=()=>e.jsxs(p,{children:[e.jsx(t,{children:"Set goals"}),e.jsx(t,{children:"Watch your calories"}),e.jsx(t,{children:"Keep track of your water intake"}),e.jsx(t,{children:"Control your weight"})]}),c=i.section`
  @media screen and (min-width: 1439px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 40px 0 0 150px;
  }
`,l=i.img`
  margin: 24px auto;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: 40px auto 80px;
  }

  @media screen and (min-width: 1439px) {
    width: 592px;
    margin: 0;
  }
`,m=i.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 286px;
  }

  @media screen and (min-width: 1439px) {
    margin: 0;
    margin-left: 104px;
    text-align: left;
    padding: 0;
  }
`,h=i.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,g=i.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;
  padding: 0 20px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1439px) {
    padding: 0;
  }
`;function f(){return e.jsxs(c,{children:[e.jsx(l,{src:a,alt:"Hero image",width:300}),e.jsxs(m,{children:[e.jsx(h,{children:"Set goals and achieve them"}),e.jsx(g,{children:"The service will help you set goals and follow them."}),e.jsx(s,{}),e.jsx(x,{})]})]})}export{f as default};
