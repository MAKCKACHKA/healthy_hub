import{s as i,h as j,k as V,j as e,i as w,r as f,u as L,M as Y,l as S,m as E,n as ee,o as te,L as Z,p as ne,q as ie,t as oe}from"./index-adf44996.js";import{C as re,A as ae,D as se}from"./index-4b958f22.js";import{R as le,t as de,b as ce,l as pe,d as xe,s as he}from"./snack-image-18842c72.js";const fe=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,me=i.div`
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
`,K=i.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Q=i.p`
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
`,ge=i.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function ue(t){var s,p;const n=j(V);return e.jsxs(ge,{children:[e.jsx(fe,{children:"Daily Goal"}),e.jsxs(me,{children:[e.jsxs(J,{children:[e.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:e.jsx("use",{href:`${w}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(K,{children:"Calories"}),e.jsx(Q,{children:(s=n.user)==null?void 0:s.dailyCalories})]})]}),e.jsxs(J,{children:[e.jsx("svg",{style:{stroke:"var(--water-color)"},children:e.jsx("use",{href:`${w}#icon-milk`})}),e.jsxs("div",{children:[e.jsx(K,{children:"Water"}),e.jsxs(Q,{children:[(p=n.user)==null?void 0:p.dailyWater," ",e.jsx("span",{children:"ml"})]})]})]})]})]})}const ye=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,je=i.div`
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
`,we=i.button`
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
`,be=i.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,ve=i.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ce=i.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,ke=i.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Pe=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 864px) {
    flex-grow: 2;
  }
`,ze=i.svg`
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
`,Fe=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,De=i.p`
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
`,We=i.input`
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
`,Be=i.p`
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
`,Re=i.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Ee=i.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Ve=({percentage:t})=>e.jsxs(Ne,{children:[e.jsxs(Ee,{children:[isNaN(t)?0:t,"%"]}),e.jsx(Re,{$percentage:t})]}),Le=Ve,Te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Y.setAppElement("#root");function Me(){var b,v,C;const[t,n]=f.useState(!1),[s,p]=f.useState(""),[a,d]=f.useState(!0),[m,r]=f.useState(""),[x,c]=f.useState("var(--primary-btn-color)"),h=L(),o=j(V);function y(){n(!0)}function u(){n(!1),c("var(--primary-btn-color)"),r("")}const D=async l=>{l.preventDefault(),a&&(await h(S({ml:l.target.children[0].children[0].value})),u(),c("var(--primary-btn-color)"),await h(E()))},$=async()=>{await h(ee()),await h(E())},W=l=>{const g=l.target.value.trim();p(g),g===""?(d(!1),r("This field is required*"),c("var(--error-validate-input)")):parseInt(g)<0?(d(!1),r("Enter a positive number*"),c("var(--error-validate-input)")):(d(!0),r(""),c("#3CBC81"))},I=l=>{l.target.value.trim()===""?(d(!1),r("This field is required*"),c("var(--error-validate-input)")):parseInt(s)<0?(d(!1),r("Enter a positive number*"),c("var(--error-validate-input)")):(d(!0),r(""),c("#3CBC81"))};function B(){var l,g,k,P,z,F;return(l=o==null?void 0:o.consumedWaterByDay)!=null&&l.ml?((g=o==null?void 0:o.user)==null?void 0:g.dailyWater)-((k=o==null?void 0:o.consumedWaterByDay)==null?void 0:k.ml)>=0?((P=o==null?void 0:o.user)==null?void 0:P.dailyWater)-((z=o==null?void 0:o.consumedWaterByDay)==null?void 0:z.ml):0:(F=o==null?void 0:o.user)==null?void 0:F.dailyWater}return e.jsxs(Pe,{children:[e.jsx(ye,{children:"Water"}),e.jsxs(je,{children:[e.jsx(Le,{percentage:Math.round(((b=o.consumedWaterByDay)==null?void 0:b.ml)*100/((v=o.user)==null?void 0:v.dailyWater))}),e.jsxs(ke,{children:[e.jsx(be,{children:"Water consumption"}),e.jsxs(Fe,{children:[e.jsxs(ve,{children:[((C=o==null?void 0:o.consumedWaterByDay)==null?void 0:C.ml)||0," ",e.jsx("span",{children:"ml"})]}),e.jsxs(Ce,{children:[e.jsx("span",{children:"left : "}),B(),"ml"]})]}),e.jsxs(we,{onClick:y,children:[e.jsx("svg",{children:e.jsx("use",{href:`${w}#icon-add`})}),"Add Water Intake"]})]})]}),e.jsx(ze,{width:"20",height:"20",fill:"none",onClick:$,children:e.jsx("use",{href:`${w}#icon-trash`})}),e.jsxs(Y,{isOpen:t,onRequestClose:u,style:Te,children:[e.jsx(De,{children:"Add water Intake"}),e.jsxs($e,{onSubmit:l=>D(l),children:[e.jsxs("label",{children:["How much water",e.jsx(We,{type:"number",placeholder:"Enter millilitters",onChange:l=>W(l),onBlur:l=>I(l),$borderColor:x}),e.jsx(Ie,{children:m})]}),e.jsx("button",{children:"Confirm"})]}),e.jsx(Be,{onClick:u,children:"Cancel"})]})]})}const Ge=i.h4`
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
`,Oe=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Ae=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,T=i.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,M=i.p`
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
`,G=i.div`
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
`,qe=i(se)`
  width: ${t=>t.$widthpx}px !important;
  height: ${t=>t.$heightpx}px !important;
`;re.register(ae);const _e=t=>{const n={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},s={labels:["Filled","Empty"],datasets:[{data:[t.percentage,t.percentage<=100?100-t.percentage:0],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[t.percentage>=100?0:168,0]}]},p={id:"backgroundCircle",beforeDatasetsDraw(a,d,m){const{ctx:r}=a;r.save();const x=a.getDatasetMeta(0).data[0].x,c=a.getDatasetMeta(0).data[0].y,h=a.getDatasetMeta(0).data[0].innerRadius,o=a.getDatasetMeta(0).data[0].outerRadius,y=o-h,u=Math.PI/180;r.beginPath(),r.lineWidth=y,r.strokeStyle="#292928",r.arc(x,c,o-y/2,0,u*360,!1),r.stroke()}};return e.jsx(qe,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:s,options:n,plugins:[p]})},R=_e,Ue=i.p`
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
`,Je=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ke=({calories:t,currentCalories:n})=>{const s=()=>Math.round(n*100/t);return e.jsxs(Je,{children:[e.jsx(R,{percentage:s(),color:"#45FFBC",widthpx:168,heightpx:168}),e.jsxs(Ue,{children:[n," ",e.jsx("span",{children:"calories"})]})]})},Qe=Ke;function Xe(){var s,p,a,d,m,r,x,c,h,o,y,u,D,$,W,I,B,b,v,C,l,g,k,P,z,F,O,A,q,_,U;const t=j(te),n=j(V);return f.useEffect(()=>{console.log(n)},[]),e.jsxs(Oe,{children:[e.jsx(Ge,{children:"Food"}),e.jsxs(He,{children:[e.jsx(Qe,{calories:(s=n==null?void 0:n.user)==null?void 0:s.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),e.jsxs(Ae,{children:[e.jsxs(T,{children:[e.jsx(R,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((a=(p=n==null?void 0:n.user)==null?void 0:p.dailyNutrition)==null?void 0:a.carbohydrates))||0}),e.jsxs(M,{children:[Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((m=(d=n==null?void 0:n.user)==null?void 0:d.dailyNutrition)==null?void 0:m.carbohydrates))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Carbohidrates"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal:"," ",e.jsx("span",{children:(x=(r=n==null?void 0:n.user)==null?void 0:r.dailyNutrition)==null?void 0:x.carbohydrates})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((h=(c=n==null?void 0:n.user)==null?void 0:c.dailyNutrition)==null?void 0:h.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay)>=0?((y=(o=n==null?void 0:n.user)==null?void 0:o.dailyNutrition)==null?void 0:y.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay):0})]})]})]})]}),e.jsxs(T,{children:[e.jsx(R,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((D=(u=n==null?void 0:n.user)==null?void 0:u.dailyNutrition)==null?void 0:D.protein))||0}),e.jsxs(M,{children:[Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((W=($=n==null?void 0:n.user)==null?void 0:$.dailyNutrition)==null?void 0:W.protein))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Protein"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(B=(I=n==null?void 0:n.user)==null?void 0:I.dailyNutrition)==null?void 0:B.protein})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((v=(b=n==null?void 0:n.user)==null?void 0:b.dailyNutrition)==null?void 0:v.protein)-(t==null?void 0:t.totalConsumedProteinPerDay)>=0?((l=(C=n==null?void 0:n.user)==null?void 0:C.dailyNutrition)==null?void 0:l.protein)-(t==null?void 0:t.totalConsumedProteinPerDay):0})]})]})]})]}),e.jsxs(T,{children:[e.jsx(R,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((k=(g=n==null?void 0:n.user)==null?void 0:g.dailyNutrition)==null?void 0:k.fat))||0}),e.jsxs(M,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((z=(P=n==null?void 0:n.user)==null?void 0:P.dailyNutrition)==null?void 0:z.fat))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Fat"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(O=(F=n==null?void 0:n.user)==null?void 0:F.dailyNutrition)==null?void 0:O.fat})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((q=(A=n==null?void 0:n.user)==null?void 0:A.dailyNutrition)==null?void 0:q.fat)-(t==null?void 0:t.totalConsumedFatPerDay)>=0?((U=(_=n==null?void 0:n.user)==null?void 0:_.dailyNutrition)==null?void 0:U.fat)-(t==null?void 0:t.totalConsumedFatPerDay):0})]})]})]})]})]})]})]})}const Ye=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Ze=i.div`
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
`,Se=i(Z)`
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
`;function et(){return e.jsxs("div",{children:[e.jsxs(Ze,{children:[e.jsx("h2",{children:"Today"}),e.jsxs(Se,{to:"/dashboard",children:["On the way to the goal",e.jsx("svg",{children:e.jsx("use",{href:`${w}#icon-arrow-right`})})]})]}),e.jsxs(Ye,{children:[e.jsx(ue,{}),e.jsx(Me,{}),e.jsx(Xe,{})]})]})}const tt=i.li`
  @media screen and (min-width: 864px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,nt=i.div`
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
`,it=i.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,ot=i.div`
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
`,rt=i.p`
  color: white;
  font-size: 14px;
  min-width: 150px;
`,at=i.p`
  color: white;
  font-size: 14px;
  width: 110px;
`,st=i.p`
  color: white;
  font-size: 14px;
  width: 60px;
`,H=i.span`
  color: gray;
  font-weight: 500;
`,lt=i.img`
  width: 36px;
  height: 36px;
`,X=i.button`
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
`,N=({title:t,image:n})=>{const[s,p]=f.useState(!1),[a,d]=f.useState(null),m=L(),r=()=>p(!s),x=j(V);f.useEffect(()=>{const o=String(t.toLowerCase());x&&x.consumedMealsByDay&&o&&x.consumedMealsByDay[o]&&d(x.consumedMealsByDay[o])},[x,t]);const c=async()=>{try{d(null),await m(ne(t.toLowerCase())),await m(E())}catch(o){console.error(o)}},h=o=>{d(o),t.toLowerCase(),r()};return e.jsxs(tt,{children:[e.jsxs(nt,{children:[e.jsx(lt,{src:n,alt:"Plate"}),e.jsx(it,{children:t})]}),a&&a.foods.length===0&&e.jsx(X,{onClick:r,children:"+ Record your meal"}),!a&&e.jsx(X,{onClick:r,children:"+ Record your meal"}),s&&e.jsx(le,{onClose:r,image:n,mealType:t,onRecord:h}),a&&a.foods&&a.foods[0]&&e.jsxs(ot,{children:[e.jsxs(rt,{children:["Carbohydrates:",e.jsx(H,{children:a.totalCarbohydrates})]}),e.jsxs(at,{children:["Protein: ",e.jsx(H,{children:a.totalProtein})]}),e.jsxs(st,{children:["Fat: ",e.jsx(H,{children:a.totalFat})]}),e.jsx(dt,{onClick:c,children:e.jsx("img",{src:de,alt:"trash"})})]})]})},ct=i.div`
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
`,ht=i(Z)`
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
`,ft=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,mt=()=>e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsx(xt,{children:"Diary"}),e.jsx(ht,{to:"/diary",children:"See more"})]}),e.jsxs(ft,{children:[e.jsx(N,{title:"Breakfast",image:ce}),e.jsx(N,{title:"Lunch",image:pe}),e.jsx(N,{title:"Dinner",image:xe}),e.jsx(N,{title:"Snack",image:he})]})]}),gt=mt,ut=i.section`
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
`,yt=ut;function jt(){const t=L(),n=j(ie);let s=[];return f.useEffect(()=>{t(oe())},[t]),n&&(s=n.slice(0,4)),e.jsxs(yt,{children:[e.jsx("h2",{children:"Recommended Food"}),e.jsxs("div",{className:"wrapper",children:[e.jsx("ul",{children:s==null?void 0:s.map(({amount:p,calories:a,img:d,name:m,_id:r})=>e.jsx("li",{children:e.jsxs("div",{className:"description",children:[e.jsx("div",{className:"small_img_div",children:e.jsx("img",{src:d,alt:"",width:46,height:46})}),e.jsxs("section",{children:[e.jsx("h4",{children:m}),e.jsxs("p",{children:[p,e.jsxs("span",{children:[a," calories"]})]})]})]})},r))}),e.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",e.jsx("svg",{className:"svg",children:e.jsx("use",{href:`${w}#icon-arrow-right`})})]})]})]})}const wt=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function kt(){const t=L();return f.useEffect(()=>{t(E())},[t]),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"MainPage"}),e.jsx(et,{}),e.jsxs(wt,{children:[e.jsx(gt,{}),e.jsx(jt,{})]})]})}export{kt as default};
