import{u as i,h as j,k as L,j as e,i as w,r as m,a as V,M as Y,l as S,m as E,n as ee,o as te,L as Z,p as ne,q as ie,t as oe,v as re,w as ae,x as se,N as le}from"./index-96a574da.js";import{C as ce,A as de,D as pe}from"./index-550a4179.js";import{R as xe,b as he,l as fe,d as ge,s as me}from"./snack-image-deba8d75.js";const ue=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,ye=i.div`
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
`,je=i.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function we(t){var l,c;const n=j(L);return e.jsxs(je,{children:[e.jsx(ue,{children:"Daily Goal"}),e.jsxs(ye,{children:[e.jsxs(J,{children:[e.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:e.jsx("use",{href:`${w}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(K,{children:"Calories"}),e.jsx(Q,{children:(l=n.user)==null?void 0:l.dailyCalories})]})]}),e.jsxs(J,{children:[e.jsx("svg",{style:{stroke:"var(--water-color)"},children:e.jsx("use",{href:`${w}#icon-milk`})}),e.jsxs("div",{children:[e.jsx(K,{children:"Water"}),e.jsxs(Q,{children:[(c=n.user)==null?void 0:c.dailyWater," ",e.jsx("span",{children:"ml"})]})]})]})]})]})}const be=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,ve=i.div`
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
`,Ce=i.button`
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
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  svg {
    height: 16px;
    width: 16px;
    stroke: #0f0f0f;
  }
`,ke=i.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Pe=i.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,ze=i.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Fe=i.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,De=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 864px) {
    flex-grow: 2;
  }
`,$e=i.svg`
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`,We=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  width: 262px;
  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Ie=i.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,Be=i.form`
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
    padding: 8px 10px;
    transition: opacity 0.2s;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`,Ne=i.input`
  margin-top: 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid ${t=>t.$borderColor};
  border-radius: 12px;
  padding: 8px 10px;
  color: #fff;
  height: 36px;

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
`,Re=i.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`,Ee=i.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`,Le=i.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Ve=i.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Te=i.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Ae=({percentage:t})=>e.jsxs(Le,{children:[e.jsxs(Te,{children:[isNaN(t)?0:t,"%"]}),e.jsx(Ve,{$percentage:t})]}),Ge=Ae,He={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Y.setAppElement("#root");function Me(){var b,v,C;const[t,n]=m.useState(!1),[l,c]=m.useState(""),[a,d]=m.useState(!0),[f,r]=m.useState(""),[x,p]=m.useState("var(--primary-btn-color)"),h=V(),o=j(L);function y(){n(!0)}function u(){n(!1),p("var(--primary-btn-color)"),r("")}const D=async s=>{s.preventDefault(),a&&(await h(S({ml:s.target.children[0].children[0].value})),u(),p("var(--primary-btn-color)"),await h(E()))},$=async()=>{await h(ee()),await h(E())},W=s=>{const g=s.target.value.trim();c(g),g===""?(d(!1),r("This field is required*"),p("var(--error-validate-input)")):parseInt(g)<0?(d(!1),r("Enter a positive number*"),p("var(--error-validate-input)")):(d(!0),r(""),p("#3CBC81"))},I=s=>{s.target.value.trim()===""?(d(!1),r("This field is required*"),p("var(--error-validate-input)")):parseInt(l)<0?(d(!1),r("Enter a positive number*"),p("var(--error-validate-input)")):(d(!0),r(""),p("#3CBC81"))};function B(){var s,g,k,P,z,F;return(s=o==null?void 0:o.consumedWaterByDay)!=null&&s.ml?((g=o==null?void 0:o.user)==null?void 0:g.dailyWater)-((k=o==null?void 0:o.consumedWaterByDay)==null?void 0:k.ml)>=0?((P=o==null?void 0:o.user)==null?void 0:P.dailyWater)-((z=o==null?void 0:o.consumedWaterByDay)==null?void 0:z.ml):0:(F=o==null?void 0:o.user)==null?void 0:F.dailyWater}return e.jsxs(De,{children:[e.jsx(be,{children:"Water"}),e.jsxs(ve,{children:[e.jsx(Ge,{percentage:Math.round(((b=o.consumedWaterByDay)==null?void 0:b.ml)*100/((v=o.user)==null?void 0:v.dailyWater))}),e.jsxs(Fe,{children:[e.jsx(ke,{children:"Water consumption"}),e.jsxs(We,{children:[e.jsxs(Pe,{children:[((C=o==null?void 0:o.consumedWaterByDay)==null?void 0:C.ml)||0," ",e.jsx("span",{children:"ml"})]}),e.jsxs(ze,{children:[e.jsx("span",{children:"left : "}),B(),"ml"]})]}),e.jsxs(Ce,{onClick:y,children:[e.jsx("svg",{children:e.jsx("use",{href:`${w}#icon-add`})}),"Add Water Intake"]})]})]}),e.jsx($e,{width:"20",height:"20",fill:"none",onClick:$,children:e.jsx("use",{href:`${w}#icon-trash`})}),e.jsxs(Y,{isOpen:t,onRequestClose:u,style:He,children:[e.jsx(Ie,{children:"Add water Intake"}),e.jsxs(Be,{onSubmit:s=>D(s),children:[e.jsxs("label",{children:["How much water",e.jsx(Ne,{type:"number",placeholder:"Enter millilitters",onChange:s=>W(s),onBlur:s=>I(s),$borderColor:x}),e.jsx(Re,{children:f})]}),e.jsx("button",{children:"Confirm"})]}),e.jsx(Ee,{onClick:u,children:"Cancel"})]})]})}const Oe=i.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,qe=i.div`
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
`,_e=i.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Ue=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,T=i.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,A=i.p`
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
`,Je=i(pe)`
  width: ${t=>t.$widthpx}px !important;
  height: ${t=>t.$heightpx}px !important;
`;ce.register(de);const Ke=t=>{const n={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},l={labels:["Filled","Empty"],datasets:[{data:[t.percentage,t.percentage<=100?100-t.percentage:0],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[t.percentage>=100?0:168,0]}]},c={id:"backgroundCircle",beforeDatasetsDraw(a,d,f){const{ctx:r}=a;r.save();const x=a.getDatasetMeta(0).data[0].x,p=a.getDatasetMeta(0).data[0].y,h=a.getDatasetMeta(0).data[0].innerRadius,o=a.getDatasetMeta(0).data[0].outerRadius,y=o-h,u=Math.PI/180;r.beginPath(),r.lineWidth=y,r.strokeStyle="#292928",r.arc(x,p,o-y/2,0,u*360,!1),r.stroke()}};return e.jsx(Je,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:l,options:n,plugins:[c]})},R=Ke,Qe=i.p`
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
`,Xe=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ye=({calories:t,currentCalories:n})=>{const l=()=>Math.round(n*100/t);return e.jsxs(Xe,{children:[e.jsx(R,{percentage:l(),color:"#45FFBC",widthpx:168,heightpx:168}),e.jsxs(Qe,{children:[n," ",e.jsx("span",{children:"calories"})]})]})},Ze=Ye;function Se(){var l,c,a,d,f,r,x,p,h,o,y,u,D,$,W,I,B,b,v,C,s,g,k,P,z,F,M,O,q,_,U;const t=j(te),n=j(L);return e.jsxs(_e,{children:[e.jsx(Oe,{children:"Food"}),e.jsxs(qe,{children:[e.jsx(Ze,{calories:(l=n==null?void 0:n.user)==null?void 0:l.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),e.jsxs(Ue,{children:[e.jsxs(T,{children:[e.jsx(R,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((a=(c=n==null?void 0:n.user)==null?void 0:c.dailyNutrition)==null?void 0:a.carbohydrates))||0}),e.jsxs(A,{children:[Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((f=(d=n==null?void 0:n.user)==null?void 0:d.dailyNutrition)==null?void 0:f.carbohydrates))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Carbohidrates"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal:"," ",e.jsx("span",{children:(x=(r=n==null?void 0:n.user)==null?void 0:r.dailyNutrition)==null?void 0:x.carbohydrates})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((h=(p=n==null?void 0:n.user)==null?void 0:p.dailyNutrition)==null?void 0:h.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay)>=0?((y=(o=n==null?void 0:n.user)==null?void 0:o.dailyNutrition)==null?void 0:y.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay):0})]})]})]})]}),e.jsxs(T,{children:[e.jsx(R,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((D=(u=n==null?void 0:n.user)==null?void 0:u.dailyNutrition)==null?void 0:D.protein))||0}),e.jsxs(A,{children:[Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((W=($=n==null?void 0:n.user)==null?void 0:$.dailyNutrition)==null?void 0:W.protein))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Protein"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(B=(I=n==null?void 0:n.user)==null?void 0:I.dailyNutrition)==null?void 0:B.protein})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((v=(b=n==null?void 0:n.user)==null?void 0:b.dailyNutrition)==null?void 0:v.protein)-(t==null?void 0:t.totalConsumedProteinPerDay)>=0?((s=(C=n==null?void 0:n.user)==null?void 0:C.dailyNutrition)==null?void 0:s.protein)-(t==null?void 0:t.totalConsumedProteinPerDay):0})]})]})]})]}),e.jsxs(T,{children:[e.jsx(R,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((k=(g=n==null?void 0:n.user)==null?void 0:g.dailyNutrition)==null?void 0:k.fat))||0}),e.jsxs(A,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((z=(P=n==null?void 0:n.user)==null?void 0:P.dailyNutrition)==null?void 0:z.fat))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Fat"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(M=(F=n==null?void 0:n.user)==null?void 0:F.dailyNutrition)==null?void 0:M.fat})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((q=(O=n==null?void 0:n.user)==null?void 0:O.dailyNutrition)==null?void 0:q.fat)-(t==null?void 0:t.totalConsumedFatPerDay)>=0?((U=(_=n==null?void 0:n.user)==null?void 0:_.dailyNutrition)==null?void 0:U.fat)-(t==null?void 0:t.totalConsumedFatPerDay):0})]})]})]})]})]})]})]})}const et=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,tt=i.div`
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
`,nt=i(Z)`
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

  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  svg {
    height: 16px;
    width: 16px;
    stroke: var(--primary-text-color);
  }
`;function it(){return e.jsxs("div",{children:[e.jsxs(tt,{children:[e.jsx("h2",{children:"Today"}),e.jsxs(nt,{to:"/dashboard",children:["On the way to the goal",e.jsx("svg",{children:e.jsx("use",{href:`${w}#icon-arrow-right`})})]})]}),e.jsxs(et,{children:[e.jsx(we,{}),e.jsx(Me,{}),e.jsx(Se,{})]})]})}const ot=i.li`
  @media screen and (min-width: 864px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,rt=i.div`
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
`,at=i.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,st=i.div`
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
`,lt=i.p`
  color: white;
  font-size: 14px;
  min-width: 150px;
`,ct=i.p`
  color: white;
  font-size: 14px;
  width: 110px;
`,dt=i.p`
  color: white;
  font-size: 14px;
  width: 60px;
`,H=i.span`
  color: gray;
  font-weight: 500;
`,pt=i.img`
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
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`,xt=i.svg`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  width: 20px;
  height: 20px;
`,N=({title:t,image:n})=>{const[l,c]=m.useState(!1),[a,d]=m.useState(null),f=V(),r=()=>c(!l),x=j(L);m.useEffect(()=>{const o=String(t.toLowerCase());x&&x.consumedMealsByDay&&o&&x.consumedMealsByDay[o]&&d(x.consumedMealsByDay[o])},[x,t]);const p=async()=>{try{d(null),await f(ne(t.toLowerCase())),await f(E())}catch(o){console.error(o)}},h=o=>{d(o),t.toLowerCase(),r()};return e.jsxs(ot,{children:[e.jsxs(rt,{children:[e.jsx(pt,{src:n,alt:"Plate"}),e.jsx(at,{children:t})]}),a&&a.foods.length===0&&e.jsx(X,{onClick:r,children:"+ Record your meal"}),!a&&e.jsx(X,{onClick:r,children:"+ Record your meal"}),l&&e.jsx(xe,{onClose:r,image:n,mealType:t,onRecord:h}),a&&a.foods&&a.foods[0]&&e.jsxs(st,{children:[e.jsxs(lt,{children:["Carbohydrates: ",e.jsx(H,{children:a.totalCarbohydrates})]}),e.jsxs(ct,{children:["Protein: ",e.jsx(H,{children:a.totalProtein})]}),e.jsxs(dt,{children:["Fat: ",e.jsx(H,{children:a.totalFat})]}),e.jsx(xt,{width:"20",height:"20",fill:"none",onClick:p,children:e.jsx("use",{href:`${w}#icon-trash`})})]})]})},ht=i.div`
  display: flex;
  flex-direction: column;
  width: 660px;
`,ft=i.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,gt=i.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 864px) {
    font-size: 18px;
    line-height: 32px;
  }
`,mt=i(Z)`
  color: #b6b6b6;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;

  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (min-width: 864px) {
    font-size: 14px;
    line-height: 22px;
  }
`,ut=i.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,yt=()=>e.jsxs(ht,{children:[e.jsxs(ft,{children:[e.jsx(gt,{children:"Diary"}),e.jsx(mt,{to:"/diary",children:"See more"})]}),e.jsxs(ut,{children:[e.jsx(N,{title:"Breakfast",image:he}),e.jsx(N,{title:"Lunch",image:fe}),e.jsx(N,{title:"Dinner",image:ge}),e.jsx(N,{title:"Snack",image:me})]})]}),jt=yt,wt=i.section`
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
    transition: opacity 0.2s;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  .svg {
    stroke: #b6b6b6;
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 834px) {
    width: calc(834px - (27px * 2));

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
`,bt=wt;function vt(){const t=V(),n=j(ie&&oe),l=j(re);let c=[];return m.useEffect(()=>{t(ae())},[t]),l&&(c=l.slice(0,4)),e.jsxs(bt,{children:[e.jsx("h2",{children:"Recommended Food"}),n&&e.jsx(se,{}),e.jsxs("div",{className:"wrapper",children:[e.jsx("ul",{children:c==null?void 0:c.map(({amount:a,calories:d,img:f,name:r,_id:x})=>e.jsx("li",{children:e.jsxs("div",{className:"description",children:[e.jsx("div",{className:"small_img_div",children:e.jsx("img",{src:f,alt:"",width:46,height:46})}),e.jsxs("section",{children:[e.jsx("h4",{children:r}),e.jsxs("p",{children:[a,e.jsxs("span",{children:[d," calories"]})]})]})]})},x))}),e.jsxs(le,{className:"href",to:"/recommended-food",children:["See more",e.jsx("svg",{className:"svg",children:e.jsx("use",{href:`${w}#icon-arrow-right`})})]})]})]})}const Ct=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function Ft(){const t=V();return m.useEffect(()=>{t(E())},[t]),e.jsxs(e.Fragment,{children:[e.jsx(it,{}),e.jsxs(Ct,{children:[e.jsx(jt,{}),e.jsx(vt,{})]})]})}export{Ft as default};
