import{u as d,j as s,b as l}from"./index-a002b40c.js";import{I as u}from"./pageIllustrations-fb5a38e2.js";import{d as m,I as p,a,E as r,P as h,e as c,f as x,A as g,T as S,b as j,S as I,F as v,c as w}from"./SignInPage.styled-593918f9.js";import{u as f}from"./index.esm-4af908ef.js";const F=()=>{const o=d(),e=f({initialValues:{email:"",password:""},validationSchema:c,onSubmit:({email:i,password:n},t)=>{o(l({email:i,password:n})),t.resetForm()}});return s.jsxs(m,{onSubmit:e.handleSubmit,children:[s.jsxs(p,{children:[s.jsx(a,{name:"email",type:"text",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email,valid:e.errors,touched:e.touched}),e.errors.email&&e.touched.email&&s.jsx(r,{id:"email",children:e.errors.email}),s.jsx(a,{name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,valid:e.errors,touched:e.touched}),e.errors.password&&e.touched.password&&s.jsx(r,{id:"password",children:e.errors.password})]}),s.jsx(h,{text:"Sign In"})]})};function C(){return s.jsxs(x,{children:[s.jsx(g,{pageIllustrations:u}),s.jsxs(S,{children:[s.jsxs("div",{children:[s.jsx(j,{titleText:"Sign in"}),s.jsx(I,{description:"You need to login to use the service"}),s.jsx(F,{}),s.jsx(v,{to:"/forgot-password",children:"Forgot your password?"})]}),s.jsx(w,{descriptionText:"If you don't have an account yet",linkText:"Sign up",to:"/signup"})]})]})}export{C as default};
