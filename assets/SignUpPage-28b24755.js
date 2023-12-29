import{u as x,j as e,r as j,a as b,b as C,i as t,s as k}from"./index-96a574da.js";import{I as S}from"./pageIllustrations-8836ccd8.js";import{I as F,a as h,E as c,P as v,v as T,A,T as $,b as I,S as B,c as W}from"./SignInPage.styled-3687cdf6.js";import{F as E,S as O}from"./ForgotPasswordPage.styled-ce2c08f1.js";import{I as d,S as i,a as m,G as N,b as P,L as u,c as G,P as R,A as U,d as D,e as L}from"./SignUpForm.styled-278f019b.js";const M=x.button`
  width: 192px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: var(--primary-title-text-color);
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`,Y=({type:a="submit",text:o,onClick:s=null})=>e.jsx(M,{type:a,onClick:s,children:o}),z=x.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-title-text-color);
`,y=x.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,H=x.span`
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

  ${y}:checked ~ & > span {
    background-color: var(--primary-btn-color);
  }
`,n=({name:a,value:o,labelText:s,onChange:l,defaultChecked:g})=>e.jsxs(z,{children:[e.jsx(y,{type:"radio",name:a,value:o,onChange:l,defaultChecked:g}),e.jsx(H,{children:e.jsx("span",{})}),s]}),V=({currentStep:a})=>{const[o,s]=j.useState("password"),l=b(),r=C({initialValues:{name:"",email:"",password:"",goal:"lose fat",gender:"male",age:"",height:"",weight:"",coefficientOfActivity:"1.2"},validationSchema:T,onSubmit:(f,w)=>{const p={...f};p.coefficientOfActivity=Number(p.coefficientOfActivity),l(k({...p})),w.resetForm()}});return e.jsxs(E,{$currentStep:a,onSubmit:r.handleSubmit,children:[a===0&&e.jsxs(F,{children:[e.jsxs(d,{children:[e.jsx(h,{name:"name",type:"text",placeholder:"Name",onChange:r.handleChange,value:r.values.name,valid:r.errors,className:!r.errors.name&&r.values.name?"correct":"incorrect"}),!r.errors.name&&r.values.name&&e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-correct`})}),r.errors.name&&!r.values.name&&e.jsxs(e.Fragment,{children:[e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-error`})}),e.jsx(c,{id:"name",children:r.errors.name})]}),r.errors.name&&r.values.name!==""&&e.jsx(c,{id:"name",children:r.errors.name})]}),e.jsxs(d,{children:[e.jsx(h,{name:"email",type:"text",placeholder:"E-mail",onChange:r.handleChange,value:r.values.email,valid:r.errors,className:!r.errors.email&&r.values.email?"correct":"incorrect"}),!r.errors.email&&r.values.email&&e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-correct`})}),r.errors.email&&r.values.email!==""&&e.jsxs(e.Fragment,{children:[e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-error`})}),e.jsx(c,{id:"email",children:r.errors.email})]})]}),e.jsxs(d,{children:[e.jsx(h,{name:"password",type:o,placeholder:"Password",onChange:r.handleChange,value:r.values.password,valid:r.errors,className:!r.errors.password&&r.values.password?"correct":"incorrect"}),!r.errors.password&&r.values.password&&e.jsx(i,{id:"password",width:16,height:16,children:e.jsx("use",{href:`${t}#icon-correct`})}),r.errors.password&&r.values.password!==""&&e.jsxs(e.Fragment,{children:[e.jsx(i,{id:"password",width:16,height:16,children:e.jsx("use",{href:`${t}#icon-error`})}),e.jsx(c,{id:"password",children:r.errors.password})]}),o==="password"?e.jsx(m,{type:"button",onClick:()=>s("text"),children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-eye`})})}):e.jsx(m,{type:"button",onClick:()=>s("password"),children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-eye-off`})})})]})]}),a===1&&e.jsxs(N,{children:[e.jsx(n,{name:"goal",type:"radio",value:"lose fat",labelText:"Lose Fat",onChange:r.handleChange,defaultChecked:!0}),e.jsx(n,{name:"goal",type:"radio",value:"maintain",labelText:"Maintain",onChange:r.handleChange}),e.jsx(n,{name:"goal",type:"radio",value:"gain muscle",labelText:"Gain Muscle",onChange:r.handleChange})]}),a===2&&e.jsxs(P,{children:[e.jsx(u,{htmlFor:"gender",children:"Gender"}),e.jsxs(G,{children:[e.jsx(n,{id:"gender",name:"gender",type:"radio",value:"male",labelText:"Male",onChange:r.handleChange,defaultChecked:!0}),e.jsx(n,{name:"gender",type:"radio",value:"female",labelText:"Female",onChange:r.handleChange})]}),e.jsx(u,{htmlFor:"age",children:"Your age"}),e.jsxs(d,{children:[e.jsx(h,{name:"age",type:"number",placeholder:"Enter your age",onChange:r.handleChange,value:r.values.age,valid:r.errors}),r.errors.age&&r.values.age&&e.jsx(c,{id:"password",children:r.errors.age})]})]}),a===3&&e.jsxs(R,{children:[e.jsxs("div",{children:[e.jsx(u,{htmlFor:"height",children:"Height"}),e.jsxs(d,{children:[e.jsx(h,{name:"height",type:"number",placeholder:"Enter your height (cm)",onChange:r.handleChange,value:r.values.height,valid:r.errors,className:!r.errors.height&&r.values.height?"correct":"incorrect"}),!r.errors.height&&r.values.height&&e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-correct`})}),r.errors.height&&r.values.height&&e.jsxs(e.Fragment,{children:[e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-error`})}),e.jsx(c,{id:"password",children:r.errors.height})]})]})]}),e.jsxs("div",{children:[e.jsx(u,{htmlFor:"weight",children:"Weight"}),e.jsxs(d,{children:[e.jsx(h,{name:"weight",type:"number",placeholder:"Enter your weight",onChange:r.handleChange,value:r.values.weight,valid:r.errors,className:!r.errors.weight&&r.values.weight?"correct":"incorrect"}),!r.errors.weight&&r.values.weight&&e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-correct`})}),r.errors.weight&&r.values.weight&&e.jsxs(e.Fragment,{children:[e.jsx(i,{width:16,height:16,children:e.jsx("use",{href:`${t}#icon-error`})}),e.jsx(c,{id:"password",children:r.errors.weight})]})]})]})]}),a===4&&e.jsxs(U,{children:[e.jsx(n,{name:"coefficientOfActivity",type:"radio",value:"1.2",labelText:"1.2 - if you do not have physical activity and sedentary work",onChange:r.handleChange,defaultChecked:!0}),e.jsx(n,{name:"coefficientOfActivity",type:"radio",value:"1.375",labelText:"1.375 - if you do short runs or light gymnastics 1-3 times a week",onChange:r.handleChange}),e.jsx(n,{name:"coefficientOfActivity",type:"radio",value:"1.55",labelText:"1.55 - if you play sports with average loads 3-5 times a week",onChange:r.handleChange}),e.jsx(n,{name:"coefficientOfActivity",type:"radio",value:"1.725",labelText:"1.725 ​​- if you train fully 6-7 times a week",onChange:r.handleChange}),e.jsx(n,{name:"coefficientOfActivity",type:"radio",value:"1.9",labelText:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program",onChange:r.handleChange})]}),a===4&&e.jsx(D,{children:e.jsx(v,{text:"Sing Up"})})]})},q=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 500;

  @media screen and (min-width: 834px) {
    max-width: 380px;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 212px;
    justify-content: left;
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin: 0 auto;
  }
`;function _(){const[a,o]=j.useState(0);let s="Sign up";switch(a){case 1:s="Your goal";break;case 2:s="Select gender, Age";break;case 3:s="Body parameters";break;case 4:s="Your Activity";break}let l="You need to register to use the service";switch(a){case 1:l="Choose a goal so that we can help you effectively";break;case 2:l="Choose a goal so that we can help you effectively";break;case 3:l="Enter your parameters for correct performance tracking";break;case 4:l="To correctly calculate calorie and water intake";break}return e.jsxs(O,{children:[e.jsx(A,{pageIllustrations:S,currentStep:a}),e.jsxs($,{children:[e.jsxs("div",{children:[e.jsx(I,{titleText:s}),e.jsx(B,{description:l}),e.jsx(V,{currentStep:a}),e.jsxs(q,{children:[a<4&&e.jsx(v,{type:"button",text:"Next",onClick:()=>o(a+1)}),a>0&&e.jsx(L,{$currentStep:a,children:e.jsx(Y,{type:"button",text:"Back",onClick:()=>o(a-1)})})]})]}),a===0&&e.jsx(W,{descriptionText:"Do you already have an account?",linkText:"Sign in",to:"/signin",flexDirectionColumn:!0})]})]})}export{_ as default};
