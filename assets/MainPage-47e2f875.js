import{s as i,h as D,k as T,j as e,i as j,r as g,u as G,M as Q,l as Y,m as O,n as Z,o as ee,L as X,p as te,q as ne,t as ie}from"./index-a8fe235b.js";import{C as oe,A as re,D as ae}from"./index-4f645a8c.js";import{R as se,t as le,b as de,l as ce,d as pe,s as xe}from"./snack-image-0fde2435.js";const he=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,ge=i.div`
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
`,J=i.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,S=i.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,K=i.p`
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
`,fe=i.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function me(t){var r,x;const n=D(T);return e.jsxs(fe,{children:[e.jsx(he,{children:"Daily Goal"}),e.jsxs(ge,{children:[e.jsxs(J,{children:[e.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:e.jsx("use",{href:`${j}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(S,{children:"Calories"}),e.jsx(K,{children:(r=n.user)==null?void 0:r.dailyCalories})]})]}),e.jsxs(J,{children:[e.jsx("svg",{style:{stroke:"var(--water-color)"},children:e.jsx("use",{href:`${j}#icon-milk`})}),e.jsxs("div",{children:[e.jsx(S,{children:"Water"}),e.jsxs(K,{children:[(x=n.user)==null?void 0:x.dailyWater," ",e.jsx("span",{children:"ml"})]})]})]})]})]})}const ue=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,ye=i.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: var(--secondary-text-color);
  border-radius: 12px;
  padding: 16px 12px;
  justify-content: space-around;

  @media (min-width: 864px) {
    justify-content: start;
    padding: 24px 40px;
    gap: 40px;
  }
`,je=i.button`
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
`,we=i.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,be=i.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,ve=i.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Ce=i.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,ke=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 864px) {
    flex-grow: 2;
  }
`,Pe=i.svg`
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
`,De=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,ze=i.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,$e=i.form`
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
`,Fe=i.input`
  margin-top: 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${t=>t.$borderColor};
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
`,Ie=i.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`,We=i.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Ne=i.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Be=i.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Re=i.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Ee=({percentage:t})=>e.jsxs(Ne,{children:[e.jsxs(Re,{children:[isNaN(t)?0:t,"%"]}),e.jsx(Be,{$percentage:t})]}),Ve=Ee,Oe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Q.setAppElement("#root");function Te(){var w,b,v,C,k,P;const[t,n]=g.useState(!1),[r,x]=g.useState(""),[a,l]=g.useState(!0),[h,o]=g.useState(""),[f,d]=g.useState("var(--primary-btn-color)"),s=G(),p=D(T);function u(){n(!0)}function m(){n(!1),d("var(--primary-btn-color)"),o("")}const z=async c=>{c.preventDefault(),a&&(await s(Y({ml:c.target.children[0].children[0].value})),m(),d("var(--primary-btn-color)"),await s(O()))},$=async()=>{await s(Z()),await s(O())},F=c=>{const y=c.target.value.trim();x(y),y===""?(l(!1),o("This field is required*"),d("var(--error-validate-input)")):parseInt(y)<0?(l(!1),o("Enter a positive number*"),d("var(--error-validate-input)")):(l(!0),o(""),d("#3CBC81"))},I=c=>{c.target.value.trim()===""?(l(!1),o("This field is required*"),d("var(--error-validate-input)")):parseInt(r)<0?(l(!1),o("Enter a positive number*"),d("var(--error-validate-input)")):(l(!0),o(""),d("#3CBC81"))};return e.jsxs(ke,{children:[e.jsx(ue,{children:"Water"}),e.jsxs(ye,{children:[e.jsx(Ve,{percentage:Math.round(((w=p.consumedWaterByDay)==null?void 0:w.ml)*100/((b=p.user)==null?void 0:b.dailyWater))}),e.jsxs(Ce,{children:[e.jsx(we,{children:"Water consumption"}),e.jsxs(De,{children:[e.jsxs(be,{children:[((v=p==null?void 0:p.consumedWaterByDay)==null?void 0:v.ml)||0," ",e.jsx("span",{children:"ml"})]}),e.jsxs(ve,{children:[e.jsx("span",{children:"left : "}),((C=p.user)==null?void 0:C.dailyWater)-((k=p.consumedWaterByDay)==null?void 0:k.ml)||((P=p.user)==null?void 0:P.dailyWater),"ml"]})]}),e.jsxs(je,{onClick:u,children:[e.jsx("svg",{children:e.jsx("use",{href:`${j}#icon-add`})}),"Add Water Intake"]})]})]}),e.jsx(Pe,{width:"20",height:"20",fill:"none",onClick:$,children:e.jsx("use",{href:`${j}#icon-trash`})}),e.jsxs(Q,{isOpen:t,onRequestClose:m,style:Oe,children:[e.jsx(ze,{children:"Add water Intake"}),e.jsxs($e,{onSubmit:c=>z(c),children:[e.jsxs("label",{children:["How much water",e.jsx(Fe,{type:"number",placeholder:"Enter millilitters",onChange:c=>F(c),onBlur:c=>I(c),$borderColor:f}),e.jsx(Ie,{children:h})]}),e.jsx("button",{children:"Confirm"})]}),e.jsx(We,{onClick:m,children:"Cancel"})]})]})}const Ge=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,He=i.div`
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
`,Le=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,_e=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,B=i.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,R=i.p`
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
`,E=i.div`
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
`,Ae=i(ae)`
  width: ${t=>t.$widthpx}px !important;
  height: ${t=>t.$heightpx}px !important;
`;oe.register(re);const Me=t=>{const n={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},r={labels:["Filled","Empty"],datasets:[{data:[t.percentage,t.percentage<=100?100-t.percentage:0],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[t.percentage>=100?0:168,0]}]},x={id:"backgroundCircle",beforeDatasetsDraw(a,l,h){const{ctx:o}=a;o.save();const f=a.getDatasetMeta(0).data[0].x,d=a.getDatasetMeta(0).data[0].y,s=a.getDatasetMeta(0).data[0].innerRadius,p=a.getDatasetMeta(0).data[0].outerRadius,u=p-s,m=Math.PI/180;o.beginPath(),o.lineWidth=u,o.strokeStyle="#292928",o.arc(f,d,p-u/2,0,m*360,!1),o.stroke()}};return e.jsx(Ae,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:r,options:n,plugins:[x]})},N=Me,qe=i.p`
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
`,Ue=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Je=({calories:t,currentCalories:n})=>{const r=()=>Math.round(n*100/t);return e.jsxs(Ue,{children:[e.jsx(N,{percentage:r(),color:"#45FFBC",widthpx:168,heightpx:168}),e.jsxs(qe,{children:[n," ",e.jsx("span",{children:"calories"})]})]})},Se=Je;function Ke(){var r,x,a,l,h,o,f,d,s,p,u,m,z,$,F,I,w,b,v,C,k,P,c,y,H,L,_,A,M,q,U;const t=D(ee),n=D(T);return g.useEffect(()=>{console.log(n)},[]),e.jsxs(Le,{children:[e.jsx(Ge,{children:"Food"}),e.jsxs(He,{children:[e.jsx(Se,{calories:(r=n==null?void 0:n.user)==null?void 0:r.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),e.jsxs(_e,{children:[e.jsxs(B,{children:[e.jsx(N,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((a=(x=n==null?void 0:n.user)==null?void 0:x.dailyNutrition)==null?void 0:a.carbohydrates))||0}),e.jsxs(R,{children:[Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((h=(l=n==null?void 0:n.user)==null?void 0:l.dailyNutrition)==null?void 0:h.carbohydrates))||0,"%"]}),e.jsxs(E,{children:[e.jsx("h3",{children:"Carbohidrates"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal:"," ",e.jsx("span",{children:(f=(o=n==null?void 0:n.user)==null?void 0:o.dailyNutrition)==null?void 0:f.carbohydrates})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((s=(d=n==null?void 0:n.user)==null?void 0:d.dailyNutrition)==null?void 0:s.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay)>=0?((u=(p=n==null?void 0:n.user)==null?void 0:p.dailyNutrition)==null?void 0:u.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay):0})]})]})]})]}),e.jsxs(B,{children:[e.jsx(N,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((z=(m=n==null?void 0:n.user)==null?void 0:m.dailyNutrition)==null?void 0:z.protein))||0}),e.jsxs(R,{children:[Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((F=($=n==null?void 0:n.user)==null?void 0:$.dailyNutrition)==null?void 0:F.protein))||0,"%"]}),e.jsxs(E,{children:[e.jsx("h3",{children:"Protein"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(w=(I=n==null?void 0:n.user)==null?void 0:I.dailyNutrition)==null?void 0:w.protein})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((v=(b=n==null?void 0:n.user)==null?void 0:b.dailyNutrition)==null?void 0:v.protein)-(t==null?void 0:t.totalConsumedProteinPerDay)>=0?((k=(C=n==null?void 0:n.user)==null?void 0:C.dailyNutrition)==null?void 0:k.protein)-(t==null?void 0:t.totalConsumedProteinPerDay):0})]})]})]})]}),e.jsxs(B,{children:[e.jsx(N,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((c=(P=n==null?void 0:n.user)==null?void 0:P.dailyNutrition)==null?void 0:c.fat))||0}),e.jsxs(R,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((H=(y=n==null?void 0:n.user)==null?void 0:y.dailyNutrition)==null?void 0:H.fat))||0,"%"]}),e.jsxs(E,{children:[e.jsx("h3",{children:"Fat"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(_=(L=n==null?void 0:n.user)==null?void 0:L.dailyNutrition)==null?void 0:_.fat})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((M=(A=n==null?void 0:n.user)==null?void 0:A.dailyNutrition)==null?void 0:M.fat)-(t==null?void 0:t.totalConsumedFatPerDay)>=0?((U=(q=n==null?void 0:n.user)==null?void 0:q.dailyNutrition)==null?void 0:U.fat)-(t==null?void 0:t.totalConsumedFatPerDay):0})]})]})]})]})]})]})]})}const Qe=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Xe=i.div`
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
`,Ye=i(X)`
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
`;function Ze(){return e.jsxs("div",{children:[e.jsxs(Xe,{children:[e.jsx("h2",{children:"Today"}),e.jsxs(Ye,{to:"/dashboard",children:["On the way to the goal",e.jsx("svg",{children:e.jsx("use",{href:`${j}#icon-arrow-right`})})]})]}),e.jsxs(Qe,{children:[e.jsx(me,{}),e.jsx(Te,{}),e.jsx(Ke,{})]})]})}const et=i.li`
  @media screen and (min-width: 864px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,tt=i.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: white;
  font-family: 'Poppins', sans-serif;

  @media screen and (min-width: 864px) {
    margin-bottom: 0;
  }
`,nt=i.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,it=i.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 864px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,ot=i.p`
  color: white;
  font-size: 14px;
  min-width: 150px;
`,rt=i.p`
  color: white;
  font-size: 14px;
  width: 110px;
`,at=i.p`
  color: white;
  font-size: 14px;
  width: 60px;
`,V=i.span`
  color: gray;
  font-weight: 500;
`,st=i.img`
  width: 36px;
  height: 36px;
`,lt=i.button`
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
`,dt=i.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,W=({title:t,image:n})=>{const[r,x]=g.useState(!1),[a,l]=g.useState(null),h=G(),o=()=>x(!r),f=async()=>{try{l(null),localStorage.removeItem(`${t}_nutritionInfo`),await h(te(t.toLowerCase())),await h(O())}catch(s){console.error(s)}},d=s=>{l(s),localStorage.setItem(`${t}_nutritionInfo`,JSON.stringify(s)),o()};return g.useEffect(()=>{const s=localStorage.getItem(`${t}_nutritionInfo`);s&&l(JSON.parse(s))},[t]),e.jsxs(et,{children:[e.jsxs(tt,{children:[e.jsx(st,{src:n,alt:"Plate"}),e.jsx(nt,{children:t})]}),!a&&e.jsx(lt,{onClick:o,children:"+ Record your meal"}),r&&!a&&e.jsx(se,{onClose:o,image:n,mealType:t,onRecord:d}),a&&e.jsxs(it,{children:[e.jsxs(ot,{children:["Carbohydrates:",e.jsx(V,{children:a.foods[0].nutrition.carbohydrates})]}),e.jsxs(rt,{children:["Protein: ",e.jsx(V,{children:a.foods[0].nutrition.protein})]}),e.jsxs(at,{children:["Fat: ",e.jsx(V,{children:a.foods[0].nutrition.fat})]}),e.jsx(dt,{onClick:f,children:e.jsx("img",{src:le,alt:"trash"})})]})]})},ct=i.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,pt=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,xt=i.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 864px) {
    font-size: 18px;
    line-height: 32px;
  }
`,ht=i(X)`
  color: gray;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;

  @media screen and (min-width: 864px) {
    font-size: 14px;
    line-height: 22px;
  }
`,gt=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,ft=()=>e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsx(xt,{children:"Diary"}),e.jsx(ht,{to:"/diary",children:"See more"})]}),e.jsxs(gt,{children:[e.jsx(W,{title:"Breakfast",image:de}),e.jsx(W,{title:"Lunch",image:ce}),e.jsx(W,{title:"Dinner",image:pe}),e.jsx(W,{title:"Snack",image:xe})]})]}),mt=ft,ut=i.section`
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
`,yt=ut;function jt(){const t=G(),n=D(ne);let r=[];return g.useEffect(()=>{t(ie())},[t]),n&&(r=n.slice(0,4)),e.jsxs(yt,{children:[e.jsx("h2",{children:"Recommended Food"}),e.jsxs("div",{className:"wrapper",children:[e.jsx("ul",{children:r==null?void 0:r.map(({amount:x,calories:a,img:l,name:h,_id:o})=>e.jsx("li",{children:e.jsxs("div",{className:"description",children:[e.jsx("div",{className:"small_img_div",children:e.jsx("img",{src:l,alt:"",width:46,height:46})}),e.jsxs("section",{children:[e.jsx("h4",{children:h}),e.jsxs("p",{children:[x,e.jsxs("span",{children:[a," calories"]})]})]})]})},o))}),e.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",e.jsx("svg",{className:"svg",children:e.jsx("use",{href:`${j}#icon-arrow-right`})})]})]})]})}const wt=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function kt(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"MainPage"}),e.jsx(Ze,{}),e.jsxs(wt,{children:[e.jsx(mt,{}),e.jsx(jt,{})]})]})}export{kt as default};
