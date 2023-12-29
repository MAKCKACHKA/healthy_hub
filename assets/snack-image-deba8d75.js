import{u as n,a as g,b as f,B as b,m as y,j as e,i as w}from"./index-96a574da.js";const v=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`,j=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 708px;
  min-height: 558px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 8px;
  transform: translate(-50%, -50%) scale(1);
  transition:
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 300ms;

  @media screen and (max-width: 833px) {
    width: 90%;
    padding: 24px;
  }
`,k=n.h1`
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  color: #fff;

  @media screen and (max-width: 833px) {
    font-size: 24px;
    line-height: 36px;
  }
`,C=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,P=n.img`
  width: 32px;
  height: 32px;
`,z=n.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  color: #fff;

  @media screen and (max-width: 833px) {
    font-size: 1.125rem;
    line-height: 32px;
  }
`,$=n.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,o=n.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,F=n.div`
  max-height: 352px;
  margin-bottom: 16px;
  overflow-y: auto;

  @media screen and (max-width: 833px) {
  }
`,I=n.ul`
  padding: 10px;
  overflow-y: auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 833px) {
    height: calc(100% - 44px);
    gap: 24px;
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: 8px;
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }
`,B=n.li`
  & > div:nth-child(-n + 3) {
    margin-bottom: 0;
  }
  margin-bottom: 12px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 38.15% 15.26% 13.12% 9.3% 11.94% 3.05%;
  align-items: center;

  & > div:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  & > div:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  & > div:nth-child(3) {
    grid-column-start: 3;
    grid-column-end: 4;
  }

  @media screen and (max-width: 833px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    & > div:nth-child(-n + 3) {
      flex-basis: 100%;
      margin-bottom: 16px;
    }

    & > div:nth-last-child(-n + 3) {
      flex-basis: calc(40.48%);
    }
  }
`,s=n.input`
  padding: 8px 10px;
  width: 100%;
  border: 1px solid var(--primary-btn-color);
  border-radius: 12px;
  background-color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #fff;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--primary-text-color);
    font-size: 14px;
    line-height: 1.42;
  }
`,R=n.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--primary-btn-color);
  cursor: pointer;
`,N=n.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,T=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 833px) {
    flex-direction: row-reverse;
  }
`,M=n.button`
  padding: 8px 10px;
  width: 212px;
  background-color: var(--primary-btn-color);
  color: #000;
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  @media screen and (max-width: 833px) {
    width: 212px;
  }
`,W=n.button`
  padding: 8px 10px;
  width: 416px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #808080;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary-btn-color);
  }

  @media screen and (max-width: 833px) {
    width: 212px;
  }
`,A=({onClose:d,image:p,mealType:c,onRecord:h})=>{const l=g(),i=f({initialValues:{mealType:c,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]},onSubmit:async r=>{try{if(r.foods&&r.foods.length>0&&r.foods[0]){const t={mealType:c.toLowerCase(),foods:r.foods.map(a=>({name:a.name?a.name:"string",nutrition:{carbohydrates:a.nutrition.carbohydrates?Number(a.nutrition.carbohydrates):0,protein:a.nutrition.protein?Number(a.nutrition.protein):0,fat:a.nutrition.fat?Number(a.nutrition.fat):0},calories:a.calories?Number(a.calories):0}))};await l(b(t)),h(t),await l(y()),d()}}catch(t){console.error(t)}}}),m=r=>{r.currentTarget===r.target&&d()},x=r=>{const t=[...i.values.foods];t.splice(r,1),i.setFieldValue("foods",t)},u=()=>{i.setFieldValue("foods",[...i.values.foods,{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}])};return e.jsx(v,{onClick:m,children:e.jsxs(j,{children:[e.jsx(k,{children:"Record your meal"}),e.jsxs(C,{children:[e.jsx(P,{src:p,alt:"Plate"}),e.jsx(z,{children:c})]}),e.jsxs($,{onSubmit:i.handleSubmit,children:[e.jsxs(F,{children:[i.values.foods.map((r,t)=>e.jsx(I,{children:e.jsxs(B,{children:[e.jsx(o,{children:e.jsx(s,{type:"text",id:`name-${t}`,name:`foods[${t}].name`,placeholder:"The name of the product or dish",onChange:i.handleChange,value:r.name})}),e.jsx(o,{children:e.jsx(s,{type:"number",id:`carbonohidrates-${t}`,name:`foods[${t}].nutrition.carbohydrates`,placeholder:"Carbonoh.",onChange:i.handleChange,value:r.nutrition.carbohydrates})}),e.jsx(o,{children:e.jsx(s,{type:"number",id:`protein-${t}`,name:`foods[${t}].nutrition.protein`,placeholder:"Protein",onChange:i.handleChange,value:r.nutrition.protein})}),e.jsx(o,{children:e.jsx(s,{type:"number",id:`fat-${t}`,name:`foods[${t}].nutrition.fat`,placeholder:"Fat",onChange:i.handleChange,value:r.nutrition.fat})}),e.jsx(o,{children:e.jsx(s,{type:"number",id:`calories-${t}`,name:`foods[${t}].calories`,placeholder:"Calories",onChange:i.handleChange,value:r.calories})}),e.jsx(N,{type:"button",onClick:()=>x(t),children:e.jsx("svg",{width:"20",height:"20",fill:"none",children:e.jsx("use",{href:`${w}#icon-trash`})})})]})},t)),e.jsx(R,{type:"button",onClick:u,children:"+ Add more"})]}),e.jsxs(T,{children:[e.jsx(W,{type:"button",onClick:d,children:"Cancel"}),e.jsx(M,{type:"submit",children:"Confirm"})]})]})]})})},D="/healthy_hub/assets/breakfast-image-63f468c4.svg",S="/healthy_hub/assets/dinner-image-19c0e7ef.svg",V="/healthy_hub/assets/lunch-image-3c133980.svg",L="/healthy_hub/assets/snack-image-28a6b2cf.svg";export{v as B,F as C,$ as F,P as I,j as M,I as P,A as R,z as T,C as W,k as a,D as b,B as c,S as d,o as e,s as f,T as g,W as h,M as i,V as l,L as s};
