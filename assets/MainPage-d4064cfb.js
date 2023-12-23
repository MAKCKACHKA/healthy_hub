import{s,c as le,d as Ne,j as n,r as I,g as ct,e as dt,h as pt,u as qe,i as ut,k as De,l as ft,m as ht,L as Ve,n as mt,o as xt}from"./index-7f5ec795.js";import{i as J}from"./icons-04a79b9e.js";import{C as gt,A as vt,D as yt}from"./index-3226170c.js";import{u as bt}from"./index.esm-1ae36d31.js";import{b as wt}from"./breakfast-image-b9aa0c9f.js";const Ct=s.h4`
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
`;function _t(t){var o,i;const e=le(Ne);return n.jsxs(jt,{children:[n.jsx(Ct,{children:"Daily Goal"}),n.jsxs(Ot,{children:[n.jsxs(Te,{children:[n.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:n.jsx("use",{href:`${J}#icon-bubble`})}),n.jsxs("div",{children:[n.jsx(ke,{children:"Calories"}),n.jsx(Fe,{children:(o=e.user)==null?void 0:o.dailyCalories})]})]}),n.jsxs(Te,{children:[n.jsx("svg",{style:{stroke:"var(--water-color)"},children:n.jsx("use",{href:`${J}#icon-milk`})}),n.jsxs("div",{children:[n.jsx(ke,{children:"Water"}),n.jsxs(Fe,{children:[(i=e.user)==null?void 0:i.dailyWater," ",n.jsx("span",{children:"ml"})]})]})]})]})]})}var _e={exports:{}},Y={},Ke={exports:{}},Et="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pt=Et,At=Pt;function Ge(){}function Qe(){}Qe.resetWarningCache=Ge;var St=function(){function t(i,l,d,y,a,b){if(b!==At){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Qe,resetWarningCache:Ge};return o.PropTypes=o,o};Ke.exports=St();var Ye=Ke.exports,Ee={exports:{}},T={},Pe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",i="contents",l=/input|select|textarea|button|object|iframe/;function d(c,x){return x.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function y(c){var x=c.offsetWidth<=0&&c.offsetHeight<=0;if(x&&!c.innerHTML)return!0;try{var v=window.getComputedStyle(c),C=v.getPropertyValue("display");return x?C!==i&&d(c,v):C===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var x=c,v=c.getRootNode&&c.getRootNode();x&&x!==document.body;){if(v&&x===v&&(x=v.host.parentNode),y(x))return!1;x=x.parentNode}return!0}function b(c,x){var v=c.nodeName.toLowerCase(),C=l.test(v)&&!c.disabled||v==="a"&&c.href||x;return C&&a(c)}function f(c){var x=c.getAttribute("tabindex");x===null&&(x=void 0);var v=isNaN(x);return(v||x>=0)&&b(c,!v)}function g(c){var x=[].slice.call(c.querySelectorAll("*"),0).reduce(function(v,C){return v.concat(C.shadowRoot?g(C.shadowRoot):[C])},[]);return x.filter(f)}t.exports=e.default})(Pe,Pe.exports);var Xe=Pe.exports;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Dt;T.log=Tt;T.handleBlur=se;T.handleFocus=ce;T.markForFocusLater=kt;T.returnFocus=Ft;T.popWithoutFocus=Wt;T.setupScopedFocus=It;T.teardownScopedFocus=Lt;var Nt=Xe,Mt=Rt(Nt);function Rt(t){return t&&t.__esModule?t:{default:t}}var ee=[],Z=null,Ae=!1;function Dt(){ee=[]}function Tt(){}function se(){Ae=!0}function ce(){if(Ae){if(Ae=!1,!Z)return;setTimeout(function(){if(!Z.contains(document.activeElement)){var t=(0,Mt.default)(Z)[0]||Z;t.focus()}},0)}}function kt(){ee.push(document.activeElement)}function Ft(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{ee.length!==0&&(e=ee.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Wt(){ee.length>0&&ee.pop()}function It(t){Z=t,window.addEventListener?(window.addEventListener("blur",se,!1),document.addEventListener("focus",ce,!0)):(window.attachEvent("onBlur",se),document.attachEvent("onFocus",ce))}function Lt(){Z=null,window.addEventListener?(window.removeEventListener("blur",se),document.removeEventListener("focus",ce)):(window.detachEvent("onBlur",se),document.detachEvent("onFocus",ce))}var Se={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;var o=Xe,i=l(o);function l(a){return a&&a.__esModule?a:{default:a}}function d(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?d(a.activeElement.shadowRoot):a.activeElement}function y(a,b){var f=(0,i.default)(a);if(!f.length){b.preventDefault();return}var g=void 0,c=b.shiftKey,x=f[0],v=f[f.length-1],C=d();if(a===C){if(!c)return;g=v}if(v===C&&!c&&(g=x),x===C&&c&&(g=v),g){b.preventDefault(),g.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),F=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(F){var N=f.indexOf(C);if(N>-1&&(N+=c?-1:1),g=f[N],typeof g>"u"){b.preventDefault(),g=c?v:x,g.focus();return}b.preventDefault(),g.focus()}}t.exports=e.default})(Se,Se.exports);var Bt=Se.exports,k={},Ut=function(){},zt=Ut,D={},Ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Ze);var $t=Ze.exports;Object.defineProperty(D,"__esModule",{value:!0});D.canUseDOM=D.SafeNodeList=D.SafeHTMLCollection=void 0;var Ht=$t,qt=Vt(Ht);function Vt(t){return t&&t.__esModule?t:{default:t}}var we=qt.default,Kt=we.canUseDOM?window.HTMLElement:{};D.SafeHTMLCollection=we.canUseDOM?window.HTMLCollection:{};D.SafeNodeList=we.canUseDOM?window.NodeList:{};D.canUseDOM=we.canUseDOM;D.default=Kt;Object.defineProperty(k,"__esModule",{value:!0});k.resetState=Zt;k.log=Jt;k.assertNodeList=Je;k.setElement=en;k.validateElement=Me;k.hide=tn;k.show=nn;k.documentNotReadyOrSSRTesting=on;var Gt=zt,Qt=Xt(Gt),Yt=D;function Xt(t){return t&&t.__esModule?t:{default:t}}var S=null;function Zt(){S&&(S.removeAttribute?S.removeAttribute("aria-hidden"):S.length!=null?S.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(S).forEach(function(t){return t.removeAttribute("aria-hidden")})),S=null}function Jt(){}function Je(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function en(t){var e=t;if(typeof e=="string"&&Yt.canUseDOM){var o=document.querySelectorAll(e);Je(o,e),e=o}return S=e||S,S}function Me(t){var e=t||S;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Qt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function tn(t){var e=!0,o=!1,i=void 0;try{for(var l=Me(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var y=d.value;y.setAttribute("aria-hidden","true")}}catch(a){o=!0,i=a}finally{try{!e&&l.return&&l.return()}finally{if(o)throw i}}}function nn(t){var e=!0,o=!1,i=void 0;try{for(var l=Me(t)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var y=d.value;y.removeAttribute("aria-hidden")}}catch(a){o=!0,i=a}finally{try{!e&&l.return&&l.return()}finally{if(o)throw i}}}function on(){S=null}var te={};Object.defineProperty(te,"__esModule",{value:!0});te.resetState=rn;te.log=an;var ae={},ie={};function We(t,e){t.classList.remove(e)}function rn(){var t=document.getElementsByTagName("html")[0];for(var e in ae)We(t,ae[e]);var o=document.body;for(var i in ie)We(o,ie[i]);ae={},ie={}}function an(){}var ln=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},sn=function(e,o){return e[o]&&(e[o]-=1),o},cn=function(e,o,i){i.forEach(function(l){ln(o,l),e.add(l)})},dn=function(e,o,i){i.forEach(function(l){sn(o,l),o[l]===0&&e.remove(l)})};te.add=function(e,o){return cn(e.classList,e.nodeName.toLowerCase()=="html"?ae:ie,o.split(" "))};te.remove=function(e,o){return dn(e.classList,e.nodeName.toLowerCase()=="html"?ae:ie,o.split(" "))};var ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.log=un;ne.resetState=fn;function pn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var et=function t(){var e=this;pn(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var i=e.openInstances.indexOf(o);i!==-1&&(e.openInstances.splice(i,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(i){return i(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ve=new et;function un(){console.log("portalOpenInstances ----------"),console.log(ve.openInstances.length),ve.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function fn(){ve=new et}ne.default=ve;var Re={};Object.defineProperty(Re,"__esModule",{value:!0});Re.resetState=gn;Re.log=vn;var hn=ne,mn=xn(hn);function xn(t){return t&&t.__esModule?t:{default:t}}var E=void 0,R=void 0,Q=[];function gn(){for(var t=[E,R],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}E=R=null,Q=[]}function vn(){console.log("bodyTrap ----------"),console.log(Q.length);for(var t=[E,R],e=0;e<t.length;e++){var o=t[e],i=o||{};console.log(i.nodeName,i.className,i.id)}console.log("edn bodyTrap ----------")}function Ie(){Q.length!==0&&Q[Q.length-1].focusContent()}function yn(t,e){!E&&!R&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",Ie),R=E.cloneNode(),R.addEventListener("focus",Ie)),Q=e,Q.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(E.parentElement&&E.parentElement.removeChild(E),R.parentElement&&R.parentElement.removeChild(R))}mn.default.subscribe(yn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(m){for(var u=1;u<arguments.length;u++){var w=arguments[u];for(var r in w)Object.prototype.hasOwnProperty.call(w,r)&&(m[r]=w[r])}return m},i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},l=function(){function m(u,w){for(var r=0;r<w.length;r++){var p=w[r];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(u,p.key,p)}}return function(u,w,r){return w&&m(u.prototype,w),r&&m(u,r),u}}(),d=I,y=Ye,a=W(y),b=T,f=L(b),g=Bt,c=W(g),x=k,v=L(x),C=te,A=L(C),F=D,N=W(F),z=ne,B=W(z);function L(m){if(m&&m.__esModule)return m;var u={};if(m!=null)for(var w in m)Object.prototype.hasOwnProperty.call(m,w)&&(u[w]=m[w]);return u.default=m,u}function W(m){return m&&m.__esModule?m:{default:m}}function $(m,u){if(!(m instanceof u))throw new TypeError("Cannot call a class as a function")}function H(m,u){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:m}function j(m,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);m.prototype=Object.create(u&&u.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(m,u):m.__proto__=u)}var M={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ue=function(u){return u.code==="Tab"||u.keyCode===9},fe=function(u){return u.code==="Escape"||u.keyCode===27},q=0,X=function(m){j(u,m);function u(w){$(this,u);var r=H(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,w));return r.setOverlayRef=function(p){r.overlay=p,r.props.overlayRef&&r.props.overlayRef(p)},r.setContentRef=function(p){r.content=p,r.props.contentRef&&r.props.contentRef(p)},r.afterClose=function(){var p=r.props,_=p.appElement,P=p.ariaHideApp,O=p.htmlOpenClassName,V=p.bodyOpenClassName,K=p.parentSelector,he=K&&K().ownerDocument||document;V&&A.remove(he.body,V),O&&A.remove(he.getElementsByTagName("html")[0],O),P&&q>0&&(q-=1,q===0&&v.show(_)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(f.returnFocus(r.props.preventScroll),f.teardownScopedFocus()):f.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),B.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(f.setupScopedFocus(r.node),f.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var p=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:p},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(p){ue(p)&&(0,c.default)(r.content,p),r.props.shouldCloseOnEsc&&fe(p)&&(p.stopPropagation(),r.requestClose(p))},r.handleOverlayOnClick=function(p){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(p):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(p){!r.props.shouldCloseOnOverlayClick&&p.target==r.overlay&&p.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(p){return r.ownerHandlesClose()&&r.props.onRequestClose(p)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(p,_){var P=(typeof _>"u"?"undefined":i(_))==="object"?_:{base:M[p],afterOpen:M[p]+"--after-open",beforeClose:M[p]+"--before-close"},O=P.base;return r.state.afterOpen&&(O=O+" "+P.afterOpen),r.state.beforeClose&&(O=O+" "+P.beforeClose),typeof _=="string"&&_?O+" "+_:O},r.attributesFromObject=function(p,_){return Object.keys(_).reduce(function(P,O){return P[p+"-"+O]=_[O],P},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return l(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,p){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!p.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,p=r.appElement,_=r.ariaHideApp,P=r.htmlOpenClassName,O=r.bodyOpenClassName,V=r.parentSelector,K=V&&V().ownerDocument||document;O&&A.add(K.body,O),P&&A.add(K.getElementsByTagName("html")[0],P),_&&(q+=1,v.hide(p)),B.default.register(this)}},{key:"render",value:function(){var r=this.props,p=r.id,_=r.className,P=r.overlayClassName,O=r.defaultStyles,V=r.children,K=_?{}:O.content,he=P?{}:O.overlay;if(this.shouldBeClosed())return null;var it={ref:this.setOverlayRef,className:this.buildClassName("overlay",P),style:o({},he,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},lt=o({id:p,ref:this.setContentRef,style:o({},K,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),st=this.props.contentElement(lt,V);return this.props.overlayElement(it,st)}}]),u}(d.Component);X.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},X.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(N.default),a.default.instanceOf(F.SafeHTMLCollection),a.default.instanceOf(F.SafeNodeList),a.default.arrayOf(a.default.instanceOf(N.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=X,t.exports=e.default})(Ee,Ee.exports);var bn=Ee.exports;function tt(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function nt(t){function e(o){var i=this.constructor.getDerivedStateFromProps(t,o);return i??null}this.setState(e.bind(this))}function ot(t,e){try{var o=this.props,i=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,i)}finally{this.props=o,this.state=i}}tt.__suppressDeprecationWarning=!0;nt.__suppressDeprecationWarning=!0;ot.__suppressDeprecationWarning=!0;function wn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,i=null,l=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?i="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(i="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?l="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),o!==null||i!==null||l!==null){var d=t.displayName||t.name,y=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+y+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(i!==null?`
  `+i:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=tt,e.componentWillReceiveProps=nt),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ot;var a=e.componentDidUpdate;e.componentDidUpdate=function(f,g,c){var x=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,f,g,x)}}return t}const Cn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:wn},Symbol.toStringTag,{value:"Module"})),On=ct(Cn);Object.defineProperty(Y,"__esModule",{value:!0});Y.bodyOpenClassName=Y.portalClassName=void 0;var Le=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},jn=function(){function t(e,o){for(var i=0;i<o.length;i++){var l=o[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),rt=I,ye=de(rt),_n=dt,be=de(_n),En=Ye,h=de(En),Pn=bn,Be=de(Pn),An=k,Sn=Mn(An),U=D,Ue=de(U),Nn=On;function Mn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function de(t){return t&&t.__esModule?t:{default:t}}function Rn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Dn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Tn=Y.portalClassName="ReactModalPortal",kn=Y.bodyOpenClassName="ReactModal__Body--open",G=U.canUseDOM&&be.default.createPortal!==void 0,$e=function(e){return document.createElement(e)},He=function(){return G?be.default.createPortal:be.default.unstable_renderSubtreeIntoContainer};function me(t){return t()}var pe=function(t){Dn(e,t);function e(){var o,i,l,d;Rn(this,e);for(var y=arguments.length,a=Array(y),b=0;b<y;b++)a[b]=arguments[b];return d=(i=(l=ze(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),l),l.removePortal=function(){!G&&be.default.unmountComponentAtNode(l.node);var f=me(l.props.parentSelector);f&&f.contains(l.node)?f.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(f){l.portal=f},l.renderPortal=function(f){var g=He(),c=g(l,ye.default.createElement(Be.default,Le({defaultStyles:e.defaultStyles},f)),l.node);l.portalRef(c)},i),ze(l,d)}return jn(e,[{key:"componentDidMount",value:function(){if(U.canUseDOM){G||(this.node=$e("div")),this.node.className=this.props.portalClassName;var i=me(this.props.parentSelector);i.appendChild(this.node),!G&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(i){var l=me(i.parentSelector),d=me(this.props.parentSelector);return{prevParent:l,nextParent:d}}},{key:"componentDidUpdate",value:function(i,l,d){if(U.canUseDOM){var y=this.props,a=y.isOpen,b=y.portalClassName;i.portalClassName!==b&&(this.node.className=b);var f=d.prevParent,g=d.nextParent;g!==f&&(f.removeChild(this.node),g.appendChild(this.node)),!(!i.isOpen&&!a)&&!G&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!U.canUseDOM||!this.node||!this.portal)){var i=this.portal.state,l=Date.now(),d=i.isOpen&&this.props.closeTimeoutMS&&(i.closesAt||l+this.props.closeTimeoutMS);d?(i.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-l)):this.removePortal()}}},{key:"render",value:function(){if(!U.canUseDOM||!G)return null;!this.node&&G&&(this.node=$e("div"));var i=He();return i(ye.default.createElement(Be.default,Le({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(i){Sn.setElement(i)}}]),e}(rt.Component);pe.propTypes={isOpen:h.default.bool.isRequired,style:h.default.shape({content:h.default.object,overlay:h.default.object}),portalClassName:h.default.string,bodyOpenClassName:h.default.string,htmlOpenClassName:h.default.string,className:h.default.oneOfType([h.default.string,h.default.shape({base:h.default.string.isRequired,afterOpen:h.default.string.isRequired,beforeClose:h.default.string.isRequired})]),overlayClassName:h.default.oneOfType([h.default.string,h.default.shape({base:h.default.string.isRequired,afterOpen:h.default.string.isRequired,beforeClose:h.default.string.isRequired})]),appElement:h.default.oneOfType([h.default.instanceOf(Ue.default),h.default.instanceOf(U.SafeHTMLCollection),h.default.instanceOf(U.SafeNodeList),h.default.arrayOf(h.default.instanceOf(Ue.default))]),onAfterOpen:h.default.func,onRequestClose:h.default.func,closeTimeoutMS:h.default.number,ariaHideApp:h.default.bool,shouldFocusAfterRender:h.default.bool,shouldCloseOnOverlayClick:h.default.bool,shouldReturnFocusAfterClose:h.default.bool,preventScroll:h.default.bool,parentSelector:h.default.func,aria:h.default.object,data:h.default.object,role:h.default.string,contentLabel:h.default.string,shouldCloseOnEsc:h.default.bool,overlayRef:h.default.func,contentRef:h.default.func,id:h.default.string,overlayElement:h.default.func,contentElement:h.default.func};pe.defaultProps={isOpen:!1,portalClassName:Tn,bodyOpenClassName:kn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return ye.default.createElement("div",e,o)},contentElement:function(e,o){return ye.default.createElement("div",e,o)}};pe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Nn.polyfill)(pe);Y.default=pe;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Y,i=l(o);function l(d){return d&&d.__esModule?d:{default:d}}e.default=i.default,t.exports=e.default})(_e,_e.exports);var Fn=_e.exports;const at=pt(Fn),Wn=s.h4`
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
`,Bn=s.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Un=s.p`
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
`,Vn=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Kn=s.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,Gn=s.form`
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
`,Qn=s.input`
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
`,Yn=s.p`
  color: #e74a3b;

  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.16;
  margin-top: 4px;
`,Xn=s.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Zn=s.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Jn=s.div`
  height: ${t=>t.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,eo=s.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,to=({percentage:t})=>n.jsxs(Zn,{children:[n.jsxs(eo,{children:[isNaN(t)?0:t,"%"]}),n.jsx(Jn,{$percentage:t})]}),no=to,oo={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};at.setAppElement("#root");function ro(){var z,B,L,W,$,H;const[t,e]=I.useState(!1),[o,i]=I.useState(""),[l,d]=I.useState(!0),[y,a]=I.useState(""),[b,f]=I.useState("var(--primary-btn-color)"),g=qe(),c=le(Ne);function x(){e(!0)}function v(){e(!1),f("var(--primary-btn-color)"),a("")}const C=async j=>{j.preventDefault(),l&&(await g(ut({ml:j.target.children[0].children[0].value})),v(),f("var(--primary-btn-color)"),await g(De()))},A=async()=>{await g(ft()),await g(De())},F=j=>{const M=j.target.value.trim();i(M),M===""?(d(!1),a("This field is required*"),f("var(--error-validate-input)")):parseInt(M)<0?(d(!1),a("Enter a positive number*"),f("var(--error-validate-input)")):(d(!0),a(""),f("#3CBC81"))},N=j=>{j.target.value.trim()===""?(d(!1),a("This field is required*"),f("var(--error-validate-input)")):parseInt(o)<0?(d(!1),a("Enter a positive number*"),f("var(--error-validate-input)")):(d(!0),a(""),f("#3CBC81"))};return n.jsxs(Hn,{children:[n.jsx(Wn,{children:"Water"}),n.jsxs(In,{children:[n.jsx(no,{percentage:Math.round(((z=c.consumedWaterByDay)==null?void 0:z.ml)*100/((B=c.user)==null?void 0:B.dailyWater))}),n.jsxs($n,{children:[n.jsx(Bn,{children:"Water consumption"}),n.jsxs(Vn,{children:[n.jsxs(Un,{children:[((L=c==null?void 0:c.consumedWaterByDay)==null?void 0:L.ml)||0," ",n.jsx("span",{children:"ml"})]}),n.jsxs(zn,{children:[n.jsx("span",{children:"left : "}),((W=c.user)==null?void 0:W.dailyWater)-(($=c.consumedWaterByDay)==null?void 0:$.ml)||((H=c.user)==null?void 0:H.dailyWater),"ml"]})]}),n.jsxs(Ln,{onClick:x,children:[n.jsx("svg",{children:n.jsx("use",{href:`${J}#icon-add`})}),"Add Water Intake"]})]})]}),n.jsx(qn,{width:"20",height:"20",fill:"none",onClick:A,children:n.jsx("use",{href:`${J}#icon-trash`})}),n.jsxs(at,{isOpen:t,onRequestClose:v,style:oo,children:[n.jsx(Kn,{children:"Add water Intake"}),n.jsxs(Gn,{onSubmit:j=>C(j),children:[n.jsxs("label",{children:["How much water",n.jsx(Qn,{type:"number",placeholder:"Enter millilitters",onChange:j=>F(j),onBlur:j=>N(j),$borderColor:b}),n.jsx(Yn,{children:y})]}),n.jsx("button",{children:"Confirm"})]}),n.jsx(Xn,{onClick:v,children:"Cancel"})]})]})}const ao=s.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,io=s.div`
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
`,lo=s.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,so=s.div`
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
`,co=s(yt)`
  width: ${t=>t.$widthpx}px !important;
  height: ${t=>t.$heightpx}px !important;
`;gt.register(vt);const po=t=>{const e={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},o={labels:["Filled","Empty"],datasets:[{data:[t.percentage,100-t.percentage],backgroundColor:[t.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},i={id:"backgroundCircle",beforeDatasetsDraw(l,d,y){const{ctx:a}=l;a.save();const b=l.getDatasetMeta(0).data[0].x,f=l.getDatasetMeta(0).data[0].y,g=l.getDatasetMeta(0).data[0].innerRadius,c=l.getDatasetMeta(0).data[0].outerRadius,x=c-g,v=Math.PI/180;a.beginPath(),a.lineWidth=x,a.strokeStyle="#292928",a.arc(b,f,c-x/2,0,v*360,!1),a.stroke()}};return n.jsx(co,{$widthpx:t.widthpx,$heightpx:t.heightpx,data:o,options:e,plugins:[i]})},ge=po,uo=s.p`
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
`,fo=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,ho=({calories:t,currentCalories:e})=>{const o=()=>Math.round(e*100/t);return n.jsxs(fo,{children:[n.jsx(ge,{percentage:o(),color:"#45FFBC",widthpx:168,heightpx:168}),n.jsxs(uo,{children:[e," ",n.jsx("span",{children:"calories"})]})]})},mo=ho;function xo(){var o,i,l,d,y,a,b,f,g,c,x,v,C,A,F,N,z,B,L,W,$,H,j,M,ue,fe,q,X,m,u,w;const t=le(ht),e=le(Ne);return I.useEffect(()=>{console.log(e)},[]),n.jsxs(lo,{children:[n.jsx(ao,{children:"Food"}),n.jsxs(io,{children:[n.jsx(mo,{calories:(o=e==null?void 0:e.user)==null?void 0:o.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),n.jsxs(so,{children:[n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((l=(i=e==null?void 0:e.user)==null?void 0:i.dailyNutrition)==null?void 0:l.carbohydrates))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedCarbohydratesPerDay)*100/((y=(d=e==null?void 0:e.user)==null?void 0:d.dailyNutrition)==null?void 0:y.carbohydrates))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Carbohidrates"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal:"," ",n.jsx("span",{children:(b=(a=e==null?void 0:e.user)==null?void 0:a.dailyNutrition)==null?void 0:b.carbohydrates})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((g=(f=e==null?void 0:e.user)==null?void 0:f.dailyNutrition)==null?void 0:g.carbohydrates)-(t==null?void 0:t.totalConsumedCarbohydratesPerDay)||((x=(c=e==null?void 0:e.user)==null?void 0:c.dailyNutrition)==null?void 0:x.carbohydrates)})]})]})]})]}),n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((C=(v=e==null?void 0:e.user)==null?void 0:v.dailyNutrition)==null?void 0:C.protein))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedProteinPerDay)*100/((F=(A=e==null?void 0:e.user)==null?void 0:A.dailyNutrition)==null?void 0:F.protein))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Protein"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:(z=(N=e==null?void 0:e.user)==null?void 0:N.dailyNutrition)==null?void 0:z.protein})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((L=(B=e==null?void 0:e.user)==null?void 0:B.dailyNutrition)==null?void 0:L.protein)-(t==null?void 0:t.totalConsumedProteinPerDay)||(($=(W=e==null?void 0:e.user)==null?void 0:W.dailyNutrition)==null?void 0:$.protein)})]})]})]})]}),n.jsxs(Ce,{children:[n.jsx(ge,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((j=(H=e==null?void 0:e.user)==null?void 0:H.dailyNutrition)==null?void 0:j.fat))||0}),n.jsxs(Oe,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/((ue=(M=e==null?void 0:e.user)==null?void 0:M.dailyNutrition)==null?void 0:ue.fat))||0,"%"]}),n.jsxs(je,{children:[n.jsx("h3",{children:"Fat"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:(q=(fe=e==null?void 0:e.user)==null?void 0:fe.dailyNutrition)==null?void 0:q.fat})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:((m=(X=e==null?void 0:e.user)==null?void 0:X.dailyNutrition)==null?void 0:m.fat)-(t==null?void 0:t.totalConsumedFatPerDay)||((w=(u=e==null?void 0:e.user)==null?void 0:u.dailyNutrition)==null?void 0:w.fat)})]})]})]})]})]})]})]})}const go=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,vo=s.div`
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
`,yo=s(Ve)`
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
`;function bo(){return n.jsxs("div",{children:[n.jsxs(vo,{children:[n.jsx("h2",{children:"Today"}),n.jsxs(yo,{to:"/dashboard",children:["On the way to the goal",n.jsx("svg",{children:n.jsx("use",{href:`${J}#icon-arrow-right`})})]})]}),n.jsxs(go,{children:[n.jsx(_t,{}),n.jsx(ro,{}),n.jsx(xo,{})]})]})}const wo=s.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,Co=s.div`
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
`,Oo=s.h3`
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
`;const jo=s.img`
  width: 36px;
  height: 36px;
`,_o=s.button`
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
`,Eo=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,Po=s.div`
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
`,Ao=s.h1`
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
`,So=s.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,No=s.img`
  width: 32px;
  height: 32px;
`,Mo=s.h2`
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
`,Ro=s.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,oe=s.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,Do=s.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,To=s.ul`
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
`,ko=s.li`
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
`,re=s.input`
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
`,Fo=s.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,Wo=s.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Io=s.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,Lo=s.button`
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
`,Bo=s.button`
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
`,Uo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",zo=({onClose:t,onSubmit:e,image:o,mealType:i})=>{const l=bt({initialValues:{carbonohidrates:"",protein:"",fat:"",calories:""},onSubmit:a=>{e(a),t()}}),d=a=>{a.currentTarget===a.target&&t()},y=()=>{l.setValues({carbonohidrates:"",protein:"",fat:"",calories:""})};return n.jsx(Eo,{onClick:d,children:n.jsxs(Po,{children:[n.jsx(Ao,{children:"Record your meal"}),n.jsxs(So,{children:[n.jsx(No,{src:o,alt:"Plate"}),n.jsx(Mo,{children:i})]}),n.jsxs(Ro,{onSubmit:l.handleSubmit,children:[n.jsxs(Do,{children:[n.jsx(To,{children:n.jsxs(ko,{children:[n.jsx(oe,{children:n.jsx(re,{type:"text",id:"carbonohidrates",name:"carbonohidrates",placeholder:"The name of the product or dish"})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:"field1",name:"field1",placeholder:"Carbonoh."})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:"protein",name:"protein",placeholder:"Protein"})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:"fat",name:"fat",placeholder:"Fat"})}),n.jsx(oe,{children:n.jsx(re,{type:"number",id:"calories",name:"calories",placeholder:"Calories"})}),n.jsx(Wo,{type:"button",onClick:y,children:n.jsx("img",{src:Uo,alt:"trash"})})]})}),n.jsx(Fo,{children:"+ Add more"})]}),n.jsxs(Io,{children:[n.jsx(Bo,{type:"button",onClick:t,children:"Cancel"}),n.jsx(Lo,{type:"submit",children:"Confirm"})]})]})]})})},xe=({title:t,image:e})=>{const[o,i]=I.useState(!1),l=()=>i(!o);return n.jsxs(wo,{children:[n.jsxs(Co,{children:[n.jsx(jo,{src:e,alt:"Plate"}),n.jsx(Oo,{children:t})]}),n.jsx(_o,{onClick:l,children:"+ Record your meal"}),o&&n.jsx(zo,{onClose:l,image:e,mealType:t})]})},$o="/healthy_hub/assets/dinner-image-19c0e7ef.svg",Ho="/healthy_hub/assets/lunch-image-3c133980.svg",qo="/healthy_hub/assets/snack-image-28a6b2cf.svg",Vo=s.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,Ko=s.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Go=s.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Qo=s(Ve)`
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
`,Yo=s.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Xo=()=>n.jsxs(Vo,{children:[n.jsxs(Ko,{children:[n.jsx(Go,{children:"Diary"}),n.jsx(Qo,{to:"/diary",children:"See more"})]}),n.jsxs(Yo,{children:[n.jsx(xe,{title:"Breakfast",image:wt}),n.jsx(xe,{title:"Lunch",image:Ho}),n.jsx(xe,{title:"Dinner",image:$o}),n.jsx(xe,{title:"Snack",image:qo})]})]}),Zo=Xo,Jo=s.section`
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
`,er=Jo;function tr(){const t=qe(),e=le(mt);let o=[];return I.useEffect(()=>{t(xt())},[t]),e&&(o=e.slice(0,4)),n.jsxs(er,{children:[n.jsx("h2",{children:"Recommended Food"}),n.jsxs("div",{className:"wrapper",children:[n.jsx("ul",{children:o==null?void 0:o.map(({amount:i,calories:l,img:d,name:y,_id:a})=>n.jsx("li",{children:n.jsxs("div",{className:"description",children:[n.jsx("div",{className:"small_img_div",children:n.jsx("img",{src:d,alt:"",width:46,height:46})}),n.jsxs("section",{children:[n.jsx("h4",{children:y}),n.jsxs("p",{children:[i,n.jsxs("span",{children:[l," calories"]})]})]})]})},a))}),n.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",n.jsx("svg",{className:"svg",children:n.jsx("use",{href:`${J}#icon-arrow-right`})})]})]})]})}const nr=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function sr(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"MainPage"}),n.jsx(bo,{}),n.jsxs(nr,{children:[n.jsx(Zo,{}),n.jsx(tr,{})]})]})}export{sr as default};
