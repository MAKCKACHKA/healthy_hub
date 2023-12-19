import{s as n,j as i}from"./index-543fdb1c.js";import{I as r}from"./pageIllustrations-83d5f794.js";const s=n.div`
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
      /* margin: 0 auto; */
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
`,l=s;function c(){const e=[1,2,3,4,5,6,7,8,9,10],t={carbohydrates:14,protein:.3,fat:.2,name:"Apples",amount:"100 g",img:"https://ftp.goit.study/img/you_health/Apples.png",calories:52},{name:d,amount:p,img:a,calories:o}=t;return i.jsx(l,{children:i.jsxs("div",{className:"main_div",children:[i.jsx("h3",{children:"Recommended Food"}),i.jsxs("div",{className:"wrapper",children:[i.jsx("svg",{className:"img_div",children:i.jsx("use",{href:`${r}#icon-recommented-food`})}),i.jsx("ul",{children:e.map(x=>i.jsx("li",{children:i.jsxs("div",{className:"description",children:[i.jsx("div",{className:"small_img_div",children:i.jsx("img",{src:a,alt:"",width:46,height:46})}),i.jsxs("section",{children:[i.jsx("h4",{children:d}),i.jsxs("p",{children:[p,i.jsxs("span",{children:[o," calories"]})]})]})]})},x))})]})]})})}export{c as default};
