import{s as i,c as I,d as S,u as C,r as m,k as w,j as e,t as R,v as L}from"./index-7f5ec795.js";import{F as k,c as N,b as g,d as z,e as W}from"./index.esm-1ae36d31.js";import{I as $}from"./pageIllustrations-0d25189a.js";import{i as v}from"./icons-04a79b9e.js";const M=i.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,Y=i.h1`
  color: var(--primary-title-text-color);

  font-size: 24px;

  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,B=i.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-right: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 45px;
  }
`,D=i.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,j=i.button`
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
`,b=i.button`
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
`,T=i.svg`
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
`,E=i.div`
  flex-direction: column;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    /* justify-content: space-between; */
    margin-left: auto;
    margin-right: auto;
    max-width: 1440px;
  }
`,G=i.div`
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
`,p=i.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 212px;
  }
`,J=i.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 12px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 218px;
  }
`,x=i(k)`
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
`,P=i.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`,o=i.label`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--primary-text-color);
`,r=i(k)`
  position: absolute;
  opacity: 0;
  z-index: -1;
`,l=i.span`
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

  ${r}:checked + & > span {
    background-color: var(--primary-btn-color);
  }
`,V=i.div`
  display: flex;
  gap: 12px;
`,H=i.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`,q=i.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,K=i.svg`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  /* fill: var(--primary-text-color); */
  stroke: var(--primary-title-text-color);
`,Q=i.div`
  position: relative;
  display: flex;
  column-gap: 6px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 100%;
  height: 100%;
`,X=i.input`
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
`,Z=i.svg`
  width: 16px;
  height: 16px;
  /* flex-shrink: 0; */
  stroke: var(--primary-btn-color);
`;function ne(){const{user:t}=I(S),d=C();m.useEffect(()=>{d(w())},[d]);const h={age:t&&t.age,weight:t&&t.weight,height:t&&t.height,gender:t&&t.gender,coefficientOfActivity:t&&String(t.coefficientOfActivity),name:t&&t.name},[a,f]=m.useState(t?t.avatarURL:""),[A,u]=m.useState(!1),O=s=>{const n={...s};n.coefficientOfActivity=Number(n.coefficientOfActivity),JSON.stringify(h)!==JSON.stringify(s)&&d(R(n)),a!==""&&typeof a=="object"&&a instanceof File&&d(L({avatar:a})),setTimeout(()=>{d(w())},2300)},y=s=>{s({values:h}),f(t?t.avatarURL:""),u(!1)},U=N().shape({age:g().positive("Must be a positive number").integer("Must be an integer").max(100,"Cannot be greater than 100").nullable(),height:g().positive("Must be a positive number").max(300,"Cannot be greater than 300").nullable(),weight:g().positive("Must be a positive number").max(500,"Cannot be greater than 500").nullable()});return e.jsx(z,{initialValues:h,onSubmit:O,validationSchema:U,children:({resetForm:s,errors:n,touched:c})=>e.jsxs(W,{children:[e.jsxs(M,{children:[e.jsx(Y,{children:"Profile setting"}),e.jsxs(B,{children:[e.jsx(j,{type:"button",onClick:()=>y(s),children:"Cancel"}),e.jsx(b,{type:"submit",children:"Save"})]})]}),e.jsxs(E,{children:[e.jsx(T,{children:e.jsx("use",{href:`${$}#icon-settings`})}),e.jsxs(G,{children:[e.jsxs(p,{htmlFor:"name",children:["Your name",e.jsx(x,{type:"text",id:"name",name:"name"})]}),e.jsxs(J,{htmlFor:"avatar",children:["Your photo",e.jsxs(H,{children:[a===""?e.jsx(K,{children:e.jsx("use",{href:`${v}#icon-profile-circle`})}):e.jsx(q,{src:t.avatarURL?A?URL.createObjectURL(a):a:URL.createObjectURL(a),alt:"Selected"}),e.jsxs(Q,{children:[e.jsx(Z,{children:e.jsx("use",{href:`${v}#icon-direct-inbox`})}),e.jsx(X,{type:"file",accept:"image/*",id:"avatar",name:"avatar",onChange:F=>{f(F.target.files[0]),u(!0)}}),"Download new photo"]})]})]}),e.jsxs(p,{htmlFor:"age",children:["Your age",e.jsx(x,{type:"number",id:"age",name:"age",className:c.age&&n.age?"error":""}),c.age&&n.age&&e.jsx("div",{className:"error-message",children:n.age})]}),e.jsxs(p,{children:["Gender",e.jsxs(V,{children:[e.jsxs(o,{children:[e.jsx(r,{type:"radio",name:"gender",value:"male"}),"Male",e.jsx(l,{children:e.jsx("span",{})})]}),e.jsxs(o,{children:[e.jsx(r,{type:"radio",name:"gender",value:"female"}),"Female",e.jsx(l,{children:e.jsx("span",{})})]})]})]}),e.jsxs(p,{htmlFor:"height",children:["Height",e.jsx(x,{type:"number",id:"height",name:"height",className:c.height&&n.height?"error":""}),c.height&&n.height&&e.jsx("div",{className:"error-message",children:n.height})]}),e.jsxs(p,{htmlFor:"weight",children:["Weight",e.jsx(x,{type:"number",id:"weight",name:"weight",className:c.weight&&n.weight?"error":""}),c.weight&&n.weight&&e.jsx("div",{className:"error-message",children:n.weight})]}),e.jsxs(P,{children:["Your activity",e.jsxs(o,{children:[e.jsx(r,{type:"radio",id:"coefficientOfActivity1",name:"coefficientOfActivity",value:"1.2"}),e.jsx(l,{children:e.jsx("span",{})}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(o,{children:[e.jsx(r,{type:"radio",id:"coefficientOfActivity2",name:"coefficientOfActivity",value:"1.375"}),e.jsx(l,{children:e.jsx("span",{})}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(o,{children:[e.jsx(r,{type:"radio",id:"coefficientOfActivity3",name:"coefficientOfActivity",value:"1.55"}),e.jsx(l,{children:e.jsx("span",{})}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(o,{children:[e.jsx(r,{type:"radio",id:"coefficientOfActivity4",name:"coefficientOfActivity",value:"1.725"}),e.jsx(l,{children:e.jsx("span",{})}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(o,{children:[e.jsx(r,{type:"radio",id:"coefficientOfActivity4",name:"coefficientOfActivity",value:"1.9"}),e.jsx(l,{children:e.jsx("span",{})}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),e.jsxs(D,{children:[e.jsx(j,{type:"button",onClick:()=>{y(s)},children:"Cancel"}),e.jsx(b,{type:"submit",children:"Save"})]})]})]})})}export{ne as default};
