import{s as t,v as U,L as _,r as c,j as e,i as v,u as k,w as j}from"./index-adf44996.js";import{C as D,a as M,L as W,P as A,b as C,p as S,c as O,i as z,d as P,e as $}from"./index-4b958f22.js";const Y=t.div`
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
`,ne=({month:i,setMonth:s})=>{const[l,h]=c.useState(null),m=()=>{h(!l)},u=a=>{s(a)},f=()=>e.jsx(q,{to:"/main",children:e.jsx(J,{children:e.jsx("use",{href:`${v}#icon-arrow-right`})})}),x=()=>e.jsxs(Q,{onClick:m,children:[e.jsx(K,{children:"Months"}),l?e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx("use",{href:`${v}#icon-arrow-down`})}),e.jsx(d,{onChooseOfMonth:u})]}):e.jsx(V,{children:e.jsx("use",{href:`${v}#icon-arrow-down`})})]}),g=()=>{const a=new Date,p=a.getMonth()-1,n=a.getMonth(),r=new Date(a.getFullYear(),p,1).toLocaleString("en-US",{month:"long"}),o=new Date(a.getFullYear(),n,1).toLocaleString("en-US",{month:"long"});return[r,o]},b=()=>{const a=new Date().getMonth()+1;return s(a)};c.useEffect(()=>{i||b()},[i]);const d=({onChooseOfMonth:a})=>e.jsx(Z,{children:g().map(p=>e.jsx(ee,{onClick:()=>a(new Date(`${p} 1, 2000`).getMonth()+1),children:p},p))});return e.jsxs(Y,{children:[e.jsx(f,{}),e.jsx(x,{}),i&&e.jsx(te,{children:new Date(2e3,i-1,1).toLocaleString("en-US",{month:"long"})})]})},re=t.div`
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
`,ae=t.div`
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
        /* margin-right: 77px; */
        font-size: 18px;
        line-height: 26px;
    }
`,B=t.div`
    display: flex;
`,de=t.div`
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
`,L=t.p`
    color:var(--primary-title-text-color);
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
`,le=({month:i})=>{const[s,l]=c.useState([]),h=k();c.useEffect(()=>{i!==null&&(async r=>{try{const o=await h(j(r));l(o.payload)}catch(o){console.error("Error fetching data:",o)}})(i)},[i]),D.register(M,W,A,C,S,O,z,P);const m=n=>{let r;return n!==new Date().getMonth()?r=new Date().getDate():r=new Date(2023,n,0).getDate(),Array.from({length:r},(w,y)=>(y+1).toString())},u=n=>{if(Object.keys(s).length){const r=s.waterPerDay.find(o=>n===o.day.toString());return r?r.ml:0}return 0},f=m(i),x=f.map(n=>u(n)),g=Math.max(...x),b=()=>x,a={responsive:!0,maintainAspectRatio:!1,scales:{y:{min:0,max:(()=>g<3e3?3e3:Math.ceil(g/1e3)*1e3)(),grid:{color:"#292928"},gridLines:{display:!1,color:"#B6B6B6"},ticks:{stepSize:1e3,color:"#B6B6B6",callback:function(n){return String(n).length===1?n:String(n/1e3)+"L"}}},x:{grid:{color:"#292928"},ticks:{color:"#B6B6B6"},scales:{x:{min:0,max:100}}}},plugins:{legend:{display:!1},tooltip:{cornerRadius:8,caretSize:0,padding:10,borderColor:"rgba(227, 255, 168, 0.1)",borderWidth:3,backgroundColor:"#0f0f0f",titleFont:{weight:"bold",size:32,color:"white"},displayColors:!1,yAlign:"bottom",xAlign:"auto",bodyFont:{size:32},footerFont:{size:16},footerAlign:"center",labelAlign:"center",callbacks:{title:()=>null,label:n=>n.raw,footer:()=>"milliliters"}}}},p={labels:f,datasets:[{label:"Water",fill:!1,showLine:!0,borderColor:"#e3ffa8",borderWidth:1,tension:.4,pointRadius:0,pointBorderColor:"#e3ffa8",pointHoverRadius:3,pointHitRadius:12,pointBackgroundColor:"#e3ffa8",data:b()}]};return e.jsxs(ie,{children:[e.jsxs(oe,{children:[e.jsx(se,{children:"Water"}),s.avgWater?e.jsxs(B,{children:[e.jsx(L,{children:"Average value:"}),e.jsxs(G,{children:[s.avgWater.toFixed(0),"ml"]})]}):e.jsxs(B,{children:[e.jsx(L,{children:"Average value:"}),e.jsx(G,{children:"no added data yet"})]})]}),e.jsx(re,{children:e.jsx(ae,{children:e.jsx(de,{children:e.jsx($,{options:a,data:p})})})})]})},pe=t.div`
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
`,ce=t.div`
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
    
`,xe=t.div`
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
`,ge=t.h2`
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
`,fe=t.div`
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
`,F=t.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`,me=({month:i})=>{const[s,l]=c.useState([]),h=k();c.useEffect(()=>{i!==null&&(async r=>{try{const o=await h(j(r));l(o.payload)}catch(o){console.error("Error fetching data:",o)}})(i)},[i]),D.register(M,W,A,C,S,O,z,P);const m=n=>{let r;return n!==new Date().getMonth()?r=new Date().getDate():r=new Date(2023,n,0).getDate(),Array.from({length:r},(w,y)=>(y+1).toString())},u=n=>{if(Object.keys(s).length){const r=s.callPerDay.find(o=>n===o.day.toString());return r?r.calories:0}return 0},f=m(i),x=f.map(n=>u(n)),g=Math.max(...x),b=()=>x,a={maintainAspectRatio:!1,responsive:!0,scales:{y:{min:0,max:(()=>g<3e3?3e3:Math.ceil(g/1e3)*1e3)(),grid:{color:"#292928"},gridLines:{display:!1,color:"#B6B6B6"},ticks:{stepSize:1e3,color:"#B6B6B6",callback:function(n){return String(n).length===1?n:String(n/1e3)+"K"}}},x:{grid:{color:"#292928"},ticks:{color:"#B6B6B6"},scales:{x:{min:0,max:100}}}},plugins:{legend:{display:!1},tooltip:{cornerRadius:8,caretSize:0,padding:10,borderColor:"rgba(227, 255, 168, 0.1)",borderWidth:3,backgroundColor:"#0f0f0f",titleFont:{weight:"bold",size:32,color:"white"},displayColors:!1,yAlign:"bottom",xAlign:"auto",bodyFont:{size:32},footerFont:{size:16},footerAlign:"center",labelAlign:"center",callbacks:{title:()=>null,label:n=>n.raw,footer:()=>"calories"}}}},p={labels:f,datasets:[{label:"Calories",fill:!1,showLine:!0,borderColor:"#e3ffa8",borderWidth:1,tension:.4,pointRadius:0,pointBorderColor:"#e3ffa8",pointHoverRadius:3,pointHitRadius:12,pointBackgroundColor:"#e3ffa8",data:b()}]};return e.jsxs(xe,{children:[e.jsxs(he,{children:[e.jsx(ge,{children:"Calories"}),s.avgCalories?e.jsxs(H,{children:[e.jsx(T,{children:"Average value:"}),e.jsxs(F,{children:[s.avgCalories.toFixed(0),"cal"]})]}):e.jsxs(H,{children:[e.jsx(T,{children:"Average value:"}),e.jsx(F,{children:"no added data yet"})]})]}),e.jsx(pe,{children:e.jsx(ce,{children:e.jsx(fe,{children:e.jsx($,{options:a,data:p})})})})]})},ue=t.div`
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
    
`,we=t.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    justify-content: space-between;
`,ye=t.h2`
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
    color:var(--primary-title-text-color);
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
`,ke=t.div`
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
`,je=t.ul`
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

`,Ae=({month:i})=>{const s=k(),[l,h]=c.useState({}),[m,u]=c.useState([]);c.useEffect(()=>{(async()=>{if(i!==null)try{const a=await s(j(i));h(a.payload)}catch(a){console.error("Error fetching data:",a)}})()},[i]),c.useEffect(()=>{if(Object.keys(l).length){const d=p=>{if(l.weightPerDay.length!==0){const n=l.weightPerDay.find(r=>p+1===r.day);return n?n.weight:0}else return 0};(()=>{const p=x.length,n=[];for(let r=0;r<p;r+=1)if(d(r)!==0){const o=d(r);o?n.push(o):n.push(0)}else{const o=n.length-1,w=n[o];n.length!==0&&w!==0?n.push(w):n.push(0)}u(n)})()}},[l]),D.register(M,W,A,C,S,O,z,P);const x=(d=>{let a;return d!==new Date().getMonth()?a=new Date().getDate():a=new Date(2023,d,0).getDate(),Array.from({length:a},(n,r)=>(r+1).toString())})(i),g=()=>x.length!==0?e.jsx(De,{children:x.map(d=>e.jsx(We,{children:d},d))}):null,b=()=>{const d=m;return d.length!==0?e.jsx(je,{children:d.map(a=>e.jsx(Me,{children:a},Math.random()))}):e.jsx("div",{})};return e.jsxs(be,{children:[e.jsxs(we,{children:[e.jsx(ye,{children:"Weight"}),l.avgWeight?e.jsxs(N,{children:[e.jsx(I,{children:"Average value:"}),e.jsxs(E,{children:[l.avgWeight.toFixed(0),"kg"]})]}):e.jsxs(N,{children:[e.jsx(I,{children:"Average value:"}),e.jsx(E,{children:"no added data yet"})]})]}),e.jsx(ue,{children:e.jsx(ve,{children:e.jsxs(ke,{children:[b(),g()]})})})]})},Ce=t.div`
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
`;function Be(){const[i,s]=c.useState(null),[l,h]=c.useState([]);return e.jsx(Ce,{children:e.jsxs(Se,{children:[e.jsx(ne,{month:i,setMonth:s}),e.jsxs(Oe,{children:[e.jsx(me,{month:i}),e.jsx(le,{month:i,dateOfMonths:l,setDateOfMonths:h})]}),e.jsx(Ae,{month:i})]})})}export{Be as default};
