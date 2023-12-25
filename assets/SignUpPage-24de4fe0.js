import{s as t,j as e,r as j,u as b,a as C,i as n,b as k}from"./index-e6c7fe4a.js";import{I as S}from"./pageIllustrations-4edaff57.js";import{I as F,a as h,E as d,P as v,v as T,A as $,T as A,b as I,S as B,c as W}from"./SignInPage.styled-231524c4.js";import{F as E,S as O}from"./ForgotPasswordPage.styled-72c36b3a.js";const N=t.button`
  width: 192px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: var(--primary-title-text-color);
`,P=({type:a="submit",text:l,onClick:i=null})=>e.jsx(N,{type:a,onClick:i,children:l}),G=t.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-title-text-color);
`,y=t.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,R=t.span`
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
`,s=({name:a,value:l,labelText:i,onChange:c,defaultChecked:m})=>e.jsxs(G,{children:[e.jsx(y,{type:"radio",name:a,value:l,onChange:c,defaultChecked:m}),e.jsx(R,{children:e.jsx("span",{})}),i]}),U=t.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 864px) and (max-width: 1439px) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`,x=t.label`
  color: var(--primary-title-text-color);
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
`,D=t.div`
  display: flex;
  gap: 100px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`,M=t.div`
  margin-bottom: 40px;
`,Y=t.div`
  margin: 0 auto;
  margin: ${a=>a.$currentStep===4&&"20px auto 0"};
`,z=t.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`,L=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  color: var(--primary-title-text-color);
`,H=t.div`
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,p=t.div`
  position: relative;
  &:hover button {
    opacity: 1;
  }
  &:hover svg[id='password'] {
    opacity: 0;
  }
`,o=t.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 1;
`,u=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  padding: 0;
  background-color: transparent;
  border: none;
  opacity: 0;
`,V=({currentStep:a})=>{const[l,i]=j.useState("password"),c=b(),r=C({initialValues:{name:"",email:"",password:"",goal:"lose fat",gender:"male",age:"",height:"",weight:"",coefficientOfActivity:"1.2"},validationSchema:T,onSubmit:(f,w)=>{const g={...f};g.coefficientOfActivity=Number(g.coefficientOfActivity),c(k({...g})),w.resetForm()}});return e.jsxs(E,{$currentStep:a,onSubmit:r.handleSubmit,children:[a===0&&e.jsxs(F,{children:[e.jsxs(p,{children:[e.jsx(h,{name:"name",type:"text",placeholder:"Name",onChange:r.handleChange,value:r.values.name,valid:r.errors,className:!r.errors.name&&r.values.name?"correct":"incorrect"}),!r.errors.name&&r.values.name&&e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-correct`})}),r.errors.name&&!r.values.name&&e.jsxs(e.Fragment,{children:[e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-error`})}),e.jsx(d,{id:"name",children:r.errors.name})]}),r.errors.name&&r.values.name!==""&&e.jsx(d,{id:"name",children:r.errors.name})]}),e.jsxs(p,{children:[e.jsx(h,{name:"email",type:"text",placeholder:"E-mail",onChange:r.handleChange,value:r.values.email,valid:r.errors,className:!r.errors.email&&r.values.email?"correct":"incorrect"}),!r.errors.email&&r.values.email&&e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-correct`})}),r.errors.email&&r.values.email!==""&&e.jsxs(e.Fragment,{children:[e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-error`})}),e.jsx(d,{id:"email",children:r.errors.email})]})]}),e.jsxs(p,{children:[e.jsx(h,{name:"password",type:l,placeholder:"Password",onChange:r.handleChange,value:r.values.password,valid:r.errors,className:!r.errors.password&&r.values.password?"correct":"incorrect"}),!r.errors.password&&r.values.password&&e.jsx(o,{id:"password",width:16,height:16,children:e.jsx("use",{href:`${n}#icon-correct`})}),r.errors.password&&r.values.password!==""&&e.jsxs(e.Fragment,{children:[e.jsx(o,{id:"password",width:16,height:16,children:e.jsx("use",{href:`${n}#icon-error`})}),e.jsx(d,{id:"password",children:r.errors.password})]}),l==="password"?e.jsx(u,{type:"button",onClick:()=>i("text"),children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-eye`})})}):e.jsx(u,{type:"button",onClick:()=>i("password"),children:e.jsx("svg",{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-eye-off`})})})]})]}),a===1&&e.jsxs(U,{children:[e.jsx(s,{name:"goal",type:"radio",value:"lose fat",labelText:"Lose Fat",onChange:r.handleChange,defaultChecked:!0}),e.jsx(s,{name:"goal",type:"radio",value:"maintain",labelText:"Maintain",onChange:r.handleChange}),e.jsx(s,{name:"goal",type:"radio",value:"gain muscle",labelText:"Gain Muscle",onChange:r.handleChange})]}),a===2&&e.jsxs(M,{children:[e.jsx(x,{htmlFor:"gender",children:"Gender"}),e.jsxs(D,{children:[e.jsx(s,{id:"gender",name:"gender",type:"radio",value:"male",labelText:"Male",onChange:r.handleChange,defaultChecked:!0}),e.jsx(s,{name:"gender",type:"radio",value:"female",labelText:"Female",onChange:r.handleChange})]}),e.jsx(x,{htmlFor:"age",children:"Your age"}),e.jsxs(p,{children:[e.jsx(h,{name:"age",type:"number",placeholder:"Enter your age",onChange:r.handleChange,value:r.values.age,valid:r.errors}),r.errors.age&&r.values.age&&e.jsx(d,{id:"password",children:r.errors.age})]})]}),a===3&&e.jsxs(z,{children:[e.jsxs("div",{children:[e.jsx(x,{htmlFor:"height",children:"Height"}),e.jsxs(p,{children:[e.jsx(h,{name:"height",type:"number",placeholder:"Enter your height (cm)",onChange:r.handleChange,value:r.values.height,valid:r.errors,className:!r.errors.height&&r.values.height?"correct":"incorrect"}),!r.errors.height&&r.values.height&&e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-correct`})}),r.errors.height&&r.values.height&&e.jsxs(e.Fragment,{children:[e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-error`})}),e.jsx(d,{id:"password",children:r.errors.height})]})]})]}),e.jsxs("div",{children:[e.jsx(x,{htmlFor:"weight",children:"Weight"}),e.jsxs(p,{children:[e.jsx(h,{name:"weight",type:"number",placeholder:"Enter your weight",onChange:r.handleChange,value:r.values.weight,valid:r.errors,className:!r.errors.weight&&r.values.weight?"correct":"incorrect"}),!r.errors.weight&&r.values.weight&&e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-correct`})}),r.errors.weight&&r.values.weight&&e.jsxs(e.Fragment,{children:[e.jsx(o,{width:16,height:16,children:e.jsx("use",{href:`${n}#icon-error`})}),e.jsx(d,{id:"password",children:r.errors.weight})]})]})]})]}),a===4&&e.jsxs(L,{children:[e.jsx(s,{name:"coefficientOfActivity",type:"radio",value:"1.2",labelText:"1.2 - if you do not have physical activity and sedentary work",onChange:r.handleChange,defaultChecked:!0}),e.jsx(s,{name:"coefficientOfActivity",type:"radio",value:"1.375",labelText:"1.375 - if you do short runs or light gymnastics 1-3 times a week",onChange:r.handleChange}),e.jsx(s,{name:"coefficientOfActivity",type:"radio",value:"1.55",labelText:"1.55 - if you play sports with average loads 3-5 times a week",onChange:r.handleChange}),e.jsx(s,{name:"coefficientOfActivity",type:"radio",value:"1.725",labelText:"1.725 ​​- if you train fully 6-7 times a week",onChange:r.handleChange}),e.jsx(s,{name:"coefficientOfActivity",type:"radio",value:"1.9",labelText:"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program",onChange:r.handleChange})]}),a===4&&e.jsx(H,{children:e.jsx(v,{text:"Sing Up"})})]})},q=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 500;

  @media screen and (min-width: 864px) {
    max-width: 380px;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 212px;
    justify-content: left;
  }

  @media screen and (min-width: 864px) and (max-width: 1439px) {
    margin: 0 auto;
  }
`;function Z(){const[a,l]=j.useState(0);let i="Sign up";switch(a){case 1:i="Your goal";break;case 2:i="Select gender, Age";break;case 3:i="Body parameters";break;case 4:i="Your Activity";break}let c="You need to register to use the service";switch(a){case 1:c="Choose a goal so that we can help you effectively";break;case 2:c="Choose a goal so that we can help you effectively";break;case 3:c="Enter your parameters for correct performance tracking";break;case 4:c="To correctly calculate calorie and water intake";break}return e.jsxs(O,{children:[e.jsx($,{pageIllustrations:S,currentStep:a}),e.jsxs(A,{children:[e.jsxs("div",{children:[e.jsx(I,{titleText:i}),e.jsx(B,{description:c}),e.jsx(V,{currentStep:a}),e.jsxs(q,{children:[a<4&&e.jsx(v,{type:"button",text:"Next",onClick:()=>l(a+1)}),a>0&&e.jsx(Y,{$currentStep:a,children:e.jsx(P,{type:"button",text:"Back",onClick:()=>l(a-1)})})]})]}),a===0&&e.jsx(W,{descriptionText:"Do you already have an account?",linkText:"Sign in",to:"/signin",flexDirectionColumn:!0})]})]})}export{Z as default};
