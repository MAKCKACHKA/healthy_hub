import{s as t,j as e,u as g,a as u,r as y}from"./index-16d71831.js";import{I as v}from"./pageIllustrations-3d2c39e1.js";import{I as f,a as s,E as l,P as p,v as j,A as b,T as w,b as C,S as k,c as S}from"./SignInPage.styled-bf746394.js";import{u as T}from"./index.esm-7ea612db.js";import{F,S as A}from"./ForgotPasswordPage.styled-45b06bc0.js";const B=t.button`
  width: 192px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: var(--primary-title-text-color);
`,I=({type:r="submit",text:o,onClick:n=null})=>e.jsx(B,{type:r,onClick:n,children:o}),W=t.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-title-text-color);
`,x=t.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,E=t.span`
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

  ${x}:checked ~ & > span {
    background-color: var(--primary-btn-color);
  }
`,i=({name:r,value:o,labelText:n,onChange:a,defaultChecked:c})=>e.jsxs(W,{children:[e.jsx(x,{type:"radio",name:r,value:o,onChange:a,defaultChecked:c}),e.jsx(E,{children:e.jsx("span",{})}),n]}),O=t.div`
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
`,P=t.div`
  display: flex;
  gap: 100px;
  margin-bottom: 24px;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    gap: 16px;
  }
`,G=t.div`
  margin-bottom: 40px;
`,R=t.div`
  margin: 0 auto;
  margin: ${r=>r.$currentStep===4&&"20px auto 0"};
`,U=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`,$=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--primary-title-text-color);
`,D=t.div`
  @media screen and (min-width: 1200px) {
    width: 212px;
  }
`,M=({currentStep:r})=>{const o=g(),a=T({initialValues:{name:"",email:"",password:"",goal:"lose fat",gender:"male",age:"",height:"",weight:"",coefficientOfActivity:"1.2"},validationSchema:j,onSubmit:(c,m)=>{const h={...c};h.coefficientOfActivity=Number(h.coefficientOfActivity),o(u({...h})),m.resetForm()}});return e.jsxs(F,{$currentStep:r,onSubmit:a.handleSubmit,children:[r===0&&e.jsxs(f,{children:[e.jsxs("div",{children:[e.jsx(s,{name:"name",type:"text",placeholder:"Name",onChange:a.handleChange,value:a.values.name,valid:a.errors}),a.errors.name&&a.values.name!==""&&e.jsx(l,{id:"name",children:a.errors.name})]}),e.jsxs("div",{children:[e.jsx(s,{name:"email",type:"text",placeholder:"E-mail",onChange:a.handleChange,value:a.values.email,valid:a.errors}),a.errors.email&&a.values.email!==""&&e.jsx(l,{id:"email",children:a.errors.email})]}),e.jsxs("div",{children:[e.jsx(s,{name:"password",type:"password",placeholder:"Password",onChange:a.handleChange,value:a.values.password,valid:a.errors}),a.errors.password&&a.values.password!==""&&e.jsx(l,{id:"password",children:a.errors.password})]})]}),r===1&&e.jsxs(O,{children:[e.jsx(i,{name:"goal",type:"radio",value:"lose fat",labelText:"Lose Fat",onChange:a.handleChange,defaultChecked:!0}),e.jsx(i,{name:"goal",type:"radio",value:"maintain",labelText:"Maintain",onChange:a.handleChange}),e.jsx(i,{name:"goal",type:"radio",value:"gain muscle",labelText:"Gain Muscle",onChange:a.handleChange})]}),r===2&&e.jsxs(G,{children:[e.jsx(d,{htmlFor:"gender",children:"Gender"}),e.jsxs(P,{children:[e.jsx(i,{id:"gender",name:"gender",type:"radio",value:"male",labelText:"Male",onChange:a.handleChange,defaultChecked:!0}),e.jsx(i,{name:"gender",type:"radio",value:"female",labelText:"Female",onChange:a.handleChange})]}),e.jsx(d,{htmlFor:"age",children:"Your age"}),e.jsx(s,{name:"age",type:"number",placeholder:"Enter your age",onChange:a.handleChange,value:a.values.age,valid:a.errors}),a.errors.age&&a.values.age&&e.jsx(l,{id:"password",children:a.errors.age})]}),r===3&&e.jsxs(U,{children:[e.jsxs("div",{children:[e.jsx(d,{htmlFor:"height",children:"Height"}),e.jsx(s,{name:"height",type:"number",placeholder:"Enter your height (cm)",onChange:a.handleChange,value:a.values.height,valid:a.errors}),a.errors.height&&a.values.height&&e.jsx(l,{id:"password",children:a.errors.height})]}),e.jsxs("div",{children:[e.jsx(d,{htmlFor:"weight",children:"Weight"}),e.jsx(s,{name:"weight",type:"number",placeholder:"Enter your weight",onChange:a.handleChange,value:a.values.weight,valid:a.errors}),a.errors.weight&&a.values.weight&&e.jsx(l,{id:"password",children:a.errors.weight})]})]}),r===4&&e.jsxs($,{children:[e.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.2",labelText:"1.2 - if you do not have physical activity and sedentary work",onChange:a.handleChange,defaultChecked:!0}),e.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.375",labelText:"1.375 - if you do short runs or light gymnastics 1-3 times a week",onChange:a.handleChange}),e.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.55",labelText:"1.55 - if you play sports with average loads 3-5 times a week",onChange:a.handleChange}),e.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.725",labelText:"1.725 ​​- if you train fully 6-7 times a week",onChange:a.handleChange}),e.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.9",labelText:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program",onChange:a.handleChange})]}),r===4&&e.jsx(D,{children:e.jsx(p,{text:"Sing Up"})})]})},Y=t.div`
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
`;function q(){const[r,o]=y.useState(0);let n="Sign up";switch(r){case 1:n="Your goal";break;case 2:n="Select gender, Age";break;case 3:n="Body parameters";break;case 4:n="Your Activity";break}let a="You need to register to use the service";switch(r){case 1:a="Choose a goal so that we can help you effectively";break;case 2:a="Choose a goal so that we can help you effectively";break;case 3:a="Enter your parameters for correct performance tracking";break;case 4:a="To correctly calculate calorie and water intake";break}return e.jsxs(A,{children:[e.jsx(b,{pageIllustrations:v,currentStep:r}),e.jsxs(w,{children:[e.jsxs("div",{children:[e.jsx(C,{titleText:n}),e.jsx(k,{description:a}),e.jsx(M,{currentStep:r}),e.jsxs(Y,{children:[r<4&&e.jsx(p,{type:"button",text:"Next",onClick:()=>o(r+1)}),r>0&&e.jsx(R,{$currentStep:r,children:e.jsx(I,{type:"button",text:"Back",onClick:()=>o(r-1)})})]})]}),r===0&&e.jsx(S,{descriptionText:"Do you already have an account?",linkText:"Sign in",to:"/signin",flexDirectionColumn:!0})]})]})}export{q as default};
