import{s as e,j as t,L as o}from"./index-1e6428a3.js";import{c as d,a as r}from"./index.esm-9accad0f.js";const m=e.svg`
  width: 300px;
  height: 296px;
  display: block;
  margin: 24px auto;

  @media screen and (min-width: 768px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 60px;
  }

  @media screen and (min-width: 1200px) {
    width: 592px;
    height: 588px;
    margin: 0;
  }
`,y=({pageIllustrations:i})=>t.jsx(m,{children:t.jsx("use",{href:`${i}#icon-auth`})}),S=e.section`
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 100%;
    margin: 40px 0 72px 150px;
    display: flex;
    flex-wrap: wrap;
  }
`,I=e(o)`
  display: block;
  text-align: center;
  color: inherit;

  @media screen and (min-width: 1200px) {
    text-align: start;
    margin-left: 25px;
  }
`,j=e.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 56px;

  @media screen and (min-width: 768px) {
    gap: 222px;
  }

  @media screen and (min-width: 1200px) {
    gap: 0;
    max-width: 444px;
    margin-left: 104px;
    padding-top: 80px;
  }
`,c=e.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  word-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
    text-align:center;
  }

  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`,$=({titleText:i})=>t.jsx(c,{children:i}),h=e.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 21px;
    line-height: 1.45;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    text-align: center;
  }
`,k=({description:i})=>t.jsx(h,{children:i}),E=d({email:r().email("Enter a valid email").required("Email is required"),password:r().min(8,"Password should be of minimum 8 characters length").required("Password is required")}),z=d({email:r().email("Enter a valid email").required("Email is required")}),g=e.button`
  width: 100%;
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);
`,P=({type:i="submit",text:n})=>t.jsx(g,{type:i,children:n}),u=e.input`
  width: 100%;
  line-height: 1.4;
  margin-bottom: ${i=>i.$valid[i.name]?"4px":"0"};
  padding: 8px 10px;
  color: var(--primary-title-text-color);
  border: 1px solid var(--primary-btn-color);
  border: ${i=>{if(i.$valid&&i.$touched!==void 0)return i.$valid[i.name]&&i.$touched[i.name]?"1px solid var(--error-validate-input)":"1px solid var(--primary-btn-color)"}};
  border-radius: 12px;
  background-color: transparent;

  &::placeholder {
    margin-left: 10px;
    color: var(--primary-text-color);
  }

  &:focus-visible {
    outline: none;
  }
`,q=e.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`,T=({name:i,type:n,placeholder:a,onChange:s,value:p,valid:l,touched:x})=>t.jsx(u,{autoComplete:"off",id:i,name:i,type:n,placeholder:a,onChange:s,value:p,$valid:l,$touched:x}),L=e.form`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
  }
`,F=e.div`
  font-size: 12px;
  line-height: 1.2;
  margin-left: 10px;
  color: var(--error-validate-input);
`,w=e.div`
  display: flex;
  gap: 20px;
`,f=e(o)`
  font-weight: 500;
  color: var(--primary-title-text-color);
`,O=({descriptionText:i,linkText:n,to:a})=>t.jsxs(w,{children:[t.jsx("p",{children:i}),t.jsx(f,{to:a,children:n})]});export{y as A,F as E,I as F,q as I,P,L as S,j as T,T as a,S as b,$ as c,k as d,O as e,z as f,E as v};
