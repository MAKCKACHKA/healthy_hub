import{s as l,j as n,r as M,g as it,a as st,b as lt,L as We,c as ge}from"./index-b1ac0e7a.js";import{i as z}from"./icons-32aca508.js";import{C as ct,A as dt,D as pt}from"./index-739a37c7.js";import{u as ut}from"./index.esm-2b67e97d.js";const ft=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,ht=l.div`
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
`,Se=l.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,Ee=l.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Ae=l.p`
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
`,mt=l.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function xt(e){return n.jsxs(mt,{children:[n.jsx(ft,{children:"Daily Goal"}),n.jsxs(ht,{children:[n.jsxs(Se,{children:[n.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:n.jsx("use",{href:`${z}#icon-bubble`})}),n.jsxs("div",{children:[n.jsx(Ee,{children:"Calories"}),n.jsx(Ae,{children:e.calories})]})]}),n.jsxs(Se,{children:[n.jsx("svg",{style:{stroke:"var(--water-color)"},children:n.jsx("use",{href:`${z}#icon-milk`})}),n.jsxs("div",{children:[n.jsx(Ee,{children:"Water"}),n.jsxs(Ae,{children:[e.water," ",n.jsx("span",{children:"ml"})]})]})]})]})]})}var ve={exports:{}},I={},Le={exports:{}},gt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vt=gt,yt=vt;function Ie(){}function Ue(){}Ue.resetWarningCache=Ie;var bt=function(){function e(a,s,p,v,i,y){if(y!==yt){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ue,resetWarningCache:Ie};return o.PropTypes=o,o};Le.exports=bt();var Be=Le.exports,ye={exports:{}},R={},be={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",s=/input|select|textarea|button|object|iframe/;function p(f,m){return m.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function v(f){var m=f.offsetWidth<=0&&f.offsetHeight<=0;if(m&&!f.innerHTML)return!0;try{var b=window.getComputedStyle(f),_=b.getPropertyValue("display");return m?_!==a&&p(f,b):_===o}catch{return console.warn("Failed to inspect element style"),!1}}function i(f){for(var m=f,b=f.getRootNode&&f.getRootNode();m&&m!==document.body;){if(b&&m===b&&(m=b.host.parentNode),v(m))return!1;m=m.parentNode}return!0}function y(f,m){var b=f.nodeName.toLowerCase(),_=s.test(b)&&!f.disabled||b==="a"&&f.href||m;return _&&i(f)}function x(f){var m=f.getAttribute("tabindex");m===null&&(m=void 0);var b=isNaN(m);return(b||m>=0)&&y(f,!b)}function g(f){var m=[].slice.call(f.querySelectorAll("*"),0).reduce(function(b,_){return b.concat(_.shadowRoot?g(_.shadowRoot):[_])},[]);return m.filter(x)}e.exports=t.default})(be,be.exports);var ze=be.exports;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=jt;R.log=_t;R.handleBlur=X;R.handleFocus=Z;R.markForFocusLater=St;R.returnFocus=Et;R.popWithoutFocus=At;R.setupScopedFocus=Mt;R.teardownScopedFocus=Pt;var wt=ze,Ct=Ot(wt);function Ot(e){return e&&e.__esModule?e:{default:e}}var $=[],B=null,we=!1;function jt(){$=[]}function _t(){}function X(){we=!0}function Z(){if(we){if(we=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,Ct.default)(B)[0]||B;e.focus()}},0)}}function St(){$.push(document.activeElement)}function Et(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{$.length!==0&&(t=$.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function At(){$.length>0&&$.pop()}function Mt(e){B=e,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",Z,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",Z))}function Pt(){B=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",Z)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",Z))}var Ce={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=v;var o=ze,a=s(o);function s(i){return i&&i.__esModule?i:{default:i}}function p(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?p(i.activeElement.shadowRoot):i.activeElement}function v(i,y){var x=(0,a.default)(i);if(!x.length){y.preventDefault();return}var g=void 0,f=y.shiftKey,m=x[0],b=x[x.length-1],_=p();if(i===_){if(!f)return;g=b}if(b===_&&!f&&(g=m),m===_&&f&&(g=b),g){y.preventDefault(),g.focus();return}var k=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),K=k!=null&&k[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(K){var U=x.indexOf(_);if(U>-1&&(U+=f?-1:1),g=x[U],typeof g>"u"){y.preventDefault(),g=f?b:m,g.focus();return}y.preventDefault(),g.focus()}}e.exports=t.default})(Ce,Ce.exports);var Rt=Ce.exports,T={},Tt=function(){},kt=Tt,P={},$e={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=o:window.ExecutionEnvironment=o})()})($e);var Nt=$e.exports;Object.defineProperty(P,"__esModule",{value:!0});P.canUseDOM=P.SafeNodeList=P.SafeHTMLCollection=void 0;var Dt=Nt,Ft=Wt(Dt);function Wt(e){return e&&e.__esModule?e:{default:e}}var de=Ft.default,Lt=de.canUseDOM?window.HTMLElement:{};P.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};P.SafeNodeList=de.canUseDOM?window.NodeList:{};P.canUseDOM=de.canUseDOM;P.default=Lt;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=$t;T.log=Ht;T.assertNodeList=He;T.setElement=qt;T.validateElement=Oe;T.hide=Kt;T.show=Gt;T.documentNotReadyOrSSRTesting=Vt;var It=kt,Ut=zt(It),Bt=P;function zt(e){return e&&e.__esModule?e:{default:e}}var E=null;function $t(){E&&(E.removeAttribute?E.removeAttribute("aria-hidden"):E.length!=null?E.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(E).forEach(function(e){return e.removeAttribute("aria-hidden")})),E=null}function Ht(){}function He(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function qt(e){var t=e;if(typeof t=="string"&&Bt.canUseDOM){var o=document.querySelectorAll(t);He(o,t),t=o}return E=t||E,E}function Oe(e){var t=e||E;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Ut.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Kt(e){var t=!0,o=!1,a=void 0;try{for(var s=Oe(e)[Symbol.iterator](),p;!(t=(p=s.next()).done);t=!0){var v=p.value;v.setAttribute("aria-hidden","true")}}catch(i){o=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(o)throw a}}}function Gt(e){var t=!0,o=!1,a=void 0;try{for(var s=Oe(e)[Symbol.iterator](),p;!(t=(p=s.next()).done);t=!0){var v=p.value;v.removeAttribute("aria-hidden")}}catch(i){o=!0,a=i}finally{try{!t&&s.return&&s.return()}finally{if(o)throw a}}}function Vt(){E=null}var H={};Object.defineProperty(H,"__esModule",{value:!0});H.resetState=Qt;H.log=Yt;var Q={},Y={};function Me(e,t){e.classList.remove(t)}function Qt(){var e=document.getElementsByTagName("html")[0];for(var t in Q)Me(e,Q[t]);var o=document.body;for(var a in Y)Me(o,Y[a]);Q={},Y={}}function Yt(){}var Xt=function(t,o){return t[o]||(t[o]=0),t[o]+=1,o},Zt=function(t,o){return t[o]&&(t[o]-=1),o},Jt=function(t,o,a){a.forEach(function(s){Xt(o,s),t.add(s)})},en=function(t,o,a){a.forEach(function(s){Zt(o,s),o[s]===0&&t.remove(s)})};H.add=function(t,o){return Jt(t.classList,t.nodeName.toLowerCase()=="html"?Q:Y,o.split(" "))};H.remove=function(t,o){return en(t.classList,t.nodeName.toLowerCase()=="html"?Q:Y,o.split(" "))};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.log=nn;q.resetState=on;function tn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var qe=function e(){var t=this;tn(this,e),this.register=function(o){t.openInstances.indexOf(o)===-1&&(t.openInstances.push(o),t.emit("register"))},this.deregister=function(o){var a=t.openInstances.indexOf(o);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(o){t.subscribers.push(o)},this.emit=function(o){t.subscribers.forEach(function(a){return a(o,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},se=new qe;function nn(){console.log("portalOpenInstances ----------"),console.log(se.openInstances.length),se.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function on(){se=new qe}q.default=se;var je={};Object.defineProperty(je,"__esModule",{value:!0});je.resetState=ln;je.log=cn;var rn=q,an=sn(rn);function sn(e){return e&&e.__esModule?e:{default:e}}var j=void 0,A=void 0,L=[];function ln(){for(var e=[j,A],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}j=A=null,L=[]}function cn(){console.log("bodyTrap ----------"),console.log(L.length);for(var e=[j,A],t=0;t<e.length;t++){var o=e[t],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function Pe(){L.length!==0&&L[L.length-1].focusContent()}function dn(e,t){!j&&!A&&(j=document.createElement("div"),j.setAttribute("data-react-modal-body-trap",""),j.style.position="absolute",j.style.opacity="0",j.setAttribute("tabindex","0"),j.addEventListener("focus",Pe),A=j.cloneNode(),A.addEventListener("focus",Pe)),L=t,L.length>0?(document.body.firstChild!==j&&document.body.insertBefore(j,document.body.firstChild),document.body.lastChild!==A&&document.body.appendChild(A)):(j.parentElement&&j.parentElement.removeChild(j),A.parentElement&&A.parentElement.removeChild(A))}an.default.subscribe(dn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(h){for(var u=1;u<arguments.length;u++){var w=arguments[u];for(var r in w)Object.prototype.hasOwnProperty.call(w,r)&&(h[r]=w[r])}return h},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},s=function(){function h(u,w){for(var r=0;r<w.length;r++){var c=w[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(u,c.key,c)}}return function(u,w,r){return w&&h(u.prototype,w),r&&h(u,r),u}}(),p=M,v=Be,i=te(v),y=R,x=pe(y),g=Rt,f=te(g),m=T,b=pe(m),_=H,k=pe(_),K=P,U=te(K),Xe=q,_e=te(Xe);function pe(h){if(h&&h.__esModule)return h;var u={};if(h!=null)for(var w in h)Object.prototype.hasOwnProperty.call(h,w)&&(u[w]=h[w]);return u.default=h,u}function te(h){return h&&h.__esModule?h:{default:h}}function Ze(h,u){if(!(h instanceof u))throw new TypeError("Cannot call a class as a function")}function Je(h,u){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:h}function et(h,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);h.prototype=Object.create(u&&u.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(h,u):h.__proto__=u)}var ue={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},tt=function(u){return u.code==="Tab"||u.keyCode===9},nt=function(u){return u.code==="Escape"||u.keyCode===27},ne=0,fe=function(h){et(u,h);function u(w){Ze(this,u);var r=Je(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,w));return r.setOverlayRef=function(c){r.overlay=c,r.props.overlayRef&&r.props.overlayRef(c)},r.setContentRef=function(c){r.content=c,r.props.contentRef&&r.props.contentRef(c)},r.afterClose=function(){var c=r.props,O=c.appElement,S=c.ariaHideApp,C=c.htmlOpenClassName,D=c.bodyOpenClassName,F=c.parentSelector,oe=F&&F().ownerDocument||document;D&&k.remove(oe.body,D),C&&k.remove(oe.getElementsByTagName("html")[0],C),S&&ne>0&&(ne-=1,ne===0&&b.show(O)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(x.returnFocus(r.props.preventScroll),x.teardownScopedFocus()):x.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),_e.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(x.setupScopedFocus(r.node),x.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var c=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:c},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(c){tt(c)&&(0,f.default)(r.content,c),r.props.shouldCloseOnEsc&&nt(c)&&(c.stopPropagation(),r.requestClose(c))},r.handleOverlayOnClick=function(c){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(c):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(c){!r.props.shouldCloseOnOverlayClick&&c.target==r.overlay&&c.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(c){return r.ownerHandlesClose()&&r.props.onRequestClose(c)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(c,O){var S=(typeof O>"u"?"undefined":a(O))==="object"?O:{base:ue[c],afterOpen:ue[c]+"--after-open",beforeClose:ue[c]+"--before-close"},C=S.base;return r.state.afterOpen&&(C=C+" "+S.afterOpen),r.state.beforeClose&&(C=C+" "+S.beforeClose),typeof O=="string"&&O?C+" "+O:C},r.attributesFromObject=function(c,O){return Object.keys(O).reduce(function(S,C){return S[c+"-"+C]=O[C],S},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return s(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,c){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,c=r.appElement,O=r.ariaHideApp,S=r.htmlOpenClassName,C=r.bodyOpenClassName,D=r.parentSelector,F=D&&D().ownerDocument||document;C&&k.add(F.body,C),S&&k.add(F.getElementsByTagName("html")[0],S),O&&(ne+=1,b.hide(c)),_e.default.register(this)}},{key:"render",value:function(){var r=this.props,c=r.id,O=r.className,S=r.overlayClassName,C=r.defaultStyles,D=r.children,F=O?{}:C.content,oe=S?{}:C.overlay;if(this.shouldBeClosed())return null;var ot={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},oe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},rt=o({id:c,ref:this.setContentRef,style:o({},F,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),at=this.props.contentElement(rt,D);return this.props.overlayElement(ot,at)}}]),u}(p.Component);fe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},fe.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf(U.default),i.default.instanceOf(K.SafeHTMLCollection),i.default.instanceOf(K.SafeNodeList),i.default.arrayOf(i.default.instanceOf(U.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=fe,e.exports=t.default})(ye,ye.exports);var pn=ye.exports;function Ke(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ge(e){function t(o){var a=this.constructor.getDerivedStateFromProps(e,o);return a??null}this.setState(t.bind(this))}function Ve(e,t){try{var o=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,a)}finally{this.props=o,this.state=a}}Ke.__suppressDeprecationWarning=!0;Ge.__suppressDeprecationWarning=!0;Ve.__suppressDeprecationWarning=!0;function un(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var o=null,a=null,s=null;if(typeof t.componentWillMount=="function"?o="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?s="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||a!==null||s!==null){var p=e.displayName||e.name,v=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+p+" uses "+v+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ke,t.componentWillReceiveProps=Ge),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ve;var i=t.componentDidUpdate;t.componentDidUpdate=function(x,g,f){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;i.call(this,x,g,m)}}return e}const fn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:un},Symbol.toStringTag,{value:"Module"})),hn=it(fn);Object.defineProperty(I,"__esModule",{value:!0});I.bodyOpenClassName=I.portalClassName=void 0;var Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},mn=function(){function e(t,o){for(var a=0;a<o.length;a++){var s=o[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),Qe=M,le=J(Qe),xn=st,ce=J(xn),gn=Be,d=J(gn),vn=pn,Te=J(vn),yn=T,bn=Cn(yn),N=P,ke=J(N),wn=hn;function Cn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function J(e){return e&&e.__esModule?e:{default:e}}function On(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ne(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function jn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _n=I.portalClassName="ReactModalPortal",Sn=I.bodyOpenClassName="ReactModal__Body--open",W=N.canUseDOM&&ce.default.createPortal!==void 0,De=function(t){return document.createElement(t)},Fe=function(){return W?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function re(e){return e()}var ee=function(e){jn(t,e);function t(){var o,a,s,p;On(this,t);for(var v=arguments.length,i=Array(v),y=0;y<v;y++)i[y]=arguments[y];return p=(a=(s=Ne(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this].concat(i))),s),s.removePortal=function(){!W&&ce.default.unmountComponentAtNode(s.node);var x=re(s.props.parentSelector);x&&x.contains(s.node)?x.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(x){s.portal=x},s.renderPortal=function(x){var g=Fe(),f=g(s,le.default.createElement(Te.default,Re({defaultStyles:t.defaultStyles},x)),s.node);s.portalRef(f)},a),Ne(s,p)}return mn(t,[{key:"componentDidMount",value:function(){if(N.canUseDOM){W||(this.node=De("div")),this.node.className=this.props.portalClassName;var a=re(this.props.parentSelector);a.appendChild(this.node),!W&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var s=re(a.parentSelector),p=re(this.props.parentSelector);return{prevParent:s,nextParent:p}}},{key:"componentDidUpdate",value:function(a,s,p){if(N.canUseDOM){var v=this.props,i=v.isOpen,y=v.portalClassName;a.portalClassName!==y&&(this.node.className=y);var x=p.prevParent,g=p.nextParent;g!==x&&(x.removeChild(this.node),g.appendChild(this.node)),!(!a.isOpen&&!i)&&!W&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!N.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,s=Date.now(),p=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||s+this.props.closeTimeoutMS);p?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,p-s)):this.removePortal()}}},{key:"render",value:function(){if(!N.canUseDOM||!W)return null;!this.node&&W&&(this.node=De("div"));var a=Fe();return a(le.default.createElement(Te.default,Re({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){bn.setElement(a)}}]),t}(Qe.Component);ee.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(ke.default),d.default.instanceOf(N.SafeHTMLCollection),d.default.instanceOf(N.SafeNodeList),d.default.arrayOf(d.default.instanceOf(ke.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};ee.defaultProps={isOpen:!1,portalClassName:_n,bodyOpenClassName:Sn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,o){return le.default.createElement("div",t,o)},contentElement:function(t,o){return le.default.createElement("div",t,o)}};ee.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,wn.polyfill)(ee);I.default=ee;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=I,a=s(o);function s(p){return p&&p.__esModule?p:{default:p}}t.default=a.default,e.exports=t.default})(ve,ve.exports);var En=ve.exports;const Ye=lt(En),An=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Mn=l.div`
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
`,Pn=l.button`
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
`,Rn=l.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Tn=l.p`
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
`,Nn=l.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Dn=l.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,Fn=l.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Wn=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Ln=l.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,In=l.form`
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
`,Un=l.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Bn=l.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,zn=l.div`
  height: ${e=>e.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,$n=l.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,Hn=({percentage:e})=>n.jsxs(Bn,{children:[n.jsxs($n,{children:[isNaN(e)?0:e,"%"]}),n.jsx(zn,{$percentage:e})]}),qn=Hn,Kn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Ye.setAppElement("#root");function Gn({waterobjective:e,watercurrent:t}){const[o,a]=M.useState(t??0);M.useState(e);const[s,p]=M.useState(0),[v,i]=M.useState(!1);function y(f){f.preventDefault();let m=f.target.children[0].children[0].value;p(s+Math.round(m*100/e)),a(o+Math.round(f.target.children[0].children[0].value)),g()}function x(){i(!0)}function g(){i(!1)}return n.jsxs(Dn,{children:[n.jsx(An,{children:"Water"}),n.jsxs(Mn,{children:[n.jsx(qn,{percentage:s}),n.jsxs(Nn,{children:[n.jsx(Rn,{children:"Water consumption"}),n.jsxs(Wn,{children:[n.jsxs(Tn,{children:[o," ",n.jsx("span",{children:"ml"})]}),n.jsxs(kn,{children:[n.jsx("span",{children:"left : "}),e>=o?e-o:0,"ml"]})]}),n.jsxs(Pn,{onClick:x,children:[n.jsx("svg",{children:n.jsx("use",{href:`${z}#icon-add`})}),"Add Water Intake"]})]})]}),n.jsx(Fn,{width:"20",height:"20",fill:"none",onClick:()=>a(0),children:n.jsx("use",{href:`${z}#icon-trash`})}),n.jsxs(Ye,{isOpen:v,onRequestClose:g,style:Kn,contentLabel:"Example Modal",children:[n.jsx(Ln,{children:"Add water Intake"}),n.jsxs(In,{onSubmit:y,children:[n.jsxs("label",{children:["How much water",n.jsx("input",{type:"number",placeholder:"Enter millilitters"})]}),n.jsx("button",{children:"Confirm"})]}),n.jsx(Un,{onClick:g,children:"Cancel"})]})]})}const Vn=l.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Qn=l.div`
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
`,Yn=l.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Xn=l.div`
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
`,Zn=l(pt)`
  width: ${e=>e.$widthpx}px !important;
  height: ${e=>e.$heightpx}px !important;
`;ct.register(dt);const Jn=e=>{const t={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},o={labels:["Filled","Empty"],datasets:[{data:[75,25],backgroundColor:[e.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},a={id:"backgroundCircle",beforeDatasetsDraw(s,p,v){const{ctx:i}=s;i.save();const y=s.getDatasetMeta(0).data[0].x,x=s.getDatasetMeta(0).data[0].y,g=s.getDatasetMeta(0).data[0].innerRadius,f=s.getDatasetMeta(0).data[0].outerRadius,m=f-g,b=Math.PI/180;i.beginPath(),i.lineWidth=m,i.strokeStyle="#292928",i.arc(y,x,f-m/2,0,b*360,!1),i.stroke()}};return n.jsx(Zn,{$widthpx:e.widthpx,$heightpx:e.heightpx,data:o,options:t,plugins:[a]})},ie=Jn,eo=l.p`
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
`,to=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,no=({calories:e})=>n.jsxs(to,{children:[n.jsx(ie,{color:"#45FFBC",widthpx:168,heightpx:168}),n.jsxs(eo,{children:["1360 ",n.jsx("span",{children:"calories"})]})]}),oo=no;function ro({stats:e}){return n.jsxs(Yn,{children:[n.jsx(Vn,{children:"Food"}),n.jsxs(Qn,{children:[n.jsx(oo,{}),n.jsxs(Xn,{children:[n.jsxs(he,{children:[n.jsx(ie,{heightpx:48,widthpx:48,color:"#FFC4F7"}),n.jsx(me,{children:"80%"}),n.jsxs(xe,{children:[n.jsx("h3",{children:"Carbohidrates"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:"170"})]}),n.jsxs("p",{children:["left: ",n.jsx("span",{children:"34"})]})]})]})]}),n.jsxs(he,{children:[n.jsx(ie,{heightpx:48,widthpx:48,color:"#FFF3B7"}),n.jsx(me,{children:"80%"}),n.jsxs(xe,{children:[n.jsx("h3",{children:"Protein"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:"127.5"})]}),n.jsxs("p",{children:["left: ",n.jsx("span",{children:"8"})]})]})]})]}),n.jsxs(he,{children:[n.jsx(ie,{heightpx:48,widthpx:48,color:"#B6B6B6"}),n.jsx(me,{children:"80%"}),n.jsxs(xe,{children:[n.jsx("h3",{children:"Fat"}),n.jsxs("div",{children:[n.jsxs("p",{children:["Goal: ",n.jsx("span",{children:"56"})]}),n.jsxs("p",{children:["left: ",n.jsx("span",{children:"11,2"})]})]})]})]})]})]})]})}const ao=l.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,io=l.div`
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
`,so=l(We)`
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
`;ge.defaults.baseURL="https://healthy-hub-rest-api.onrender.com/api";function lo(){const[e,t]=M.useState({}),[o,a]=M.useState("");return M.useEffect(()=>{async function s(){await ge.post("/auth/signin",{email:"john.doe@example.com",password:"randompassword123"}).then(p=>{a(p.data.user.token)})}s()},[o]),M.useEffect(()=>{async function s(){await ge.get("/user/current",{headers:{Authorization:`Bearer ${o}`}}).then(p=>{console.log(p.data),t(p.data)})}o!==""&&s()},[o]),n.jsxs("div",{children:[n.jsxs(io,{children:[n.jsx("h2",{children:"Today"}),n.jsxs(so,{to:"/dashboard",children:["On the way to the goal",n.jsx("svg",{children:n.jsx("use",{href:`${z}#icon-arrow-right`})})]})]}),n.jsxs(ao,{children:[n.jsx(xt,{calories:e.dailyCalories,water:e.dailyWater}),n.jsx(Gn,{waterobjective:e.dailyWater,watercurrent:e.consumedWaterByDay}),n.jsx(ro,{stats:e.consumedMealsByDay})]})]})}const co=l.li`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,po=l.div`
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
`,uo=l.h3`
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
`;const fo=l.img`
  width: 36px;
  height: 36px;
`,ho=l.button`
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
`,mo=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,xo=l.div`
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
`,go=l.h1`
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
`,vo=l.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,yo=l.img`
  width: 32px;
  height: 32px;
`,bo=l.h2`
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
`,wo=l.form`
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
`,Co=l.div`
  max-height: 300px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
  }
`,Oo=l.ul`
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
`,jo=l.li`
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
`,_o=l.button`
  border: none;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #8cc84b;
  cursor: pointer;
`,So=l.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`,Eo=l.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`,Ao=l.button`
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
`,Mo=l.button`
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
`,Po="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZRdTsJAEIBnWow8SZ8NansDOIEcAWNiIL7AETyB3gCPwIsRSIzhBnoCuQFFGn2tT/jTdpztbpMW+mOJzEN3d36+nZ3ZLcA/C+YZHbprEGjGuv4Iu0+lgQ5NGBa8pNk88JsWXs5KAYUsaXK6CYMPCy9mkJfhO92bHuCApwZsKR6szizsu5pYfELVFTCmmzy2SnBaMgY5vrqZzJLG10saEfxRhK+Iieu0+IKbsBDjGz2cFMHmXCYV5cb1lbygVxq3OWDgw6opyluB7zkB9Y6xM418MDxuRoa8DI0++KZcB2Fd9+GgxpXmGpGhARoqE1OeCu1MIELgSqdg624ngHzHbKnEQiCpDHXQ7UxgGUHQa2n6BNDCrh3fXQN9xvPhIZ4vhI3ntz8QPKscw1MIW5yR0mV0STnX5RPrRxbu7lU0p/AhJK9MKlA5NaBA1AuxC4F8DYb8vXFoNOBMpxm8Fvu0RQlSNkrKnB6NPfhiGPQgP8NhHTv9QmAk8g+kpz5BcVXWm7Ez+QWxMYesx/CgzQAAAABJRU5ErkJggg==",Ro=({onClose:e,onSubmit:t,image:o,mealType:a})=>{const s=ut({initialValues:{carbonohidrates:"",protein:"",fat:"",calories:""},onSubmit:i=>{t(i),e()}}),p=i=>{i.currentTarget===i.target&&e()},v=()=>{s.setValues({carbonohidrates:"",protein:"",fat:"",calories:""})};return n.jsx(mo,{onClick:p,children:n.jsxs(xo,{children:[n.jsx(go,{children:"Record your meal"}),n.jsxs(vo,{children:[n.jsx(yo,{src:o,alt:"Plate"}),n.jsx(bo,{children:a})]}),n.jsxs(wo,{onSubmit:s.handleSubmit,children:[n.jsxs(Co,{children:[n.jsx(Oo,{children:n.jsxs(jo,{children:[n.jsx(G,{children:n.jsx(V,{type:"text",id:"carbonohidrates",name:"carbonohidrates",placeholder:"The name of the product or dish"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"field1",name:"field1",placeholder:"Carbonoh."})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"protein",name:"protein",placeholder:"Protein"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"fat",name:"fat",placeholder:"Fat"})}),n.jsx(G,{children:n.jsx(V,{type:"number",id:"calories",name:"calories",placeholder:"Calories"})}),n.jsx(So,{type:"button",onClick:v,children:n.jsx("img",{src:Po,alt:"trash"})})]})}),n.jsx(_o,{children:"+ Add more"})]}),n.jsxs(Eo,{children:[n.jsx(Mo,{type:"button",onClick:e,children:"Cancel"}),n.jsx(Ao,{type:"submit",children:"Confirm"})]})]})]})})},ae=({title:e,image:t})=>{const[o,a]=M.useState(!1),s=()=>a(!o);return n.jsxs(co,{children:[n.jsxs(po,{children:[n.jsx(fo,{src:t,alt:"Plate"}),n.jsx(uo,{children:e})]}),n.jsx(ho,{onClick:s,children:"+ Record your meal"}),o&&n.jsx(Ro,{onClose:s,image:t,mealType:e})]})},To="/healthy_hub/assets/breakfast-image-63f468c4.svg",ko="/healthy_hub/assets/dinner-image-19c0e7ef.svg",No="/healthy_hub/assets/lunch-image-3c133980.svg",Do="/healthy_hub/assets/snack-image-28a6b2cf.svg",Fo=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Wo=l.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`,Lo=l.h2`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`,Io=l(We)`
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
`,Uo=l.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`,Bo=()=>n.jsxs(Fo,{children:[n.jsxs(Wo,{children:[n.jsx(Lo,{children:"Diary"}),n.jsx(Io,{to:"/diary",children:"See more"})]}),n.jsxs(Uo,{children:[n.jsx(ae,{title:"Breakfast",image:To}),n.jsx(ae,{title:"Lunch",image:No}),n.jsx(ae,{title:"Dinner",image:ko}),n.jsx(ae,{title:"Snack",image:Do})]})]}),zo=Bo,$o=l.section`
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
`,Ho=$o;function qo(){const e=[1,2,3,4],t={carbohydrates:14,protein:.3,fat:.2,name:"Apples",amount:"100 g",img:"https://ftp.goit.study/img/you_health/Apples.png",calories:52},{name:o,amount:a,img:s,calories:p}=t;return n.jsxs(Ho,{children:[n.jsx("h2",{children:"Recommended Food"}),n.jsxs("div",{className:"wrapper",children:[n.jsx("ul",{children:e.map(v=>n.jsx("li",{children:n.jsxs("div",{className:"description",children:[n.jsx("div",{className:"small_img_div",children:n.jsx("img",{src:s,alt:"",width:46,height:46})}),n.jsxs("section",{children:[n.jsx("h4",{children:o}),n.jsxs("p",{children:[a,n.jsxs("span",{children:[p," calories"]})]})]})]})},v))}),n.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",n.jsx("svg",{className:"svg",children:n.jsx("use",{href:`${z}#icon-arrow-right`})})]})]})]})}function Yo(){return n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"MainPage"}),n.jsx(lo,{}),n.jsx(zo,{}),n.jsx(qo,{})]})}export{Yo as default};
