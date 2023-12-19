import{j as i,L as a,s as p}from"./index-1e6428a3.js";import{i as x}from"./icons-6c97ac78.js";function l(){return i.jsx(i.Fragment,{children:i.jsx("p",{children:"DailyGoal"})})}function h(){return i.jsx(i.Fragment,{children:i.jsx("p",{children:"Water"})})}function c(){return i.jsx(i.Fragment,{children:i.jsx("p",{children:"Food"})})}function m(){return i.jsxs("div",{children:[i.jsxs("div",{children:[i.jsx("h2",{children:"Today"}),i.jsx(a,{to:"/dashboard",children:"On the way to the goal"})]}),i.jsxs("div",{children:[i.jsx(l,{}),i.jsx(h,{}),i.jsx(c,{})]})]})}function g(){return i.jsx(i.Fragment,{children:i.jsx("p",{children:"Diary"})})}const f=p.section`
  width: 320px;
  margin: 0 auto;

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
    padding-left: 10px;
    padding-right: 10px;
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
    margin: 0 auto;

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
`,j=f;function u(){const e=[1,2,3,4],t={carbohydrates:14,protein:.3,fat:.2,name:"Apples",amount:"100 g",img:"https://ftp.goit.study/img/you_health/Apples.png",calories:52},{name:n,amount:r,img:d,calories:o}=t;return i.jsxs(j,{children:[i.jsx("h2",{children:"Recommended Food"}),i.jsxs("div",{className:"wrapper",children:[i.jsx("ul",{children:e.map(s=>i.jsx("li",{children:i.jsxs("div",{className:"description",children:[i.jsx("div",{className:"small_img_div",children:i.jsx("img",{src:d,alt:"",width:46,height:46})}),i.jsxs("section",{children:[i.jsx("h4",{children:n}),i.jsxs("p",{children:[r,i.jsxs("span",{children:[o," calories"]})]})]})]})},s))}),i.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",i.jsx("svg",{className:"svg",children:i.jsx("use",{href:`${x}#icon-arrow-right`})})]})]})]})}function b(){return i.jsxs(i.Fragment,{children:[i.jsx("p",{children:"MainPage"}),i.jsx(m,{}),i.jsx(g,{}),i.jsx(u,{})]})}export{b as default};
