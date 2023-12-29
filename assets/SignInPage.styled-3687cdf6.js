import{u as i,j as r,L as c,d,e as n,g as s}from"./index-96a574da.js";const x=i.svg`
  width: 300px;
  height: 296px;
  display: block;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin: 0;
  }
`,y=({pageIllustrations:e,currentStep:a})=>{let t="icon-auth";switch(a){case 1:t="icon-Goals";break;case 2:t="icon-gender-and-age";break;case 3:t="icon-body-parameters";break;case 4:t="icon-activity";break}return r.jsx(x,{children:r.jsx("use",{href:`${e}#${t}`})})},h=i.button`
  width: 100%;
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`,q=({type:e="submit",text:a,onClick:t=null})=>r.jsx(h,{type:e,onClick:t,children:a}),g=i.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 833px) {
    ${e=>e.$flexDirectionColumn&&"flex-direction: column;"}
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin-left: 32px;
  }
`,u=i(c)`
  font-weight: 500;
  color: var(--primary-title-text-color);
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`,S=({descriptionText:e,linkText:a,to:t,flexDirectionColumn:o})=>r.jsxs(g,{$flexDirectionColumn:o,children:[r.jsx("p",{children:e}),r.jsx(u,{to:t,children:a})]}),E=d({email:n().email("Enter a valid email").required("Email is required"),password:n().min(8,"Password should be of minimum 8 characters length").required("Password is required")}),j=d({email:n().email("Enter a valid email").required("Email is required")}),I=d({name:n().required("Name is required"),email:n().email("Enter a valid email").required("Email is required"),password:n().min(8,"Password should be of minimum 8 characters length").required("Password is required"),goal:n().matches(/(lose fat|maintain|gain muscle)/),gender:n().matches(/(male|female)/),age:s().required("Age is required").positive("Age must be a positive").integer("Age must be an integer").max(90,"Enter correct age").min(18,"Enter age over 18 years old"),height:s().required("Height is required").positive("Height must be a positive").integer("Height must be an integer").max(250,"Enter correct height").min(120,"Enter correct height"),weight:s().required("Weight is required").positive("Weight must be a positive").integer("Weight must be an integer").max(250,"Enter correct weight").min(20,"Enter correct weight"),activity:n().matches(/(1.2|1.375|1.55|1.725|1.9)/)}),w=i.input`
  width: 100%;
  line-height: 1.4;
  margin-bottom: ${e=>e.$valid[e.name]?"4px":"0"};
  padding: 8px 10px;
  color: var(--primary-title-text-color);
  border: 1px solid var(--primary-btn-color);
  border: ${e=>{if(e.className&&e.value!=="")switch(e.className){case"correct":return"1px solid #3cbc81 ";case"incorrect":return"1px solid var(--error-validate-input)"}}};

  border-radius: 12px;
  background-color: transparent;

  &::placeholder {
    margin-left: 10px;
    color: var(--primary-text-color);
  }

  &:focus-visible {
    outline: none;
  }
`,k=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`,$=({name:e,type:a,placeholder:t,onChange:o,value:p,valid:l,className:m})=>r.jsx(w,{autoComplete:"off",id:e,name:e,type:a,placeholder:t,onChange:o,value:p,$valid:l,className:m}),P=i.form`
  margin-bottom: 14px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,z=i.div`
  font-size: 12px;
  line-height: 1.2;
  margin-left: 10px;
  color: var(--error-validate-input);
`,f=i.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 21px;
    line-height: 1.45;
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    text-align: center;
  }
`,T=({description:e})=>r.jsx(f,{children:e}),v=i.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  word-wrap: break-word;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,W=({titleText:e})=>r.jsx(v,{children:e}),A=i.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 24px;
  margin-top: 24px;
  @media screen and (min-width: 834px) {
    gap: 80px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 104px;
    max-width: 100%;
    margin: 40px 0 72px;
  }
`,B=i(c)`
  display: block;
  text-align: center;
  color: inherit;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-left: 25px;
  }
`,L=i.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 56px;

  @media screen and (min-width: 834px) {
    width: 444px;
    gap: 222px;
  }

  @media screen and (min-width: 1440px) {
    gap: 0;
    padding-top: 80px;
  }
`,U=i.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    width: 444px;
  }

  @media screen and (min-width: 1440px) {
    align-content: normal;
  }
`;export{y as A,U as B,z as E,B as F,k as I,q as P,T as S,L as T,$ as a,W as b,S as c,P as d,E as e,A as f,j as g,I as v};
