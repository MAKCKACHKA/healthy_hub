import{s as t,h as I,k as T,j as e,i as b,r as g,u as G,M as Z,l as te,m as X,n as ne,o as ie,L as q,a as oe,p as re,q as ae,t as se}from"./index-555d45aa.js";import{C as le,A as de,D as ce}from"./index-f5b5f8bd.js";import{b as pe}from"./breakfast-image-82880913.js";const xe=t.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,he=t.div`
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
`,J=t.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,_=t.p`
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
`,me=t.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function ge(i){var l,p;const n=I(T);return e.jsxs(me,{children:[e.jsx(xe,{children:"Daily Goal"}),e.jsxs(he,{children:[e.jsxs(Y,{children:[e.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:e.jsx("use",{href:`${b}#icon-bubble`})}),e.jsxs("div",{children:[e.jsx(J,{children:"Calories"}),e.jsx(_,{children:(l=n.user)==null?void 0:l.dailyCalories})]})]}),e.jsxs(Y,{children:[e.jsx("svg",{style:{stroke:"var(--water-color)"},children:e.jsx("use",{href:`${b}#icon-milk`})}),e.jsxs("div",{children:[e.jsx(J,{children:"Water"}),e.jsxs(_,{children:[(p=n.user)==null?void 0:p.dailyWater," ",e.jsx("span",{children:"ml"})]})]})]})]})]})}const fe=t.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,ue=t.div`
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
`,ye=t.button`
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
`,be=t.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,we=t.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,je=t.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,ve=t.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Ce=t.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,ke=t.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Ae=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Pe=t.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,ze=t.form`
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
`,Ie=t.input`
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
`,Fe=t.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`,$e=t.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Be=t.div`
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
`,Ne=t.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,We=({percentage:i})=>e.jsxs(Be,{children:[e.jsxs(Ne,{children:[isNaN(i)?0:i,"%"]}),e.jsx(De,{$percentage:i})]}),Re=We,Ee={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Z.setAppElement("#root");function Me(){var w,j,v,C,k,A;const[i,n]=g.useState(!1),[l,p]=g.useState(""),[c,a]=g.useState(!0),[h,d]=g.useState(""),[m,o]=g.useState("var(--primary-btn-color)"),r=G(),s=I(T);function u(){n(!0)}function f(){n(!1),o("var(--primary-btn-color)"),d("")}const F=async x=>{x.preventDefault(),c&&(await r(te({ml:x.target.children[0].children[0].value})),f(),o("var(--primary-btn-color)"),await r(X()))},$=async()=>{await r(ne()),await r(X())},B=x=>{const y=x.target.value.trim();p(y),y===""?(a(!1),d("This field is required*"),o("var(--error-validate-input)")):parseInt(y)<0?(a(!1),d("Enter a positive number*"),o("var(--error-validate-input)")):(a(!0),d(""),o("#3CBC81"))},D=x=>{x.target.value.trim()===""?(a(!1),d("This field is required*"),o("var(--error-validate-input)")):parseInt(l)<0?(a(!1),d("Enter a positive number*"),o("var(--error-validate-input)")):(a(!0),d(""),o("#3CBC81"))};return e.jsxs(Ce,{children:[e.jsx(fe,{children:"Water"}),e.jsxs(ue,{children:[e.jsx(Re,{percentage:Math.round(((w=s.consumedWaterByDay)==null?void 0:w.ml)*100/((j=s.user)==null?void 0:j.dailyWater))}),e.jsxs(ve,{children:[e.jsx(be,{children:"Water consumption"}),e.jsxs(Ae,{children:[e.jsxs(we,{children:[((v=s==null?void 0:s.consumedWaterByDay)==null?void 0:v.ml)||0," ",e.jsx("span",{children:"ml"})]}),e.jsxs(je,{children:[e.jsx("span",{children:"left : "}),((C=s.user)==null?void 0:C.dailyWater)-((k=s.consumedWaterByDay)==null?void 0:k.ml)||((A=s.user)==null?void 0:A.dailyWater),"ml"]})]}),e.jsxs(ye,{onClick:u,children:[e.jsx("svg",{children:e.jsx("use",{href:`${b}#icon-add`})}),"Add Water Intake"]})]})]}),e.jsx(ke,{width:"20",height:"20",fill:"none",onClick:$,children:e.jsx("use",{href:`${b}#icon-trash`})}),e.jsxs(Z,{isOpen:i,onRequestClose:f,style:Ee,children:[e.jsx(Pe,{children:"Add water Intake"}),e.jsxs(ze,{onSubmit:x=>F(x),children:[e.jsxs("label",{children:["How much water",e.jsx(Ie,{type:"number",placeholder:"Enter millilitters",onChange:x=>B(x),onBlur:x=>D(x),$borderColor:m}),e.jsx(Fe,{children:h})]}),e.jsx("button",{children:"Confirm"})]}),e.jsx($e,{onClick:f,children:"Cancel"})]})]})}const Ve=t.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Te=t.div`
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
`,Ge=t.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,He=t.div`
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
`,Oe=t(ce)`
  width: ${i=>i.$widthpx}px !important;
  height: ${i=>i.$heightpx}px !important;
`;le.register(de);const Qe=i=>{const n={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},l={labels:["Filled","Empty"],datasets:[{data:[i.percentage,100-i.percentage],backgroundColor:[i.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},p={id:"backgroundCircle",beforeDatasetsDraw(c,a,h){const{ctx:d}=c;d.save();const m=c.getDatasetMeta(0).data[0].x,o=c.getDatasetMeta(0).data[0].y,r=c.getDatasetMeta(0).data[0].innerRadius,s=c.getDatasetMeta(0).data[0].outerRadius,u=s-r,f=Math.PI/180;d.beginPath(),d.lineWidth=u,d.strokeStyle="#292928",d.arc(m,o,s-u/2,0,f*360,!1),d.stroke()}};return e.jsx(Oe,{$widthpx:i.widthpx,$heightpx:i.heightpx,data:l,options:n,plugins:[p]})},W=Qe,Le=t.p`
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
`,Ue=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,Se=({calories:i,currentCalories:n})=>{const l=()=>Math.round(n*100/i);return e.jsxs(Ue,{children:[e.jsx(W,{percentage:l(),color:"#45FFBC",widthpx:168,heightpx:168}),e.jsxs(Le,{children:[n," ",e.jsx("span",{children:"calories"})]})]})},Ke=Se;function Xe(){var l,p,c,a,h,d,m,o,r,s,u,f,F,$,B,D,w,j,v,C,k,A,x,y,H,O,Q,L,U,S,K;const i=I(ie),n=I(T);return g.useEffect(()=>{console.log(n)},[]),e.jsxs(Ge,{children:[e.jsx(Ve,{children:"Food"}),e.jsxs(Te,{children:[e.jsx(Ke,{calories:(l=n==null?void 0:n.user)==null?void 0:l.dailyCalories,currentCalories:(i==null?void 0:i.totalConsumedCaloriesPerDay)||0}),e.jsxs(He,{children:[e.jsxs(R,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((i==null?void 0:i.totalConsumedCarbohydratesPerDay)*100/((c=(p=n==null?void 0:n.user)==null?void 0:p.dailyNutrition)==null?void 0:c.carbohydrates))||0}),e.jsxs(E,{children:[Math.round((i==null?void 0:i.totalConsumedCarbohydratesPerDay)*100/((h=(a=n==null?void 0:n.user)==null?void 0:a.dailyNutrition)==null?void 0:h.carbohydrates))||0,"%"]}),e.jsxs(M,{children:[e.jsx("h3",{children:"Carbohidrates"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal:"," ",e.jsx("span",{children:(m=(d=n==null?void 0:n.user)==null?void 0:d.dailyNutrition)==null?void 0:m.carbohydrates})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((r=(o=n==null?void 0:n.user)==null?void 0:o.dailyNutrition)==null?void 0:r.carbohydrates)-(i==null?void 0:i.totalConsumedCarbohydratesPerDay)||((u=(s=n==null?void 0:n.user)==null?void 0:s.dailyNutrition)==null?void 0:u.carbohydrates)})]})]})]})]}),e.jsxs(R,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((i==null?void 0:i.totalConsumedProteinPerDay)*100/((F=(f=n==null?void 0:n.user)==null?void 0:f.dailyNutrition)==null?void 0:F.protein))||0}),e.jsxs(E,{children:[Math.round((i==null?void 0:i.totalConsumedProteinPerDay)*100/((B=($=n==null?void 0:n.user)==null?void 0:$.dailyNutrition)==null?void 0:B.protein))||0,"%"]}),e.jsxs(M,{children:[e.jsx("h3",{children:"Protein"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(w=(D=n==null?void 0:n.user)==null?void 0:D.dailyNutrition)==null?void 0:w.protein})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((v=(j=n==null?void 0:n.user)==null?void 0:j.dailyNutrition)==null?void 0:v.protein)-(i==null?void 0:i.totalConsumedProteinPerDay)||((k=(C=n==null?void 0:n.user)==null?void 0:C.dailyNutrition)==null?void 0:k.protein)})]})]})]})]}),e.jsxs(R,{children:[e.jsx(W,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((i==null?void 0:i.totalConsumedFatPerDay)*100/((x=(A=n==null?void 0:n.user)==null?void 0:A.dailyNutrition)==null?void 0:x.fat))||0}),e.jsxs(E,{children:[Math.round((i==null?void 0:i.totalConsumedFatPerDay)*100/((H=(y=n==null?void 0:n.user)==null?void 0:y.dailyNutrition)==null?void 0:H.fat))||0,"%"]}),e.jsxs(M,{children:[e.jsx("h3",{children:"Fat"}),e.jsxs("div",{children:[e.jsxs("p",{children:["Goal: ",e.jsx("span",{children:(Q=(O=n==null?void 0:n.user)==null?void 0:O.dailyNutrition)==null?void 0:Q.fat})]}),e.jsxs("p",{children:["left:"," ",e.jsx("span",{children:((U=(L=n==null?void 0:n.user)==null?void 0:L.dailyNutrition)==null?void 0:U.fat)-(i==null?void 0:i.totalConsumedFatPerDay)||((K=(S=n==null?void 0:n.user)==null?void 0:S.dailyNutrition)==null?void 0:K.fat)})]})]})]})]})]})]})]})}const Ye=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Je=t.div`
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
`,_e=t(q)`
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
`;function Ze(){return e.jsxs("div",{children:[e.jsxs(Je,{children:[e.jsx("h2",{children:"Today"}),e.jsxs(_e,{to:"/dashboard",children:["On the way to the goal",e.jsx("svg",{children:e.jsx("use",{href:`${b}#icon-arrow-right`})})]})]}),e.jsxs(Ye,{children:[e.jsx(ge,{}),e.jsx(Me,{}),e.jsx(Xe,{})]})]})}const qe=t.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,et=t.div`
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
`,tt=t.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`,nt=t.div`
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
`,it=t.p`
  color: white;
  font-size: 14px;
  min-width: 150px;
`,ot=t.p`
  color: white;
  font-size: 14px;
  width: 110px;
`,rt=t.p`
  color: white;
  font-size: 14px;
  width: 60px;
`,V=t.span`
  color: gray;
  font-weight: 500;
`,at=t.img`
  width: 36px;
  height: 36px;
`,st=t.button`
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
`,lt=t.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",dt=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,ct=t.div`
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
`,pt=t.h1`
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
`,xt=t.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,ht=t.img`
  width: 32px;
  height: 32px;
`,mt=t.h2`
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
`,gt=t.form`
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
`,ft=t.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,ut=t.ul`
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
`,yt=t.li`
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
`,bt=t.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,wt=t.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,jt=t.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,vt=t.button`
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
`,Ct=t.button`
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
`,kt=({onClose:i,image:n,mealType:l,onRecord:p})=>{const c=G(),a=oe({initialValues:{mealType:l,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]},onSubmit:async o=>{try{if(o.foods&&o.foods.length>0&&o.foods[0]){const r={mealType:l.toLowerCase(),foods:o.foods.map(s=>({name:s.name?s.name:"string",nutrition:{carbohydrates:s.nutrition.carbohydrates?Number(s.nutrition.carbohydrates):0,protein:s.nutrition.protein?Number(s.nutrition.protein):0,fat:s.nutrition.fat?Number(s.nutrition.fat):0},calories:s.calories?Number(s.calories):0}))};c(re(r)),p(r),i()}}catch(r){console.error(r)}}}),h=o=>{o.currentTarget===o.target&&i()},d=o=>{const r=[...a.values.foods];r.splice(o,1),a.setFieldValue("foods",r)},m=()=>{a.setFieldValue("foods",[...a.values.foods,{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}])};return e.jsx(dt,{onClick:h,children:e.jsxs(ct,{children:[e.jsx(pt,{children:"Record your meal"}),e.jsxs(xt,{children:[e.jsx(ht,{src:n,alt:"Plate"}),e.jsx(mt,{children:l})]}),e.jsxs(gt,{onSubmit:a.handleSubmit,children:[e.jsxs(ft,{children:[a.values.foods.map((o,r)=>e.jsx(ut,{children:e.jsxs(yt,{children:[e.jsx(P,{children:e.jsx(z,{type:"text",id:`name-${r}`,name:`foods[${r}].name`,placeholder:"The name of the product or dish",onChange:a.handleChange,value:o.name})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`carbonohidrates-${r}`,name:`foods[${r}].nutrition.carbohydrates`,placeholder:"Carbonoh.",onChange:a.handleChange,value:o.nutrition.carbohydrates})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`protein-${r}`,name:`foods[${r}].nutrition.protein`,placeholder:"Protein",onChange:a.handleChange,value:o.nutrition.protein})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`fat-${r}`,name:`foods[${r}].nutrition.fat`,placeholder:"Fat",onChange:a.handleChange,value:o.nutrition.fat})}),e.jsx(P,{children:e.jsx(z,{type:"number",id:`calories-${r}`,name:`foods[${r}].calories`,placeholder:"Calories",onChange:a.handleChange,value:o.calories})}),e.jsx(wt,{type:"button",onClick:()=>d(r),children:e.jsx("img",{src:ee,alt:"Trash"})})]})},r)),e.jsx(bt,{type:"button",onClick:m,children:"+ Add more"})]}),e.jsxs(jt,{children:[e.jsx(Ct,{type:"button",onClick:i,children:"Cancel"}),e.jsx(vt,{type:"submit",children:"Confirm"})]})]})]})})},N=({title:i,image:n})=>{const[l,p]=g.useState(!1),[c,a]=g.useState(null),h=()=>p(!l),d=()=>{a(null),localStorage.removeItem(`${i}_nutritionInfo`)},m=o=>{a(o),localStorage.setItem(`${i}_nutritionInfo`,JSON.stringify(o)),h()};return g.useEffect(()=>{const o=localStorage.getItem(`${i}_nutritionInfo`);o&&a(JSON.parse(o))},[i]),e.jsxs(qe,{children:[e.jsxs(et,{children:[e.jsx(at,{src:n,alt:"Plate"}),e.jsx(tt,{children:i})]}),!c&&e.jsx(st,{onClick:h,children:"+ Record your meal"}),l&&!c&&e.jsx(kt,{onClose:h,image:n,mealType:i,onRecord:m}),c&&e.jsxs(nt,{children:[e.jsxs(it,{children:["Carbohydrates:",e.jsx(V,{children:c.foods[0].nutrition.carbohydrates})]}),e.jsxs(ot,{children:["Protein: ",e.jsx(V,{children:c.foods[0].nutrition.protein})]}),e.jsxs(rt,{children:["Fat: ",e.jsx(V,{children:c.foods[0].nutrition.fat})]}),e.jsx(lt,{onClick:d,children:e.jsx("img",{src:ee,alt:"trash"})})]})]})},At="/healthy_hub/assets/dinner-image-19c0e7ef.svg",Pt="/healthy_hub/assets/lunch-image-3c133980.svg",zt="/healthy_hub/assets/snack-image-28a6b2cf.svg",It=t.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,Ft=t.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,$t=t.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Bt=t(q)`
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
`,Dt=t.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Nt=()=>e.jsxs(It,{children:[e.jsxs(Ft,{children:[e.jsx($t,{children:"Diary"}),e.jsx(Bt,{to:"/diary",children:"See more"})]}),e.jsxs(Dt,{children:[e.jsx(N,{title:"Breakfast",image:pe}),e.jsx(N,{title:"Lunch",image:Pt}),e.jsx(N,{title:"Dinner",image:At}),e.jsx(N,{title:"Snack",image:zt})]})]}),Wt=Nt,Rt=t.section`
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
`,Et=Rt;function Mt(){const i=G(),n=I(ae);let l=[];return g.useEffect(()=>{i(se())},[i]),n&&(l=n.slice(0,4)),e.jsxs(Et,{children:[e.jsx("h2",{children:"Recommended Food"}),e.jsxs("div",{className:"wrapper",children:[e.jsx("ul",{children:l==null?void 0:l.map(({amount:p,calories:c,img:a,name:h,_id:d})=>e.jsx("li",{children:e.jsxs("div",{className:"description",children:[e.jsx("div",{className:"small_img_div",children:e.jsx("img",{src:a,alt:"",width:46,height:46})}),e.jsxs("section",{children:[e.jsx("h4",{children:h}),e.jsxs("p",{children:[p,e.jsxs("span",{children:[c," calories"]})]})]})]})},d))}),e.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",e.jsx("svg",{className:"svg",children:e.jsx("use",{href:`${b}#icon-arrow-right`})})]})]})]})}const Vt=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function Ot(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"MainPage"}),e.jsx(Ze,{}),e.jsxs(Vt,{children:[e.jsx(Wt,{}),e.jsx(Mt,{})]})]})}export{Ot as default};
