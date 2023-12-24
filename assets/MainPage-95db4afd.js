import{s as t,h as B,k as V,j as e,i as b,r as f,u as T,M as J,l as _,m as X,n as ee,o as te,L as S,a as ne,p as ie,q as oe,t as re}from"./index-62431355.js";import{C as ae,A as se,D as le}from"./index-2b551568.js";import{b as de}from"./breakfast-image-266bd128.js";const ce=t.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,pe=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;

  @media (min-width: 834px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 32px;
  }
`,Y=t.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,Z=t.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,q=t.p`
  color: var(--primary-title-text-color);
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.11;
  margin: 0;

  span {
    color: var(--primary-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }
`,xe=t.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function he(i){var r,c;const n=B(V);return e.jsxs(xe,{children:[e.jsx(ce,{children:"Daily Goal"}),e.jsxs(pe,{children:[e.jsxs(Y,{children:[e.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:e.jsx("use",{href:`${b}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(Z,{children:"Calories"}),e.jsx(q,{children:(r=n.user)==null?void 0:r.dailyCalories})]})]}),e.jsxs(Y,{children:[e.jsx("svg",{style:{stroke:"var(--water-color)"},children:e.jsx("use",{href:`${b}#icon-milk`})}),e.jsxs("div",{children:[e.jsx(Z,{children:"Water"}),e.jsxs(q,{children:[(c=n.user)==null?void 0:c.dailyWater," ",e.jsx("span",{children:"ml"})]})]})]})]})]})}const me=t.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,ge=t.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 40px;
  }
`,fe=t.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background: var(--primary-btn-color);
  border: none;
  outline: none;
  padding: 8px 10px;
  width: 166px;
  font-weight: 500;

  svg {
    height: 16px;
    width: 16px;
    stroke: #0f0f0f;
  }
`,ue=t.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,ye=t.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,be=t.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,we=t.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,je=t.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,ve=t.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Ce=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,ke=t.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,Ae=t.form`
  label {
    display: flex;
    flex-direction: column;
    color: var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
    margin-bottom: 32px;
  }

  button {
    border-radius: 12px;
    background: var(--primary-btn-color);
    color: var(--secondary-text-color);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
    border: none;
    outline: none;
    width: 100%;
    margin-bottom: 16px;
  }
`,Pe=t.input`
  margin-top: 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${i=>i.$borderColor};
  border-radius: 12px;
  padding: 8px 10px;
  color: #fff;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  &::placeholder {
    color: var(--Color-Primary-Grey, #b6b6b6);
    font-size: 14px;

    line-height: 1.42;
  }
`,ze=t.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`,Be=t.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Fe=t.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,De=t.div`
  height: ${i=>i.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,$e=t.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Ie=({percentage:i})=>e.jsxs(Fe,{children:[e.jsxs($e,{children:[isNaN(i)?0:i,"%"]}),e.jsx(De,{$percentage:i})]}),Ne=Ie,We={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};J.setAppElement("#root");function Re(){var w,j,v,C,k,A;const[i,n]=f.useState(!1),[r,c]=f.useState(""),[a,x]=f.useState(!0),[m,s]=f.useState(""),[d,o]=f.useState("var(--primary-btn-color)"),l=T(),h=B(V);function u(){n(!0)}function g(){n(!1),o("var(--primary-btn-color)"),s("")}const F=async p=>{p.preventDefault(),a&&(await l(_({ml:p.target.children[0].children[0].value})),g(),o("var(--primary-btn-color)"),await l(X()))},D=async()=>{await l(ee()),await l(X())},$=p=>{const y=p.target.value.trim();c(y),y===""?(x(!1),s("This field is required*"),o("var(--error-validate-input)")):parseInt(y)<0?(x(!1),s("Enter a positive number*"),o("var(--error-validate-input)")):(x(!0),s(""),o("#3CBC81"))},I=p=>{p.target.value.trim()===""?(x(!1),s("This field is required*"),o("var(--error-validate-input)")):parseInt(r)<0?(x(!1),s("Enter a positive number*"),o("var(--error-validate-input)")):(x(!0),s(""),o("#3CBC81"))};return e.jsxs(je,{children:[e.jsx(me,{children:"Water"}),e.jsxs(ge,{children:[e.jsx(Ne,{percentage:Math.round(((w=h.consumedWaterByDay)==null?void 0:w.ml)*100/((j=h.user)==null?void 0:j.dailyWater))}),e.jsxs(we,{children:[e.jsx(ue,{children:"Water consumption"}),e.jsxs(Ce,{children:[e.jsxs(ye,{children:[((v=h==null?void 0:h.consumedWaterByDay)==null?void 0:v.ml)||0," ",e.jsx("span",{children:"ml"})]}),e.jsxs(be,{children:[e.jsx("span",{children:"left : "}),((C=h.user)==null?void 0:C.dailyWater)-((k=h.consumedWaterByDay)==null?void 0:k.ml)||((A=h.user)==null?void 0:A.dailyWater),"ml"]})]}),e.jsxs(fe,{onClick:u,children:[e.jsx("svg",{children:e.jsx("use",{href:`${b}#icon-add`})}),"Add Water Intake"]})]})]}),e.jsx(ve,{width:"20",height:"20",fill:"none",onClick:D,children:e.jsx("use",{href:`${b}#icon-trash`})}),e.jsxs(J,{isOpen:i,onRequestClose:g,style:We,children:[e.jsx(ke,{children:"Add water Intake"}),e.jsxs(Ae,{onSubmit:p=>F(p),children:[e.jsxs("label",{children:["How much water",e.jsx(Pe,{type:"number",placeholder:"Enter millilitters",onChange:p=>$(p),onBlur:p=>I(p),$borderColor:d}),e.jsx(ze,{children:m})]}),e.jsx("button",{children:"Confirm"})]}),e.jsx(Be,{onClick:g,children:"Cancel"})]})]})}const Ee=t.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Me=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 834px) {
    flex-direction: row;
    justify-content: start;
    gap: 40px;
    padding: 36px 40px;
  }
`,Ve=t.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Te=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,R=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,E=t.p`
  margin: 0;
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  position: absolute;
  width: 48px;
  text-align: center;
`,M=t.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--primary-title-text-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  div > p {
    color: var(--primary-title-text-color);

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
    margin: 0;
  }

  div > p > span {
    color: var(--primary-text-color);

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.42;
  }
`,Ge=t(le)`
  width: ${i=>i.$widthpx}px !important;
  height: ${i=>i.$heightpx}px !important;
`;ae.register(se);const He=i=>{const n={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},r={labels:["Filled","Empty"],datasets:[{data:[i.percentage,100-i.percentage],backgroundColor:[i.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},c={id:"backgroundCircle",beforeDatasetsDraw(a,x,m){const{ctx:s}=a;s.save();const d=a.getDatasetMeta(0).data[0].x,o=a.getDatasetMeta(0).data[0].y,l=a.getDatasetMeta(0).data[0].innerRadius,h=a.getDatasetMeta(0).data[0].outerRadius,u=h-l,g=Math.PI/180;s.beginPath(),s.lineWidth=u,s.strokeStyle="#292928",s.arc(d,o,h-u/2,0,g*360,!1),s.stroke()}};return e.jsx(Ge,{$widthpx:i.widthpx,$heightpx:i.heightpx,data:r,options:n,plugins:[c]})},W=He,Qe=t.p`
  color: var(--primary-title-text-color);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.18;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 168px;
  text-align: center;

  span {
    color: var(--primary-text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }
`,Le=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,Oe=({calories:i,currentCalories:n})=>{const r=()=>Math.round(n*100/i);return e.jsxs(Le,{children:[e.jsx(W,{percentage:r(),color:"#45FFBC",widthpx:168,heightpx:168}),e.jsxs(Qe,{children:[n," ",e.jsx("span",{children:"calories"})]})]})},Ue=Oe;function Ke(){var r,c,a,x,m,s,d,o,l,h,u,g,F,D,$,I,w,j,v,C,k,A,p,y,G,H,Q,L,O,U,K;const i=B(te),n=B(V);return f.useEffect(()=>{console.log(n)},[]),e.jsxs(Ve,{children:[e.jsx(Ee,{children:"Food"}),e.jsxs(Me,{children:[e.jsx(Ue,{calories:(r=n==null?void 0:n.user)==null?void 0:r.dailyCalories,currentCalories:(i==null?void 0:i.totalConsumedCaloriesPerDay)||0}),e.jsxs(Te,{children:[e.jsxs(R,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((i==null?void 0:i.totalConsumedCarbohydratesPerDay)*100/((a=(c=n==null?void 0:n.user)==null?void 0:c.dailyNutrition)==null?void 0:a.carbohydrates))||0}),e.jsxs(E,{children:[Math.round((i==null?void 0:i.totalConsumedCarbohydratesPerDay)*100/((m=(x=n==null?void 0:n.user)==null?void 0:x.dailyNutrition)==null?void 0:m.carbohydrates))||0,"%"]}),e.jsxs(M,{children:[e.jsx("h3",{children:"Carbohidrates"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal:"," ",e.jsx("span",{children:(d=(s=n==null?void 0:n.user)==null?void 0:s.dailyNutrition)==null?void 0:d.carbohydrates})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((l=(o=n==null?void 0:n.user)==null?void 0:o.dailyNutrition)==null?void 0:l.carbohydrates)-(i==null?void 0:i.totalConsumedCarbohydratesPerDay)||((u=(h=n==null?void 0:n.user)==null?void 0:h.dailyNutrition)==null?void 0:u.carbohydrates)})]})]})]})]}),e.jsxs(R,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((i==null?void 0:i.totalConsumedProteinPerDay)*100/((F=(g=n==null?void 0:n.user)==null?void 0:g.dailyNutrition)==null?void 0:F.protein))||0}),e.jsxs(E,{children:[Math.round((i==null?void 0:i.totalConsumedProteinPerDay)*100/(($=(D=n==null?void 0:n.user)==null?void 0:D.dailyNutrition)==null?void 0:$.protein))||0,"%"]}),e.jsxs(M,{children:[e.jsx("h3",{children:"Protein"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(w=(I=n==null?void 0:n.user)==null?void 0:I.dailyNutrition)==null?void 0:w.protein})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((v=(j=n==null?void 0:n.user)==null?void 0:j.dailyNutrition)==null?void 0:v.protein)-(i==null?void 0:i.totalConsumedProteinPerDay)||((k=(C=n==null?void 0:n.user)==null?void 0:C.dailyNutrition)==null?void 0:k.protein)})]})]})]})]}),e.jsxs(R,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((i==null?void 0:i.totalConsumedFatPerDay)*100/((p=(A=n==null?void 0:n.user)==null?void 0:A.dailyNutrition)==null?void 0:p.fat))||0}),e.jsxs(E,{children:[Math.round((i==null?void 0:i.totalConsumedFatPerDay)*100/((G=(y=n==null?void 0:n.user)==null?void 0:y.dailyNutrition)==null?void 0:G.fat))||0,"%"]}),e.jsxs(M,{children:[e.jsx("h3",{children:"Fat"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(Q=(H=n==null?void 0:n.user)==null?void 0:H.dailyNutrition)==null?void 0:Q.fat})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((O=(L=n==null?void 0:n.user)==null?void 0:L.dailyNutrition)==null?void 0:O.fat)-(i==null?void 0:i.totalConsumedFatPerDay)||((K=(U=n==null?void 0:n.user)==null?void 0:U.dailyNutrition)==null?void 0:K.fat)})]})]})]})]})]})]})]})}const Xe=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Ye=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: var(--primary-title-text-color);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25;
  }
`,Ze=t(S)`
  color: var(--primary-text-color);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    height: 16px;
    width: 16px;
    stroke: var(--primary-text-color);
  }
`;function qe(){return e.jsxs("div",{children:[e.jsxs(Ye,{children:[e.jsx("h2",{children:"Today"}),e.jsxs(Ze,{to:"/dashboard",children:["On the way to the goal",e.jsx("svg",{children:e.jsx("use",{href:`${b}#icon-arrow-right`})})]})]}),e.jsxs(Xe,{children:[e.jsx(he,{}),e.jsx(Re,{}),e.jsx(Ke,{})]})]})}const Je=t.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,Se=t.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: white;
  font-family: 'Poppins', sans-serif;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,_e=t.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;t.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 20px;
  }
`;t.p`
  min-width: 190px;
`;t.p`
  width: 110px;
`;t.p`
  width: 60px;
`;t.span`
  color: gray;
  font-weight: 500;
`;const et=t.img`
  width: 36px;
  height: 36px;
`,tt=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: #e3ffa8;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`,nt=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,it=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 708px;
  height: 558px;
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
`,ot=t.h1`
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
`,rt=t.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,at=t.img`
  width: 32px;
  height: 32px;
`,st=t.h2`
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
`,lt=t.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,P=t.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,dt=t.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,ct=t.ul`
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
`,pt=t.li`
  & > div:nth-child(-n + 3) {
    margin-bottom: 0;
  }
  margin-bottom: 12px;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 38.15% 15.26% 13.12% 9.3% 11.94% 3.05%;

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
      flex-basis: calc(38.48%);
    }
  }
`,z=t.input`
  padding: 8px 10px;
  width: 100%;
  border: 1px solid #8cc84b;
  border-radius: 8px;
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
`,xt=t.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,ht=t.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,mt=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,gt=t.button`
  padding: 8px 10px;
  width: 212px;
  background-color: #8cc84b;
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
`,ft=t.button`
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
    border: 1px solid #8cc84b;
  }

  @media screen and (max-width: 768px) {
    width: 212px;
  }
`,ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",yt=({onClose:i,image:n,mealType:r})=>{const c=T(),a=ne({initialValues:{products:[{mealType:r,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]}]},onSubmit:async d=>{try{if(d.products&&d.products.length>0&&d.products[0].foods&&d.products[0].foods.length>0){const o={mealType:r.toLowerCase(),foods:d.products.map(l=>({name:l.foods[0].name?l.foods[0].name:"string",nutrition:{carbohydrates:l.foods[0].nutrition.carbohydrates?Number(l.foods[0].nutrition.carbohydrates):0,protein:l.foods[0].nutrition.protein?Number(l.foods[0].nutrition.protein):0,fat:l.foods[0].nutrition.fat?Number(l.foods[0].nutrition.fat):0},calories:l.foods[0].calories?Number(l.foods[0].calories):0}))};console.log("Food intake data:",o),c(ie(o)),console.log("Backend response:",response),console.log("Response data:",response.data),i()}else console.error("Invalid products array structure")}catch(o){console.error("Submission error:",o),console.error("Error details:",o.response?o.response.data:"No response data")}}}),x=d=>{d.currentTarget===d.target&&i()},m=d=>{const o=[...a.values.products];o.splice(d,1),a.setFieldValue("products",o)},s=()=>{a.setFieldValue("products",[...a.values.products,{mealType:r,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]}])};return e.jsx(nt,{onClick:x,children:e.jsxs(it,{children:[e.jsx(ot,{children:"Record your meal"}),e.jsxs(rt,{children:[e.jsx(at,{src:n,alt:"Plate"}),e.jsx(st,{children:r})]}),e.jsxs(lt,{onSubmit:a.handleSubmit,children:[e.jsxs(dt,{children:[a.values.products.map((d,o)=>e.jsx(ct,{children:e.jsxs(pt,{children:[e.jsx(P,{children:e.jsx(z,{type:"text",id:`name-${o}`,name:`products[${o}].foods[0].name`,placeholder:"The name of the product or dish"})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`carbonohidrates-${o}`,name:`products[${o}].foods[0].nutrition.carbohydrates`,placeholder:"Carbonoh."})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`protein-${o}`,name:`products[${o}].foods[0].nutrition.protein`,placeholder:"Protein"})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`fat-${o}`,name:`products[${o}].foods[0].nutrition.fat`,placeholder:"Fat"})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`calories-${o}`,name:`products[${o}].foods[0].calories`,placeholder:"Calories"})}),e.jsx(ht,{type:"button",onClick:()=>m(o),children:e.jsx("img",{src:ut,alt:"Trash"})})]})},o)),e.jsx(xt,{type:"button",onClick:s,children:"+ Add more"})]}),e.jsxs(mt,{children:[e.jsx(ft,{type:"button",onClick:i,children:"Cancel"}),e.jsx(gt,{type:"submit",children:"Confirm"})]})]})]})})},N=({title:i,image:n})=>{const[r,c]=f.useState(!1),a=()=>c(!r);return e.jsxs(Je,{children:[e.jsxs(Se,{children:[e.jsx(et,{src:n,alt:"Plate"}),e.jsx(_e,{children:i})]}),e.jsx(tt,{onClick:a,children:"+ Record your meal"}),r&&e.jsx(yt,{onClose:a,image:n,mealType:i})]})},bt="/healthy_hub/assets/dinner-image-19c0e7ef.svg",wt="/healthy_hub/assets/lunch-image-3c133980.svg",jt="/healthy_hub/assets/snack-image-28a6b2cf.svg",vt=t.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,Ct=t.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,kt=t.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,At=t(S)`
  color: gray;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`,Pt=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,zt=()=>e.jsxs(vt,{children:[e.jsxs(Ct,{children:[e.jsx(kt,{children:"Diary"}),e.jsx(At,{to:"/diary",children:"See more"})]}),e.jsxs(Pt,{children:[e.jsx(N,{title:"Breakfast",image:de}),e.jsx(N,{title:"Lunch",image:wt}),e.jsx(N,{title:"Dinner",image:bt}),e.jsx(N,{title:"Snack",image:jt})]})]}),Bt=zt,Ft=t.section`
  /* width: 320px; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: var(--primary-title-text-color);
    font-size: 14px;
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    max-width: 300px;
    margin-bottom: 16px;
    height: 182px;
    overflow: hidden;
  }

  ul > li {
    display: block;
    width: 100%;
    height: 86px;
    padding: 20px 80px 20px 24px;
    background: var(--secondary-text-color);
    border-radius: 12px;
  }

  .description {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .description h4 {
    font-size: 18px;
    font-weight: 500;
  }

  .small_img_div {
    width: 46px;
    height: 46px;
  }

  .description section {
    width: 130px;
    height: 46px;
  }

  .description span {
    margin-left: 6px;
    color: #b6b6b6;
    font-weight: 500;
  }

  .href {
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: center;
    font-size: 14px;
    font-weight: 500px;
    color: #b6b6b6;
  }

  .svg {
    stroke: #b6b6b6;
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 834px) {
    width: calc(834px - (27px * 2));
    /* margin: 0 auto; */

    h2 {
      font-size: 18px;
    }

    .wrapper {
      padding-left: 0px;
      padding-right: 0px;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;
      gap: 20px;
      width: 100%;
      max-width: 100%;
    }

    ul > li {
      width: 380px;
      height: 86px;
      padding: 20px 160px 20px 24px;
    }

    .href {
      font-size: 16px;
    }

    @media screen and (min-width: 1440px) {
      width: 676px;

      ul {
        width: 100%;
      }

      ul > li {
        width: 328px;
        padding: 20px 108px 20px 24px;
      }
    }
  }
`,Dt=Ft;function $t(){const i=T(),n=B(oe);let r=[];return f.useEffect(()=>{i(re())},[i]),n&&(r=n.slice(0,4)),e.jsxs(Dt,{children:[e.jsx("h2",{children:"Recommended Food"}),e.jsxs("div",{className:"wrapper",children:[e.jsx("ul",{children:r==null?void 0:r.map(({amount:c,calories:a,img:x,name:m,_id:s})=>e.jsx("li",{children:e.jsxs("div",{className:"description",children:[e.jsx("div",{className:"small_img_div",children:e.jsx("img",{src:x,alt:"",width:46,height:46})}),e.jsxs("section",{children:[e.jsx("h4",{children:m}),e.jsxs("p",{children:[c,e.jsxs("span",{children:[a," calories"]})]})]})]})},s))}),e.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",e.jsx("svg",{className:"svg",children:e.jsx("use",{href:`${b}#icon-arrow-right`})})]})]})]})}const It=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function Et(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"MainPage"}),e.jsx(qe,{}),e.jsxs(It,{children:[e.jsx(Bt,{}),e.jsx($t,{})]})]})}export{Et as default};
