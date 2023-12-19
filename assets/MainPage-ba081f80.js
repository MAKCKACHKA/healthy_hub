import{s as h,j as o,r as D,g as nt,a as ot,b as rt,L as at,c as he}from"./index-8bdaaa5c.js";import{i as H}from"./icons-d9ff0364.js";import{C as it,A as lt,D as st}from"./index-ed262bec.js";const ct=h.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,dt=h.div`
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
`,Ce=h.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,_e=h.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,Se=h.p`
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
`,ut=h.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function pt(e){return o.jsxs(ut,{children:[o.jsx(ct,{children:"Daily Goal"}),o.jsxs(dt,{children:[o.jsxs(Ce,{children:[o.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:o.jsx("use",{href:`${H}#icon-bubble`})}),o.jsxs("div",{children:[o.jsx(_e,{children:"Calories"}),o.jsx(Se,{children:e.calories})]})]}),o.jsxs(Ce,{children:[o.jsx("svg",{style:{stroke:"var(--water-color)"},children:o.jsx("use",{href:`${H}#icon-milk`})}),o.jsxs("div",{children:[o.jsx(_e,{children:"Water"}),o.jsxs(Se,{children:[e.water," ",o.jsx("span",{children:"ml"})]})]})]})]})]})}var me={exports:{}},U={},Fe={exports:{}},ft="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ht=ft,mt=ht;function Ae(){}function ke(){}ke.resetWarningCache=Ae;var vt=function(){function e(a,l,u,b,i,y){if(y!==mt){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ke,resetWarningCache:Ae};return r.PropTypes=r,r};Fe.exports=vt();var Le=Fe.exports,ve={exports:{}},P={},xe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=x;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var r="none",a="contents",l=/input|select|textarea|button|object|iframe/;function u(p,m){return m.getPropertyValue("overflow")!=="visible"||p.scrollWidth<=0&&p.scrollHeight<=0}function b(p){var m=p.offsetWidth<=0&&p.offsetHeight<=0;if(m&&!p.innerHTML)return!0;try{var g=window.getComputedStyle(p),S=g.getPropertyValue("display");return m?S!==a&&u(p,g):S===r}catch{return console.warn("Failed to inspect element style"),!1}}function i(p){for(var m=p,g=p.getRootNode&&p.getRootNode();m&&m!==document.body;){if(g&&m===g&&(m=g.host.parentNode),b(m))return!1;m=m.parentNode}return!0}function y(p,m){var g=p.nodeName.toLowerCase(),S=l.test(g)&&!p.disabled||g==="a"&&p.href||m;return S&&i(p)}function v(p){var m=p.getAttribute("tabindex");m===null&&(m=void 0);var g=isNaN(m);return(g||m>=0)&&y(p,!g)}function x(p){var m=[].slice.call(p.querySelectorAll("*"),0).reduce(function(g,S){return g.concat(S.shadowRoot?x(S.shadowRoot):[S])},[]);return m.filter(v)}e.exports=t.default})(xe,xe.exports);var We=xe.exports;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=bt;P.log=wt;P.handleBlur=Y;P.handleFocus=J;P.markForFocusLater=Ot;P.returnFocus=Ct;P.popWithoutFocus=_t;P.setupScopedFocus=St;P.teardownScopedFocus=Et;var xt=We,yt=gt(xt);function gt(e){return e&&e.__esModule?e:{default:e}}var B=[],I=null,ye=!1;function bt(){B=[]}function wt(){}function Y(){ye=!0}function J(){if(ye){if(ye=!1,!I)return;setTimeout(function(){if(!I.contains(document.activeElement)){var e=(0,yt.default)(I)[0]||I;e.focus()}},0)}}function Ot(){B.push(document.activeElement)}function Ct(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{B.length!==0&&(t=B.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function _t(){B.length>0&&B.pop()}function St(e){I=e,window.addEventListener?(window.addEventListener("blur",Y,!1),document.addEventListener("focus",J,!0)):(window.attachEvent("onBlur",Y),document.attachEvent("onFocus",J))}function Et(){I=null,window.addEventListener?(window.removeEventListener("blur",Y),document.removeEventListener("focus",J)):(window.detachEvent("onBlur",Y),document.detachEvent("onFocus",J))}var ge={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;var r=We,a=l(r);function l(i){return i&&i.__esModule?i:{default:i}}function u(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return i.activeElement.shadowRoot?u(i.activeElement.shadowRoot):i.activeElement}function b(i,y){var v=(0,a.default)(i);if(!v.length){y.preventDefault();return}var x=void 0,p=y.shiftKey,m=v[0],g=v[v.length-1],S=u();if(i===S){if(!p)return;x=g}if(g===S&&!p&&(x=m),m===S&&p&&(x=g),x){y.preventDefault(),x.focus();return}var N=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),K=N!=null&&N[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(K){var $=v.indexOf(S);if($>-1&&($+=p?-1:1),x=v[$],typeof x>"u"){y.preventDefault(),x=p?g:m,x.focus();return}y.preventDefault(),x.focus()}}e.exports=t.default})(ge,ge.exports);var jt=ge.exports,T={},Mt=function(){},Rt=Mt,R={},Ue={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=r:window.ExecutionEnvironment=r})()})(Ue);var Pt=Ue.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var Tt=Pt,Dt=Nt(Tt);function Nt(e){return e&&e.__esModule?e:{default:e}}var le=Dt.default,Ft=le.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=le.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=le.canUseDOM?window.NodeList:{};R.canUseDOM=le.canUseDOM;R.default=Ft;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Ut;T.log=$t;T.assertNodeList=$e;T.setElement=It;T.validateElement=be;T.hide=Ht;T.show=Bt;T.documentNotReadyOrSSRTesting=qt;var At=Rt,kt=Wt(At),Lt=R;function Wt(e){return e&&e.__esModule?e:{default:e}}var j=null;function Ut(){j&&(j.removeAttribute?j.removeAttribute("aria-hidden"):j.length!=null?j.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(j).forEach(function(e){return e.removeAttribute("aria-hidden")})),j=null}function $t(){}function $e(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function It(e){var t=e;if(typeof t=="string"&&Lt.canUseDOM){var r=document.querySelectorAll(t);$e(r,t),t=r}return j=t||j,j}function be(e){var t=e||j;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,kt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ht(e){var t=!0,r=!1,a=void 0;try{for(var l=be(e)[Symbol.iterator](),u;!(t=(u=l.next()).done);t=!0){var b=u.value;b.setAttribute("aria-hidden","true")}}catch(i){r=!0,a=i}finally{try{!t&&l.return&&l.return()}finally{if(r)throw a}}}function Bt(e){var t=!0,r=!1,a=void 0;try{for(var l=be(e)[Symbol.iterator](),u;!(t=(u=l.next()).done);t=!0){var b=u.value;b.removeAttribute("aria-hidden")}}catch(i){r=!0,a=i}finally{try{!t&&l.return&&l.return()}finally{if(r)throw a}}}function qt(){j=null}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.resetState=zt;q.log=Kt;var V={},G={};function Ee(e,t){e.classList.remove(t)}function zt(){var e=document.getElementsByTagName("html")[0];for(var t in V)Ee(e,V[t]);var r=document.body;for(var a in G)Ee(r,G[a]);V={},G={}}function Kt(){}var Vt=function(t,r){return t[r]||(t[r]=0),t[r]+=1,r},Gt=function(t,r){return t[r]&&(t[r]-=1),r},Yt=function(t,r,a){a.forEach(function(l){Vt(r,l),t.add(l)})},Jt=function(t,r,a){a.forEach(function(l){Gt(r,l),r[l]===0&&t.remove(l)})};q.add=function(t,r){return Yt(t.classList,t.nodeName.toLowerCase()=="html"?V:G,r.split(" "))};q.remove=function(t,r){return Jt(t.classList,t.nodeName.toLowerCase()=="html"?V:G,r.split(" "))};var z={};Object.defineProperty(z,"__esModule",{value:!0});z.log=Xt;z.resetState=Zt;function Qt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ie=function e(){var t=this;Qt(this,e),this.register=function(r){t.openInstances.indexOf(r)===-1&&(t.openInstances.push(r),t.emit("register"))},this.deregister=function(r){var a=t.openInstances.indexOf(r);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(r){t.subscribers.push(r)},this.emit=function(r){t.subscribers.forEach(function(a){return a(r,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},re=new Ie;function Xt(){console.log("portalOpenInstances ----------"),console.log(re.openInstances.length),re.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Zt(){re=new Ie}z.default=re;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=on;we.log=rn;var en=z,tn=nn(en);function nn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,M=void 0,W=[];function on(){for(var e=[_,M],t=0;t<e.length;t++){var r=e[t];r&&r.parentNode&&r.parentNode.removeChild(r)}_=M=null,W=[]}function rn(){console.log("bodyTrap ----------"),console.log(W.length);for(var e=[_,M],t=0;t<e.length;t++){var r=e[t],a=r||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function je(){W.length!==0&&W[W.length-1].focusContent()}function an(e,t){!_&&!M&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",je),M=_.cloneNode(),M.addEventListener("focus",je)),W=t,W.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(_.parentElement&&_.parentElement.removeChild(_),M.parentElement&&M.parentElement.removeChild(M))}tn.default.subscribe(an);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(f){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&(f[n]=w[n])}return f},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},l=function(){function f(d,w){for(var n=0;n<w.length;n++){var s=w[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(d,s.key,s)}}return function(d,w,n){return w&&f(d.prototype,w),n&&f(d,n),d}}(),u=D,b=Le,i=Z(b),y=P,v=se(y),x=jt,p=Z(x),m=T,g=se(m),S=q,N=se(S),K=R,$=Z(K),Ve=z,Oe=Z(Ve);function se(f){if(f&&f.__esModule)return f;var d={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(d[w]=f[w]);return d.default=f,d}function Z(f){return f&&f.__esModule?f:{default:f}}function Ge(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function Ye(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function Je(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var ce={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Qe=function(d){return d.code==="Tab"||d.keyCode===9},Xe=function(d){return d.code==="Escape"||d.keyCode===27},ee=0,de=function(f){Je(d,f);function d(w){Ge(this,d);var n=Ye(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return n.setOverlayRef=function(s){n.overlay=s,n.props.overlayRef&&n.props.overlayRef(s)},n.setContentRef=function(s){n.content=s,n.props.contentRef&&n.props.contentRef(s)},n.afterClose=function(){var s=n.props,C=s.appElement,E=s.ariaHideApp,O=s.htmlOpenClassName,A=s.bodyOpenClassName,k=s.parentSelector,te=k&&k().ownerDocument||document;A&&N.remove(te.body,A),O&&N.remove(te.getElementsByTagName("html")[0],O),E&&ee>0&&(ee-=1,ee===0&&g.show(C)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),Oe.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var s=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:s},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(s){Qe(s)&&(0,p.default)(n.content,s),n.props.shouldCloseOnEsc&&Xe(s)&&(s.stopPropagation(),n.requestClose(s))},n.handleOverlayOnClick=function(s){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(s):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(s){!n.props.shouldCloseOnOverlayClick&&s.target==n.overlay&&s.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(s){return n.ownerHandlesClose()&&n.props.onRequestClose(s)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(s,C){var E=(typeof C>"u"?"undefined":a(C))==="object"?C:{base:ce[s],afterOpen:ce[s]+"--after-open",beforeClose:ce[s]+"--before-close"},O=E.base;return n.state.afterOpen&&(O=O+" "+E.afterOpen),n.state.beforeClose&&(O=O+" "+E.beforeClose),typeof C=="string"&&C?O+" "+C:O},n.attributesFromObject=function(s,C){return Object.keys(C).reduce(function(E,O){return E[s+"-"+O]=C[O],E},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return l(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,s){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,s=n.appElement,C=n.ariaHideApp,E=n.htmlOpenClassName,O=n.bodyOpenClassName,A=n.parentSelector,k=A&&A().ownerDocument||document;O&&N.add(k.body,O),E&&N.add(k.getElementsByTagName("html")[0],E),C&&(ee+=1,g.hide(s)),Oe.default.register(this)}},{key:"render",value:function(){var n=this.props,s=n.id,C=n.className,E=n.overlayClassName,O=n.defaultStyles,A=n.children,k=C?{}:O.content,te=E?{}:O.overlay;if(this.shouldBeClosed())return null;var Ze={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:r({},te,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},et=r({id:s,ref:this.setContentRef,style:r({},k,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),tt=this.props.contentElement(et,A);return this.props.overlayElement(Ze,tt)}}]),d}(u.Component);de.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},de.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),parentSelector:i.default.func,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.oneOfType([i.default.instanceOf($.default),i.default.instanceOf(K.SafeHTMLCollection),i.default.instanceOf(K.SafeNodeList),i.default.arrayOf(i.default.instanceOf($.default))]),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func,testId:i.default.string},t.default=de,e.exports=t.default})(ve,ve.exports);var ln=ve.exports;function He(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Be(e){function t(r){var a=this.constructor.getDerivedStateFromProps(e,r);return a??null}this.setState(t.bind(this))}function qe(e,t){try{var r=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,a)}finally{this.props=r,this.state=a}}He.__suppressDeprecationWarning=!0;Be.__suppressDeprecationWarning=!0;qe.__suppressDeprecationWarning=!0;function sn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var r=null,a=null,l=null;if(typeof t.componentWillMount=="function"?r="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?l="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),r!==null||a!==null||l!==null){var u=e.displayName||e.name,b=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+u+" uses "+b+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(a!==null?`
  `+a:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=He,t.componentWillReceiveProps=Be),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=qe;var i=t.componentDidUpdate;t.componentDidUpdate=function(v,x,p){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;i.call(this,v,x,m)}}return e}const cn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:sn},Symbol.toStringTag,{value:"Module"})),dn=nt(cn);Object.defineProperty(U,"__esModule",{value:!0});U.bodyOpenClassName=U.portalClassName=void 0;var Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},un=function(){function e(t,r){for(var a=0;a<r.length;a++){var l=r[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),ze=D,ae=Q(ze),pn=ot,ie=Q(pn),fn=Le,c=Q(fn),hn=ln,Re=Q(hn),mn=T,vn=yn(mn),F=R,Pe=Q(F),xn=dn;function yn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Q(e){return e&&e.__esModule?e:{default:e}}function gn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Te(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function bn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var wn=U.portalClassName="ReactModalPortal",On=U.bodyOpenClassName="ReactModal__Body--open",L=F.canUseDOM&&ie.default.createPortal!==void 0,De=function(t){return document.createElement(t)},Ne=function(){return L?ie.default.createPortal:ie.default.unstable_renderSubtreeIntoContainer};function ne(e){return e()}var X=function(e){bn(t,e);function t(){var r,a,l,u;gn(this,t);for(var b=arguments.length,i=Array(b),y=0;y<b;y++)i[y]=arguments[y];return u=(a=(l=Te(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this].concat(i))),l),l.removePortal=function(){!L&&ie.default.unmountComponentAtNode(l.node);var v=ne(l.props.parentSelector);v&&v.contains(l.node)?v.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var x=Ne(),p=x(l,ae.default.createElement(Re.default,Me({defaultStyles:t.defaultStyles},v)),l.node);l.portalRef(p)},a),Te(l,u)}return un(t,[{key:"componentDidMount",value:function(){if(F.canUseDOM){L||(this.node=De("div")),this.node.className=this.props.portalClassName;var a=ne(this.props.parentSelector);a.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=ne(a.parentSelector),u=ne(this.props.parentSelector);return{prevParent:l,nextParent:u}}},{key:"componentDidUpdate",value:function(a,l,u){if(F.canUseDOM){var b=this.props,i=b.isOpen,y=b.portalClassName;a.portalClassName!==y&&(this.node.className=y);var v=u.prevParent,x=u.nextParent;x!==v&&(v.removeChild(this.node),x.appendChild(this.node)),!(!a.isOpen&&!i)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!F.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),u=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);u?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,u-l)):this.removePortal()}}},{key:"render",value:function(){if(!F.canUseDOM||!L)return null;!this.node&&L&&(this.node=De("div"));var a=Ne();return a(ae.default.createElement(Re.default,Me({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){vn.setElement(a)}}]),t}(ze.Component);X.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(Pe.default),c.default.instanceOf(F.SafeHTMLCollection),c.default.instanceOf(F.SafeNodeList),c.default.arrayOf(c.default.instanceOf(Pe.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};X.defaultProps={isOpen:!1,portalClassName:wn,bodyOpenClassName:On,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,r){return ae.default.createElement("div",t,r)},contentElement:function(t,r){return ae.default.createElement("div",t,r)}};X.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,xn.polyfill)(X);U.default=X;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=U,a=l(r);function l(u){return u&&u.__esModule?u:{default:u}}t.default=a.default,e.exports=t.default})(me,me.exports);var Cn=me.exports;const Ke=rt(Cn),_n=h.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Sn=h.div`
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
`,En=h.button`
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
`,jn=h.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,Mn=h.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,Rn=h.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Pn=h.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Tn=h.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,Dn=h.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Nn=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Fn=h.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,An=h.form`
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
`,kn=h.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Ln=h.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,Wn=h.div`
  height: ${e=>e.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,Un=h.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,$n=({percentage:e})=>o.jsxs(Ln,{children:[o.jsxs(Un,{children:[isNaN(e)?0:e,"%"]}),o.jsx(Wn,{$percentage:e})]}),In=$n,Hn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Ke.setAppElement("#root");function Bn({waterobjective:e,watercurrent:t}){const[r,a]=D.useState(t??0);D.useState(e);const[l,u]=D.useState(0),[b,i]=D.useState(!1);function y(p){p.preventDefault();let m=p.target.children[0].children[0].value;u(l+Math.round(m*100/e)),a(r+Math.round(p.target.children[0].children[0].value)),x()}function v(){i(!0)}function x(){i(!1)}return o.jsxs(Tn,{children:[o.jsx(_n,{children:"Water"}),o.jsxs(Sn,{children:[o.jsx(In,{percentage:l}),o.jsxs(Pn,{children:[o.jsx(jn,{children:"Water consumption"}),o.jsxs(Nn,{children:[o.jsxs(Mn,{children:[r," ",o.jsx("span",{children:"ml"})]}),o.jsxs(Rn,{children:[o.jsx("span",{children:"left : "}),e>=r?e-r:0,"ml"]})]}),o.jsxs(En,{onClick:v,children:[o.jsx("svg",{children:o.jsx("use",{href:`${H}#icon-add`})}),"Add Water Intake"]})]})]}),o.jsx(Dn,{width:"20",height:"20",fill:"none",onClick:()=>a(0),children:o.jsx("use",{href:`${H}#icon-trash`})}),o.jsxs(Ke,{isOpen:b,onRequestClose:x,style:Hn,contentLabel:"Example Modal",children:[o.jsx(Fn,{children:"Add water Intake"}),o.jsxs(An,{onSubmit:y,children:[o.jsxs("label",{children:["How much water",o.jsx("input",{type:"number",placeholder:"Enter millilitters"})]}),o.jsx("button",{children:"Confirm"})]}),o.jsx(kn,{onClick:x,children:"Cancel"})]})]})}const qn=h.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,zn=h.div`
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
`,Kn=h.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,Vn=h.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ue=h.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,pe=h.p`
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
`,fe=h.div`
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
`,Gn=h(st)`
  width: ${e=>e.$widthpx}px !important;
  height: ${e=>e.$heightpx}px !important;
`;it.register(lt);const Yn=e=>{const t={cutout:"80%",plugins:{legend:{display:!1}},tooltips:{enabled:!1},hover:{mode:null},events:[]},r={labels:["Filled","Empty"],datasets:[{data:[75,25],backgroundColor:[e.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},a={id:"backgroundCircle",beforeDatasetsDraw(l,u,b){const{ctx:i}=l;i.save();const y=l.getDatasetMeta(0).data[0].x,v=l.getDatasetMeta(0).data[0].y,x=l.getDatasetMeta(0).data[0].innerRadius,p=l.getDatasetMeta(0).data[0].outerRadius,m=p-x,g=Math.PI/180;i.beginPath(),i.lineWidth=m,i.strokeStyle="#292928",i.arc(y,v,p-m/2,0,g*360,!1),i.stroke()}};return o.jsx(Gn,{$widthpx:e.widthpx,$heightpx:e.heightpx,data:r,options:t,plugins:[a]})},oe=Yn,Jn=h.p`
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
`,Qn=h.div`
  position: relative;
  display: flex;
  align-items: center;
`,Xn=({calories:e})=>o.jsxs(Qn,{children:[o.jsx(oe,{color:"#45FFBC",widthpx:168,heightpx:168}),o.jsxs(Jn,{children:["1360 ",o.jsx("span",{children:"calories"})]})]}),Zn=Xn;function eo({stats:e}){return o.jsxs(Kn,{children:[o.jsx(qn,{children:"Food"}),o.jsxs(zn,{children:[o.jsx(Zn,{}),o.jsxs(Vn,{children:[o.jsxs(ue,{children:[o.jsx(oe,{heightpx:48,widthpx:48,color:"#FFC4F7"}),o.jsx(pe,{children:"80%"}),o.jsxs(fe,{children:[o.jsx("h3",{children:"Carbohidrates"}),o.jsxs("div",{children:[o.jsxs("p",{children:["Goal: ",o.jsx("span",{children:"170"})]}),o.jsxs("p",{children:["left: ",o.jsx("span",{children:"34"})]})]})]})]}),o.jsxs(ue,{children:[o.jsx(oe,{heightpx:48,widthpx:48,color:"#FFF3B7"}),o.jsx(pe,{children:"80%"}),o.jsxs(fe,{children:[o.jsx("h3",{children:"Protein"}),o.jsxs("div",{children:[o.jsxs("p",{children:["Goal: ",o.jsx("span",{children:"127.5"})]}),o.jsxs("p",{children:["left: ",o.jsx("span",{children:"8"})]})]})]})]}),o.jsxs(ue,{children:[o.jsx(oe,{heightpx:48,widthpx:48,color:"#B6B6B6"}),o.jsx(pe,{children:"80%"}),o.jsxs(fe,{children:[o.jsx("h3",{children:"Fat"}),o.jsxs("div",{children:[o.jsxs("p",{children:["Goal: ",o.jsx("span",{children:"56"})]}),o.jsxs("p",{children:["left: ",o.jsx("span",{children:"11,2"})]})]})]})]})]})]})]})}const to=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,no=h.div`
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
`,oo=h(at)`
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
`;he.defaults.baseURL="https://healthy-hub-rest-api.onrender.com/api";function ro(){const[e,t]=D.useState({}),[r,a]=D.useState("");return D.useEffect(()=>{async function l(){await he.post("/auth/signin",{email:"john.doe@example.com",password:"randompassword123"}).then(u=>{a(u.data.user.token)})}l()},[r]),D.useEffect(()=>{async function l(){await he.get("/user/current",{headers:{Authorization:`Bearer ${r}`}}).then(u=>{console.log(u.data),t(u.data)})}r!==""&&l()},[r]),o.jsxs("div",{children:[o.jsxs(no,{children:[o.jsx("h2",{children:"Today"}),o.jsxs(oo,{to:"/dashboard",children:["On the way to the goal",o.jsx("svg",{children:o.jsx("use",{href:`${H}#icon-arrow-right`})})]})]}),o.jsxs(to,{children:[o.jsx(pt,{calories:e.dailyCalories,water:e.dailyWater}),o.jsx(Bn,{waterobjective:e.dailyWater,watercurrent:e.consumedWaterByDay}),o.jsx(eo,{stats:e.consumedMealsByDay})]})]})}function ao(){return o.jsx(o.Fragment,{children:o.jsx("p",{children:"Diary"})})}const io=h.section`
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
`,lo=io;function so(){const e=[1,2,3,4],t={carbohydrates:14,protein:.3,fat:.2,name:"Apples",amount:"100 g",img:"https://ftp.goit.study/img/you_health/Apples.png",calories:52},{name:r,amount:a,img:l,calories:u}=t;return o.jsxs(lo,{children:[o.jsx("h2",{children:"Recommended Food"}),o.jsxs("div",{className:"wrapper",children:[o.jsx("ul",{children:e.map(b=>o.jsx("li",{children:o.jsxs("div",{className:"description",children:[o.jsx("div",{className:"small_img_div",children:o.jsx("img",{src:l,alt:"",width:46,height:46})}),o.jsxs("section",{children:[o.jsx("h4",{children:r}),o.jsxs("p",{children:[a,o.jsxs("span",{children:[u," calories"]})]})]})]})},b))}),o.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",o.jsx("svg",{className:"svg",children:o.jsx("use",{href:`${H}#icon-arrow-right`})})]})]})]})}function fo(){return o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"MainPage"}),o.jsx(ro,{}),o.jsx(ao,{}),o.jsx(so,{})]})}export{fo as default};
