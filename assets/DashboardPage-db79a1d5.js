import{u as t,y as U,L as _,r as p,j as e,i as v,a as j,z as k}from"./index-96a574da.js";import{C as D,a as M,L as W,P as A,b as C,p as S,c as O,i as z,d as P,e as $}from"./index-550a4179.js";const Y=t.div`
        display: flex;
        align-items: center;
        max-width: 1372px;
        margin-left: auto;
        margin-right: auto;
`,K=t.h1`
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 36px;
        margin-right: 12px;
        @media screen and (max-width: 834px) {
                font-size: 24px;
                font-weight: 500;
                line-height: 30px;
        }
        
`,q=t(_)`
        width: 24px;
        height: 24px;
        display: inline-block;
        cursor: pointer;   
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }     
`,J=t.svg`
        width: 24px;
        height: 24px;
        stroke: var(--primary-text-color);
        fill:transparent;
        transform: rotate(180deg);
        transition:
                stroke 0.3s;
        &:hover,
        &:focus {
                stroke: var(--primary-btn-color);
        }
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }
`,Q=t.div`
        display: flex;
        cursor: pointer;
        margin-left: 6px;
        align-items: center;
        position: relative;
`,R=U`
        width: 16px;
        height: 16px;
        fill: transparent;
`,V=t.svg`
        ${R};
        stroke: var(--primary-text-color);
        transition:
                stroke 0.3s;
        &:hover,
        &:focus {
                stroke: var(--primary-btn-color);
                }
        
`,X=t.svg`
        ${R};
        stroke: var(--primary-btn-color);
        transform: rotate(180deg);
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }
`,Z=t.ul`
        width: 212px;
        flex-shrink: 0;
        border-radius: 12px;
        background: rgba(15, 15, 15, 1);
        box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);
        position: absolute;
        top: 100%;
        margin-top: 4px;
        z-index: 1;
        box-sizing: border-box;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        gap: 4px;

`,ee=t.li`
        padding-left: 16px;
        padding-top: 2px;
        padding-bottom: 2px;
        background-color: transparent;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        transition:
                background-color 0.3s,
                color 0.3s;
                
        &:hover,
        &:focus {
                color: var(--primary-btn-color);
                background:  rgba(255, 255, 255, 0.03);
                }
`,te=t.h3`
        text-align: right;
        display: flex;
        margin-left: auto;
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        @media screen and (max-width: 834px) {
                font-size: 16px;
                line-height: 22px;     
        }
`,ne=({month:i,setMonth:s})=>{const[d,x]=p.useState(null),m=()=>{x(!d)},u=a=>{s(a)},f=()=>e.jsx(q,{to:"/main",children:e.jsx(J,{children:e.jsx("use",{href:`${v}#icon-arrow-right`})})}),h=()=>e.jsxs(Q,{onClick:m,children:[e.jsx(K,{children:"Months"}),d?e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("use",{href:`${v}#icon-arrow-down`})}),e.jsx(l,{onChooseOfMonth:u})]}):e.jsx(V,{children:e.jsx("use",{href:`${v}#icon-arrow-down`})})]}),g=()=>{const a=new Date,c=a.getMonth()-1,n=a.getMonth(),r=new Date(a.getFullYear(),c,1).toLocaleString("en-US",{month:"long"}),o=new Date(a.getFullYear(),n,1).toLocaleString("en-US",{month:"long"});return[r,o]},b=()=>{const a=new Date().getMonth()+1;return s(a)};p.useEffect(()=>{i||b()},[i]);const l=({onChooseOfMonth:a})=>e.jsx(Z,{children:g().map(c=>e.jsx(ee,{onClick:()=>a(new Date(`${c} 1, 2000`).getMonth()+1),children:c},c))});return e.jsxs(Y,{children:[e.jsx(f,{}),e.jsx(h,{}),i&&e.jsx(te,{children:new Date(2e3,i-1,1).toLocaleString("en-US",{month:"long"})})]})},re=t.div`
  @media screen and (max-width: 834px) {
    overflow: auto;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(15, 15, 15, 1);
    }
  }
`,ae=t.div`
  background: var(--layout-color);
  border-radius: 12px;

  @media screen and (max-width: 834px) {
    margin-bottom: 8px;
    padding: 0px;
    background-color: transparent;
  }
`;t.div`
  margin-top: 16px;
  width: 676px;
`;const ie=t.div`
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    width: 676px;
  }
  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 834px) {
    margin-top: 27px;
  }
`,oe=t.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 6px;
  justify-content: space-between;
`,se=t.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-right: 40px;
  @media screen and (max-width: 834px) {
    font-size: 18px;
    line-height: 26px;
  }
`,B=t.div`
  display: flex;
`,le=t.div`
  border-radius: 12px;
  background: var(--layout-color);
  padding-left: 15px;
  padding-top: 25px;
  padding-right: 15px;
  padding-bottom: 25px;
  min-width: 676px;
  min-height: 382px;
  flex-shrink: 0;
`,L=t.p`
  color: var(--primary-title-text-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-right: 8px;
`,G=t.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,de=({month:i})=>{const[s,d]=p.useState([]),x=j();p.useEffect(()=>{i!==null&&(async r=>{try{const o=await x(k(r));d(o.payload)}catch(o){console.error("Error fetching data:",o)}})(i)},[i]),D.register(M,W,A,C,S,O,z,P);const m=n=>{let r;return n!==new Date().getMonth()?r=new Date().getDate():r=new Date(2023,n,0).getDate(),Array.from({length:r},(y,w)=>(w+1).toString())},u=n=>{if(Object.keys(s).length){const r=s.waterPerDay.find(o=>n===o.day.toString());return r?r.ml:0}return 0},f=m(i),h=f.map(n=>u(n)),g=Math.max(...h),b=()=>h,a={responsive:!0,maintainAspectRatio:!1,scales:{y:{min:0,max:(()=>g<3e3?3e3:Math.ceil(g/1e3)*1e3)(),grid:{color:"#292928"},gridLines:{display:!1,color:"#B6B6B6"},ticks:{stepSize:1e3,color:"#B6B6B6",callback:function(n){return String(n).length===1?n:String(n/1e3)+"L"}}},x:{grid:{color:"#292928"},ticks:{color:"#B6B6B6"},scales:{x:{min:0,max:100}}}},plugins:{legend:{display:!1},tooltip:{cornerRadius:8,caretSize:0,padding:10,borderColor:"rgba(227, 255, 168, 0.1)",borderWidth:3,backgroundColor:"#0f0f0f",titleFont:{weight:"bold",size:32,color:"white"},displayColors:!1,yAlign:"bottom",xAlign:"auto",bodyFont:{size:32},footerFont:{size:16},footerAlign:"center",labelAlign:"center",callbacks:{title:()=>null,label:n=>n.raw,footer:()=>"milliliters"}}}},c={labels:f,datasets:[{label:"Water",fill:!1,showLine:!0,borderColor:"#e3ffa8",borderWidth:1,tension:.4,pointRadius:0,pointBorderColor:"#e3ffa8",pointHoverRadius:3,pointHitRadius:12,pointBackgroundColor:"#e3ffa8",data:b()}]};return e.jsxs(ie,{children:[e.jsxs(oe,{children:[e.jsx(se,{children:"Water"}),s.avgWater?e.jsxs(B,{children:[e.jsx(L,{children:"Average value:"}),e.jsxs(G,{children:[s.avgWater.toFixed(0),"ml"]})]}):e.jsxs(B,{children:[e.jsx(L,{children:"Average value:"}),e.jsx(G,{children:"no added data yet"})]})]}),e.jsx(re,{children:e.jsx(ae,{children:e.jsx(le,{children:e.jsx($,{options:a,data:c})})})})]})},ce=t.div`
  @media screen and (max-width: 834px) {
    overflow: auto;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(15, 15, 15, 1);
    }
  }
`,pe=t.div`
  background: var(--layout-color);
  border-radius: 12px;

  @media screen and (max-width: 834px) {
    margin-bottom: 8px;
    padding: 0px;
    background-color: transparent;
  }
`,he=t.div`
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`,xe=t.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 6px;
  justify-content: space-between;
`,ge=t.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-right: 40px;
  @media screen and (max-width: 834px) {
    font-size: 18px;
    line-height: 26px;
  }
`,H=t.div`
  display: flex;
`,fe=t.div`
  border-radius: 12px;
  background: var(--layout-color);
  padding-left: 15px;
  padding-top: 25px;
  padding-right: 15px;
  padding-bottom: 25px;
  min-width: 676px;
  min-height: 382px;
  flex-shrink: 0;
`,T=t.p`
  color: var(--primary-title-text-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-right: 8px;
`,F=t.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,me=({month:i})=>{const[s,d]=p.useState([]),x=j();p.useEffect(()=>{i!==null&&(async r=>{try{const o=await x(k(r));d(o.payload)}catch(o){console.error("Error fetching data:",o)}})(i)},[i,x]),D.register(M,W,A,C,S,O,z,P);const m=n=>{let r;return n!==new Date().getMonth()?r=new Date().getDate():r=new Date(2023,n,0).getDate(),Array.from({length:r},(y,w)=>(w+1).toString())},u=n=>{if(Object.keys(s).length){const r=s.callPerDay.find(o=>n===o.day.toString());return r?r.calories:0}return 0},f=m(i),h=f.map(n=>u(n)),g=Math.max(...h),b=()=>h,a={maintainAspectRatio:!1,responsive:!0,scales:{y:{min:0,max:(()=>g<3e3?3e3:Math.ceil(g/1e3)*1e3)(),grid:{color:"#292928"},gridLines:{display:!1,color:"#B6B6B6"},ticks:{stepSize:1e3,color:"#B6B6B6",callback:function(n){return String(n).length===1?n:String(n/1e3)+"K"}}},x:{grid:{color:"#292928"},ticks:{color:"#B6B6B6"},scales:{x:{min:0,max:100}}}},plugins:{legend:{display:!1},tooltip:{cornerRadius:8,caretSize:0,padding:10,borderColor:"rgba(227, 255, 168, 0.1)",borderWidth:3,backgroundColor:"#0f0f0f",titleFont:{weight:"bold",size:32,color:"white"},displayColors:!1,yAlign:"bottom",xAlign:"auto",bodyFont:{size:32},footerFont:{size:16},footerAlign:"center",labelAlign:"center",callbacks:{title:()=>null,label:n=>n.raw,footer:()=>"calories"}}}},c={labels:f,datasets:[{label:"Calories",fill:!1,showLine:!0,borderColor:"#e3ffa8",borderWidth:1,tension:.4,pointRadius:0,pointBorderColor:"#e3ffa8",pointHoverRadius:3,pointHitRadius:12,pointBackgroundColor:"#e3ffa8",data:b()}]};return e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsx(ge,{children:"Calories"}),s.avgCalories?e.jsxs(H,{children:[e.jsx(T,{children:"Average value:"}),e.jsxs(F,{children:[s.avgCalories.toFixed(0),"cal"]})]}):e.jsxs(H,{children:[e.jsx(T,{children:"Average value:"}),e.jsx(F,{children:"no added data yet"})]})]}),e.jsx(ce,{children:e.jsx(pe,{children:e.jsx(fe,{children:e.jsx($,{options:a,data:c})})})})]})},ue=t.div`
  @media screen and (max-width: 834px) {
    overflow: auto;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(15, 15, 15, 1);
    }
  }
`,be=t.div`
  margin-bottom: 30px;
  margin-top: 6px;
  max-width: 1372px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 834px) and (max-width: 1439px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 834px) {
    margin-top: 20px;
  }
`,ye=t.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 6px;
  justify-content: space-between;
`,we=t.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-right: 40px;
  @media screen and (max-width: 834px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  }
`,N=t.div`
  display: flex;
`,I=t.p`
  color: var(--primary-title-text-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-right: 8px;
`,E=t.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,ve=t.div`
  background: var(--layout-color);
  padding: 24px 21px 36px;
  border-radius: 12px;

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    padding-bottom: 44px;
  }

  @media screen and (max-width: 834px) {
    margin-bottom: 8px;
    padding: 0px;
    background-color: transparent;
  }
`,je=t.div`
  border-radius: 12px;
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  flex-direction: column;
  @media screen and (min-width: 834px) and (max-width: 1439px) {
  }
  @media screen and (max-width: 834px) {
    border-radius: 12px;

    min-width: 834px;
    width: 1372px;
    gap: 16px;
    padding: 24px 21px 36px;
    background: var(--layout-color);
  }
`,ke=t.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`,De=t.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`,Me=t.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-title-text-color);
  @media screen and (min-width: 834px) and (max-width: 1439px) {
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  @media screen and (max-width: 834px) {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,We=t.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  width: 14px;
  height: 14px;
`,Ae=({month:i})=>{const s=j(),[d,x]=p.useState({}),[m,u]=p.useState([]);p.useEffect(()=>{(async()=>{if(i!==null)try{const a=await s(k(i));x(a.payload)}catch(a){console.error("Error fetching data:",a)}})()},[i]),p.useEffect(()=>{if(Object.keys(d).length){const l=c=>{if(d.weightPerDay.length!==0){const n=d.weightPerDay.find(r=>c+1===r.day);return n?n.weight:0}else return 0};(()=>{const c=h.length,n=[];for(let r=0;r<c;r+=1)if(l(r)!==0){const o=l(r);o?n.push(o):n.push(0)}else{const o=n.length-1,y=n[o];n.length!==0&&y!==0?n.push(y):n.push(0)}u(n)})()}},[d]),D.register(M,W,A,C,S,O,z,P);const h=(l=>{let a;return l!==new Date().getMonth()?a=new Date().getDate():a=new Date(2023,l,0).getDate(),Array.from({length:a},(n,r)=>(r+1).toString())})(i),g=()=>h.length!==0?e.jsx(De,{children:h.map(l=>e.jsx(We,{children:l},l))}):null,b=()=>{const l=m;return l.length!==0?e.jsx(ke,{children:l.map(a=>e.jsx(Me,{children:a},Math.random()))}):e.jsx("div",{})};return e.jsxs(be,{children:[e.jsxs(ye,{children:[e.jsx(we,{children:"Weight"}),d.avgWeight?e.jsxs(N,{children:[e.jsx(I,{children:"Average value:"}),e.jsxs(E,{children:[d.avgWeight.toFixed(0),"kg"]})]}):e.jsxs(N,{children:[e.jsx(I,{children:"Average value:"}),e.jsx(E,{children:"no added data yet"})]})]}),e.jsx(ue,{children:e.jsx(ve,{children:e.jsxs(je,{children:[b(),g()]})})})]})},Ce=t.div`
    @media screen and (max-width: 1439px) {
        display: flex;
        justify-content: center;
    } 
    
`,Se=t.div`
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        width: 780px;
    }
    @media screen and (max-width: 834px) {
        width: 320px;
        overflow: hidden;
    } 
`,Oe=t.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        flex-direction: column;
        gap: 0px;
    }
    @media screen and (max-width: 834px) {
        flex-direction: column;
        gap: 0px;
    }
`;function Be(){const[i,s]=p.useState(null),[d,x]=p.useState([]);return e.jsx(Ce,{children:e.jsxs(Se,{children:[e.jsx(ne,{month:i,setMonth:s}),e.jsxs(Oe,{children:[e.jsx(me,{month:i}),e.jsx(de,{month:i,dateOfMonths:d,setDateOfMonths:x})]}),e.jsx(Ae,{month:i})]})})}export{Be as default};
