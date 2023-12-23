import{s as l,c as B,d as Oe,j as n,r as J,g as ct,e as dt,h as pt,u as Le,i as ut,k as Ee,l as ft,m as ht,n as mt,L as Ue,o as xt,p as gt}from"./index-4a43244d.js";import{i as z}from"./icons-1a5238bd.js";import{C as vt,A as yt,D as bt}from"./index-f92c9ce0.js";import{u as wt}from"./index.esm-666edb59.js";import{b as Ct}from"./breakfast-image-e0be4fcf.js";const Ot=l.h4`
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
`,Pe=l.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,Ae=l.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Me=l.p`
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
`;function St(e){var o,a;const t=B(Oe);return n.jsxs(_t,{children:[n.jsx(Ot,{children:"Daily Goal"}),n.jsxs(jt,{children:[n.jsxs(Pe,{children:[n.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:n.jsx("use",{href:`${z}#icon-bubble`})}),n.jsxs("div",{children:[n.jsx(Ae,{children:"Calories"}),n.jsx(Me,{children:(o=t.user)==null?void 0:o.dailyCalories})]})]}),n.jsxs(Pe,{children:[n.jsx("svg",{style:{stroke:"var(--water-color)"},children:n.jsx("use",{href:`${z}#icon-milk`})}),n.jsxs("div",{children:[n.jsx(Ae,{children:"Water"}),n.jsxs(Me,{children:[(a=t.user)==null?void 0:a.dailyWater," ",n.jsx("span",{children:"ml"})]})]})]})]})]})}var ve={exports:{}},I={},Be={exports:{}},Et="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pt=Et,At=Pt;function ze(){}function $e(){}$e.resetWarningCache=ze;var Mt=function(){function e(a,s,u,y,i,b){if(b!==At){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$e,resetWarningCache:ze};return o.PropTypes=o,o};Be.exports=Mt();var He=Be.exports,ye={exports:{}},M={},be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",s=/input|select|textarea|button|object|iframe/;function u(f,m){return m.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function y(f){var m=f.offsetWidth<=0&&f.offsetHeight<=0;if(m&&!f.innerHTML)return!0;try{var v=window.getComputedStyle(f),w=v.getPropertyValue("display");return m?w!==a&&u(f,v):w===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(f){for(var m=f,v=f.getRootNode&&f.getRootNode();m&&m!==document.body;){if(v&&m===v&&(m=v.host.parentNode),y(m))return!1;m=m.parentNode}return!0}function b(f,m){var v=f.nodeName.toLowerCase(),w=s.test(v)&&!f.disabled||v==="a"&&f.href||m;return w&&i(f)}function x(f){var m=f.getAttribute("tabindex");m===null&&(m=void 0);var v=isNaN(m);return(v||m>=0)&&b(f,!v)}function g(f){var m=[].slice.call(f.querySelectorAll("*"),0).reduce(function(v,w){return v.concat(w.shadowRoot?g(w.shadowRoot):[w])},[]);return m.filter(x)}e.exports=t.default})(be,be.exports);var qe=be.exports;Object.defineProperty(M,"__esModule",{value:!0});M.resetState=kt;M.log=Ft;M.handleBlur=X;M.handleFocus=Z;M.markForFocusLater=Wt;M.returnFocus=Nt;M.popWithoutFocus=It;M.setupScopedFocus=Lt;M.teardownScopedFocus=Ut;var Rt=qe,Dt=Tt(Rt);function Tt(e){return e&&e.__esModule?e:{default:e}}var $=[],U=null,we=!1;function kt(){$=[]}function Ft(){}function X(){we=!0}function Z(){if(we){if(we=!1,!U)return;setTimeout(function(){if(!U.contains(document.activeElement)){var e=(0,Dt.default)(U)[0]||U;e.focus()}},0)}}function Wt(){$.push(document.activeElement)}function Nt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{$.length!==0&&(t=$.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function It(){$.length>0&&$.pop()}function Lt(e){U=e,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",Z,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",Z))}function Ut(){U=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",Z)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",Z))}var Ce={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;var o=qe,a=s(o);function s(i){return i&&i.__esModule?i:{default:i}}function u(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?u(i.activeElement.shadowRoot):i.activeElement}function y(i,b){var x=(0,a.default)(i);if(!x.length){b.preventDefault();return}var g=void 0,f=b.shiftKey,m=x[0],v=x[x.length-1],w=u();if(i===w){if(!f)return;g=v}if(v===w&&!f&&(g=m),m===w&&f&&(g=v),g){b.preventDefault(),g.focus();return}var D=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),K=D!=null&&D[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(K){var L=x.indexOf(w);if(L>-1&&(L+=f?-1:1),g=x[L],typeof g>"u"){b.preventDefault(),g=f?v:m,g.focus();return}b.preventDefault(),g.focus()}}e.exports=t.default})(Ce,Ce.exports);var Bt=Ce.exports,R={},zt=function(){},$t=zt,A={},Ke={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=o:window.ExecutionEnvironment=o})()})(Ke);var Ht=Ke.exports;Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var qt=Ht,Kt=Gt(qt);function Gt(e){return e&&e.__esModule?e:{default:e}}var pe=Kt.default,Vt=pe.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=pe.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=pe.canUseDOM?window.NodeList:{};A.canUseDOM=pe.canUseDOM;A.default=Vt;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=Jt;R.log=en;R.assertNodeList=Ge;R.setElement=tn;R.validateElement=je;R.hide=nn;R.show=on;R.documentNotReadyOrSSRTesting=rn;var Qt=$t,Yt=Zt(Qt),Xt=A;function Zt(e){return e&&e.__esModule?e:{default:e}}var E=null;function Jt(){E&&(E.removeAttribute?E.removeAttribute("aria-hidden"):E.length!=null?E.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(E).forEach(function(e){return e.removeAttribute("aria-hidden")})),E=null}function en(){}function Ge(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function tn(e){var t=e;if(typeof t=="string"&&Xt.canUseDOM){var o=document.querySelectorAll(t);Ge(o,t),t=o}return E=t||E,E}function je(e){var t=e||E;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Yt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function nn(e){var t=!0,o=!1,a=void 0;try{for(var s=je(e)[Symbol.iterator](),u;!(t=(u=s.next()).done);t=!0){var y=u.value;y.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(o)throw a}}}function on(e){var t=!0,o=!1,a=void 0;try{for(var s=je(e)[Symbol.iterator](),u;!(t=(u=s.next()).done);t=!0){var y=u.value;y.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(o)throw a}}}function rn(){E=null}var H={};Object.defineProperty(H,"__esModule",{value:!0});H.resetState=an;H.log=sn;var Q={},Y={};function Re(e,t){e.classList.remove(t)}function an(){var e=document.getElementsByTagName("html")[0];for(var t in Q)Re(e,Q[t]);var o=document.body;for(var a in Y)Re(o,Y[a]);Q={},Y={}}function sn(){}var ln=function(t,o){return t[o]||(t[o]=0),t[o]+=1,o},cn=function(t,o){return t[o]&&(t[o]-=1),o},dn=function(t,o,a){a.forEach(function(s){ln(o,s),t.add(s)})},pn=function(t,o,a){a.forEach(function(s){cn(o,s),o[s]===0&&t.remove(s)})};H.add=function(t,o){return dn(t.classList,t.nodeName.toLowerCase()=="html"?Q:Y,o.split(" "))};H.remove=function(t,o){return pn(t.classList,t.nodeName.toLowerCase()=="html"?Q:Y,o.split(" "))};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.log=fn;q.resetState=hn;function un(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ve=function e(){var t=this;un(this,e),this.register=function(o){t.openInstances.indexOf(o)===-1&&(t.openInstances.push(o),t.emit("register"))},this.deregister=function(o){var a=t.openInstances.indexOf(o);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(o){t.subscribers.push(o)},this.emit=function(o){t.subscribers.forEach(function(a){return a(o,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},le=new Ve;function fn(){console.log("portalOpenInstances ----------"),console.log(le.openInstances.length),le.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function hn(){le=new Ve}q.default=le;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=vn;_e.log=yn;var mn=q,xn=gn(mn);function gn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,P=void 0,N=[];function vn(){for(var e=[_,P],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}_=P=null,N=[]}function yn(){console.log("bodyTrap ----------"),console.log(N.length);for(var e=[_,P],t=0;t<e.length;t++){var o=e[t],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function De(){N.length!==0&&N[N.length-1].focusContent()}function bn(e,t){!_&&!P&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",De),P=_.cloneNode(),P.addEventListener("focus",De)),N=t,N.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==P&&document.body.appendChild(P)):(_.parentElement&&_.parentElement.removeChild(_),P.parentElement&&P.parentElement.removeChild(P))}xn.default.subscribe(bn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(h){for(var p=1;p<arguments.length;p++){var C=arguments[p];for(var r in C)Object.prototype.hasOwnProperty.call(C,r)&&(h[r]=C[r])}return h},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},s=function(){function h(p,C){for(var r=0;r<C.length;r++){var c=C[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,c.key,c)}}return function(p,C,r){return C&&h(p.prototype,C),r&&h(p,r),p}}(),u=J,y=He,i=ne(y),b=M,x=ue(b),g=Bt,f=ne(g),m=R,v=ue(m),w=H,D=ue(w),K=A,L=ne(K),et=q,Se=ne(et);function ue(h){if(h&&h.__esModule)return h;var p={};if(h!=null)for(var C in h)Object.prototype.hasOwnProperty.call(h,C)&&(p[C]=h[C]);return p.default=h,p}function ne(h){return h&&h.__esModule?h:{default:h}}function tt(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function nt(h,p){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:h}function ot(h,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);h.prototype=Object.create(p&&p.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(h,p):h.__proto__=p)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},rt=function(p){return p.code==="Tab"||p.keyCode===9},at=function(p){return p.code==="Escape"||p.keyCode===27},oe=0,he=function(h){ot(p,h);function p(C){tt(this,p);var r=nt(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,C));return r.setOverlayRef=function(c){r.overlay=c,r.props.overlayRef&&r.props.overlayRef(c)},r.setContentRef=function(c){r.content=c,r.props.contentRef&&r.props.contentRef(c)},r.afterClose=function(){var c=r.props,j=c.appElement,S=c.ariaHideApp,O=c.htmlOpenClassName,k=c.bodyOpenClassName,F=c.parentSelector,re=F&&F().ownerDocument||document;k&&D.remove(re.body,k),O&&D.remove(re.getElementsByTagName("html")[0],O),S&&oe>0&&(oe-=1,oe===0&&v.show(j)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(x.returnFocus(r.props.preventScroll),x.teardownScopedFocus()):x.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),Se.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(x.setupScopedFocus(r.node),x.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var c=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:c},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(c){rt(c)&&(0,f.default)(r.content,c),r.props.shouldCloseOnEsc&&at(c)&&(c.stopPropagation(),r.requestClose(c))},r.handleOverlayOnClick=function(c){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(c):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(c){!r.props.shouldCloseOnOverlayClick&&c.target==r.overlay&&c.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(c){return r.ownerHandlesClose()&&r.props.onRequestClose(c)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(c,j){var S=(typeof j>"u"?"undefined":a(j))==="object"?j:{base:fe[c],afterOpen:fe[c]+"--after-open",beforeClose:fe[c]+"--before-close"},O=S.base;return r.state.afterOpen&&(O=O+" "+S.afterOpen),r.state.beforeClose&&(O=O+" "+S.beforeClose),typeof j=="string"&&j?O+" "+j:O},r.attributesFromObject=function(c,j){return Object.keys(j).reduce(function(S,O){return S[c+"-"+O]=j[O],S},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return s(p,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,c){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,c=r.appElement,j=r.ariaHideApp,S=r.htmlOpenClassName,O=r.bodyOpenClassName,k=r.parentSelector,F=k&&k().ownerDocument||document;O&&D.add(F.body,O),S&&D.add(F.getElementsByTagName("html")[0],S),j&&(oe+=1,v.hide(c)),Se.default.register(this)}},{key:"render",value:function(){var r=this.props,c=r.id,j=r.className,S=r.overlayClassName,O=r.defaultStyles,k=r.children,F=j?{}:O.content,re=S?{}:O.overlay;if(this.shouldBeClosed())return null;var it={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},re,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},st=o({id:c,ref:this.setContentRef,style:o({},F,this.props.style.content),className:this.buildClassName("content",j),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),lt=this.props.contentElement(st,k);return this.props.overlayElement(it,lt)}}]),p}(u.Component);he.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},he.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(L.default),i.default.instanceOf(K.SafeHTMLCollection),i.default.instanceOf(K.SafeNodeList),i.default.arrayOf(i.default.instanceOf(L.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=he,e.exports=t.default})(ye,ye.exports);var wn=ye.exports;function Qe(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ye(e){function t(o){var a=this.constructor.getDerivedStateFromProps(e,o);return a??null}this.setState(t.bind(this))}function Xe(e,t){try{var o=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}Qe.__suppressDeprecationWarning=!0;Ye.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;function Cn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var o=null,a=null,s=null;if(typeof t.componentWillMount=="function"?o="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||a!==null||s!==null){var u=e.displayName||e.name,y=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+u+" uses "+y+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Qe,t.componentWillReceiveProps=Ye),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Xe;var i=t.componentDidUpdate;t.componentDidUpdate=function(x,g,f){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;i.call(this,x,g,m)}}return e}const On=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Cn},Symbol.toStringTag,{value:"Module"})),jn=ct(On);Object.defineProperty(I,"__esModule",{value:!0});I.bodyOpenClassName=I.portalClassName=void 0;var Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},_n=function(){function e(t,o){for(var a=0;a<o.length;a++){var s=o[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),Ze=J,ce=ee(Ze),Sn=dt,de=ee(Sn),En=He,d=ee(En),Pn=wn,ke=ee(Pn),An=R,Mn=Dn(An),T=A,Fe=ee(T),Rn=jn;function Dn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function ee(e){return e&&e.__esModule?e:{default:e}}function Tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function We(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function kn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Fn=I.portalClassName="ReactModalPortal",Wn=I.bodyOpenClassName="ReactModal__Body--open",W=T.canUseDOM&&de.default.createPortal!==void 0,Ne=function(t){return document.createElement(t)},Ie=function(){return W?de.default.createPortal:de.default.unstable_renderSubtreeIntoContainer};function ae(e){return e()}var te=function(e){kn(t,e);function t(){var o,a,s,u;Tn(this,t);for(var y=arguments.length,i=Array(y),b=0;b<y;b++)i[b]=arguments[b];return u=(a=(s=We(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(i))),s),s.removePortal=function(){!W&&de.default.unmountComponentAtNode(s.node);var x=ae(s.props.parentSelector);x&&x.contains(s.node)?x.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(x){s.portal=x},s.renderPortal=function(x){var g=Ie(),f=g(s,ce.default.createElement(ke.default,Te({defaultStyles:t.defaultStyles},x)),s.node);s.portalRef(f)},a),We(s,u)}return _n(t,[{key:"componentDidMount",value:function(){if(T.canUseDOM){W||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var a=ae(this.props.parentSelector);a.appendChild(this.node),!W&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var s=ae(a.parentSelector),u=ae(this.props.parentSelector);return{prevParent:s,nextParent:u}}},{key:"componentDidUpdate",value:function(a,s,u){if(T.canUseDOM){var y=this.props,i=y.isOpen,b=y.portalClassName;a.portalClassName!==b&&(this.node.className=b);var x=u.prevParent,g=u.nextParent;g!==x&&(x.removeChild(this.node),g.appendChild(this.node)),!(!a.isOpen&&!i)&&!W&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!T.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,s=Date.now(),u=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||s+this.props.closeTimeoutMS);u?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,u-s)):this.removePortal()}}},{key:"render",value:function(){if(!T.canUseDOM||!W)return null;!this.node&&W&&(this.node=Ne("div"));var a=Ie();return a(ce.default.createElement(ke.default,Te({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Mn.setElement(a)}}]),t}(Ze.Component);te.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Fe.default),d.default.instanceOf(T.SafeHTMLCollection),d.default.instanceOf(T.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Fe.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};te.defaultProps={isOpen:!1,portalClassName:Fn,bodyOpenClassName:Wn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,o){return ce.default.createElement("div",t,o)},contentElement:function(t,o){return ce.default.createElement("div",t,o)}};te.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Rn.polyfill)(te);I.default=te;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=I,a=s(o);function s(u){return u&&u.__esModule?u:{default:u}}t.default=a.default,e.exports=t.default})(ve,ve.exports);var Nn=ve.exports;const Je=pt(Nn),In=l.h4`
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
`,Un=l.button`
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
`,zn=l.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,$n=l.p`
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
`,Kn=l.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Gn=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Vn=l.p`
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
`,Yn=l.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Xn=l.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Zn=l.div`
  height: ${e=>e.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Jn=l.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,eo=({percentage:e})=>n.jsxs(Xn,{children:[n.jsxs(Jn,{children:[isNaN(e)?0:e,"%"]}),n.jsx(Zn,{$percentage:e})]}),to=eo,no={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Je.setAppElement("#root");function oo(){var b,x,g,f,m,v;const[e,t]=J.useState(!1),o=Le(),a=B(Oe);function s(){t(!0)}function u(){t(!1)}const y=async w=>{w.preventDefault(),await o(ut({ml:w.target.children[0].children[0].value})),u(),await o(Ee())},i=async()=>{await o(ft()),await o(Ee())};return n.jsxs(qn,{children:[n.jsx(In,{children:"Water"}),n.jsxs(Ln,{children:[n.jsx(to,{percentage:Math.round(((b=a.consumedWaterByDay)==null?void 0:b.ml)*100/((x=a.user)==null?void 0:x.dailyWater))}),n.jsxs(Hn,{children:[n.jsx(Bn,{children:"Water consumption"}),n.jsxs(Gn,{children:[n.jsxs(zn,{children:[((g=a==null?void 0:a.consumedWaterByDay)==null?void 0:g.ml)||0," ",n.jsx("span",{children:"ml"})]}),n.jsxs($n,{children:[n.jsx("span",{children:"left : "}),((f=a.user)==null?void 0:f.dailyWater)-((m=a.consumedWaterByDay)==null?void 0:m.ml)||((v=a.user)==null?void 0:v.dailyWater),"ml"]})]}),n.jsxs(Un,{onClick:s,children:[n.jsx("svg",{children:n.jsx("use",{href:`${z}#icon-add`})}),"Add Water Intake"]})]})]}),n.jsx(Kn,{width:"20",height:"20",fill:"none",onClick:i,children:n.jsx("use",{href:`${z}#icon-trash`})}),n.jsxs(Je,{isOpen:e,onRequestClose:u,style:no,children:[n.jsx(Vn,{children:"Add water Intake"}),n.jsxs(Qn,{onSubmit:w=>y(w),children:[n.jsxs("label",{children:["How much water",n.jsx("input",{type:"number",placeholder:"Enter millilitters"})]}),n.jsx("button",{children:"Confirm"})]}),n.jsx(Yn,{onClick:u,children:"Cancel"})]})]})}const ro=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,ao=l.div`
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
`,io=l.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,so=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,me=l.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,xe=l.p`
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
`,ge=l.div`
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
`,lo=l(bt)`
  width: ${e=>e.$widthpx}px !important;
  height: ${e=>e.$heightpx}px !important;
`;vt.register(yt);const co=e=>{const t={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},o={labels:["Filled","Empty"],datasets:[{data:[e.percentage,100-e.percentage],backgroundColor:[e.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},a={id:"backgroundCircle",beforeDatasetsDraw(s,u,y){const{ctx:i}=s;i.save();const b=s.getDatasetMeta(0).data[0].x,x=s.getDatasetMeta(0).data[0].y,g=s.getDatasetMeta(0).data[0].innerRadius,f=s.getDatasetMeta(0).data[0].outerRadius,m=f-g,v=Math.PI/180;i.beginPath(),i.lineWidth=m,i.strokeStyle="#292928",i.arc(b,x,f-m/2,0,v*360,!1),i.stroke()}};return n.jsx(lo,{$widthpx:e.widthpx,$heightpx:e.heightpx,data:o,options:t,plugins:[a]})},se=co,po=l.p`
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
`,uo=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,fo=({calories:e,currentCalories:t})=>{const o=()=>Math.round(t*100/e);return n.jsxs(uo,{children:[n.jsx(se,{percentage:o(),color:"#45FFBC",widthpx:168,heightpx:168}),n.jsxs(po,{children:[t," ",n.jsx("span",{children:"calories"})]})]})},ho=fo;function mo(){const e=B(ht),t=B(mt),o=B(Oe);return n.jsxs(io,{children:[n.jsx(ro,{children:"Food"}),n.jsxs(ao,{children:[n.jsx(ho,{calories:o==null?void 0:o.user.dailyCalories,currentCalories:(t==null?void 0:t.totalConsumedCaloriesPerDay)||0}),n.jsxs(so,{children:[n.jsxs(me,{children:[n.jsx(se,{heightpx:48,widthpx:48,color:"#FFC4F7",percentage:Math.round(t.totalConsumedCarbohydratesPerDay*100/(e==null?void 0:e.carbohydrates))||0}),n.jsxs(xe,{children:[Math.round(t.totalConsumedCarbohydratesPerDay*100/(e==null?void 0:e.carbohydrates))||0,"%"]}),n.jsxs(ge,{children:[n.jsx("h3",{children:"Carbohidrates"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:e==null?void 0:e.carbohydrates})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:(e==null?void 0:e.carbohydrates)-t.totalConsumedCarbohydratesPerDay||(e==null?void 0:e.carbohydrates)})]})]})]})]}),n.jsxs(me,{children:[n.jsx(se,{heightpx:48,widthpx:48,color:"#FFF3B7",percentage:Math.round(t.totalConsumedProteinPerDay*100/(e==null?void 0:e.protein))||0}),n.jsxs(xe,{children:[Math.round(t.totalConsumedProteinPerDay*100/(e==null?void 0:e.protein))||0,"%"]}),n.jsxs(ge,{children:[n.jsx("h3",{children:"Protein"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:e==null?void 0:e.protein})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:(e==null?void 0:e.protein)-t.totalConsumedProteinPerDay||(e==null?void 0:e.protein)})]})]})]})]}),n.jsxs(me,{children:[n.jsx(se,{heightpx:48,widthpx:48,color:"#B6B6B6",percentage:Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/(e==null?void 0:e.fat))||0}),n.jsxs(xe,{children:[Math.round((t==null?void 0:t.totalConsumedFatPerDay)*100/(e==null?void 0:e.fat))||0,"%"]}),n.jsxs(ge,{children:[n.jsx("h3",{children:"Fat"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:e==null?void 0:e.fat})]}),n.jsxs("p",{children:["left:"," ",n.jsx("span",{children:(e==null?void 0:e.fat)-(t==null?void 0:t.totalConsumedFatPerDay)||(e==null?void 0:e.fat)})]})]})]})]})]})]})]})}const xo=l.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,go=l.div`
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
`,vo=l(Ue)`
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
`;function yo(){return n.jsxs("div",{children:[n.jsxs(go,{children:[n.jsx("h2",{children:"Today"}),n.jsxs(vo,{to:"/dashboard",children:["On the way to the goal",n.jsx("svg",{children:n.jsx("use",{href:`${z}#icon-arrow-right`})})]})]}),n.jsxs(xo,{children:[n.jsx(St,{}),n.jsx(oo,{}),n.jsx(mo,{})]})]})}const bo=l.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,wo=l.div`
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
`,Co=l.h3`
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
`;const Oo=l.img`
  width: 36px;
  height: 36px;
`,jo=l.button`
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
`,_o=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,So=l.div`
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
`,Eo=l.h1`
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
`,Po=l.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Ao=l.img`
  width: 32px;
  height: 32px;
`,Mo=l.h2`
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
`,Ro=l.form`
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
`,Do=l.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,To=l.ul`
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
`,ko=l.li`
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
`,Fo=l.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,Wo=l.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,No=l.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,Io=l.button`
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
`,Lo=l.button`
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
`,Uo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",Bo=({onClose:e,onSubmit:t,image:o,mealType:a})=>{const s=wt({initialValues:{carbonohidrates:"",protein:"",fat:"",calories:""},onSubmit:i=>{t(i),e()}}),u=i=>{i.currentTarget===i.target&&e()},y=()=>{s.setValues({carbonohidrates:"",protein:"",fat:"",calories:""})};return n.jsx(_o,{onClick:u,children:n.jsxs(So,{children:[n.jsx(Eo,{children:"Record your meal"}),n.jsxs(Po,{children:[n.jsx(Ao,{src:o,alt:"Plate"}),n.jsx(Mo,{children:a})]}),n.jsxs(Ro,{onSubmit:s.handleSubmit,children:[n.jsxs(Do,{children:[n.jsx(To,{children:n.jsxs(ko,{children:[n.jsx(G,{children:n.jsx(V,{type:"text",id:"carbonohidrates",name:"carbonohidrates",placeholder:"The name of the product or dish"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"field1",name:"field1",placeholder:"Carbonoh."})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"protein",name:"protein",placeholder:"Protein"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"fat",name:"fat",placeholder:"Fat"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"calories",name:"calories",placeholder:"Calories"})}),n.jsx(Wo,{type:"button",onClick:y,children:n.jsx("img",{src:Uo,alt:"trash"})})]})}),n.jsx(Fo,{children:"+ Add more"})]}),n.jsxs(No,{children:[n.jsx(Lo,{type:"button",onClick:e,children:"Cancel"}),n.jsx(Io,{type:"submit",children:"Confirm"})]})]})]})})},ie=({title:e,image:t})=>{const[o,a]=J.useState(!1),s=()=>a(!o);return n.jsxs(bo,{children:[n.jsxs(wo,{children:[n.jsx(Oo,{src:t,alt:"Plate"}),n.jsx(Co,{children:e})]}),n.jsx(jo,{onClick:s,children:"+ Record your meal"}),o&&n.jsx(Bo,{onClose:s,image:t,mealType:e})]})},zo="/healthy_hub/assets/dinner-image-19c0e7ef.svg",$o="/healthy_hub/assets/lunch-image-3c133980.svg",Ho="/healthy_hub/assets/snack-image-28a6b2cf.svg",qo=l.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 660px;
`,Ko=l.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Go=l.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Vo=l(Ue)`
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
`,Qo=l.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Yo=()=>n.jsxs(qo,{children:[n.jsxs(Ko,{children:[n.jsx(Go,{children:"Diary"}),n.jsx(Vo,{to:"/diary",children:"See more"})]}),n.jsxs(Qo,{children:[n.jsx(ie,{title:"Breakfast",image:Ct}),n.jsx(ie,{title:"Lunch",image:$o}),n.jsx(ie,{title:"Dinner",image:zo}),n.jsx(ie,{title:"Snack",image:Ho})]})]}),Xo=Yo,Zo=l.section`
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
`,Jo=Zo;function er(){const e=Le(),t=B(xt);let o=[];return J.useEffect(()=>{e(gt())},[e]),t&&(o=t.slice(0,4)),n.jsxs(Jo,{children:[n.jsx("h2",{children:"Recommended Food"}),n.jsxs("div",{className:"wrapper",children:[n.jsx("ul",{children:o==null?void 0:o.map(({amount:a,calories:s,img:u,name:y,_id:i})=>n.jsx("li",{children:n.jsxs("div",{className:"description",children:[n.jsx("div",{className:"small_img_div",children:n.jsx("img",{src:u,alt:"",width:46,height:46})}),n.jsxs("section",{children:[n.jsx("h4",{children:y}),n.jsxs("p",{children:[a,n.jsxs("span",{children:[s," calories"]})]})]})]})},i))}),n.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",n.jsx("svg",{className:"svg",children:n.jsx("use",{href:`${z}#icon-arrow-right`})})]})]})]})}const tr=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 0;
    justify-content: space-between;
  }
`;function sr(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"MainPage"}),n.jsx(yo,{}),n.jsxs(tr,{children:[n.jsx(Xo,{}),n.jsx(er,{})]})]})}export{sr as default};
