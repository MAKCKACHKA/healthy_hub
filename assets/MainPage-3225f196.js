import{s as E,j as u,r as I,g as bn,a as vn,b as wn,L as On}from"./index-c654ea5f.js";import{i as Z}from"./icons-fdffdb85.js";import{C as En,A as Sn,D as Cn}from"./index-e7d11ac1.js";const Rn=E.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
`,_n=E.div`
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
`,lt=E.div`
  display: flex;
  gap: 20px;

  svg {
    height: 80px;
    width: 80px;
    fill: none;
  }
`,ct=E.p`
  color: var(--primary-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin: 0;
`,ut=E.p`
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
`,Tn=E.div`
  @media (min-width: 834px) {
    flex-grow: 1;
  }
`;function An(e){return u.jsxs(Tn,{children:[u.jsx(Rn,{children:"Daily Goal"}),u.jsxs(_n,{children:[u.jsxs(lt,{children:[u.jsx("svg",{style:{stroke:"var(--colories-graf-color)"},children:u.jsx("use",{href:`${Z}#icon-bubble`})}),u.jsxs("div",{children:[u.jsx(ct,{children:"Calories"}),u.jsx(ut,{children:e.calories})]})]}),u.jsxs(lt,{children:[u.jsx("svg",{style:{stroke:"var(--water-color)"},children:u.jsx("use",{href:`${Z}#icon-milk`})}),u.jsxs("div",{children:[u.jsx(ct,{children:"Water"}),u.jsxs(ut,{children:[e.water," ",u.jsx("span",{children:"ml"})]})]})]})]})]})}var $e={exports:{}},Y={},Pt={exports:{}},Pn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nn=Pn,jn=Nn;function Nt(){}function jt(){}jt.resetWarningCache=Nt;var Fn=function(){function e(r,o,s,i,a,h){if(h!==jn){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:jt,resetWarningCache:Nt};return n.PropTypes=n,n};Pt.exports=Fn();var Ft=Pt.exports,qe={exports:{}},U={},ze={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",o=/input|select|textarea|button|object|iframe/;function s(l,x){return x.getPropertyValue("overflow")!=="visible"||l.scrollWidth<=0&&l.scrollHeight<=0}function i(l){var x=l.offsetWidth<=0&&l.offsetHeight<=0;if(x&&!l.innerHTML)return!0;try{var O=window.getComputedStyle(l),m=O.getPropertyValue("display");return x?m!==r&&s(l,O):m===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(l){for(var x=l,O=l.getRootNode&&l.getRootNode();x&&x!==document.body;){if(O&&x===O&&(x=O.host.parentNode),i(x))return!1;x=x.parentNode}return!0}function h(l,x){var O=l.nodeName.toLowerCase(),m=o.test(O)&&!l.disabled||O==="a"&&l.href||x;return m&&a(l)}function p(l){var x=l.getAttribute("tabindex");x===null&&(x=void 0);var O=isNaN(x);return(O||x>=0)&&h(l,!O)}function d(l){var x=[].slice.call(l.querySelectorAll("*"),0).reduce(function(O,m){return O.concat(m.shadowRoot?d(m.shadowRoot):[m])},[]);return x.filter(p)}e.exports=t.default})(ze,ze.exports);var Dt=ze.exports;Object.defineProperty(U,"__esModule",{value:!0});U.resetState=kn;U.log=Un;U.handleBlur=ce;U.handleFocus=ue;U.markForFocusLater=Bn;U.returnFocus=Hn;U.popWithoutFocus=In;U.setupScopedFocus=Wn;U.teardownScopedFocus=$n;var Dn=Dt,Mn=Ln(Dn);function Ln(e){return e&&e.__esModule?e:{default:e}}var ee=[],Q=null,Ve=!1;function kn(){ee=[]}function Un(){}function ce(){Ve=!0}function ue(){if(Ve){if(Ve=!1,!Q)return;setTimeout(function(){if(!Q.contains(document.activeElement)){var e=(0,Mn.default)(Q)[0]||Q;e.focus()}},0)}}function Bn(){ee.push(document.activeElement)}function Hn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{ee.length!==0&&(t=ee.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function In(){ee.length>0&&ee.pop()}function Wn(e){Q=e,window.addEventListener?(window.addEventListener("blur",ce,!1),document.addEventListener("focus",ue,!0)):(window.attachEvent("onBlur",ce),document.attachEvent("onFocus",ue))}function $n(){Q=null,window.addEventListener?(window.removeEventListener("blur",ce),document.removeEventListener("focus",ue)):(window.detachEvent("onBlur",ce),document.detachEvent("onFocus",ue))}var Je={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=Dt,r=o(n);function o(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function i(a,h){var p=(0,r.default)(a);if(!p.length){h.preventDefault();return}var d=void 0,l=h.shiftKey,x=p[0],O=p[p.length-1],m=s();if(a===m){if(!l)return;d=O}if(O===m&&!l&&(d=x),x===m&&l&&(d=O),d){h.preventDefault(),d.focus();return}var y=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),C=y!=null&&y[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(C){var R=p.indexOf(m);if(R>-1&&(R+=l?-1:1),d=p[R],typeof d>"u"){h.preventDefault(),d=l?O:x,d.focus();return}h.preventDefault(),d.focus()}}e.exports=t.default})(Je,Je.exports);var qn=Je.exports,B={},zn=function(){},Vn=zn,k={},Mt={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Mt);var Jn=Mt.exports;Object.defineProperty(k,"__esModule",{value:!0});k.canUseDOM=k.SafeNodeList=k.SafeHTMLCollection=void 0;var Kn=Jn,Gn=Xn(Kn);function Xn(e){return e&&e.__esModule?e:{default:e}}var Te=Gn.default,Yn=Te.canUseDOM?window.HTMLElement:{};k.SafeHTMLCollection=Te.canUseDOM?window.HTMLCollection:{};k.SafeNodeList=Te.canUseDOM?window.NodeList:{};k.canUseDOM=Te.canUseDOM;k.default=Yn;Object.defineProperty(B,"__esModule",{value:!0});B.resetState=nr;B.log=rr;B.assertNodeList=Lt;B.setElement=or;B.validateElement=et;B.hide=sr;B.show=ir;B.documentNotReadyOrSSRTesting=ar;var Qn=Vn,Zn=tr(Qn),er=k;function tr(e){return e&&e.__esModule?e:{default:e}}var F=null;function nr(){F&&(F.removeAttribute?F.removeAttribute("aria-hidden"):F.length!=null?F.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(F).forEach(function(e){return e.removeAttribute("aria-hidden")})),F=null}function rr(){}function Lt(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function or(e){var t=e;if(typeof t=="string"&&er.canUseDOM){var n=document.querySelectorAll(t);Lt(n,t),t=n}return F=t||F,F}function et(e){var t=e||F;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Zn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function sr(e){var t=!0,n=!1,r=void 0;try{for(var o=et(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var i=s.value;i.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}function ir(e){var t=!0,n=!1,r=void 0;try{for(var o=et(e)[Symbol.iterator](),s;!(t=(s=o.next()).done);t=!0){var i=s.value;i.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}function ar(){F=null}var ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.resetState=lr;ne.log=cr;var ae={},le={};function ft(e,t){e.classList.remove(t)}function lr(){var e=document.getElementsByTagName("html")[0];for(var t in ae)ft(e,ae[t]);var n=document.body;for(var r in le)ft(n,le[r]);ae={},le={}}function cr(){}var ur=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},fr=function(t,n){return t[n]&&(t[n]-=1),n},dr=function(t,n,r){r.forEach(function(o){ur(n,o),t.add(o)})},pr=function(t,n,r){r.forEach(function(o){fr(n,o),n[o]===0&&t.remove(o)})};ne.add=function(t,n){return dr(t.classList,t.nodeName.toLowerCase()=="html"?ae:le,n.split(" "))};ne.remove=function(t,n){return pr(t.classList,t.nodeName.toLowerCase()=="html"?ae:le,n.split(" "))};var re={};Object.defineProperty(re,"__esModule",{value:!0});re.log=mr;re.resetState=yr;function hr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var kt=function e(){var t=this;hr(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Se=new kt;function mr(){console.log("portalOpenInstances ----------"),console.log(Se.openInstances.length),Se.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function yr(){Se=new kt}re.default=Se;var tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.resetState=vr;tt.log=wr;var xr=re,gr=br(xr);function br(e){return e&&e.__esModule?e:{default:e}}var N=void 0,L=void 0,X=[];function vr(){for(var e=[N,L],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}N=L=null,X=[]}function wr(){console.log("bodyTrap ----------"),console.log(X.length);for(var e=[N,L],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function dt(){X.length!==0&&X[X.length-1].focusContent()}function Or(e,t){!N&&!L&&(N=document.createElement("div"),N.setAttribute("data-react-modal-body-trap",""),N.style.position="absolute",N.style.opacity="0",N.setAttribute("tabindex","0"),N.addEventListener("focus",dt),L=N.cloneNode(),L.addEventListener("focus",dt)),X=t,X.length>0?(document.body.firstChild!==N&&document.body.insertBefore(N,document.body.firstChild),document.body.lastChild!==L&&document.body.appendChild(L)):(N.parentElement&&N.parentElement.removeChild(N),L.parentElement&&L.parentElement.removeChild(L))}gr.default.subscribe(Or);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(w){for(var v=1;v<arguments.length;v++){var _=arguments[v];for(var c in _)Object.prototype.hasOwnProperty.call(_,c)&&(w[c]=_[c])}return w},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},o=function(){function w(v,_){for(var c=0;c<_.length;c++){var g=_[c];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(v,g.key,g)}}return function(v,_,c){return _&&w(v.prototype,_),c&&w(v,c),v}}(),s=I,i=Ft,a=ye(i),h=U,p=se(h),d=qn,l=ye(d),x=B,O=se(x),m=ne,y=se(m),C=k,R=ye(C),H=re,M=ye(H);function se(w){if(w&&w.__esModule)return w;var v={};if(w!=null)for(var _ in w)Object.prototype.hasOwnProperty.call(w,_)&&(v[_]=w[_]);return v.default=w,v}function ye(w){return w&&w.__esModule?w:{default:w}}function fn(w,v){if(!(w instanceof v))throw new TypeError("Cannot call a class as a function")}function dn(w,v){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:w}function pn(w,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);w.prototype=Object.create(v&&v.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(w,v):w.__proto__=v)}var De={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},hn=function(v){return v.code==="Tab"||v.keyCode===9},mn=function(v){return v.code==="Escape"||v.keyCode===27},xe=0,Me=function(w){pn(v,w);function v(_){fn(this,v);var c=dn(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,_));return c.setOverlayRef=function(g){c.overlay=g,c.props.overlayRef&&c.props.overlayRef(g)},c.setContentRef=function(g){c.content=g,c.props.contentRef&&c.props.contentRef(g)},c.afterClose=function(){var g=c.props,P=g.appElement,j=g.ariaHideApp,A=g.htmlOpenClassName,J=g.bodyOpenClassName,K=g.parentSelector,ge=K&&K().ownerDocument||document;J&&y.remove(ge.body,J),A&&y.remove(ge.getElementsByTagName("html")[0],A),j&&xe>0&&(xe-=1,xe===0&&O.show(P)),c.props.shouldFocusAfterRender&&(c.props.shouldReturnFocusAfterClose?(p.returnFocus(c.props.preventScroll),p.teardownScopedFocus()):p.popWithoutFocus()),c.props.onAfterClose&&c.props.onAfterClose(),M.default.deregister(c)},c.open=function(){c.beforeOpen(),c.state.afterOpen&&c.state.beforeClose?(clearTimeout(c.closeTimer),c.setState({beforeClose:!1})):(c.props.shouldFocusAfterRender&&(p.setupScopedFocus(c.node),p.markForFocusLater()),c.setState({isOpen:!0},function(){c.openAnimationFrame=requestAnimationFrame(function(){c.setState({afterOpen:!0}),c.props.isOpen&&c.props.onAfterOpen&&c.props.onAfterOpen({overlayEl:c.overlay,contentEl:c.content})})}))},c.close=function(){c.props.closeTimeoutMS>0?c.closeWithTimeout():c.closeWithoutTimeout()},c.focusContent=function(){return c.content&&!c.contentHasFocus()&&c.content.focus({preventScroll:!0})},c.closeWithTimeout=function(){var g=Date.now()+c.props.closeTimeoutMS;c.setState({beforeClose:!0,closesAt:g},function(){c.closeTimer=setTimeout(c.closeWithoutTimeout,c.state.closesAt-Date.now())})},c.closeWithoutTimeout=function(){c.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},c.afterClose)},c.handleKeyDown=function(g){hn(g)&&(0,l.default)(c.content,g),c.props.shouldCloseOnEsc&&mn(g)&&(g.stopPropagation(),c.requestClose(g))},c.handleOverlayOnClick=function(g){c.shouldClose===null&&(c.shouldClose=!0),c.shouldClose&&c.props.shouldCloseOnOverlayClick&&(c.ownerHandlesClose()?c.requestClose(g):c.focusContent()),c.shouldClose=null},c.handleContentOnMouseUp=function(){c.shouldClose=!1},c.handleOverlayOnMouseDown=function(g){!c.props.shouldCloseOnOverlayClick&&g.target==c.overlay&&g.preventDefault()},c.handleContentOnClick=function(){c.shouldClose=!1},c.handleContentOnMouseDown=function(){c.shouldClose=!1},c.requestClose=function(g){return c.ownerHandlesClose()&&c.props.onRequestClose(g)},c.ownerHandlesClose=function(){return c.props.onRequestClose},c.shouldBeClosed=function(){return!c.state.isOpen&&!c.state.beforeClose},c.contentHasFocus=function(){return document.activeElement===c.content||c.content.contains(document.activeElement)},c.buildClassName=function(g,P){var j=(typeof P>"u"?"undefined":r(P))==="object"?P:{base:De[g],afterOpen:De[g]+"--after-open",beforeClose:De[g]+"--before-close"},A=j.base;return c.state.afterOpen&&(A=A+" "+j.afterOpen),c.state.beforeClose&&(A=A+" "+j.beforeClose),typeof P=="string"&&P?A+" "+P:A},c.attributesFromObject=function(g,P){return Object.keys(P).reduce(function(j,A){return j[g+"-"+A]=P[A],j},{})},c.state={afterOpen:!1,beforeClose:!1},c.shouldClose=null,c.moveFromContentToOverlay=null,c}return o(v,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(c,g){this.props.isOpen&&!c.isOpen?this.open():!this.props.isOpen&&c.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!g.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var c=this.props,g=c.appElement,P=c.ariaHideApp,j=c.htmlOpenClassName,A=c.bodyOpenClassName,J=c.parentSelector,K=J&&J().ownerDocument||document;A&&y.add(K.body,A),j&&y.add(K.getElementsByTagName("html")[0],j),P&&(xe+=1,O.hide(g)),M.default.register(this)}},{key:"render",value:function(){var c=this.props,g=c.id,P=c.className,j=c.overlayClassName,A=c.defaultStyles,J=c.children,K=P?{}:A.content,ge=j?{}:A.overlay;if(this.shouldBeClosed())return null;var yn={ref:this.setOverlayRef,className:this.buildClassName("overlay",j),style:n({},ge,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},xn=n({id:g,ref:this.setContentRef,style:n({},K,this.props.style.content),className:this.buildClassName("content",P),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),gn=this.props.contentElement(xn,J);return this.props.overlayElement(yn,gn)}}]),v}(s.Component);Me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Me.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(R.default),a.default.instanceOf(C.SafeHTMLCollection),a.default.instanceOf(C.SafeNodeList),a.default.arrayOf(a.default.instanceOf(R.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=Me,e.exports=t.default})(qe,qe.exports);var Er=qe.exports;function Ut(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Bt(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ht(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Ut.__suppressDeprecationWarning=!0;Bt.__suppressDeprecationWarning=!0;Ht.__suppressDeprecationWarning=!0;function Sr(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||r!==null||o!==null){var s=e.displayName||e.name,i=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+i+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Ut,t.componentWillReceiveProps=Bt),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ht;var a=t.componentDidUpdate;t.componentDidUpdate=function(p,d,l){var x=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;a.call(this,p,d,x)}}return e}const Cr=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Sr},Symbol.toStringTag,{value:"Module"})),Rr=bn(Cr);Object.defineProperty(Y,"__esModule",{value:!0});Y.bodyOpenClassName=Y.portalClassName=void 0;var pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_r=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),It=I,Ce=de(It),Tr=vn,Re=de(Tr),Ar=Ft,b=de(Ar),Pr=Er,ht=de(Pr),Nr=B,jr=Dr(Nr),V=k,mt=de(V),Fr=Rr;function Dr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function de(e){return e&&e.__esModule?e:{default:e}}function Mr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yt(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Lr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var kr=Y.portalClassName="ReactModalPortal",Ur=Y.bodyOpenClassName="ReactModal__Body--open",G=V.canUseDOM&&Re.default.createPortal!==void 0,xt=function(t){return document.createElement(t)},gt=function(){return G?Re.default.createPortal:Re.default.unstable_renderSubtreeIntoContainer};function be(e){return e()}var pe=function(e){Lr(t,e);function t(){var n,r,o,s;Mr(this,t);for(var i=arguments.length,a=Array(i),h=0;h<i;h++)a[h]=arguments[h];return s=(r=(o=yt(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.removePortal=function(){!G&&Re.default.unmountComponentAtNode(o.node);var p=be(o.props.parentSelector);p&&p.contains(o.node)?p.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(p){o.portal=p},o.renderPortal=function(p){var d=gt(),l=d(o,Ce.default.createElement(ht.default,pt({defaultStyles:t.defaultStyles},p)),o.node);o.portalRef(l)},r),yt(o,s)}return _r(t,[{key:"componentDidMount",value:function(){if(V.canUseDOM){G||(this.node=xt("div")),this.node.className=this.props.portalClassName;var r=be(this.props.parentSelector);r.appendChild(this.node),!G&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var o=be(r.parentSelector),s=be(this.props.parentSelector);return{prevParent:o,nextParent:s}}},{key:"componentDidUpdate",value:function(r,o,s){if(V.canUseDOM){var i=this.props,a=i.isOpen,h=i.portalClassName;r.portalClassName!==h&&(this.node.className=h);var p=s.prevParent,d=s.nextParent;d!==p&&(p.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!G&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!V.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,o=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||o+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-o)):this.removePortal()}}},{key:"render",value:function(){if(!V.canUseDOM||!G)return null;!this.node&&G&&(this.node=xt("div"));var r=gt();return r(Ce.default.createElement(ht.default,pt({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){jr.setElement(r)}}]),t}(It.Component);pe.propTypes={isOpen:b.default.bool.isRequired,style:b.default.shape({content:b.default.object,overlay:b.default.object}),portalClassName:b.default.string,bodyOpenClassName:b.default.string,htmlOpenClassName:b.default.string,className:b.default.oneOfType([b.default.string,b.default.shape({base:b.default.string.isRequired,afterOpen:b.default.string.isRequired,beforeClose:b.default.string.isRequired})]),overlayClassName:b.default.oneOfType([b.default.string,b.default.shape({base:b.default.string.isRequired,afterOpen:b.default.string.isRequired,beforeClose:b.default.string.isRequired})]),appElement:b.default.oneOfType([b.default.instanceOf(mt.default),b.default.instanceOf(V.SafeHTMLCollection),b.default.instanceOf(V.SafeNodeList),b.default.arrayOf(b.default.instanceOf(mt.default))]),onAfterOpen:b.default.func,onRequestClose:b.default.func,closeTimeoutMS:b.default.number,ariaHideApp:b.default.bool,shouldFocusAfterRender:b.default.bool,shouldCloseOnOverlayClick:b.default.bool,shouldReturnFocusAfterClose:b.default.bool,preventScroll:b.default.bool,parentSelector:b.default.func,aria:b.default.object,data:b.default.object,role:b.default.string,contentLabel:b.default.string,shouldCloseOnEsc:b.default.bool,overlayRef:b.default.func,contentRef:b.default.func,id:b.default.string,overlayElement:b.default.func,contentElement:b.default.func};pe.defaultProps={isOpen:!1,portalClassName:kr,bodyOpenClassName:Ur,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Ce.default.createElement("div",t,n)},contentElement:function(t,n){return Ce.default.createElement("div",t,n)}};pe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Fr.polyfill)(pe);Y.default=pe;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Y,r=o(n);function o(s){return s&&s.__esModule?s:{default:s}}t.default=r.default,e.exports=t.default})($e,$e.exports);var Br=$e.exports;const Wt=wn(Br),Hr=E.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,Ir=E.div`
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
`,Wr=E.button`
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
`,$r=E.p`
  color: var(--primary-title-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 12px;
`,qr=E.p`
  color: var(--primary-title-text-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.21;
  display: flex;
  align-items: center;
  gap: 8px;
`,zr=E.p`
  display: flex;
  gap: 4px;
  align-items: center;

  span {
    color: var(--primary-title-text-color);
  }
`,Vr=E.div`
  height: 192px;
  display: flex;
  flex-direction: column;
  padding: 33px 0;
`,Jr=E.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-grow: 2;
  }
`,Kr=E.svg`
  position: absolute;
  top: 40px;
  right: 15px;
`,Gr=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 40px;
  }
`,Xr=E.p`
  color: var(--primary-title-text-color);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 24px;
`,Yr=E.form`
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
`,Qr=E.p`
  color: var(--primary-text-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  margin: 0;
  cursor: pointer;
`,Zr=E.div`
  max-height: 192px;
  width: 80px;
  padding: 8px;
  border-radius: 20px;
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`,eo=E.div`
  height: ${e=>e.$percentage}%;
  width: 100%;
  background: var(--water-color);
  border-radius: 20px;
`,to=E.p`
  color: var(--water-color);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.37;
  margin: 0;
  margin-bottom: 6px;
`,no=({percentage:e})=>u.jsxs(Zr,{children:[u.jsxs(to,{children:[isNaN(e)?0:e,"%"]}),u.jsx(eo,{$percentage:e})]}),ro=no,oo={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"12px",background:"#0F0F0F",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 40px",border:"none"},overlay:{background:"#050505CC"}};Wt.setAppElement("#root");function so({waterobjective:e,watercurrent:t}){const[n,r]=I.useState(t??0);I.useState(e);const[o,s]=I.useState(0),[i,a]=I.useState(!1);function h(l){l.preventDefault();let x=l.target.children[0].children[0].value;s(o+Math.round(x*100/e)),r(n+Math.round(l.target.children[0].children[0].value)),d()}function p(){a(!0)}function d(){a(!1)}return u.jsxs(Jr,{children:[u.jsx(Hr,{children:"Water"}),u.jsxs(Ir,{children:[u.jsx(ro,{percentage:o}),u.jsxs(Vr,{children:[u.jsx($r,{children:"Water consumption"}),u.jsxs(Gr,{children:[u.jsxs(qr,{children:[n," ",u.jsx("span",{children:"ml"})]}),u.jsxs(zr,{children:[u.jsx("span",{children:"left : "}),e>=n?e-n:0,"ml"]})]}),u.jsxs(Wr,{onClick:p,children:[u.jsx("svg",{children:u.jsx("use",{href:`${Z}#icon-add`})}),"Add Water Intake"]})]})]}),u.jsx(Kr,{width:"20",height:"20",fill:"none",onClick:()=>r(0),children:u.jsx("use",{href:`${Z}#icon-trash`})}),u.jsxs(Wt,{isOpen:i,onRequestClose:d,style:oo,contentLabel:"Example Modal",children:[u.jsx(Xr,{children:"Add water Intake"}),u.jsxs(Yr,{onSubmit:h,children:[u.jsxs("label",{children:["How much water",u.jsx("input",{type:"number",placeholder:"Enter millilitters"})]}),u.jsx("button",{children:"Confirm"})]}),u.jsx(Qr,{onClick:d,children:"Cancel"})]})]})}const io=E.h4`
  color: var(--primary-title-text-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
  margin-bottom: 6px;
  display: inline;
`,ao=E.div`
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
`,lo=E.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-grow: 2;
  }
`,co=E.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Le=E.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,ke=E.p`
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
`,Ue=E.div`
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
`,uo=E(Cn)`
  width: ${e=>e.$widthpx}px !important;
  height: ${e=>e.$heightpx}px !important;
`;En.register(Sn);const fo=e=>{const t={labels:["Filled","Empty"],datasets:[{data:[75,25],backgroundColor:[e.color,"#292928"],borderColor:["transparent","#292928"],borderWidth:[0,0],borderRadius:[168,0]}]},n={cutout:"80%",plugins:{legend:{display:!1}},hover:!1},r={id:"backgroundCircle",beforeDatasetsDraw(o,s,i){const{ctx:a}=o;a.save();const h=o.getDatasetMeta(0).data[0].x,p=o.getDatasetMeta(0).data[0].y,d=o.getDatasetMeta(0).data[0].innerRadius,l=o.getDatasetMeta(0).data[0].outerRadius,x=l-d,O=Math.PI/180;a.beginPath(),a.lineWidth=x,a.strokeStyle="#292928",a.arc(h,p,l-x/2,0,O*360,!1),a.stroke()}};return u.jsx(uo,{$widthpx:e.widthpx,$heightpx:e.heightpx,data:t,options:n,plugins:[r]})},ve=fo,po=E.p`
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
`,ho=E.div`
  position: relative;
  display: flex;
  align-items: center;
`,mo=({calories:e})=>u.jsxs(ho,{children:[u.jsx(ve,{color:"#45FFBC",widthpx:168,heightpx:168}),u.jsxs(po,{children:["1360 ",u.jsx("span",{children:"calories"})]})]}),yo=mo;function xo({stats:e}){return u.jsxs(lo,{children:[u.jsx(io,{children:"Food"}),u.jsxs(ao,{children:[u.jsx(yo,{}),u.jsxs(co,{children:[u.jsxs(Le,{children:[u.jsx(ve,{heightpx:48,widthpx:48,color:"#FFC4F7"}),u.jsx(ke,{children:"80%"}),u.jsxs(Ue,{children:[u.jsx("h3",{children:"Carbohidrates"}),u.jsxs("div",{children:[u.jsxs("p",{children:["Goal: ",u.jsx("span",{children:"170"})]}),u.jsxs("p",{children:["left: ",u.jsx("span",{children:"34"})]})]})]})]}),u.jsxs(Le,{children:[u.jsx(ve,{heightpx:48,widthpx:48,color:"#FFF3B7"}),u.jsx(ke,{children:"80%"}),u.jsxs(Ue,{children:[u.jsx("h3",{children:"Protein"}),u.jsxs("div",{children:[u.jsxs("p",{children:["Goal: ",u.jsx("span",{children:"127.5"})]}),u.jsxs("p",{children:["left: ",u.jsx("span",{children:"8"})]})]})]})]}),u.jsxs(Le,{children:[u.jsx(ve,{heightpx:48,widthpx:48,color:"#B6B6B6"}),u.jsx(ke,{children:"80%"}),u.jsxs(Ue,{children:[u.jsx("h3",{children:"Fat"}),u.jsxs("div",{children:[u.jsxs("p",{children:["Goal: ",u.jsx("span",{children:"56"})]}),u.jsxs("p",{children:["left: ",u.jsx("span",{children:"11,2"})]})]})]})]})]})]})]})}const go=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,bo=E.div`
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
`,vo=E(On)`
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
`;function $t(e,t){return function(){return e.apply(t,arguments)}}const{toString:wo}=Object.prototype,{getPrototypeOf:nt}=Object,Ae=(e=>t=>{const n=wo.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$=e=>(e=e.toLowerCase(),t=>Ae(t)===e),Pe=e=>t=>typeof t===e,{isArray:oe}=Array,fe=Pe("undefined");function Oo(e){return e!==null&&!fe(e)&&e.constructor!==null&&!fe(e.constructor)&&D(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const qt=$("ArrayBuffer");function Eo(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&qt(e.buffer),t}const So=Pe("string"),D=Pe("function"),zt=Pe("number"),Ne=e=>e!==null&&typeof e=="object",Co=e=>e===!0||e===!1,we=e=>{if(Ae(e)!=="object")return!1;const t=nt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ro=$("Date"),_o=$("File"),To=$("Blob"),Ao=$("FileList"),Po=e=>Ne(e)&&D(e.pipe),No=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||D(e.append)&&((t=Ae(e))==="formdata"||t==="object"&&D(e.toString)&&e.toString()==="[object FormData]"))},jo=$("URLSearchParams"),Fo=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function he(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),oe(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(r=0;r<i;r++)a=s[r],t.call(null,e[a],a,e)}}function Vt(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Jt=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Kt=e=>!fe(e)&&e!==Jt;function Ke(){const{caseless:e}=Kt(this)&&this||{},t={},n=(r,o)=>{const s=e&&Vt(t,o)||o;we(t[s])&&we(r)?t[s]=Ke(t[s],r):we(r)?t[s]=Ke({},r):oe(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&he(arguments[r],n);return t}const Do=(e,t,n,{allOwnKeys:r}={})=>(he(t,(o,s)=>{n&&D(o)?e[s]=$t(o,n):e[s]=o},{allOwnKeys:r}),e),Mo=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lo=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ko=(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&nt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Uo=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Bo=e=>{if(!e)return null;if(oe(e))return e;let t=e.length;if(!zt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ho=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&nt(Uint8Array)),Io=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Wo=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},$o=$("HTMLFormElement"),qo=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),bt=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),zo=$("RegExp"),Gt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};he(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},Vo=e=>{Gt(e,(t,n)=>{if(D(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(D(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Jo=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return oe(e)?r(e):r(String(e).split(t)),n},Ko=()=>{},Go=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Be="abcdefghijklmnopqrstuvwxyz",vt="0123456789",Xt={DIGIT:vt,ALPHA:Be,ALPHA_DIGIT:Be+Be.toUpperCase()+vt},Xo=(e=16,t=Xt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Yo(e){return!!(e&&D(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Qo=e=>{const t=new Array(10),n=(r,o)=>{if(Ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=oe(r)?[]:{};return he(r,(i,a)=>{const h=n(i,o+1);!fe(h)&&(s[a]=h)}),t[o]=void 0,s}}return r};return n(e,0)},Zo=$("AsyncFunction"),es=e=>e&&(Ne(e)||D(e))&&D(e.then)&&D(e.catch),f={isArray:oe,isArrayBuffer:qt,isBuffer:Oo,isFormData:No,isArrayBufferView:Eo,isString:So,isNumber:zt,isBoolean:Co,isObject:Ne,isPlainObject:we,isUndefined:fe,isDate:Ro,isFile:_o,isBlob:To,isRegExp:zo,isFunction:D,isStream:Po,isURLSearchParams:jo,isTypedArray:Ho,isFileList:Ao,forEach:he,merge:Ke,extend:Do,trim:Fo,stripBOM:Mo,inherits:Lo,toFlatObject:ko,kindOf:Ae,kindOfTest:$,endsWith:Uo,toArray:Bo,forEachEntry:Io,matchAll:Wo,isHTMLForm:$o,hasOwnProperty:bt,hasOwnProp:bt,reduceDescriptors:Gt,freezeMethods:Vo,toObjectSet:Jo,toCamelCase:qo,noop:Ko,toFiniteNumber:Go,findKey:Vt,global:Jt,isContextDefined:Kt,ALPHABET:Xt,generateString:Xo,isSpecCompliantForm:Yo,toJSONObject:Qo,isAsyncFn:Zo,isThenable:es};function S(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}f.inherits(S,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:f.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Yt=S.prototype,Qt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qt[e]={value:e}});Object.defineProperties(S,Qt);Object.defineProperty(Yt,"isAxiosError",{value:!0});S.from=(e,t,n,r,o,s)=>{const i=Object.create(Yt);return f.toFlatObject(e,i,function(h){return h!==Error.prototype},a=>a!=="isAxiosError"),S.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const ts=null;function Ge(e){return f.isPlainObject(e)||f.isArray(e)}function Zt(e){return f.endsWith(e,"[]")?e.slice(0,-2):e}function wt(e,t,n){return e?e.concat(t).map(function(o,s){return o=Zt(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function ns(e){return f.isArray(e)&&!e.some(Ge)}const rs=f.toFlatObject(f,{},null,function(t){return/^is[A-Z]/.test(t)});function je(e,t,n){if(!f.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=f.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,C){return!f.isUndefined(C[y])});const r=n.metaTokens,o=n.visitor||d,s=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&f.isSpecCompliantForm(t);if(!f.isFunction(o))throw new TypeError("visitor must be a function");function p(m){if(m===null)return"";if(f.isDate(m))return m.toISOString();if(!h&&f.isBlob(m))throw new S("Blob is not supported. Use a Buffer instead.");return f.isArrayBuffer(m)||f.isTypedArray(m)?h&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,y,C){let R=m;if(m&&!C&&typeof m=="object"){if(f.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(f.isArray(m)&&ns(m)||(f.isFileList(m)||f.endsWith(y,"[]"))&&(R=f.toArray(m)))return y=Zt(y),R.forEach(function(M,se){!(f.isUndefined(M)||M===null)&&t.append(i===!0?wt([y],se,s):i===null?y:y+"[]",p(M))}),!1}return Ge(m)?!0:(t.append(wt(C,y,s),p(m)),!1)}const l=[],x=Object.assign(rs,{defaultVisitor:d,convertValue:p,isVisitable:Ge});function O(m,y){if(!f.isUndefined(m)){if(l.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));l.push(m),f.forEach(m,function(R,H){(!(f.isUndefined(R)||R===null)&&o.call(t,R,f.isString(H)?H.trim():H,y,x))===!0&&O(R,y?y.concat(H):[H])}),l.pop()}}if(!f.isObject(e))throw new TypeError("data must be an object");return O(e),t}function Ot(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function rt(e,t){this._pairs=[],e&&je(e,this,t)}const en=rt.prototype;en.append=function(t,n){this._pairs.push([t,n])};en.toString=function(t){const n=t?function(r){return t.call(this,r,Ot)}:Ot;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function os(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tn(e,t,n){if(!t)return e;const r=n&&n.encode||os,o=n&&n.serialize;let s;if(o?s=o(t,n):s=f.isURLSearchParams(t)?t.toString():new rt(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class ss{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){f.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Et=ss,nn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},is=typeof URLSearchParams<"u"?URLSearchParams:rt,as=typeof FormData<"u"?FormData:null,ls=typeof Blob<"u"?Blob:null,cs={isBrowser:!0,classes:{URLSearchParams:is,FormData:as,Blob:ls},protocols:["http","https","file","blob","url","data"]},rn=typeof window<"u"&&typeof document<"u",us=(e=>rn&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),fs=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ds=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rn,hasStandardBrowserEnv:us,hasStandardBrowserWebWorkerEnv:fs},Symbol.toStringTag,{value:"Module"})),W={...ds,...cs};function ps(e,t){return je(e,new W.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return W.isNode&&f.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function hs(e){return f.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ms(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function on(e){function t(n,r,o,s){let i=n[s++];const a=Number.isFinite(+i),h=s>=n.length;return i=!i&&f.isArray(o)?o.length:i,h?(f.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!a):((!o[i]||!f.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&f.isArray(o[i])&&(o[i]=ms(o[i])),!a)}if(f.isFormData(e)&&f.isFunction(e.entries)){const n={};return f.forEachEntry(e,(r,o)=>{t(hs(r),o,n,0)}),n}return null}function ys(e,t,n){if(f.isString(e))try{return(t||JSON.parse)(e),f.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ot={transitional:nn,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=f.isObject(t);if(s&&f.isHTMLForm(t)&&(t=new FormData(t)),f.isFormData(t))return o&&o?JSON.stringify(on(t)):t;if(f.isArrayBuffer(t)||f.isBuffer(t)||f.isStream(t)||f.isFile(t)||f.isBlob(t))return t;if(f.isArrayBufferView(t))return t.buffer;if(f.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ps(t,this.formSerializer).toString();if((a=f.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return je(a?{"files[]":t}:t,h&&new h,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),ys(t)):t}],transformResponse:[function(t){const n=this.transitional||ot.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&f.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?S.from(a,S.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:W.classes.FormData,Blob:W.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};f.forEach(["delete","get","head","post","put","patch"],e=>{ot.headers[e]={}});const st=ot,xs=f.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gs=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&xs[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},St=Symbol("internals");function ie(e){return e&&String(e).trim().toLowerCase()}function Oe(e){return e===!1||e==null?e:f.isArray(e)?e.map(Oe):String(e)}function bs(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vs=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function He(e,t,n,r,o){if(f.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!f.isString(t)){if(f.isString(r))return t.indexOf(r)!==-1;if(f.isRegExp(r))return r.test(t)}}function ws(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Os(e,t){const n=f.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class Fe{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(a,h,p){const d=ie(h);if(!d)throw new Error("header name must be a non-empty string");const l=f.findKey(o,d);(!l||o[l]===void 0||p===!0||p===void 0&&o[l]!==!1)&&(o[l||h]=Oe(a))}const i=(a,h)=>f.forEach(a,(p,d)=>s(p,d,h));return f.isPlainObject(t)||t instanceof this.constructor?i(t,n):f.isString(t)&&(t=t.trim())&&!vs(t)?i(gs(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=ie(t),t){const r=f.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return bs(o);if(f.isFunction(n))return n.call(this,o,r);if(f.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ie(t),t){const r=f.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||He(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=ie(i),i){const a=f.findKey(r,i);a&&(!n||He(r,r[a],a,n))&&(delete r[a],o=!0)}}return f.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||He(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return f.forEach(this,(o,s)=>{const i=f.findKey(r,s);if(i){n[i]=Oe(o),delete n[s];return}const a=t?ws(s):String(s).trim();a!==s&&delete n[s],n[a]=Oe(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return f.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&f.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[St]=this[St]={accessors:{}}).accessors,o=this.prototype;function s(i){const a=ie(i);r[a]||(Os(o,i),r[a]=!0)}return f.isArray(t)?t.forEach(s):s(t),this}}Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);f.reduceDescriptors(Fe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});f.freezeMethods(Fe);const q=Fe;function Ie(e,t){const n=this||st,r=t||n,o=q.from(r.headers);let s=r.data;return f.forEach(e,function(a){s=a.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function sn(e){return!!(e&&e.__CANCEL__)}function me(e,t,n){S.call(this,e??"canceled",S.ERR_CANCELED,t,n),this.name="CanceledError"}f.inherits(me,S,{__CANCEL__:!0});function Es(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new S("Request failed with status code "+n.status,[S.ERR_BAD_REQUEST,S.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ss=W.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];f.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),f.isString(r)&&i.push("path="+r),f.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cs(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Rs(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function an(e,t){return e&&!Cs(t)?Rs(e,t):t}const _s=W.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const a=f.isString(i)?o(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Ts(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function As(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),d=r[s];i||(i=p),n[o]=h,r[o]=p;let l=s,x=0;for(;l!==o;)x+=n[l++],l=l%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),p-i<t)return;const O=d&&p-d;return O?Math.round(x*1e3/O):void 0}}function Ct(e,t){let n=0;const r=As(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,h=r(a),p=s<=i;n=s;const d={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:h||void 0,estimated:h&&i&&p?(i-s)/h:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const Ps=typeof XMLHttpRequest<"u",Ns=Ps&&function(e){return new Promise(function(n,r){let o=e.data;const s=q.from(e.headers).normalize();let{responseType:i,withXSRFToken:a}=e,h;function p(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let d;if(f.isFormData(o)){if(W.hasStandardBrowserEnv||W.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[y,...C]=d?d.split(";").map(R=>R.trim()).filter(Boolean):[];s.setContentType([y||"multipart/form-data",...C].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",C=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+C))}const x=an(e.baseURL,e.url);l.open(e.method.toUpperCase(),tn(x,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function O(){if(!l)return;const y=q.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),R={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Es(function(M){n(M),p()},function(M){r(M),p()},R),l=null}if("onloadend"in l?l.onloadend=O:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(O)},l.onabort=function(){l&&(r(new S("Request aborted",S.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new S("Network Error",S.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||nn;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),r(new S(C,R.clarifyTimeoutError?S.ETIMEDOUT:S.ECONNABORTED,e,l)),l=null},W.hasStandardBrowserEnv&&(a&&f.isFunction(a)&&(a=a(e)),a||a!==!1&&_s(x))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&Ss.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&f.forEach(s.toJSON(),function(C,R){l.setRequestHeader(R,C)}),f.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Ct(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ct(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=y=>{l&&(r(!y||y.type?new me(null,e,l):y),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const m=Ts(x);if(m&&W.protocols.indexOf(m)===-1){r(new S("Unsupported protocol "+m+":",S.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Xe={http:ts,xhr:Ns};f.forEach(Xe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Rt=e=>`- ${e}`,js=e=>f.isFunction(e)||e===null||e===!1,ln={getAdapter:e=>{e=f.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!js(n)&&(r=Xe[(i=String(n)).toLowerCase()],r===void 0))throw new S(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([a,h])=>`adapter ${a} `+(h===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(Rt).join(`
`):" "+Rt(s[0]):"as no adapter specified";throw new S("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Xe};function We(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new me(null,e)}function _t(e){return We(e),e.headers=q.from(e.headers),e.data=Ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ln.getAdapter(e.adapter||st.adapter)(e).then(function(r){return We(e),r.data=Ie.call(e,e.transformResponse,r),r.headers=q.from(r.headers),r},function(r){return sn(r)||(We(e),r&&r.response&&(r.response.data=Ie.call(e,e.transformResponse,r.response),r.response.headers=q.from(r.response.headers))),Promise.reject(r)})}const Tt=e=>e instanceof q?e.toJSON():e;function te(e,t){t=t||{};const n={};function r(p,d,l){return f.isPlainObject(p)&&f.isPlainObject(d)?f.merge.call({caseless:l},p,d):f.isPlainObject(d)?f.merge({},d):f.isArray(d)?d.slice():d}function o(p,d,l){if(f.isUndefined(d)){if(!f.isUndefined(p))return r(void 0,p,l)}else return r(p,d,l)}function s(p,d){if(!f.isUndefined(d))return r(void 0,d)}function i(p,d){if(f.isUndefined(d)){if(!f.isUndefined(p))return r(void 0,p)}else return r(void 0,d)}function a(p,d,l){if(l in t)return r(p,d);if(l in e)return r(void 0,p)}const h={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(p,d)=>o(Tt(p),Tt(d),!0)};return f.forEach(Object.keys(Object.assign({},e,t)),function(d){const l=h[d]||o,x=l(e[d],t[d],d);f.isUndefined(x)&&l!==a||(n[d]=x)}),n}const cn="1.6.2",it={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{it[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const At={};it.transitional=function(t,n,r){function o(s,i){return"[Axios v"+cn+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,a)=>{if(t===!1)throw new S(o(i," has been removed"+(n?" in "+n:"")),S.ERR_DEPRECATED);return n&&!At[i]&&(At[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,a):!0}};function Fs(e,t,n){if(typeof e!="object")throw new S("options must be an object",S.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const a=e[s],h=a===void 0||i(a,s,e);if(h!==!0)throw new S("option "+s+" must be "+h,S.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new S("Unknown option "+s,S.ERR_BAD_OPTION)}}const Ye={assertOptions:Fs,validators:it},z=Ye.validators;class _e{constructor(t){this.defaults=t,this.interceptors={request:new Et,response:new Et}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=te(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&Ye.assertOptions(r,{silentJSONParsing:z.transitional(z.boolean),forcedJSONParsing:z.transitional(z.boolean),clarifyTimeoutError:z.transitional(z.boolean)},!1),o!=null&&(f.isFunction(o)?n.paramsSerializer={serialize:o}:Ye.assertOptions(o,{encode:z.function,serialize:z.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&f.merge(s.common,s[n.method]);s&&f.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=q.concat(i,s);const a=[];let h=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(h=h&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const p=[];this.interceptors.response.forEach(function(y){p.push(y.fulfilled,y.rejected)});let d,l=0,x;if(!h){const m=[_t.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,p),x=m.length,d=Promise.resolve(n);l<x;)d=d.then(m[l++],m[l++]);return d}x=a.length;let O=n;for(l=0;l<x;){const m=a[l++],y=a[l++];try{O=m(O)}catch(C){y.call(this,C);break}}try{d=_t.call(this,O)}catch(m){return Promise.reject(m)}for(l=0,x=p.length;l<x;)d=d.then(p[l++],p[l++]);return d}getUri(t){t=te(this.defaults,t);const n=an(t.baseURL,t.url);return tn(n,t.params,t.paramsSerializer)}}f.forEach(["delete","get","head","options"],function(t){_e.prototype[t]=function(n,r){return this.request(te(r||{},{method:t,url:n,data:(r||{}).data}))}});f.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,a){return this.request(te(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}_e.prototype[t]=n(),_e.prototype[t+"Form"]=n(!0)});const Ee=_e;class at{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(a=>{r.subscribe(a),s=a}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,a){r.reason||(r.reason=new me(s,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new at(function(o){t=o}),cancel:t}}}const Ds=at;function Ms(e){return function(n){return e.apply(null,n)}}function Ls(e){return f.isObject(e)&&e.isAxiosError===!0}const Qe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qe).forEach(([e,t])=>{Qe[t]=e});const ks=Qe;function un(e){const t=new Ee(e),n=$t(Ee.prototype.request,t);return f.extend(n,Ee.prototype,t,{allOwnKeys:!0}),f.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return un(te(e,o))},n}const T=un(st);T.Axios=Ee;T.CanceledError=me;T.CancelToken=Ds;T.isCancel=sn;T.VERSION=cn;T.toFormData=je;T.AxiosError=S;T.Cancel=T.CanceledError;T.all=function(t){return Promise.all(t)};T.spread=Ms;T.isAxiosError=Ls;T.mergeConfig=te;T.AxiosHeaders=q;T.formToJSON=e=>on(f.isHTMLForm(e)?new FormData(e):e);T.getAdapter=ln.getAdapter;T.HttpStatusCode=ks;T.default=T;const Ze=T;Ze.defaults.baseURL="https://healthy-hub-rest-api.onrender.com/api";function Us(){const[e,t]=I.useState({}),[n,r]=I.useState("");return I.useEffect(()=>{async function o(){await Ze.post("/auth/signin",{email:"john.doe@example.com",password:"randompassword123"}).then(s=>{r(s.data.user.token)})}o()},[n]),I.useEffect(()=>{async function o(){await Ze.get("/user/current",{headers:{Authorization:`Bearer ${n}`}}).then(s=>{console.log(s.data),t(s.data)})}n!==""&&o()},[n]),u.jsxs("div",{children:[u.jsxs(bo,{children:[u.jsx("h2",{children:"Today"}),u.jsxs(vo,{to:"/dashboard",children:["On the way to the goal",u.jsx("svg",{children:u.jsx("use",{href:`${Z}#icon-arrow-right`})})]})]}),u.jsxs(go,{children:[u.jsx(An,{calories:e.dailyCalories,water:e.dailyWater}),u.jsx(so,{waterobjective:e.dailyWater,watercurrent:e.consumedWaterByDay}),u.jsx(xo,{stats:e.consumedMealsByDay})]})]})}function Bs(){return u.jsx(u.Fragment,{children:u.jsx("p",{children:"Diary"})})}const Hs=E.section`
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
`,Is=Hs;function Ws(){const e=[1,2,3,4],t={carbohydrates:14,protein:.3,fat:.2,name:"Apples",amount:"100 g",img:"https://ftp.goit.study/img/you_health/Apples.png",calories:52},{name:n,amount:r,img:o,calories:s}=t;return u.jsxs(Is,{children:[u.jsx("h2",{children:"Recommended Food"}),u.jsxs("div",{className:"wrapper",children:[u.jsx("ul",{children:e.map(i=>u.jsx("li",{children:u.jsxs("div",{className:"description",children:[u.jsx("div",{className:"small_img_div",children:u.jsx("img",{src:o,alt:"",width:46,height:46})}),u.jsxs("section",{children:[u.jsx("h4",{children:n}),u.jsxs("p",{children:[r,u.jsxs("span",{children:[s," calories"]})]})]})]})},i))}),u.jsxs("a",{className:"href",href:"././Recommended-food",children:["See more",u.jsx("svg",{className:"svg",children:u.jsx("use",{href:`${Z}#icon-arrow-right`})})]})]})]})}function Vs(){return u.jsxs(u.Fragment,{children:[u.jsx("p",{children:"MainPage"}),u.jsx(Us,{}),u.jsx(Bs,{}),u.jsx(Ws,{})]})}export{Vs as default};
