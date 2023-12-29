import{u as l,a as c,h as s,q as h,t as m,v as g,r as w,w as f,j as i,x as u}from"./index-96a574da.js";import{I as j}from"./pageIllustrations-8836ccd8.js";const v=l.div`
  width: 320px;
  margin: 0 auto;

  p {
    color: var(--primary-title-text-color);
    font-size: 14px;
    font-weight: 400;
  }

  h3 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .main_div {
    width: 100%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .img_div {
    max-width: 300px;
    height: 312px;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    max-width: 300px;
    margin-top: 24px;
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

  @media screen and (min-width: 834px) {
    width: calc(834px - (27px * 2));
    margin: 0 auto;

    .img_div {
      width: 100%;
      max-width: 380px;
      height: 396px;
      margin: 0 auto;
    }

    img {
      width: 100%;
    }

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      max-width: 100%;
    }

    ul > li {
      width: 380px;
      height: 86px;
      padding: 20px 160px 20px 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: calc(1440px - 150px - 27px);

    .wrapper {
      display: flex;
      flex-direction: row;
      column-gap: 24px;
      margin-top: 16px;
    }

    .img_div {
      max-width: 536px;
      height: 560px;
      margin-top: 8px;
    }

    ul {
      margin-top: 0;
      width: 676px;
    }

    ul > li {
      width: 328px;
      padding: 20px 108px 20px 24px;
    }
  }
`,_=v;function R(){const t=c(),a=s(h&&m),d=s(g);let e=[];return w.useEffect(()=>{t(f())},[t]),d&&(e=d.slice(0,10)),i.jsx(_,{children:i.jsxs("div",{className:"main_div",children:[i.jsx("h3",{children:"Recommended Food"}),i.jsxs("div",{className:"wrapper",children:[i.jsx("svg",{className:"img_div",children:i.jsx("use",{href:`${j}#icon-recommented-food`})}),a&&i.jsx(u,{}),i.jsx("ul",{children:e==null?void 0:e.map(({amount:p,calories:o,img:x,name:n,_id:r})=>i.jsx("li",{children:i.jsxs("div",{className:"description",children:[i.jsx("div",{className:"small_img_div",children:i.jsx("img",{src:x,alt:"",width:46,height:46})}),i.jsxs("section",{children:[i.jsx("h4",{children:n}),i.jsxs("p",{children:[p,i.jsxs("span",{children:[o," calories"]})]})]})]})},r))})]})]})})}export{R as default};
