import{s as n,j as e,L as m}from"./index-5fe2ac53.js";import{I as c}from"./pageIllustrations-cda26ded.js";import{c as h,a as s,u}from"./index.esm-9c8ce34b.js";const g=n.svg`
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
`,w=({pageIllustrations:i})=>e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-auth`})}),b=n.section`
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
`,v=n(m)`
  display: block;
  text-align: center;
  margin-bottom: 54px;
  color: inherit;

  @media screen and (min-width: 768px) {
    margin-bottom: 222px;
  }

  @media screen and (min-width: 1200px) {
    text-align: start;
    margin-left: 25px;
    margin-bottom: 184px;
  }
`,f=n.div`
  @media screen and (min-width: 1200px) {
    margin-left: 104px;
    padding-top: 80px;
  }
`,j=n.h2`
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
`,S=({titleText:i})=>e.jsx(j,{children:i}),y=n.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 21px;
    line-height: 1.45;
  }
`,I=({description:i})=>e.jsx(y,{children:i}),$=h({email:s().email("Enter a valid email").required("Email is required"),password:s().min(8,"Password should be of minimum 8 characters length").required("Password is required")}),k=n.button`
  width: 100%;
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  color: var(--secondary-text-color);
  background-color: var(--primary-btn-color);
`,P=({type:i="submit",text:t})=>e.jsx(k,{type:i,children:t}),F=n.input`
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
`,d=({name:i,type:t,placeholder:r,onChange:o,value:a,valid:p,touched:x})=>e.jsx(F,{autoComplete:"off",id:i,name:i,type:t,placeholder:r,onChange:o,value:a,$valid:p,$touched:x}),T=n.form`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
  }
`,l=n.div`
  font-size: 12px;
  line-height: 1.2;
  margin-left: 10px;
  color: var(--error-validate-input);
`,z=n.div`
  margin-bottom: 20px;
`,E=n.div`
  margin-bottom: 40px;
`,C=()=>{const t=u({initialValues:{email:"",password:""},validationSchema:$,onSubmit:({email:r,password:o},a)=>{console.log({email:r,password:o}),a.resetForm()}});return e.jsxs(T,{onSubmit:t.handleSubmit,children:[e.jsxs(z,{children:[e.jsx(d,{name:"email",type:"text",placeholder:"E-mail",onChange:t.handleChange,value:t.values.email,valid:t.errors,touched:t.touched}),t.errors.email&&t.touched.email&&e.jsx(l,{id:"email",children:t.errors.email})]}),e.jsxs(E,{children:[e.jsx(d,{name:"password",type:"password",placeholder:"Password",onChange:t.handleChange,value:t.values.password,valid:t.errors,touched:t.touched}),t.errors.password&&t.touched.password&&e.jsx(l,{id:"password",children:t.errors.password})]}),e.jsx(P,{text:"Sign In"}),console.log(t)]})},q=n.div`
  display: flex;
  gap: 20px;
`,L=n(m)`
  font-weight: 500;
  color: var(--primary-title-text-color);
`,W=({descriptionText:i,linkText:t,to:r})=>e.jsxs(q,{children:[e.jsx("p",{children:i}),e.jsx(L,{to:r,children:t})]});function A(){return e.jsxs(b,{children:[e.jsx(w,{pageIllustrations:c}),e.jsxs(f,{children:[e.jsx(S,{titleText:"Sign in"}),e.jsx(I,{description:"You need to login to use the service"}),e.jsx(C,{}),e.jsx(v,{to:"/forgot-password",children:"Forgot your password?"}),e.jsx(W,{descriptionText:"If you don't have an account yet",linkText:"Sign up",to:"/signup"})]})]})}export{A as default};
