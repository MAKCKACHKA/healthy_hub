import{s as r,j as a,u,a as g,r as y}from"./index-a002b40c.js";import{I as v}from"./pageIllustrations-fb5a38e2.js";import{I as f,a as s,E as l,P as p,v as j,A as b,T as w,b as C,S as k,c as S}from"./SignInPage.styled-593918f9.js";import{u as T}from"./index.esm-4af908ef.js";import{F,S as A}from"./ForgotPasswordPage.styled-a24448da.js";const B=r.button`
  width: 192px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: var(--primary-title-text-color);
`,I=({type:t="submit",text:o,onClick:n=null})=>a.jsx(B,{type:t,onClick:n,children:o}),W=r.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-title-text-color);
`,x=r.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,E=r.span`
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
`,i=({name:t,value:o,labelText:n,onChange:e,defaultChecked:c})=>a.jsxs(W,{children:[a.jsx(x,{type:"radio",name:t,value:o,onChange:e,defaultChecked:c}),a.jsx(E,{children:a.jsx("span",{})}),n]}),O=r.div`
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
`,d=r.label`
  color: var(--primary-title-text-color);
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
`,P=r.div`
  display: flex;
  gap: 100px;
  margin-bottom: 24px;

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    gap: 16px;
  }
`,G=r.div`
  margin-bottom: 40px;
`,R=r.div`
  margin: 0 auto;
  margin: ${t=>t.$currentStep===4&&"20px auto 0"};
`,U=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`,$=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--primary-title-text-color);
`,D=r.div`
  @media screen and (min-width: 1200px) {
    width: 212px;
  }
`,M=({currentStep:t})=>{const o=u(),e=T({initialValues:{name:"",email:"",password:"",goal:"lose fat",gender:"male",age:"",height:"",weight:"",coefficientOfActivity:"1.2"},validationSchema:j,onSubmit:(c,m)=>{const h={...c};h.coefficientOfActivity=Number(h.coefficientOfActivity),o(g({...h})),m.resetForm()}});return a.jsxs(F,{$currentStep:t,onSubmit:e.handleSubmit,children:[t===0&&a.jsxs(f,{children:[a.jsxs("div",{children:[a.jsx(s,{name:"name",type:"text",placeholder:"Name",onChange:e.handleChange,value:e.values.name,valid:e.errors,touched:e.touched}),e.errors.name&&!e.values.name&&a.jsx(l,{id:"name",children:e.errors.name})]}),a.jsxs("div",{children:[a.jsx(s,{name:"email",type:"text",placeholder:"E-mail",onChange:e.handleChange,value:e.values.email,valid:e.errors,touched:e.touched}),e.errors.email&&e.values.email!==""&&a.jsx(l,{id:"email",children:e.errors.email})]}),a.jsxs("div",{children:[a.jsx(s,{name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,value:e.values.password,valid:e.errors,touched:e.touched}),e.errors.password&&e.values.password!==""&&a.jsx(l,{id:"password",children:e.errors.password})]})]}),t===1&&a.jsxs(O,{children:[a.jsx(i,{name:"goal",type:"radio",value:"lose fat",labelText:"Lose Fat",onChange:e.handleChange,defaultChecked:!0}),a.jsx(i,{name:"goal",type:"radio",value:"maintain",labelText:"Maintain",onChange:e.handleChange}),a.jsx(i,{name:"goal",type:"radio",value:"gain muscle",labelText:"Gain Muscle",onChange:e.handleChange})]}),t===2&&a.jsxs(G,{children:[a.jsx(d,{htmlFor:"gender",children:"Gender"}),a.jsxs(P,{children:[a.jsx(i,{id:"gender",name:"gender",type:"radio",value:"male",labelText:"Male",onChange:e.handleChange,defaultChecked:!0}),a.jsx(i,{name:"gender",type:"radio",value:"female",labelText:"Female",onChange:e.handleChange})]}),a.jsx(d,{htmlFor:"age",children:"Your age"}),a.jsx(s,{name:"age",type:"number",placeholder:"Enter your age",onChange:e.handleChange,value:e.values.age,valid:e.errors,touched:e.touched}),e.errors.age&&e.values.age&&a.jsx(l,{id:"password",children:e.errors.age})]}),t===3&&a.jsxs(U,{children:[a.jsxs("div",{children:[a.jsx(d,{htmlFor:"height",children:"Height"}),a.jsx(s,{name:"height",type:"number",placeholder:"Enter your height (cm)",onChange:e.handleChange,value:e.values.height,valid:e.errors,touched:e.touched}),e.errors.height&&e.values.height&&a.jsx(l,{id:"password",children:e.errors.height})]}),a.jsxs("div",{children:[a.jsx(d,{htmlFor:"weight",children:"Weight"}),a.jsx(s,{name:"weight",type:"number",placeholder:"Enter your weight",onChange:e.handleChange,value:e.values.weight,valid:e.errors,touched:e.touched}),e.errors.weight&&e.values.weight&&a.jsx(l,{id:"password",children:e.errors.weight})]})]}),t===4&&a.jsxs($,{children:[a.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.2",labelText:"1.2 - if you do not have physical activity and sedentary work",onChange:e.handleChange,defaultChecked:!0}),a.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.375",labelText:"1.375 - if you do short runs or light gymnastics 1-3 times a week",onChange:e.handleChange}),a.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.55",labelText:"1.55 - if you play sports with average loads 3-5 times a week",onChange:e.handleChange}),a.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.725",labelText:"1.725 ​​- if you train fully 6-7 times a week",onChange:e.handleChange}),a.jsx(i,{name:"coefficientOfActivity",type:"radio",value:"1.9",labelText:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program",onChange:e.handleChange})]}),t===4&&a.jsx(D,{children:a.jsx(p,{text:"Sing Up"})})]})},Y=r.div`
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
`;function q(){const[t,o]=y.useState(0);let n="Sign up";switch(t){case 1:n="Your goal";break;case 2:n="Select gender, Age";break;case 3:n="Body parameters";break;case 4:n="Your Activity";break}let e="You need to register to use the service";switch(t){case 1:e="Choose a goal so that we can help you effectively";break;case 2:e="Choose a goal so that we can help you effectively";break;case 3:e="Enter your parameters for correct performance tracking";break;case 4:e="To correctly calculate calorie and water intake";break}return a.jsxs(A,{children:[a.jsx(b,{pageIllustrations:v,currentStep:t}),a.jsxs(w,{children:[a.jsxs("div",{children:[a.jsx(C,{titleText:n}),a.jsx(k,{description:e}),a.jsx(M,{currentStep:t}),a.jsxs(Y,{children:[t<4&&a.jsx(p,{type:"button",text:"Next",onClick:()=>o(t+1)}),t>0&&a.jsx(R,{$currentStep:t,children:a.jsx(I,{type:"button",text:"Back",onClick:()=>o(t-1)})})]})]}),t===0&&a.jsx(S,{descriptionText:"Do you already have an account?",linkText:"Sign in",to:"/signin",flexDirectionColumn:!0})]})]})}export{q as default};
