import{s as i,j as r,L as m}from"./index-4a43244d.js";import{c as s,a,b as d}from"./index.esm-666edb59.js";const p=i.svg`
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
`,y=({pageIllustrations:e,currentStep:n})=>{let t="icon-auth";switch(n){case 1:t="icon-Goals";break;case 2:t="icon-gender-and-age";break;case 3:t="icon-body-parameters";break;case 4:t="icon-activity";break}return r.jsx(p,{children:r.jsx("use",{href:`${e}#${t}`})})},x=i.button`
  width: 100%;
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);
`,q=({type:e="submit",text:n,onClick:t=null})=>r.jsx(x,{type:e,onClick:t,children:n}),h=i.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 767px) {
    ${e=>e.$flexDirectionColumn&&"flex-direction: column;"}
  }

  @media screen and (min-width: 767px) and (max-width: 1199px) {
    margin-left: 30px;
  }
`,g=i(m)`
  font-weight: 500;
  color: var(--primary-title-text-color);
`,S=({descriptionText:e,linkText:n,to:t,flexDirectionColumn:o})=>r.jsxs(h,{$flexDirectionColumn:o,children:[r.jsx("p",{children:e}),r.jsx(g,{to:t,children:n})]}),E=s({email:a().email("Enter a valid email").required("Email is required"),password:a().min(8,"Password should be of minimum 8 characters length").required("Password is required")}),$=s({email:a().email("Enter a valid email").required("Email is required")}),I=s({name:a().required("Name is required"),email:a().email("Enter a valid email").required("Email is required"),password:a().min(8,"Password should be of minimum 8 characters length").required("Password is required"),goal:a().matches(/(lose fat|maintain|gain muscle)/),gender:a().matches(/(male|female)/),age:d().required("Age is required").positive("Age must be a positive").integer("Age must be an integer").max(90,"Enter correct age").min(18,"Enter age over 18 years old"),height:d().required("Height is required").positive("Height must be a positive").integer("Height must be an integer").max(250,"Enter correct height").min(120,"Enter correct height"),weight:d().required("Weight is required").positive("Weight must be a positive").integer("Weight must be an integer").max(250,"Enter correct weight").min(20,"Enter correct weight"),activity:a().matches(/(1.2|1.375|1.55|1.725|1.9)/)}),u=i.input`
  width: 100%;
  line-height: 1.4;
  margin-bottom: ${e=>e.$valid[e.name]?"4px":"0"};
  padding: 8px 10px;
  color: var(--primary-title-text-color);
  border: 1px solid var(--primary-btn-color);
  border: ${e=>{if(e.$valid!==void 0)return e.$valid[e.name]&&e.value!==""?"1px solid var(--error-validate-input)":"1px solid var(--primary-btn-color)"}};
  border-radius: 12px;
  background-color: transparent;

  &::placeholder {
    margin-left: 10px;
    color: var(--primary-text-color);
  }

  &:focus-visible {
    outline: none;
  }
`,j=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`,k=({name:e,type:n,placeholder:t,onChange:o,value:l,valid:c})=>r.jsx(u,{autoComplete:"off",id:e,name:e,type:n,placeholder:t,onChange:o,value:l,$valid:c}),P=i.form`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    max-width: 380px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-left: auto;
    margin-right: auto;
  }
`,z=i.div`
  font-size: 12px;
  line-height: 1.2;
  margin-left: 10px;
  color: var(--error-validate-input);
`,w=i.p`
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
`,T=({description:e})=>r.jsx(w,{children:e}),f=i.h2`
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
`,W=({titleText:e})=>r.jsx(f,{children:e}),A=i.section`
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
`,L=i(m)`
  display: block;
  text-align: center;
  color: inherit;

  @media screen and (min-width: 1200px) {
    text-align: start;
    margin-left: 25px;
  }
`,U=i.div`
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
`;export{y as A,z as E,L as F,j as I,q as P,T as S,U as T,k as a,W as b,S as c,P as d,E as e,A as f,$ as g,I as v};
