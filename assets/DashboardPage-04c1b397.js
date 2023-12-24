import{s as t,v as U,L as N,r as p,j as e,i as w,u as y,w as v}from"./index-81144562.js";import{C as k,a as j,L as D,P as W,b as A,p as C,c as S,i as M,d as z,e as R}from"./index-b020931a.js";const _=t.div`
        display: flex;
        align-items: center;
        max-width: 1372px;
        margin-left: auto;
        margin-right: auto;
`,Y=t.h1`
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
        
`,K=t(N)`
        width: 24px;
        height: 24px;
        display: inline-block;
        cursor: pointer;   
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }     
`,q=t.svg`
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
`,J=t.div`
        display: flex;
        cursor: pointer;
        margin-left: 6px;
        align-items: center;
        position: relative;
`,G=U`
        width: 16px;
        height: 16px;
        fill: transparent;
`,Q=t.svg`
        ${G};
        stroke: var(--primary-text-color);
        transition:
                stroke 0.3s;
        &:hover,
        &:focus {
                stroke: var(--primary-btn-color);
                }
        
`,V=t.svg`
        ${G};
        stroke: var(--primary-btn-color);
        transform: rotate(180deg);
        @media screen and (max-width: 834px) {
                width: 16px;
                height: 16px;
        }
`,X=t.ul`
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

`,Z=t.li`
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
`,ee=t.h3`
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
`,te=({month:a,setMonth:s})=>{const[l,x]=p.useState(null),g=()=>{x(!l)},f=n=>{s(n)},u=()=>e.jsx(K,{to:"/main",children:e.jsx(q,{children:e.jsx("use",{href:`${w}#icon-arrow-right`})})}),c=()=>e.jsxs(J,{onClick:g,children:[e.jsx(Y,{children:"Months"}),l?e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("use",{href:`${w}#icon-arrow-down`})}),e.jsx(r,{onChooseOfMonth:f})]}):e.jsx(Q,{children:e.jsx("use",{href:`${w}#icon-arrow-down`})})]}),m=()=>{const n=new Date,d=n.getMonth()-1,o=n.getMonth(),h=new Date(n.getFullYear(),d,1).toLocaleString("en-US",{month:"long"}),b=new Date(n.getFullYear(),o,1).toLocaleString("en-US",{month:"long"});return[h,b]},i=()=>{const n=new Date().getMonth()+1;return s(n)};p.useEffect(()=>{a||i()},[a]);const r=({onChooseOfMonth:n})=>e.jsx(X,{children:m().map(d=>e.jsx(Z,{onClick:()=>n(new Date(`${d} 1, 2000`).getMonth()+1),children:d},d))});return e.jsxs(_,{children:[e.jsx(u,{}),e.jsx(c,{}),a&&e.jsx(ee,{children:new Date(2e3,a-1,1).toLocaleString("en-US",{month:"long"})})]})},ne=t.div`
    @media screen and (max-width: 834px) {
        overflow:auto;
        
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
`,re=t.div`
    background: var(--layout-color);
    border-radius: 12px;
    
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        /* padding-bottom: 44px;
        padding: 24px 21px 36px; */
    }
    
    @media screen and (max-width: 834px){
        margin-bottom: 8px;
        padding:0px;
        background-color: transparent;
    }
    
`;t.div`
    margin-top: 16px;
    width: 676px;
`;const ie=t.div`
    margin-top: 16px;
    @media screen and (min-width: 1440px){
        width: 676px;
    }
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        margin-top: 40px;
    }
    @media screen and (max-width: 834px) {
        margin-top: 27px;
    }
`,ae=t.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    justify-content: space-between;
`,oe=t.h2`
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;  
    margin-right: 40px;
    @media screen and (max-width: 834px) {
        /* margin-right: 77px; */
        font-size: 18px;
        line-height: 26px;
    }
`,O=t.div`
    display: flex;
`,se=t.div`
    border-radius: 12px;
    background:var(--layout-color);
    padding-left: 15px;
    padding-top: 25px;
    padding-right: 15px;
    padding-bottom: 25px;
    /* width: 676px;
    height: 382px; */
    min-width: 676px;
    min-height: 382px;
    flex-shrink: 0;
`,B=t.p`
    color:var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    margin-right: 8px;
`,L=t.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`,le=({month:a})=>{const[s,l]=p.useState([]),x=y();p.useEffect(()=>{a!==null&&(async r=>{try{const n=await x(v(r));l(n.payload)}catch(n){console.error("Error fetching data:",n)}})(a)},[a]),k.register(j,D,W,A,C,S,M,z);const g=i=>{let r;return i!==new Date().getMonth()?r=new Date().getDate():r=new Date(2023,i,0).getDate(),Array.from({length:r},(d,o)=>(o+1).toString())},f=i=>{if(Object.keys(s).length){const r=s.waterPerDay.find(n=>i===n.day.toString());return r?r.ml:0}return 0},u={responsive:!0,maintainAspectRatio:!1,scales:{y:{min:0,max:3e3,grid:{color:"#292928"},gridLines:{display:!1,color:"#B6B6B6"},ticks:{stepSize:1e3,color:"#B6B6B6",callback:function(i){return String(i).length===1?i:String(i).slice(0,1)+"L"}}},x:{grid:{color:"#292928"},ticks:{color:"#B6B6B6"},scales:{x:{min:0,max:10}}}},plugins:{legend:{display:!1},tooltip:{cornerRadius:8,caretSize:0,padding:10,borderColor:"rgba(227, 255, 168, 0.1)",borderWidth:3,backgroundColor:"#0f0f0f",titleFont:{weight:"bold",size:32,color:"white"},displayColors:!1,yAlign:"bottom",xAlign:"auto",bodyFont:{size:32},footerFont:{size:16},footerAlign:"center",labelAlign:"center",callbacks:{title:()=>null,label:i=>i.raw,footer:()=>"milliliters"}}}},c=g(a),m={labels:c,datasets:[{label:"Water",fill:!1,showLine:!0,borderColor:"#e3ffa8",borderWidth:1,tension:.4,pointRadius:0,pointBorderColor:"#e3ffa8",pointHoverRadius:3,pointHitRadius:12,pointBackgroundColor:"#e3ffa8",data:c.map(i=>f(i))}]};return e.jsxs(ie,{children:[e.jsxs(ae,{children:[e.jsx(oe,{children:"Water"}),s.avgWater?e.jsxs(O,{children:[e.jsx(B,{children:"Average value:"}),e.jsxs(L,{children:[s.avgWater,"ml"]})]}):e.jsxs(O,{children:[e.jsx(B,{children:"Average value:"}),e.jsx(L,{children:"no added data yet"})]})]}),e.jsx(ne,{children:e.jsx(re,{children:e.jsx(se,{children:e.jsx(R,{options:u,data:m})})})})]})},de=t.div`
    @media screen and (max-width: 834px) {
        overflow:auto;
        
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
    
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        /* padding-bottom: 44px; */
        /* padding: 24px 21px 36px; */
    }
    
    @media screen and (max-width: 834px){
        margin-bottom: 8px;
        padding:0px;
        background-color: transparent;
    }
    
`,ce=t.div`
    margin-top: 16px;
    /* width: 676px; */
    @media screen and (min-width: 1440px){
        width: 676px;
    }
`,he=t.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    justify-content: space-between;
`,xe=t.h2`
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;  
    margin-right: 40px;
    @media screen and (max-width: 834px) {
        /* margin-right: 77px; */
        font-size: 18px;
        line-height: 26px;
    }
`,H=t.div`
    display: flex;
`,ge=t.div`
    border-radius: 12px;
    background:var(--layout-color);
    padding-left: 15px;
    padding-top: 25px;
    padding-right: 15px;
    padding-bottom: 25px;
    min-width: 676px;
    min-height: 382px;
    /* width: 676px; */
    /* height: 382px; */
    flex-shrink: 0;
    /* width: 320px; */
    /* max-width: 320px; */
`,T=t.p`
    color:var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    margin-right: 8px;
`,I=t.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`,fe=({month:a})=>{const[s,l]=p.useState([]),x=y();p.useEffect(()=>{a!==null&&(async r=>{try{const n=await x(v(r));l(n.payload)}catch(n){console.error("Error fetching data:",n)}})(a)},[a]),k.register(j,D,W,A,C,S,M,z);const g=i=>{let r;return i!==new Date().getMonth()?r=new Date().getDate():r=new Date(2023,i,0).getDate(),Array.from({length:r},(d,o)=>(o+1).toString())},f=i=>{if(Object.keys(s).length.length){const r=s.callPerDay.find(n=>i===n.day.toString());return r?r.calories:0}return 0},u={maintainAspectRatio:!1,responsive:!0,scales:{y:{min:0,max:3e3,grid:{color:"#292928"},gridLines:{display:!1,color:"#B6B6B6"},ticks:{stepSize:1e3,color:"#B6B6B6",callback:function(i){return String(i).length===1?i:String(i).slice(0,1)+"K"}}},x:{grid:{color:"#292928"},ticks:{color:"#B6B6B6"},scales:{x:{min:0,max:10}}}},plugins:{legend:{display:!1},tooltip:{cornerRadius:8,caretSize:0,padding:10,borderColor:"rgba(227, 255, 168, 0.1)",borderWidth:3,backgroundColor:"#0f0f0f",titleFont:{weight:"bold",size:32,color:"white"},displayColors:!1,yAlign:"bottom",xAlign:"auto",bodyFont:{size:32},footerFont:{size:16},footerAlign:"center",labelAlign:"center",callbacks:{title:()=>null,label:i=>i.raw,footer:()=>"calories"}}}},c=g(a),m={labels:c,datasets:[{label:"Calories",fill:!1,showLine:!0,borderColor:"#e3ffa8",borderWidth:1,tension:.4,pointRadius:0,pointBorderColor:"#e3ffa8",pointHoverRadius:3,pointHitRadius:12,pointBackgroundColor:"#e3ffa8",data:c.map(i=>f(i))}]};return e.jsxs(ce,{children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Calories"}),s.avgCalories?e.jsxs(H,{children:[e.jsx(T,{children:"Average value:"}),e.jsxs(I,{children:[s.avgCalories,"cal"]})]}):e.jsxs(H,{children:[e.jsx(T,{children:"Average value:"}),e.jsx(I,{children:"no added data yet"})]})]}),e.jsx(de,{children:e.jsx(pe,{children:e.jsx(ge,{children:e.jsx(R,{options:u,data:m})})})})]})},me=t.div`
    @media screen and (max-width: 834px) {
        overflow:auto;
        
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
`,ue=t.div`
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
    
`,be=t.div`
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
   
`,E=t.div`
    display: flex;
`,$=t.p`
    color:var(--primary-title-text-color);
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

`,ye=t.div`
    background: var(--layout-color);
    padding: 24px 21px 36px;
    border-radius: 12px;
    
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        padding-bottom: 44px;
    }
    
    @media screen and (max-width: 834px){
        margin-bottom: 8px;
        padding:0px;
        background-color: transparent;
        /* padding-bottom: 36px; */
        /* display: flex;
        padding: 10px 0;
        width: 100%;

        ::-webkit-scrollbar {
            height: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        } */
        
            /* ::-webkit-scrollbar {
                width: 12px;
                background-color: red;
            }

            ::-webkit-scrollbar-thumb {
                background-color: red;
                border-radius: 6px;
            }

            ::-webkit-scrollbar-track {
                background-color: red;
            }
         */
    }
`,ve=t.div`
    border-radius: 12px;
    display: flex;
    gap: 6px;
    flex-shrink: 0;
    flex-direction: column;
    @media screen and (min-width: 834px) and (max-width: 1439px) {
    }
    @media screen and (max-width: 834px){
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
`,je=t.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`,De=t.li`
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
        line-height: 16px
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

`,Ae=({month:a})=>{const s=y(),[l,x]=p.useState({}),[g,f]=p.useState([]);p.useEffect(()=>{(async()=>{if(a!==null)try{const n=await s(v(a));x(n.payload)}catch(n){console.error("Error fetching data:",n)}})()},[a]),p.useEffect(()=>{if(Object.keys(l).length){const r=d=>{if(l.weightPerDay.length!==0){const o=l.weightPerDay.find(h=>d+1===h.day);return o?o.weight:0}else return 0};(()=>{const d=c.length,o=[];for(let h=0;h<d;h+=1)if(r(h)!==0){const b=r(h);b?o.push(b):o.push(0)}else{const b=o.length-1,P=o[b];o.length!==0&&P!==0?o.push(P):o.push(0)}f(o)})()}},[l]),k.register(j,D,W,A,C,S,M,z);const c=(r=>{let n;return r!==new Date().getMonth()?n=new Date().getDate():n=new Date(2023,r,0).getDate(),Array.from({length:n},(o,h)=>(h+1).toString())})(a),m=()=>c.length!==0?e.jsx(je,{children:c.map(r=>e.jsx(We,{children:r},r))}):null,i=()=>{const r=g;return r.length!==0?e.jsx(ke,{children:r.map(n=>e.jsx(De,{children:n},Math.random()))}):e.jsx("div",{})};return e.jsxs(ue,{children:[e.jsxs(be,{children:[e.jsx(we,{children:"Weight"}),l.avgWeight?e.jsxs(E,{children:[e.jsx($,{children:"Average value:"}),e.jsxs(F,{children:[l.avgWeight,"kg"]})]}):e.jsxs(E,{children:[e.jsx($,{children:"Average value:"}),e.jsx(F,{children:"no added data yet"})]})]}),e.jsx(me,{children:e.jsx(ye,{children:e.jsxs(ve,{children:[i(),m()]})})})]})},Ce=t.div`
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
`,Me=t.div`
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
`;function Oe(){const[a,s]=p.useState(null),[l,x]=p.useState([]);return e.jsx(Ce,{children:e.jsxs(Se,{children:[e.jsx(te,{month:a,setMonth:s}),e.jsxs(Me,{children:[e.jsx(fe,{month:a}),e.jsx(le,{month:a,dateOfMonths:l,setDateOfMonths:x})]}),e.jsx(Ae,{month:a})]})})}export{Oe as default};
