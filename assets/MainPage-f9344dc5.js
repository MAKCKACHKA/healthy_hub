import{s as n,h as I,k as H,j as e,i as b,r as g,u as E,M as q,l as te,m as R,n as ne,o as ie,L as _,a as oe,p as re,q as ae,t as se,v as le}from"./index-08a297d1.js";import{C as de,A as ce,D as pe}from"./index-f07b89a4.js";import{b as xe,l as he,d as me,s as ge}from"./snack-image-bf470da7.js";const fe=n.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,ue=n.div`
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
`,Y=n.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,J=n.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Z=n.p`
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
`,ye=n.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function be(t){var d,p;const i=I(H);return e.jsxs(ye,{children:[e.jsx(fe,{children:"Daily Goal"}),e.jsxs(ue,{children:[e.jsxs(Y,{children:[e.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:e.jsx("use",{href:`${b}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(J,{children:"Calories"}),e.jsx(Z,{children:(d=i.user)==null?void 0:d.dailyCalories})]})]}),e.jsxs(Y,{children:[e.jsx("svg",{style:{stroke:"var(--water-color)"},children:e.jsx("use",{href:`${b}#icon-milk`})}),e.jsxs("div",{children:[e.jsx(J,{children:"Water"}),e.jsxs(Z,{children:[(p=i.user)==null?void 0:p.dailyWater," ",e.jsx("span",{children:"ml"})]})]})]})]})]})}const we=n.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,je=n.div`
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
`,ve=n.button`
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
`,Ce=n.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,ke=n.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,Pe=n.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Ae=n.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,ze=n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 864px) {
    flex-grow: 2;
  }
`,Ie=n.svg`
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
`,Fe=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,De=n.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,$e=n.form`
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
`,Be=n.input`
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
`,Ne=n.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`,We=n.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Re=n.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Ee=n.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Ve=n.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Te=({percentage:t})=>e.jsxs(Re,{children:[e.jsxs(Ve,{children:[isNaN(t)?0:t,"%"]}),e.jsx(Ee,{$percentage:t})]}),Ge=Te,Me={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};q.setAppElement("#root");function He(){var w,j,v,C,k,P;const[t,i]=g.useState(!1),[d,p]=g.useState(""),[c,a]=g.useState(!0),[h,s]=g.useState(""),[m,r]=g.useState("var(--primary-btn-color)"),o=E(),l=I(H);function u(){i(!0)}function f(){i(!1),r("var(--primary-btn-color)"),s("")}const F=async x=>{x.preventDefault(),c&&(await o(te({ml:x.target.children[0].children[0].value})),f(),r("var(--primary-btn-color)"),await o(R()))},D=async()=>{await o(ne()),await o(R())},$=x=>{const y=x.target.value.trim();p(y),y===""?(a(!1),s("This field is required*"),r("var(--error-validate-input)")):parseInt(y)<0?(a(!1),s("Enter a positive number*"),r("var(--error-validate-input)")):(a(!0),s(""),r("#3CBC81"))},B=x=>{x.target.value.trim()===""?(a(!1),s("This field is required*"),r("var(--error-validate-input)")):parseInt(d)<0?(a(!1),s("Enter a positive number*"),r("var(--error-validate-input)")):(a(!0),s(""),r("#3CBC81"))};return e.jsxs(ze,{children:[e.jsx(we,{children:"Water"}),e.jsxs(je,{children:[e.jsx(Ge,{percentage:Math.round(((w=l.consumedWaterByDay)==null?void 0:w.ml)*100/((j=l.user)==null?void 0:j.dailyWater))}),e.jsxs(Ae,{children:[e.jsx(Ce,{children:"Water consumption"}),e.jsxs(Fe,{children:[e.jsxs(ke,{children:[((v=l==null?void 0:l.consumedWaterByDay)==null?void 0:v.ml)||0," ",e.jsx("span",{children:"ml"})]}),e.jsxs(Pe,{children:[e.jsx("span",{children:"left : "}),((C=l.user)==null?void 0:C.dailyWater)-((k=l.consumedWaterByDay)==null?void 0:k.ml)||((P=l.user)==null?void 0:P.dailyWater),"ml"]})]}),e.jsxs(ve,{onClick:u,children:[e.jsx("svg",{children:e.jsx("use",{href:`${b}#icon-add`})}),"Add Water Intake"]})]})]}),e.jsx(Ie,{width:"20",height:"20",fill:"none",onClick:D,children:e.jsx("use",{href:`${b}#icon-trash`})}),e.jsxs(q,{isOpen:t,onRequestClose:f,style:Me,children:[e.jsx(De,{children:"Add water Intake"}),e.jsxs($e,{onSubmit:x=>F(x),children:[e.jsxs("label",{children:["How much water",e.jsx(Be,{type:"number",placeholder:"Enter millilitters",onChange:x=>$(x),onBlur:x=>B(x),$borderColor:m}),e.jsx(Ne,{children:h})]}),e.jsx("button",{children:"Confirm"})]}),e.jsx(We,{onClick:f,children:"Cancel"})]})]})}const Le=n.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Oe=n.div`
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
`,Qe=n.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Ue=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,V=n.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,T=n.p`
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
`,G=n.div`
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
`,Se=n(pe)`
  width: ${t=>t.$widthpx}px !important;
  height: ${t=>t.$heightpx}px !important;
`;de.register(ce);const Ke=t=>{const i={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},d={labels:["Filled","Empty"],datasets:[{data:[t.percentage,t.percentage<=100?100-t.percentage:0],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[t.percentage>=100?0:168,0]}]},p={id:"backgroundCircle",beforeDatasetsDraw(c,a,h){const{ctx:s}=c;s.save();const m=c.getDatasetMeta(0).data[0].x,r=c.getDatasetMeta(0).data[0].y,o=c.getDatasetMeta(0).data[0].innerRadius,l=c.getDatasetMeta(0).data[0].outerRadius,u=l-o,f=Math.PI/180;s.beginPath(),s.lineWidth=u,s.strokeStyle="#292928",s.arc(m,r,l-u/2,0,f*360,!1),s.stroke()}};return e.jsx(Se,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:d,options:i,plugins:[p]})},W=Ke,Xe=n.p`
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
`,Ye=n.div`
  position: relative;
  display: flex;
  align-items: center;
`,Je=({calories:t,currentCalories:i})=>{const d=()=>Math.round(i*100/t);return e.jsxs(Ye,{children:[e.jsx(W,{percentage:d(),color:"#45FFBC",widthpx:168,heightpx:168}),e.jsxs(Xe,{children:[i," ",e.jsx("span",{children:"calories"})]})]})},Ze=Je;function qe(){var d,p,c,a,h,s,m,r,o,l,u,f,F,D,$,B,w,j,v,C,k,P,x,y,L,O,Q,U,S,K,X;const t=I(ie),i=I(H);return g.useEffect(()=>{console.log(i)},[]),e.jsxs(Qe,{children:[e.jsx(Le,{children:"Food"}),e.jsxs(Oe,{children:[e.jsx(Ze,{calories:(d=i==null?void 0:i.user)==null?void 0:d.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),e.jsxs(Ue,{children:[e.jsxs(V,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((c=(p=i==null?void 0:i.user)==null?void 0:p.dailyNutrition)==null?void 0:c.carbohydrates))||0}),e.jsxs(T,{children:[Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((h=(a=i==null?void 0:i.user)==null?void 0:a.dailyNutrition)==null?void 0:h.carbohydrates))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Carbohidrates"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal:"," ",e.jsx("span",{children:(m=(s=i==null?void 0:i.user)==null?void 0:s.dailyNutrition)==null?void 0:m.carbohydrates})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((o=(r=i==null?void 0:i.user)==null?void 0:r.dailyNutrition)==null?void 0:o.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay)>=0?((u=(l=i==null?void 0:i.user)==null?void 0:l.dailyNutrition)==null?void 0:u.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay):0})]})]})]})]}),e.jsxs(V,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((F=(f=i==null?void 0:i.user)==null?void 0:f.dailyNutrition)==null?void 0:F.protein))||0}),e.jsxs(T,{children:[Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/(($=(D=i==null?void 0:i.user)==null?void 0:D.dailyNutrition)==null?void 0:$.protein))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Protein"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(w=(B=i==null?void 0:i.user)==null?void 0:B.dailyNutrition)==null?void 0:w.protein})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((v=(j=i==null?void 0:i.user)==null?void 0:j.dailyNutrition)==null?void 0:v.protein)-(t==null?void 0:t.totalConsumedProteinPerDay)>=0?((k=(C=i==null?void 0:i.user)==null?void 0:C.dailyNutrition)==null?void 0:k.protein)-(t==null?void 0:t.totalConsumedProteinPerDay):0})]})]})]})]}),e.jsxs(V,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((x=(P=i==null?void 0:i.user)==null?void 0:P.dailyNutrition)==null?void 0:x.fat))||0}),e.jsxs(T,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((L=(y=i==null?void 0:i.user)==null?void 0:y.dailyNutrition)==null?void 0:L.fat))||0,"%"]}),e.jsxs(G,{children:[e.jsx("h3",{children:"Fat"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(Q=(O=i==null?void 0:i.user)==null?void 0:O.dailyNutrition)==null?void 0:Q.fat})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((S=(U=i==null?void 0:i.user)==null?void 0:U.dailyNutrition)==null?void 0:S.fat)-(t==null?void 0:t.totalConsumedFatPerDay)>=0?((X=(K=i==null?void 0:i.user)==null?void 0:K.dailyNutrition)==null?void 0:X.fat)-(t==null?void 0:t.totalConsumedFatPerDay):0})]})]})]})]})]})]})]})}const _e=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,et=n.div`
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
`,tt=n(_)`
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
`;function nt(){return e.jsxs("div",{children:[e.jsxs(et,{children:[e.jsx("h2",{children:"Today"}),e.jsxs(tt,{to:"/dashboard",children:["On the way to the goal",e.jsx("svg",{children:e.jsx("use",{href:`${b}#icon-arrow-right`})})]})]}),e.jsxs(_e,{children:[e.jsx(be,{}),e.jsx(He,{}),e.jsx(qe,{})]})]})}const it=n.li`
  @media screen and (min-width: 864px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,ot=n.div`
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
`,rt=n.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,at=n.div`
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
`,st=n.p`
  color: white;
  font-size: 14px;
  min-width: 150px;
`,lt=n.p`
  color: white;
  font-size: 14px;
  width: 110px;
`,dt=n.p`
  color: white;
  font-size: 14px;
  width: 60px;
`,M=n.span`
  color: gray;
  font-weight: 500;
`,ct=n.img`
  width: 36px;
  height: 36px;
`,pt=n.button`
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
`,xt=n.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",ht=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,mt=n.div`
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
`,gt=n.h1`
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
`,ft=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,ut=n.img`
  width: 32px;
  height: 32px;
`,yt=n.h2`
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
`,bt=n.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,A=n.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,wt=n.div`
  max-height: 352px;
  margin-bottom: 16px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
  }
`,jt=n.ul`
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
`,vt=n.li`
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
`,z=n.input`
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
`,Ct=n.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--primary-btn-color);
  cursor: pointer;
`,kt=n.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Pt=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,At=n.button`
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
`,zt=n.button`
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
`,It=({onClose:t,image:i,mealType:d,onRecord:p})=>{const c=E(),a=oe({initialValues:{mealType:d,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]},onSubmit:async r=>{try{if(r.foods&&r.foods.length>0&&r.foods[0]){const o={mealType:d.toLowerCase(),foods:r.foods.map(l=>({name:l.name?l.name:"string",nutrition:{carbohydrates:l.nutrition.carbohydrates?Number(l.nutrition.carbohydrates):0,protein:l.nutrition.protein?Number(l.nutrition.protein):0,fat:l.nutrition.fat?Number(l.nutrition.fat):0},calories:l.calories?Number(l.calories):0}))};await c(re(o)),p(o),await c(R()),t()}}catch(o){console.error(o)}}}),h=r=>{r.currentTarget===r.target&&t()},s=r=>{const o=[...a.values.foods];o.splice(r,1),a.setFieldValue("foods",o)},m=()=>{a.setFieldValue("foods",[...a.values.foods,{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}])};return e.jsx(ht,{onClick:h,children:e.jsxs(mt,{children:[e.jsx(gt,{children:"Record your meal"}),e.jsxs(ft,{children:[e.jsx(ut,{src:i,alt:"Plate"}),e.jsx(yt,{children:d})]}),e.jsxs(bt,{onSubmit:a.handleSubmit,children:[e.jsxs(wt,{children:[a.values.foods.map((r,o)=>e.jsx(jt,{children:e.jsxs(vt,{children:[e.jsx(A,{children:e.jsx(z,{type:"text",id:`name-${o}`,name:`foods[${o}].name`,placeholder:"The name of the product or dish",onChange:a.handleChange,value:r.name})}),e.jsx(A,{children:e.jsx(z,{type:"number",id:`carbonohidrates-${o}`,name:`foods[${o}].nutrition.carbohydrates`,placeholder:"Carbonoh.",onChange:a.handleChange,value:r.nutrition.carbohydrates})}),e.jsx(A,{children:e.jsx(z,{type:"number",id:`protein-${o}`,name:`foods[${o}].nutrition.protein`,placeholder:"Protein",onChange:a.handleChange,value:r.nutrition.protein})}),e.jsx(A,{children:e.jsx(z,{type:"number",id:`fat-${o}`,name:`foods[${o}].nutrition.fat`,placeholder:"Fat",onChange:a.handleChange,value:r.nutrition.fat})}),e.jsx(A,{children:e.jsx(z,{type:"number",id:`calories-${o}`,name:`foods[${o}].calories`,placeholder:"Calories",onChange:a.handleChange,value:r.calories})}),e.jsx(kt,{type:"button",onClick:()=>s(o),children:e.jsx("img",{src:ee,alt:"Trash"})})]})},o)),e.jsx(Ct,{type:"button",onClick:m,children:"+ Add more"})]}),e.jsxs(Pt,{children:[e.jsx(zt,{type:"button",onClick:t,children:"Cancel"}),e.jsx(At,{type:"submit",children:"Confirm"})]})]})]})})},N=({title:t,image:i})=>{const[d,p]=g.useState(!1),[c,a]=g.useState(null),h=E(),s=()=>p(!d),m=async()=>{try{a(null),localStorage.removeItem(`${t}_nutritionInfo`),await h(ae(t.toLowerCase())),await h(R())}catch(o){console.error(o)}},r=o=>{a(o),localStorage.setItem(`${t}_nutritionInfo`,JSON.stringify(o)),s()};return g.useEffect(()=>{const o=localStorage.getItem(`${t}_nutritionInfo`);o&&a(JSON.parse(o))},[t]),e.jsxs(it,{children:[e.jsxs(ot,{children:[e.jsx(ct,{src:i,alt:"Plate"}),e.jsx(rt,{children:t})]}),!c&&e.jsx(pt,{onClick:s,children:"+ Record your meal"}),d&&!c&&e.jsx(It,{onClose:s,image:i,mealType:t,onRecord:r}),c&&e.jsxs(at,{children:[e.jsxs(st,{children:["Carbohydrates:",e.jsx(M,{children:c.foods[0].nutrition.carbohydrates})]}),e.jsxs(lt,{children:["Protein: ",e.jsx(M,{children:c.foods[0].nutrition.protein})]}),e.jsxs(dt,{children:["Fat: ",e.jsx(M,{children:c.foods[0].nutrition.fat})]}),e.jsx(xt,{onClick:m,children:e.jsx("img",{src:ee,alt:"trash"})})]})]})},Ft=n.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,Dt=n.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,$t=n.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 864px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Bt=n(_)`
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
`,Nt=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Wt=()=>e.jsxs(Ft,{children:[e.jsxs(Dt,{children:[e.jsx($t,{children:"Diary"}),e.jsx(Bt,{to:"/diary",children:"See more"})]}),e.jsxs(Nt,{children:[e.jsx(N,{title:"Breakfast",image:xe}),e.jsx(N,{title:"Lunch",image:he}),e.jsx(N,{title:"Dinner",image:me}),e.jsx(N,{title:"Snack",image:ge})]})]}),Rt=Wt,Et=n.section`
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
`,Vt=Et;function Tt(){const t=E(),i=I(se);let d=[];return g.useEffect(()=>{t(le())},[t]),i&&(d=i.slice(0,4)),e.jsxs(Vt,{children:[e.jsx("h2",{children:"Recommended Food"}),e.jsxs("div",{className:"wrapper",children:[e.jsx("ul",{children:d==null?void 0:d.map(({amount:p,calories:c,img:a,name:h,_id:s})=>e.jsx("li",{children:e.jsxs("div",{className:"description",children:[e.jsx("div",{className:"small_img_div",children:e.jsx("img",{src:a,alt:"",width:46,height:46})}),e.jsxs("section",{children:[e.jsx("h4",{children:h}),e.jsxs("p",{children:[p,e.jsxs("span",{children:[c," calories"]})]})]})]})},s))}),e.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",e.jsx("svg",{className:"svg",children:e.jsx("use",{href:`${b}#icon-arrow-right`})})]})]})]})}const Gt=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function Ot(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"MainPage"}),e.jsx(nt,{}),e.jsxs(Gt,{children:[e.jsx(Rt,{}),e.jsx(Tt,{})]})]})}export{Ot as default};
