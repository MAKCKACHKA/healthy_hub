import{s as t,j as a,r as w}from"./index-55986f96.js";import{I as f}from"./pageIllustrations-d2f08a7e.js";import{I as C,a as s,E as l,P as h,v as k,A as S,T as F,b as T,S as B,c as I}from"./SignInPage.styled-8c745673.js";import{u as W}from"./index.esm-42b72f59.js";import{F as E,S as A}from"./ForgotPasswordPage.styled-daeb1911.js";const M=t.button`
  width: 192px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: var(--primary-title-text-color);
`,G=({type:r="submit",text:o,onClick:e=null})=>a.jsx(M,{type:r,onClick:e,children:o}),P=t.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-title-text-color);
`,p=t.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,L=t.span`
  box-sizing: border-box;
  min-width: 12px;
  height: 12px;
  border: 1px solid var(--primary-text-color);
  position: relative;
  cursor: pointer;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: transparent;
    transition:
      background-color 0.3s,
      border-color 0.3s;
    position: relative;
  }

  ${p}:checked ~ & > span {
    background-color: var(--primary-btn-color);
  }
`,n=({name:r,value:o,labelText:e,onChange:i,defaultChecked:c})=>a.jsxs(P,{children:[a.jsx(p,{type:"radio",name:r,value:o,onChange:i,defaultChecked:c}),a.jsx(L,{children:a.jsx("span",{})}),e]}),R=t.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    gap: 16px;
  }
`,d=t.label`
  color: var(--primary-title-text-color);
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
`,U=t.div`
  display: flex;
  gap: 100px;
  margin-bottom: 24px;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    gap: 16px;
  }
`,$=t.div`
  margin-bottom: 40px;
`,Y=t.div`
  margin: 0 auto;
  margin: ${r=>r.$currentStep===4&&"20px auto 0"};
`,z=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`,D=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--primary-title-text-color);
`,N=t.div`
  @media screen and (min-width: 1200px) {
    width: 212px;
  }
`,H=({currentStep:r})=>{const e=W({initialValues:{name:"",email:"",password:"",goal:"Lose Fat",gender:"Male",age:"",height:"",weight:"",activity:"1.2"},validationSchema:k,onSubmit:({name:i,email:c,password:x,goal:m,gender:u,age:g,height:y,weight:v,activity:j},b)=>{console.log({name:i,email:c,password:x,goal:m,gender:u,age:g,height:y,weight:v,activity:j}),b.resetForm()}});return console.log(e),a.jsxs(E,{$currentStep:r,onSubmit:e.handleSubmit,children:[r===0&&a.jsxs(C,{children:[a.jsxs("div",{children:[a.jsx(s,{name:"name",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.name,valid:e.errors,touched:e.touched}),e.errors.name&&!e.values.name&&a.jsx(l,{id:"name",children:e.errors.name})]}),a.jsxs("div",{children:[a.jsx(s,{name:"email",type:"text",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email,valid:e.errors,touched:e.touched}),e.errors.email&&e.values.email!==""&&a.jsx(l,{id:"email",children:e.errors.email})]}),a.jsxs("div",{children:[a.jsx(s,{name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,valid:e.errors,touched:e.touched}),e.errors.password&&e.values.password!==""&&a.jsx(l,{id:"password",children:e.errors.password})]})]}),r===1&&a.jsxs(R,{children:[a.jsx(n,{name:"goal",type:"radio",value:"Lose Fat",labelText:"Lose Fat",onChange:e.handleChange,defaultChecked:!0}),a.jsx(n,{name:"goal",type:"radio",value:"Maintain",labelText:"Maintain",onChange:e.handleChange}),a.jsx(n,{name:"goal",type:"radio",value:"Gain Muscle",labelText:"Gain Muscle",onChange:e.handleChange})]}),r===2&&a.jsxs($,{children:[a.jsx(d,{htmlFor:"gender",children:"Gender"}),a.jsxs(U,{children:[a.jsx(n,{id:"gender",name:"gender",type:"radio",value:"Male",labelText:"Male",onChange:e.handleChange,defaultChecked:!0}),a.jsx(n,{name:"gender",type:"radio",value:"Female",labelText:"Female",onChange:e.handleChange})]}),a.jsx(d,{htmlFor:"age",children:"Your age"}),a.jsx(s,{name:"age",type:"number",placeholder:"Enter your age",onChange:e.handleChange,value:e.values.age,valid:e.errors,touched:e.touched}),e.errors.age&&e.values.age&&a.jsx(l,{id:"password",children:e.errors.age})]}),r===3&&a.jsxs(z,{children:[a.jsxs("div",{children:[a.jsx(d,{htmlFor:"height",children:"Height"}),a.jsx(s,{name:"height",type:"number",placeholder:"Enter your height (cm)",onChange:e.handleChange,value:e.values.height,valid:e.errors,touched:e.touched}),e.errors.height&&e.values.height&&a.jsx(l,{id:"password",children:e.errors.height})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"weight",children:"Weight"}),a.jsx(s,{name:"weight",type:"number",placeholder:"Enter your weight",onChange:e.handleChange,value:e.values.weight,valid:e.errors,touched:e.touched}),e.errors.weight&&e.values.weight&&a.jsx(l,{id:"password",children:e.errors.weight})]})]}),r===4&&a.jsxs(D,{children:[a.jsx(n,{name:"activity",type:"radio",value:"1.2",labelText:"1.2 - if you do not have physical activity and sedentary work",onChange:e.handleChange,defaultChecked:!0}),a.jsx(n,{name:"activity",type:"radio",value:"1.375",labelText:"1.375 - if you do short runs or light gymnastics 1-3 times a week",onChange:e.handleChange}),a.jsx(n,{name:"activity",type:"radio",value:"1.55",labelText:"1.55 - if you play sports with average loads 3-5 times a week",onChange:e.handleChange}),a.jsx(n,{name:"activity",type:"radio",value:"1.725",labelText:"1.725 ​​- if you train fully 6-7 times a week",onChange:e.handleChange}),a.jsx(n,{name:"activity",type:"radio",value:"1.9",labelText:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program",onChange:e.handleChange})]}),r===4&&a.jsx(N,{children:a.jsx(h,{text:"Sing Up"})})]})},O=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    max-width: 380px;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    max-width: 212px;
    justify-content: left;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 auto;
  }
`;function X(){const[r,o]=w.useState(0);let e="Sign up";switch(r){case 1:e="Your goal";break;case 2:e="Select gender, Age";break;case 3:e="Body parameters";break;case 4:e="Your Activity";break}let i="You need to register to use the service";switch(r){case 1:i="Choose a goal so that we can help you effectively";break;case 2:i="Choose a goal so that we can help you effectively";break;case 3:i="Enter your parameters for correct performance tracking";break;case 4:i="To correctly calculate calorie and water intake";break}return a.jsxs(A,{children:[a.jsx(S,{pageIllustrations:f,currentStep:r}),a.jsxs(F,{children:[a.jsxs("div",{children:[a.jsx(T,{titleText:e}),a.jsx(B,{description:i}),a.jsx(H,{currentStep:r}),a.jsxs(O,{children:[r<4&&a.jsx(h,{type:"button",text:"Next",onClick:()=>o(r+1)}),r>0&&a.jsx(Y,{$currentStep:r,children:a.jsx(G,{type:"button",text:"Back",onClick:()=>o(r-1)})})]})]}),r===0&&a.jsx(I,{descriptionText:"Do you already have an account?",linkText:"Sign in",to:"/signin",flexDirectionColumn:!0})]})]})}export{X as default};
