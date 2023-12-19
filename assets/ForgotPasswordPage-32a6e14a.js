import{s as i,j as e}from"./index-c4c29e06.js";import{I as s}from"./pageIllustrations-4f69451f.js";import{I as n,a as o,E as m,P as d,f as l,A as x,T as p,c as u,d as c,e as h}from"./SignInOrUp-eabd63ec.js";import{u as g}from"./index.esm-b8d73c41.js";const j=i.form`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
  }
`,w=()=>{const a=g({initialValues:{email:""},validationSchema:l,onSubmit:({email:t},r)=>{console.log({email:t}),r.resetForm()}});return e.jsxs(j,{onSubmit:a.handleSubmit,children:[e.jsxs(n,{children:[e.jsx(o,{name:"email",type:"text",placeholder:"E-mail",onChange:a.handleChange,value:a.values.email,valid:a.errors,touched:a.touched}),a.errors.email&&a.touched.email&&e.jsx(m,{id:"email",children:a.errors.email})]}),e.jsx(d,{text:"Send"})]})},S=i.section`
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
`;function v(){return e.jsxs(S,{children:[e.jsx(x,{pageIllustrations:s}),e.jsxs(p,{children:[e.jsxs("div",{children:[e.jsx(u,{titleText:"Forgot your password"}),e.jsx(c,{description:"We will send you an email with recovery instructions"}),e.jsx(w,{})]}),e.jsx(h,{descriptionText:"If you don't have an account yet",linkText:"Sign up",to:"/signup"})]})]})}export{v as default};
