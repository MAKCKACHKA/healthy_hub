import{u as t,F as j,h as R,k as C,a as F,r as f,d as I,g as u,j as e,C as S,D as L,i as v,E as z,G as N,m as $}from"./index-96a574da.js";import{I as W}from"./pageIllustrations-8836ccd8.js";const D=t.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 864px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,M=t.h1`
  color: var(--primary-title-text-color);

  font-size: 24px;

  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 864px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,Y=t.div`
  display: none;
  @media screen and (min-width: 864px) {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-right: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 45px;
  }
`,B=t.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 40px;
  @media screen and (min-width: 864px) {
    display: none;
  }
`,w=t.button`
  width: 300px;
  background-color: transparent;
  border: 0;
  color: var(--primary-text-color);
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;

  @media screen and (min-width: 864px) {
    width: 212px;
  }
`,b=t.button`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--primary-btn-color);
  width: 300px;
  height: 36px;
  color: var(--secondary-text-color);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  @media screen and (min-width: 864px) {
    width: 212px;
  }
`,E=t.svg`
  display: inline-block;
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 864px) {
    width: 380px;
    height: 374px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 528px;
  }
`,T=t.div`
  flex-direction: column;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
  }
`,G=t.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 40px;
  column-gap: 60px;
  max-width: 300px;
  justify-content: center;
  @media screen and (min-width: 864px) {
    max-width: 490px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`,d=t.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 864px) {
    width: 212px;
  }
`,J=t.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 864px) {
    width: 218px;
  }
`,x=t(j)`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-text-color);
  background: transparent;
  color: var(--primary-title-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 100%;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,r=t.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-text-color);
`,P=t.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 20px;

  & > ${r} {
    margin-top: 12px;
  }

  & > ${r}:not(:first-child) {
    margin-top: 20px;
  }
`,s=t(j)`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,l=t.span`
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

  ${s}:checked + & > span {
    background-color: var(--primary-btn-color);
  }
`,V=t.div`
  display: flex;
  gap: 12px;
`,_=t.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`,H=t.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,q=t.svg`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  stroke: var(--primary-title-text-color);
`,K=t.div`
  position: relative;
  display: flex;
  column-gap: 6px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 100%;
  height: 100%;
`,Q=t.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &::-webkit-file-upload-button {
    display: none;
  }
`,X=t.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primary-btn-color);
`;function ie(){const{user:i}=R(C),h=F(),m={age:i&&i.age!==void 0?i.age:"",weight:i&&i.weight!==void 0?i.weight:"",height:i&&i.height!==void 0?i.height:"",gender:i&&i.gender!==void 0?i.gender:"",coefficientOfActivity:i&&i.coefficientOfActivity!==void 0?String(i.coefficientOfActivity):"",name:i&&i.name!==void 0?i.name:""},[n,p]=f.useState(i?i.avatarURL:""),[k,g]=f.useState(!1),A=o=>{const a={...o};a.coefficientOfActivity=Number(a.coefficientOfActivity),JSON.stringify(m)!==JSON.stringify(o)&&h(z(a)),n!==""&&typeof n=="object"&&n instanceof File&&h(N({avatar:n})),setTimeout(()=>{h($()),p(i.avatarURL),n!==""&&typeof n=="object"&&g(!1),window.location.href="/healthy_hub/main "},2300)},y=o=>{o({values:m}),p(i?i.avatarURL:""),g(!1),window.location.href="/healthy_hub/main "},O=I().shape({age:u().positive("Must be a positive number").integer("Must be an integer").max(100,"Cannot be greater than 100").nullable(),height:u().positive("Must be a positive number").max(300,"Cannot be greater than 300").nullable(),weight:u().positive("Must be a positive number").max(500,"Cannot be greater than 500").nullable()});return f.useEffect(()=>{i&&p(i.avatarURL)},[i]),e.jsx(S,{initialValues:m,enableReinitialize:!0,onSubmit:A,validationSchema:O,children:({resetForm:o,errors:a,touched:c})=>e.jsxs(L,{children:[e.jsxs(D,{children:[e.jsx(M,{children:"Profile setting"}),e.jsxs(Y,{children:[e.jsx(w,{type:"button",onClick:()=>y(o),children:"Cancel"}),e.jsx(b,{type:"submit",children:"Save"})]})]}),e.jsxs(T,{children:[e.jsx(E,{children:e.jsx("use",{href:`${W}#icon-settings`})}),e.jsxs(G,{children:[e.jsxs(d,{htmlFor:"name",children:["Your name",e.jsx(x,{type:"text",id:"name",name:"name"})]}),e.jsxs(J,{htmlFor:"avatar",children:["Your photo",e.jsxs(_,{children:[n===""?e.jsx(q,{children:e.jsx("use",{href:`${v}#icon-profile-circle`})}):e.jsx(H,{src:i.avatarURL?k?URL.createObjectURL(n):n:URL.createObjectURL(n),alt:"Selected"}),e.jsxs(K,{children:[e.jsx(X,{children:e.jsx("use",{href:`${v}#icon-direct-inbox`})}),e.jsx(Q,{type:"file",accept:"image/*",id:"avatar",name:"avatar",onChange:U=>{p(U.target.files[0]),g(!0)}}),"Download new photo"]})]})]}),e.jsxs(d,{htmlFor:"age",children:["Your age",e.jsx(x,{type:"number",id:"age",name:"age",className:c.age&&a.age?"error":""}),c.age&&a.age&&e.jsx("div",{className:"error-message",children:a.age})]}),e.jsxs(d,{children:["Gender",e.jsxs(V,{children:[e.jsxs(r,{children:[e.jsx(s,{type:"radio",name:"gender",value:"male"}),"Male",e.jsx(l,{children:e.jsx("span",{})})]}),e.jsxs(r,{children:[e.jsx(s,{type:"radio",name:"gender",value:"female"}),"Female",e.jsx(l,{children:e.jsx("span",{})})]})]})]}),e.jsxs(d,{htmlFor:"height",children:["Height",e.jsx(x,{type:"number",id:"height",name:"height",className:c.height&&a.height?"error":""}),c.height&&a.height&&e.jsx("div",{className:"error-message",children:a.height})]}),e.jsxs(d,{htmlFor:"weight",children:["Weight",e.jsx(x,{type:"number",id:"weight",name:"weight",className:c.weight&&a.weight?"error":""}),c.weight&&a.weight&&e.jsx("div",{className:"error-message",children:a.weight})]}),e.jsxs(P,{children:["Your activity",e.jsxs(r,{children:[e.jsx(s,{type:"radio",id:"coefficientOfActivity1",name:"coefficientOfActivity",value:"1.2"}),e.jsx(l,{children:e.jsx("span",{})}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(r,{children:[e.jsx(s,{type:"radio",id:"coefficientOfActivity2",name:"coefficientOfActivity",value:"1.375"}),e.jsx(l,{children:e.jsx("span",{})}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(r,{children:[e.jsx(s,{type:"radio",id:"coefficientOfActivity3",name:"coefficientOfActivity",value:"1.55"}),e.jsx(l,{children:e.jsx("span",{})}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(r,{children:[e.jsx(s,{type:"radio",id:"coefficientOfActivity4",name:"coefficientOfActivity",value:"1.725"}),e.jsx(l,{children:e.jsx("span",{})}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(r,{children:[e.jsx(s,{type:"radio",id:"coefficientOfActivity4",name:"coefficientOfActivity",value:"1.9"}),e.jsx(l,{children:e.jsx("span",{})}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),e.jsxs(B,{children:[e.jsx(w,{type:"button",onClick:()=>{y(o)},children:"Cancel"}),e.jsx(b,{type:"submit",children:"Save"})]})]})]})})}export{ie as default};
