import{s as l,j as n,r as T,g as at,c as it,d as st,L as Fe,e as lt,h as ct,i as dt}from"./index-2882b591.js";import{i as z}from"./icons-42490e33.js";import{C as pt,A as ut,D as ft}from"./index-40b77d16.js";import{u as ht}from"./index.esm-a5e67d56.js";const mt=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,xt=l.div`
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
`,_e=l.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,Se=l.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Ee=l.p`
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
`,gt=l.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function vt(e){return n.jsxs(gt,{children:[n.jsx(mt,{children:"Daily Goal"}),n.jsxs(xt,{children:[n.jsxs(_e,{children:[n.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:n.jsx("use",{href:`${z}#icon-bubble`})}),n.jsxs("div",{children:[n.jsx(Se,{children:"Calories"}),n.jsx(Ee,{children:e.calories})]})]}),n.jsxs(_e,{children:[n.jsx("svg",{style:{stroke:"var(--water-color)"},children:n.jsx("use",{href:`${z}#icon-milk`})}),n.jsxs("div",{children:[n.jsx(Se,{children:"Water"}),n.jsxs(Ee,{children:[e.water," ",n.jsx("span",{children:"ml"})]})]})]})]})]})}var ge={exports:{}},I={},We={exports:{}},yt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bt=yt,wt=bt;function Le(){}function Ie(){}Ie.resetWarningCache=Le;var Ct=function(){function e(i,s,h,v,a,y){if(y!==wt){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ie,resetWarningCache:Le};return o.PropTypes=o,o};We.exports=Ct();var Ue=We.exports,ve={exports:{}},P={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",i="contents",s=/input|select|textarea|button|object|iframe/;function h(u,m){return m.getPropertyValue("overflow")!=="visible"||u.scrollWidth<=0&&u.scrollHeight<=0}function v(u){var m=u.offsetWidth<=0&&u.offsetHeight<=0;if(m&&!u.innerHTML)return!0;try{var b=window.getComputedStyle(u),_=b.getPropertyValue("display");return m?_!==i&&h(u,b):_===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(u){for(var m=u,b=u.getRootNode&&u.getRootNode();m&&m!==document.body;){if(b&&m===b&&(m=b.host.parentNode),v(m))return!1;m=m.parentNode}return!0}function y(u,m){var b=u.nodeName.toLowerCase(),_=s.test(b)&&!u.disabled||b==="a"&&u.href||m;return _&&a(u)}function x(u){var m=u.getAttribute("tabindex");m===null&&(m=void 0);var b=isNaN(m);return(b||m>=0)&&y(u,!b)}function g(u){var m=[].slice.call(u.querySelectorAll("*"),0).reduce(function(b,_){return b.concat(_.shadowRoot?g(_.shadowRoot):[_])},[]);return m.filter(x)}e.exports=t.default})(ye,ye.exports);var Be=ye.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=St;P.log=Et;P.handleBlur=X;P.handleFocus=Z;P.markForFocusLater=At;P.returnFocus=Mt;P.popWithoutFocus=Pt;P.setupScopedFocus=Rt;P.teardownScopedFocus=Tt;var Ot=Be,jt=_t(Ot);function _t(e){return e&&e.__esModule?e:{default:e}}var $=[],B=null,be=!1;function St(){$=[]}function Et(){}function X(){be=!0}function Z(){if(be){if(be=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,jt.default)(B)[0]||B;e.focus()}},0)}}function At(){$.push(document.activeElement)}function Mt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{$.length!==0&&(t=$.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Pt(){$.length>0&&$.pop()}function Rt(e){B=e,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",Z,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",Z))}function Tt(){B=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",Z)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",Z))}var we={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var o=Be,i=s(o);function s(a){return a&&a.__esModule?a:{default:a}}function h(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?h(a.activeElement.shadowRoot):a.activeElement}function v(a,y){var x=(0,i.default)(a);if(!x.length){y.preventDefault();return}var g=void 0,u=y.shiftKey,m=x[0],b=x[x.length-1],_=h();if(a===_){if(!u)return;g=b}if(b===_&&!u&&(g=m),m===_&&u&&(g=b),g){y.preventDefault(),g.focus();return}var N=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),K=N!=null&&N[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(K){var U=x.indexOf(_);if(U>-1&&(U+=u?-1:1),g=x[U],typeof g>"u"){y.preventDefault(),g=u?b:m,g.focus();return}y.preventDefault(),g.focus()}}e.exports=t.default})(we,we.exports);var Nt=we.exports,R={},Dt=function(){},kt=Dt,M={},ze={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=o:window.ExecutionEnvironment=o})()})(ze);var Ft=ze.exports;Object.defineProperty(M,"__esModule",{value:!0});M.canUseDOM=M.SafeNodeList=M.SafeHTMLCollection=void 0;var Wt=Ft,Lt=It(Wt);function It(e){return e&&e.__esModule?e:{default:e}}var de=Lt.default,Ut=de.canUseDOM?window.HTMLElement:{};M.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};M.SafeNodeList=de.canUseDOM?window.NodeList:{};M.canUseDOM=de.canUseDOM;M.default=Ut;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=qt;R.log=Kt;R.assertNodeList=$e;R.setElement=Gt;R.validateElement=Ce;R.hide=Vt;R.show=Qt;R.documentNotReadyOrSSRTesting=Yt;var Bt=kt,zt=Ht(Bt),$t=M;function Ht(e){return e&&e.__esModule?e:{default:e}}var E=null;function qt(){E&&(E.removeAttribute?E.removeAttribute("aria-hidden"):E.length!=null?E.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(E).forEach(function(e){return e.removeAttribute("aria-hidden")})),E=null}function Kt(){}function $e(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Gt(e){var t=e;if(typeof t=="string"&&$t.canUseDOM){var o=document.querySelectorAll(t);$e(o,t),t=o}return E=t||E,E}function Ce(e){var t=e||E;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,zt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Vt(e){var t=!0,o=!1,i=void 0;try{for(var s=Ce(e)[Symbol.iterator](),h;!(t=(h=s.next()).done);t=!0){var v=h.value;v.setAttribute("aria-hidden","true")}}catch(a){o=!0,i=a}finally{try{!t&&s.return&&s.return()}finally{if(o)throw i}}}function Qt(e){var t=!0,o=!1,i=void 0;try{for(var s=Ce(e)[Symbol.iterator](),h;!(t=(h=s.next()).done);t=!0){var v=h.value;v.removeAttribute("aria-hidden")}}catch(a){o=!0,i=a}finally{try{!t&&s.return&&s.return()}finally{if(o)throw i}}}function Yt(){E=null}var H={};Object.defineProperty(H,"__esModule",{value:!0});H.resetState=Xt;H.log=Zt;var Q={},Y={};function Ae(e,t){e.classList.remove(t)}function Xt(){var e=document.getElementsByTagName("html")[0];for(var t in Q)Ae(e,Q[t]);var o=document.body;for(var i in Y)Ae(o,Y[i]);Q={},Y={}}function Zt(){}var Jt=function(t,o){return t[o]||(t[o]=0),t[o]+=1,o},en=function(t,o){return t[o]&&(t[o]-=1),o},tn=function(t,o,i){i.forEach(function(s){Jt(o,s),t.add(s)})},nn=function(t,o,i){i.forEach(function(s){en(o,s),o[s]===0&&t.remove(s)})};H.add=function(t,o){return tn(t.classList,t.nodeName.toLowerCase()=="html"?Q:Y,o.split(" "))};H.remove=function(t,o){return nn(t.classList,t.nodeName.toLowerCase()=="html"?Q:Y,o.split(" "))};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.log=rn;q.resetState=an;function on(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var He=function e(){var t=this;on(this,e),this.register=function(o){t.openInstances.indexOf(o)===-1&&(t.openInstances.push(o),t.emit("register"))},this.deregister=function(o){var i=t.openInstances.indexOf(o);i!==-1&&(t.openInstances.splice(i,1),t.emit("deregister"))},this.subscribe=function(o){t.subscribers.push(o)},this.emit=function(o){t.subscribers.forEach(function(i){return i(o,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},se=new He;function rn(){console.log("portalOpenInstances ----------"),console.log(se.openInstances.length),se.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function an(){se=new He}q.default=se;var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.resetState=dn;Oe.log=pn;var sn=q,ln=cn(sn);function cn(e){return e&&e.__esModule?e:{default:e}}var j=void 0,A=void 0,L=[];function dn(){for(var e=[j,A],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}j=A=null,L=[]}function pn(){console.log("bodyTrap ----------"),console.log(L.length);for(var e=[j,A],t=0;t<e.length;t++){var o=e[t],i=o||{};console.log(i.nodeName,i.className,i.id)}console.log("edn bodyTrap ----------")}function Me(){L.length!==0&&L[L.length-1].focusContent()}function un(e,t){!j&&!A&&(j=document.createElement("div"),j.setAttribute("data-react-modal-body-trap",""),j.style.position="absolute",j.style.opacity="0",j.setAttribute("tabindex","0"),j.addEventListener("focus",Me),A=j.cloneNode(),A.addEventListener("focus",Me)),L=t,L.length>0?(document.body.firstChild!==j&&document.body.insertBefore(j,document.body.firstChild),document.body.lastChild!==A&&document.body.appendChild(A)):(j.parentElement&&j.parentElement.removeChild(j),A.parentElement&&A.parentElement.removeChild(A))}ln.default.subscribe(un);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(f){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var r in w)Object.prototype.hasOwnProperty.call(w,r)&&(f[r]=w[r])}return f},i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s=function(){function f(p,w){for(var r=0;r<w.length;r++){var c=w[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,c.key,c)}}return function(p,w,r){return w&&f(p.prototype,w),r&&f(p,r),p}}(),h=T,v=Ue,a=te(v),y=P,x=pe(y),g=Nt,u=te(g),m=R,b=pe(m),_=H,N=pe(_),K=M,U=te(K),Ye=q,je=te(Ye);function pe(f){if(f&&f.__esModule)return f;var p={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(p[w]=f[w]);return p.default=f,p}function te(f){return f&&f.__esModule?f:{default:f}}function Xe(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function Ze(f,p){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:f}function Je(f,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);f.prototype=Object.create(p&&p.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(f,p):f.__proto__=p)}var ue={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},et=function(p){return p.code==="Tab"||p.keyCode===9},tt=function(p){return p.code==="Escape"||p.keyCode===27},ne=0,fe=function(f){Je(p,f);function p(w){Xe(this,p);var r=Ze(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,w));return r.setOverlayRef=function(c){r.overlay=c,r.props.overlayRef&&r.props.overlayRef(c)},r.setContentRef=function(c){r.content=c,r.props.contentRef&&r.props.contentRef(c)},r.afterClose=function(){var c=r.props,O=c.appElement,S=c.ariaHideApp,C=c.htmlOpenClassName,k=c.bodyOpenClassName,F=c.parentSelector,oe=F&&F().ownerDocument||document;k&&N.remove(oe.body,k),C&&N.remove(oe.getElementsByTagName("html")[0],C),S&&ne>0&&(ne-=1,ne===0&&b.show(O)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(x.returnFocus(r.props.preventScroll),x.teardownScopedFocus()):x.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),je.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(x.setupScopedFocus(r.node),x.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var c=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:c},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(c){et(c)&&(0,u.default)(r.content,c),r.props.shouldCloseOnEsc&&tt(c)&&(c.stopPropagation(),r.requestClose(c))},r.handleOverlayOnClick=function(c){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(c):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(c){!r.props.shouldCloseOnOverlayClick&&c.target==r.overlay&&c.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(c){return r.ownerHandlesClose()&&r.props.onRequestClose(c)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(c,O){var S=(typeof O>"u"?"undefined":i(O))==="object"?O:{base:ue[c],afterOpen:ue[c]+"--after-open",beforeClose:ue[c]+"--before-close"},C=S.base;return r.state.afterOpen&&(C=C+" "+S.afterOpen),r.state.beforeClose&&(C=C+" "+S.beforeClose),typeof O=="string"&&O?C+" "+O:C},r.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(S,C){return S[c+"-"+C]=O[C],S},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return s(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,c){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,c=r.appElement,O=r.ariaHideApp,S=r.htmlOpenClassName,C=r.bodyOpenClassName,k=r.parentSelector,F=k&&k().ownerDocument||document;C&&N.add(F.body,C),S&&N.add(F.getElementsByTagName("html")[0],S),O&&(ne+=1,b.hide(c)),je.default.register(this)}},{key:"render",value:function(){var r=this.props,c=r.id,O=r.className,S=r.overlayClassName,C=r.defaultStyles,k=r.children,F=O?{}:C.content,oe=S?{}:C.overlay;if(this.shouldBeClosed())return null;var nt={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},oe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ot=o({id:c,ref:this.setContentRef,style:o({},F,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),rt=this.props.contentElement(ot,k);return this.props.overlayElement(nt,rt)}}]),p}(h.Component);fe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},fe.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(U.default),a.default.instanceOf(K.SafeHTMLCollection),a.default.instanceOf(K.SafeNodeList),a.default.arrayOf(a.default.instanceOf(U.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=fe,e.exports=t.default})(ve,ve.exports);var fn=ve.exports;function qe(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ke(e){function t(o){var i=this.constructor.getDerivedStateFromProps(e,o);return i??null}this.setState(t.bind(this))}function Ge(e,t){try{var o=this.props,i=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,i)}finally{this.props=o,this.state=i}}qe.__suppressDeprecationWarning=!0;Ke.__suppressDeprecationWarning=!0;Ge.__suppressDeprecationWarning=!0;function hn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var o=null,i=null,s=null;if(typeof t.componentWillMount=="function"?o="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?i="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(i="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||i!==null||s!==null){var h=e.displayName||e.name,v=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+h+" uses "+v+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(i!==null?`
  `+i:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=qe,t.componentWillReceiveProps=Ke),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ge;var a=t.componentDidUpdate;t.componentDidUpdate=function(x,g,u){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:u;a.call(this,x,g,m)}}return e}const mn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:hn},Symbol.toStringTag,{value:"Module"})),xn=at(mn);Object.defineProperty(I,"__esModule",{value:!0});I.bodyOpenClassName=I.portalClassName=void 0;var Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},gn=function(){function e(t,o){for(var i=0;i<o.length;i++){var s=o[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),Ve=T,le=J(Ve),vn=it,ce=J(vn),yn=Ue,d=J(yn),bn=fn,Re=J(bn),wn=R,Cn=jn(wn),D=M,Te=J(D),On=xn;function jn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function J(e){return e&&e.__esModule?e:{default:e}}function _n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ne(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Sn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var En=I.portalClassName="ReactModalPortal",An=I.bodyOpenClassName="ReactModal__Body--open",W=D.canUseDOM&&ce.default.createPortal!==void 0,De=function(t){return document.createElement(t)},ke=function(){return W?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function re(e){return e()}var ee=function(e){Sn(t,e);function t(){var o,i,s,h;_n(this,t);for(var v=arguments.length,a=Array(v),y=0;y<v;y++)a[y]=arguments[y];return h=(i=(s=Ne(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(a))),s),s.removePortal=function(){!W&&ce.default.unmountComponentAtNode(s.node);var x=re(s.props.parentSelector);x&&x.contains(s.node)?x.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(x){s.portal=x},s.renderPortal=function(x){var g=ke(),u=g(s,le.default.createElement(Re.default,Pe({defaultStyles:t.defaultStyles},x)),s.node);s.portalRef(u)},i),Ne(s,h)}return gn(t,[{key:"componentDidMount",value:function(){if(D.canUseDOM){W||(this.node=De("div")),this.node.className=this.props.portalClassName;var i=re(this.props.parentSelector);i.appendChild(this.node),!W&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(i){var s=re(i.parentSelector),h=re(this.props.parentSelector);return{prevParent:s,nextParent:h}}},{key:"componentDidUpdate",value:function(i,s,h){if(D.canUseDOM){var v=this.props,a=v.isOpen,y=v.portalClassName;i.portalClassName!==y&&(this.node.className=y);var x=h.prevParent,g=h.nextParent;g!==x&&(x.removeChild(this.node),g.appendChild(this.node)),!(!i.isOpen&&!a)&&!W&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var i=this.portal.state,s=Date.now(),h=i.isOpen&&this.props.closeTimeoutMS&&(i.closesAt||s+this.props.closeTimeoutMS);h?(i.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,h-s)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!W)return null;!this.node&&W&&(this.node=De("div"));var i=ke();return i(le.default.createElement(Re.default,Pe({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(i){Cn.setElement(i)}}]),t}(Ve.Component);ee.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Te.default),d.default.instanceOf(D.SafeHTMLCollection),d.default.instanceOf(D.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Te.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};ee.defaultProps={isOpen:!1,portalClassName:En,bodyOpenClassName:An,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,o){return le.default.createElement("div",t,o)},contentElement:function(t,o){return le.default.createElement("div",t,o)}};ee.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,On.polyfill)(ee);I.default=ee;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=I,i=s(o);function s(h){return h&&h.__esModule?h:{default:h}}t.default=i.default,e.exports=t.default})(ge,ge.exports);var Mn=ge.exports;const Qe=st(Mn),Pn=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Rn=l.div`
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
`,Tn=l.button`
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
`,Nn=l.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Dn=l.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,kn=l.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Fn=l.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Wn=l.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,Ln=l.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,In=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Un=l.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,Bn=l.form`
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
`,zn=l.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,$n=l.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Hn=l.div`
  height: ${e=>e.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,qn=l.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Kn=({percentage:e})=>n.jsxs($n,{children:[n.jsxs(qn,{children:[isNaN(e)?0:e,"%"]}),n.jsx(Hn,{$percentage:e})]}),Gn=Kn,Vn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Qe.setAppElement("#root");function Qn({waterobjective:e,watercurrent:t}){const[o,i]=T.useState(t??0);T.useState(e);const[s,h]=T.useState(0),[v,a]=T.useState(!1);function y(u){u.preventDefault();let m=u.target.children[0].children[0].value;h(s+Math.round(m*100/e)),i(o+Math.round(u.target.children[0].children[0].value)),g()}function x(){a(!0)}function g(){a(!1)}return n.jsxs(Wn,{children:[n.jsx(Pn,{children:"Water"}),n.jsxs(Rn,{children:[n.jsx(Gn,{percentage:s}),n.jsxs(Fn,{children:[n.jsx(Nn,{children:"Water consumption"}),n.jsxs(In,{children:[n.jsxs(Dn,{children:[o," ",n.jsx("span",{children:"ml"})]}),n.jsxs(kn,{children:[n.jsx("span",{children:"left : "}),e>=o?e-o:0,"ml"]})]}),n.jsxs(Tn,{onClick:x,children:[n.jsx("svg",{children:n.jsx("use",{href:`${z}#icon-add`})}),"Add Water Intake"]})]})]}),n.jsx(Ln,{width:"20",height:"20",fill:"none",onClick:()=>i(0),children:n.jsx("use",{href:`${z}#icon-trash`})}),n.jsxs(Qe,{isOpen:v,onRequestClose:g,style:Vn,contentLabel:"Example Modal",children:[n.jsx(Un,{children:"Add water Intake"}),n.jsxs(Bn,{onSubmit:y,children:[n.jsxs("label",{children:["How much water",n.jsx("input",{type:"number",placeholder:"Enter millilitters"})]}),n.jsx("button",{children:"Confirm"})]}),n.jsx(zn,{onClick:g,children:"Cancel"})]})]})}const Yn=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Xn=l.div`
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
`,Zn=l.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Jn=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,he=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,me=l.p`
  margin: 0;
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  position: relative;
  right: 50px;
`,xe=l.div`
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
`,eo=l(ft)`
  width: ${e=>e.$widthpx}px !important;
  height: ${e=>e.$heightpx}px !important;
`;pt.register(ut);const to=e=>{const t={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},o={labels:["Filled","Empty"],datasets:[{data:[75,25],backgroundColor:[e.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},i={id:"backgroundCircle",beforeDatasetsDraw(s,h,v){const{ctx:a}=s;a.save();const y=s.getDatasetMeta(0).data[0].x,x=s.getDatasetMeta(0).data[0].y,g=s.getDatasetMeta(0).data[0].innerRadius,u=s.getDatasetMeta(0).data[0].outerRadius,m=u-g,b=Math.PI/180;a.beginPath(),a.lineWidth=m,a.strokeStyle="#292928",a.arc(y,x,u-m/2,0,b*360,!1),a.stroke()}};return n.jsx(eo,{$widthpx:e.widthpx,$heightpx:e.heightpx,data:o,options:t,plugins:[i]})},ie=to,no=l.p`
  color: var(--primary-title-text-color);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.18;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50px;

  span {
    color: var(--primary-text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.42;
  }
`,oo=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,ro=({calories:e})=>n.jsxs(oo,{children:[n.jsx(ie,{color:"#45FFBC",widthpx:168,heightpx:168}),n.jsxs(no,{children:["1360 ",n.jsx("span",{children:"calories"})]})]}),ao=ro;function io({stats:e}){return n.jsxs(Zn,{children:[n.jsx(Yn,{children:"Food"}),n.jsxs(Xn,{children:[n.jsx(ao,{}),n.jsxs(Jn,{children:[n.jsxs(he,{children:[n.jsx(ie,{heightpx:48,widthpx:48,color:"#FFC4F7"}),n.jsx(me,{children:"80%"}),n.jsxs(xe,{children:[n.jsx("h3",{children:"Carbohidrates"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:"170"})]}),n.jsxs("p",{children:["left: ",n.jsx("span",{children:"34"})]})]})]})]}),n.jsxs(he,{children:[n.jsx(ie,{heightpx:48,widthpx:48,color:"#FFF3B7"}),n.jsx(me,{children:"80%"}),n.jsxs(xe,{children:[n.jsx("h3",{children:"Protein"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:"127.5"})]}),n.jsxs("p",{children:["left: ",n.jsx("span",{children:"8"})]})]})]})]}),n.jsxs(he,{children:[n.jsx(ie,{heightpx:48,widthpx:48,color:"#B6B6B6"}),n.jsx(me,{children:"80%"}),n.jsxs(xe,{children:[n.jsx("h3",{children:"Fat"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:"56"})]}),n.jsxs("p",{children:["left: ",n.jsx("span",{children:"11,2"})]})]})]})]})]})]})]})}const so=l.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,lo=l.div`
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
`,co=l(Fe)`
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
`;dt.defaults.baseURL="https://healthy-hub-rest-api.onrender.com/api";function po(){const[e,t]=T.useState({}),o=lt(ct);return T.useEffect(()=>{t(o)},[]),n.jsxs("div",{children:[n.jsxs(lo,{children:[n.jsx("h2",{children:"Today"}),n.jsxs(co,{to:"/dashboard",children:["On the way to the goal",n.jsx("svg",{children:n.jsx("use",{href:`${z}#icon-arrow-right`})})]})]}),n.jsxs(so,{children:[n.jsx(vt,{calories:e.dailyCalories,water:e.dailyWater}),n.jsx(Qn,{waterobjective:e.dailyWater,watercurrent:e.consumedWaterByDay}),n.jsx(io,{stats:e.consumedMealsByDay})]})]})}const uo=l.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,fo=l.div`
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
`,ho=l.h3`
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
`;const mo=l.img`
  width: 36px;
  height: 36px;
`,xo=l.button`
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
`,go=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,vo=l.div`
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
`,yo=l.h1`
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
`,bo=l.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,wo=l.img`
  width: 32px;
  height: 32px;
`,Co=l.h2`
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
`,Oo=l.form`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,G=l.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`,jo=l.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,_o=l.ul`
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
`,So=l.li`
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
`,V=l.input`
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
`,Eo=l.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,Ao=l.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Mo=l.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,Po=l.button`
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
`,Ro=l.button`
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
`,To="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",No=({onClose:e,onSubmit:t,image:o,mealType:i})=>{const s=ht({initialValues:{carbonohidrates:"",protein:"",fat:"",calories:""},onSubmit:a=>{t(a),e()}}),h=a=>{a.currentTarget===a.target&&e()},v=()=>{s.setValues({carbonohidrates:"",protein:"",fat:"",calories:""})};return n.jsx(go,{onClick:h,children:n.jsxs(vo,{children:[n.jsx(yo,{children:"Record your meal"}),n.jsxs(bo,{children:[n.jsx(wo,{src:o,alt:"Plate"}),n.jsx(Co,{children:i})]}),n.jsxs(Oo,{onSubmit:s.handleSubmit,children:[n.jsxs(jo,{children:[n.jsx(_o,{children:n.jsxs(So,{children:[n.jsx(G,{children:n.jsx(V,{type:"text",id:"carbonohidrates",name:"carbonohidrates",placeholder:"The name of the product or dish"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"field1",name:"field1",placeholder:"Carbonoh."})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"protein",name:"protein",placeholder:"Protein"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"fat",name:"fat",placeholder:"Fat"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"calories",name:"calories",placeholder:"Calories"})}),n.jsx(Ao,{type:"button",onClick:v,children:n.jsx("img",{src:To,alt:"trash"})})]})}),n.jsx(Eo,{children:"+ Add more"})]}),n.jsxs(Mo,{children:[n.jsx(Ro,{type:"button",onClick:e,children:"Cancel"}),n.jsx(Po,{type:"submit",children:"Confirm"})]})]})]})})},ae=({title:e,image:t})=>{const[o,i]=T.useState(!1),s=()=>i(!o);return n.jsxs(uo,{children:[n.jsxs(fo,{children:[n.jsx(mo,{src:t,alt:"Plate"}),n.jsx(ho,{children:e})]}),n.jsx(xo,{onClick:s,children:"+ Record your meal"}),o&&n.jsx(No,{onClose:s,image:t,mealType:e})]})},Do="/healthy_hub/assets/breakfast-image-63f468c4.svg",ko="/healthy_hub/assets/dinner-image-19c0e7ef.svg",Fo="/healthy_hub/assets/lunch-image-3c133980.svg",Wo="/healthy_hub/assets/snack-image-28a6b2cf.svg",Lo=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Io=l.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Uo=l.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Bo=l(Fe)`
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
`,zo=l.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,$o=()=>n.jsxs(Lo,{children:[n.jsxs(Io,{children:[n.jsx(Uo,{children:"Diary"}),n.jsx(Bo,{to:"/diary",children:"See more"})]}),n.jsxs(zo,{children:[n.jsx(ae,{title:"Breakfast",image:Do}),n.jsx(ae,{title:"Lunch",image:Fo}),n.jsx(ae,{title:"Dinner",image:ko}),n.jsx(ae,{title:"Snack",image:Wo})]})]}),Ho=$o,qo=l.section`
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
`,Ko=qo;function Go(){const e=[1,2,3,4],t={carbohydrates:14,protein:.3,fat:.2,name:"Apples",amount:"100 g",img:"https://ftp.goit.study/img/you_health/Apples.png",calories:52},{name:o,amount:i,img:s,calories:h}=t;return n.jsxs(Ko,{children:[n.jsx("h2",{children:"Recommended Food"}),n.jsxs("div",{className:"wrapper",children:[n.jsx("ul",{children:e.map(v=>n.jsx("li",{children:n.jsxs("div",{className:"description",children:[n.jsx("div",{className:"small_img_div",children:n.jsx("img",{src:s,alt:"",width:46,height:46})}),n.jsxs("section",{children:[n.jsx("h4",{children:o}),n.jsxs("p",{children:[i,n.jsxs("span",{children:[h," calories"]})]})]})]})},v))}),n.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",n.jsx("svg",{className:"svg",children:n.jsx("use",{href:`${z}#icon-arrow-right`})})]})]})]})}function Zo(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"MainPage"}),n.jsx(po,{}),n.jsx(Ho,{}),n.jsx(Go,{})]})}export{Zo as default};
