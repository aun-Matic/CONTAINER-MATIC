(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var rm={exports:{}},Cl={},sm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),Vd=Symbol.iterator;function f0(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},am=Object.assign,lm={};function As(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||om}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function um(){}um.prototype=As.prototype;function Pf(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||om}var bf=Pf.prototype=new um;bf.constructor=Pf;am(bf,As.prototype);bf.isPureReactComponent=!0;var Gd=Array.isArray,cm=Object.prototype.hasOwnProperty,Lf={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function dm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cm.call(e,i)&&!fm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ao,type:t,key:s,ref:o,props:r,_owner:Lf.current}}function d0(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function h0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wd=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h0(""+t.key):e.toString(36)}function Pa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case t0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ql(o,0):i,Gd(r)?(n="",t!=null&&(n=t.replace(Wd,"$&/")+"/"),Pa(r,e,n,"",function(u){return u})):r!=null&&(Df(r)&&(r=d0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ql(s,a);o+=Pa(s,e,n,l,r)}else if(l=f0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ql(s,a++),o+=Pa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return Pa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},ba={transition:null},m0={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:ba,ReactCurrentOwner:Lf};function hm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!Df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=As;Xe.Fragment=n0;Xe.Profiler=r0;Xe.PureComponent=Pf;Xe.StrictMode=i0;Xe.Suspense=l0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;Xe.act=hm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=am({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cm.call(e,l)&&!fm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ao,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:o0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s0,_context:t},t.Consumer=t};Xe.createElement=dm;Xe.createFactory=function(t){var e=dm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:a0,render:t}};Xe.isValidElement=Df;Xe.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};Xe.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=ba.transition;ba.transition={};try{t()}finally{ba.transition=e}};Xe.unstable_act=hm;Xe.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Xe.useContext=function(t){return Wt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Xe.useId=function(){return Wt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Wt.current.useRef(t)};Xe.useState=function(t){return Wt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Wt.current.useTransition()};Xe.version="18.3.1";sm.exports=Xe;var Te=sm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=Te,_0=Symbol.for("react.element"),v0=Symbol.for("react.fragment"),x0=Object.prototype.hasOwnProperty,y0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S0={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)x0.call(e,i)&&!S0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_0,type:t,key:s,ref:o,props:r,_owner:y0.current}}Cl.Fragment=v0;Cl.jsx=pm;Cl.jsxs=pm;rm.exports=Cl;var H=rm.exports,mm={exports:{}},fn={},gm={exports:{}},_m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,V){var Q=D.length;D.push(V);e:for(;0<Q;){var ne=Q-1>>>1,ge=D[ne];if(0<r(ge,V))D[ne]=V,D[Q]=ge,Q=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var V=D[0],Q=D.pop();if(Q!==V){D[0]=Q;e:for(var ne=0,ge=D.length,be=ge>>>1;ne<be;){var J=2*(ne+1)-1,re=D[J],de=J+1,he=D[de];if(0>r(re,Q))de<ge&&0>r(he,re)?(D[ne]=he,D[de]=Q,ne=de):(D[ne]=re,D[J]=Q,ne=J);else if(de<ge&&0>r(he,Q))D[ne]=he,D[de]=Q,ne=de;else break e}}return V}function r(D,V){var Q=D.sortIndex-V.sortIndex;return Q!==0?Q:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=D)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function x(D){if(y=!1,g(D),!v)if(n(l)!==null)v=!0,j(U);else{var V=n(u);V!==null&&W(x,V.startTime-D)}}function U(D,V){v=!1,y&&(y=!1,c(N),N=-1),p=!0;var Q=f;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||D&&!b());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var ge=ne(h.expirationTime<=V);V=t.unstable_now(),typeof ge=="function"?h.callback=ge:h===n(l)&&i(l),g(V)}else i(l);h=n(l)}if(h!==null)var be=!0;else{var J=n(u);J!==null&&W(x,J.startTime-V),be=!1}return be}finally{h=null,f=Q,p=!1}}var P=!1,R=null,N=-1,w=5,S=-1;function b(){return!(t.unstable_now()-S<w)}function A(){if(R!==null){var D=t.unstable_now();S=D;var V=!0;try{V=R(!0,D)}finally{V?B():(P=!1,R=null)}}else P=!1}var B;if(typeof _=="function")B=function(){_(A)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,G=q.port2;q.port1.onmessage=A,B=function(){G.postMessage(null)}}else B=function(){m(A,0)};function j(D){R=D,P||(P=!0,B())}function W(D,V){N=m(function(){D(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(U))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var Q=f;f=V;try{return D()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=f;f=D;try{return V()}finally{f=Q}},t.unstable_scheduleCallback=function(D,V,Q){var ne=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ne+Q:ne):Q=ne,D){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Q+ge,D={id:d++,callback:V,priorityLevel:D,startTime:Q,expirationTime:ge,sortIndex:-1},Q>ne?(D.sortIndex=Q,e(u,D),n(l)===null&&D===n(u)&&(y?(c(N),N=-1):y=!0,W(x,Q-ne))):(D.sortIndex=ge,e(l,D),v||p||(v=!0,j(U))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var V=f;return function(){var Q=f;f=V;try{return D.apply(this,arguments)}finally{f=Q}}}})(_m);gm.exports=_m;var M0=gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=Te,cn=M0;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,ao={};function wr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(ao[t]=e,t=0;t<e.length;t++)vm.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,w0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xd={},jd={};function T0(t){return tc.call(jd,t)?!0:tc.call(Xd,t)?!1:w0.test(t)?jd[t]=!0:(Xd[t]=!0,!1)}function A0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C0(t,e,n,i){if(e===null||typeof e>"u"||A0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,Uf);Ut[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,Uf);Ut[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,Uf);Ut[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C0(e,n,r,i)&&(n=null),i||r===null?T0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mi=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),xm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),kf=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Yd&&t[Yd]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Jl;function js(t){if(Jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jl=e&&e[1]||""}return`
`+Jl+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function R0(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case jr:return"Portal";case nc:return"Profiler";case Ff:return"StrictMode";case ic:return"Suspense";case rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ym:return(t.displayName||"Context")+".Consumer";case xm:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kf:return e=t.displayName||null,e!==null?e:sc(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return sc(t(e))}catch{}}return null}function P0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b0(t){var e=Mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=b0(t))}function Em(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oc(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $d(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wm(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function ac(t,e){wm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&lc(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lc(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ys(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function Tm(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,Cm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){L0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function Rm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function Pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Rm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var D0=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(t,e){if(e){if(D0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function Bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pc=null,os=null,as=null;function Qd(t){if(t=Po(t)){if(typeof pc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Dl(e),pc(t.stateNode,t.type,e))}}function bm(t){os?as?as.push(t):as=[t]:os=t}function Lm(){if(os){var t=os,e=as;if(as=os=null,Qd(t),e)for(t=0;t<e.length;t++)Qd(e[t])}}function Dm(t,e){return t(e)}function Im(){}var nu=!1;function Um(t,e,n){if(nu)return t(e,n);nu=!0;try{return Dm(t,e,n)}finally{nu=!1,(os!==null||as!==null)&&(Im(),Lm())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var i=Dl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var mc=!1;if(ci)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){mc=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{mc=!1}function I0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Qs=!1,qa=null,Ka=!1,gc=null,U0={onError:function(t){Qs=!0,qa=t}};function N0(t,e,n,i,r,s,o,a,l){Qs=!1,qa=null,I0.apply(U0,arguments)}function F0(t,e,n,i,r,s,o,a,l){if(N0.apply(this,arguments),Qs){if(Qs){var u=qa;Qs=!1,qa=null}else throw Error(se(198));Ka||(Ka=!0,gc=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jd(t){if(Tr(t)!==t)throw Error(se(188))}function O0(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jd(r),t;if(s===i)return Jd(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Fm(t){return t=O0(t),t!==null?Om(t):null}function Om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Om(t);if(e!==null)return e;t=t.sibling}return null}var km=cn.unstable_scheduleCallback,eh=cn.unstable_cancelCallback,k0=cn.unstable_shouldYield,B0=cn.unstable_requestPaint,gt=cn.unstable_now,z0=cn.unstable_getCurrentPriorityLevel,zf=cn.unstable_ImmediatePriority,Bm=cn.unstable_UserBlockingPriority,Za=cn.unstable_NormalPriority,H0=cn.unstable_LowPriority,zm=cn.unstable_IdlePriority,Rl=null,jn=null;function V0(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:X0,G0=Math.log,W0=Math.LN2;function X0(t){return t>>>=0,t===0?32:31-(G0(t)/W0|0)|0}var Ho=64,Vo=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=$s(a):(s&=o,s!==0&&(i=$s(s)))}else o=n&~r,o!==0?i=$s(o):s!==0&&(i=$s(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function j0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=j0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hm(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function $0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Vm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gm,Vf,Wm,Xm,jm,vc=!1,Go=[],Di=null,Ii=null,Ui=null,co=new Map,fo=new Map,Ai=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Is(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&Vf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function K0(t,e,n,i,r){switch(e){case"focusin":return Di=Is(Di,t,e,n,i,r),!0;case"dragenter":return Ii=Is(Ii,t,e,n,i,r),!0;case"mouseover":return Ui=Is(Ui,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return co.set(s,Is(co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,Is(fo.get(s)||null,t,e,n,i,r)),!0}return!1}function Ym(t){var e=ur(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Nm(n),e!==null){t.blockedOn=e,jm(t.priority,function(){Wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function La(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hc=i,n.target.dispatchEvent(i),hc=null}else return e=Po(n),e!==null&&Vf(e),t.blockedOn=n,!1;e.shift()}return!0}function nh(t,e,n){La(t)&&n.delete(e)}function Z0(){vc=!1,Di!==null&&La(Di)&&(Di=null),Ii!==null&&La(Ii)&&(Ii=null),Ui!==null&&La(Ui)&&(Ui=null),co.forEach(nh),fo.forEach(nh)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,vc||(vc=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,Z0)))}function ho(t){function e(r){return Us(r,t)}if(0<Go.length){Us(Go[0],t);for(var n=1;n<Go.length;n++){var i=Go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Us(Di,t),Ii!==null&&Us(Ii,t),Ui!==null&&Us(Ui,t),co.forEach(e),fo.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&Ai.shift()}var ls=mi.ReactCurrentBatchConfig,Ja=!0;function Q0(t,e,n,i){var r=tt,s=ls.transition;ls.transition=null;try{tt=1,Gf(t,e,n,i)}finally{tt=r,ls.transition=s}}function J0(t,e,n,i){var r=tt,s=ls.transition;ls.transition=null;try{tt=4,Gf(t,e,n,i)}finally{tt=r,ls.transition=s}}function Gf(t,e,n,i){if(Ja){var r=xc(t,e,n,i);if(r===null)hu(t,e,i,el,n),th(t,i);else if(K0(r,t,e,n,i))i.stopPropagation();else if(th(t,i),e&4&&-1<q0.indexOf(t)){for(;r!==null;){var s=Po(r);if(s!==null&&Gm(s),s=xc(t,e,n,i),s===null&&hu(t,e,i,el,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hu(t,e,i,null,n)}}var el=null;function xc(t,e,n,i){if(el=null,t=Bf(i),t=ur(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function $m(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z0()){case zf:return 1;case Bm:return 4;case Za:case H0:return 16;case zm:return 536870912;default:return 16}default:return 16}}var Pi=null,Wf=null,Da=null;function qm(){if(Da)return Da;var t,e=Wf,n=e.length,i,r="value"in Pi?Pi.value:Pi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Da=r.slice(t,1<i?1-i:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function ih(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:ih,this.isPropagationStopped=ih,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=dn(Cs),Ro=ft({},Cs,{view:0,detail:0}),ev=dn(Ro),ru,su,Ns,Pl=ft({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(ru=t.screenX-Ns.screenX,su=t.screenY-Ns.screenY):su=ru=0,Ns=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),rh=dn(Pl),tv=ft({},Pl,{dataTransfer:0}),nv=dn(tv),iv=ft({},Ro,{relatedTarget:0}),ou=dn(iv),rv=ft({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=dn(rv),ov=ft({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),av=dn(ov),lv=ft({},Cs,{data:0}),sh=dn(lv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fv[t])?!!e[t]:!1}function jf(){return dv}var hv=ft({},Ro,{key:function(t){if(t.key){var e=uv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pv=dn(hv),mv=ft({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=dn(mv),gv=ft({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),_v=dn(gv),vv=ft({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=dn(vv),yv=ft({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=dn(yv),Mv=[9,13,27,32],Yf=ci&&"CompositionEvent"in window,Js=null;ci&&"documentMode"in document&&(Js=document.documentMode);var Ev=ci&&"TextEvent"in window&&!Js,Km=ci&&(!Yf||Js&&8<Js&&11>=Js),ah=" ",lh=!1;function Zm(t,e){switch(t){case"keyup":return Mv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function wv(t,e){switch(t){case"compositionend":return Qm(e);case"keypress":return e.which!==32?null:(lh=!0,ah);case"textInput":return t=e.data,t===ah&&lh?null:t;default:return null}}function Tv(t,e){if($r)return t==="compositionend"||!Yf&&Zm(t,e)?(t=qm(),Da=Wf=Pi=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Km&&e.locale!=="ko"?null:e.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Av[t.type]:e==="textarea"}function Jm(t,e,n,i){bm(i),e=tl(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var eo=null,po=null;function Cv(t){cg(t,0)}function bl(t){var e=Zr(t);if(Em(e))return t}function Rv(t,e){if(t==="change")return e}var eg=!1;if(ci){var au;if(ci){var lu="oninput"in document;if(!lu){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),lu=typeof ch.oninput=="function"}au=lu}else au=!1;eg=au&&(!document.documentMode||9<document.documentMode)}function fh(){eo&&(eo.detachEvent("onpropertychange",tg),po=eo=null)}function tg(t){if(t.propertyName==="value"&&bl(po)){var e=[];Jm(e,po,t,Bf(t)),Um(Cv,e)}}function Pv(t,e,n){t==="focusin"?(fh(),eo=e,po=n,eo.attachEvent("onpropertychange",tg)):t==="focusout"&&fh()}function bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(po)}function Lv(t,e){if(t==="click")return bl(e)}function Dv(t,e){if(t==="input"||t==="change")return bl(e)}function Iv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:Iv;function mo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tc.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hh(t,e){var n=dh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dh(n)}}function ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ig(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Uv(t){var e=ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(i!==null&&$f(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hh(n,s);var o=hh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Nv=ci&&"documentMode"in document&&11>=document.documentMode,qr=null,yc=null,to=null,Sc=!1;function ph(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||qr==null||qr!==$a(i)||(i=qr,"selectionStart"in i&&$f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),to&&mo(to,i)||(to=i,i=tl(yc,"onSelect"),0<i.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},uu={},rg={};ci&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Ll(t){if(uu[t])return uu[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rg)return uu[t]=e[n];return t}var sg=Ll("animationend"),og=Ll("animationiteration"),ag=Ll("animationstart"),lg=Ll("transitionend"),ug=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(t,e){ug.set(t,e),wr(e,[t])}for(var cu=0;cu<mh.length;cu++){var fu=mh[cu],Fv=fu.toLowerCase(),Ov=fu[0].toUpperCase()+fu.slice(1);ji(Fv,"on"+Ov)}ji(sg,"onAnimationEnd");ji(og,"onAnimationIteration");ji(ag,"onAnimationStart");ji("dblclick","onDoubleClick");ji("focusin","onFocus");ji("focusout","onBlur");ji(lg,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function gh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,F0(i,e,void 0,t),t.currentTarget=null}function cg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gh(r,a,u),s=l}}}if(Ka)throw t=gc,Ka=!1,gc=null,t}function rt(t,e){var n=e[Ac];n===void 0&&(n=e[Ac]=new Set);var i=t+"__bubble";n.has(i)||(fg(e,t,2,!1),n.add(i))}function du(t,e,n){var i=0;e&&(i|=4),fg(n,t,i,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[jo]){t[jo]=!0,vm.forEach(function(n){n!=="selectionchange"&&(kv.has(n)||du(n,!1,t),du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,du("selectionchange",!1,e))}}function fg(t,e,n,i){switch($m(e)){case 1:var r=Q0;break;case 4:r=J0;break;default:r=Gf}n=r.bind(null,e,n,t),r=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Um(function(){var u=s,d=Bf(n),h=[];e:{var f=ug.get(t);if(f!==void 0){var p=Xf,v=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":p=pv;break;case"focusin":v="focus",p=ou;break;case"focusout":v="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_v;break;case sg:case og:case ag:p=sv;break;case lg:p=xv;break;case"scroll":p=ev;break;case"wheel":p=Sv;break;case"copy":case"cut":case"paste":p=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=oh}var y=(e&4)!==0,m=!y&&t==="scroll",c=y?f!==null?f+"Capture":null:f;y=[];for(var _=u,g;_!==null;){g=_;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,c!==null&&(x=uo(_,c),x!=null&&y.push(_o(_,x,g)))),m)break;_=_.return}0<y.length&&(f=new p(f,v,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==hc&&(v=n.relatedTarget||n.fromElement)&&(ur(v)||v[fi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?ur(v):null,v!==null&&(m=Tr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=rh,x="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=oh,x="onPointerLeave",c="onPointerEnter",_="pointer"),m=p==null?f:Zr(p),g=v==null?f:Zr(v),f=new y(x,_+"leave",p,n,d),f.target=m,f.relatedTarget=g,x=null,ur(d)===u&&(y=new y(c,_+"enter",v,n,d),y.target=g,y.relatedTarget=m,x=y),m=x,p&&v)t:{for(y=p,c=v,_=0,g=y;g;g=Rr(g))_++;for(g=0,x=c;x;x=Rr(x))g++;for(;0<_-g;)y=Rr(y),_--;for(;0<g-_;)c=Rr(c),g--;for(;_--;){if(y===c||c!==null&&y===c.alternate)break t;y=Rr(y),c=Rr(c)}y=null}else y=null;p!==null&&_h(h,f,p,y,!1),v!==null&&m!==null&&_h(h,m,v,y,!0)}}e:{if(f=u?Zr(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var U=Rv;else if(uh(f))if(eg)U=Dv;else{U=bv;var P=Pv}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(U=Lv);if(U&&(U=U(t,u))){Jm(h,U,n,d);break e}P&&P(t,f,u),t==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&lc(f,"number",f.value)}switch(P=u?Zr(u):window,t){case"focusin":(uh(P)||P.contentEditable==="true")&&(qr=P,yc=u,to=null);break;case"focusout":to=yc=qr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,ph(h,n,d);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":ph(h,n,d)}var R;if(Yf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $r?Zm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Km&&n.locale!=="ko"&&($r||N!=="onCompositionStart"?N==="onCompositionEnd"&&$r&&(R=qm()):(Pi=d,Wf="value"in Pi?Pi.value:Pi.textContent,$r=!0)),P=tl(u,N),0<P.length&&(N=new sh(N,t,null,n,d),h.push({event:N,listeners:P}),R?N.data=R:(R=Qm(n),R!==null&&(N.data=R)))),(R=Ev?wv(t,n):Tv(t,n))&&(u=tl(u,"onBeforeInput"),0<u.length&&(d=new sh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=R))}cg(h,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=uo(t,n),s!=null&&i.unshift(_o(t,s,r)),s=uo(t,e),s!=null&&i.push(_o(t,s,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _h(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=uo(n,s),l!=null&&o.unshift(_o(n,l,a))):r||(l=uo(n,s),l!=null&&o.push(_o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Bv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function vh(t){return(typeof t=="string"?t:""+t).replace(Bv,`
`).replace(zv,"")}function Yo(t,e,n){if(e=vh(e),vh(t)!==e&&n)throw Error(se(425))}function nl(){}var Mc=null,Ec=null;function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tc=typeof setTimeout=="function"?setTimeout:void 0,Hv=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(Gv)}:Tc;function Gv(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Rs,vo="__reactProps$"+Rs,fi="__reactContainer$"+Rs,Ac="__reactEvents$"+Rs,Wv="__reactListeners$"+Rs,Xv="__reactHandles$"+Rs;function ur(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yh(t);t!==null;){if(n=t[Xn])return n;t=yh(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[Xn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Dl(t){return t[vo]||null}var Cc=[],Qr=-1;function Yi(t){return{current:t}}function ot(t){0>Qr||(t.current=Cc[Qr],Cc[Qr]=null,Qr--)}function it(t,e){Qr++,Cc[Qr]=t.current,t.current=e}var Gi={},zt=Yi(Gi),Zt=Yi(!1),gr=Gi;function ms(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function il(){ot(Zt),ot(zt)}function Sh(t,e,n){if(zt.current!==Gi)throw Error(se(168));it(zt,e),it(Zt,n)}function dg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,P0(t)||"Unknown",r));return ft({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,gr=zt.current,it(zt,t),it(Zt,Zt.current),!0}function Mh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=dg(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,ot(Zt),ot(zt),it(zt,t)):ot(Zt),it(Zt,n)}var ri=null,Il=!1,mu=!1;function hg(t){ri===null?ri=[t]:ri.push(t)}function jv(t){Il=!0,hg(t)}function $i(){if(!mu&&ri!==null){mu=!0;var t=0,e=tt;try{var n=ri;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,Il=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),km(zf,$i),r}finally{tt=e,mu=!1}}return null}var Jr=[],es=0,sl=null,ol=0,mn=[],gn=0,_r=null,si=1,oi="";function ir(t,e){Jr[es++]=ol,Jr[es++]=sl,sl=t,ol=e}function pg(t,e,n){mn[gn++]=si,mn[gn++]=oi,mn[gn++]=_r,_r=t;var i=si;t=oi;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-Fn(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function qf(t){t.return!==null&&(ir(t,1),pg(t,1,0))}function Kf(t){for(;t===sl;)sl=Jr[--es],Jr[es]=null,ol=Jr[--es],Jr[es]=null;for(;t===_r;)_r=mn[--gn],mn[gn]=null,oi=mn[--gn],mn[gn]=null,si=mn[--gn],mn[gn]=null}var un=null,ln=null,at=!1,Ln=null;function mg(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,ln=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,ln=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(at){var e=ln;if(e){var n=e;if(!Eh(t,e)){if(Rc(t))throw Error(se(418));e=Ni(n.nextSibling);var i=un;e&&Eh(t,e)?mg(i,n):(t.flags=t.flags&-4097|2,at=!1,un=t)}}else{if(Rc(t))throw Error(se(418));t.flags=t.flags&-4097|2,at=!1,un=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function $o(t){if(t!==un)return!1;if(!at)return wh(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wc(t.type,t.memoizedProps)),e&&(e=ln)){if(Rc(t))throw gg(),Error(se(418));for(;e;)mg(t,e),e=Ni(e.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=un?Ni(t.stateNode.nextSibling):null;return!0}function gg(){for(var t=ln;t;)t=Ni(t.nextSibling)}function gs(){ln=un=null,at=!1}function Zf(t){Ln===null?Ln=[t]:Ln.push(t)}var Yv=mi.ReactCurrentBatchConfig;function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Th(t){var e=t._init;return e(t._payload)}function _g(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Bi(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,x){return _===null||_.tag!==6?(_=Mu(g,c.mode,x),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,x){var U=g.type;return U===Yr?d(c,_,g.props.children,x,g.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===wi&&Th(U)===_.type)?(x=r(_,g.props),x.ref=Fs(c,_,g),x.return=c,x):(x=za(g.type,g.key,g.props,null,c.mode,x),x.ref=Fs(c,_,g),x.return=c,x)}function u(c,_,g,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Eu(g,c.mode,x),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function d(c,_,g,x,U){return _===null||_.tag!==7?(_=mr(g,c.mode,x,U),_.return=c,_):(_=r(_,g),_.return=c,_)}function h(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Mu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:return g=za(_.type,_.key,_.props,null,c.mode,g),g.ref=Fs(c,null,_),g.return=c,g;case jr:return _=Eu(_,c.mode,g),_.return=c,_;case wi:var x=_._init;return h(c,x(_._payload),g)}if(Ys(_)||Ls(_))return _=mr(_,c.mode,g,null),_.return=c,_;qo(c,_)}return null}function f(c,_,g,x){var U=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return U!==null?null:a(c,_,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return g.key===U?l(c,_,g,x):null;case jr:return g.key===U?u(c,_,g,x):null;case wi:return U=g._init,f(c,_,U(g._payload),x)}if(Ys(g)||Ls(g))return U!==null?null:d(c,_,g,x,null);qo(c,g)}return null}function p(c,_,g,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(g)||null,a(_,c,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ko:return c=c.get(x.key===null?g:x.key)||null,l(_,c,x,U);case jr:return c=c.get(x.key===null?g:x.key)||null,u(_,c,x,U);case wi:var P=x._init;return p(c,_,g,P(x._payload),U)}if(Ys(x)||Ls(x))return c=c.get(g)||null,d(_,c,x,U,null);qo(_,x)}return null}function v(c,_,g,x){for(var U=null,P=null,R=_,N=_=0,w=null;R!==null&&N<g.length;N++){R.index>N?(w=R,R=null):w=R.sibling;var S=f(c,R,g[N],x);if(S===null){R===null&&(R=w);break}t&&R&&S.alternate===null&&e(c,R),_=s(S,_,N),P===null?U=S:P.sibling=S,P=S,R=w}if(N===g.length)return n(c,R),at&&ir(c,N),U;if(R===null){for(;N<g.length;N++)R=h(c,g[N],x),R!==null&&(_=s(R,_,N),P===null?U=R:P.sibling=R,P=R);return at&&ir(c,N),U}for(R=i(c,R);N<g.length;N++)w=p(R,c,N,g[N],x),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?N:w.key),_=s(w,_,N),P===null?U=w:P.sibling=w,P=w);return t&&R.forEach(function(b){return e(c,b)}),at&&ir(c,N),U}function y(c,_,g,x){var U=Ls(g);if(typeof U!="function")throw Error(se(150));if(g=U.call(g),g==null)throw Error(se(151));for(var P=U=null,R=_,N=_=0,w=null,S=g.next();R!==null&&!S.done;N++,S=g.next()){R.index>N?(w=R,R=null):w=R.sibling;var b=f(c,R,S.value,x);if(b===null){R===null&&(R=w);break}t&&R&&b.alternate===null&&e(c,R),_=s(b,_,N),P===null?U=b:P.sibling=b,P=b,R=w}if(S.done)return n(c,R),at&&ir(c,N),U;if(R===null){for(;!S.done;N++,S=g.next())S=h(c,S.value,x),S!==null&&(_=s(S,_,N),P===null?U=S:P.sibling=S,P=S);return at&&ir(c,N),U}for(R=i(c,R);!S.done;N++,S=g.next())S=p(R,c,N,S.value,x),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?N:S.key),_=s(S,_,N),P===null?U=S:P.sibling=S,P=S);return t&&R.forEach(function(A){return e(c,A)}),at&&ir(c,N),U}function m(c,_,g,x){if(typeof g=="object"&&g!==null&&g.type===Yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:e:{for(var U=g.key,P=_;P!==null;){if(P.key===U){if(U=g.type,U===Yr){if(P.tag===7){n(c,P.sibling),_=r(P,g.props.children),_.return=c,c=_;break e}}else if(P.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===wi&&Th(U)===P.type){n(c,P.sibling),_=r(P,g.props),_.ref=Fs(c,P,g),_.return=c,c=_;break e}n(c,P);break}else e(c,P);P=P.sibling}g.type===Yr?(_=mr(g.props.children,c.mode,x,g.key),_.return=c,c=_):(x=za(g.type,g.key,g.props,null,c.mode,x),x.ref=Fs(c,_,g),x.return=c,c=x)}return o(c);case jr:e:{for(P=g.key;_!==null;){if(_.key===P)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=Eu(g,c.mode,x),_.return=c,c=_}return o(c);case wi:return P=g._init,m(c,_,P(g._payload),x)}if(Ys(g))return v(c,_,g,x);if(Ls(g))return y(c,_,g,x);qo(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=Mu(g,c.mode,x),_.return=c,c=_),o(c)):n(c,_)}return m}var _s=_g(!0),vg=_g(!1),al=Yi(null),ll=null,ts=null,Qf=null;function Jf(){Qf=ts=ll=null}function ed(t){var e=al.current;ot(al),t._currentValue=e}function bc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){ll=t,Qf=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function Mn(t){var e=t._currentValue;if(Qf!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(ll===null)throw Error(se(308));ts=t,ll.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var cr=null;function td(t){cr===null?cr=[t]:cr.push(t)}function xg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,td(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,td(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function Ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hf(t,n)}}function Ah(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=ft({},h,f);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xr|=o,t.lanes=o,t.memoizedState=h}}function Ch(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var bo={},Yn=Yi(bo),xo=Yi(bo),yo=Yi(bo);function fr(t){if(t===bo)throw Error(se(174));return t}function id(t,e){switch(it(yo,e),it(xo,t),it(Yn,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cc(e,t)}ot(Yn),it(Yn,e)}function vs(){ot(Yn),ot(xo),ot(yo)}function Sg(t){fr(yo.current);var e=fr(Yn.current),n=cc(e,t.type);e!==n&&(it(xo,t),it(Yn,n))}function rd(t){xo.current===t&&(ot(Yn),ot(xo))}var ut=Yi(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function sd(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var Na=mi.ReactCurrentDispatcher,_u=mi.ReactCurrentBatchConfig,vr=0,ct=null,St=null,Ct=null,fl=!1,no=!1,So=0,$v=0;function Nt(){throw Error(se(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function ad(t,e,n,i,r,s){if(vr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?Qv:Jv,t=n(i,r),no){s=0;do{if(no=!1,So=0,25<=s)throw Error(se(301));s+=1,Ct=St=null,e.updateQueue=null,Na.current=ex,t=n(i,r)}while(no)}if(Na.current=dl,e=St!==null&&St.next!==null,vr=0,Ct=St=ct=null,fl=!1,e)throw Error(se(300));return t}function ld(){var t=So!==0;return So=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function En(){if(St===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ct===null?ct.memoizedState:Ct.next;if(e!==null)Ct=e,St=t;else{if(t===null)throw Error(se(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Mo(t,e){return typeof e=="function"?e(t):e}function vu(t){var e=En(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((vr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ct.lanes|=d,xr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xu(t){var e=En(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mg(){}function Eg(t,e){var n=ct,i=En(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,ud(Ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Eo(9,Tg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(se(349));vr&30||wg(n,e,r)}return r}function wg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tg(t,e,n,i){e.value=n,e.getSnapshot=i,Cg(e)&&Rg(t)}function Ag(t,e,n){return n(function(){Cg(e)&&Rg(t)})}function Cg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Rg(t){var e=di(t,1);e!==null&&On(e,t,1,-1)}function Rh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=Zv.bind(null,ct,t),[e.memoizedState,t]}function Eo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Pg(){return En().memoizedState}function Fa(t,e,n,i){var r=Vn();ct.flags|=t,r.memoizedState=Eo(1|e,n,void 0,i===void 0?null:i)}function Ul(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&od(i,o.deps)){r.memoizedState=Eo(e,n,s,i);return}}ct.flags|=t,r.memoizedState=Eo(1|e,n,s,i)}function Ph(t,e){return Fa(8390656,8,t,e)}function ud(t,e){return Ul(2048,8,t,e)}function bg(t,e){return Ul(4,2,t,e)}function Lg(t,e){return Ul(4,4,t,e)}function Dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ig(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,Dg.bind(null,e,t),n)}function cd(){}function Ug(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&od(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ng(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&od(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fg(t,e,n){return vr&21?(kn(n,e)||(n=Hm(),ct.lanes|=n,xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function qv(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=_u.transition;_u.transition={};try{t(!1),e()}finally{tt=n,_u.transition=i}}function Og(){return En().memoizedState}function Kv(t,e,n){var i=ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},kg(t))Bg(e,n);else if(n=xg(t,e,n,i),n!==null){var r=Gt();On(n,t,i,r),zg(n,e,i)}}function Zv(t,e,n){var i=ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(kg(t))Bg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,td(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xg(t,e,r,i),n!==null&&(r=Gt(),On(n,t,i,r),zg(n,e,i))}}function kg(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Bg(t,e){no=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hf(t,n)}}var dl={readContext:Mn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},Qv={readContext:Mn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:Mn,useEffect:Ph,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,Dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Kv.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:Rh,useDebugValue:cd,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=Rh(!1),e=t[0];return t=qv.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Vn();if(at){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Rt===null)throw Error(se(349));vr&30||wg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ph(Ag.bind(null,i,s,t),[t]),i.flags|=2048,Eo(9,Tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Rt.identifierPrefix;if(at){var n=oi,i=si;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$v++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jv={readContext:Mn,useCallback:Ug,useContext:Mn,useEffect:ud,useImperativeHandle:Ig,useInsertionEffect:bg,useLayoutEffect:Lg,useMemo:Ng,useReducer:vu,useRef:Pg,useState:function(){return vu(Mo)},useDebugValue:cd,useDeferredValue:function(t){var e=En();return Fg(e,St.memoizedState,t)},useTransition:function(){var t=vu(Mo)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1},ex={readContext:Mn,useCallback:Ug,useContext:Mn,useEffect:ud,useImperativeHandle:Ig,useInsertionEffect:bg,useLayoutEffect:Lg,useMemo:Ng,useReducer:xu,useRef:Pg,useState:function(){return xu(Mo)},useDebugValue:cd,useDeferredValue:function(t){var e=En();return St===null?e.memoizedState=t:Fg(e,St.memoizedState,t)},useTransition:function(){var t=xu(Mo)[0],e=En().memoizedState;return[t,e]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Og,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=ki(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),Ua(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=ki(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),Ua(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=ki(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(t,r,i),e!==null&&(On(e,t,i,n),Ua(e,t,i))}};function bh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,i)||!mo(r,s):!0}function Hg(t,e,n){var i=!1,r=Gi,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=Qt(e)?gr:zt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):Gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nl.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=Qt(e)?gr:zt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nl.enqueueReplaceState(r,r.state,null),ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=R0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ic(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tx=typeof WeakMap=="function"?WeakMap:Map;function Vg(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,Gc=i),Ic(t,e)},n}function Gg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ic(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ic(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new tx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=mx.bind(null,t,e,n),e.then(t,t))}function Ih(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var nx=mi.ReactCurrentOwner,Kt=!1;function Vt(t,e,n,i){e.child=t===null?vg(e,null,n,i):_s(e,t.child,n,i)}function Nh(t,e,n,i,r){n=n.render;var s=e.ref;return us(e,r),i=ad(t,e,n,i,s,r),n=ld(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(at&&n&&qf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Fh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wg(t,e,s,i,r)):(t=za(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(mo(s,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return Uc(t,e,n,i,r)}function Xg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(is,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(is,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(is,an),an|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(is,an),an|=i;return Vt(t,e,r,n),e.child}function jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uc(t,e,n,i,r){var s=Qt(n)?gr:zt.current;return s=ms(e,s),us(e,r),n=ad(t,e,n,i,s,r),i=ld(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(at&&i&&qf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Oh(t,e,n,i,r){if(Qt(n)){var s=!0;rl(e)}else s=!1;if(us(e,r),e.stateNode===null)Oa(t,e),Hg(e,n,i),Dc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mn(u):(u=Qt(n)?gr:zt.current,u=ms(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Lh(e,o,i,u),Ti=!1;var f=e.memoizedState;o.state=f,ul(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zt.current||Ti?(typeof d=="function"&&(Lc(e,n,d,i),l=e.memoizedState),(a=Ti||bh(e,n,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,yg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mn(l):(l=Qt(n)?gr:zt.current,l=ms(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Lh(e,o,i,l),Ti=!1,f=e.memoizedState,o.state=f,ul(e,i,o,r);var v=e.memoizedState;a!==h||f!==v||Zt.current||Ti?(typeof p=="function"&&(Lc(e,n,p,i),v=e.memoizedState),(u=Ti||bh(e,n,u,i,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Nc(t,e,n,i,s,r)}function Nc(t,e,n,i,r,s){jg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mh(e,n,!1),hi(t,e,s);i=e.stateNode,nx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&Mh(e,n,!0),e.child}function Yg(t){var e=t.stateNode;e.pendingContext?Sh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sh(t,e.context,!1),id(t,e.containerInfo)}function kh(t,e,n,i,r){return gs(),Zf(r),e.flags|=256,Vt(t,e,n,i),e.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function $g(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ut,r&1),t===null)return Pc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,i,0,null),t=mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oc(n),e.memoizedState=Fc,t):fd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ix(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Oc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fc,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fd(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ko(t,e,n,i){return i!==null&&Zf(i),_s(e,t.child,null,n),t=fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ix(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=yu(Error(se(422))),Ko(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kl({mode:"visible",children:i.children},r,0,null),s=mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=Oc(o),e.memoizedState=Fc,s);if(!(e.mode&1))return Ko(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=yu(s,i,void 0),Ko(t,e,o,i)}if(a=(o&t.childLanes)!==0,Kt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),On(i,t,r,-1))}return _d(),i=yu(Error(se(421))),Ko(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Ni(r.nextSibling),un=e,at=!0,Ln=null,t!==null&&(mn[gn++]=si,mn[gn++]=oi,mn[gn++]=_r,si=t.id,oi=t.overflow,_r=e),e=fd(e,i.children),e.flags|=4096,e)}function Bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bc(t.return,e,n)}function Su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,n,e);else if(t.tag===19)Bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rx(t,e,n){switch(e.tag){case 3:Yg(e),gs();break;case 5:Sg(e);break;case 1:Qt(e.type)&&rl(e);break;case 4:id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?$g(t,e,n):(it(ut,ut.current&1),t=hi(t,e,n),t!==null?t.sibling:null);it(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Xg(t,e,n)}return hi(t,e,n)}var Kg,kc,Zg,Qg;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};Zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,fr(Yn.current);var s=null;switch(n){case"input":r=oc(t,r),i=oc(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=uc(t,r),i=uc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}fc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sx(t,e,n){var i=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return Qt(e.type)&&il(),Ft(e),null;case 3:return i=e.stateNode,vs(),ot(Zt),ot(zt),sd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(jc(Ln),Ln=null))),kc(t,e),Ft(e),null;case 5:rd(e);var r=fr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)Zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ft(e),null}if(t=fr(Yn.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[vo]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<qs.length;r++)rt(qs[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":$d(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Kd(i,s),rt("invalid",i)}fc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":Bo(i),qd(i,s,!0);break;case"textarea":Bo(i),Zd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Xn]=e,t[vo]=i,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=dc(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<qs.length;r++)rt(qs[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":$d(t,i),r=oc(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Kd(t,i),r=uc(t,i),rt("invalid",t);break;default:r=i}fc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Nf(t,s,l,o))}switch(n){case"input":Bo(t),qd(t,i,!1);break;case"textarea":Bo(t),Zd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Qg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=fr(yo.current),fr(Yn.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Ft(e),null;case 13:if(ot(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&ln!==null&&e.mode&1&&!(e.flags&128))gg(),gs(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Xn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Ln!==null&&(jc(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Et===0&&(Et=3):_d())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return vs(),kc(t,e),t===null&&go(e.stateNode.containerInfo),Ft(e),null;case 10:return ed(e.type._context),Ft(e),null;case 17:return Qt(e.type)&&il(),Ft(e),null;case 19:if(ot(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Os(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cl(t),o!==null){for(e.flags|=128,Os(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>ys&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=cl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ft(e),null}else 2*gt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=ut.current,it(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return gd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function ox(t,e){switch(Kf(e),e.tag){case 1:return Qt(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ot(Zt),ot(zt),sd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rd(e),null;case 13:if(ot(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ut),null;case 4:return vs(),null;case 10:return ed(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var Zo=!1,Bt=!1,ax=typeof WeakSet=="function"?WeakSet:Set,xe=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Bc(t,e,n){try{n()}catch(i){pt(t,e,i)}}var zh=!1;function lx(t,e){if(Mc=Ja,t=ig(),$f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:t,selectionRange:n},Ja=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(x){pt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return v=zh,zh=!1,v}function io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bc(e,n,s)}r=r.next}while(r!==i)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jg(t){var e=t.alternate;e!==null&&(t.alternate=null,Jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[vo],delete e[Ac],delete e[Wv],delete e[Xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e_(t){return t.tag===5||t.tag===3||t.tag===4}function Hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for(Hc(t,e,n),t=t.sibling;t!==null;)Hc(t,e,n),t=t.sibling}function Vc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Vc(t,e,n),t=t.sibling;t!==null;)Vc(t,e,n),t=t.sibling}var Lt=null,bn=!1;function _i(t,e,n){for(n=n.child;n!==null;)t_(t,e,n),n=n.sibling}function t_(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Bt||ns(n,e);case 6:var i=Lt,r=bn;Lt=null,_i(t,e,n),Lt=i,bn=r,Lt!==null&&(bn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(bn?(t=Lt,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),ho(t)):pu(Lt,n.stateNode));break;case 4:i=Lt,r=bn,Lt=n.stateNode.containerInfo,bn=!0,_i(t,e,n),Lt=i,bn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bc(n,e,o),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!Bt&&(ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,_i(t,e,n),Bt=i):_i(t,e,n);break;default:_i(t,e,n)}}function Vh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ax),e.forEach(function(i){var r=_x.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,bn=!1;break e;case 3:Lt=a.stateNode.containerInfo,bn=!0;break e;case 4:Lt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(Lt===null)throw Error(se(160));t_(s,o,r),Lt=null,bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n_(e,t),e=e.sibling}function n_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),Hn(t),i&4){try{io(3,t,t.return),Fl(3,t)}catch(y){pt(t,t.return,y)}try{io(5,t,t.return)}catch(y){pt(t,t.return,y)}}break;case 1:Tn(e,t),Hn(t),i&512&&n!==null&&ns(n,n.return);break;case 5:if(Tn(e,t),Hn(t),i&512&&n!==null&&ns(n,n.return),t.flags&32){var r=t.stateNode;try{lo(r,"")}catch(y){pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wm(r,s),dc(a,o);var u=dc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Pm(r,h):d==="dangerouslySetInnerHTML"?Cm(r,h):d==="children"?lo(r,h):Nf(r,d,h,u)}switch(a){case"input":ac(r,s);break;case"textarea":Tm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ss(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[vo]=s}catch(y){pt(t,t.return,y)}}break;case 6:if(Tn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pt(t,t.return,y)}}break;case 3:if(Tn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(y){pt(t,t.return,y)}break;case 4:Tn(e,t),Hn(t);break;case 13:Tn(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pd=gt())),i&4&&Vh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||d,Tn(e,t),Bt=u):Tn(e,t),Hn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(xe=t,d=t.child;d!==null;){for(h=xe=d;xe!==null;){switch(f=xe,p=f.child,f.tag){case 0:case 11:case 14:case 15:io(4,f,f.return);break;case 1:ns(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){pt(i,n,y)}}break;case 5:ns(f,f.return);break;case 22:if(f.memoizedState!==null){Wh(h);continue}}p!==null?(p.return=f,xe=p):Wh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rm("display",o))}catch(y){pt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){pt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(e,t),Hn(t),i&4&&Vh(t);break;case 21:break;default:Tn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(e_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=Hh(t);Vc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hh(t);Hc(t,a,o);break;default:throw Error(se(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ux(t,e,n){xe=t,i_(t)}function i_(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Zo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=Zo;var u=Bt;if(Zo=o,(Bt=l)&&!u)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Xh(r):l!==null?(l.return=o,xe=l):Xh(r);for(;s!==null;)xe=s,i_(s),s=s.sibling;xe=r,Zo=a,Bt=u}Gh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Gh(t)}}function Gh(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ch(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ch(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Bt||e.flags&512&&zc(e)}catch(f){pt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Wh(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Xh(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{zc(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{zc(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var cx=Math.ceil,hl=mi.ReactCurrentDispatcher,dd=mi.ReactCurrentOwner,yn=mi.ReactCurrentBatchConfig,qe=0,Rt=null,yt=null,Dt=0,an=0,is=Yi(0),Et=0,wo=null,xr=0,Ol=0,hd=0,ro=null,Yt=null,pd=0,ys=1/0,ii=null,pl=!1,Gc=null,Oi=null,Qo=!1,bi=null,ml=0,so=0,Wc=null,ka=-1,Ba=0;function Gt(){return qe&6?gt():ka!==-1?ka:ka=gt()}function ki(t){return t.mode&1?qe&2&&Dt!==0?Dt&-Dt:Yv.transition!==null?(Ba===0&&(Ba=Hm()),Ba):(t=tt,t!==0||(t=window.event,t=t===void 0?16:$m(t.type)),t):1}function On(t,e,n,i){if(50<so)throw so=0,Wc=null,Error(se(185));Co(t,n,i),(!(qe&2)||t!==Rt)&&(t===Rt&&(!(qe&2)&&(Ol|=n),Et===4&&Ci(t,Dt)),Jt(t,i),n===1&&qe===0&&!(e.mode&1)&&(ys=gt()+500,Il&&$i()))}function Jt(t,e){var n=t.callbackNode;Y0(t,e);var i=Qa(t,t===Rt?Dt:0);if(i===0)n!==null&&eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&eh(n),e===1)t.tag===0?jv(jh.bind(null,t)):hg(jh.bind(null,t)),Vv(function(){!(qe&6)&&$i()}),n=null;else{switch(Vm(i)){case 1:n=zf;break;case 4:n=Bm;break;case 16:n=Za;break;case 536870912:n=zm;break;default:n=Za}n=f_(n,r_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r_(t,e){if(ka=-1,Ba=0,qe&6)throw Error(se(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var i=Qa(t,t===Rt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=qe;qe|=2;var s=o_();(Rt!==t||Dt!==e)&&(ii=null,ys=gt()+500,pr(t,e));do try{hx();break}catch(a){s_(t,a)}while(!0);Jf(),hl.current=s,qe=r,yt!==null?e=0:(Rt=null,Dt=0,e=Et)}if(e!==0){if(e===2&&(r=_c(t),r!==0&&(i=r,e=Xc(t,r))),e===1)throw n=wo,pr(t,0),Ci(t,i),Jt(t,gt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!fx(r)&&(e=gl(t,i),e===2&&(s=_c(t),s!==0&&(i=s,e=Xc(t,s))),e===1))throw n=wo,pr(t,0),Ci(t,i),Jt(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:rr(t,Yt,ii);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=pd+500-gt(),10<e)){if(Qa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tc(rr.bind(null,t,Yt,ii),e);break}rr(t,Yt,ii);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Fn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cx(i/1960))-i,10<i){t.timeoutHandle=Tc(rr.bind(null,t,Yt,ii),i);break}rr(t,Yt,ii);break;case 5:rr(t,Yt,ii);break;default:throw Error(se(329))}}}return Jt(t,gt()),t.callbackNode===n?r_.bind(null,t):null}function Xc(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&jc(e)),t}function jc(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~hd,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function jh(t){if(qe&6)throw Error(se(327));cs();var e=Qa(t,0);if(!(e&1))return Jt(t,gt()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=_c(t);i!==0&&(e=i,n=Xc(t,i))}if(n===1)throw n=wo,pr(t,0),Ci(t,e),Jt(t,gt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,Yt,ii),Jt(t,gt()),null}function md(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(ys=gt()+500,Il&&$i())}}function yr(t){bi!==null&&bi.tag===0&&!(qe&6)&&cs();var e=qe;qe|=1;var n=yn.transition,i=tt;try{if(yn.transition=null,tt=1,t)return t()}finally{tt=i,yn.transition=n,qe=e,!(qe&6)&&$i()}}function gd(){an=is.current,ot(is)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hv(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(Kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:vs(),ot(Zt),ot(zt),sd();break;case 5:rd(i);break;case 4:vs();break;case 13:ot(ut);break;case 19:ot(ut);break;case 10:ed(i.type._context);break;case 22:case 23:gd()}n=n.return}if(Rt=t,yt=t=Bi(t.current,null),Dt=an=e,Et=0,wo=null,hd=Ol=xr=0,Yt=ro=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}cr=null}return t}function s_(t,e){do{var n=yt;try{if(Jf(),Na.current=dl,fl){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fl=!1}if(vr=0,Ct=St=ct=null,no=!1,So=0,dd.current=null,n===null||n.return===null){Et=1,wo=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Ih(o);if(p!==null){p.flags&=-257,Uh(p,o,a,s,e),p.mode&1&&Dh(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Dh(s,u,e),_d();break e}l=Error(se(426))}}else if(at&&a.mode&1){var m=Ih(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Uh(m,o,a,s,e),Zf(xs(l,a));break e}}s=l=xs(l,a),Et!==4&&(Et=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Vg(s,l,e);Ah(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Oi===null||!Oi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Gg(s,a,e);Ah(s,x);break e}}s=s.return}while(s!==null)}l_(n)}catch(U){e=U,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function o_(){var t=hl.current;return hl.current=dl,t===null?dl:t}function _d(){(Et===0||Et===3||Et===2)&&(Et=4),Rt===null||!(xr&268435455)&&!(Ol&268435455)||Ci(Rt,Dt)}function gl(t,e){var n=qe;qe|=2;var i=o_();(Rt!==t||Dt!==e)&&(ii=null,pr(t,e));do try{dx();break}catch(r){s_(t,r)}while(!0);if(Jf(),qe=n,hl.current=i,yt!==null)throw Error(se(261));return Rt=null,Dt=0,Et}function dx(){for(;yt!==null;)a_(yt)}function hx(){for(;yt!==null&&!k0();)a_(yt)}function a_(t){var e=c_(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?l_(t):yt=e,dd.current=null}function l_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ox(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,yt=null;return}}else if(n=sx(n,e,an),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Et===0&&(Et=5)}function rr(t,e,n){var i=tt,r=yn.transition;try{yn.transition=null,tt=1,px(t,e,n,i)}finally{yn.transition=r,tt=i}return null}function px(t,e,n,i){do cs();while(bi!==null);if(qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($0(t,s),t===Rt&&(yt=Rt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,f_(Za,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=tt;tt=1;var a=qe;qe|=4,dd.current=null,lx(t,n),n_(n,t),Uv(Ec),Ja=!!Mc,Ec=Mc=null,t.current=n,ux(n),B0(),qe=a,tt=o,yn.transition=s}else t.current=n;if(Qo&&(Qo=!1,bi=t,ml=r),s=t.pendingLanes,s===0&&(Oi=null),V0(n.stateNode),Jt(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=Gc,Gc=null,t;return ml&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===Wc?so++:(so=0,Wc=t):so=0,$i(),null}function cs(){if(bi!==null){var t=Vm(ml),e=yn.transition,n=tt;try{if(yn.transition=null,tt=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,ml=0,qe&6)throw Error(se(331));var r=qe;for(qe|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var d=xe;switch(d.tag){case 0:case 11:case 15:io(8,d,s)}var h=d.child;if(h!==null)h.return=d,xe=h;else for(;xe!==null;){d=xe;var f=d.sibling,p=d.return;if(Jg(d),d===u){xe=null;break}if(f!==null){f.return=p,xe=f;break}xe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,xe=c;break e}xe=s.return}}var _=t.current;for(xe=_;xe!==null;){o=xe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,xe=g;else e:for(o=_;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fl(9,a)}}catch(U){pt(a,a.return,U)}if(a===o){xe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,xe=x;break e}xe=a.return}}if(qe=r,$i(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Rl,t)}catch{}i=!0}return i}finally{tt=n,yn.transition=e}}return!1}function Yh(t,e,n){e=xs(n,e),e=Vg(t,e,1),t=Fi(t,e,1),e=Gt(),t!==null&&(Co(t,1,e),Jt(t,e))}function pt(t,e,n){if(t.tag===3)Yh(t,t,n);else for(;e!==null;){if(e.tag===3){Yh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=xs(n,t),t=Gg(e,t,1),e=Fi(e,t,1),t=Gt(),e!==null&&(Co(e,1,t),Jt(e,t));break}}e=e.return}}function mx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Dt&n)===n&&(Et===4||Et===3&&(Dt&130023424)===Dt&&500>gt()-pd?pr(t,0):hd|=n),Jt(t,e)}function u_(t,e){e===0&&(t.mode&1?(e=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):e=1);var n=Gt();t=di(t,e),t!==null&&(Co(t,e,n),Jt(t,n))}function gx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),u_(t,n)}function _x(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),u_(t,n)}var c_;c_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,rx(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,at&&e.flags&1048576&&pg(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Oa(t,e),t=e.pendingProps;var r=ms(e,zt.current);us(e,n),r=ad(null,e,i,t,r,n);var s=ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nd(e),r.updater=Nl,e.stateNode=r,r._reactInternals=e,Dc(e,i,t,n),e=Nc(null,e,i,!0,s,n)):(e.tag=0,at&&s&&qf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xx(i),t=Pn(i,t),r){case 0:e=Uc(null,e,i,t,n);break e;case 1:e=Oh(null,e,i,t,n);break e;case 11:e=Nh(null,e,i,t,n);break e;case 14:e=Fh(null,e,i,Pn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Uc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Oh(t,e,i,r,n);case 3:e:{if(Yg(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yg(t,e),ul(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(se(423)),e),e=kh(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(se(424)),e),e=kh(t,e,i,n,r);break e}else for(ln=Ni(e.stateNode.containerInfo.firstChild),un=e,at=!0,Ln=null,n=vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=hi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return Sg(e),t===null&&Pc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wc(i,r)?o=null:s!==null&&wc(i,s)&&(e.flags|=32),jg(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&Pc(e),null;case 13:return $g(t,e,n);case 4:return id(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Nh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(al,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!Zt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Mn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),Fh(t,e,i,r,n);case 15:return Wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Oa(t,e),e.tag=1,Qt(i)?(t=!0,rl(e)):t=!1,us(e,n),Hg(e,i,r),Dc(e,i,r,n),Nc(null,e,i,!0,t,n);case 19:return qg(t,e,n);case 22:return Xg(t,e,n)}throw Error(se(156,e.tag))};function f_(t,e){return km(t,e)}function vx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,i){return new vx(t,e,n,i)}function vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xx(t){if(typeof t=="function")return vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===kf)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yr:return mr(n.children,r,s,e);case Ff:o=8,r|=8;break;case nc:return t=vn(12,n,e,r|2),t.elementType=nc,t.lanes=s,t;case ic:return t=vn(13,n,e,r),t.elementType=ic,t.lanes=s,t;case rc:return t=vn(19,n,e,r),t.elementType=rc,t.lanes=s,t;case Sm:return kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xm:o=10;break e;case ym:o=9;break e;case Of:o=11;break e;case kf:o=14;break e;case wi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function mr(t,e,n,i){return t=vn(7,t,i,e),t.lanes=n,t}function kl(t,e,n,i){return t=vn(22,t,i,e),t.elementType=Sm,t.lanes=n,t.stateNode={isHidden:!1},t}function Mu(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function Eu(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xd(t,e,n,i,r,s,o,a,l){return t=new yx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(s),t}function Sx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function d_(t){if(!t)return Gi;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Qt(n))return dg(t,n,e)}return e}function h_(t,e,n,i,r,s,o,a,l){return t=xd(n,i,!0,t,r,s,o,a,l),t.context=d_(null),n=t.current,i=Gt(),r=ki(n),s=ui(i,r),s.callback=e??null,Fi(n,s,r),t.current.lanes=r,Co(t,r,i),Jt(t,i),t}function Bl(t,e,n,i){var r=e.current,s=Gt(),o=ki(r);return n=d_(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fi(r,e,o),t!==null&&(On(t,r,o,s),Ua(t,r,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yd(t,e){$h(t,e),(t=t.alternate)&&$h(t,e)}function Mx(){return null}var p_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sd(t){this._internalRoot=t}zl.prototype.render=Sd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Bl(t,e,null,null)};zl.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){Bl(null,t,null,null)}),e[fi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Ym(t)}};function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qh(){}function Ex(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=_l(o);s.call(u)}}var o=h_(e,i,t,0,null,!1,!1,"",qh);return t._reactRootContainer=o,t[fi]=o.current,go(t.nodeType===8?t.parentNode:t),yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_l(l);a.call(u)}}var l=xd(t,0,!1,null,null,!1,!1,"",qh);return t._reactRootContainer=l,t[fi]=l.current,go(t.nodeType===8?t.parentNode:t),yr(function(){Bl(e,l,n,i)}),l}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_l(o);a.call(l)}}Bl(e,o,t,r)}else o=Ex(n,e,t,r,i);return _l(o)}Gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(Hf(e,n|1),Jt(e,gt()),!(qe&6)&&(ys=gt()+500,$i()))}break;case 13:yr(function(){var i=di(t,1);if(i!==null){var r=Gt();On(i,t,1,r)}}),yd(t,1)}};Vf=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=Gt();On(e,t,134217728,n)}yd(t,134217728)}};Wm=function(t){if(t.tag===13){var e=ki(t),n=di(t,e);if(n!==null){var i=Gt();On(n,t,e,i)}yd(t,e)}};Xm=function(){return tt};jm=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};pc=function(t,e,n){switch(e){case"input":if(ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Dl(i);if(!r)throw Error(se(90));Em(i),ac(i,r)}}}break;case"textarea":Tm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};Dm=md;Im=yr;var wx={usingClientEntryPoint:!1,Events:[Po,Zr,Dl,bm,Lm,md]},ks={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tx={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fm(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||Mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Rl=Jo.inject(Tx),jn=Jo}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wx;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(e))throw Error(se(200));return Sx(t,e,null,n)};fn.createRoot=function(t,e){if(!Md(t))throw Error(se(299));var n=!1,i="",r=p_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xd(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,go(t.nodeType===8?t.parentNode:t),new Sd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Fm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return yr(t)};fn.hydrate=function(t,e,n){if(!Hl(e))throw Error(se(200));return Vl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Md(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=p_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h_(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};fn.render=function(t,e,n){if(!Hl(e))throw Error(se(200));return Vl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(se(40));return t._reactRootContainer?(yr(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};fn.unstable_batchedUpdates=md;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Vl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(t){console.error(t)}}m_(),mm.exports=fn;var Ax=mm.exports,g_,Kh=Ax;g_=Kh.createRoot,Kh.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ed="168",Cx=0,Zh=1,Rx=2,__=1,v_=2,ni=3,Wi=0,en=1,Dn=2,zi=0,fs=1,Qh=2,Jh=3,ep=4,Px=5,ar=100,bx=101,Lx=102,Dx=103,Ix=104,Ux=200,Nx=201,Fx=202,Ox=203,Yc=204,$c=205,kx=206,Bx=207,zx=208,Hx=209,Vx=210,Gx=211,Wx=212,Xx=213,jx=214,Yx=0,$x=1,qx=2,vl=3,Kx=4,Zx=5,Qx=6,Jx=7,Gl=0,ey=1,ty=2,Hi=0,ny=1,iy=2,ry=3,sy=4,oy=5,ay=6,ly=7,x_=300,Ss=301,Ms=302,qc=303,Kc=304,Wl=306,Zc=1e3,dr=1001,Qc=1002,xn=1003,uy=1004,ea=1005,In=1006,wu=1007,hr=1008,pi=1009,y_=1010,S_=1011,To=1012,wd=1013,Sr=1014,ai=1015,Lo=1016,Td=1017,Ad=1018,Es=1020,M_=35902,E_=1021,w_=1022,Nn=1023,T_=1024,A_=1025,ds=1026,ws=1027,C_=1028,Cd=1029,R_=1030,Rd=1031,Pd=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,Jc=35840,ef=35841,tf=35842,nf=35843,rf=36196,sf=37492,of=37496,af=37808,lf=37809,uf=37810,cf=37811,ff=37812,df=37813,hf=37814,pf=37815,mf=37816,gf=37817,_f=37818,vf=37819,xf=37820,yf=37821,Xa=36492,Sf=36494,Mf=36495,P_=36283,Ef=36284,wf=36285,Tf=36286,cy=3200,fy=3201,bd=0,dy=1,Ri="",Gn="srgb",qi="srgb-linear",Ld="display-p3",Xl="display-p3-linear",xl="linear",st="srgb",yl="rec709",Sl="p3",Pr=7680,tp=519,hy=512,py=513,my=514,b_=515,gy=516,_y=517,vy=518,xy=519,np=35044,ip="300 es",li=2e3,Ml=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ja=Math.PI/180,Af=180/Math.PI;function Do(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function yy(t,e){return(t%e+e)%e}function Tu(t,e,n){return(1-n)*t+n*e}function Bs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],c=r[6],_=r[1],g=r[4],x=r[7],U=r[2],P=r[5],R=r[8];return s[0]=o*y+a*_+l*U,s[3]=o*m+a*g+l*P,s[6]=o*c+a*x+l*R,s[1]=u*y+d*_+h*U,s[4]=u*m+d*g+h*P,s[7]=u*c+d*x+h*R,s[2]=f*y+p*_+v*U,s[5]=f*m+p*g+v*P,s[8]=f*c+p*x+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=d*o-a*u,f=a*l-d*s,p=u*s-o*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*u-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new Ve;function L_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function El(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sy(){const t=El("canvas");return t.style.display="block",t}const rp={};function oo(t){t in rp||(rp[t]=!0,console.warn(t))}function My(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sp=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),op=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[qi]:{transfer:xl,primaries:yl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Gn]:{transfer:st,primaries:yl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Xl]:{transfer:xl,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(op),fromReference:t=>t.applyMatrix3(sp)},[Ld]:{transfer:st,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(op),fromReference:t=>t.applyMatrix3(sp).convertLinearToSRGB()}},Ey=new Set([qi,Xl]),et={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Ey.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=zs[e].toReference,r=zs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return zs[t].primaries},getTransfer:function(t){return t===Ri?xl:zs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(zs[e].luminanceCoefficients)}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class wy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=El("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ty=0;class D_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ay=0;class tn extends Ps{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=dr,r=dr,s=In,o=hr,a=Nn,l=pi,u=tn.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Do(),this.name="",this.source=new D_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zc:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zc:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=x_;tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,U=(c+1)/2,P=(d+f)/4,R=(h+y)/4,N=(v+m)/4;return g>x&&g>U?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=P/i,s=R/i):x>U?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=P/r,s=N/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=R/s,r=N/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-y)/_,this.z=(f-d)/_,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new D_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends Cy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class I_ extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ry extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(h!==y||l!==f||u!==p||d!==v){let m=1-a;const c=l*f+u*p+d*v+h*y,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const U=Math.sqrt(g),P=Math.atan2(U,c*_);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const x=a*_;if(l=l*m+f*x,u=u*m+p*x,d=d*m+v*x,h=h*m+y*x,m===1-a){const U=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=U,u*=U,d*=U,h*=U}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+d*h+l*p-u*f,e[n+1]=l*v+d*f+u*h-a*p,e[n+2]=u*v+d*p+a*f-l*h,e[n+3]=d*v-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*d*h+u*p*v,this._y=u*p*h-f*d*v,this._z=u*d*v+f*p*h,this._w=u*d*h-f*p*v;break;case"YXZ":this._x=f*d*h+u*p*v,this._y=u*p*h-f*d*v,this._z=u*d*v-f*p*h,this._w=u*d*h+f*p*v;break;case"ZXY":this._x=f*d*h-u*p*v,this._y=u*p*h+f*d*v,this._z=u*d*v+f*p*h,this._w=u*d*h-f*p*v;break;case"ZYX":this._x=f*d*h-u*p*v,this._y=u*p*h+f*d*v,this._z=u*d*v-f*p*h,this._w=u*d*h+f*p*v;break;case"YZX":this._x=f*d*h+u*p*v,this._y=u*p*h+f*d*v,this._z=u*d*v-f*p*h,this._w=u*d*h-f*p*v;break;case"XZY":this._x=f*d*h-u*p*v,this._y=u*p*h-f*d*v,this._z=u*d*v+f*p*h,this._w=u*d*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ap.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*d,this.y=i+l*d+a*u-s*h,this.z=r+l*h+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new X,ap=new Io;class Uo{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),na.subVectors(this.max,Hs),Lr.subVectors(e.a,Hs),Dr.subVectors(e.b,Hs),Ir.subVectors(e.c,Hs),vi.subVectors(Dr,Lr),xi.subVectors(Ir,Dr),Zi.subVectors(Lr,Ir);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Zi.z,Zi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Zi.z,0,-Zi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Zi.y,Zi.x,0];return!bu(n,Lr,Dr,Ir,na)||(n=[1,0,0,0,1,0,0,0,1],!bu(n,Lr,Dr,Ir,na))?!1:(ia.crossVectors(vi,xi),n=[ia.x,ia.y,ia.z],bu(n,Lr,Dr,Ir,na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new X,new X,new X,new X,new X,new X,new X,new X],An=new X,ta=new Uo,Lr=new X,Dr=new X,Ir=new X,vi=new X,xi=new X,Zi=new X,Hs=new X,na=new X,ia=new X,Qi=new X;function bu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Qi.fromArray(t,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),u=n.dot(Qi),d=i.dot(Qi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Py=new Uo,Vs=new X,Lu=new X;class jl{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Py.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Lu)),this.expandByPoint(Vs.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new X,Du=new X,ra=new X,yi=new X,Iu=new X,sa=new X,Uu=new X;class U_{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Du.copy(e).add(n).multiplyScalar(.5),ra.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Du);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ra),a=yi.dot(this.direction),l=-yi.dot(ra),u=yi.lengthSq(),d=Math.abs(1-o*o);let h,f,p,v;if(d>0)if(h=o*l-a,f=o*a-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const y=1/d;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Du).addScaledVector(ra,f),p}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Iu.subVectors(n,e),sa.subVectors(i,e),Uu.crossVectors(Iu,sa);let o=this.direction.dot(Uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(sa.crossVectors(yi,sa));if(l<0)return null;const u=a*this.direction.dot(Iu.cross(yi));if(u<0||l+u>o)return null;const d=-a*yi.dot(Uu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,u,d,h,f,p,v,y,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,h,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,u,d,h,f,p,v,y,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=f,c[3]=p,c[7]=v,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,v=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,v=u*d,y=u*h;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,v=u*d,y=u*h;n[0]=f-y*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,v=a*d,y=a*h;n[0]=l*d,n[4]=v*u-p,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*d,n[4]=y-f*h,n[8]=v*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*h+v,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*u,v=a*l,y=a*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+y,n[5]=o*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(by,e,Ly)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Si.crossVectors(i,sn),Si.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Si.crossVectors(i,sn)),Si.normalize(),oa.crossVectors(sn,Si),r[0]=Si.x,r[4]=oa.x,r[8]=sn.x,r[1]=Si.y,r[5]=oa.y,r[9]=sn.y,r[2]=Si.z,r[6]=oa.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],c=i[14],_=i[3],g=i[7],x=i[11],U=i[15],P=r[0],R=r[4],N=r[8],w=r[12],S=r[1],b=r[5],A=r[9],B=r[13],q=r[2],G=r[6],j=r[10],W=r[14],D=r[3],V=r[7],Q=r[11],ne=r[15];return s[0]=o*P+a*S+l*q+u*D,s[4]=o*R+a*b+l*G+u*V,s[8]=o*N+a*A+l*j+u*Q,s[12]=o*w+a*B+l*W+u*ne,s[1]=d*P+h*S+f*q+p*D,s[5]=d*R+h*b+f*G+p*V,s[9]=d*N+h*A+f*j+p*Q,s[13]=d*w+h*B+f*W+p*ne,s[2]=v*P+y*S+m*q+c*D,s[6]=v*R+y*b+m*G+c*V,s[10]=v*N+y*A+m*j+c*Q,s[14]=v*w+y*B+m*W+c*ne,s[3]=_*P+g*S+x*q+U*D,s[7]=_*R+g*b+x*G+U*V,s[11]=_*N+g*A+x*j+U*Q,s[15]=_*w+g*B+x*W+U*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],c=e[15];return v*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+y*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*d-s*l*d)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*d-i*u*d)+c*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],c=e[15],_=h*m*u-y*f*u+y*l*p-a*m*p-h*l*c+a*f*c,g=v*f*u-d*m*u-v*l*p+o*m*p+d*l*c-o*f*c,x=d*y*u-v*h*u+v*a*p-o*y*p-d*a*c+o*h*c,U=v*h*l-d*y*l-v*a*f+o*y*f+d*a*m-o*h*m,P=n*_+i*g+r*x+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=_*R,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*c-i*f*c)*R,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*c+i*l*c)*R,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*R,e[4]=g*R,e[5]=(d*m*s-v*f*s+v*r*p-n*m*p-d*r*c+n*f*c)*R,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*c-n*l*c)*R,e[7]=(o*f*s-d*l*s+d*r*u-n*f*u-o*r*p+n*l*p)*R,e[8]=x*R,e[9]=(v*h*s-d*y*s-v*i*p+n*y*p+d*i*c-n*h*c)*R,e[10]=(o*y*s-v*a*s+v*i*u-n*y*u-o*i*c+n*a*c)*R,e[11]=(d*a*s-o*h*s-d*i*u+n*h*u+o*i*p-n*a*p)*R,e[12]=U*R,e[13]=(d*y*r-v*h*r+v*i*f-n*y*f-d*i*m+n*h*m)*R,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*R,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,h=a+a,f=s*u,p=s*d,v=s*h,y=o*d,m=o*h,c=a*h,_=l*u,g=l*d,x=l*h,U=i.x,P=i.y,R=i.z;return r[0]=(1-(y+c))*U,r[1]=(p+x)*U,r[2]=(v-g)*U,r[3]=0,r[4]=(p-x)*P,r[5]=(1-(f+c))*P,r[6]=(m+_)*P,r[7]=0,r[8]=(v+g)*R,r[9]=(m-_)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const u=1/s,d=1/o,h=1/a;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===li)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ml)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,u=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*u,p=(i+r)*d;let v,y;if(a===li)v=(o+s)*h,y=-2*h;else if(a===Ml)v=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new X,Cn=new mt,by=new X(0,0,0),Ly=new X(1,1,1),Si=new X,oa=new X,sn=new X,lp=new mt,up=new Io;class Bn{constructor(e=0,n=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class N_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dy=0;const cp=new X,Nr=new Io,Jn=new mt,aa=new X,Gs=new X,Iy=new X,Uy=new Io,fp=new X(1,0,0),dp=new X(0,1,0),hp=new X(0,0,1),pp={type:"added"},Ny={type:"removed"},Fr={type:"childadded",child:null},Nu={type:"childremoved",child:null};class It extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new X,n=new Bn,i=new Io,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ve}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(fp,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,n){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fp,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?aa.copy(e):aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Gs,aa,this.up):Jn.lookAt(aa,Gs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ny),Nu.child=e,this.dispatchEvent(Nu),Nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new X(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new X,ei=new X,Fu=new X,ti=new X,Or=new X,kr=new X,mp=new X,Ou=new X,ku=new X,Bu=new X;class Un{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),ei.subVectors(i,n),Fu.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(ei),l=Rn.dot(Fu),u=ei.dot(ei),d=ei.dot(Fu),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*d)*f,v=(o*d-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ei.subVectors(e,n),Rn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),kr.subVectors(s,i),Ou.subVectors(e,i);const l=Or.dot(Ou),u=kr.dot(Ou);if(l<=0&&u<=0)return n.copy(i);ku.subVectors(e,r);const d=Or.dot(ku),h=kr.dot(ku);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Or,o);Bu.subVectors(e,s);const p=Or.dot(Bu),v=kr.dot(Bu);if(v>=0&&p<=v)return n.copy(s);const y=p*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(kr,a);const m=d*v-p*h;if(m<=0&&h-d>=0&&p-v>=0)return mp.subVectors(s,r),a=(h-d)/(h-d+(p-v)),n.copy(r).addScaledVector(mp,a);const c=1/(m+y+f);return o=y*c,a=f*c,n.copy(i).addScaledVector(Or,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},la={h:0,s:0,l:0};function zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=yy(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=F_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Cu(e.r),this.g=Cu(e.g),this.b=Cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return et.fromWorkingColorSpace(kt.copy(this),e),Math.round($t(kt.r*255,0,255))*65536+Math.round($t(kt.g*255,0,255))*256+Math.round($t(kt.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Gn){et.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(la);const i=Tu(Mi.h,la.h,n),r=Tu(Mi.s,la.s,n),s=Tu(Mi.l,la.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ge;Ge.NAMES=F_;let Fy=0;class Ar extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=fs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=$c,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class O_ extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new X,ua=new Ye;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=np,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ua.fromBufferAttribute(this,n),ua.applyMatrix3(e),this.setXY(n,ua.x,ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==np&&(e.usage=this.usage),e}}class k_ extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class B_ extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Oy=0;const pn=new mt,Hu=new It,Br=new X,on=new Uo,Ws=new Uo,At=new X;class qn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?B_:k_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(on.min,Ws.min),on.expandByPoint(At),At.addVectors(on.max,Ws.max),on.expandByPoint(At)):(on.expandByPoint(Ws.min),on.expandByPoint(Ws.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)At.fromBufferAttribute(a,u),l&&(Br.fromBufferAttribute(e,u),At.add(Br)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new X,l[N]=new X;const u=new X,d=new X,h=new X,f=new Ye,p=new Ye,v=new Ye,y=new X,m=new X;function c(N,w,S){u.fromBufferAttribute(i,N),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,S),d.sub(u),h.sub(u),p.sub(f),v.sub(f);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(b),a[N].add(y),a[w].add(y),a[S].add(y),l[N].add(m),l[w].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,w=_.length;N<w;++N){const S=_[N],b=S.start,A=S.count;for(let B=b,q=b+A;B<q;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new X,x=new X,U=new X,P=new X;function R(N){U.fromBufferAttribute(r,N),P.copy(U);const w=a[N];g.copy(w),g.sub(U.multiplyScalar(U.dot(w))).normalize(),x.crossVectors(P,w);const b=x.dot(l[N])<0?-1:1;o.setXYZW(N,g.x,g.y,g.z,b)}for(let N=0,w=_.length;N<w;++N){const S=_[N],b=S.start,A=S.count;for(let B=b,q=b+A;B<q;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,d=new X,h=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(d),l.add(d),u.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(l.length*d);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let c=0;c<d;c++)f[v++]=u[p++]}return new $n(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gp=new mt,Ji=new U_,ca=new jl,_p=new X,zr=new X,Hr=new X,Vr=new X,Vu=new X,fa=new X,da=new Ye,ha=new Ye,pa=new Ye,vp=new X,xp=new X,yp=new X,ma=new X,ga=new X;class qt extends It{constructor(e=new qn,n=new O_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],h=s[l];d!==0&&(Vu.fromBufferAttribute(h,e),o?fa.addScaledVector(Vu,d):fa.addScaledVector(Vu.sub(n),d))}n.add(fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(ca.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ca,_p)===null||Ji.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(gp.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(gp),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,U=g;x<U;x+=3){const P=a.getX(x),R=a.getX(x+1),N=a.getX(x+2);r=_a(this,c,e,i,u,d,h,P,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,c=y;m<c;m+=3){const _=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=_a(this,o,e,i,u,d,h,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,U=g;x<U;x+=3){const P=x,R=x+1,N=x+2;r=_a(this,c,e,i,u,d,h,P,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,c=y;m<c;m+=3){const _=m,g=m+1,x=m+2;r=_a(this,o,e,i,u,d,h,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ky(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;ga.copy(a),ga.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ga);return u<n.near||u>n.far?null:{distance:u,point:ga.clone(),object:t}}function _a(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,zr),t.getVertexPosition(l,Hr),t.getVertexPosition(u,Vr);const d=ky(t,e,n,i,zr,Hr,Vr,ma);if(d){r&&(da.fromBufferAttribute(r,a),ha.fromBufferAttribute(r,l),pa.fromBufferAttribute(r,u),d.uv=Un.getInterpolation(ma,zr,Hr,Vr,da,ha,pa,new Ye)),s&&(da.fromBufferAttribute(s,a),ha.fromBufferAttribute(s,l),pa.fromBufferAttribute(s,u),d.uv1=Un.getInterpolation(ma,zr,Hr,Vr,da,ha,pa,new Ye)),o&&(vp.fromBufferAttribute(o,a),xp.fromBufferAttribute(o,l),yp.fromBufferAttribute(o,u),d.normal=Un.getInterpolation(ma,zr,Hr,Vr,vp,xp,yp,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new X,materialIndex:0};Un.getNormal(zr,Hr,Vr,h.normal),d.face=h}return d}class Er extends qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(h,2));function v(y,m,c,_,g,x,U,P,R,N,w){const S=x/R,b=U/N,A=x/2,B=U/2,q=P/2,G=R+1,j=N+1;let W=0,D=0;const V=new X;for(let Q=0;Q<j;Q++){const ne=Q*b-B;for(let ge=0;ge<G;ge++){const be=ge*S-A;V[y]=be*_,V[m]=ne*g,V[c]=q,u.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[c]=P>0?1:-1,d.push(V.x,V.y,V.z),h.push(ge/R),h.push(1-Q/N),W+=1}}for(let Q=0;Q<N;Q++)for(let ne=0;ne<R;ne++){const ge=f+ne+G*Q,be=f+ne+G*(Q+1),J=f+(ne+1)+G*(Q+1),re=f+(ne+1)+G*Q;l.push(ge,be,re),l.push(be,J,re),D+=6}a.addGroup(p,D,w),p+=D,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function By(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function z_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const zy={clone:Ts,merge:Ht};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class H_ extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new X,Sp=new Ye,Mp=new Ye;class _n extends H_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Af*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Af*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,Sp,Mp),n.subVectors(Mp,Sp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ja*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Wr=1;class Gy extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Gr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new _n(Gr,Wr,e,n);s.layers=this.layers,this.add(s);const o=new _n(Gr,Wr,e,n);o.layers=this.layers,this.add(o);const a=new _n(Gr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new _n(Gr,Wr,e,n);l.layers=this.layers,this.add(l);const u=new _n(Gr,Wr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class V_ extends tn{constructor(e,n,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wy extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Er(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:zi});s.uniforms.tEquirect.value=n;const o=new qt(r,s),a=n.minFilter;return n.minFilter===hr&&(n.minFilter=In),new Gy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Gu=new X,Xy=new X,jy=new Ve;class sr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gu.subVectors(i,n).cross(Xy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jy.getNormalMatrix(e),r=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new jl,va=new X;class Dd{constructor(e=new sr,n=new sr,i=new sr,r=new sr,s=new sr,o=new sr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],y=r[10],m=r[11],c=r[12],_=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,f-u,m-p,x-c).normalize(),i[1].setComponents(l+s,f+u,m+p,x+c).normalize(),i[2].setComponents(l+o,f+d,m+v,x+_).normalize(),i[3].setComponents(l-o,f-d,m-v,x-_).normalize(),i[4].setComponents(l-a,f-h,m-y,x-g).normalize(),n===li)i[5].setComponents(l+a,f+h,m+y,x+g).normalize();else if(n===Ml)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Yy(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&f.length===0&&t.bufferSubData(u,0,d),f.length!==0){for(let p=0,v=f.length;p<v;p++){const y=f[p];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Li extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,h=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let c=0;c<d;c++){const _=c*f-o;for(let g=0;g<u;g++){const x=g*h-s;v.push(x,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,x=_+u*(c+1),U=_+1+u*(c+1),P=_+1+u*c;p.push(g,x,P),p.push(x,U,P)}this.setIndex(p),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_S=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wS="gl_FragColor = linearToOutputTexel( gl_FragColor );",TS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,US=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$S=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$M=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:$y,alphahash_pars_fragment:qy,alphamap_fragment:Ky,alphamap_pars_fragment:Zy,alphatest_fragment:Qy,alphatest_pars_fragment:Jy,aomap_fragment:eS,aomap_pars_fragment:tS,batching_pars_vertex:nS,batching_vertex:iS,begin_vertex:rS,beginnormal_vertex:sS,bsdfs:oS,iridescence_fragment:aS,bumpmap_pars_fragment:lS,clipping_planes_fragment:uS,clipping_planes_pars_fragment:cS,clipping_planes_pars_vertex:fS,clipping_planes_vertex:dS,color_fragment:hS,color_pars_fragment:pS,color_pars_vertex:mS,color_vertex:gS,common:_S,cube_uv_reflection_fragment:vS,defaultnormal_vertex:xS,displacementmap_pars_vertex:yS,displacementmap_vertex:SS,emissivemap_fragment:MS,emissivemap_pars_fragment:ES,colorspace_fragment:wS,colorspace_pars_fragment:TS,envmap_fragment:AS,envmap_common_pars_fragment:CS,envmap_pars_fragment:RS,envmap_pars_vertex:PS,envmap_physical_pars_fragment:zS,envmap_vertex:bS,fog_vertex:LS,fog_pars_vertex:DS,fog_fragment:IS,fog_pars_fragment:US,gradientmap_pars_fragment:NS,lightmap_pars_fragment:FS,lights_lambert_fragment:OS,lights_lambert_pars_fragment:kS,lights_pars_begin:BS,lights_toon_fragment:HS,lights_toon_pars_fragment:VS,lights_phong_fragment:GS,lights_phong_pars_fragment:WS,lights_physical_fragment:XS,lights_physical_pars_fragment:jS,lights_fragment_begin:YS,lights_fragment_maps:$S,lights_fragment_end:qS,logdepthbuf_fragment:KS,logdepthbuf_pars_fragment:ZS,logdepthbuf_pars_vertex:QS,logdepthbuf_vertex:JS,map_fragment:eM,map_pars_fragment:tM,map_particle_fragment:nM,map_particle_pars_fragment:iM,metalnessmap_fragment:rM,metalnessmap_pars_fragment:sM,morphinstance_vertex:oM,morphcolor_vertex:aM,morphnormal_vertex:lM,morphtarget_pars_vertex:uM,morphtarget_vertex:cM,normal_fragment_begin:fM,normal_fragment_maps:dM,normal_pars_fragment:hM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:_M,clearcoat_normal_fragment_maps:vM,clearcoat_pars_fragment:xM,iridescence_pars_fragment:yM,opaque_fragment:SM,packing:MM,premultiplied_alpha_fragment:EM,project_vertex:wM,dithering_fragment:TM,dithering_pars_fragment:AM,roughnessmap_fragment:CM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:PM,shadowmap_pars_vertex:bM,shadowmap_vertex:LM,shadowmask_pars_fragment:DM,skinbase_vertex:IM,skinning_pars_vertex:UM,skinning_vertex:NM,skinnormal_vertex:FM,specularmap_fragment:OM,specularmap_pars_fragment:kM,tonemapping_fragment:BM,tonemapping_pars_fragment:zM,transmission_fragment:HM,transmission_pars_fragment:VM,uv_pars_fragment:GM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:jM,background_vert:YM,background_frag:$M,backgroundCube_vert:qM,backgroundCube_frag:KM,cube_vert:ZM,cube_frag:QM,depth_vert:JM,depth_frag:eE,distanceRGBA_vert:tE,distanceRGBA_frag:nE,equirect_vert:iE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:oE,meshbasic_vert:aE,meshbasic_frag:lE,meshlambert_vert:uE,meshlambert_frag:cE,meshmatcap_vert:fE,meshmatcap_frag:dE,meshnormal_vert:hE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:_E,meshphysical_frag:vE,meshtoon_vert:xE,meshtoon_frag:yE,points_vert:SE,points_frag:ME,shadow_vert:EE,shadow_frag:wE,sprite_vert:TE,sprite_frag:AE},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Wn={basic:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ht([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ht([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ht([me.points,me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ht([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ht([me.common,me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ht([me.sprite,me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ht([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ht([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Wn.physical={uniforms:Ht([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const xa={r:0,b:0,g:0},tr=new Bn,CE=new mt;function RE(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,u,d,h=null,f=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const x=v(_);x===null?c(a,l):x&&x.isColor&&(c(x,1),g=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const x=v(g);x&&(x.isCubeTexture||x.mapping===Wl)?(d===void 0&&(d=new qt(new Er(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Ts(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),tr.copy(g.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(tr)),d.material.toneMapped=et.getTransfer(x.colorSpace)!==st,(h!==x||f!==x.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new qt(new Li(2,2),new Xi({name:"BackgroundMaterial",uniforms:Ts(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=et.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function c(_,g){_.getRGB(xa,z_(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,c(a,l)},render:y,addToRenderList:m}}function PE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,b,A,B,q){let G=!1;const j=h(B,A,b);s!==j&&(s=j,u(s.object)),G=p(S,B,A,q),G&&v(S,B,A,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(S,b,A,B),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,b,A){const B=A.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let G=q[b.id];G===void 0&&(G={},q[b.id]=G);let j=G[B];return j===void 0&&(j=f(l()),G[B]=j),j}function f(S){const b=[],A=[],B=[];for(let q=0;q<n;q++)b[q]=0,A[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:A,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,b,A,B){const q=s.attributes,G=b.attributes;let j=0;const W=A.getAttributes();for(const D in W)if(W[D].location>=0){const Q=q[D];let ne=G[D];if(ne===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function v(S,b,A,B){const q={},G=b.attributes;let j=0;const W=A.getAttributes();for(const D in W)if(W[D].location>=0){let Q=G[D];Q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),q[D]=ne,j++}s.attributes=q,s.attributesNum=j,s.index=B}function y(){const S=s.newAttributes;for(let b=0,A=S.length;b<A;b++)S[b]=0}function m(S){c(S,0)}function c(S,b){const A=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;A[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),q[S]!==b&&(t.vertexAttribDivisor(S,b),q[S]=b)}function _(){const S=s.newAttributes,b=s.enabledAttributes;for(let A=0,B=b.length;A<B;A++)b[A]!==S[A]&&(t.disableVertexAttribArray(A),b[A]=0)}function g(S,b,A,B,q,G,j){j===!0?t.vertexAttribIPointer(S,b,A,q,G):t.vertexAttribPointer(S,b,A,B,q,G)}function x(S,b,A,B){y();const q=B.attributes,G=A.getAttributes(),j=b.defaultAttributeValues;for(const W in G){const D=G[W];if(D.location>=0){let V=q[W];if(V===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const Q=V.normalized,ne=V.itemSize,ge=e.get(V);if(ge===void 0)continue;const be=ge.buffer,J=ge.type,re=ge.bytesPerElement,de=J===t.INT||J===t.UNSIGNED_INT||V.gpuType===wd;if(V.isInterleavedBufferAttribute){const he=V.data,Re=he.stride,Pe=V.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<D.locationSize;ke++)c(D.location+ke,he.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<D.locationSize;ke++)m(D.location+ke);t.bindBuffer(t.ARRAY_BUFFER,be);for(let ke=0;ke<D.locationSize;ke++)g(D.location+ke,ne/D.locationSize,J,Q,Re*re,(Pe+ne/D.locationSize*ke)*re,de)}else{if(V.isInstancedBufferAttribute){for(let he=0;he<D.locationSize;he++)c(D.location+he,V.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let he=0;he<D.locationSize;he++)m(D.location+he);t.bindBuffer(t.ARRAY_BUFFER,be);for(let he=0;he<D.locationSize;he++)g(D.location+he,ne/D.locationSize,J,Q,ne*re,ne/D.locationSize*he*re,de)}}else if(j!==void 0){const Q=j[W];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}_()}function U(){N();for(const S in i){const b=i[S];for(const A in b){const B=b[A];for(const q in B)d(B[q].object),delete B[q];delete b[A]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const A in b){const B=b[A];for(const q in B)d(B[q].object),delete B[q];delete b[A]}delete i[S.id]}function R(S){for(const b in i){const A=i[b];if(A[S.id]===void 0)continue;const B=A[S.id];for(const q in B)d(B[q].object),delete B[q];delete A[S.id]}}function N(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function bE(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v];n.update(p,i,1)}function l(u,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],d[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let v=0;for(let y=0;y<h;y++)v+=d[y];for(let y=0;y<f.length;y++)n.update(v,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Nn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const R=P===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==pi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ai&&!R)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,U=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:c,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:x,maxSamples:U}}function DE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new sr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?d(null):u();else{const _=s?0:i,g=_*4;let x=c.clippingState||null;l.value=x,x=d(v,f,g,p);for(let U=0;U!==g;++U)x[U]=n[U];c.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,v){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const c=p+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function IE(t){let e=new WeakMap;function n(o,a){return a===qc?o.mapping=Ss:a===Kc&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qc||a===Kc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Wy(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class W_ extends H_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rs=4,Ep=[.125,.215,.35,.446,.526,.582],lr=20,Wu=new W_,wp=new Ge;let Xu=null,ju=0,Yu=0,$u=!1;const or=(1+Math.sqrt(5))/2,Xr=1/or,Tp=[new X(-or,Xr,0),new X(or,Xr,0),new X(-Xr,0,or),new X(Xr,0,or),new X(0,or,-Xr),new X(0,or,Xr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,ju,Yu),this._renderer.xr.enabled=$u,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Lo,format:Nn,colorSpace:qi,depthBuffer:!1},r=Cp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(s)),this._blurMaterial=NE(s,e,n)}return r}_compileMaterial(e){const n=new qt(this._lodPlanes[0],e);this._renderer.compile(n,Wu)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(wp),d.toneMapping=Hi,d.autoClear=!1;const p=new O_({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new qt(new Er,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(wp),y=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;ya(r,_*g,c>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tp[(r-s-1)%Tp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new qt(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*lr-1),y=s/v,m=isFinite(s)?1+Math.floor(d*y):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const c=[];let _=0;for(let R=0;R<lr;++R){const N=R/y,w=Math.exp(-N*N/2);c.push(w),R===0?_+=w:R<m&&(_+=2*w)}for(let R=0;R<c.length;R++)c[R]=c[R]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=c,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const x=this._sizeLods[r],U=3*x*(r>g-rs?r-g+rs:0),P=4*(this._cubeSize-x);ya(n,U,P,3*x,2*x),l.setRenderTarget(n),l.render(h,Wu)}}function UE(t){const e=[],n=[],i=[];let r=t;const s=t-rs+1+Ep.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-rs?l=Ep[o-t+rs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,y=3,m=2,c=1,_=new Float32Array(y*v*p),g=new Float32Array(m*v*p),x=new Float32Array(c*v*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,N=P>2?0:-1,w=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];_.set(w,y*v*P),g.set(f,m*v*P);const S=[P,P,P,P,P,P];x.set(S,c*v*P)}const U=new qn;U.setAttribute("position",new $n(_,y)),U.setAttribute("uv",new $n(g,m)),U.setAttribute("faceIndex",new $n(x,c)),e.push(U),r>rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cp(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NE(t,e,n){const i=new Float32Array(lr),r=new X(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rp(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Pp(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qc||l===Kc,d=l===Ss||l===Ms;if(u||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Ap(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Ap(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function OE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let m=0,c=y.length;m<c;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const y=p[v];for(let m=0,c=y.length;m<c;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,v=h.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,x=_.length;g<x;g+=3){const U=_[g+0],P=_[g+1],R=_[g+2];f.push(U,P,P,R,R,U)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,x=_.length/3-1;g<x;g+=3){const U=g+0,P=g+1,R=g+2;f.push(U,P,P,R,R,U)}}else return;const m=new(L_(f)?B_:k_)(f,1);m.version=y;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function BE(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function d(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let c=0;c<v;c++)m+=p[c];n.update(m,i,1)}function h(f,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<f.length;c++)u(f[c]/o,p[c],y[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,v);let c=0;for(let _=0;_<v;_++)c+=p[_];for(let _=0;_<y.length;_++)n.update(c,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function zE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HE(t,e,n){const i=new WeakMap,r=new Mt;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let U=a.attributes.position.count*x,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const R=new Float32Array(U*P*4*h),N=new I_(R,U,P,h);N.type=ai,N.needsUpdate=!0;const w=x*4;for(let b=0;b<h;b++){const A=c[b],B=_[b],q=g[b],G=U*P*4*b;for(let j=0;j<A.count;j++){const W=j*w;v===!0&&(r.fromBufferAttribute(A,j),R[G+W+0]=r.x,R[G+W+1]=r.y,R[G+W+2]=r.z,R[G+W+3]=0),y===!0&&(r.fromBufferAttribute(B,j),R[G+W+4]=r.x,R[G+W+5]=r.y,R[G+W+6]=r.z,R[G+W+7]=0),m===!0&&(r.fromBufferAttribute(q,j),R[G+W+8]=r.x,R[G+W+9]=r.y,R[G+W+10]=r.z,R[G+W+11]=q.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new Ye(U,P)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function VE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class X_ extends tn{constructor(e,n,i,r,s,o,a,l,u,d=ds){if(d!==ds&&d!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ds&&(i=Sr),i===void 0&&d===ws&&(i=Es),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const j_=new tn,bp=new X_(1,1),Y_=new I_,$_=new Ry,q_=new V_,Lp=[],Dp=[],Ip=new Float32Array(16),Up=new Float32Array(9),Np=new Float32Array(4);function bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lp[r];if(s===void 0&&(s=new Float32Array(r),Lp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yl(t,e){let n=Dp[e];n===void 0&&(n=new Int32Array(e),Dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function YE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Np.set(i),t.uniformMatrix2fv(this.addr,!1,Np),Tt(n,i)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Up.set(i),t.uniformMatrix3fv(this.addr,!1,Up),Tt(n,i)}}function qE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Ip.set(i),t.uniformMatrix4fv(this.addr,!1,Ip),Tt(n,i)}}function KE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function e1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function t1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function n1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function r1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bp.compareFunction=b_,s=bp):s=j_,n.setTexture2D(e||s,r)}function s1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$_,r)}function o1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||q_,r)}function a1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Y_,r)}function l1(t){switch(t){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return jE;case 35674:return YE;case 35675:return $E;case 35676:return qE;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function u1(t,e){t.uniform1fv(this.addr,e)}function c1(t,e){const n=bs(e,this.size,2);t.uniform2fv(this.addr,n)}function f1(t,e){const n=bs(e,this.size,3);t.uniform3fv(this.addr,n)}function d1(t,e){const n=bs(e,this.size,4);t.uniform4fv(this.addr,n)}function h1(t,e){const n=bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function p1(t,e){const n=bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function m1(t,e){const n=bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function g1(t,e){t.uniform1iv(this.addr,e)}function _1(t,e){t.uniform2iv(this.addr,e)}function v1(t,e){t.uniform3iv(this.addr,e)}function x1(t,e){t.uniform4iv(this.addr,e)}function y1(t,e){t.uniform1uiv(this.addr,e)}function S1(t,e){t.uniform2uiv(this.addr,e)}function M1(t,e){t.uniform3uiv(this.addr,e)}function E1(t,e){t.uniform4uiv(this.addr,e)}function w1(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||j_,s[o])}function T1(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||$_,s[o])}function A1(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||q_,s[o])}function C1(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Y_,s[o])}function R1(t){switch(t){case 5126:return u1;case 35664:return c1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return C1}}class P1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=l1(n.type)}}class b1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R1(n.type)}}class L1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function Fp(t,e){t.seq.push(e),t.map[e.id]=e}function D1(t,e,n){const i=t.name,r=i.length;for(qu.lastIndex=0;;){const s=qu.exec(i),o=qu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Fp(n,u===void 0?new P1(a,t,e):new b1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new L1(a),Fp(n,h)),n=h}}}class Ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);D1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Op(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const I1=37297;let U1=0;function N1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function F1(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Sl&&n===yl?i="LinearDisplayP3ToLinearSRGB":e===yl&&n===Sl&&(i="LinearSRGBToLinearDisplayP3"),t){case qi:case Xl:return[i,"LinearTransferOETF"];case Gn:case Ld:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+N1(t.getShaderSource(e),o)}else return r}function O1(t,e){const n=F1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function k1(t,e){let n;switch(e){case ny:n="Linear";break;case iy:n="Reinhard";break;case ry:n="Cineon";break;case sy:n="ACESFilmic";break;case ay:n="AgX";break;case ly:n="Neutral";break;case oy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sa=new X;function B1(){et.getLuminanceCoefficients(Sa);const t=Sa.x.toFixed(4),e=Sa.y.toFixed(4),n=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function H1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function V1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ks(t){return t!==""}function Bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(t){return t.replace(G1,X1)}const W1=new Map;function X1(t,e){let n=He[e];if(n===void 0){const i=W1.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cf(n)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(t){return t.replace(j1,Y1)}function Y1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===__?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function q1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Z1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case ey:e="ENVMAP_BLENDING_MIX";break;case ty:e="ENVMAP_BLENDING_ADD";break}return e}function Q1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function J1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$1(n),u=q1(n),d=K1(n),h=Z1(n),f=Q1(n),p=z1(n),v=H1(s),y=r.createProgram();let m,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ks).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ks).join(`
`),c.length>0&&(c+=`
`)):(m=[Vp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),c=[Vp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?He.tonemapping_pars_fragment:"",n.toneMapping!==Hi?k1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,O1("linearToOutputTexel",n.outputColorSpace),B1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Cf(o),o=Bp(o,n),o=zp(o,n),a=Cf(a),a=Bp(a,n),a=zp(a,n),o=Hp(o),a=Hp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+m+o,x=_+c+a,U=Op(r,r.VERTEX_SHADER,g),P=Op(r,r.FRAGMENT_SHADER,x);r.attachShader(y,U),r.attachShader(y,P),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(b){if(t.debug.checkShaderErrors){const A=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(U).trim(),q=r.getShaderInfoLog(P).trim();let G=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,U,P);else{const W=kp(r,U,"vertex"),D=kp(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+A+`
`+W+`
`+D)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(B===""||q==="")&&(j=!1);j&&(b.diagnostics={runnable:G,programLog:A,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:c}})}r.deleteShader(U),r.deleteShader(P),N=new Ya(r,y),w=V1(r,y)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,I1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=P,this}let ew=0;class tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nw(e),n.set(e,i)),i}}class nw{constructor(e){this.id=ew++,this.code=e,this.usedTimes=0}}function iw(t,e,n,i,r,s,o){const a=new N_,l=new tw,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,S,b,A,B){const q=A.fog,G=B.geometry,j=w.isMeshStandardMaterial?A.environment:null,W=(w.isMeshStandardMaterial?n:e).get(w.envMap||j),D=W&&W.mapping===Wl?W.image.height:null,V=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=Q!==void 0?Q.length:0;let ge=0;G.morphAttributes.position!==void 0&&(ge=1),G.morphAttributes.normal!==void 0&&(ge=2),G.morphAttributes.color!==void 0&&(ge=3);let be,J,re,de;if(V){const Ke=Wn[V];be=Ke.vertexShader,J=Ke.fragmentShader}else be=w.vertexShader,J=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),de=l.getFragmentShaderID(w);const he=t.getRenderTarget(),Re=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,ke=!!w.map,ce=!!w.matcap,I=!!W,ze=!!w.aoMap,Ne=!!w.lightMap,we=!!w.bumpMap,pe=!!w.normalMap,nt=!!w.displacementMap,Se=!!w.emissiveMap,Ie=!!w.metalnessMap,L=!!w.roughnessMap,M=w.anisotropy>0,Y=w.clearcoat>0,O=w.dispersion>0,T=w.iridescence>0,C=w.sheen>0,ee=w.transmission>0,Z=M&&!!w.anisotropyMap,ae=Y&&!!w.clearcoatMap,Be=Y&&!!w.clearcoatNormalMap,oe=Y&&!!w.clearcoatRoughnessMap,ve=T&&!!w.iridescenceMap,je=T&&!!w.iridescenceThicknessMap,Fe=C&&!!w.sheenColorMap,ye=C&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,We=!!w.specularColorMap,lt=!!w.specularIntensityMap,F=ee&&!!w.transmissionMap,le=ee&&!!w.thicknessMap,te=!!w.gradientMap,ie=!!w.alphaMap,fe=w.alphaTest>0,Le=!!w.alphaHash,$e=!!w.extensions;let _t=Hi;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Pt={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:J,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:qi,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:ce,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:D,aoMap:ze,lightMap:Ne,bumpMap:we,normalMap:pe,displacementMap:f&&nt,emissiveMap:Se,normalMapObjectSpace:pe&&w.normalMapType===dy,normalMapTangentSpace:pe&&w.normalMapType===bd,metalnessMap:Ie,roughnessMap:L,anisotropy:M,anisotropyMap:Z,clearcoat:Y,clearcoatMap:ae,clearcoatNormalMap:Be,clearcoatRoughnessMap:oe,dispersion:O,iridescence:T,iridescenceMap:ve,iridescenceThicknessMap:je,sheen:C,sheenColorMap:Fe,sheenRoughnessMap:ye,specularMap:Oe,specularColorMap:We,specularIntensityMap:lt,transmission:ee,transmissionMap:F,thicknessMap:le,gradientMap:te,opaque:w.transparent===!1&&w.blending===fs&&w.alphaToCoverage===!1,alphaMap:ie,alphaTest:fe,alphaHash:Le,combine:w.combine,mapUv:ke&&y(w.map.channel),aoMapUv:ze&&y(w.aoMap.channel),lightMapUv:Ne&&y(w.lightMap.channel),bumpMapUv:we&&y(w.bumpMap.channel),normalMapUv:pe&&y(w.normalMap.channel),displacementMapUv:nt&&y(w.displacementMap.channel),emissiveMapUv:Se&&y(w.emissiveMap.channel),metalnessMapUv:Ie&&y(w.metalnessMap.channel),roughnessMapUv:L&&y(w.roughnessMap.channel),anisotropyMapUv:Z&&y(w.anisotropyMap.channel),clearcoatMapUv:ae&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:je&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&y(w.sheenRoughnessMap.channel),specularMapUv:Oe&&y(w.specularMap.channel),specularColorMapUv:We&&y(w.specularColorMap.channel),specularIntensityMapUv:lt&&y(w.specularIntensityMap.channel),transmissionMapUv:F&&y(w.transmissionMap.channel),thicknessMapUv:le&&y(w.thicknessMap.channel),alphaMapUv:ie&&y(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(pe||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(ke||ie),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&et.getTransfer(w.map.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Dn,flipSided:w.side===en,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$e&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=u.has(1),Pt.vertexUv2s=u.has(2),Pt.vertexUv3s=u.has(3),u.clear(),Pt}function c(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const b in w.defines)S.push(b),S.push(w.defines[b]);return w.isRawShaderMaterial===!1&&(_(S,w),g(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function g(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function x(w){const S=v[w.type];let b;if(S){const A=Wn[S];b=zy.clone(A.uniforms)}else b=w.uniforms;return b}function U(w,S){let b;for(let A=0,B=d.length;A<B;A++){const q=d[A];if(q.cacheKey===S){b=q,++b.usedTimes;break}}return b===void 0&&(b=new J1(t,S,w,s),d.push(b)),b}function P(w){if(--w.usedTimes===0){const S=d.indexOf(w);d[S]=d[d.length-1],d.pop(),w.destroy()}}function R(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:x,acquireProgram:U,releaseProgram:P,releaseShaderCache:R,programs:d,dispose:N}}function rw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,v,y,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:y,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=f,c.material=p,c.groupOrder=v,c.renderOrder=h.renderOrder,c.z=y,c.group=m),e++,c}function a(h,f,p,v,y,m){const c=o(h,f,p,v,y,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,f,p,v,y,m){const c=o(h,f,p,v,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,f){n.length>1&&n.sort(h||sw),i.length>1&&i.sort(f||Gp),r.length>1&&r.sort(f||Gp)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function ow(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wp,t.set(i,[o])):r>=s.length?(o=new Wp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ge};break;case"SpotLight":n={position:new X,direction:new X,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uw=0;function cw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fw(t){const e=new aw,n=lw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new mt,o=new mt;function a(u){let d=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,y=0,m=0,c=0,_=0,g=0,x=0,U=0,P=0,R=0;u.sort(cw);for(let w=0,S=u.length;w<S;w++){const b=u[w],A=b.color,B=b.intensity,q=b.distance,G=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=A.r*B,h+=A.g*B,f+=A.b*B;else if(b.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(b.sh.coefficients[j],B);R++}else if(b.isDirectionalLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const W=b.shadow,D=n.get(b);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=b.shadow.matrix,_++}i.directional[p]=j,p++}else if(b.isSpotLight){const j=e.get(b);j.position.setFromMatrixPosition(b.matrixWorld),j.color.copy(A).multiplyScalar(B),j.distance=q,j.coneCos=Math.cos(b.angle),j.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),j.decay=b.decay,i.spot[y]=j;const W=b.shadow;if(b.map&&(i.spotLightMap[U]=b.map,U++,W.updateMatrices(b),b.castShadow&&P++),i.spotLightMatrix[y]=W.matrix,b.castShadow){const D=n.get(b);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=G,x++}y++}else if(b.isRectAreaLight){const j=e.get(b);j.color.copy(A).multiplyScalar(B),j.halfWidth.set(b.width*.5,0,0),j.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=j,m++}else if(b.isPointLight){const j=e.get(b);if(j.color.copy(b.color).multiplyScalar(b.intensity),j.distance=b.distance,j.decay=b.decay,b.castShadow){const W=b.shadow,D=n.get(b);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,D.shadowCameraNear=W.camera.near,D.shadowCameraFar=W.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=b.shadow.matrix,g++}i.point[v]=j,v++}else if(b.isHemisphereLight){const j=e.get(b);j.skyColor.copy(b.color).multiplyScalar(B),j.groundColor.copy(b.groundColor).multiplyScalar(B),i.hemi[c]=j,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==v||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==c||N.numDirectionalShadows!==_||N.numPointShadows!==g||N.numSpotShadows!==x||N.numSpotMaps!==U||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.directionalLength=p,N.pointLength=v,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=c,N.numDirectionalShadows=_,N.numPointShadows=g,N.numSpotShadows=x,N.numSpotMaps=U,N.numLightProbes=R,i.version=uw++)}function l(u,d){let h=0,f=0,p=0,v=0,y=0;const m=d.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(g.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Xp(t){const e=new fw(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Xp(t),e.set(r,[a])):s>=o.length?(a=new Xp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class hw extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pw extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _w(t,e,n){let i=new Dd;const r=new Ye,s=new Ye,o=new Mt,a=new hw({depthPacking:fy}),l=new pw,u={},d=n.maxTextureSize,h={[Wi]:en,[en]:Wi,[Dn]:Dn},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:mw,fragmentShader:gw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new qn;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new qt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let c=this.type;this.render=function(P,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.state;A.setBlending(zi),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const B=c!==ni&&this.type===ni,q=c===ni&&this.type!==ni;for(let G=0,j=P.length;G<j;G++){const W=P[G],D=W.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const V=D.getFrameExtents();if(r.multiply(V),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/V.x),r.x=s.x*V.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/V.y),r.y=s.y*V.y,D.mapSize.y=s.y)),D.map===null||B===!0||q===!0){const ne=this.type!==ni?{minFilter:xn,magFilter:xn}:{};D.map!==null&&D.map.dispose(),D.map=new Mr(r.x,r.y,ne),D.map.texture.name=W.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let ne=0;ne<Q;ne++){const ge=D.getViewport(ne);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),A.viewport(o),D.updateMatrices(W,ne),i=D.getFrustum(),x(R,N,D.camera,W,this.type)}D.isPointLightShadow!==!0&&this.type===ni&&_(D,N),D.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,b)};function _(P,R){const N=e.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Mr(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(R,null,N,f,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(R,null,N,p,y,null)}function g(P,R,N,w){let S=null;const b=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)S=b;else if(S=N.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const A=S.uuid,B=R.uuid;let q=u[A];q===void 0&&(q={},u[A]=q);let G=q[B];G===void 0&&(G=S.clone(),q[B]=G,R.addEventListener("dispose",U)),S=G}if(S.visible=R.visible,S.wireframe=R.wireframe,w===ni?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const A=t.properties.get(S);A.light=N}return S}function x(P,R,N,w,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ni)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const B=e.update(P),q=P.material;if(Array.isArray(q)){const G=B.groups;for(let j=0,W=G.length;j<W;j++){const D=G[j],V=q[D.materialIndex];if(V&&V.visible){const Q=g(P,V,w,S);P.onBeforeShadow(t,P,R,N,B,Q,D),t.renderBufferDirect(N,null,B,Q,P,D),P.onAfterShadow(t,P,R,N,B,Q,D)}}}else if(q.visible){const G=g(P,q,w,S);P.onBeforeShadow(t,P,R,N,B,G,null),t.renderBufferDirect(N,null,B,G,P,null),P.onAfterShadow(t,P,R,N,B,G,null)}}const A=P.children;for(let B=0,q=A.length;B<q;B++)x(A[B],R,N,w,S)}function U(P){P.target.removeEventListener("dispose",U);for(const N in u){const w=u[N],S=P.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function vw(t){function e(){let F=!1;const le=new Mt;let te=null;const ie=new Mt(0,0,0,0);return{setMask:function(fe){te!==fe&&!F&&(t.colorMask(fe,fe,fe,fe),te=fe)},setLocked:function(fe){F=fe},setClear:function(fe,Le,$e,_t,Pt){Pt===!0&&(fe*=_t,Le*=_t,$e*=_t),le.set(fe,Le,$e,_t),ie.equals(le)===!1&&(t.clearColor(fe,Le,$e,_t),ie.copy(le))},reset:function(){F=!1,te=null,ie.set(-1,0,0,0)}}}function n(){let F=!1,le=null,te=null,ie=null;return{setTest:function(fe){fe?de(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(fe){le!==fe&&!F&&(t.depthMask(fe),le=fe)},setFunc:function(fe){if(te!==fe){switch(fe){case Yx:t.depthFunc(t.NEVER);break;case $x:t.depthFunc(t.ALWAYS);break;case qx:t.depthFunc(t.LESS);break;case vl:t.depthFunc(t.LEQUAL);break;case Kx:t.depthFunc(t.EQUAL);break;case Zx:t.depthFunc(t.GEQUAL);break;case Qx:t.depthFunc(t.GREATER);break;case Jx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=fe}},setLocked:function(fe){F=fe},setClear:function(fe){ie!==fe&&(t.clearDepth(fe),ie=fe)},reset:function(){F=!1,le=null,te=null,ie=null}}}function i(){let F=!1,le=null,te=null,ie=null,fe=null,Le=null,$e=null,_t=null,Pt=null;return{setTest:function(Ke){F||(Ke?de(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!F&&(t.stencilMask(Ke),le=Ke)},setFunc:function(Ke,Kn,zn){(te!==Ke||ie!==Kn||fe!==zn)&&(t.stencilFunc(Ke,Kn,zn),te=Ke,ie=Kn,fe=zn)},setOp:function(Ke,Kn,zn){(Le!==Ke||$e!==Kn||_t!==zn)&&(t.stencilOp(Ke,Kn,zn),Le=Ke,$e=Kn,_t=zn)},setLocked:function(Ke){F=Ke},setClear:function(Ke){Pt!==Ke&&(t.clearStencil(Ke),Pt=Ke)},reset:function(){F=!1,le=null,te=null,ie=null,fe=null,Le=null,$e=null,_t=null,Pt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,v=!1,y=null,m=null,c=null,_=null,g=null,x=null,U=null,P=new Ge(0,0,0),R=0,N=!1,w=null,S=null,b=null,A=null,B=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=j>=2);let D=null,V={};const Q=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ge=new Mt().fromArray(Q),be=new Mt().fromArray(ne);function J(F,le,te,ie){const fe=new Uint8Array(4),Le=t.createTexture();t.bindTexture(F,Le),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<te;$e++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(le+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Le}const re={};re[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(vl),we(!1),pe(Zh),de(t.CULL_FACE),ze(zi);function de(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function he(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Re(F,le){return d[F]!==le?(t.bindFramebuffer(F,le),d[F]=le,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(F,le){let te=f,ie=!1;if(F){te=h.get(le),te===void 0&&(te=[],h.set(le,te));const fe=F.textures;if(te.length!==fe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Le=0,$e=fe.length;Le<$e;Le++)te[Le]=t.COLOR_ATTACHMENT0+Le;te.length=fe.length,ie=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,ie=!0);ie&&t.drawBuffers(te)}function ke(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const ce={[ar]:t.FUNC_ADD,[bx]:t.FUNC_SUBTRACT,[Lx]:t.FUNC_REVERSE_SUBTRACT};ce[Dx]=t.MIN,ce[Ix]=t.MAX;const I={[Ux]:t.ZERO,[Nx]:t.ONE,[Fx]:t.SRC_COLOR,[Yc]:t.SRC_ALPHA,[Vx]:t.SRC_ALPHA_SATURATE,[zx]:t.DST_COLOR,[kx]:t.DST_ALPHA,[Ox]:t.ONE_MINUS_SRC_COLOR,[$c]:t.ONE_MINUS_SRC_ALPHA,[Hx]:t.ONE_MINUS_DST_COLOR,[Bx]:t.ONE_MINUS_DST_ALPHA,[Gx]:t.CONSTANT_COLOR,[Wx]:t.ONE_MINUS_CONSTANT_COLOR,[Xx]:t.CONSTANT_ALPHA,[jx]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(F,le,te,ie,fe,Le,$e,_t,Pt,Ke){if(F===zi){v===!0&&(he(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),F!==Px){if(F!==y||Ke!==N){if((m!==ar||g!==ar)&&(t.blendEquation(t.FUNC_ADD),m=ar,g=ar),Ke)switch(F){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qh:t.blendFunc(t.ONE,t.ONE);break;case Jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}c=null,_=null,x=null,U=null,P.set(0,0,0),R=0,y=F,N=Ke}return}fe=fe||le,Le=Le||te,$e=$e||ie,(le!==m||fe!==g)&&(t.blendEquationSeparate(ce[le],ce[fe]),m=le,g=fe),(te!==c||ie!==_||Le!==x||$e!==U)&&(t.blendFuncSeparate(I[te],I[ie],I[Le],I[$e]),c=te,_=ie,x=Le,U=$e),(_t.equals(P)===!1||Pt!==R)&&(t.blendColor(_t.r,_t.g,_t.b,Pt),P.copy(_t),R=Pt),y=F,N=!1}function Ne(F,le){F.side===Dn?he(t.CULL_FACE):de(t.CULL_FACE);let te=F.side===en;le&&(te=!te),we(te),F.blending===fs&&F.transparent===!1?ze(zi):ze(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ie=F.stencilWrite;o.setTest(ie),ie&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(F){w!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),w=F)}function pe(F){F!==Cx?(de(t.CULL_FACE),F!==S&&(F===Zh?t.cullFace(t.BACK):F===Rx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),S=F}function nt(F){F!==b&&(G&&t.lineWidth(F),b=F)}function Se(F,le,te){F?(de(t.POLYGON_OFFSET_FILL),(A!==le||B!==te)&&(t.polygonOffset(le,te),A=le,B=te)):he(t.POLYGON_OFFSET_FILL)}function Ie(F){F?de(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function L(F){F===void 0&&(F=t.TEXTURE0+q-1),D!==F&&(t.activeTexture(F),D=F)}function M(F,le,te){te===void 0&&(D===null?te=t.TEXTURE0+q-1:te=D);let ie=V[te];ie===void 0&&(ie={type:void 0,texture:void 0},V[te]=ie),(ie.type!==F||ie.texture!==le)&&(D!==te&&(t.activeTexture(te),D=te),t.bindTexture(F,le||re[F]),ie.type=F,ie.texture=le)}function Y(){const F=V[D];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function O(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function T(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function C(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(F){ge.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ge.copy(F))}function ye(F){be.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),be.copy(F))}function Oe(F,le){let te=l.get(le);te===void 0&&(te=new WeakMap,l.set(le,te));let ie=te.get(F);ie===void 0&&(ie=t.getUniformBlockIndex(le,F.name),te.set(F,ie))}function We(F,le){const ie=l.get(le).get(F);a.get(le)!==ie&&(t.uniformBlockBinding(le,ie,F.__bindingPointIndex),a.set(le,ie))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,V={},d={},h=new WeakMap,f=[],p=null,v=!1,y=null,m=null,c=null,_=null,g=null,x=null,U=null,P=new Ge(0,0,0),R=0,N=!1,w=null,S=null,b=null,A=null,B=null,ge.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:he,bindFramebuffer:Re,drawBuffers:Pe,useProgram:ke,setBlending:ze,setMaterial:Ne,setFlipSided:we,setCullFace:pe,setLineWidth:nt,setPolygonOffset:Se,setScissorTest:Ie,activeTexture:L,bindTexture:M,unbindTexture:Y,compressedTexImage2D:O,compressedTexImage3D:T,texImage2D:ve,texImage3D:je,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:Be,texStorage3D:oe,texSubImage2D:C,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:ae,scissor:Fe,viewport:ye,reset:lt}}function jp(t,e,n,i){const r=xw(i);switch(n){case E_:return t*e;case T_:return t*e;case A_:return t*e*2;case C_:return t*e/r.components*r.byteLength;case Cd:return t*e/r.components*r.byteLength;case R_:return t*e*2/r.components*r.byteLength;case Rd:return t*e*2/r.components*r.byteLength;case w_:return t*e*3/r.components*r.byteLength;case Nn:return t*e*4/r.components*r.byteLength;case Pd:return t*e*4/r.components*r.byteLength;case Ha:case Va:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:case nf:return Math.max(t,16)*Math.max(e,8)/4;case Jc:case tf:return Math.max(t,8)*Math.max(e,8)/2;case rf:case sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xa:case Sf:case Mf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case P_:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wf:case Tf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xw(t){switch(t){case pi:case y_:return{byteLength:1,components:1};case To:case S_:case Lo:return{byteLength:2,components:1};case Td:case Ad:return{byteLength:2,components:4};case Sr:case wd:case ai:return{byteLength:4,components:1};case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function yw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,M){return p?new OffscreenCanvas(L,M):El("canvas")}function y(L,M,Y){let O=1;const T=Ie(L);if((T.width>Y||T.height>Y)&&(O=Y/Math.max(T.width,T.height)),O<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const C=Math.floor(O*T.width),ee=Math.floor(O*T.height);h===void 0&&(h=v(C,ee));const Z=M?v(C,ee):h;return Z.width=C,Z.height=ee,Z.getContext("2d").drawImage(L,0,0,C,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+C+"x"+ee+")."),Z}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==xn&&L.minFilter!==In}function c(L){t.generateMipmap(L)}function _(L,M,Y,O,T=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let C=M;if(M===t.RED&&(Y===t.FLOAT&&(C=t.R32F),Y===t.HALF_FLOAT&&(C=t.R16F),Y===t.UNSIGNED_BYTE&&(C=t.R8)),M===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(C=t.R8UI),Y===t.UNSIGNED_SHORT&&(C=t.R16UI),Y===t.UNSIGNED_INT&&(C=t.R32UI),Y===t.BYTE&&(C=t.R8I),Y===t.SHORT&&(C=t.R16I),Y===t.INT&&(C=t.R32I)),M===t.RG&&(Y===t.FLOAT&&(C=t.RG32F),Y===t.HALF_FLOAT&&(C=t.RG16F),Y===t.UNSIGNED_BYTE&&(C=t.RG8)),M===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(C=t.RG8UI),Y===t.UNSIGNED_SHORT&&(C=t.RG16UI),Y===t.UNSIGNED_INT&&(C=t.RG32UI),Y===t.BYTE&&(C=t.RG8I),Y===t.SHORT&&(C=t.RG16I),Y===t.INT&&(C=t.RG32I)),M===t.RGB&&Y===t.UNSIGNED_INT_5_9_9_9_REV&&(C=t.RGB9_E5),M===t.RGBA){const ee=T?xl:et.getTransfer(O);Y===t.FLOAT&&(C=t.RGBA32F),Y===t.HALF_FLOAT&&(C=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(C=ee===st?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(C=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(C=t.RGB5_A1)}return(C===t.R16F||C===t.R32F||C===t.RG16F||C===t.RG32F||C===t.RGBA16F||C===t.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function g(L,M){let Y;return L?M===null||M===Sr||M===Es?Y=t.DEPTH24_STENCIL8:M===ai?Y=t.DEPTH32F_STENCIL8:M===To&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Sr||M===Es?Y=t.DEPTH_COMPONENT24:M===ai?Y=t.DEPTH_COMPONENT32F:M===To&&(Y=t.DEPTH_COMPONENT16),Y}function x(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function U(L){const M=L.target;M.removeEventListener("dispose",U),R(M),M.isVideoTexture&&d.delete(M)}function P(L){const M=L.target;M.removeEventListener("dispose",P),w(M)}function R(L){const M=i.get(L);if(M.__webglInit===void 0)return;const Y=L.source,O=f.get(Y);if(O){const T=O[M.__cacheKey];T.usedTimes--,T.usedTimes===0&&N(L),Object.keys(O).length===0&&f.delete(Y)}i.remove(L)}function N(L){const M=i.get(L);t.deleteTexture(M.__webglTexture);const Y=L.source,O=f.get(Y);delete O[M.__cacheKey],o.memory.textures--}function w(L){const M=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(M.__webglFramebuffer[O]))for(let T=0;T<M.__webglFramebuffer[O].length;T++)t.deleteFramebuffer(M.__webglFramebuffer[O][T]);else t.deleteFramebuffer(M.__webglFramebuffer[O]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[O])}else{if(Array.isArray(M.__webglFramebuffer))for(let O=0;O<M.__webglFramebuffer.length;O++)t.deleteFramebuffer(M.__webglFramebuffer[O]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let O=0;O<M.__webglColorRenderbuffer.length;O++)M.__webglColorRenderbuffer[O]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[O]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=L.textures;for(let O=0,T=Y.length;O<T;O++){const C=i.get(Y[O]);C.__webglTexture&&(t.deleteTexture(C.__webglTexture),o.memory.textures--),i.remove(Y[O])}i.remove(L)}let S=0;function b(){S=0}function A(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function B(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function q(L,M){const Y=i.get(L);if(L.isVideoTexture&&nt(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const O=L.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(Y,L,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function G(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){be(Y,L,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function j(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){be(Y,L,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function W(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){J(Y,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const D={[Zc]:t.REPEAT,[dr]:t.CLAMP_TO_EDGE,[Qc]:t.MIRRORED_REPEAT},V={[xn]:t.NEAREST,[uy]:t.NEAREST_MIPMAP_NEAREST,[ea]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[wu]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},Q={[hy]:t.NEVER,[xy]:t.ALWAYS,[py]:t.LESS,[b_]:t.LEQUAL,[my]:t.EQUAL,[vy]:t.GEQUAL,[gy]:t.GREATER,[_y]:t.NOTEQUAL};function ne(L,M){if(M.type===ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===wu||M.magFilter===ea||M.magFilter===hr||M.minFilter===In||M.minFilter===wu||M.minFilter===ea||M.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,D[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,V[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,V[M.minFilter]),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xn||M.minFilter!==ea&&M.minFilter!==hr||M.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(L,M){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",U));const O=M.source;let T=f.get(O);T===void 0&&(T={},f.set(O,T));const C=B(M);if(C!==L.__cacheKey){T[C]===void 0&&(T[C]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),T[C].usedTimes++;const ee=T[L.__cacheKey];ee!==void 0&&(T[L.__cacheKey].usedTimes--,ee.usedTimes===0&&N(M)),L.__cacheKey=C,L.__webglTexture=T[C].texture}return Y}function be(L,M,Y){let O=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(O=t.TEXTURE_3D);const T=ge(L,M),C=M.source;n.bindTexture(O,L.__webglTexture,t.TEXTURE0+Y);const ee=i.get(C);if(C.version!==ee.__version||T===!0){n.activeTexture(t.TEXTURE0+Y);const Z=et.getPrimaries(et.workingColorSpace),ae=M.colorSpace===Ri?null:et.getPrimaries(M.colorSpace),Be=M.colorSpace===Ri||Z===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let oe=y(M.image,!1,r.maxTextureSize);oe=Se(M,oe);const ve=s.convert(M.format,M.colorSpace),je=s.convert(M.type);let Fe=_(M.internalFormat,ve,je,M.colorSpace,M.isVideoTexture);ne(O,M);let ye;const Oe=M.mipmaps,We=M.isVideoTexture!==!0,lt=ee.__version===void 0||T===!0,F=C.dataReady,le=x(M,oe);if(M.isDepthTexture)Fe=g(M.format===ws,M.type),lt&&(We?n.texStorage2D(t.TEXTURE_2D,1,Fe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ve,je,null));else if(M.isDataTexture)if(Oe.length>0){We&&lt&&n.texStorage2D(t.TEXTURE_2D,le,Fe,Oe[0].width,Oe[0].height);for(let te=0,ie=Oe.length;te<ie;te++)ye=Oe[te],We?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ye.width,ye.height,ve,je,ye.data):n.texImage2D(t.TEXTURE_2D,te,Fe,ye.width,ye.height,0,ve,je,ye.data);M.generateMipmaps=!1}else We?(lt&&n.texStorage2D(t.TEXTURE_2D,le,Fe,oe.width,oe.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ve,je,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,oe.width,oe.height,0,ve,je,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Fe,Oe[0].width,Oe[0].height,oe.depth);for(let te=0,ie=Oe.length;te<ie;te++)if(ye=Oe[te],M.format!==Nn)if(ve!==null)if(We){if(F)if(M.layerUpdates.size>0){const fe=jp(ye.width,ye.height,M.format,M.type);for(const Le of M.layerUpdates){const $e=ye.data.subarray(Le*fe/ye.data.BYTES_PER_ELEMENT,(Le+1)*fe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Le,ye.width,ye.height,1,ve,$e,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,oe.depth,ve,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Fe,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,oe.depth,ve,je,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Fe,ye.width,ye.height,oe.depth,0,ve,je,ye.data)}else{We&&lt&&n.texStorage2D(t.TEXTURE_2D,le,Fe,Oe[0].width,Oe[0].height);for(let te=0,ie=Oe.length;te<ie;te++)ye=Oe[te],M.format!==Nn?ve!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ye.width,ye.height,ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ye.width,ye.height,ve,je,ye.data):n.texImage2D(t.TEXTURE_2D,te,Fe,ye.width,ye.height,0,ve,je,ye.data)}else if(M.isDataArrayTexture)if(We){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Fe,oe.width,oe.height,oe.depth),F)if(M.layerUpdates.size>0){const te=jp(oe.width,oe.height,M.format,M.type);for(const ie of M.layerUpdates){const fe=oe.data.subarray(ie*te/oe.data.BYTES_PER_ELEMENT,(ie+1)*te/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,ve,je,fe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,je,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,ve,je,oe.data);else if(M.isData3DTexture)We?(lt&&n.texStorage3D(t.TEXTURE_3D,le,Fe,oe.width,oe.height,oe.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,je,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,ve,je,oe.data);else if(M.isFramebufferTexture){if(lt)if(We)n.texStorage2D(t.TEXTURE_2D,le,Fe,oe.width,oe.height);else{let te=oe.width,ie=oe.height;for(let fe=0;fe<le;fe++)n.texImage2D(t.TEXTURE_2D,fe,Fe,te,ie,0,ve,je,null),te>>=1,ie>>=1}}else if(Oe.length>0){if(We&&lt){const te=Ie(Oe[0]);n.texStorage2D(t.TEXTURE_2D,le,Fe,te.width,te.height)}for(let te=0,ie=Oe.length;te<ie;te++)ye=Oe[te],We?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ve,je,ye):n.texImage2D(t.TEXTURE_2D,te,Fe,ve,je,ye);M.generateMipmaps=!1}else if(We){if(lt){const te=Ie(oe);n.texStorage2D(t.TEXTURE_2D,le,Fe,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,je,oe)}else n.texImage2D(t.TEXTURE_2D,0,Fe,ve,je,oe);m(M)&&c(O),ee.__version=C.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function J(L,M,Y){if(M.image.length!==6)return;const O=ge(L,M),T=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Y);const C=i.get(T);if(T.version!==C.__version||O===!0){n.activeTexture(t.TEXTURE0+Y);const ee=et.getPrimaries(et.workingColorSpace),Z=M.colorSpace===Ri?null:et.getPrimaries(M.colorSpace),ae=M.colorSpace===Ri||ee===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let ie=0;ie<6;ie++)!Be&&!oe?ve[ie]=y(M.image[ie],!0,r.maxCubemapSize):ve[ie]=oe?M.image[ie].image:M.image[ie],ve[ie]=Se(M,ve[ie]);const je=ve[0],Fe=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),Oe=_(M.internalFormat,Fe,ye,M.colorSpace),We=M.isVideoTexture!==!0,lt=C.__version===void 0||O===!0,F=T.dataReady;let le=x(M,je);ne(t.TEXTURE_CUBE_MAP,M);let te;if(Be){We&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Oe,je.width,je.height);for(let ie=0;ie<6;ie++){te=ve[ie].mipmaps;for(let fe=0;fe<te.length;fe++){const Le=te[fe];M.format!==Nn?Fe!==null?We?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,0,0,Le.width,Le.height,Fe,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,Oe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,0,0,Le.width,Le.height,Fe,ye,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,Oe,Le.width,Le.height,0,Fe,ye,Le.data)}}}else{if(te=M.mipmaps,We&&lt){te.length>0&&le++;const ie=Ie(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve[ie].width,ve[ie].height,Fe,ye,ve[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,ve[ie].width,ve[ie].height,0,Fe,ye,ve[ie].data);for(let fe=0;fe<te.length;fe++){const $e=te[fe].image[ie].image;We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,0,0,$e.width,$e.height,Fe,ye,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,Oe,$e.width,$e.height,0,Fe,ye,$e.data)}}else{We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Fe,ye,ve[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Fe,ye,ve[ie]);for(let fe=0;fe<te.length;fe++){const Le=te[fe];We?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,0,0,Fe,ye,Le.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,Oe,Fe,ye,Le.image[ie])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),C.__version=T.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function re(L,M,Y,O,T,C){const ee=s.convert(Y.format,Y.colorSpace),Z=s.convert(Y.type),ae=_(Y.internalFormat,ee,Z,Y.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>C),ve=Math.max(1,M.height>>C);T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY?n.texImage3D(T,C,ae,oe,ve,M.depth,0,ee,Z,null):n.texImage2D(T,C,ae,oe,ve,0,ee,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),pe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,T,i.get(Y).__webglTexture,0,we(M)):(T===t.TEXTURE_2D||T>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,T,i.get(Y).__webglTexture,C),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(L,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer){const O=M.depthTexture,T=O&&O.isDepthTexture?O.type:null,C=g(M.stencilBuffer,T),ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=we(M);pe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,C,M.width,M.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,C,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,C,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,L)}else{const O=M.textures;for(let T=0;T<O.length;T++){const C=O[T],ee=s.convert(C.format,C.colorSpace),Z=s.convert(C.type),ae=_(C.internalFormat,ee,Z,C.colorSpace),Be=we(M);Y&&pe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ae,M.width,M.height):pe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const O=i.get(M.depthTexture).__webglTexture,T=we(M);if(M.depthTexture.format===ds)pe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0,T):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else if(M.depthTexture.format===ws)pe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0,T):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Re(L){const M=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const O=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),O){const T=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,O.removeEventListener("dispose",T)};O.addEventListener("dispose",T),M.__depthDisposeCallback=T}M.__boundDepthTexture=O}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,L)}else if(Y){M.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[O]),M.__webglDepthbuffer[O]===void 0)M.__webglDepthbuffer[O]=t.createRenderbuffer(),de(M.__webglDepthbuffer[O],L,!1);else{const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,C=M.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,C),t.framebufferRenderbuffer(t.FRAMEBUFFER,T,t.RENDERBUFFER,C)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,L,!1);else{const O=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,T=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,T),t.framebufferRenderbuffer(t.FRAMEBUFFER,O,t.RENDERBUFFER,T)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(L,M,Y){const O=i.get(L);M!==void 0&&re(O.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Re(L)}function ke(L){const M=L.texture,Y=i.get(L),O=i.get(M);L.addEventListener("dispose",P);const T=L.textures,C=L.isWebGLCubeRenderTarget===!0,ee=T.length>1;if(ee||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=M.version,o.memory.textures++),C){Y.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[Z]=[];for(let ae=0;ae<M.mipmaps.length;ae++)Y.__webglFramebuffer[Z][ae]=t.createFramebuffer()}else Y.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)Y.__webglFramebuffer[Z]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(ee)for(let Z=0,ae=T.length;Z<ae;Z++){const Be=i.get(T[Z]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&pe(L)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<T.length;Z++){const ae=T[Z];Y.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Z]);const Be=s.convert(ae.format,ae.colorSpace),oe=s.convert(ae.type),ve=_(ae.internalFormat,Be,oe,ae.colorSpace,L.isXRRenderTarget===!0),je=we(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ve,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),de(Y.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(C){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),ne(t.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)re(Y.__webglFramebuffer[Z][ae],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae);else re(Y.__webglFramebuffer[Z],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){for(let Z=0,ae=T.length;Z<ae;Z++){const Be=T[Z],oe=i.get(Be);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ne(t.TEXTURE_2D,Be),re(Y.__webglFramebuffer,L,Be,t.COLOR_ATTACHMENT0+Z,t.TEXTURE_2D,0),m(Be)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Z=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,O.__webglTexture),ne(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)re(Y.__webglFramebuffer[ae],L,M,t.COLOR_ATTACHMENT0,Z,ae);else re(Y.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,Z,0);m(M)&&c(Z),n.unbindTexture()}L.depthBuffer&&Re(L)}function ce(L){const M=L.textures;for(let Y=0,O=M.length;Y<O;Y++){const T=M[Y];if(m(T)){const C=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ee=i.get(T).__webglTexture;n.bindTexture(C,ee),c(C),n.unbindTexture()}}}const I=[],ze=[];function Ne(L){if(L.samples>0){if(pe(L)===!1){const M=L.textures,Y=L.width,O=L.height;let T=t.COLOR_BUFFER_BIT;const C=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=i.get(L),Z=M.length>1;if(Z)for(let ae=0;ae<M.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(T|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(T|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ee.__webglColorRenderbuffer[ae]);const Be=i.get(M[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,Y,O,0,0,Y,O,T,t.NEAREST),l===!0&&(I.length=0,ze.length=0,I.push(t.COLOR_ATTACHMENT0+ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(C),ze.push(C),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ae=0;ae<M.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,ee.__webglColorRenderbuffer[ae]);const Be=i.get(M[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function we(L){return Math.min(r.maxSamples,L.samples)}function pe(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(L){const M=o.render.frame;d.get(L)!==M&&(d.set(L,M),L.update())}function Se(L,M){const Y=L.colorSpace,O=L.format,T=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==qi&&Y!==Ri&&(et.getTransfer(Y)===st?(O!==Nn||T!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=A,this.resetTextureUnits=b,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Pe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=re,this.useMultisampledRTT=pe}function Sw(t,e){function n(i,r=Ri){let s;const o=et.getTransfer(r);if(i===pi)return t.UNSIGNED_BYTE;if(i===Td)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ad)return t.UNSIGNED_SHORT_5_5_5_1;if(i===M_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===y_)return t.BYTE;if(i===S_)return t.SHORT;if(i===To)return t.UNSIGNED_SHORT;if(i===wd)return t.INT;if(i===Sr)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Lo)return t.HALF_FLOAT;if(i===E_)return t.ALPHA;if(i===w_)return t.RGB;if(i===Nn)return t.RGBA;if(i===T_)return t.LUMINANCE;if(i===A_)return t.LUMINANCE_ALPHA;if(i===ds)return t.DEPTH_COMPONENT;if(i===ws)return t.DEPTH_STENCIL;if(i===C_)return t.RED;if(i===Cd)return t.RED_INTEGER;if(i===R_)return t.RG;if(i===Rd)return t.RG_INTEGER;if(i===Pd)return t.RGBA_INTEGER;if(i===Ha||i===Va||i===Ga||i===Wa)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===ef||i===tf||i===nf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ef)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rf||i===sf||i===of)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rf||i===sf)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===af||i===lf||i===uf||i===cf||i===ff||i===df||i===hf||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf||i===yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ff)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_f)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xa||i===Sf||i===Mf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xa)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P_||i===Ef||i===wf||i===Tf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ef)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Mw extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ma extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ew={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ew)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Xi({vertexShader:ww,fragmentShader:Tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qt(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cw extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,h=null,f=null,p=null,v=null;const y=new Aw,m=n.getContextAttributes();let c=null,_=null;const g=[],x=[],U=new Ye;let P=null;const R=new _n;R.layers.enable(1),R.viewport=new Mt;const N=new _n;N.layers.enable(2),N.viewport=new Mt;const w=[R,N],S=new Mw;S.layers.enable(1),S.layers.enable(2);let b=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=g[J];return re===void 0&&(re=new Ku,g[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=g[J];return re===void 0&&(re=new Ku,g[J]=re),re.getGripSpace()},this.getHand=function(J){let re=g[J];return re===void 0&&(re=new Ku,g[J]=re),re.getHandSpace()};function B(J){const re=x.indexOf(J.inputSource);if(re===-1)return;const de=g[re];de!==void 0&&(de.update(J.inputSource,J.frame,u||o),de.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",G);for(let J=0;J<g.length;J++){const re=x[J];re!==null&&(x[J]=null,g[J].disconnect(re))}b=null,A=null,y.reset(),e.setRenderTarget(c),p=null,f=null,h=null,r=null,_=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Mr(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,de=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?ws:ds,de=m.stencil?Es:Sr);const Re={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Mr(f.textureWidth,f.textureHeight,{format:Nn,type:pi,depthTexture:new X_(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(J){for(let re=0;re<J.removed.length;re++){const de=J.removed[re],he=x.indexOf(de);he>=0&&(x[he]=null,g[he].disconnect(de))}for(let re=0;re<J.added.length;re++){const de=J.added[re];let he=x.indexOf(de);if(he===-1){for(let Pe=0;Pe<g.length;Pe++)if(Pe>=x.length){x.push(de),he=Pe;break}else if(x[Pe]===null){x[Pe]=de,he=Pe;break}if(he===-1)break}const Re=g[he];Re&&Re.connect(de)}}const j=new X,W=new X;function D(J,re,de){j.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const he=j.distanceTo(W),Re=re.projectionMatrix.elements,Pe=de.projectionMatrix.elements,ke=Re[14]/(Re[10]-1),ce=Re[14]/(Re[10]+1),I=(Re[9]+1)/Re[5],ze=(Re[9]-1)/Re[5],Ne=(Re[8]-1)/Re[0],we=(Pe[8]+1)/Pe[0],pe=ke*Ne,nt=ke*we,Se=he/(-Ne+we),Ie=Se*-Ne;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ie),J.translateZ(Se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Re[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const L=ke+Se,M=ce+Se,Y=pe-Ie,O=nt+(he-Ie),T=I*ce/M*L,C=ze*ce/M*L;J.projectionMatrix.makePerspective(Y,O,T,C,L,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function V(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let re=J.near,de=J.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(de=y.depthFar)),S.near=N.near=R.near=re,S.far=N.far=R.far=de,(b!==S.near||A!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,A=S.far);const he=J.parent,Re=S.cameras;V(S,he);for(let Pe=0;Pe<Re.length;Pe++)V(Re[Pe],he);Re.length===2?D(S,R,N):S.projectionMatrix.copy(R.projectionMatrix),Q(J,S,he)};function Q(J,re,de){de===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(de.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Af*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ne=null;function ge(J,re){if(d=re.getViewerPose(u||o),v=re,d!==null){const de=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let he=!1;de.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Pe=0;Pe<de.length;Pe++){const ke=de[Pe];let ce=null;if(p!==null)ce=p.getViewport(ke);else{const ze=h.getViewSubImage(f,ke);ce=ze.viewport,Pe===0&&(e.setRenderTargetTextures(_,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(_))}let I=w[Pe];I===void 0&&(I=new _n,I.layers.enable(Pe),I.viewport=new Mt,w[Pe]=I),I.matrix.fromArray(ke.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ke.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ce.x,ce.y,ce.width,ce.height),Pe===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(I)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Pe=h.getDepthInformation(de[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(e,Pe,r.renderState)}}for(let de=0;de<g.length;de++){const he=x[de],Re=g[de];he!==null&&Re!==void 0&&Re.update(he,re,u||o)}ne&&ne(J,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const be=new G_;be.setAnimationLoop(ge),this.setAnimationLoop=function(J){ne=J},this.dispose=function(){}}}const nr=new Bn,Rw=new mt;function Pw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,z_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,_,g,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),d(m,c)):c.isMeshStandardMaterial?(s(m,c),f(m,c),c.isMeshPhysicalMaterial&&p(m,c,x)):c.isMeshMatcapMaterial?(s(m,c),v(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),y(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,_,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===en&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===en&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,x=_.envMapRotation;g&&(m.envMap.value=g,nr.copy(x),nr.x*=-1,nr.y*=-1,nr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),m.envMapRotation.value.setFromMatrix4(Rw.makeRotationFromEuler(nr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===en&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const _=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const x=g.program;i.uniformBlockBinding(_,x)}function u(_,g){let x=r[_.id];x===void 0&&(v(_),x=d(_),r[_.id]=x,_.addEventListener("dispose",m));const U=g.program;i.updateUBOMapping(_,U);const P=e.render.frame;s[_.id]!==P&&(f(_),s[_.id]=P)}function d(_){const g=h();_.__bindingPointIndex=g;const x=t.createBuffer(),U=_.__size,P=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,U,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=r[_.id],x=_.uniforms,U=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let P=0,R=x.length;P<R;P++){const N=Array.isArray(x[P])?x[P]:[x[P]];for(let w=0,S=N.length;w<S;w++){const b=N[w];if(p(b,P,w,U)===!0){const A=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let q=0;for(let G=0;G<B.length;G++){const j=B[G],W=y(j);typeof j=="number"||typeof j=="boolean"?(b.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,A+q,b.__data)):j.isMatrix3?(b.__data[0]=j.elements[0],b.__data[1]=j.elements[1],b.__data[2]=j.elements[2],b.__data[3]=0,b.__data[4]=j.elements[3],b.__data[5]=j.elements[4],b.__data[6]=j.elements[5],b.__data[7]=0,b.__data[8]=j.elements[6],b.__data[9]=j.elements[7],b.__data[10]=j.elements[8],b.__data[11]=0):(j.toArray(b.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,A,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,x,U){const P=_.value,R=g+"_"+x;if(U[R]===void 0)return typeof P=="number"||typeof P=="boolean"?U[R]=P:U[R]=P.clone(),!0;{const N=U[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return U[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function v(_){const g=_.uniforms;let x=0;const U=16;for(let R=0,N=g.length;R<N;R++){const w=Array.isArray(g[R])?g[R]:[g[R]];for(let S=0,b=w.length;S<b;S++){const A=w[S],B=Array.isArray(A.value)?A.value:[A.value];for(let q=0,G=B.length;q<G;q++){const j=B[q],W=y(j),D=x%U,V=D%W.boundary,Q=D+V;x+=V,Q!==0&&U-Q<W.storage&&(x+=U-Q),A.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=x,x+=W.storage}}}const P=x%U;return P>0&&(x+=U-P),_.__size=x,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class Lw{constructor(e={}){const{canvas:n=Sy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Hi,this.toneMappingExposure=1;const g=this;let x=!1,U=0,P=0,R=null,N=-1,w=null;const S=new Mt,b=new Mt;let A=null;const B=new Ge(0);let q=0,G=n.width,j=n.height,W=1,D=null,V=null;const Q=new Mt(0,0,G,j),ne=new Mt(0,0,G,j);let ge=!1;const be=new Dd;let J=!1,re=!1;const de=new mt,he=new X,Re=new Mt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ce(){return R===null?W:1}let I=i;function ze(E,k){return n.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ed}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",fe,!1),I===null){const k="webgl2";if(I=ze(k,E),I===null)throw ze(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ne,we,pe,nt,Se,Ie,L,M,Y,O,T,C,ee,Z,ae,Be,oe,ve,je,Fe,ye,Oe,We,lt;function F(){Ne=new OE(I),Ne.init(),Oe=new Sw(I,Ne),we=new LE(I,Ne,e,Oe),pe=new vw(I),nt=new zE(I),Se=new rw,Ie=new yw(I,Ne,pe,Se,we,Oe,nt),L=new IE(g),M=new FE(g),Y=new Yy(I),We=new PE(I,Y),O=new kE(I,Y,nt,We),T=new VE(I,O,Y,nt),je=new HE(I,we,Ie),Be=new DE(Se),C=new iw(g,L,M,Ne,we,We,Be),ee=new Pw(g,Se),Z=new ow,ae=new dw(Ne),ve=new RE(g,L,M,pe,T,f,l),oe=new _w(g,T,we),lt=new bw(I,nt,we,pe),Fe=new bE(I,Ne,nt),ye=new BE(I,Ne,nt),nt.programs=C.programs,g.capabilities=we,g.extensions=Ne,g.properties=Se,g.renderLists=Z,g.shadowMap=oe,g.state=pe,g.info=nt}F();const le=new Cw(g,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(G,j,!1))},this.getSize=function(E){return E.set(G,j)},this.setSize=function(E,k,$=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,j=k,n.width=Math.floor(E*W),n.height=Math.floor(k*W),$===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(G*W,j*W).floor()},this.setDrawingBufferSize=function(E,k,$){G=E,j=k,W=$,n.width=Math.floor(E*$),n.height=Math.floor(k*$),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,k,$,K){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,k,$,K),pe.viewport(S.copy(Q).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,k,$,K){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,k,$,K),pe.scissor(b.copy(ne).multiplyScalar(W).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){pe.setScissorTest(ge=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){V=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(E=!0,k=!0,$=!0){let K=0;if(E){let z=!1;if(R!==null){const ue=R.texture.format;z=ue===Pd||ue===Rd||ue===Cd}if(z){const ue=R.texture.type,_e=ue===pi||ue===Sr||ue===To||ue===Es||ue===Td||ue===Ad,Me=ve.getClearColor(),Ee=ve.getClearAlpha(),De=Me.r,Ue=Me.g,Ae=Me.b;_e?(p[0]=De,p[1]=Ue,p[2]=Ae,p[3]=Ee,I.clearBufferuiv(I.COLOR,0,p)):(v[0]=De,v[1]=Ue,v[2]=Ae,v[3]=Ee,I.clearBufferiv(I.COLOR,0,v))}else K|=I.COLOR_BUFFER_BIT}k&&(K|=I.DEPTH_BUFFER_BIT),$&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),Z.dispose(),ae.dispose(),Se.dispose(),L.dispose(),M.dispose(),T.dispose(),We.dispose(),lt.dispose(),C.dispose(),le.dispose(),le.removeEventListener("sessionstart",zn),le.removeEventListener("sessionend",Nd),Ki.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=nt.autoReset,k=oe.enabled,$=oe.autoUpdate,K=oe.needsUpdate,z=oe.type;F(),nt.autoReset=E,oe.enabled=k,oe.autoUpdate=$,oe.needsUpdate=K,oe.type=z}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){const k=E.target;k.removeEventListener("dispose",Le),$e(k)}function $e(E){_t(E),Se.remove(E)}function _t(E){const k=Se.get(E).programs;k!==void 0&&(k.forEach(function($){C.releaseProgram($)}),E.isShaderMaterial&&C.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,$,K,z,ue){k===null&&(k=Pe);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Me=Z_(E,k,$,K,z);pe.setMaterial(K,_e);let Ee=$.index,De=1;if(K.wireframe===!0){if(Ee=O.getWireframeAttribute($),Ee===void 0)return;De=2}const Ue=$.drawRange,Ae=$.attributes.position;let Ze=Ue.start*De,dt=(Ue.start+Ue.count)*De;ue!==null&&(Ze=Math.max(Ze,ue.start*De),dt=Math.min(dt,(ue.start+ue.count)*De)),Ee!==null?(Ze=Math.max(Ze,0),dt=Math.min(dt,Ee.count)):Ae!=null&&(Ze=Math.max(Ze,0),dt=Math.min(dt,Ae.count));const ht=dt-Ze;if(ht<0||ht===1/0)return;We.setup(z,K,Me,$,Ee);let nn,Qe=Fe;if(Ee!==null&&(nn=Y.get(Ee),Qe=ye,Qe.setIndex(nn)),z.isMesh)K.wireframe===!0?(pe.setLineWidth(K.wireframeLinewidth*ce()),Qe.setMode(I.LINES)):Qe.setMode(I.TRIANGLES);else if(z.isLine){let Ce=K.linewidth;Ce===void 0&&(Ce=1),pe.setLineWidth(Ce*ce()),z.isLineSegments?Qe.setMode(I.LINES):z.isLineLoop?Qe.setMode(I.LINE_LOOP):Qe.setMode(I.LINE_STRIP)}else z.isPoints?Qe.setMode(I.POINTS):z.isSprite&&Qe.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Qe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ce=z._multiDrawStarts,bt=z._multiDrawCounts,Je=z._multiDrawCount,wn=Ee?Y.get(Ee).bytesPerElement:1,Cr=Se.get(K).currentProgram.getUniforms();for(let rn=0;rn<Je;rn++)Cr.setValue(I,"_gl_DrawID",rn),Qe.render(Ce[rn]/wn,bt[rn])}else if(z.isInstancedMesh)Qe.renderInstances(Ze,ht,z.count);else if($.isInstancedBufferGeometry){const Ce=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,bt=Math.min($.instanceCount,Ce);Qe.renderInstances(Ze,ht,bt)}else Qe.render(Ze,ht)};function Pt(E,k,$){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,Fo(E,k,$),E.side=Wi,E.needsUpdate=!0,Fo(E,k,$),E.side=Dn):Fo(E,k,$)}this.compile=function(E,k,$=null){$===null&&($=E),m=ae.get($),m.init(k),_.push(m),$.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==$&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const K=new Set;return E.traverse(function(z){const ue=z.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Me=ue[_e];Pt(Me,$,z),K.add(Me)}else Pt(ue,$,z),K.add(ue)}),_.pop(),m=null,K},this.compileAsync=function(E,k,$=null){const K=this.compile(E,k,$);return new Promise(z=>{function ue(){if(K.forEach(function(_e){Se.get(_e).currentProgram.isReady()&&K.delete(_e)}),K.size===0){z(E);return}setTimeout(ue,10)}Ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ke=null;function Kn(E){Ke&&Ke(E)}function zn(){Ki.stop()}function Nd(){Ki.start()}const Ki=new G_;Ki.setAnimationLoop(Kn),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(E){Ke=E,le.setAnimationLoop(E),E===null?Ki.stop():Ki.start()},le.addEventListener("sessionstart",zn),le.addEventListener("sessionend",Nd),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,k,R),m=ae.get(E,_.length),m.init(k),_.push(m),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),be.setFromProjectionMatrix(de),re=this.localClippingEnabled,J=Be.init(this.clippingPlanes,re),y=Z.get(E,c.length),y.init(),c.push(y),le.enabled===!0&&le.isPresenting===!0){const ue=g.xr.getDepthSensingMesh();ue!==null&&$l(ue,k,-1/0,g.sortObjects)}$l(E,k,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,V),ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ke&&ve.addToRenderList(y,E),this.info.render.frame++,J===!0&&Be.beginShadows();const $=m.state.shadowsArray;oe.render($,E,k),J===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,z=y.transmissive;if(m.setupLights(),k.isArrayCamera){const ue=k.cameras;if(z.length>0)for(let _e=0,Me=ue.length;_e<Me;_e++){const Ee=ue[_e];Od(K,z,E,Ee)}ke&&ve.render(E);for(let _e=0,Me=ue.length;_e<Me;_e++){const Ee=ue[_e];Fd(y,E,Ee,Ee.viewport)}}else z.length>0&&Od(K,z,E,k),ke&&ve.render(E),Fd(y,E,k);R!==null&&(Ie.updateMultisampleRenderTarget(R),Ie.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(g,E,k),We.resetDefaultState(),N=-1,w=null,_.pop(),_.length>0?(m=_[_.length-1],J===!0&&Be.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function $l(E,k,$,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||be.intersectsSprite(E)){K&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const _e=T.update(E),Me=E.material;Me.visible&&y.push(E,_e,Me,$,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||be.intersectsObject(E))){const _e=T.update(E),Me=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Re.copy(_e.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(Me)){const Ee=_e.groups;for(let De=0,Ue=Ee.length;De<Ue;De++){const Ae=Ee[De],Ze=Me[Ae.materialIndex];Ze&&Ze.visible&&y.push(E,_e,Ze,$,Re.z,Ae)}}else Me.visible&&y.push(E,_e,Me,$,Re.z,null)}}const ue=E.children;for(let _e=0,Me=ue.length;_e<Me;_e++)$l(ue[_e],k,$,K)}function Fd(E,k,$,K){const z=E.opaque,ue=E.transmissive,_e=E.transparent;m.setupLightsView($),J===!0&&Be.setGlobalState(g.clippingPlanes,$),K&&pe.viewport(S.copy(K)),z.length>0&&No(z,k,$),ue.length>0&&No(ue,k,$),_e.length>0&&No(_e,k,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Od(E,k,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Mr(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Lo:pi,minFilter:hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ue=m.state.transmissionRenderTarget[K.id],_e=K.viewport||S;ue.setSize(_e.z,_e.w);const Me=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(B),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),ke&&ve.render($);const Ee=g.toneMapping;g.toneMapping=Hi;const De=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),J===!0&&Be.setGlobalState(g.clippingPlanes,K),No(E,$,K),Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ae=0,Ze=k.length;Ae<Ze;Ae++){const dt=k[Ae],ht=dt.object,nn=dt.geometry,Qe=dt.material,Ce=dt.group;if(Qe.side===Dn&&ht.layers.test(K.layers)){const bt=Qe.side;Qe.side=en,Qe.needsUpdate=!0,kd(ht,$,K,nn,Qe,Ce),Qe.side=bt,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue))}g.setRenderTarget(Me),g.setClearColor(B,q),De!==void 0&&(K.viewport=De),g.toneMapping=Ee}function No(E,k,$){const K=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ue=E.length;z<ue;z++){const _e=E[z],Me=_e.object,Ee=_e.geometry,De=K===null?_e.material:K,Ue=_e.group;Me.layers.test($.layers)&&kd(Me,k,$,Ee,De,Ue)}}function kd(E,k,$,K,z,ue){E.onBeforeRender(g,k,$,K,z,ue),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(g,k,$,K,E,ue),z.transparent===!0&&z.side===Dn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,g.renderBufferDirect($,k,K,z,E,ue),z.side=Wi,z.needsUpdate=!0,g.renderBufferDirect($,k,K,z,E,ue),z.side=Dn):g.renderBufferDirect($,k,K,z,E,ue),E.onAfterRender(g,k,$,K,z,ue)}function Fo(E,k,$){k.isScene!==!0&&(k=Pe);const K=Se.get(E),z=m.state.lights,ue=m.state.shadowsArray,_e=z.state.version,Me=C.getParameters(E,z.state,ue,k,$),Ee=C.getProgramCacheKey(Me);let De=K.programs;K.environment=E.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(E.isMeshStandardMaterial?M:L).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Le),De=new Map,K.programs=De);let Ue=De.get(Ee);if(Ue!==void 0){if(K.currentProgram===Ue&&K.lightsStateVersion===_e)return zd(E,Me),Ue}else Me.uniforms=C.getUniforms(E),E.onBeforeCompile(Me,g),Ue=C.acquireProgram(Me,Ee),De.set(Ee,Ue),K.uniforms=Me.uniforms;const Ae=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=Be.uniform),zd(E,Me),K.needsLights=J_(E),K.lightsStateVersion=_e,K.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMap.value=z.state.directionalShadowMap,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotShadowMap.value=z.state.spotShadowMap,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMap.value=z.state.pointShadowMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=Ue,K.uniformsList=null,Ue}function Bd(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Ya.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function zd(E,k){const $=Se.get(E);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Z_(E,k,$,K,z){k.isScene!==!0&&(k=Pe),Ie.resetTextureUnits();const ue=k.fog,_e=K.isMeshStandardMaterial?k.environment:null,Me=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qi,Ee=(K.isMeshStandardMaterial?M:L).get(K.envMap||_e),De=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ue=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ae=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,dt=!!$.morphAttributes.color;let ht=Hi;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ht=g.toneMapping);const nn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=nn!==void 0?nn.length:0,Ce=Se.get(K),bt=m.state.lights;if(J===!0&&(re===!0||E!==w)){const hn=E===w&&K.id===N;Be.setState(K,E,hn)}let Je=!1;K.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==bt.state.version||Ce.outputColorSpace!==Me||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Ee||K.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Be.numPlanes||Ce.numIntersection!==Be.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ue||Ce.morphTargets!==Ae||Ce.morphNormals!==Ze||Ce.morphColors!==dt||Ce.toneMapping!==ht||Ce.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ce.__version=K.version);let wn=Ce.currentProgram;Je===!0&&(wn=Fo(K,k,z));let Cr=!1,rn=!1,ql=!1;const vt=wn.getUniforms(),gi=Ce.uniforms;if(pe.useProgram(wn.program)&&(Cr=!0,rn=!0,ql=!0),K.id!==N&&(N=K.id,rn=!0),Cr||w!==E){vt.setValue(I,"projectionMatrix",E.projectionMatrix),vt.setValue(I,"viewMatrix",E.matrixWorldInverse);const hn=vt.map.cameraPosition;hn!==void 0&&hn.setValue(I,he.setFromMatrixPosition(E.matrixWorld)),we.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,rn=!0,ql=!0)}if(z.isSkinnedMesh){vt.setOptional(I,z,"bindMatrix"),vt.setOptional(I,z,"bindMatrixInverse");const hn=z.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),vt.setValue(I,"boneTexture",hn.boneTexture,Ie))}z.isBatchedMesh&&(vt.setOptional(I,z,"batchingTexture"),vt.setValue(I,"batchingTexture",z._matricesTexture,Ie),vt.setOptional(I,z,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",z._indirectTexture,Ie),vt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",z._colorsTexture,Ie));const Kl=$.morphAttributes;if((Kl.position!==void 0||Kl.normal!==void 0||Kl.color!==void 0)&&je.update(z,$,wn),(rn||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,vt.setValue(I,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(gi.envMap.value=Ee,gi.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(gi.envMapIntensity.value=k.environmentIntensity),rn&&(vt.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ce.needsLights&&Q_(gi,ql),ue&&K.fog===!0&&ee.refreshFogUniforms(gi,ue),ee.refreshMaterialUniforms(gi,K,W,j,m.state.transmissionRenderTarget[E.id]),Ya.upload(I,Bd(Ce),gi,Ie)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ya.upload(I,Bd(Ce),gi,Ie),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(I,"center",z.center),vt.setValue(I,"modelViewMatrix",z.modelViewMatrix),vt.setValue(I,"normalMatrix",z.normalMatrix),vt.setValue(I,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const hn=K.uniformsGroups;for(let Zl=0,e0=hn.length;Zl<e0;Zl++){const Hd=hn[Zl];lt.update(Hd,wn),lt.bind(Hd,wn)}}return wn}function Q_(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function J_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,k,$){Se.get(E.texture).__webglTexture=k,Se.get(E.depthTexture).__webglTexture=$;const K=Se.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const $=Se.get(E);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,$=0){R=E,U=k,P=$;let K=!0,z=null,ue=!1,_e=!1;if(E){const Ee=Se.get(E);if(Ee.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(Ee.__webglFramebuffer===void 0)Ie.setupRenderTarget(E);else if(Ee.__hasExternalTextures)Ie.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(Ee.__boundDepthTexture!==Ae){if(Ae!==null&&Se.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(_e=!0);const Ue=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?z=Ue[k][$]:z=Ue[k],ue=!0):E.samples>0&&Ie.useMultisampledRTT(E)===!1?z=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[$]:z=Ue,S.copy(E.viewport),b.copy(E.scissor),A=E.scissorTest}else S.copy(Q).multiplyScalar(W).floor(),b.copy(ne).multiplyScalar(W).floor(),A=ge;if(pe.bindFramebuffer(I.FRAMEBUFFER,z)&&K&&pe.drawBuffers(E,z),pe.viewport(S),pe.scissor(b),pe.setScissorTest(A),ue){const Ee=Se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,$)}else if(_e){const Ee=Se.get(E.texture),De=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,$||0,De)}N=-1},this.readRenderTargetPixels=function(E,k,$,K,z,ue,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){pe.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ee=E.texture,De=Ee.format,Ue=Ee.type;if(!we.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-K&&$>=0&&$<=E.height-z&&I.readPixels(k,$,K,z,Oe.convert(De),Oe.convert(Ue),ue)}finally{const Ee=R!==null?Se.get(R).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(E,k,$,K,z,ue,_e){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){pe.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ee=E.texture,De=Ee.format,Ue=Ee.type;if(!we.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-K&&$>=0&&$<=E.height-z){const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(k,$,K,z,Oe.convert(De),Oe.convert(Ue),0),I.flush();const Ze=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await My(I,Ze,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue)}finally{I.deleteBuffer(Ae),I.deleteSync(Ze)}return ue}}finally{const Ee=R!==null?Se.get(R).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(E,k=null,$=0){E.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-$),z=Math.floor(E.image.width*K),ue=Math.floor(E.image.height*K),_e=k!==null?k.x:0,Me=k!==null?k.y:0;Ie.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,_e,Me,z,ue),pe.unbindTexture()},this.copyTextureToTexture=function(E,k,$=null,K=null,z=0){E.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],k=arguments[2],z=arguments[3]||0,$=null);let ue,_e,Me,Ee,De,Ue;$!==null?(ue=$.max.x-$.min.x,_e=$.max.y-$.min.y,Me=$.min.x,Ee=$.min.y):(ue=E.image.width,_e=E.image.height,Me=0,Ee=0),K!==null?(De=K.x,Ue=K.y):(De=0,Ue=0);const Ae=Oe.convert(k.format),Ze=Oe.convert(k.type);Ie.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const dt=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),nn=I.getParameter(I.UNPACK_SKIP_PIXELS),Qe=I.getParameter(I.UNPACK_SKIP_ROWS),Ce=I.getParameter(I.UNPACK_SKIP_IMAGES),bt=E.isCompressedTexture?E.mipmaps[z]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ee),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,De,Ue,ue,_e,Ae,Ze,bt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,De,Ue,bt.width,bt.height,Ae,bt.data):I.texSubImage2D(I.TEXTURE_2D,z,De,Ue,ue,_e,Ae,Ze,bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,nn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce),z===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,k,$=null,K=null,z=0){E.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0);let ue,_e,Me,Ee,De,Ue,Ae,Ze,dt;const ht=E.isCompressedTexture?E.mipmaps[z]:E.image;$!==null?(ue=$.max.x-$.min.x,_e=$.max.y-$.min.y,Me=$.max.z-$.min.z,Ee=$.min.x,De=$.min.y,Ue=$.min.z):(ue=ht.width,_e=ht.height,Me=ht.depth,Ee=0,De=0,Ue=0),K!==null?(Ae=K.x,Ze=K.y,dt=K.z):(Ae=0,Ze=0,dt=0);const nn=Oe.convert(k.format),Qe=Oe.convert(k.type);let Ce;if(k.isData3DTexture)Ie.setTexture3D(k,0),Ce=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ie.setTexture2DArray(k,0),Ce=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const bt=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=I.getParameter(I.UNPACK_SKIP_PIXELS),Cr=I.getParameter(I.UNPACK_SKIP_ROWS),rn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ce,z,Ae,Ze,dt,ue,_e,Me,nn,Qe,ht.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,z,Ae,Ze,dt,ue,_e,Me,nn,ht.data):I.texSubImage3D(Ce,z,Ae,Ze,dt,ue,_e,Me,nn,Qe,ht),I.pixelStorei(I.UNPACK_ROW_LENGTH,bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Cr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rn),z===0&&k.generateMipmaps&&I.generateMipmap(Ce),pe.unbindTexture()},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&Ie.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ie.setTextureCube(E,0):E.isData3DTexture?Ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ie.setTexture2DArray(E,0):Ie.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){U=0,P=0,R=null,pe.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ld?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Xl?"display-p3":"srgb"}}class Ud{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new Ud(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dw extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wl extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new X,Al=new X,Yp=new mt,Xs=new U_,Ea=new jl,Zu=new X,$p=new X;class Iw extends It{constructor(e=new qn,n=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tl.fromBufferAttribute(n,r-1),Al.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tl.distanceTo(Al);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;Yp.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Yp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=u){const c=d.getX(y),_=d.getX(y+1),g=wa(this,e,Xs,l,c,_);g&&n.push(g)}if(this.isLineLoop){const y=d.getX(v-1),m=d.getX(p),c=wa(this,e,Xs,l,y,m);c&&n.push(c)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=u){const c=wa(this,e,Xs,l,y,y+1);c&&n.push(c)}if(this.isLineLoop){const y=wa(this,e,Xs,l,v-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wa(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Tl.fromBufferAttribute(o,r),Al.fromBufferAttribute(o,s),n.distanceSqToSegment(Tl,Al,Zu,$p)>i)return;Zu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Zu);if(!(l<e.near||l>e.far))return{distance:l,point:$p.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const qp=new X,Kp=new X;class Rf extends Iw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)qp.fromBufferAttribute(n,r),Kp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qp.distanceTo(Kp);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Ta=new X,Aa=new X,Qu=new X,Ca=new Un;class Zp extends qn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(ja*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],d=["a","b","c"],h=new Array(3),f={},p=[];for(let v=0;v<l;v+=3){o?(u[0]=o.getX(v),u[1]=o.getX(v+1),u[2]=o.getX(v+2)):(u[0]=v,u[1]=v+1,u[2]=v+2);const{a:y,b:m,c}=Ca;if(y.fromBufferAttribute(a,u[0]),m.fromBufferAttribute(a,u[1]),c.fromBufferAttribute(a,u[2]),Ca.getNormal(Qu),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(c.x*r)},${Math.round(c.y*r)},${Math.round(c.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const g=(_+1)%3,x=h[_],U=h[g],P=Ca[d[_]],R=Ca[d[g]],N=`${x}_${U}`,w=`${U}_${x}`;w in f&&f[w]?(Qu.dot(f[w].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(R.x,R.y,R.z)),f[w]=null):N in f||(f[N]={index0:u[_],index1:u[g],normal:Qu.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:m}=f[v];Ta.fromBufferAttribute(a,y),Aa.fromBufferAttribute(a,m),p.push(Ta.x,Ta.y,Ta.z),p.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new Sn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Uw extends Ar{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ju extends Ar{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ec=new mt,Qp=new X,Jp=new X;class Nw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Qp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qp),Jp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jp),n.updateMatrixWorld(),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fw extends Nw{constructor(){super(new W_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ow extends K_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Fw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kw extends K_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bw extends Rf{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let f=0,p=0,v=-a;f<=n;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const y=f===s?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const d=new qn;d.setAttribute("position",new Sn(l,3)),d.setAttribute("color",new Sn(u,3));const h=new wl({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ed);const zw={name:"40ft High Cube Container",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},em=[{name:"20ft Standard",innerLength:5898,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:28200},{name:"40ft Standard",innerLength:12032,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:26750},{name:"40ft High Cube",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},{name:"45ft High Cube",innerLength:13556,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:27700},{name:"Custom",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580}],tm=[{id:"hilux_dc",name:"Hilux Revo (4Dr)",length:5325,width:1855,height:1815,weight:2050,wheelbase:3085,cabRatio:.55},{id:"hilux_sc",name:"Hilux Revo (2Dr)",length:5255,width:1855,height:1815,weight:1910,wheelbase:3085,cabRatio:.4},{id:"ranger_dc",name:"Ranger (4Dr)",length:5362,width:1860,height:1821,weight:2150,wheelbase:3220,cabRatio:.55},{id:"triton_dc",name:"Triton (4Dr)",length:5305,width:1815,height:1795,weight:1950,wheelbase:3e3,cabRatio:.55},{id:"dmax_dc",name:"D-Max (4Dr)",length:5265,width:1870,height:1790,weight:1990,wheelbase:3020,cabRatio:.55},{id:"navara_dc",name:"Navara (4Dr)",length:5260,width:1850,height:1840,weight:2050,wheelbase:3150,cabRatio:.55},{id:"custom",name:"กำหนดเอง (Custom)",length:5300,width:1850,height:1800,weight:2e3,wheelbase:3e3,cabRatio:.5}],nm=[{id:"eu_pallet",name:"EU Pallet",length:1200,width:800,height:1450,weight:800},{id:"th_pallet",name:"TH Pallet",length:1100,width:1100,height:1450,weight:800},{id:"box_s",name:"กล่อง S",length:600,width:400,height:400,weight:20},{id:"box_m",name:"กล่อง M",length:800,width:600,height:600,weight:40},{id:"box_l",name:"กล่อง L",length:1200,width:800,height:800,weight:80},{id:"box_custom",name:"กำหนดเอง",length:1e3,width:800,height:800,weight:50}],Ra=["#3B82F6","#EF4444","#10B981","#F59E0B","#8B5CF6","#EC4899","#06B6D4","#F97316"],im=()=>Math.random().toString(36).substr(2,9);function Hw(t,e=45){const n=t.naturalWidth||t.width,i=t.naturalHeight||t.height,r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.drawImage(t,0,0);const o=s.getImageData(0,0,n,i),a=o.data,l=a[0],u=a[1],d=a[2],h=new Uint8Array(n*i),f=[0,n-1,(i-1)*n,i*n-1];for(;f.length;){const p=f.pop();if(p<0||p>=n*i||h[p])continue;h[p]=1;const v=p*4;if(Math.abs(a[v]-l)+Math.abs(a[v+1]-u)+Math.abs(a[v+2]-d)>e*3)continue;a[v+3]=0;const y=p%n;y>0&&f.push(p-1),y<n-1&&f.push(p+1),f.push(p-n,p+n)}return s.putImageData(o,0,0),r}const Vw=Te.forwardRef(function({container:e,vehicles:n,selectedId:i,onSelectVehicle:r,onUpdateVehicle:s},o){const a=Te.useRef(null);Te.useImperativeHandle(o,()=>({getCanvas:()=>a.current}),[]);const l=Te.useRef({}),[u,d]=Te.useState(null),[h,f]=Te.useState(1),[p,v]=Te.useState({x:0,y:0}),y=Te.useRef({zoom:1,pan:{x:0,y:0}}),m=Te.useRef(null),c=Te.useCallback((b,A)=>{y.current={zoom:b,pan:A},f(b),v(A)},[]),_=60;Te.useEffect(()=>{n.forEach(b=>{if(!b.sideImage)return;const A=`${b.id}_${b.removeBg?1:0}`;if(l.current[A])return;const B=new Image;B.src=b.sideImage,B.onload=()=>{l.current[A]=b.removeBg?Hw(B):B,x()}})},[n]);const g=Te.useCallback(()=>{const b=a.current;if(!b)return{scale:1,ox:_,oy:_,cW:0,cH:0,baseScale:1};const A=b.getBoundingClientRect(),B=Math.min((A.width-_*2)/e.innerLength,(A.height-_*2)/e.innerHeight),q=B*h,G=e.innerLength*q,j=e.innerHeight*q,W=(A.height-e.innerHeight*B)/2,D=_+p.x,V=W+p.y;return{scale:q,ox:D,oy:V,cW:G,cH:j,baseScale:B}},[e,h,p]),x=Te.useCallback(()=>{const b=a.current;if(!b)return;const A=b.getContext("2d"),B=b.getBoundingClientRect(),q=Math.min(window.devicePixelRatio||1,2);b.width=B.width*q,b.height=B.height*q,A.scale(q,q);const G=B.width,j=B.height,{scale:W,ox:D,oy:V,cW:Q,cH:ne}=g();A.fillStyle="#18253a",A.fillRect(0,0,G,j),A.fillStyle="#ffffff",A.fillRect(D,V,Q,ne);const ge=(()=>{const ce=45/W;return ce<=100?100:ce<=200?200:ce<=500?500:ce<=1e3?1e3:2e3})();for(let ce=ge;ce<e.innerLength;ce+=ge){const I=D+ce*W;I<D||I>D+Q||(A.strokeStyle=ce%1e3===0?"#00000060":"#00000035",A.lineWidth=ce%1e3===0?1:.5,A.beginPath(),A.moveTo(I,V),A.lineTo(I,V+ne),A.stroke())}for(let ce=ge;ce<e.innerHeight;ce+=ge){const I=V+ne-ce*W;I<V||I>V+ne||(A.strokeStyle=ce%1e3===0?"#00000060":"#00000035",A.lineWidth=ce%1e3===0?1:.5,A.beginPath(),A.moveTo(D,I),A.lineTo(D+Q,I),A.stroke())}A.strokeStyle="#00ffaa",A.lineWidth=2,A.strokeRect(D,V,Q,ne),A.fillStyle="#d0e8d088",A.fillRect(D,V+ne-5,Q,5);const be=V+ne-e.doorHeight*W;A.strokeStyle="#dd7700cc",A.lineWidth=1.5,A.setLineDash([8,4]),A.beginPath(),A.moveTo(D,be),A.lineTo(D+Q,be),A.stroke(),A.setLineDash([]),A.fillStyle="#dd7700ee",A.font="bold 9px monospace",A.textAlign="right",A.fillText(`⚠ DOOR MAX ${e.doorHeight}mm`,D+Q-4,be-4);const J=22,re=36,de=Math.max(0,Math.floor(Math.max(0,-D)/W/100)*100),he=Math.min(e.innerLength,Math.ceil((G-D)/W/100)*100+100),Re=Math.max(0,Math.floor(Math.max(0,V+ne-j)/W/100)*100),Pe=Math.min(e.innerHeight,Math.ceil((V+ne)/W/100)*100+100),ke=ce=>ce>=1e3&&ge>=1e3?`${ce/1e3}m`:`${ce}`;[{base:V+ne+2,dir:1},{base:V-2,dir:-1}].forEach(({base:ce,dir:I})=>{A.fillStyle="#141e30ee",A.fillRect(D,I===1?ce:ce-J,Q,J);for(let ze=de;ze<=he;ze+=100){const Ne=D+ze*W;if(Ne<D-1||Ne>D+Q+1)continue;const we=ze%ge===0,pe=ze%500===0&&!we,nt=(we?13:pe?8:4)*I;A.strokeStyle=we?"#00ffaadd":pe?"#00ffaa55":"#00000022",A.lineWidth=we?1.2:.5,A.beginPath(),A.moveTo(Ne,ce),A.lineTo(Ne,ce+nt),A.stroke(),we&&(A.fillStyle="#00ffaaee",A.font="bold 8px monospace",A.textAlign="center",A.fillText(ke(ze),Ne,I===1?ce+J:ce-4))}}),[{base:D-2,dir:-1},{base:D+Q+2,dir:1}].forEach(({base:ce,dir:I})=>{A.fillStyle="#141e30ee",A.fillRect(I===-1?ce-re:ce,V,re,ne);for(let ze=Re;ze<=Pe;ze+=100){const Ne=V+ne-ze*W;if(Ne<V-1||Ne>V+ne+1)continue;const we=ze%ge===0,pe=ze%500===0&&!we,nt=(we?13:pe?8:4)*I;A.strokeStyle=we?"#00ffaadd":pe?"#00ffaa55":"#00000022",A.lineWidth=we?1.2:.5,A.beginPath(),A.moveTo(ce,Ne),A.lineTo(ce+nt,Ne),A.stroke(),we&&(A.fillStyle="#00ffaaee",A.font="bold 8px monospace",A.textAlign=I===-1?"right":"left",A.fillText(`${ze}`,I===-1?ce-4:ce+4,Ne+3))}}),A.fillStyle="#00ffaacc",A.font="bold 10px monospace",A.textAlign="center",A.fillText(`${e.innerLength} mm`,D+Q/2,V-J-4),A.save(),A.translate(D-re-14,V+ne/2),A.rotate(-Math.PI/2),A.fillText(`${e.innerHeight} mm`,0,0),A.restore(),n.forEach(ce=>{const I=ce.sideX??200,ze=ce.sideY??0,Ne=(ce.sideAngle??0)*Math.PI/180,we=ce.length*W,pe=ce.height*W,nt=D+I*W+we/2,Se=V+ne-ze*W-pe/2,Ie=ce.id===i;A.save(),A.translate(nt,Se),A.rotate(Ne);const L=`${ce.id}_${ce.removeBg?1:0}`,M=l.current[L];if(M&&M.complete!==!1){const Y=(ce.imgRealLength??ce.length)*W,O=(ce.imgRealHeight??ce.height)*W;ce.flipX&&A.scale(-1,1),A.drawImage(M,-Y/2,-O/2,Y,O),ce.flipX&&A.scale(-1,1)}else{A.fillStyle=ce.color+"22",A.strokeStyle=ce.color+"cc",A.lineWidth=1.5,A.fillRect(-we/2,-pe/2,we,pe),A.strokeRect(-we/2,-pe/2,we,pe);const Y=we*(ce.cabRatio??.5);A.strokeStyle=ce.color+"77",A.lineWidth=1,A.beginPath(),A.moveTo(-we/2+Y,-pe/2),A.lineTo(-we/2+Y,pe/2),A.stroke(),A.fillStyle="#ffffffaa",A.font=`bold ${Math.max(8,we*.04)}px sans-serif`,A.textAlign="center",A.textBaseline="middle",A.fillText(ce.preset,0,0)}Ie&&(A.strokeStyle="#ffffff",A.lineWidth=2,A.setLineDash([4,3]),A.strokeRect(-we/2-3,-pe/2-3,we+6,pe+6),A.setLineDash([]),A.strokeStyle="#00ffaa",A.lineWidth=1.5,A.beginPath(),A.moveTo(0,-pe/2-2),A.lineTo(0,-pe/2-14),A.stroke(),A.fillStyle="#00ffaadd",A.strokeStyle="#00ffaa",A.lineWidth=1,A.beginPath(),A.arc(0,-pe/2-21,7,0,Math.PI*2),A.fill(),A.stroke(),A.fillStyle="#ffffff88",A.font="8px monospace",A.textAlign="left",A.textBaseline="top",A.fillText(`${Math.round((ce.sideAngle??0)*10)/10}°`,we/2+5,-pe/2)),A.restore()})},[e,n,i,g]);Te.useEffect(()=>{x()},[x]),Te.useEffect(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]),Te.useEffect(()=>{const b=a.current;if(!b)return;const A=B=>{B.preventDefault();const q=b.getBoundingClientRect(),G=B.clientX-q.left,j=B.clientY-q.top,{zoom:W,pan:D}=y.current,V=Math.min((q.width-_*2)/e.innerLength,(q.height-_*2)/e.innerHeight),Q=V*W,ne=(q.height-e.innerHeight*V)/2,ge=_+D.x,be=ne+D.y,J=B.deltaY<0?1.15:1/1.15,re=Math.max(.5,Math.min(20,W*J)),de=V*re,he=G-(G-ge)*de/Q,Re=j-(j-be)*de/Q;c(re,{x:he-_,y:Re-ne})};return b.addEventListener("wheel",A,{passive:!1}),()=>b.removeEventListener("wheel",A)},[e,c]);const U=b=>{const A=a.current.getBoundingClientRect();return{mx:b.clientX-A.left,my:b.clientY-A.top}},P=b=>{const{scale:A,ox:B,oy:q,cH:G}=g(),j=b.length*A,W=b.height*A,D=B+(b.sideX??200)*A+j/2,V=q+G-(b.sideY??0)*A-W/2;return{cx:D,cy:V,vW:j,vH:W}},R=b=>{if(b.button===1){b.preventDefault();const{mx:q,my:G}=U(b);m.current={mx:q,my:G,panX:y.current.pan.x,panY:y.current.pan.y},d({id:null,type:"pan"});return}const{mx:A,my:B}=U(b);for(let q=n.length-1;q>=0;q--){const G=n[q],{cx:j,cy:W,vW:D,vH:V}=P(G),Q=(G.sideAngle??0)*Math.PI/180;if(G.id===i){const be=-V/2-21,J=j-be*Math.sin(Q),re=W+be*Math.cos(Q);if(Math.hypot(A-J,B-re)<12){r(G.id),d({id:G.id,type:"rotate",cx:j,cy:W});return}}const ne=(A-j)*Math.cos(-Q)-(B-W)*Math.sin(-Q),ge=(A-j)*Math.sin(-Q)+(B-W)*Math.cos(-Q);if(Math.abs(ne)<=D/2+5&&Math.abs(ge)<=V/2+5){r(G.id),d({id:G.id,type:"move",offX:A-j,offY:B-W});return}}r(null),m.current={mx:A,my:B,panX:y.current.pan.x,panY:y.current.pan.y},d({id:null,type:"pan"})},N=b=>{if((u==null?void 0:u.type)==="pan"&&m.current){const{mx:V,my:Q}=U(b);c(y.current.zoom,{x:m.current.panX+V-m.current.mx,y:m.current.panY+Q-m.current.my});return}if(!u)return;const{mx:A,my:B}=U(b),{scale:q,ox:G,oy:j,cH:W}=g(),D=n.find(V=>V.id===u.id);if(D){if(u.type==="move"){const V=D.length*q,Q=D.height*q,ne=A-u.offX,ge=B-u.offY;s(D.id,{sideX:Math.round((ne-G-V/2)/q),sideY:Math.max(0,Math.round((j+W-ge-Q/2)/q))})}else if(u.type==="rotate"){const V=Math.atan2(A-u.cx,-(B-u.cy))*180/Math.PI;s(D.id,{sideAngle:Math.round(V*10)/10})}}},w=()=>d(null),S=(u==null?void 0:u.type)==="pan"||u?"grabbing":"crosshair";return H.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[H.jsx("canvas",{ref:a,style:{width:"100%",height:"100%",cursor:S,display:"block"},onMouseDown:R,onMouseMove:N,onMouseUp:w,onMouseLeave:w}),H.jsxs("div",{style:{position:"absolute",bottom:10,right:10,display:"flex",gap:4,alignItems:"center"},children:[H.jsx("button",{onClick:()=>c(Math.min(20,y.current.zoom*1.3),y.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"+"}),H.jsx("button",{onClick:()=>c(Math.max(.5,y.current.zoom/1.3),y.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"−"}),H.jsxs("button",{onClick:()=>c(1,{x:0,y:0}),style:{padding:"0 8px",height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#00ddaa",cursor:"pointer",fontSize:10,fontFamily:"monospace"},children:[h.toFixed(1),"× ↺"]})]})]})});function Gw({container:t,boxes:e,selectedId:n,onSelectBox:i,onMoveBox:r,collisions:s}){const o=Te.useRef(null),[a,l]=Te.useState(null),[u,d]=Te.useState({x:0,y:0}),h=Te.useRef(1),f=50,p=Te.useCallback(()=>{const g=o.current;if(!g)return 1;const x=g.getBoundingClientRect();return Math.min((x.width-f*2)/t.innerLength,(x.height-f*2)/t.innerWidth)},[t]),v=Te.useCallback(()=>{const g=o.current;if(!g)return;const x=g.getContext("2d"),U=g.getBoundingClientRect(),P=Math.min(window.devicePixelRatio||1,2);g.width=U.width*P,g.height=U.height*P,x.scale(P,P);const R=U.width,N=U.height,w=p();h.current=w;const S=f,b=f,A=t.innerLength*w,B=t.innerWidth*w;x.fillStyle="#18253a",x.fillRect(0,0,R,N),x.strokeStyle="#ffffff10",x.lineWidth=.5;for(let G=1e3;G<t.innerLength;G+=1e3)x.beginPath(),x.moveTo(S+G*w,b),x.lineTo(S+G*w,b+B),x.stroke();for(let G=500;G<t.innerWidth;G+=500)x.beginPath(),x.moveTo(S,b+G*w),x.lineTo(S+A,b+G*w),x.stroke();x.strokeStyle="#00ffaa",x.lineWidth=2,x.strokeRect(S,b,A,B);const q=(t.innerWidth-t.doorWidth)/2;x.strokeStyle="#00ffaa88",x.lineWidth=3,x.setLineDash([8,4]),x.beginPath(),x.moveTo(S+A,b+q*w),x.lineTo(S+A,b+(q+t.doorWidth)*w),x.stroke(),x.setLineDash([]),x.fillStyle="#00ffaa",x.font="bold 11px monospace",x.textAlign="center",x.fillText(`${t.innerLength} mm`,S+A/2,b-16),x.save(),x.translate(S-20,b+B/2),x.rotate(-Math.PI/2),x.fillText(`${t.innerWidth} mm`,0,0),x.restore(),x.fillStyle="#00ffaa66",x.font="10px sans-serif",x.textAlign="left",x.fillText("DOOR →",S+A+8,b+B/2+4),e.forEach(G=>{const j=S+G.x*w,W=b+G.y*w,D=G.length*w,V=G.width*w,Q=G.id===n,ne=s.has(G.id);x.fillStyle="rgba(0,0,0,0.2)",x.fillRect(j+2,W+2,D,V),x.fillStyle=G.color+(ne?"cc":"99"),x.fillRect(j,W,D,V),x.strokeStyle=ne?"#ff4444":Q?"#ffffff":G.color,x.lineWidth=Q?2:1.5,x.strokeRect(j,W,D,V),x.strokeStyle=G.color+"44",x.lineWidth=.5,x.beginPath(),x.moveTo(j,W),x.lineTo(j+D,W+V),x.moveTo(j+D,W),x.lineTo(j,W+V),x.stroke();const ge=Math.max(8,Math.min(D,V)*.16);x.fillStyle="#ffffffcc",x.font=`${Q?"bold ":""}${ge}px sans-serif`,x.textAlign="center",x.textBaseline="middle",x.fillText(G.preset,j+D/2,W+V/2-ge*.5),x.font=`${Math.max(7,ge*.8)}px monospace`,x.fillStyle="#ffffff88",x.fillText(`${G.length}×${G.width}×${G.height}`,j+D/2,W+V/2+ge*.5),Q&&(x.strokeStyle="#ffffff",x.lineWidth=2,x.setLineDash([4,3]),x.strokeRect(j-3,W-3,D+6,V+6),x.setLineDash([]))})},[t,e,n,s,p]);Te.useEffect(()=>{v()},[v]),Te.useEffect(()=>(window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[v]);const y=g=>{const x=o.current.getBoundingClientRect();return{cx:g.clientX-x.left,cy:g.clientY-x.top}},m=g=>{const{cx:x,cy:U}=y(g),P=h.current;for(let R=e.length-1;R>=0;R--){const N=e[R],w=f+N.x*P,S=f+N.y*P,b=N.length*P,A=N.width*P;if(x>=w&&x<=w+b&&U>=S&&U<=S+A){i(N.id),l(N.id),d({x:x-w,y:U-S});return}}i(null)},c=g=>{if(!a)return;const{cx:x,cy:U}=y(g),P=h.current;r(a,Math.round((x-f-u.x)/P),Math.round((U-f-u.y)/P))},_=()=>l(null);return H.jsx("canvas",{ref:o,style:{width:"100%",height:"100%",cursor:a?"grabbing":"crosshair",display:"block"},onMouseDown:m,onMouseMove:c,onMouseUp:_,onMouseLeave:_})}function Ww({container:t,boxes:e,selectedId:n}){const i=Te.useRef(null),r=Te.useRef({}),s=Te.useRef(null);return Te.useEffect(()=>{const o=i.current;if(!o)return;const a=o.clientWidth,l=o.clientHeight,u=new Dw;u.background=new Ge(14477557),u.fog=new Ud(14477557,4e-5);const d=new _n(50,a/l,10,1e5),h=new Lw({antialias:!0});h.setSize(a,l),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.shadowMap.enabled=!0,h.shadowMap.type=v_,o.appendChild(h.domElement),u.add(new kw(16777215,1.2));const f=new Ow(16777215,1.8);f.position.set(15e3,2e4,1e4),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.camera.near=100,f.shadow.camera.far=5e4,f.shadow.camera.left=-15e3,f.shadow.camera.right=15e3,f.shadow.camera.top=15e3,f.shadow.camera.bottom=-15e3,u.add(f);const p=new qt(new Li(6e4,6e4),new Ju({color:13162728}));p.rotation.x=-Math.PI/2,p.position.y=-5,p.receiveShadow=!0,u.add(p),u.add(new Bw(4e4,40,8952251,11189196)),r.current={scene:u,camera:d,renderer:h,mount:o};let v=!1,y=0,m=0,c=.7,_=.55,g=2e4;const x=new X(6e3,1200,0),U=()=>{d.position.set(x.x+g*Math.sin(_)*Math.cos(c),x.y+g*Math.cos(_),x.z+g*Math.sin(_)*Math.sin(c)),d.lookAt(x)};U();const P=A=>{v=!0,y=A.clientX,m=A.clientY},R=A=>{v&&(c+=(A.clientX-y)*.005,_=Math.max(.1,Math.min(Math.PI/2-.05,_-(A.clientY-m)*.005)),y=A.clientX,m=A.clientY,U())},N=()=>{v=!1},w=A=>{g=Math.max(4e3,Math.min(45e3,g+A.deltaY*12)),U()};h.domElement.addEventListener("mousedown",P),h.domElement.addEventListener("mousemove",R),h.domElement.addEventListener("mouseup",N),h.domElement.addEventListener("wheel",w);const S=()=>{s.current=requestAnimationFrame(S),h.render(u,d)};S();const b=()=>{const A=o.clientWidth,B=o.clientHeight;d.aspect=A/B,d.updateProjectionMatrix(),h.setSize(A,B)};return window.addEventListener("resize",b),()=>{cancelAnimationFrame(s.current),window.removeEventListener("resize",b),h.domElement.removeEventListener("mousedown",P),h.domElement.removeEventListener("mousemove",R),h.domElement.removeEventListener("mouseup",N),h.domElement.removeEventListener("wheel",w),o.contains(h.domElement)&&o.removeChild(h.domElement),h.dispose()}},[]),Te.useEffect(()=>{const{scene:o}=r.current;if(!o)return;const a=[];o.traverse(f=>{f.userData.dynamic&&a.push(f)}),a.forEach(f=>o.remove(f));const l=new Rf(new Zp(new Er(t.innerLength,t.innerHeight,t.innerWidth)),new wl({color:65450}));l.position.set(t.innerLength/2,t.innerHeight/2,0),l.userData.dynamic=!0,o.add(l);const u=new qt(new Li(t.innerLength,t.innerWidth),new Ju({color:1718826,transparent:!0,opacity:.4,side:Dn}));u.rotation.x=-Math.PI/2,u.position.set(t.innerLength/2,2,0),u.receiveShadow=!0,u.userData.dynamic=!0,o.add(u);const d=new Ju({color:8956620,transparent:!0,opacity:.1,side:Dn});[-1,1].forEach(f=>{const p=new qt(new Li(t.innerLength,t.innerHeight),d);p.position.set(t.innerLength/2,t.innerHeight/2,f*t.innerWidth/2),p.userData.dynamic=!0,o.add(p)});const h=new qt(new Li(t.innerWidth,t.innerHeight),d);h.rotation.y=Math.PI/2,h.position.set(0,t.innerHeight/2,0),h.userData.dynamic=!0,o.add(h),e.forEach(f=>{const p=new Ge(f.color),v=f.id===n,y=new Er(f.length,f.height,f.width),m=new qt(y,new Uw({color:p,specular:2236962,shininess:40,transparent:!0,opacity:v?1:.88}));m.position.set(f.x+f.length/2,f.z+f.height/2,f.y-t.innerWidth/2+f.width/2),m.castShadow=!0,m.userData.dynamic=!0,o.add(m);const c=new Rf(new Zp(y),new wl({color:v?16777215:0,transparent:!0,opacity:v?.9:.25}));c.position.copy(m.position),c.userData.dynamic=!0,o.add(c)})},[t,e,n]),H.jsx("div",{ref:i,style:{width:"100%",height:"100%",cursor:"grab"}})}function Xw(){const[t,e]=Te.useState([]),[n,i]=Te.useState(null),[r,s]=Te.useState("car"),[o,a]=Te.useState(!1),[l,u]=Te.useState("hilux_dc"),[d,h]=Te.useState({length:5300,width:1850,height:1800,weight:2e3,label:""}),[f,p]=Te.useState({...zw}),[v,y]=Te.useState(!1),[m,c]=Te.useState([]),[_,g]=Te.useState([]),[x,U]=Te.useState([]),[P,R]=Te.useState(null),[N,w]=Te.useState(!1),[S,b]=Te.useState("eu_pallet"),[A,B]=Te.useState({length:1e3,width:800,height:800,weight:50,label:""}),[q,G]=Te.useState("My Project"),j=Te.useRef([]);j.current=t;const W=Te.useRef(null),D=Te.useRef(null),V=()=>{const T={projectName:q,container:f,vehicles:t,boxes:x},C=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),ee=document.createElement("a");ee.href=URL.createObjectURL(C),ee.download=`${q.replace(/\s+/g,"_")||"project"}.clp.json`,ee.click(),URL.revokeObjectURL(ee.href)},Q=T=>{const C=new FileReader;C.onload=ee=>{try{const Z=JSON.parse(ee.target.result);Z.container&&p(Z.container),Z.vehicles&&(e(Z.vehicles),i(null)),Z.boxes&&(U(Z.boxes),R(null)),Z.projectName&&G(Z.projectName)}catch{alert("ไฟล์ไม่ถูกต้อง")}},C.readAsText(T)},ne=()=>{var ee;const T=(ee=W.current)==null?void 0:ee.getCanvas();if(!T){alert("สลับไปหน้า Car Load ก่อน");return}const C=document.createElement("a");C.href=T.toDataURL("image/png"),C.download=`${q.replace(/\s+/g,"_")||"layout"}.png`,C.click()},ge=()=>{var Z;const T=(Z=W.current)==null?void 0:Z.getCanvas();if(!T){alert("สลับไปหน้า Car Load ก่อน");return}const C=T.toDataURL("image/png"),ee=window.open("","_blank");ee.document.write(`<!DOCTYPE html><html><head><title>${q}</title><style>*{margin:0;padding:0}body{background:#fff}img{max-width:100%;display:block}h3{font-family:sans-serif;padding:8px 12px;font-size:13px}@media print{h3{margin:0}}</style></head><body><h3>${q} — ${f.name} | ${new Date().toLocaleDateString("th-TH")}</h3><img src="${C}"/></body></html>`),ee.document.close(),ee.addEventListener("load",()=>ee.print())},be=t.reduce((T,C)=>T+C.weight,0),J=be>f.maxPayload,re=Te.useMemo(()=>{if(!t.length)return{lenUsed:0,lenLeft:f.innerLength};let T=0;return t.forEach(C=>{const ee=C.x+(C.rotated?C.width:C.length);ee>T&&(T=ee)}),{lenUsed:T,lenLeft:f.innerLength-T}},[t,f]),de=Te.useMemo(()=>{const T=new Set;for(let C=0;C<t.length;C++)for(let ee=C+1;ee<t.length;ee++){const Z=t[C],ae=t[ee],Be=Z.rotated?Z.width:Z.length,oe=Z.rotated?Z.length:Z.width,ve=ae.rotated?ae.width:ae.length,je=ae.rotated?ae.length:ae.width;Z.x<ae.x+ve&&Z.x+Be>ae.x&&Z.y<ae.y+je&&Z.y+oe>ae.y&&(T.add(Z.id),T.add(ae.id))}return t.forEach(C=>{const ee=C.rotated?C.width:C.length,Z=C.rotated?C.length:C.width;(C.x<0||C.y<0||C.x+ee>f.innerLength||C.y+Z>f.innerWidth)&&T.add(C.id)}),T},[t,f]),he=()=>{const T=tm.find(Z=>Z.id===l),C=l==="custom",ee={id:im(),preset:C?d.label||"Custom":T.name,length:C?d.length:T.length,width:C?d.width:T.width,height:C?d.height:T.height,weight:C?d.weight:T.weight,cabRatio:C?.5:T.cabRatio,x:200,y:Math.round((f.innerWidth-(C?d.width:T.width))/2),rotated:!1,rearLifted:!1,color:Ra[t.length%Ra.length],sideX:200,sideY:0,sideAngle:0,sideImage:null,removeBg:!0,flipX:!1,imgRealLength:C?d.length:T.length,imgRealHeight:C?d.height:T.height};Pe(),e(Z=>[...Z,ee]),i(ee.id),a(!1)},Re=(T,C)=>{const ee=new FileReader;ee.onload=Z=>Se(T,{sideImage:Z.target.result}),ee.readAsDataURL(C)},Pe=Te.useCallback(()=>{c(T=>[...T.slice(-49),j.current]),g([])},[]),ke=Te.useCallback(()=>{c(T=>{if(!T.length)return T;const C=T[T.length-1];return g(ee=>[j.current,...ee.slice(0,49)]),e(C),T.slice(0,-1)})},[]),ce=Te.useCallback(()=>{g(T=>{if(!T.length)return T;const C=T[0];return c(ee=>[...ee.slice(-49),j.current]),e(C),T.slice(1)})},[]);Te.useEffect(()=>{const T=C=>{C.target.tagName==="INPUT"||C.target.tagName==="TEXTAREA"||(C.ctrlKey&&!C.shiftKey&&C.key==="z"&&(C.preventDefault(),ke()),C.ctrlKey&&(C.key==="y"||C.shiftKey&&C.key==="z")&&(C.preventDefault(),ce()))};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[ke,ce]);const I=Te.useMemo(()=>{const T=new Set;for(let C=0;C<x.length;C++)for(let ee=C+1;ee<x.length;ee++){const Z=x[C],ae=x[ee];Z.x<ae.x+ae.length&&Z.x+Z.length>ae.x&&Z.y<ae.y+ae.width&&Z.y+Z.width>ae.y&&(T.add(Z.id),T.add(ae.id))}return x.forEach(C=>{(C.x<0||C.y<0||C.x+C.length>f.innerLength||C.y+C.width>f.innerWidth)&&T.add(C.id)}),T},[x,f]),ze=x.reduce((T,C)=>T+C.weight,0),Ne=()=>{const T=nm.find(Z=>Z.id===S),C=S==="box_custom";Pe();const ee={id:im(),preset:C?A.label||"Custom":T.name,length:C?A.length:T.length,width:C?A.width:T.width,height:C?A.height:T.height,weight:C?A.weight:T.weight,x:200,y:Math.round((f.innerWidth-(C?A.width:T.width))/2),z:0,color:Ra[x.length%Ra.length]};U(Z=>[...Z,ee]),R(ee.id),w(!1)},we=(T,C)=>U(ee=>ee.map(Z=>Z.id===T?{...Z,...C}:Z)),pe=(T,C,ee)=>we(T,{x:Math.max(0,C),y:Math.max(0,ee)}),nt=T=>{Pe(),U(C=>C.filter(ee=>ee.id!==T)),P===T&&R(null)},Se=(T,C)=>e(ee=>ee.map(Z=>Z.id===T?{...Z,...C}:Z)),Ie=T=>{Pe(),e(C=>C.filter(ee=>ee.id!==T)),n===T&&i(null)},L=()=>{Pe();const T=[...t].sort((ee,Z)=>Z.length-ee.length);let C=100;e(T.map(ee=>{const Z={...ee,x:C,y:Math.round((f.innerWidth-(ee.rotated?ee.length:ee.width))/2)};return C+=(ee.rotated?ee.width:ee.length)+200,Z}))},M=re.lenUsed/f.innerLength*100,Y=be/f.maxPayload*100,O={app:{fontFamily:"'Segoe UI','Noto Sans Thai',sans-serif",background:"#1c2333",color:"#e8eaf5",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",fontSize:13},hdr:{background:"linear-gradient(135deg,#1e3a5f,#2d5a8e)",padding:"8px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #00ddaa55",flexShrink:0},body:{display:"flex",flex:1,overflow:"hidden"},side:{width:290,background:"#212a3e",borderRight:"1px solid #2e3a52",display:"flex",flexDirection:"column",overflow:"hidden",flexShrink:0},sec:{padding:"10px 12px",borderBottom:"1px solid #2e3a52"},lbl:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#00ddaa",marginBottom:6},vp:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},tb:{display:"flex",gap:5,padding:"6px 10px",background:"#1c2840",borderBottom:"1px solid #2e3a52",alignItems:"center",flexShrink:0},va:{flex:1,position:"relative",overflow:"hidden"},btn:{padding:"5px 10px",borderRadius:5,border:"1px solid #3a4a66",background:"#263048",color:"#c8cedf",cursor:"pointer",fontSize:11,fontWeight:500},btnA:{background:"#00ddaa22",borderColor:"#00ddaa",color:"#00ddaa"},btnP:{background:"linear-gradient(135deg,#00ddaa,#00aa88)",border:"none",color:"#0a1a14",fontWeight:700},btnD:{background:"#ff44441a",borderColor:"#ff6666",color:"#ff8888"},inp:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},sel:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},card:(T,C)=>({padding:"7px 9px",borderRadius:6,border:`1px solid ${C?"#ff6666":T?"#00ddaa":"#2e3a52"}`,background:T?"#00ddaa15":"#1e2a40",cursor:"pointer",marginBottom:5}),bar:{height:4,borderRadius:2,background:"#2e3a52",marginTop:3,overflow:"hidden"},fill:(T,C)=>({height:"100%",width:`${Math.min(100,T)}%`,background:T>95?"#ff5555":C,borderRadius:2,transition:"width .3s"}),badge:T=>({display:"inline-block",padding:"1px 5px",borderRadius:3,fontSize:9,fontWeight:600,background:T+"22",color:T,marginLeft:5}),status:{padding:"5px 12px",background:"#1a2235",borderTop:"1px solid #2e3a52",display:"flex",justifyContent:"space-between",fontSize:10,color:"#7a8aaa",flexShrink:0}};return H.jsxs("div",{style:O.app,children:[H.jsxs("div",{style:O.hdr,children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[H.jsx("div",{style:{width:32,height:32,background:"linear-gradient(135deg,#00ffaa,#00aa77)",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#0a0a18"},children:"📦"}),H.jsxs("div",{children:[H.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#00ffaa"},children:"CONTAINER LOADING PLANNER"}),H.jsx("input",{value:q,onChange:T=>G(T.target.value),style:{background:"transparent",border:"none",borderBottom:"1px solid #3a4a66",color:"#aab",fontSize:10,outline:"none",width:180,padding:"1px 2px"},placeholder:"ชื่อ Project..."})]})]}),H.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[H.jsx("button",{style:O.btn,onClick:V,title:"Export โปรเจกต์เป็น JSON",children:"💾 Export"}),H.jsxs("label",{style:{...O.btn,cursor:"pointer"},title:"Import โปรเจกต์จาก JSON",children:["📂 Import",H.jsx("input",{ref:D,type:"file",accept:".json,.clp.json",style:{display:"none"},onChange:T=>{T.target.files[0]&&(Q(T.target.files[0]),T.target.value="")}})]}),H.jsx("button",{style:O.btn,onClick:ne,title:"ดาวน์โหลด PNG (Car Load view)",children:"⬇ PNG"}),H.jsx("button",{style:O.btn,onClick:ge,title:"Print / PDF (Car Load view)",children:"🖨 Print"}),H.jsx("button",{style:O.btn,onClick:L,disabled:!t.length,children:"⚡ Auto"})]})]}),H.jsxs("div",{style:O.body,children:[H.jsxs("div",{style:O.side,children:[H.jsxs("div",{style:O.sec,children:[H.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:H.jsxs("div",{onClick:()=>y(!v),style:{...O.lbl,cursor:"pointer",marginBottom:0},children:["📦 Container ",v?"▲":"▼"]})}),H.jsx("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:H.jsx("span",{style:{color:"#888",fontSize:11},children:f.name})}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:[H.jsx("span",{style:{color:"#888",fontSize:10},children:"L×W×H"}),H.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:10},children:[f.innerLength,"×",f.innerWidth,"×",f.innerHeight]})]}),v&&H.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:5},children:[H.jsx("select",{style:O.sel,onChange:T=>{const C=em.find(ee=>ee.name===T.target.value);C&&p({...C})},children:em.map(T=>H.jsx("option",{value:T.name,children:T.name},T.name))}),H.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[["ยาว (mm)","innerLength"],["กว้าง (mm)","innerWidth"],["สูง (mm)","innerHeight"],["Door H (mm)","doorHeight"],["Door W (mm)","doorWidth"],["Max kg","maxPayload"]].map(([T,C])=>H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),H.jsx("input",{style:O.inp,type:"number",value:f[C],onChange:ee=>p(Z=>({...Z,[C]:Number(ee.target.value),name:"Custom"}))})]},C))})]})]}),H.jsxs("div",{style:O.sec,children:[H.jsx("div",{style:O.lbl,children:"📐 Clearance & Weight"}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0"},children:[H.jsx("span",{style:{color:"#888",fontSize:11},children:"ใช้ความยาว"}),H.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11},children:[Math.round(re.lenUsed)," mm (",Math.round(M),"%)"]})]}),H.jsx("div",{style:O.bar,children:H.jsx("div",{style:O.fill(M,"#00ffaa")})}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:4},children:[H.jsx("span",{style:{color:"#888",fontSize:11},children:"เหลือ"}),H.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:re.lenLeft<500?"#ff6666":"#00ffaa"},children:[Math.round(re.lenLeft)," mm"]})]}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:6},children:[H.jsx("span",{style:{color:"#888",fontSize:11},children:"น้ำหนักรวม"}),H.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:J?"#ff4444":"#ddd"},children:[be.toLocaleString()," / ",f.maxPayload.toLocaleString()," kg"]})]}),H.jsx("div",{style:O.bar,children:H.jsx("div",{style:O.fill(Y,J?"#ff4444":"#F59E0B")})}),J&&H.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:3,fontWeight:600},children:["⚠️ เกิน ",(be-f.maxPayload).toLocaleString()," kg"]}),de.size>0&&H.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:4,fontWeight:600},children:["⚠️ ชนกัน/เกินขอบ ",de.size," คัน"]})]}),r==="car"?H.jsxs("div",{style:{...O.sec,flex:1,overflow:"auto"},children:[H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[H.jsxs("div",{style:O.lbl,children:["🚗 รถในตู้ (",t.length,")"]}),H.jsx("button",{style:{...O.btn,...O.btnP,padding:"3px 8px"},onClick:()=>a(!o),children:"+ เพิ่มรถ"})]}),o&&H.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[H.jsx("select",{style:O.sel,value:l,onChange:T=>u(T.target.value),children:tm.map(T=>H.jsxs("option",{value:T.id,children:[T.name," ",T.id!=="custom"?`(${T.length}×${T.width})`:""]},T.id))}),l==="custom"&&H.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["น้ำหนัก kg","weight","number"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"]].map(([T,C,ee])=>H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),H.jsx("input",{style:O.inp,type:ee,value:d[C],onChange:Z=>h({...d,[C]:ee==="number"?Number(Z.target.value):Z.target.value})})]},C))}),H.jsx("button",{style:{...O.btn,...O.btnP,width:"100%",marginTop:7},onClick:he,children:"✓ เพิ่มรถเข้าตู้"})]}),t.map(T=>H.jsxs("div",{style:O.card(T.id===n,de.has(T.id)),onClick:()=>i(T.id===n?null:T.id),children:[H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[H.jsx("div",{style:{width:10,height:10,borderRadius:2,background:T.color}}),H.jsx("span",{style:{fontWeight:600,fontSize:11},children:T.preset})]}),H.jsx("button",{style:{...O.btn,...O.btnD,padding:"1px 5px",fontSize:10},onClick:C=>{C.stopPropagation(),Ie(T.id)},children:"✕"})]}),H.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[T.length,"×",T.width,"×",T.height," mm • ",T.weight," kg",T.rearLifted&&H.jsx("span",{style:O.badge("#F59E0B"),children:"ยกล้อหลัง"}),T.rotated&&H.jsx("span",{style:O.badge("#8B5CF6"),children:"หมุน 90°"})]}),T.id===n&&H.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:5},children:[H.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),H.jsx("input",{style:O.inp,type:"number",value:T.x,onChange:C=>Se(T.id,{x:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),H.jsx("input",{style:O.inp,type:"number",value:T.y,onChange:C=>Se(T.id,{y:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]}),H.jsxs("div",{style:{display:"flex",gap:4},children:[H.jsx("button",{style:{...O.btn,flex:1,...T.rearLifted?O.btnA:{},fontSize:10,padding:3},onClick:C=>{C.stopPropagation(),Se(T.id,{rearLifted:!T.rearLifted})},children:"⬆ ยกล้อหลัง"}),H.jsx("button",{style:{...O.btn,flex:1,...T.rotated?O.btnA:{},fontSize:10,padding:3},onClick:C=>{C.stopPropagation(),Se(T.id,{rotated:!T.rotated})},children:"🔄 หมุน 90°"})]}),H.jsx("button",{style:{...O.btn,fontSize:10,padding:3},onClick:C=>{C.stopPropagation(),Se(T.id,{x:Math.round(T.x/50)*50,y:Math.round(T.y/50)*50})},children:"📐 Snap 50mm"}),H.jsxs("div",{style:{borderTop:"1px solid #252540",paddingTop:5},children:[H.jsx("div",{style:{fontSize:9,color:"#00ffaa88",marginBottom:4,fontWeight:600,letterSpacing:1},children:"SIDE ELEV"}),H.jsxs("div",{style:{display:"flex",gap:4,marginBottom:4},children:[H.jsxs("label",{style:{...O.btn,flex:1,textAlign:"center",cursor:"pointer",fontSize:10,padding:"4px 0"},onClick:C=>C.stopPropagation(),children:["🖼 ",T.sideImage?"เปลี่ยนรูป":"Upload รูป",H.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:C=>{C.target.files[0]&&Re(T.id,C.target.files[0])},onClick:C=>C.stopPropagation()})]}),H.jsx("button",{style:{...O.btn,fontSize:10,padding:"4px 6px",...T.removeBg?O.btnA:{}},onClick:C=>{C.stopPropagation(),Se(T.id,{removeBg:!T.removeBg})},title:"ลบพื้นหลังสีขาว",children:"✂ BG"}),H.jsx("button",{style:{...O.btn,fontSize:10,padding:"4px 6px",...T.flipX?O.btnA:{}},onClick:C=>{C.stopPropagation(),Se(T.id,{flipX:!T.flipX})},title:"พลิกภาพซ้าย-ขวา",children:"⇄ Flip"})]}),H.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"Side X"}),H.jsx("input",{style:O.inp,type:"number",value:T.sideX??200,onChange:C=>Se(T.id,{sideX:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"Floor Y"}),H.jsx("input",{style:O.inp,type:"number",value:T.sideY??0,onChange:C=>Se(T.id,{sideY:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"องศา°"}),H.jsx("input",{style:O.inp,type:"number",step:"0.5",value:T.sideAngle??0,onChange:C=>Se(T.id,{sideAngle:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]}),H.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginTop:5},children:[H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความยาวรูป (mm)"}),H.jsx("input",{style:O.inp,type:"number",step:"1",value:T.imgRealLength??T.length,onChange:C=>Se(T.id,{imgRealLength:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความสูงรูป (mm)"}),H.jsx("input",{style:O.inp,type:"number",step:"1",value:T.imgRealHeight??T.height,onChange:C=>Se(T.id,{imgRealHeight:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]}),H.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}})]})]})]},T.id)),!t.length&&H.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่มรถ" เพื่อเริ่มวางแผน'})]}):H.jsxs("div",{style:{...O.sec,flex:1,overflow:"auto"},children:[H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[H.jsxs("div",{style:O.lbl,children:["📦 สินค้า (",x.length,") • ",ze.toLocaleString()," kg"]}),H.jsx("button",{style:{...O.btn,...O.btnP,padding:"3px 8px"},onClick:()=>w(!N),children:"+ เพิ่ม"})]}),N&&H.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[H.jsx("select",{style:O.sel,value:S,onChange:T=>b(T.target.value),children:nm.map(T=>H.jsxs("option",{value:T.id,children:[T.name," ",T.id!=="box_custom"?`(${T.length}×${T.width}×${T.height}mm)`:""]},T.id))}),S==="box_custom"&&H.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"],["น้ำหนัก kg","weight","number"]].map(([T,C,ee])=>H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:T}),H.jsx("input",{style:O.inp,type:ee,value:A[C],onChange:Z=>B({...A,[C]:ee==="number"?Number(Z.target.value):Z.target.value})})]},C))}),H.jsx("button",{style:{...O.btn,...O.btnP,width:"100%",marginTop:7},onClick:Ne,children:"✓ เพิ่มสินค้า"})]}),x.map(T=>H.jsxs("div",{style:O.card(T.id===P,I.has(T.id)),onClick:()=>R(T.id===P?null:T.id),children:[H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[H.jsx("div",{style:{width:10,height:10,borderRadius:2,background:T.color}}),H.jsx("span",{style:{fontWeight:600,fontSize:11},children:T.preset})]}),H.jsx("button",{style:{...O.btn,...O.btnD,padding:"1px 5px",fontSize:10},onClick:C=>{C.stopPropagation(),nt(T.id)},children:"✕"})]}),H.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[T.length,"×",T.width,"×",T.height," mm • ",T.weight," kg"]}),T.id===P&&H.jsxs("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),H.jsx("input",{style:O.inp,type:"number",value:T.x,onChange:C=>we(T.id,{x:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),H.jsx("input",{style:O.inp,type:"number",value:T.y,onChange:C=>we(T.id,{y:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),H.jsxs("div",{children:[H.jsx("label",{style:{fontSize:9,color:"#777"},children:"Z พื้น (mm)"}),H.jsx("input",{style:O.inp,type:"number",value:T.z,onChange:C=>we(T.id,{z:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]})]},T.id)),!x.length&&H.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่ม" เพื่อเพิ่มสินค้า'})]})]}),H.jsxs("div",{style:O.vp,children:[H.jsxs("div",{style:O.tb,children:[H.jsx("span",{style:{fontSize:10,color:"#555",marginRight:3},children:"VIEW:"}),[["car","🚗 Car Load"],["boxtop","📦 Box Top"],["box3d","📦 Box 3D"]].map(([T,C])=>H.jsx("button",{style:{...O.btn,...r===T?O.btnA:{},padding:"3px 9px"},onClick:()=>s(T),children:C},T)),H.jsx("div",{style:{flex:1}}),H.jsx("button",{style:{...O.btn,padding:"3px 8px",opacity:m.length?1:.35},onClick:ke,disabled:!m.length,title:"Ctrl+Z",children:"↩ Undo"}),H.jsx("button",{style:{...O.btn,padding:"3px 8px",opacity:_.length?1:.35},onClick:ce,disabled:!_.length,title:"Ctrl+Y",children:"↪ Redo"})]}),H.jsxs("div",{style:O.va,children:[r==="car"&&H.jsx(Vw,{ref:W,container:f,vehicles:t,selectedId:n,onSelectVehicle:i,onUpdateVehicle:Se}),r==="boxtop"&&H.jsx(Gw,{container:f,boxes:x,selectedId:P,onSelectBox:R,onMoveBox:pe,collisions:I}),r==="box3d"&&H.jsx(Ww,{container:f,boxes:x,selectedId:P})]})]})]}),H.jsxs("div",{style:O.status,children:[H.jsxs("span",{children:[f.name," | ",f.innerLength,"×",f.innerWidth,"×",f.innerHeight," mm"]}),r==="car"?H.jsxs("span",{children:["Vehicles: ",t.length," | ",be.toLocaleString()," kg | Length: ",Math.round(M),"%"]}):H.jsxs("span",{children:["Boxes: ",x.length," | ",ze.toLocaleString()," kg ",ze>f.maxPayload?`⚠️ +${(ze-f.maxPayload).toLocaleString()}kg`:""]})]})]})}g_(document.getElementById("root")).render(H.jsx(Te.StrictMode,{children:H.jsx(Xw,{})}));
