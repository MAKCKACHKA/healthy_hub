import{s as n,u,a as b,z as f,m as A,j as e}from"./index-a8fe235b.js";const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",w=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`,C=n.div`
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

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 24px;
  }
`,v=n.h1`
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`,k=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,j=n.img`
  width: 32px;
  height: 32px;
`,B=n.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 32px;
  }
`,z=n.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,i=n.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,I=n.div`
  max-height: 352px;
  margin-bottom: 16px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
  }
`,P=n.ul`
  padding: 10px;
  overflow-y: auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 768px) {
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
`,R=n.li`
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

  @media screen and (max-width: 768px) {
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
`,N=n.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--primary-btn-color);
  cursor: pointer;
`,F=n.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,E=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    width: 212px;
  }
`,Q=n.button`
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

  @media screen and (max-width: 768px) {
    width: 212px;
  }
`,G=({onClose:d,image:p,mealType:c,onRecord:h})=>{const l=u(),a=b({initialValues:{mealType:c,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]},onSubmit:async r=>{try{if(r.foods&&r.foods.length>0&&r.foods[0]){const t={mealType:c.toLowerCase(),foods:r.foods.map(o=>({name:o.name?o.name:"string",nutrition:{carbohydrates:o.nutrition.carbohydrates?Number(o.nutrition.carbohydrates):0,protein:o.nutrition.protein?Number(o.nutrition.protein):0,fat:o.nutrition.fat?Number(o.nutrition.fat):0},calories:o.calories?Number(o.calories):0}))};await l(f(t)),h(t),await l(A()),d()}}catch(t){console.error(t)}}}),m=r=>{r.currentTarget===r.target&&d()},g=r=>{const t=[...a.values.foods];t.splice(r,1),a.setFieldValue("foods",t)},x=()=>{a.setFieldValue("foods",[...a.values.foods,{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}])};return e.jsx(w,{onClick:m,children:e.jsxs(C,{children:[e.jsx(v,{children:"Record your meal"}),e.jsxs(k,{children:[e.jsx(j,{src:p,alt:"Plate"}),e.jsx(B,{children:c})]}),e.jsxs(z,{onSubmit:a.handleSubmit,children:[e.jsxs(I,{children:[a.values.foods.map((r,t)=>e.jsx(P,{children:e.jsxs(R,{children:[e.jsx(i,{children:e.jsx(s,{type:"text",id:`name-${t}`,name:`foods[${t}].name`,placeholder:"The name of the product or dish",onChange:a.handleChange,value:r.name})}),e.jsx(i,{children:e.jsx(s,{type:"number",id:`carbonohidrates-${t}`,name:`foods[${t}].nutrition.carbohydrates`,placeholder:"Carbonoh.",onChange:a.handleChange,value:r.nutrition.carbohydrates})}),e.jsx(i,{children:e.jsx(s,{type:"number",id:`protein-${t}`,name:`foods[${t}].nutrition.protein`,placeholder:"Protein",onChange:a.handleChange,value:r.nutrition.protein})}),e.jsx(i,{children:e.jsx(s,{type:"number",id:`fat-${t}`,name:`foods[${t}].nutrition.fat`,placeholder:"Fat",onChange:a.handleChange,value:r.nutrition.fat})}),e.jsx(i,{children:e.jsx(s,{type:"number",id:`calories-${t}`,name:`foods[${t}].calories`,placeholder:"Calories",onChange:a.handleChange,value:r.calories})}),e.jsx(F,{type:"button",onClick:()=>g(t),children:e.jsx("img",{src:y,alt:"Trash"})})]})},t)),e.jsx(N,{type:"button",onClick:x,children:"+ Add more"})]}),e.jsxs(E,{children:[e.jsx(Q,{type:"button",onClick:d,children:"Cancel"}),e.jsx(M,{type:"submit",children:"Confirm"})]})]})]})})},W="/healthy_hub/assets/breakfast-image-63f468c4.svg",K="/healthy_hub/assets/dinner-image-19c0e7ef.svg",S="/healthy_hub/assets/lunch-image-3c133980.svg",U="/healthy_hub/assets/snack-image-28a6b2cf.svg";export{w as B,I as C,z as F,j as I,C as M,P,G as R,B as T,k as W,v as a,W as b,R as c,K as d,i as e,s as f,F as g,E as h,Q as i,M as j,S as l,U as s,y as t};
