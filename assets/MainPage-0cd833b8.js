import{s,c as oe,d as Ne,j as n,r as Q,g as ct,e as dt,h as pt,u as qe,i as ut,k as De,l as ft,m as ht,L as Ke,n as mt,o as xt}from"./index-287f1460.js";import{i as G}from"./icons-174fa2e8.js";import{C as gt,A as yt,D as vt}from"./index-956c6692.js";import{u as bt}from"./index.esm-2c227655.js";import{b as wt}from"./breakfast-image-232e8400.js";const Ct=s.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,Ot=s.div`
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
`,Te=s.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,ke=s.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Fe=s.p`
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
`,jt=s.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function _t(t){var o,a;const e=oe(Ne);return n.jsxs(jt,{children:[n.jsx(Ct,{children:"Daily Goal"}),n.jsxs(Ot,{children:[n.jsxs(Te,{children:[n.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:n.jsx("use",{href:`${G}#icon-bubble`})}),n.jsxs("div",{children:[n.jsx(ke,{children:"Calories"}),n.jsx(Fe,{children:(o=e.user)==null?void 0:o.dailyCalories})]})]}),n.jsxs(Te,{children:[n.jsx("svg",{style:{stroke:"var(--water-color)"},children:n.jsx("use",{href:`${G}#icon-milk`})}),n.jsxs("div",{children:[n.jsx(ke,{children:"Water"}),n.jsxs(Fe,{children:[(a=e.user)==null?void 0:a.dailyWater," ",n.jsx("span",{children:"ml"})]})]})]})]})]})}var _e={exports:{}},z={},Ge={exports:{}},Et="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pt=Et,At=Pt;function Ve(){}function Qe(){}Qe.resetWarningCache=Ve;var St=function(){function t(a,l,u,v,i,b){if(b!==At){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Qe,resetWarningCache:Ve};return o.PropTypes=o,o};Ge.exports=St();var Ye=Ge.exports,Ee={exports:{}},R={},Pe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function u(f,m){return m.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function v(f){var m=f.offsetWidth<=0&&f.offsetHeight<=0;if(m&&!f.innerHTML)return!0;try{var y=window.getComputedStyle(f),w=y.getPropertyValue("display");return m?w!==a&&u(f,y):w===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(f){for(var m=f,y=f.getRootNode&&f.getRootNode();m&&m!==document.body;){if(y&&m===y&&(m=y.host.parentNode),v(m))return!1;m=m.parentNode}return!0}function b(f,m){var y=f.nodeName.toLowerCase(),w=l.test(y)&&!f.disabled||y==="a"&&f.href||m;return w&&i(f)}function x(f){var m=f.getAttribute("tabindex");m===null&&(m=void 0);var y=isNaN(m);return(y||m>=0)&&b(f,!y)}function g(f){var m=[].slice.call(f.querySelectorAll("*"),0).reduce(function(y,w){return y.concat(w.shadowRoot?g(w.shadowRoot):[w])},[]);return m.filter(x)}t.exports=e.default})(Pe,Pe.exports);var Xe=Pe.exports;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=Dt;R.log=Tt;R.handleBlur=re;R.handleFocus=ae;R.markForFocusLater=kt;R.returnFocus=Ft;R.popWithoutFocus=Wt;R.setupScopedFocus=It;R.teardownScopedFocus=Lt;var Nt=Xe,Rt=Mt(Nt);function Mt(t){return t&&t.__esModule?t:{default:t}}var V=[],K=null,Ae=!1;function Dt(){V=[]}function Tt(){}function re(){Ae=!0}function ae(){if(Ae){if(Ae=!1,!K)return;setTimeout(function(){if(!K.contains(document.activeElement)){var t=(0,Rt.default)(K)[0]||K;t.focus()}},0)}}function kt(){V.push(document.activeElement)}function Ft(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{V.length!==0&&(e=V.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Wt(){V.length>0&&V.pop()}function It(t){K=t,window.addEventListener?(window.addEventListener("blur",re,!1),document.addEventListener("focus",ae,!0)):(window.attachEvent("onBlur",re),document.attachEvent("onFocus",ae))}function Lt(){K=null,window.addEventListener?(window.removeEventListener("blur",re),document.removeEventListener("focus",ae)):(window.detachEvent("onBlur",re),document.detachEvent("onFocus",ae))}var Se={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=v;var o=Xe,a=l(o);function l(i){return i&&i.__esModule?i:{default:i}}function u(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?u(i.activeElement.shadowRoot):i.activeElement}function v(i,b){var x=(0,a.default)(i);if(!x.length){b.preventDefault();return}var g=void 0,f=b.shiftKey,m=x[0],y=x[x.length-1],w=u();if(i===w){if(!f)return;g=y}if(y===w&&!f&&(g=m),m===w&&f&&(g=y),g){b.preventDefault(),g.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),T=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(T){var D=x.indexOf(w);if(D>-1&&(D+=f?-1:1),g=x[D],typeof g>"u"){b.preventDefault(),g=f?y:m,g.focus();return}b.preventDefault(),g.focus()}}t.exports=e.default})(Se,Se.exports);var Ut=Se.exports,M={},Bt=function(){},zt=Bt,N={},Ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Ze);var $t=Ze.exports;Object.defineProperty(N,"__esModule",{value:!0});N.canUseDOM=N.SafeNodeList=N.SafeHTMLCollection=void 0;var Ht=$t,qt=Kt(Ht);function Kt(t){return t&&t.__esModule?t:{default:t}}var we=qt.default,Gt=we.canUseDOM?window.HTMLElement:{};N.SafeHTMLCollection=we.canUseDOM?window.HTMLCollection:{};N.SafeNodeList=we.canUseDOM?window.NodeList:{};N.canUseDOM=we.canUseDOM;N.default=Gt;Object.defineProperty(M,"__esModule",{value:!0});M.resetState=Zt;M.log=Jt;M.assertNodeList=Je;M.setElement=en;M.validateElement=Re;M.hide=tn;M.show=nn;M.documentNotReadyOrSSRTesting=on;var Vt=zt,Qt=Xt(Vt),Yt=N;function Xt(t){return t&&t.__esModule?t:{default:t}}var P=null;function Zt(){P&&(P.removeAttribute?P.removeAttribute("aria-hidden"):P.length!=null?P.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(P).forEach(function(t){return t.removeAttribute("aria-hidden")})),P=null}function Jt(){}function Je(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function en(t){var e=t;if(typeof e=="string"&&Yt.canUseDOM){var o=document.querySelectorAll(e);Je(o,e),e=o}return P=e||P,P}function Re(t){var e=t||P;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Qt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function tn(t){var e=!0,o=!1,a=void 0;try{for(var l=Re(t)[Symbol.iterator](),u;!(e=(u=l.next()).done);e=!0){var v=u.value;v.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function nn(t){var e=!0,o=!1,a=void 0;try{for(var l=Re(t)[Symbol.iterator](),u;!(e=(u=l.next()).done);e=!0){var v=u.value;v.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function on(){P=null}var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.resetState=rn;Y.log=an;var te={},ne={};function We(t,e){t.classList.remove(e)}function rn(){var t=document.getElementsByTagName("html")[0];for(var e in te)We(t,te[e]);var o=document.body;for(var a in ne)We(o,ne[a]);te={},ne={}}function an(){}var ln=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},sn=function(e,o){return e[o]&&(e[o]-=1),o},cn=function(e,o,a){a.forEach(function(l){ln(o,l),e.add(l)})},dn=function(e,o,a){a.forEach(function(l){sn(o,l),o[l]===0&&e.remove(l)})};Y.add=function(e,o){return cn(e.classList,e.nodeName.toLowerCase()=="html"?te:ne,o.split(" "))};Y.remove=function(e,o){return dn(e.classList,e.nodeName.toLowerCase()=="html"?te:ne,o.split(" "))};var X={};Object.defineProperty(X,"__esModule",{value:!0});X.log=un;X.resetState=fn;function pn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var et=function t(){var e=this;pn(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ye=new et;function un(){console.log("portalOpenInstances ----------"),console.log(ye.openInstances.length),ye.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function fn(){ye=new et}X.default=ye;var Me={};Object.defineProperty(Me,"__esModule",{value:!0});Me.resetState=gn;Me.log=yn;var hn=X,mn=xn(hn);function xn(t){return t&&t.__esModule?t:{default:t}}var _=void 0,S=void 0,B=[];function gn(){for(var t=[_,S],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}_=S=null,B=[]}function yn(){console.log("bodyTrap ----------"),console.log(B.length);for(var t=[_,S],e=0;e<t.length;e++){var o=t[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Ie(){B.length!==0&&B[B.length-1].focusContent()}function vn(t,e){!_&&!S&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Ie),S=_.cloneNode(),S.addEventListener("focus",Ie)),B=e,B.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==S&&document.body.appendChild(S)):(_.parentElement&&_.parentElement.removeChild(_),S.parentElement&&S.parentElement.removeChild(S))}mn.default.subscribe(vn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(h){for(var d=1;d<arguments.length;d++){var C=arguments[d];for(var r in C)Object.prototype.hasOwnProperty.call(C,r)&&(h[r]=C[r])}return h},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},l=function(){function h(d,C){for(var r=0;r<C.length;r++){var c=C[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}return function(d,C,r){return C&&h(d.prototype,C),r&&h(d,r),d}}(),u=Q,v=Ye,i=F(v),b=R,x=$(b),g=Ut,f=F(g),m=M,y=$(m),w=Y,A=$(w),T=N,D=F(T),se=X,Z=F(se);function $(h){if(h&&h.__esModule)return h;var d={};if(h!=null)for(var C in h)Object.prototype.hasOwnProperty.call(h,C)&&(d[C]=h[C]);return d.default=h,d}function F(h){return h&&h.__esModule?h:{default:h}}function ce(h,d){if(!(h instanceof d))throw new TypeError("Cannot call a class as a function")}function de(h,d){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:h}function pe(h,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);h.prototype=Object.create(d&&d.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(h,d):h.__proto__=d)}var H={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ue=function(d){return d.code==="Tab"||d.keyCode===9},fe=function(d){return d.code==="Escape"||d.keyCode===27},W=0,q=function(h){pe(d,h);function d(C){ce(this,d);var r=de(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,C));return r.setOverlayRef=function(c){r.overlay=c,r.props.overlayRef&&r.props.overlayRef(c)},r.setContentRef=function(c){r.content=c,r.props.contentRef&&r.props.contentRef(c)},r.afterClose=function(){var c=r.props,j=c.appElement,E=c.ariaHideApp,O=c.htmlOpenClassName,I=c.bodyOpenClassName,L=c.parentSelector,he=L&&L().ownerDocument||document;I&&A.remove(he.body,I),O&&A.remove(he.getElementsByTagName("html")[0],O),E&&W>0&&(W-=1,W===0&&y.show(j)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(x.returnFocus(r.props.preventScroll),x.teardownScopedFocus()):x.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),Z.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(x.setupScopedFocus(r.node),x.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var c=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:c},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(c){ue(c)&&(0,f.default)(r.content,c),r.props.shouldCloseOnEsc&&fe(c)&&(c.stopPropagation(),r.requestClose(c))},r.handleOverlayOnClick=function(c){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(c):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(c){!r.props.shouldCloseOnOverlayClick&&c.target==r.overlay&&c.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(c){return r.ownerHandlesClose()&&r.props.onRequestClose(c)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(c,j){var E=(typeof j>"u"?"undefined":a(j))==="object"?j:{base:H[c],afterOpen:H[c]+"--after-open",beforeClose:H[c]+"--before-close"},O=E.base;return r.state.afterOpen&&(O=O+" "+E.afterOpen),r.state.beforeClose&&(O=O+" "+E.beforeClose),typeof j=="string"&&j?O+" "+j:O},r.attributesFromObject=function(c,j){return Object.keys(j).reduce(function(E,O){return E[c+"-"+O]=j[O],E},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,c){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,c=r.appElement,j=r.ariaHideApp,E=r.htmlOpenClassName,O=r.bodyOpenClassName,I=r.parentSelector,L=I&&I().ownerDocument||document;O&&A.add(L.body,O),E&&A.add(L.getElementsByTagName("html")[0],E),j&&(W+=1,y.hide(c)),Z.default.register(this)}},{key:"render",value:function(){var r=this.props,c=r.id,j=r.className,E=r.overlayClassName,O=r.defaultStyles,I=r.children,L=j?{}:O.content,he=E?{}:O.overlay;if(this.shouldBeClosed())return null;var it={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:o({},he,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},lt=o({id:c,ref:this.setContentRef,style:o({},L,this.props.style.content),className:this.buildClassName("content",j),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),st=this.props.contentElement(lt,I);return this.props.overlayElement(it,st)}}]),d}(u.Component);q.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},q.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(D.default),i.default.instanceOf(T.SafeHTMLCollection),i.default.instanceOf(T.SafeNodeList),i.default.arrayOf(i.default.instanceOf(D.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},e.default=q,t.exports=e.default})(Ee,Ee.exports);var bn=Ee.exports;function tt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function nt(t){function e(o){var a=this.constructor.getDerivedStateFromProps(t,o);return a??null}this.setState(e.bind(this))}function ot(t,e){try{var o=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;function wn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,a=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||a!==null||l!==null){var u=t.displayName||t.name,v=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+u+" uses "+v+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=tt,e.componentWillReceiveProps=nt),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ot;var i=e.componentDidUpdate;e.componentDidUpdate=function(x,g,f){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;i.call(this,x,g,m)}}return t}const Cn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:wn},Symbol.toStringTag,{value:"Module"})),On=ct(Cn);Object.defineProperty(z,"__esModule",{value:!0});z.bodyOpenClassName=z.portalClassName=void 0;var Le=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},jn=function(){function t(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),rt=Q,ve=ie(rt),_n=dt,be=ie(_n),En=Ye,p=ie(En),Pn=bn,Ue=ie(Pn),An=M,Sn=Rn(An),k=N,Be=ie(k),Nn=On;function Rn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function ie(t){return t&&t.__esModule?t:{default:t}}function Mn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Dn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Tn=z.portalClassName="ReactModalPortal",kn=z.bodyOpenClassName="ReactModal__Body--open",U=k.canUseDOM&&be.default.createPortal!==void 0,$e=function(e){return document.createElement(e)},He=function(){return U?be.default.createPortal:be.default.unstable_renderSubtreeIntoContainer};function me(t){return t()}var le=function(t){Dn(e,t);function e(){var o,a,l,u;Mn(this,e);for(var v=arguments.length,i=Array(v),b=0;b<v;b++)i[b]=arguments[b];return u=(a=(l=ze(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(i))),l),l.removePortal=function(){!U&&be.default.unmountComponentAtNode(l.node);var x=me(l.props.parentSelector);x&&x.contains(l.node)?x.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(x){l.portal=x},l.renderPortal=function(x){var g=He(),f=g(l,ve.default.createElement(Ue.default,Le({defaultStyles:e.defaultStyles},x)),l.node);l.portalRef(f)},a),ze(l,u)}return jn(e,[{key:"componentDidMount",value:function(){if(k.canUseDOM){U||(this.node=$e("div")),this.node.className=this.props.portalClassName;var a=me(this.props.parentSelector);a.appendChild(this.node),!U&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=me(a.parentSelector),u=me(this.props.parentSelector);return{prevParent:l,nextParent:u}}},{key:"componentDidUpdate",value:function(a,l,u){if(k.canUseDOM){var v=this.props,i=v.isOpen,b=v.portalClassName;a.portalClassName!==b&&(this.node.className=b);var x=u.prevParent,g=u.nextParent;g!==x&&(x.removeChild(this.node),g.appendChild(this.node)),!(!a.isOpen&&!i)&&!U&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!k.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),u=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);u?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,u-l)):this.removePortal()}}},{key:"render",value:function(){if(!k.canUseDOM||!U)return null;!this.node&&U&&(this.node=$e("div"));var a=He();return a(ve.default.createElement(Ue.default,Le({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Sn.setElement(a)}}]),e}(rt.Component);le.propTypes={isOpen:p.default.bool.isRequired,style:p.default.shape({content:p.default.object,overlay:p.default.object}),portalClassName:p.default.string,bodyOpenClassName:p.default.string,htmlOpenClassName:p.default.string,className:p.default.oneOfType([p.default.string,p.default.shape({base:p.default.string.isRequired,afterOpen:p.default.string.isRequired,beforeClose:p.default.string.isRequired})]),overlayClassName:p.default.oneOfType([p.default.string,p.default.shape({base:p.default.string.isRequired,afterOpen:p.default.string.isRequired,beforeClose:p.default.string.isRequired})]),appElement:p.default.oneOfType([p.default.instanceOf(Be.default),p.default.instanceOf(k.SafeHTMLCollection),p.default.instanceOf(k.SafeNodeList),p.default.arrayOf(p.default.instanceOf(Be.default))]),onAfterOpen:p.default.func,onRequestClose:p.default.func,closeTimeoutMS:p.default.number,ariaHideApp:p.default.bool,shouldFocusAfterRender:p.default.bool,shouldCloseOnOverlayClick:p.default.bool,shouldReturnFocusAfterClose:p.default.bool,preventScroll:p.default.bool,parentSelector:p.default.func,aria:p.default.object,data:p.default.object,role:p.default.string,contentLabel:p.default.string,shouldCloseOnEsc:p.default.bool,overlayRef:p.default.func,contentRef:p.default.func,id:p.default.string,overlayElement:p.default.func,contentElement:p.default.func};le.defaultProps={isOpen:!1,portalClassName:Tn,bodyOpenClassName:kn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return ve.default.createElement("div",e,o)},contentElement:function(e,o){return ve.default.createElement("div",e,o)}};le.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Nn.polyfill)(le);z.default=le;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=z,a=l(o);function l(u){return u&&u.__esModule?u:{default:u}}e.default=a.default,t.exports=e.default})(_e,_e.exports);var Fn=_e.exports;const at=pt(Fn),Wn=s.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,In=s.div`
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
`,Ln=s.button`
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
`,Un=s.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Bn=s.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,zn=s.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,$n=s.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Hn=s.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,qn=s.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Kn=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Gn=s.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,Vn=s.form`
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

  input {
    margin-top: 12px;
    outline: none;
    background-color: transparent;
    border: 1px solid var(--primary-btn-color);
    border-radius: 12px;
    padding: 8px 10px;
    color: #fff;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--Color-Primary-Grey, #b6b6b6);
    font-size: 14px;

    line-height: 1.42;
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
`,Qn=s.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Yn=s.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Xn=s.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Zn=s.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Jn=({percentage:t})=>n.jsxs(Yn,{children:[n.jsxs(Zn,{children:[isNaN(t)?0:t,"%"]}),n.jsx(Xn,{$percentage:t})]}),eo=Jn,to={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};at.setAppElement("#root");function no(){var b,x,g,f,m,y;const[t,e]=Q.useState(!1),o=qe(),a=oe(Ne);function l(){e(!0)}function u(){e(!1)}const v=async w=>{w.preventDefault(),await o(ut({ml:w.target.children[0].children[0].value})),u(),await o(De())},i=async()=>{await o(ft()),await o(De())};return n.jsxs(Hn,{children:[n.jsx(Wn,{children:"Water"}),n.jsxs(In,{children:[n.jsx(eo,{percentage:Math.round(((b=a.consumedWaterByDay)==null?void 0:b.ml)*100/((x=a.user)==null?void 0:x.dailyWater))}),n.jsxs($n,{children:[n.jsx(Un,{children:"Water consumption"}),n.jsxs(Kn,{children:[n.jsxs(Bn,{children:[((g=a==null?void 0:a.consumedWaterByDay)==null?void 0:g.ml)||0," ",n.jsx("span",{children:"ml"})]}),n.jsxs(zn,{children:[n.jsx("span",{children:"left : "}),((f=a.user)==null?void 0:f.dailyWater)-((m=a.consumedWaterByDay)==null?void 0:m.ml)||((y=a.user)==null?void 0:y.dailyWater),"ml"]})]}),n.jsxs(Ln,{onClick:l,children:[n.jsx("svg",{children:n.jsx("use",{href:`${G}#icon-add`})}),"Add Water Intake"]})]})]}),n.jsx(qn,{width:"20",height:"20",fill:"none",onClick:i,children:n.jsx("use",{href:`${G}#icon-trash`})}),n.jsxs(at,{isOpen:t,onRequestClose:u,style:to,children:[n.jsx(Gn,{children:"Add water Intake"}),n.jsxs(Vn,{onSubmit:w=>v(w),children:[n.jsxs("label",{children:["How much water",n.jsx("input",{type:"number",placeholder:"Enter millilitters"})]}),n.jsx("button",{children:"Confirm"})]}),n.jsx(Qn,{onClick:u,children:"Cancel"})]})]})}const oo=s.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,ro=s.div`
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
`,ao=s.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,io=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ce=s.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,Oe=s.p`
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
`,je=s.div`
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
`,lo=s(vt)`
  width: ${t=>t.$widthpx}px !important;
  height: ${t=>t.$heightpx}px !important;
`;gt.register(yt);const so=t=>{const e={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},o={labels:["Filled","Empty"],datasets:[{data:[t.percentage,100-t.percentage],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},a={id:"backgroundCircle",beforeDatasetsDraw(l,u,v){const{ctx:i}=l;i.save();const b=l.getDatasetMeta(0).data[0].x,x=l.getDatasetMeta(0).data[0].y,g=l.getDatasetMeta(0).data[0].innerRadius,f=l.getDatasetMeta(0).data[0].outerRadius,m=f-g,y=Math.PI/180;i.beginPath(),i.lineWidth=m,i.strokeStyle="#292928",i.arc(b,x,f-m/2,0,y*360,!1),i.stroke()}};return n.jsx(lo,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:o,options:e,plugins:[a]})},ge=so,co=s.p`
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
`,po=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,uo=({calories:t,currentCalories:e})=>{const o=()=>Math.round(e*100/t);return n.jsxs(po,{children:[n.jsx(ge,{percentage:o(),color:"#45FFBC",widthpx:168,heightpx:168}),n.jsxs(co,{children:[e," ",n.jsx("span",{children:"calories"})]})]})},fo=uo;function ho(){var o,a,l,u,v,i,b,x,g,f,m,y,w,A,T,D,se,Z,$,F,ce,de,pe,H,ue,fe,W,q,h,d,C;const t=oe(ht),e=oe(Ne);return Q.useEffect(()=>{console.log(e)},[]),n.jsxs(ao,{children:[n.jsx(oo,{children:"Food"}),n.jsxs(ro,{children:[n.jsx(fo,{calories:(o=e==null?void 0:e.user)==null?void 0:o.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),n.jsxs(io,{children:[n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((l=(a=e==null?void 0:e.user)==null?void 0:a.dailyNutrition)==null?void 0:l.carbohydrates))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((v=(u=e==null?void 0:e.user)==null?void 0:u.dailyNutrition)==null?void 0:v.carbohydrates))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Carbohidrates"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal:"," ",n.jsx("span",{children:(b=(i=e==null?void 0:e.user)==null?void 0:i.dailyNutrition)==null?void 0:b.carbohydrates})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((g=(x=e==null?void 0:e.user)==null?void 0:x.dailyNutrition)==null?void 0:g.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay)||((m=(f=e==null?void 0:e.user)==null?void 0:f.dailyNutrition)==null?void 0:m.carbohydrates)})]})]})]})]}),n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((w=(y=e==null?void 0:e.user)==null?void 0:y.dailyNutrition)==null?void 0:w.protein))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((T=(A=e==null?void 0:e.user)==null?void 0:A.dailyNutrition)==null?void 0:T.protein))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Protein"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:(se=(D=e==null?void 0:e.user)==null?void 0:D.dailyNutrition)==null?void 0:se.protein})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:(($=(Z=e==null?void 0:e.user)==null?void 0:Z.dailyNutrition)==null?void 0:$.protein)-(t==null?void 0:t.totalConsumedProteinPerDay)||((ce=(F=e==null?void 0:e.user)==null?void 0:F.dailyNutrition)==null?void 0:ce.protein)})]})]})]})]}),n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((pe=(de=e==null?void 0:e.user)==null?void 0:de.dailyNutrition)==null?void 0:pe.fat))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((ue=(H=e==null?void 0:e.user)==null?void 0:H.dailyNutrition)==null?void 0:ue.fat))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Fat"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:(W=(fe=e==null?void 0:e.user)==null?void 0:fe.dailyNutrition)==null?void 0:W.fat})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((h=(q=e==null?void 0:e.user)==null?void 0:q.dailyNutrition)==null?void 0:h.fat)-(t==null?void 0:t.totalConsumedFatPerDay)||((C=(d=e==null?void 0:e.user)==null?void 0:d.dailyNutrition)==null?void 0:C.fat)})]})]})]})]})]})]})]})}const mo=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,xo=s.div`
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
`,go=s(Ke)`
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
`;function yo(){return n.jsxs("div",{children:[n.jsxs(xo,{children:[n.jsx("h2",{children:"Today"}),n.jsxs(go,{to:"/dashboard",children:["On the way to the goal",n.jsx("svg",{children:n.jsx("use",{href:`${G}#icon-arrow-right`})})]})]}),n.jsxs(mo,{children:[n.jsx(_t,{}),n.jsx(no,{}),n.jsx(ho,{})]})]})}const vo=s.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,bo=s.div`
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
`,wo=s.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;s.div`
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
`;s.p`
  min-width: 190px;
`;s.p`
  width: 110px;
`;s.p`
  width: 60px;
`;s.span`
  color: gray;
  font-weight: 500;
`;const Co=s.img`
  width: 36px;
  height: 36px;
`,Oo=s.button`
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
`,jo=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,_o=s.div`
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
`,Eo=s.h1`
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
`,Po=s.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Ao=s.img`
  width: 32px;
  height: 32px;
`,So=s.h2`
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
`,No=s.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,J=s.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,Ro=s.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,Mo=s.ul`
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
`,Do=s.li`
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
`,ee=s.input`
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
`,To=s.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,ko=s.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Fo=s.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,Wo=s.button`
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
`,Io=s.button`
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
`,Lo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",Uo=({onClose:t,onSubmit:e,image:o,mealType:a})=>{const l=bt({initialValues:{carbonohidrates:"",protein:"",fat:"",calories:""},onSubmit:i=>{e(i),t()}}),u=i=>{i.currentTarget===i.target&&t()},v=()=>{l.setValues({carbonohidrates:"",protein:"",fat:"",calories:""})};return n.jsx(jo,{onClick:u,children:n.jsxs(_o,{children:[n.jsx(Eo,{children:"Record your meal"}),n.jsxs(Po,{children:[n.jsx(Ao,{src:o,alt:"Plate"}),n.jsx(So,{children:a})]}),n.jsxs(No,{onSubmit:l.handleSubmit,children:[n.jsxs(Ro,{children:[n.jsx(Mo,{children:n.jsxs(Do,{children:[n.jsx(J,{children:n.jsx(ee,{type:"text",id:"carbonohidrates",name:"carbonohidrates",placeholder:"The name of the product or dish"})}),n.jsx(J,{children:n.jsx(ee,{type:"number",id:"field1",name:"field1",placeholder:"Carbonoh."})}),n.jsx(J,{children:n.jsx(ee,{type:"number",id:"protein",name:"protein",placeholder:"Protein"})}),n.jsx(J,{children:n.jsx(ee,{type:"number",id:"fat",name:"fat",placeholder:"Fat"})}),n.jsx(J,{children:n.jsx(ee,{type:"number",id:"calories",name:"calories",placeholder:"Calories"})}),n.jsx(ko,{type:"button",onClick:v,children:n.jsx("img",{src:Lo,alt:"trash"})})]})}),n.jsx(To,{children:"+ Add more"})]}),n.jsxs(Fo,{children:[n.jsx(Io,{type:"button",onClick:t,children:"Cancel"}),n.jsx(Wo,{type:"submit",children:"Confirm"})]})]})]})})},xe=({title:t,image:e})=>{const[o,a]=Q.useState(!1),l=()=>a(!o);return n.jsxs(vo,{children:[n.jsxs(bo,{children:[n.jsx(Co,{src:e,alt:"Plate"}),n.jsx(wo,{children:t})]}),n.jsx(Oo,{onClick:l,children:"+ Record your meal"}),o&&n.jsx(Uo,{onClose:l,image:e,mealType:t})]})},Bo="/healthy_hub/assets/dinner-image-19c0e7ef.svg",zo="/healthy_hub/assets/lunch-image-3c133980.svg",$o="/healthy_hub/assets/snack-image-28a6b2cf.svg",Ho=s.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,qo=s.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Ko=s.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Go=s(Ke)`
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
`,Vo=s.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Qo=()=>n.jsxs(Ho,{children:[n.jsxs(qo,{children:[n.jsx(Ko,{children:"Diary"}),n.jsx(Go,{to:"/diary",children:"See more"})]}),n.jsxs(Vo,{children:[n.jsx(xe,{title:"Breakfast",image:wt}),n.jsx(xe,{title:"Lunch",image:zo}),n.jsx(xe,{title:"Dinner",image:Bo}),n.jsx(xe,{title:"Snack",image:$o})]})]}),Yo=Qo,Xo=s.section`
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
`,Zo=Xo;function Jo(){const t=qe(),e=oe(mt);let o=[];return Q.useEffect(()=>{t(xt())},[t]),e&&(o=e.slice(0,4)),n.jsxs(Zo,{children:[n.jsx("h2",{children:"Recommended Food"}),n.jsxs("div",{className:"wrapper",children:[n.jsx("ul",{children:o==null?void 0:o.map(({amount:a,calories:l,img:u,name:v,_id:i})=>n.jsx("li",{children:n.jsxs("div",{className:"description",children:[n.jsx("div",{className:"small_img_div",children:n.jsx("img",{src:u,alt:"",width:46,height:46})}),n.jsxs("section",{children:[n.jsx("h4",{children:v}),n.jsxs("p",{children:[a,n.jsxs("span",{children:[l," calories"]})]})]})]})},i))}),n.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",n.jsx("svg",{className:"svg",children:n.jsx("use",{href:`${G}#icon-arrow-right`})})]})]})]})}const er=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function ir(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"MainPage"}),n.jsx(yo,{}),n.jsxs(er,{children:[n.jsx(Yo,{}),n.jsx(Jo,{})]})]})}export{ir as default};
