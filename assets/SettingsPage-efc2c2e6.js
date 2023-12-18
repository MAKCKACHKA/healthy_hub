import{s as i,j as e}from"./index-b75a9d98.js";import{F as y,c as v,b as p,d as k,e as F}from"./index.esm-494708ca.js";import{I}from"./pageIllustrations-5a1c6282.js";const C=i.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`,z=i.h1`
  color: var(--primary-title-text-color);

  font-size: 24px;

  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,M=i.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`,S=i.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,m=i.button`
  width: 300px;
  background-color: transparent;
  border: 0;
  color: var(--primary-text-color);
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`,g=i.button`
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
  /* line-height: 1.42; */

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`,R=i.svg`
  display: inline-block;
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 380px;
    height: 374px;
  }

  @media screen and (min-width: 1200px) {
    width: 536px;
    height: 528px;
  }
`,N=i.div`
  flex-direction: column;
  /* align-items: flex-start; */
  /* gap: 40px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    /* width: 380px;
    height: 374px; */
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`,W=i.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 40px;
  column-gap: 60px;
  max-width: 300px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    max-width: 490px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`,l=i.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 212px;
  }
`,$=i.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 218px;
  }
`,d=i(y)`
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
`,L=i.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`,a=i.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-text-color);
`,n=i(y)`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,r=i.span`
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

  ${n}:checked + & > span {
    background-color: var(--primary-btn-color);
  }
`,Y=i.div`
  display: flex;
  gap: 12px;
`,A=i.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`,B=i.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,U=i.svg`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  /* fill: var(--primary-text-color); */
  stroke: var(--primary-title-text-color);
`,T=i.div`
  position: relative;
  display: flex;
  column-gap: 6px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 100%;
  height: 100%;
`,D=i.input`
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
`,G=i.svg`
  width: 16px;
  height: 16px;
  /* flex-shrink: 0; */
  stroke: var(--primary-btn-color);
`,u="/healthy_hub/assets/icons-2d1f628e.svg";function O(){const x={name:"Max",photo:"",age:"19",gender:"Male",height:"",weight:"",activity:"1.55"},f=s=>{console.log("Form data saved:",s)},c=s=>{s({values:x})},w=v().shape({age:p().positive("Must be a positive number").integer("Must be an integer").max(100,"Cannot be greater than 100").nullable(),height:p().positive("Must be a positive number").max(300,"Cannot be greater than 300").nullable(),weight:p().positive("Must be a positive number").max(500,"Cannot be greater than 500").nullable()});return e.jsx(k,{initialValues:x,onSubmit:f,validationSchema:w,children:({resetForm:s,values:h,setFieldValue:j,errors:t,touched:o})=>e.jsxs(F,{children:[e.jsxs(C,{children:[e.jsx(z,{children:"Profile setting"}),e.jsxs(M,{children:[e.jsx(m,{type:"button",onClick:()=>c(s),children:"Cancel"}),e.jsx(g,{type:"submit",children:"Save"})]})]}),e.jsxs(N,{children:[e.jsx(R,{children:e.jsx("use",{href:`${I}#icon-settings`})}),e.jsxs(W,{children:[e.jsxs(l,{htmlFor:"name",children:["Your name",e.jsx(d,{type:"text",id:"name",name:"name"})]}),e.jsxs($,{htmlFor:"photo",children:["Your photo",e.jsxs(A,{children:[h.photo===""?e.jsx(U,{children:e.jsx("use",{href:`${u}#icon-profile-circle`})}):e.jsx(B,{src:h.photo,alt:"Selected"}),e.jsxs(T,{children:[e.jsx(G,{children:e.jsx("use",{href:`${u}#icon-direct-inbox`})}),e.jsx(D,{type:"file",accept:"image/*",id:"photo",name:"photo",onChange:b=>{j("photo",URL.createObjectURL(b.target.files[0]))}}),"Download new photo"]})]})]}),e.jsxs(l,{htmlFor:"age",children:["Your age",e.jsx(d,{type:"number",id:"age",name:"age",className:o.age&&t.age?"error":""}),o.age&&t.age&&e.jsx("div",{className:"error-message",children:t.age})]}),e.jsxs(l,{children:["Gender",e.jsxs(Y,{children:[e.jsxs(a,{children:[e.jsx(n,{type:"radio",name:"gender",value:"Male"}),"Male",e.jsx(r,{children:e.jsx("span",{})})]}),e.jsxs(a,{children:[e.jsx(n,{type:"radio",name:"gender",value:"Female"}),"Female",e.jsx(r,{children:e.jsx("span",{})})]})]})]}),e.jsxs(l,{htmlFor:"height",children:["Height",e.jsx(d,{type:"number",id:"height",name:"height",className:o.height&&t.height?"error":""}),o.height&&t.height&&e.jsx("div",{className:"error-message",children:t.height})]}),e.jsxs(l,{htmlFor:"weight",children:["Weight",e.jsx(d,{type:"number",id:"weight",name:"weight",className:o.weight&&t.weight?"error":""}),o.weight&&t.weight&&e.jsx("div",{className:"error-message",children:t.weight})]}),e.jsxs(L,{children:["Your activity",e.jsxs(a,{children:[e.jsx(n,{type:"radio",id:"activity1",name:"activity",value:"1.2"}),e.jsx(r,{children:e.jsx("span",{})}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(a,{children:[e.jsx(n,{type:"radio",id:"activity2",name:"activity",value:"1.375"}),e.jsx(r,{children:e.jsx("span",{})}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(a,{children:[e.jsx(n,{type:"radio",id:"activity3",name:"activity",value:"1.55"}),e.jsx(r,{children:e.jsx("span",{})}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(a,{children:[e.jsx(n,{type:"radio",id:"activity4",name:"activity",value:"1.725"}),e.jsx(r,{children:e.jsx("span",{})}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(a,{children:[e.jsx(n,{type:"radio",id:"activity4",name:"activity",value:"1.9"}),e.jsx(r,{children:e.jsx("span",{})}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),e.jsxs(S,{children:[e.jsx(m,{type:"button",onClick:()=>c(s),children:"Cancel"}),e.jsx(g,{type:"submit",children:"Save"})]})]})]})})}export{O as default};
