import{s as l,c as se,d as Ne,j as n,r as I,g as ct,e as dt,h as pt,u as Me,i as ut,k as Te,l as ft,m as ht,L as Ve,n as mt,o as xt,p as gt}from"./index-4a3c05f4.js";import{i as J}from"./icons-4b8dbc1d.js";import{C as yt,A as vt,D as bt}from"./index-45e5b62a.js";import{u as wt}from"./formik.esm-47ecf9a0.js";import{b as Ct}from"./breakfast-image-98cfb3aa.js";const Ot=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,jt=l.div`
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
`,ke=l.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,Fe=l.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,We=l.p`
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
`,_t=l.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function Et(t){var o,i;const e=se(Ne);return n.jsxs(_t,{children:[n.jsx(Ot,{children:"Daily Goal"}),n.jsxs(jt,{children:[n.jsxs(ke,{children:[n.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:n.jsx("use",{href:`${J}#icon-bubble`})}),n.jsxs("div",{children:[n.jsx(Fe,{children:"Calories"}),n.jsx(We,{children:(o=e.user)==null?void 0:o.dailyCalories})]})]}),n.jsxs(ke,{children:[n.jsx("svg",{style:{stroke:"var(--water-color)"},children:n.jsx("use",{href:`${J}#icon-milk`})}),n.jsxs("div",{children:[n.jsx(Fe,{children:"Water"}),n.jsxs(We,{children:[(i=e.user)==null?void 0:i.dailyWater," ",n.jsx("span",{children:"ml"})]})]})]})]})]})}var _e={exports:{}},Y={},Ke={exports:{}},Pt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",At=Pt,St=At;function Ge(){}function Qe(){}Qe.resetWarningCache=Ge;var Nt=function(){function t(i,s,p,b,a,g){if(g!==St){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Qe,resetWarningCache:Ge};return o.PropTypes=o,o};Ke.exports=Nt();var Ye=Ke.exports,Ee={exports:{}},T={},Pe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=m;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",i="contents",s=/input|select|textarea|button|object|iframe/;function p(d,y){return y.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function b(d){var y=d.offsetWidth<=0&&d.offsetHeight<=0;if(y&&!d.innerHTML)return!0;try{var v=window.getComputedStyle(d),C=v.getPropertyValue("display");return y?C!==i&&p(d,v):C===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var y=d,v=d.getRootNode&&d.getRootNode();y&&y!==document.body;){if(v&&y===v&&(y=v.host.parentNode),b(y))return!1;y=y.parentNode}return!0}function g(d,y){var v=d.nodeName.toLowerCase(),C=s.test(v)&&!d.disabled||v==="a"&&d.href||y;return C&&a(d)}function c(d){var y=d.getAttribute("tabindex");y===null&&(y=void 0);var v=isNaN(y);return(v||y>=0)&&g(d,!v)}function m(d){var y=[].slice.call(d.querySelectorAll("*"),0).reduce(function(v,C){return v.concat(C.shadowRoot?m(C.shadowRoot):[C])},[]);return y.filter(c)}t.exports=e.default})(Pe,Pe.exports);var Xe=Pe.exports;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Tt;T.log=kt;T.handleBlur=le;T.handleFocus=ce;T.markForFocusLater=Ft;T.returnFocus=Wt;T.popWithoutFocus=It;T.setupScopedFocus=Lt;T.teardownScopedFocus=$t;var Mt=Xe,Rt=Dt(Mt);function Dt(t){return t&&t.__esModule?t:{default:t}}var ee=[],Z=null,Ae=!1;function Tt(){ee=[]}function kt(){}function le(){Ae=!0}function ce(){if(Ae){if(Ae=!1,!Z)return;setTimeout(function(){if(!Z.contains(document.activeElement)){var t=(0,Rt.default)(Z)[0]||Z;t.focus()}},0)}}function Ft(){ee.push(document.activeElement)}function Wt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{ee.length!==0&&(e=ee.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function It(){ee.length>0&&ee.pop()}function Lt(t){Z=t,window.addEventListener?(window.addEventListener("blur",le,!1),document.addEventListener("focus",ce,!0)):(window.attachEvent("onBlur",le),document.attachEvent("onFocus",ce))}function $t(){Z=null,window.addEventListener?(window.removeEventListener("blur",le),document.removeEventListener("focus",ce)):(window.detachEvent("onBlur",le),document.detachEvent("onFocus",ce))}var Se={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;var o=Xe,i=s(o);function s(a){return a&&a.__esModule?a:{default:a}}function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?p(a.activeElement.shadowRoot):a.activeElement}function b(a,g){var c=(0,i.default)(a);if(!c.length){g.preventDefault();return}var m=void 0,d=g.shiftKey,y=c[0],v=c[c.length-1],C=p();if(a===C){if(!d)return;m=v}if(v===C&&!d&&(m=y),y===C&&d&&(m=v),m){g.preventDefault(),m.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),F=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(F){var N=c.indexOf(C);if(N>-1&&(N+=d?-1:1),m=c[N],typeof m>"u"){g.preventDefault(),m=d?v:y,m.focus();return}g.preventDefault(),m.focus()}}t.exports=e.default})(Se,Se.exports);var Bt=Se.exports,k={},Ut=function(){},zt=Ut,D={},Ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Ze);var Ht=Ze.exports;Object.defineProperty(D,"__esModule",{value:!0});D.canUseDOM=D.SafeNodeList=D.SafeHTMLCollection=void 0;var qt=Ht,Vt=Kt(qt);function Kt(t){return t&&t.__esModule?t:{default:t}}var we=Vt.default,Gt=we.canUseDOM?window.HTMLElement:{};D.SafeHTMLCollection=we.canUseDOM?window.HTMLCollection:{};D.SafeNodeList=we.canUseDOM?window.NodeList:{};D.canUseDOM=we.canUseDOM;D.default=Gt;Object.defineProperty(k,"__esModule",{value:!0});k.resetState=Jt;k.log=en;k.assertNodeList=Je;k.setElement=tn;k.validateElement=Re;k.hide=nn;k.show=on;k.documentNotReadyOrSSRTesting=rn;var Qt=zt,Yt=Zt(Qt),Xt=D;function Zt(t){return t&&t.__esModule?t:{default:t}}var S=null;function Jt(){S&&(S.removeAttribute?S.removeAttribute("aria-hidden"):S.length!=null?S.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(S).forEach(function(t){return t.removeAttribute("aria-hidden")})),S=null}function en(){}function Je(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function tn(t){var e=t;if(typeof e=="string"&&Xt.canUseDOM){var o=document.querySelectorAll(e);Je(o,e),e=o}return S=e||S,S}function Re(t){var e=t||S;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Yt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function nn(t){var e=!0,o=!1,i=void 0;try{for(var s=Re(t)[Symbol.iterator](),p;!(e=(p=s.next()).done);e=!0){var b=p.value;b.setAttribute("aria-hidden","true")}}catch(a){o=!0,i=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw i}}}function on(t){var e=!0,o=!1,i=void 0;try{for(var s=Re(t)[Symbol.iterator](),p;!(e=(p=s.next()).done);e=!0){var b=p.value;b.removeAttribute("aria-hidden")}}catch(a){o=!0,i=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw i}}}function rn(){S=null}var te={};Object.defineProperty(te,"__esModule",{value:!0});te.resetState=an;te.log=sn;var ae={},ie={};function Ie(t,e){t.classList.remove(e)}function an(){var t=document.getElementsByTagName("html")[0];for(var e in ae)Ie(t,ae[e]);var o=document.body;for(var i in ie)Ie(o,ie[i]);ae={},ie={}}function sn(){}var ln=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},cn=function(e,o){return e[o]&&(e[o]-=1),o},dn=function(e,o,i){i.forEach(function(s){ln(o,s),e.add(s)})},pn=function(e,o,i){i.forEach(function(s){cn(o,s),o[s]===0&&e.remove(s)})};te.add=function(e,o){return dn(e.classList,e.nodeName.toLowerCase()=="html"?ae:ie,o.split(" "))};te.remove=function(e,o){return pn(e.classList,e.nodeName.toLowerCase()=="html"?ae:ie,o.split(" "))};var ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.log=fn;ne.resetState=hn;function un(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var et=function t(){var e=this;un(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var i=e.openInstances.indexOf(o);i!==-1&&(e.openInstances.splice(i,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(i){return i(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ye=new et;function fn(){console.log("portalOpenInstances ----------"),console.log(ye.openInstances.length),ye.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function hn(){ye=new et}ne.default=ye;var De={};Object.defineProperty(De,"__esModule",{value:!0});De.resetState=yn;De.log=vn;var mn=ne,xn=gn(mn);function gn(t){return t&&t.__esModule?t:{default:t}}var E=void 0,R=void 0,Q=[];function yn(){for(var t=[E,R],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}E=R=null,Q=[]}function vn(){console.log("bodyTrap ----------"),console.log(Q.length);for(var t=[E,R],e=0;e<t.length;e++){var o=t[e],i=o||{};console.log(i.nodeName,i.className,i.id)}console.log("edn bodyTrap ----------")}function Le(){Q.length!==0&&Q[Q.length-1].focusContent()}function bn(t,e){!E&&!R&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",Le),R=E.cloneNode(),R.addEventListener("focus",Le)),Q=e,Q.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(E.parentElement&&E.parentElement.removeChild(E),R.parentElement&&R.parentElement.removeChild(R))}xn.default.subscribe(bn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(x){for(var f=1;f<arguments.length;f++){var w=arguments[f];for(var r in w)Object.prototype.hasOwnProperty.call(w,r)&&(x[r]=w[r])}return x},i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},s=function(){function x(f,w){for(var r=0;r<w.length;r++){var u=w[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(f,u.key,u)}}return function(f,w,r){return w&&x(f.prototype,w),r&&x(f,r),f}}(),p=I,b=Ye,a=W(b),g=T,c=L(g),m=Bt,d=W(m),y=k,v=L(y),C=te,A=L(C),F=D,N=W(F),U=ne,$=W(U);function L(x){if(x&&x.__esModule)return x;var f={};if(x!=null)for(var w in x)Object.prototype.hasOwnProperty.call(x,w)&&(f[w]=x[w]);return f.default=x,f}function W(x){return x&&x.__esModule?x:{default:x}}function z(x,f){if(!(x instanceof f))throw new TypeError("Cannot call a class as a function")}function H(x,f){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:x}function j(x,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);x.prototype=Object.create(f&&f.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(x,f):x.__proto__=f)}var M={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ue=function(f){return f.code==="Tab"||f.keyCode===9},fe=function(f){return f.code==="Escape"||f.keyCode===27},q=0,X=function(x){j(f,x);function f(w){z(this,f);var r=H(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,w));return r.setOverlayRef=function(u){r.overlay=u,r.props.overlayRef&&r.props.overlayRef(u)},r.setContentRef=function(u){r.content=u,r.props.contentRef&&r.props.contentRef(u)},r.afterClose=function(){var u=r.props,_=u.appElement,P=u.ariaHideApp,O=u.htmlOpenClassName,V=u.bodyOpenClassName,K=u.parentSelector,he=K&&K().ownerDocument||document;V&&A.remove(he.body,V),O&&A.remove(he.getElementsByTagName("html")[0],O),P&&q>0&&(q-=1,q===0&&v.show(_)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(c.returnFocus(r.props.preventScroll),c.teardownScopedFocus()):c.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),$.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(c.setupScopedFocus(r.node),c.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var u=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:u},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(u){ue(u)&&(0,d.default)(r.content,u),r.props.shouldCloseOnEsc&&fe(u)&&(u.stopPropagation(),r.requestClose(u))},r.handleOverlayOnClick=function(u){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(u):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(u){!r.props.shouldCloseOnOverlayClick&&u.target==r.overlay&&u.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(u){return r.ownerHandlesClose()&&r.props.onRequestClose(u)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(u,_){var P=(typeof _>"u"?"undefined":i(_))==="object"?_:{base:M[u],afterOpen:M[u]+"--after-open",beforeClose:M[u]+"--before-close"},O=P.base;return r.state.afterOpen&&(O=O+" "+P.afterOpen),r.state.beforeClose&&(O=O+" "+P.beforeClose),typeof _=="string"&&_?O+" "+_:O},r.attributesFromObject=function(u,_){return Object.keys(_).reduce(function(P,O){return P[u+"-"+O]=_[O],P},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return s(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,u){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!u.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,u=r.appElement,_=r.ariaHideApp,P=r.htmlOpenClassName,O=r.bodyOpenClassName,V=r.parentSelector,K=V&&V().ownerDocument||document;O&&A.add(K.body,O),P&&A.add(K.getElementsByTagName("html")[0],P),_&&(q+=1,v.hide(u)),$.default.register(this)}},{key:"render",value:function(){var r=this.props,u=r.id,_=r.className,P=r.overlayClassName,O=r.defaultStyles,V=r.children,K=_?{}:O.content,he=P?{}:O.overlay;if(this.shouldBeClosed())return null;var it={ref:this.setOverlayRef,className:this.buildClassName("overlay",P),style:o({},he,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},st=o({id:u,ref:this.setContentRef,style:o({},K,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),lt=this.props.contentElement(st,V);return this.props.overlayElement(it,lt)}}]),f}(p.Component);X.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},X.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(N.default),a.default.instanceOf(F.SafeHTMLCollection),a.default.instanceOf(F.SafeNodeList),a.default.arrayOf(a.default.instanceOf(N.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=X,t.exports=e.default})(Ee,Ee.exports);var wn=Ee.exports;function tt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function nt(t){function e(o){var i=this.constructor.getDerivedStateFromProps(t,o);return i??null}this.setState(e.bind(this))}function ot(t,e){try{var o=this.props,i=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,i)}finally{this.props=o,this.state=i}}tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;function Cn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,i=null,s=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?i="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(i="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?s="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||i!==null||s!==null){var p=t.displayName||t.name,b=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+p+" uses "+b+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(i!==null?`
  `+i:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=tt,e.componentWillReceiveProps=nt),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ot;var a=e.componentDidUpdate;e.componentDidUpdate=function(c,m,d){var y=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,c,m,y)}}return t}const On=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Cn},Symbol.toStringTag,{value:"Module"})),jn=ct(On);Object.defineProperty(Y,"__esModule",{value:!0});Y.bodyOpenClassName=Y.portalClassName=void 0;var $e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},_n=function(){function t(e,o){for(var i=0;i<o.length;i++){var s=o[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),rt=I,ve=de(rt),En=dt,be=de(En),Pn=Ye,h=de(Pn),An=wn,Be=de(An),Sn=k,Nn=Rn(Sn),B=D,Ue=de(B),Mn=jn;function Rn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function de(t){return t&&t.__esModule?t:{default:t}}function Dn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Tn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var kn=Y.portalClassName="ReactModalPortal",Fn=Y.bodyOpenClassName="ReactModal__Body--open",G=B.canUseDOM&&be.default.createPortal!==void 0,He=function(e){return document.createElement(e)},qe=function(){return G?be.default.createPortal:be.default.unstable_renderSubtreeIntoContainer};function me(t){return t()}var pe=function(t){Tn(e,t);function e(){var o,i,s,p;Dn(this,e);for(var b=arguments.length,a=Array(b),g=0;g<b;g++)a[g]=arguments[g];return p=(i=(s=ze(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),s),s.removePortal=function(){!G&&be.default.unmountComponentAtNode(s.node);var c=me(s.props.parentSelector);c&&c.contains(s.node)?c.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(c){s.portal=c},s.renderPortal=function(c){var m=qe(),d=m(s,ve.default.createElement(Be.default,$e({defaultStyles:e.defaultStyles},c)),s.node);s.portalRef(d)},i),ze(s,p)}return _n(e,[{key:"componentDidMount",value:function(){if(B.canUseDOM){G||(this.node=He("div")),this.node.className=this.props.portalClassName;var i=me(this.props.parentSelector);i.appendChild(this.node),!G&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(i){var s=me(i.parentSelector),p=me(this.props.parentSelector);return{prevParent:s,nextParent:p}}},{key:"componentDidUpdate",value:function(i,s,p){if(B.canUseDOM){var b=this.props,a=b.isOpen,g=b.portalClassName;i.portalClassName!==g&&(this.node.className=g);var c=p.prevParent,m=p.nextParent;m!==c&&(c.removeChild(this.node),m.appendChild(this.node)),!(!i.isOpen&&!a)&&!G&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!B.canUseDOM||!this.node||!this.portal)){var i=this.portal.state,s=Date.now(),p=i.isOpen&&this.props.closeTimeoutMS&&(i.closesAt||s+this.props.closeTimeoutMS);p?(i.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,p-s)):this.removePortal()}}},{key:"render",value:function(){if(!B.canUseDOM||!G)return null;!this.node&&G&&(this.node=He("div"));var i=qe();return i(ve.default.createElement(Be.default,$e({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(i){Nn.setElement(i)}}]),e}(rt.Component);pe.propTypes={isOpen:h.default.bool.isRequired,style:h.default.shape({content:h.default.object,overlay:h.default.object}),portalClassName:h.default.string,bodyOpenClassName:h.default.string,htmlOpenClassName:h.default.string,className:h.default.oneOfType([h.default.string,h.default.shape({base:h.default.string.isRequired,afterOpen:h.default.string.isRequired,beforeClose:h.default.string.isRequired})]),overlayClassName:h.default.oneOfType([h.default.string,h.default.shape({base:h.default.string.isRequired,afterOpen:h.default.string.isRequired,beforeClose:h.default.string.isRequired})]),appElement:h.default.oneOfType([h.default.instanceOf(Ue.default),h.default.instanceOf(B.SafeHTMLCollection),h.default.instanceOf(B.SafeNodeList),h.default.arrayOf(h.default.instanceOf(Ue.default))]),onAfterOpen:h.default.func,onRequestClose:h.default.func,closeTimeoutMS:h.default.number,ariaHideApp:h.default.bool,shouldFocusAfterRender:h.default.bool,shouldCloseOnOverlayClick:h.default.bool,shouldReturnFocusAfterClose:h.default.bool,preventScroll:h.default.bool,parentSelector:h.default.func,aria:h.default.object,data:h.default.object,role:h.default.string,contentLabel:h.default.string,shouldCloseOnEsc:h.default.bool,overlayRef:h.default.func,contentRef:h.default.func,id:h.default.string,overlayElement:h.default.func,contentElement:h.default.func};pe.defaultProps={isOpen:!1,portalClassName:kn,bodyOpenClassName:Fn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return ve.default.createElement("div",e,o)},contentElement:function(e,o){return ve.default.createElement("div",e,o)}};pe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Mn.polyfill)(pe);Y.default=pe;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Y,i=s(o);function s(p){return p&&p.__esModule?p:{default:p}}e.default=i.default,t.exports=e.default})(_e,_e.exports);var Wn=_e.exports;const at=pt(Wn),In=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Ln=l.div`
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
`,$n=l.button`
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
`,Bn=l.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Un=l.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,zn=l.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Hn=l.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,qn=l.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,Vn=l.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Kn=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Gn=l.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,Qn=l.form`
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
`,Yn=l.input`
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
`,Xn=l.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`,Zn=l.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Jn=l.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,eo=l.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,to=l.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,no=({percentage:t})=>n.jsxs(Jn,{children:[n.jsxs(to,{children:[isNaN(t)?0:t,"%"]}),n.jsx(eo,{$percentage:t})]}),oo=no,ro={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};at.setAppElement("#root");function ao(){var U,$,L,W,z,H;const[t,e]=I.useState(!1),[o,i]=I.useState(""),[s,p]=I.useState(!0),[b,a]=I.useState(""),[g,c]=I.useState("var(--primary-btn-color)"),m=Me(),d=se(Ne);function y(){e(!0)}function v(){e(!1),c("var(--primary-btn-color)"),a("")}const C=async j=>{j.preventDefault(),s&&(await m(ut({ml:j.target.children[0].children[0].value})),v(),c("var(--primary-btn-color)"),await m(Te()))},A=async()=>{await m(ft()),await m(Te())},F=j=>{const M=j.target.value.trim();i(M),M===""?(p(!1),a("This field is required*"),c("var(--error-validate-input)")):parseInt(M)<0?(p(!1),a("Enter a positive number*"),c("var(--error-validate-input)")):(p(!0),a(""),c("#3CBC81"))},N=j=>{j.target.value.trim()===""?(p(!1),a("This field is required*"),c("var(--error-validate-input)")):parseInt(o)<0?(p(!1),a("Enter a positive number*"),c("var(--error-validate-input)")):(p(!0),a(""),c("#3CBC81"))};return n.jsxs(qn,{children:[n.jsx(In,{children:"Water"}),n.jsxs(Ln,{children:[n.jsx(oo,{percentage:Math.round(((U=d.consumedWaterByDay)==null?void 0:U.ml)*100/(($=d.user)==null?void 0:$.dailyWater))}),n.jsxs(Hn,{children:[n.jsx(Bn,{children:"Water consumption"}),n.jsxs(Kn,{children:[n.jsxs(Un,{children:[((L=d==null?void 0:d.consumedWaterByDay)==null?void 0:L.ml)||0," ",n.jsx("span",{children:"ml"})]}),n.jsxs(zn,{children:[n.jsx("span",{children:"left : "}),((W=d.user)==null?void 0:W.dailyWater)-((z=d.consumedWaterByDay)==null?void 0:z.ml)||((H=d.user)==null?void 0:H.dailyWater),"ml"]})]}),n.jsxs($n,{onClick:y,children:[n.jsx("svg",{children:n.jsx("use",{href:`${J}#icon-add`})}),"Add Water Intake"]})]})]}),n.jsx(Vn,{width:"20",height:"20",fill:"none",onClick:A,children:n.jsx("use",{href:`${J}#icon-trash`})}),n.jsxs(at,{isOpen:t,onRequestClose:v,style:ro,children:[n.jsx(Gn,{children:"Add water Intake"}),n.jsxs(Qn,{onSubmit:j=>C(j),children:[n.jsxs("label",{children:["How much water",n.jsx(Yn,{type:"number",placeholder:"Enter millilitters",onChange:j=>F(j),onBlur:j=>N(j),$borderColor:g}),n.jsx(Xn,{children:b})]}),n.jsx("button",{children:"Confirm"})]}),n.jsx(Zn,{onClick:v,children:"Cancel"})]})]})}const io=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,so=l.div`
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
`,lo=l.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,co=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ce=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,Oe=l.p`
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
`,je=l.div`
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
`,po=l(bt)`
  width: ${t=>t.$widthpx}px !important;
  height: ${t=>t.$heightpx}px !important;
`;yt.register(vt);const uo=t=>{const e={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},o={labels:["Filled","Empty"],datasets:[{data:[t.percentage,100-t.percentage],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},i={id:"backgroundCircle",beforeDatasetsDraw(s,p,b){const{ctx:a}=s;a.save();const g=s.getDatasetMeta(0).data[0].x,c=s.getDatasetMeta(0).data[0].y,m=s.getDatasetMeta(0).data[0].innerRadius,d=s.getDatasetMeta(0).data[0].outerRadius,y=d-m,v=Math.PI/180;a.beginPath(),a.lineWidth=y,a.strokeStyle="#292928",a.arc(g,c,d-y/2,0,v*360,!1),a.stroke()}};return n.jsx(po,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:o,options:e,plugins:[i]})},ge=uo,fo=l.p`
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
`,ho=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,mo=({calories:t,currentCalories:e})=>{const o=()=>Math.round(e*100/t);return n.jsxs(ho,{children:[n.jsx(ge,{percentage:o(),color:"#45FFBC",widthpx:168,heightpx:168}),n.jsxs(fo,{children:[e," ",n.jsx("span",{children:"calories"})]})]})},xo=mo;function go(){var o,i,s,p,b,a,g,c,m,d,y,v,C,A,F,N,U,$,L,W,z,H,j,M,ue,fe,q,X,x,f,w;const t=se(ht),e=se(Ne);return I.useEffect(()=>{console.log(e)},[]),n.jsxs(lo,{children:[n.jsx(io,{children:"Food"}),n.jsxs(so,{children:[n.jsx(xo,{calories:(o=e==null?void 0:e.user)==null?void 0:o.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),n.jsxs(co,{children:[n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((s=(i=e==null?void 0:e.user)==null?void 0:i.dailyNutrition)==null?void 0:s.carbohydrates))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((b=(p=e==null?void 0:e.user)==null?void 0:p.dailyNutrition)==null?void 0:b.carbohydrates))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Carbohidrates"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal:"," ",n.jsx("span",{children:(g=(a=e==null?void 0:e.user)==null?void 0:a.dailyNutrition)==null?void 0:g.carbohydrates})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((m=(c=e==null?void 0:e.user)==null?void 0:c.dailyNutrition)==null?void 0:m.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay)||((y=(d=e==null?void 0:e.user)==null?void 0:d.dailyNutrition)==null?void 0:y.carbohydrates)})]})]})]})]}),n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((C=(v=e==null?void 0:e.user)==null?void 0:v.dailyNutrition)==null?void 0:C.protein))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((F=(A=e==null?void 0:e.user)==null?void 0:A.dailyNutrition)==null?void 0:F.protein))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Protein"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:(U=(N=e==null?void 0:e.user)==null?void 0:N.dailyNutrition)==null?void 0:U.protein})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((L=($=e==null?void 0:e.user)==null?void 0:$.dailyNutrition)==null?void 0:L.protein)-(t==null?void 0:t.totalConsumedProteinPerDay)||((z=(W=e==null?void 0:e.user)==null?void 0:W.dailyNutrition)==null?void 0:z.protein)})]})]})]})]}),n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((j=(H=e==null?void 0:e.user)==null?void 0:H.dailyNutrition)==null?void 0:j.fat))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((ue=(M=e==null?void 0:e.user)==null?void 0:M.dailyNutrition)==null?void 0:ue.fat))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Fat"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:(q=(fe=e==null?void 0:e.user)==null?void 0:fe.dailyNutrition)==null?void 0:q.fat})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((x=(X=e==null?void 0:e.user)==null?void 0:X.dailyNutrition)==null?void 0:x.fat)-(t==null?void 0:t.totalConsumedFatPerDay)||((w=(f=e==null?void 0:e.user)==null?void 0:f.dailyNutrition)==null?void 0:w.fat)})]})]})]})]})]})]})]})}const yo=l.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,vo=l.div`
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
`,bo=l(Ve)`
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
`;function wo(){return n.jsxs("div",{children:[n.jsxs(vo,{children:[n.jsx("h2",{children:"Today"}),n.jsxs(bo,{to:"/dashboard",children:["On the way to the goal",n.jsx("svg",{children:n.jsx("use",{href:`${J}#icon-arrow-right`})})]})]}),n.jsxs(yo,{children:[n.jsx(Et,{}),n.jsx(ao,{}),n.jsx(go,{})]})]})}const Co=l.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,Oo=l.div`
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
`,jo=l.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;l.div`
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
`;l.p`
  min-width: 190px;
`;l.p`
  width: 110px;
`;l.p`
  width: 60px;
`;l.span`
  color: gray;
  font-weight: 500;
`;const _o=l.img`
  width: 36px;
  height: 36px;
`,Eo=l.button`
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
`,Po=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,Ao=l.div`
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
`,So=l.h1`
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
`,No=l.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Mo=l.img`
  width: 32px;
  height: 32px;
`,Ro=l.h2`
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
`,Do=l.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,oe=l.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,To=l.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,ko=l.ul`
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
`,Fo=l.li`
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
`,re=l.input`
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
`,Wo=l.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,Io=l.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Lo=l.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,$o=l.button`
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
`,Bo=l.button`
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
`,Uo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",zo=({onClose:t,image:e,mealType:o})=>{const i=Me(),s=wt({initialValues:{products:[{mealType:o,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]}]},onSubmit:async g=>{try{if(g.products&&g.products.length>0&&g.products[0].foods&&g.products[0].foods.length>0){const c={mealType:o.toLowerCase(),foods:g.products.map(m=>({name:m.foods[0].name?m.foods[0].name:"string",nutrition:{carbohydrates:m.foods[0].nutrition.carbohydrates?Number(m.foods[0].nutrition.carbohydrates):0,protein:m.foods[0].nutrition.protein?Number(m.foods[0].nutrition.protein):0,fat:m.foods[0].nutrition.fat?Number(m.foods[0].nutrition.fat):0},calories:m.foods[0].calories?Number(m.foods[0].calories):0}))};console.log("Food intake data:",c),i(mt(c)),console.log("Backend response:",response),console.log("Response data:",response.data),t()}else console.error("Invalid products array structure")}catch(c){console.error("Submission error:",c),console.error("Error details:",c.response?c.response.data:"No response data")}}}),p=g=>{g.currentTarget===g.target&&t()},b=g=>{const c=[...s.values.products];c.splice(g,1),s.setFieldValue("products",c)},a=()=>{s.setFieldValue("products",[...s.values.products,{mealType:o,foods:[{name:"",nutrition:{carbohydrates:"",protein:"",fat:""},calories:""}]}])};return n.jsx(Po,{onClick:p,children:n.jsxs(Ao,{children:[n.jsx(So,{children:"Record your meal"}),n.jsxs(No,{children:[n.jsx(Mo,{src:e,alt:"Plate"}),n.jsx(Ro,{children:o})]}),n.jsxs(Do,{onSubmit:s.handleSubmit,children:[n.jsxs(To,{children:[s.values.products.map((g,c)=>n.jsx(ko,{children:n.jsxs(Fo,{children:[n.jsx(oe,{children:n.jsx(re,{type:"text",id:`name-${c}`,name:`products[${c}].foods[0].name`,placeholder:"The name of the product or dish"})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:`carbonohidrates-${c}`,name:`products[${c}].foods[0].nutrition.carbohydrates`,placeholder:"Carbonoh."})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:`protein-${c}`,name:`products[${c}].foods[0].nutrition.protein`,placeholder:"Protein"})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:`fat-${c}`,name:`products[${c}].foods[0].nutrition.fat`,placeholder:"Fat"})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:`calories-${c}`,name:`products[${c}].foods[0].calories`,placeholder:"Calories"})}),n.jsx(Io,{type:"button",onClick:()=>b(c),children:n.jsx("img",{src:Uo,alt:"Trash"})})]})},c)),n.jsx(Wo,{type:"button",onClick:a,children:"+ Add more"})]}),n.jsxs(Lo,{children:[n.jsx(Bo,{type:"button",onClick:t,children:"Cancel"}),n.jsx($o,{type:"submit",children:"Confirm"})]})]})]})})},xe=({title:t,image:e})=>{const[o,i]=I.useState(!1),s=()=>i(!o);return n.jsxs(Co,{children:[n.jsxs(Oo,{children:[n.jsx(_o,{src:e,alt:"Plate"}),n.jsx(jo,{children:t})]}),n.jsx(Eo,{onClick:s,children:"+ Record your meal"}),o&&n.jsx(zo,{onClose:s,image:e,mealType:t})]})},Ho="/healthy_hub/assets/dinner-image-19c0e7ef.svg",qo="/healthy_hub/assets/lunch-image-3c133980.svg",Vo="/healthy_hub/assets/snack-image-28a6b2cf.svg",Ko=l.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,Go=l.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Qo=l.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Yo=l(Ve)`
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
`,Xo=l.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Zo=()=>n.jsxs(Ko,{children:[n.jsxs(Go,{children:[n.jsx(Qo,{children:"Diary"}),n.jsx(Yo,{to:"/diary",children:"See more"})]}),n.jsxs(Xo,{children:[n.jsx(xe,{title:"Breakfast",image:Ct}),n.jsx(xe,{title:"Lunch",image:qo}),n.jsx(xe,{title:"Dinner",image:Ho}),n.jsx(xe,{title:"Snack",image:Vo})]})]}),Jo=Zo,er=l.section`
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
`,tr=er;function nr(){const t=Me(),e=se(xt);let o=[];return I.useEffect(()=>{t(gt())},[t]),e&&(o=e.slice(0,4)),n.jsxs(tr,{children:[n.jsx("h2",{children:"Recommended Food"}),n.jsxs("div",{className:"wrapper",children:[n.jsx("ul",{children:o==null?void 0:o.map(({amount:i,calories:s,img:p,name:b,_id:a})=>n.jsx("li",{children:n.jsxs("div",{className:"description",children:[n.jsx("div",{className:"small_img_div",children:n.jsx("img",{src:p,alt:"",width:46,height:46})}),n.jsxs("section",{children:[n.jsx("h4",{children:b}),n.jsxs("p",{children:[i,n.jsxs("span",{children:[s," calories"]})]})]})]})},a))}),n.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",n.jsx("svg",{className:"svg",children:n.jsx("use",{href:`${J}#icon-arrow-right`})})]})]})]})}const or=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function cr(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"MainPage"}),n.jsx(wo,{}),n.jsxs(or,{children:[n.jsx(Jo,{}),n.jsx(nr,{})]})]})}export{cr as default};
