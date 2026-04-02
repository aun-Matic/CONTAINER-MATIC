(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Cm={exports:{}},Xl={},Rm={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),w_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),C_=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),D_=Symbol.for("react.memo"),I_=Symbol.for("react.lazy"),uh=Symbol.iterator;function U_(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Lm={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||bm}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dm(){}Dm.prototype=Vs.prototype;function Qf(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||bm}var Jf=Qf.prototype=new Dm;Jf.constructor=Qf;Pm(Jf,Vs.prototype);Jf.isPureReactComponent=!0;var ch=Array.isArray,Im=Object.prototype.hasOwnProperty,ed={current:null},Um={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Im.call(e,i)&&!Um.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wo,type:t,key:s,ref:o,props:r,_owner:ed.current}}function N_(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function F_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F_(""+t.key):e.toString(36)}function ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case w_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mu(o,0):i,ch(r)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),ja(r,e,n,"",function(u){return u})):r!=null&&(td(r)&&(r=N_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ch(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mu(s,a);o+=ja(s,e,n,l,r)}else if(l=U_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mu(s,a++),o+=ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var i=[],r=0;return ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Ya={transition:null},k_={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:ed};function Fm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Vs;qe.Fragment=T_;qe.Profiler=C_;qe.PureComponent=Qf;qe.StrictMode=A_;qe.Suspense=L_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;qe.act=Fm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Im.call(e,l)&&!Um.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Wo,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:b_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:R_,_context:t},t.Consumer=t};qe.createElement=Nm;qe.createFactory=function(t){var e=Nm.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:P_,render:t}};qe.isValidElement=td;qe.lazy=function(t){return{$$typeof:I_,_payload:{_status:-1,_result:t},_init:O_}};qe.memo=function(t,e){return{$$typeof:D_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};qe.unstable_act=Fm;qe.useCallback=function(t,e){return Zt.current.useCallback(t,e)};qe.useContext=function(t){return Zt.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};qe.useEffect=function(t,e){return Zt.current.useEffect(t,e)};qe.useId=function(){return Zt.current.useId()};qe.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return Zt.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};qe.useRef=function(t){return Zt.current.useRef(t)};qe.useState=function(t){return Zt.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return Zt.current.useTransition()};qe.version="18.3.1";Rm.exports=qe;var Se=Rm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=Se,B_=Symbol.for("react.element"),H_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,G_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)V_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:t,key:s,ref:o,props:r,_owner:G_.current}}Xl.Fragment=H_;Xl.jsx=Om;Xl.jsxs=Om;Cm.exports=Xl;var O=Cm.exports,km={exports:{}},_n={},zm={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,G){var Q=U.length;U.push(G);e:for(;0<Q;){var te=Q-1>>>1,ce=U[te];if(0<r(ce,G))U[te]=G,U[Q]=ce,Q=te;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var G=U[0],Q=U.pop();if(Q!==G){U[0]=Q;e:for(var te=0,ce=U.length,Fe=ce>>>1;te<Fe;){var K=2*(te+1)-1,ie=U[K],me=K+1,pe=U[me];if(0>r(ie,Q))me<ce&&0>r(pe,ie)?(U[te]=pe,U[me]=Q,te=me):(U[te]=ie,U[K]=Q,te=K);else if(me<ce&&0>r(pe,Q))U[te]=pe,U[me]=Q,te=me;else break e}}return G}function r(U,G){var Q=U.sortIndex-G.sortIndex;return Q!==0?Q:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=U)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function v(U){if(y=!1,_(U),!x)if(n(l)!==null)x=!0,j(F);else{var G=n(u);G!==null&&Y(v,G.startTime-U)}}function F(U,G){x=!1,y&&(y=!1,c(I),I=-1),p=!0;var Q=f;try{for(_(G),h=n(l);h!==null&&(!(h.expirationTime>G)||U&&!D());){var te=h.callback;if(typeof te=="function"){h.callback=null,f=h.priorityLevel;var ce=te(h.expirationTime<=G);G=t.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(l)&&i(l),_(G)}else i(l);h=n(l)}if(h!==null)var Fe=!0;else{var K=n(u);K!==null&&Y(v,K.startTime-G),Fe=!1}return Fe}finally{h=null,f=Q,p=!1}}var b=!1,w=null,I=-1,E=5,S=-1;function D(){return!(t.unstable_now()-S<E)}function R(){if(w!==null){var U=t.unstable_now();S=U;var G=!0;try{G=w(!0,U)}finally{G?z():(b=!1,w=null)}}else b=!1}var z;if(typeof g=="function")z=function(){g(R)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,V=q.port2;q.port1.onmessage=R,z=function(){V.postMessage(null)}}else z=function(){m(R,0)};function j(U){w=U,b||(b=!0,z())}function Y(U,G){I=m(function(){U(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,j(F))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var Q=f;f=G;try{return U()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=f;f=U;try{return G()}finally{f=Q}},t.unstable_scheduleCallback=function(U,G,Q){var te=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?te+Q:te):Q=te,U){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Q+ce,U={id:d++,callback:G,priorityLevel:U,startTime:Q,expirationTime:ce,sortIndex:-1},Q>te?(U.sortIndex=Q,e(u,U),n(l)===null&&U===n(u)&&(y?(c(I),I=-1):y=!0,Y(v,Q-te))):(U.sortIndex=ce,e(l,U),x||p||(x=!0,j(F))),U},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(U){var G=f;return function(){var Q=f;f=G;try{return U.apply(this,arguments)}finally{f=Q}}}})(Bm);zm.exports=Bm;var X_=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=Se,mn=X_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,Ao={};function Dr(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Ao[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sc=Object.prototype.hasOwnProperty,Y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},hh={};function $_(t){return Sc.call(hh,t)?!0:Sc.call(dh,t)?!1:Y_.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,id);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,id);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,id);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?$_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),ph=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,gu;function fo(t){if(gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+t}var _u=!1;function vu(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function Z_(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=vu(t.type,!1),t;case 11:return t=vu(t.type.render,!1),t;case 1:return t=vu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case Mc:return"Profiler";case sd:return"StrictMode";case Ec:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Vm:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=Xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=J_(t))}function jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ac(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&rd(t,"checked",e,!1)}function Cc(t,e){Ym(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rc(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rc(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ho(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function $m(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function Qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lc(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ic=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uc=null,Ss=null,Ms=null;function xh(t){if(t=Yo(t)){if(typeof Uc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Kl(e),Uc(t.stateNode,t.type,e))}}function Jm(t){Ss?Ms?Ms.push(t):Ms=[t]:Ss=t}function eg(){if(Ss){var t=Ss,e=Ms;if(Ms=Ss=null,xh(t),e)for(t=0;t<e.length;t++)xh(e[t])}}function tg(t,e){return t(e)}function ng(){}var xu=!1;function ig(t,e,n){if(xu)return t(e,n);xu=!0;try{return tg(t,e,n)}finally{xu=!1,(Ss!==null||Ms!==null)&&(ng(),eg())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Nc=!1;if(gi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Nc=!1}function nv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var vo=!1,hl=null,pl=!1,Fc=null,iv={onError:function(t){vo=!0,hl=t}};function rv(t,e,n,i,r,s,o,a,l){vo=!1,hl=null,nv.apply(iv,arguments)}function sv(t,e,n,i,r,s,o,a,l){if(rv.apply(this,arguments),vo){if(vo){var u=hl;vo=!1,hl=null}else throw Error(se(198));pl||(pl=!0,Fc=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(Ir(t)!==t)throw Error(se(188))}function ov(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yh(r),t;if(s===i)return yh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function sg(t){return t=ov(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var ag=mn.unstable_scheduleCallback,Sh=mn.unstable_cancelCallback,av=mn.unstable_shouldYield,lv=mn.unstable_requestPaint,yt=mn.unstable_now,uv=mn.unstable_getCurrentPriorityLevel,ud=mn.unstable_ImmediatePriority,lg=mn.unstable_UserBlockingPriority,ml=mn.unstable_NormalPriority,cv=mn.unstable_LowPriority,ug=mn.unstable_IdlePriority,jl=null,ti=null;function fv(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:pv,dv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(dv(t)/hv|0)|0}var na=64,ia=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=po(a):(s&=o,s!==0&&(i=po(s)))}else o=n&~r,o!==0?i=po(o):s!==0&&(i=po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function _v(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dg,fd,hg,pg,mg,kc=!1,ra=[],Bi=null,Hi=null,Vi=null,bo=new Map,Po=new Map,Ui=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xv(t,e,n,i,r){switch(e){case"focusin":return Bi=Ks(Bi,t,e,n,i,r),!0;case"dragenter":return Hi=Ks(Hi,t,e,n,i,r),!0;case"mouseover":return Vi=Ks(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bo.set(s,Ks(bo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Po.set(s,Ks(Po.get(s)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=_r(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ic=i,n.target.dispatchEvent(i),Ic=null}else return e=Yo(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){$a(t)&&n.delete(e)}function yv(){kc=!1,Bi!==null&&$a(Bi)&&(Bi=null),Hi!==null&&$a(Hi)&&(Hi=null),Vi!==null&&$a(Vi)&&(Vi=null),bo.forEach(Eh),Po.forEach(Eh)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,kc||(kc=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,yv)))}function Lo(t){function e(r){return Zs(r,t)}if(0<ra.length){Zs(ra[0],t);for(var n=1;n<ra.length;n++){var i=ra[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&Zs(Bi,t),Hi!==null&&Zs(Hi,t),Vi!==null&&Zs(Vi,t),bo.forEach(e),Po.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&Ui.shift()}var Es=Si.ReactCurrentBatchConfig,_l=!0;function Sv(t,e,n,i){var r=it,s=Es.transition;Es.transition=null;try{it=1,dd(t,e,n,i)}finally{it=r,Es.transition=s}}function Mv(t,e,n,i){var r=it,s=Es.transition;Es.transition=null;try{it=4,dd(t,e,n,i)}finally{it=r,Es.transition=s}}function dd(t,e,n,i){if(_l){var r=zc(t,e,n,i);if(r===null)Pu(t,e,i,vl,n),Mh(t,i);else if(xv(r,t,e,n,i))i.stopPropagation();else if(Mh(t,i),e&4&&-1<vv.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&dg(s),s=zc(t,e,n,i),s===null&&Pu(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pu(t,e,i,null,n)}}var vl=null;function zc(t,e,n,i){if(vl=null,t=ld(i),t=_r(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uv()){case ud:return 1;case lg:return 4;case ml:case cv:return 16;case ug:return 536870912;default:return 16}default:return 16}}var Oi=null,hd=null,qa=null;function vg(){if(qa)return qa;var t,e=hd,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return qa=r.slice(t,1<i?1-i:void 0)}function Ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function wh(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:wh,this.isPropagationStopped=wh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=vn(Gs),jo=mt({},Gs,{view:0,detail:0}),Ev=vn(jo),Su,Mu,Qs,Yl=mt({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Su=t.screenX-Qs.screenX,Mu=t.screenY-Qs.screenY):Mu=Su=0,Qs=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Th=vn(Yl),wv=mt({},Yl,{dataTransfer:0}),Tv=vn(wv),Av=mt({},jo,{relatedTarget:0}),Eu=vn(Av),Cv=mt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=vn(Cv),bv=mt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=vn(bv),Lv=mt({},Gs,{data:0}),Ah=vn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uv[t])?!!e[t]:!1}function md(){return Nv}var Fv=mt({},jo,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?Ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=vn(Fv),kv=mt({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=vn(kv),zv=mt({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),Bv=vn(zv),Hv=mt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=vn(Hv),Gv=mt({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=vn(Gv),Xv=[9,13,27,32],gd=gi&&"CompositionEvent"in window,xo=null;gi&&"documentMode"in document&&(xo=document.documentMode);var jv=gi&&"TextEvent"in window&&!xo,xg=gi&&(!gd||xo&&8<xo&&11>=xo),Rh=" ",bh=!1;function yg(t,e){switch(t){case"keyup":return Xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function Yv(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(bh=!0,Rh);case"textInput":return t=e.data,t===Rh&&bh?null:t;default:return null}}function $v(t,e){if(ls)return t==="compositionend"||!gd&&yg(t,e)?(t=vg(),qa=hd=Oi=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qv[t.type]:e==="textarea"}function Mg(t,e,n,i){Jm(i),e=xl(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var yo=null,Do=null;function Kv(t){Ig(t,0)}function $l(t){var e=fs(t);if(jm(e))return t}function Zv(t,e){if(t==="change")return e}var Eg=!1;if(gi){var wu;if(gi){var Tu="oninput"in document;if(!Tu){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),Tu=typeof Lh.oninput=="function"}wu=Tu}else wu=!1;Eg=wu&&(!document.documentMode||9<document.documentMode)}function Dh(){yo&&(yo.detachEvent("onpropertychange",wg),Do=yo=null)}function wg(t){if(t.propertyName==="value"&&$l(Do)){var e=[];Mg(e,Do,t,ld(t)),ig(Kv,e)}}function Qv(t,e,n){t==="focusin"?(Dh(),yo=e,Do=n,yo.attachEvent("onpropertychange",wg)):t==="focusout"&&Dh()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Do)}function ex(t,e){if(t==="click")return $l(e)}function tx(t,e){if(t==="input"||t==="change")return $l(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:nx;function Io(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Sc.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Ih(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tg(n.ownerDocument.documentElement,n)){if(i!==null&&_d(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var o=Uh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=gi&&"documentMode"in document&&11>=document.documentMode,us=null,Bc=null,So=null,Hc=!1;function Nh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hc||us==null||us!==dl(i)||(i=us,"selectionStart"in i&&_d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),So&&Io(So,i)||(So=i,i=xl(Bc,"onSelect"),0<i.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Au={},Cg={};gi&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function ql(t){if(Au[t])return Au[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return Au[t]=e[n];return t}var Rg=ql("animationend"),bg=ql("animationiteration"),Pg=ql("animationstart"),Lg=ql("transitionend"),Dg=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){Dg.set(t,e),Dr(e,[t])}for(var Cu=0;Cu<Fh.length;Cu++){var Ru=Fh[Cu],sx=Ru.toLowerCase(),ox=Ru[0].toUpperCase()+Ru.slice(1);tr(sx,"on"+ox)}tr(Rg,"onAnimationEnd");tr(bg,"onAnimationIteration");tr(Pg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(Lg,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Oh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sv(i,e,void 0,t),t.currentTarget=null}function Ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,u),s=l}}}if(pl)throw t=Fc,pl=!1,Fc=null,t}function lt(t,e){var n=e[jc];n===void 0&&(n=e[jc]=new Set);var i=t+"__bubble";n.has(i)||(Ug(e,t,2,!1),n.add(i))}function bu(t,e,n){var i=0;e&&(i|=4),Ug(n,t,i,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[aa]){t[aa]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||bu(n,!1,t),bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,bu("selectionchange",!1,e))}}function Ug(t,e,n,i){switch(_g(e)){case 1:var r=Sv;break;case 4:r=Mv;break;default:r=dd}n=r.bind(null,e,n,t),r=void 0,!Nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ig(function(){var u=s,d=ld(n),h=[];e:{var f=Dg.get(t);if(f!==void 0){var p=pd,x=t;switch(t){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":p=Ov;break;case"focusin":x="focus",p=Eu;break;case"focusout":x="blur",p=Eu;break;case"beforeblur":case"afterblur":p=Eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Bv;break;case Rg:case bg:case Pg:p=Rv;break;case Lg:p=Vv;break;case"scroll":p=Ev;break;case"wheel":p=Wv;break;case"copy":case"cut":case"paste":p=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ch}var y=(e&4)!==0,m=!y&&t==="scroll",c=y?f!==null?f+"Capture":null:f;y=[];for(var g=u,_;g!==null;){_=g;var v=_.stateNode;if(_.tag===5&&v!==null&&(_=v,c!==null&&(v=Ro(g,c),v!=null&&y.push(No(g,v,_)))),m)break;g=g.return}0<y.length&&(f=new p(f,x,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ic&&(x=n.relatedTarget||n.fromElement)&&(_r(x)||x[_i]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?_r(x):null,x!==null&&(m=Ir(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(y=Th,v="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ch,v="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?f:fs(p),_=x==null?f:fs(x),f=new y(v,g+"leave",p,n,d),f.target=m,f.relatedTarget=_,v=null,_r(d)===u&&(y=new y(c,g+"enter",x,n,d),y.target=_,y.relatedTarget=m,v=y),m=v,p&&x)t:{for(y=p,c=x,g=0,_=y;_;_=Or(_))g++;for(_=0,v=c;v;v=Or(v))_++;for(;0<g-_;)y=Or(y),g--;for(;0<_-g;)c=Or(c),_--;for(;g--;){if(y===c||c!==null&&y===c.alternate)break t;y=Or(y),c=Or(c)}y=null}else y=null;p!==null&&kh(h,f,p,y,!1),x!==null&&m!==null&&kh(h,m,x,y,!0)}}e:{if(f=u?fs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var F=Zv;else if(Ph(f))if(Eg)F=tx;else{F=Jv;var b=Qv}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(F=ex);if(F&&(F=F(t,u))){Mg(h,F,n,d);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Rc(f,"number",f.value)}switch(b=u?fs(u):window,t){case"focusin":(Ph(b)||b.contentEditable==="true")&&(us=b,Bc=u,So=null);break;case"focusout":So=Bc=us=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Nh(h,n,d);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Nh(h,n,d)}var w;if(gd)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ls?yg(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(xg&&n.locale!=="ko"&&(ls||I!=="onCompositionStart"?I==="onCompositionEnd"&&ls&&(w=vg()):(Oi=d,hd="value"in Oi?Oi.value:Oi.textContent,ls=!0)),b=xl(u,I),0<b.length&&(I=new Ah(I,t,null,n,d),h.push({event:I,listeners:b}),w?I.data=w:(w=Sg(n),w!==null&&(I.data=w)))),(w=jv?Yv(t,n):$v(t,n))&&(u=xl(u,"onBeforeInput"),0<u.length&&(d=new Ah("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=w))}Ig(h,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ro(t,n),s!=null&&i.unshift(No(t,s,r)),s=Ro(t,e),s!=null&&i.push(No(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ro(n,s),l!=null&&o.unshift(No(n,l,a))):r||(l=Ro(n,s),l!=null&&o.push(No(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function zh(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(ux,"")}function la(t,e,n){if(e=zh(e),zh(t)!==e&&n)throw Error(se(425))}function yl(){}var Vc=null,Gc=null;function Wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(t){return Bh.resolve(null).then(t).catch(dx)}:Xc;function dx(t){setTimeout(function(){throw t})}function Lu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Lo(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ws,Fo="__reactProps$"+Ws,_i="__reactContainer$"+Ws,jc="__reactEvents$"+Ws,hx="__reactListeners$"+Ws,px="__reactHandles$"+Ws;function _r(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[Jn])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Jn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Kl(t){return t[Fo]||null}var Yc=[],ds=-1;function nr(t){return{current:t}}function ct(t){0>ds||(t.current=Yc[ds],Yc[ds]=null,ds--)}function st(t,e){ds++,Yc[ds]=t.current,t.current=e}var Qi={},Gt=nr(Qi),rn=nr(!1),wr=Qi;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function Sl(){ct(rn),ct(Gt)}function Vh(t,e,n){if(Gt.current!==Qi)throw Error(se(168));st(Gt,e),st(rn,n)}function Ng(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Q_(t)||"Unknown",r));return mt({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,wr=Gt.current,st(Gt,t),st(rn,rn.current),!0}function Gh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Ng(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,ct(rn),ct(Gt),st(Gt,t)):ct(rn),st(rn,n)}var ci=null,Zl=!1,Du=!1;function Fg(t){ci===null?ci=[t]:ci.push(t)}function mx(t){Zl=!0,Fg(t)}function ir(){if(!Du&&ci!==null){Du=!0;var t=0,e=it;try{var n=ci;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,Zl=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),ag(ud,ir),r}finally{it=e,Du=!1}}return null}var hs=[],ps=0,El=null,wl=0,Mn=[],En=0,Tr=null,fi=1,di="";function dr(t,e){hs[ps++]=wl,hs[ps++]=El,El=t,wl=e}function Og(t,e,n){Mn[En++]=fi,Mn[En++]=di,Mn[En++]=Tr,Tr=t;var i=fi;t=di;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-Gn(e)+r|n<<r|i,di=s+t}else fi=1<<s|n<<r|i,di=t}function vd(t){t.return!==null&&(dr(t,1),Og(t,1,0))}function xd(t){for(;t===El;)El=hs[--ps],hs[ps]=null,wl=hs[--ps],hs[ps]=null;for(;t===Tr;)Tr=Mn[--En],Mn[En]=null,di=Mn[--En],Mn[En]=null,fi=Mn[--En],Mn[En]=null}var pn=null,hn=null,ft=!1,zn=null;function kg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:fi,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function $c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(ft){var e=hn;if(e){var n=e;if(!Wh(t,e)){if($c(t))throw Error(se(418));e=Gi(n.nextSibling);var i=pn;e&&Wh(t,e)?kg(i,n):(t.flags=t.flags&-4097|2,ft=!1,pn=t)}}else{if($c(t))throw Error(se(418));t.flags=t.flags&-4097|2,ft=!1,pn=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function ua(t){if(t!==pn)return!1;if(!ft)return Xh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wc(t.type,t.memoizedProps)),e&&(e=hn)){if($c(t))throw zg(),Error(se(418));for(;e;)kg(t,e),e=Gi(e.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Gi(t.stateNode.nextSibling):null;return!0}function zg(){for(var t=hn;t;)t=Gi(t.nextSibling)}function Ds(){hn=pn=null,ft=!1}function yd(t){zn===null?zn=[t]:zn.push(t)}var gx=Si.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ca(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jh(t){var e=t._init;return e(t._payload)}function Bg(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Yi(c,g),c.index=0,c.sibling=null,c}function s(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,v){return g===null||g.tag!==6?(g=zu(_,c.mode,v),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,v){var F=_.type;return F===as?d(c,g,_.props.children,v,_.key):g!==null&&(g.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Li&&jh(F)===g.type)?(v=r(g,_.props),v.ref=Js(c,g,_),v.return=c,v):(v=il(_.type,_.key,_.props,null,c.mode,v),v.ref=Js(c,g,_),v.return=c,v)}function u(c,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Bu(_,c.mode,v),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function d(c,g,_,v,F){return g===null||g.tag!==7?(g=Er(_,c.mode,v,F),g.return=c,g):(g=r(g,_),g.return=c,g)}function h(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zu(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Jo:return _=il(g.type,g.key,g.props,null,c.mode,_),_.ref=Js(c,null,g),_.return=c,_;case os:return g=Bu(g,c.mode,_),g.return=c,g;case Li:var v=g._init;return h(c,v(g._payload),_)}if(ho(g)||$s(g))return g=Er(g,c.mode,_,null),g.return=c,g;ca(c,g)}return null}function f(c,g,_,v){var F=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return F!==null?null:a(c,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:return _.key===F?l(c,g,_,v):null;case os:return _.key===F?u(c,g,_,v):null;case Li:return F=_._init,f(c,g,F(_._payload),v)}if(ho(_)||$s(_))return F!==null?null:d(c,g,_,v,null);ca(c,_)}return null}function p(c,g,_,v,F){if(typeof v=="string"&&v!==""||typeof v=="number")return c=c.get(_)||null,a(g,c,""+v,F);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return c=c.get(v.key===null?_:v.key)||null,l(g,c,v,F);case os:return c=c.get(v.key===null?_:v.key)||null,u(g,c,v,F);case Li:var b=v._init;return p(c,g,_,b(v._payload),F)}if(ho(v)||$s(v))return c=c.get(_)||null,d(g,c,v,F,null);ca(g,v)}return null}function x(c,g,_,v){for(var F=null,b=null,w=g,I=g=0,E=null;w!==null&&I<_.length;I++){w.index>I?(E=w,w=null):E=w.sibling;var S=f(c,w,_[I],v);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(c,w),g=s(S,g,I),b===null?F=S:b.sibling=S,b=S,w=E}if(I===_.length)return n(c,w),ft&&dr(c,I),F;if(w===null){for(;I<_.length;I++)w=h(c,_[I],v),w!==null&&(g=s(w,g,I),b===null?F=w:b.sibling=w,b=w);return ft&&dr(c,I),F}for(w=i(c,w);I<_.length;I++)E=p(w,c,I,_[I],v),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?I:E.key),g=s(E,g,I),b===null?F=E:b.sibling=E,b=E);return t&&w.forEach(function(D){return e(c,D)}),ft&&dr(c,I),F}function y(c,g,_,v){var F=$s(_);if(typeof F!="function")throw Error(se(150));if(_=F.call(_),_==null)throw Error(se(151));for(var b=F=null,w=g,I=g=0,E=null,S=_.next();w!==null&&!S.done;I++,S=_.next()){w.index>I?(E=w,w=null):E=w.sibling;var D=f(c,w,S.value,v);if(D===null){w===null&&(w=E);break}t&&w&&D.alternate===null&&e(c,w),g=s(D,g,I),b===null?F=D:b.sibling=D,b=D,w=E}if(S.done)return n(c,w),ft&&dr(c,I),F;if(w===null){for(;!S.done;I++,S=_.next())S=h(c,S.value,v),S!==null&&(g=s(S,g,I),b===null?F=S:b.sibling=S,b=S);return ft&&dr(c,I),F}for(w=i(c,w);!S.done;I++,S=_.next())S=p(w,c,I,S.value,v),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?I:S.key),g=s(S,g,I),b===null?F=S:b.sibling=S,b=S);return t&&w.forEach(function(R){return e(c,R)}),ft&&dr(c,I),F}function m(c,g,_,v){if(typeof _=="object"&&_!==null&&_.type===as&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:e:{for(var F=_.key,b=g;b!==null;){if(b.key===F){if(F=_.type,F===as){if(b.tag===7){n(c,b.sibling),g=r(b,_.props.children),g.return=c,c=g;break e}}else if(b.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Li&&jh(F)===b.type){n(c,b.sibling),g=r(b,_.props),g.ref=Js(c,b,_),g.return=c,c=g;break e}n(c,b);break}else e(c,b);b=b.sibling}_.type===as?(g=Er(_.props.children,c.mode,v,_.key),g.return=c,c=g):(v=il(_.type,_.key,_.props,null,c.mode,v),v.ref=Js(c,g,_),v.return=c,c=v)}return o(c);case os:e:{for(b=_.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Bu(_,c.mode,v),g.return=c,c=g}return o(c);case Li:return b=_._init,m(c,g,b(_._payload),v)}if(ho(_))return x(c,g,_,v);if($s(_))return y(c,g,_,v);ca(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=zu(_,c.mode,v),g.return=c,c=g),o(c)):n(c,g)}return m}var Is=Bg(!0),Hg=Bg(!1),Tl=nr(null),Al=null,ms=null,Sd=null;function Md(){Sd=ms=Al=null}function Ed(t){var e=Tl.current;ct(Tl),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Al=t,Sd=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(Al===null)throw Error(se(308));ms=t,Al.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var vr=null;function wd(t){vr===null?vr=[t]:vr.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wd(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,wd(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}function Yh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(f=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(p,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(p,h,f):x,f==null)break e;h=mt({},h,f);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=h}}function $h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var $o={},ni=nr($o),Oo=nr($o),ko=nr($o);function xr(t){if(t===$o)throw Error(se(174));return t}function Ad(t,e){switch(st(ko,e),st(Oo,t),st(ni,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pc(e,t)}ct(ni),st(ni,e)}function Us(){ct(ni),ct(Oo),ct(ko)}function Wg(t){xr(ko.current);var e=xr(ni.current),n=Pc(e,t.type);e!==n&&(st(Oo,t),st(ni,n))}function Cd(t){Oo.current===t&&(ct(ni),ct(Oo))}var ht=nr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function Rd(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Qa=Si.ReactCurrentDispatcher,Uu=Si.ReactCurrentBatchConfig,Ar=0,pt=null,wt=null,Lt=null,bl=!1,Mo=!1,zo=0,_x=0;function kt(){throw Error(se(321))}function bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Pd(t,e,n,i,r,s){if(Ar=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?Sx:Mx,t=n(i,r),Mo){s=0;do{if(Mo=!1,zo=0,25<=s)throw Error(se(301));s+=1,Lt=wt=null,e.updateQueue=null,Qa.current=Ex,t=n(i,r)}while(Mo)}if(Qa.current=Pl,e=wt!==null&&wt.next!==null,Ar=0,Lt=wt=pt=null,bl=!1,e)throw Error(se(300));return t}function Ld(){var t=zo!==0;return zo=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?pt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Ln(){if(wt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Lt===null?pt.memoizedState:Lt.next;if(e!==null)Lt=e,wt=t;else{if(t===null)throw Error(se(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Lt===null?pt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Bo(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Ar&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,pt.lanes|=d,Cr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xg(){}function jg(t,e){var n=pt,i=Ln(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Dd(qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Ho(9,$g.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(se(349));Ar&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,i){e.value=n,e.getSnapshot=i,Kg(e)&&Zg(t)}function qg(t,e,n){return n(function(){Kg(e)&&Zg(t)})}function Kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Zg(t){var e=vi(t,1);e!==null&&Wn(e,t,1,-1)}function qh(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=yx.bind(null,pt,t),[e.memoizedState,t]}function Ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qg(){return Ln().memoizedState}function Ja(t,e,n,i){var r=Kn();pt.flags|=t,r.memoizedState=Ho(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&bd(i,o.deps)){r.memoizedState=Ho(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Ho(1|e,n,s,i)}function Kh(t,e){return Ja(8390656,8,t,e)}function Dd(t,e){return Ql(2048,8,t,e)}function Jg(t,e){return Ql(4,2,t,e)}function e0(t,e){return Ql(4,4,t,e)}function t0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function n0(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,t0.bind(null,e,t),n)}function Id(){}function i0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function r0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function s0(t,e,n){return Ar&21?(jn(n,e)||(n=cg(),pt.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function vx(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Uu.transition;Uu.transition={};try{t(!1),e()}finally{it=n,Uu.transition=i}}function o0(){return Ln().memoizedState}function xx(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},a0(t))l0(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=qt();Wn(n,t,i,r),u0(n,e,i)}}function yx(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(a0(t))l0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,wd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=qt(),Wn(n,t,i,r),u0(n,e,i))}}function a0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function l0(t,e){Mo=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}var Pl={readContext:Pn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Sx={readContext:Pn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,t0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xx.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:qh,useDebugValue:Id,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=qh(!1),e=t[0];return t=vx.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Kn();if(ft){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Dt===null)throw Error(se(349));Ar&30||Yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kh(qg.bind(null,i,s,t),[t]),i.flags|=2048,Ho(9,$g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Dt.identifierPrefix;if(ft){var n=di,i=fi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:Pn,useCallback:i0,useContext:Pn,useEffect:Dd,useImperativeHandle:n0,useInsertionEffect:Jg,useLayoutEffect:e0,useMemo:r0,useReducer:Nu,useRef:Qg,useState:function(){return Nu(Bo)},useDebugValue:Id,useDeferredValue:function(t){var e=Ln();return s0(e,wt.memoizedState,t)},useTransition:function(){var t=Nu(Bo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:o0,unstable_isNewReconciler:!1},Ex={readContext:Pn,useCallback:i0,useContext:Pn,useEffect:Dd,useImperativeHandle:n0,useInsertionEffect:Jg,useLayoutEffect:e0,useMemo:r0,useReducer:Fu,useRef:Qg,useState:function(){return Fu(Bo)},useDebugValue:Id,useDeferredValue:function(t){var e=Ln();return wt===null?e.memoizedState=t:s0(e,wt.memoizedState,t)},useTransition:function(){var t=Fu(Bo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:o0,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=ji(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Wn(e,t,r,i),Za(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=ji(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Wn(e,t,r,i),Za(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=ji(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Wn(e,t,i,n),Za(e,t,i))}};function Zh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,i)||!Io(r,s):!0}function c0(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=sn(e)?wr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=sn(e)?wr:Gt.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function f0(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,cf=i),Jc(t,e)},n}function d0(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jc(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var Tx=Si.ReactCurrentOwner,nn=!1;function $t(t,e,n,i){e.child=t===null?Hg(e,null,n,i):Is(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=Pd(t,e,n,i,s,r),n=Ld(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ft&&n&&vd(e),e.flags|=1,$t(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,h0(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function h0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Io(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,xi(t,e,r)}return ef(t,e,n,i,r)}function p0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(_s,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(_s,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(_s,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(_s,dn),dn|=i;return $t(t,e,r,n),e.child}function m0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ef(t,e,n,i,r){var s=sn(n)?wr:Gt.current;return s=Ls(e,s),ws(e,r),n=Pd(t,e,n,i,s,r),i=Ld(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ft&&i&&vd(e),e.flags|=1,$t(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(sn(n)){var s=!0;Ml(e)}else s=!1;if(ws(e,r),e.stateNode===null)el(t,e),c0(e,n,i),Qc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=sn(n)?wr:Gt.current,u=Ls(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Qh(e,o,i,u),Di=!1;var f=e.memoizedState;o.state=f,Cl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||rn.current||Di?(typeof d=="function"&&(Zc(e,n,d,i),l=e.memoizedState),(a=Di||Zh(e,n,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?wr:Gt.current,l=Ls(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Qh(e,o,i,l),Di=!1,f=e.memoizedState,o.state=f,Cl(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||rn.current||Di?(typeof p=="function"&&(Zc(e,n,p,i),x=e.memoizedState),(u=Di||Zh(e,n,u,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return tf(t,e,n,i,s,r)}function tf(t,e,n,i,r,s){m0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gh(e,n,!1),xi(t,e,s);i=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&Gh(e,n,!0),e.child}function g0(t){var e=t.stateNode;e.pendingContext?Vh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vh(t,e.context,!1),Ad(t,e.containerInfo)}function sp(t,e,n,i,r){return Ds(),yd(r),e.flags|=256,$t(t,e,n,i),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rf(n),e.memoizedState=nf,t):Ud(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ax(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=Er(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nf,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ud(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fa(t,e,n,i){return i!==null&&yd(i),Is(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(se(422))),fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=Er(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=rf(o),e.memoizedState=nf,s);if(!(e.mode&1))return fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Ou(s,i,void 0),fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),Wn(i,t,r,-1))}return Bd(),i=Ou(Error(se(421))),fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Gi(r.nextSibling),pn=e,ft=!0,zn=null,t!==null&&(Mn[En++]=fi,Mn[En++]=di,Mn[En++]=Tr,fi=t.id,di=t.overflow,Tr=e),e=Ud(e,i.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kc(t.return,e,n)}function ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function v0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ku(e,!0,n,null,s);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:g0(e),Ds();break;case 5:Wg(e);break;case 1:sn(e.type)&&Ml(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?_0(t,e,n):(st(ht,ht.current&1),t=xi(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return v0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,p0(t,e,n)}return xi(t,e,n)}var x0,sf,y0,S0;x0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};y0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(ni.current);var s=null;switch(n){case"input":r=Ac(t,r),i=Ac(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=bc(t,r),i=bc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yl)}Lc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};S0=function(t,e,n,i){n!==i&&(e.flags|=4)};function eo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&Sl(),zt(e),null;case 3:return i=e.stateNode,Us(),ct(rn),ct(Gt),Rd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(hf(zn),zn=null))),sf(t,e),zt(e),null;case 5:Cd(e);var r=xr(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)y0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return zt(e),null}if(t=xr(ni.current),ua(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<mo.length;r++)lt(mo[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":mh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":_h(i,s),lt("invalid",i)}Lc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",""+a]):Ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":ea(i),gh(i,s,!0);break;case"textarea":ea(i),vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Fo]=i,x0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dc(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<mo.length;r++)lt(mo[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":mh(t,i),r=Ac(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":_h(t,i),r=bc(t,i),lt("invalid",t);break;default:r=i}Lc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Km(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&rd(t,s,l,o))}switch(n){case"input":ea(t),gh(t,i,!1);break;case"textarea":ea(t),vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)S0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=xr(ko.current),xr(ni.current),ua(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:la(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return zt(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&e.mode&1&&!(e.flags&128))zg(),Ds(),e.flags|=98560,s=!1;else if(s=ua(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Jn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else zn!==null&&(hf(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?At===0&&(At=3):Bd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Us(),sf(t,e),t===null&&Uo(e.stateNode.containerInfo),zt(e),null;case 10:return Ed(e.type._context),zt(e),null;case 17:return sn(e.type)&&Sl(),zt(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)eo(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Fs&&(e.flags|=128,i=!0,eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return zt(e),null}else 2*yt()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return zd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function bx(t,e){switch(xd(e),e.tag){case 1:return sn(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),ct(rn),ct(Gt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return Us(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var da=!1,Vt=!1,Px=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function of(t,e,n){try{n()}catch(i){xt(t,e,i)}}var ap=!1;function Lx(t,e){if(Vc=_l,t=Ag(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gc={focusedElem:t,selectionRange:n},_l=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(v){xt(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=ap,ap=!1,x}function Eo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&of(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M0(t){var e=t.alternate;e!==null&&(t.alternate=null,M0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Fo],delete e[jc],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E0(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(i!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}var Nt=null,kn=!1;function wi(t,e,n){for(n=n.child;n!==null;)w0(t,e,n),n=n.sibling}function w0(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Vt||gs(n,e);case 6:var i=Nt,r=kn;Nt=null,wi(t,e,n),Nt=i,kn=r,Nt!==null&&(kn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(kn?(t=Nt,n=n.stateNode,t.nodeType===8?Lu(t.parentNode,n):t.nodeType===1&&Lu(t,n),Lo(t)):Lu(Nt,n.stateNode));break;case 4:i=Nt,r=kn,Nt=n.stateNode.containerInfo,kn=!0,wi(t,e,n),Nt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&of(n,e,o),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Vt&&(gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,wi(t,e,n),Vt=i):wi(t,e,n);break;default:wi(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=Bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,kn=!1;break e;case 3:Nt=a.stateNode.containerInfo,kn=!0;break e;case 4:Nt=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(Nt===null)throw Error(se(160));w0(s,o,r),Nt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),qn(t),i&4){try{Eo(3,t,t.return),eu(3,t)}catch(y){xt(t,t.return,y)}try{Eo(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:In(e,t),qn(t),i&512&&n!==null&&gs(n,n.return);break;case 5:if(In(e,t),qn(t),i&512&&n!==null&&gs(n,n.return),t.flags&32){var r=t.stateNode;try{Co(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ym(r,s),Dc(a,o);var u=Dc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Qm(r,h):d==="dangerouslySetInnerHTML"?Km(r,h):d==="children"?Co(r,h):rd(r,d,h,u)}switch(a){case"input":Cc(r,s);break;case"textarea":$m(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ys(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(In(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(In(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:In(e,t),qn(t);break;case 13:In(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Od=yt())),i&4&&up(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||d,In(e,t),Vt=u):In(e,t),qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Ee=t,d=t.child;d!==null;){for(h=Ee=d;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:Eo(4,f,f.return);break;case 1:gs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:gs(f,f.return);break;case 22:if(f.memoizedState!==null){fp(h);continue}}p!==null?(p.return=f,Ee=p):fp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zm("display",o))}catch(y){xt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){xt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:In(e,t),qn(t),i&4&&up(t);break;case 21:break;default:In(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Co(r,""),i.flags&=-33);var s=lp(t);uf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lp(t);lf(t,a,o);break;default:throw Error(se(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){Ee=t,A0(t)}function A0(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=da;var u=Vt;if(da=o,(Vt=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?dp(r):l!==null?(l.return=o,Ee=l):dp(r);for(;s!==null;)Ee=s,A0(s),s=s.sibling;Ee=r,da=a,Vt=u}cp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):cp(t)}}function cp(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$h(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Lo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Vt||e.flags&512&&af(e)}catch(f){xt(e,e.return,f)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function fp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function dp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{af(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{af(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var Ix=Math.ceil,Ll=Si.ReactCurrentDispatcher,Nd=Si.ReactCurrentOwner,Rn=Si.ReactCurrentBatchConfig,Qe=0,Dt=null,Et=null,Ft=0,dn=0,_s=nr(0),At=0,Vo=null,Cr=0,tu=0,Fd=0,wo=null,Jt=null,Od=0,Fs=1/0,ui=null,Dl=!1,cf=null,Xi=null,ha=!1,ki=null,Il=0,To=0,ff=null,tl=-1,nl=0;function qt(){return Qe&6?yt():tl!==-1?tl:tl=yt()}function ji(t){return t.mode&1?Qe&2&&Ft!==0?Ft&-Ft:gx.transition!==null?(nl===0&&(nl=cg()),nl):(t=it,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function Wn(t,e,n,i){if(50<To)throw To=0,ff=null,Error(se(185));Xo(t,n,i),(!(Qe&2)||t!==Dt)&&(t===Dt&&(!(Qe&2)&&(tu|=n),At===4&&Ni(t,Ft)),on(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Fs=yt()+500,Zl&&ir()))}function on(t,e){var n=t.callbackNode;gv(t,e);var i=gl(t,t===Dt?Ft:0);if(i===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?mx(hp.bind(null,t)):Fg(hp.bind(null,t)),fx(function(){!(Qe&6)&&ir()}),n=null;else{switch(fg(i)){case 1:n=ud;break;case 4:n=lg;break;case 16:n=ml;break;case 536870912:n=ug;break;default:n=ml}n=U0(n,C0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C0(t,e){if(tl=-1,nl=0,Qe&6)throw Error(se(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=gl(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=Qe;Qe|=2;var s=b0();(Dt!==t||Ft!==e)&&(ui=null,Fs=yt()+500,Mr(t,e));do try{Fx();break}catch(a){R0(t,a)}while(!0);Md(),Ll.current=s,Qe=r,Et!==null?e=0:(Dt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=Oc(t),r!==0&&(i=r,e=df(t,r))),e===1)throw n=Vo,Mr(t,0),Ni(t,i),on(t,yt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ux(r)&&(e=Ul(t,i),e===2&&(s=Oc(t),s!==0&&(i=s,e=df(t,s))),e===1))throw n=Vo,Mr(t,0),Ni(t,i),on(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:hr(t,Jt,ui);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Od+500-yt(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xc(hr.bind(null,t,Jt,ui),e);break}hr(t,Jt,ui);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ix(i/1960))-i,10<i){t.timeoutHandle=Xc(hr.bind(null,t,Jt,ui),i);break}hr(t,Jt,ui);break;case 5:hr(t,Jt,ui);break;default:throw Error(se(329))}}}return on(t,yt()),t.callbackNode===n?C0.bind(null,t):null}function df(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&hf(e)),t}function hf(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Fd,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function hp(t){if(Qe&6)throw Error(se(327));Ts();var e=gl(t,0);if(!(e&1))return on(t,yt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Oc(t);i!==0&&(e=i,n=df(t,i))}if(n===1)throw n=Vo,Mr(t,0),Ni(t,e),on(t,yt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,Jt,ui),on(t,yt()),null}function kd(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Fs=yt()+500,Zl&&ir())}}function Rr(t){ki!==null&&ki.tag===0&&!(Qe&6)&&Ts();var e=Qe;Qe|=1;var n=Rn.transition,i=it;try{if(Rn.transition=null,it=1,t)return t()}finally{it=i,Rn.transition=n,Qe=e,!(Qe&6)&&ir()}}function zd(){dn=_s.current,ct(_s)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(xd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:Us(),ct(rn),ct(Gt),Rd();break;case 5:Cd(i);break;case 4:Us();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:Ed(i.type._context);break;case 22:case 23:zd()}n=n.return}if(Dt=t,Et=t=Yi(t.current,null),Ft=dn=e,At=0,Vo=null,Fd=tu=Cr=0,Jt=wo=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function R0(t,e){do{var n=Et;try{if(Md(),Qa.current=Pl,bl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bl=!1}if(Ar=0,Lt=wt=pt=null,Mo=!1,zo=0,Nd.current=null,n===null||n.return===null){At=1,Vo=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ep(o);if(p!==null){p.flags&=-257,tp(p,o,a,s,e),p.mode&1&&Jh(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Jh(s,u,e),Bd();break e}l=Error(se(426))}}else if(ft&&a.mode&1){var m=ep(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tp(m,o,a,s,e),yd(Ns(l,a));break e}}s=l=Ns(l,a),At!==4&&(At=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=f0(s,l,e);Yh(s,c);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Xi===null||!Xi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=d0(s,a,e);Yh(s,v);break e}}s=s.return}while(s!==null)}L0(n)}catch(F){e=F,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function b0(){var t=Ll.current;return Ll.current=Pl,t===null?Pl:t}function Bd(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Cr&268435455)&&!(tu&268435455)||Ni(Dt,Ft)}function Ul(t,e){var n=Qe;Qe|=2;var i=b0();(Dt!==t||Ft!==e)&&(ui=null,Mr(t,e));do try{Nx();break}catch(r){R0(t,r)}while(!0);if(Md(),Qe=n,Ll.current=i,Et!==null)throw Error(se(261));return Dt=null,Ft=0,At}function Nx(){for(;Et!==null;)P0(Et)}function Fx(){for(;Et!==null&&!av();)P0(Et)}function P0(t){var e=I0(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?L0(t):Et=e,Nd.current=null}function L0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bx(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=Rx(n,e,dn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function hr(t,e,n){var i=it,r=Rn.transition;try{Rn.transition=null,it=1,Ox(t,e,n,i)}finally{Rn.transition=r,it=i}return null}function Ox(t,e,n,i){do Ts();while(ki!==null);if(Qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_v(t,s),t===Dt&&(Et=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,U0(ml,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,Nd.current=null,Lx(t,n),T0(n,t),ix(Gc),_l=!!Vc,Gc=Vc=null,t.current=n,Dx(n),lv(),Qe=a,it=o,Rn.transition=s}else t.current=n;if(ha&&(ha=!1,ki=t,Il=r),s=t.pendingLanes,s===0&&(Xi=null),fv(n.stateNode),on(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=cf,cf=null,t;return Il&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===ff?To++:(To=0,ff=t):To=0,ir(),null}function Ts(){if(ki!==null){var t=fg(Il),e=Rn.transition,n=it;try{if(Rn.transition=null,it=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,Il=0,Qe&6)throw Error(se(331));var r=Qe;for(Qe|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var d=Ee;switch(d.tag){case 0:case 11:case 15:Eo(8,d,s)}var h=d.child;if(h!==null)h.return=d,Ee=h;else for(;Ee!==null;){d=Ee;var f=d.sibling,p=d.return;if(M0(d),d===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Eo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Ee=c;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(F){xt(a,a.return,F)}if(a===o){Ee=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,Ee=v;break e}Ee=a.return}}if(Qe=r,ir(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{it=n,Rn.transition=e}}return!1}function pp(t,e,n){e=Ns(n,e),e=f0(t,e,1),t=Wi(t,e,1),e=qt(),t!==null&&(Xo(t,1,e),on(t,e))}function xt(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Ns(n,t),t=d0(e,t,1),e=Wi(e,t,1),t=qt(),e!==null&&(Xo(e,1,t),on(e,t));break}}e=e.return}}function kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>yt()-Od?Mr(t,0):Fd|=n),on(t,e)}function D0(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=qt();t=vi(t,e),t!==null&&(Xo(t,e,n),on(t,n))}function zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function Bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),D0(t,n)}var I0;I0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Cx(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ft&&e.flags&1048576&&Og(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Ls(e,Gt.current);ws(e,n),r=Pd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Td(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,Qc(e,i,t,n),e=tf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&vd(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vx(i),t=On(i,t),r){case 0:e=ef(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,On(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),ef(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),rp(t,e,i,r,n);case 3:e:{if(g0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),Cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(se(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(se(424)),e),e=sp(t,e,i,n,r);break e}else for(hn=Gi(e.stateNode.containerInfo.firstChild),pn=e,ft=!0,zn=null,n=Hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=xi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Wg(e),t===null&&qc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wc(i,r)?o=null:s!==null&&Wc(i,s)&&(e.flags|=32),m0(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return _0(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),np(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Tl,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!rn.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=Pn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),ip(t,e,i,r,n);case 15:return h0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),el(t,e),e.tag=1,sn(i)?(t=!0,Ml(e)):t=!1,ws(e,n),c0(e,i,r),Qc(e,i,r,n),tf(null,e,i,!0,t,n);case 19:return v0(t,e,n);case 22:return p0(t,e,n)}throw Error(se(156,e.tag))};function U0(t,e){return ag(t,e)}function Hx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Hx(t,e,n,i)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ad)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Er(n.children,r,s,e);case sd:o=8,r|=8;break;case Mc:return t=An(12,n,e,r|2),t.elementType=Mc,t.lanes=s,t;case Ec:return t=An(13,n,e,r),t.elementType=Ec,t.lanes=s,t;case wc:return t=An(19,n,e,r),t.elementType=wc,t.lanes=s,t;case Wm:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vm:o=10;break e;case Gm:o=9;break e;case od:o=11;break e;case ad:o=14;break e;case Li:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=An(22,t,i,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function zu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yu(0),this.expirationTimes=yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vd(t,e,n,i,r,s,o,a,l){return t=new Gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function N0(t){if(!t)return Qi;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(sn(n))return Ng(t,n,e)}return e}function F0(t,e,n,i,r,s,o,a,l){return t=Vd(n,i,!0,t,r,s,o,a,l),t.context=N0(null),n=t.current,i=qt(),r=ji(n),s=mi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,Xo(t,r,i),on(t,i),t}function iu(t,e,n,i){var r=e.current,s=qt(),o=ji(r);return n=N0(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,o),t!==null&&(Wn(t,r,o,s),Za(t,r,o)),o}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function Xx(){return null}var O0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}ru.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));iu(t,e,null,null)};ru.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){iu(null,t,null,null)}),e[_i]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&gg(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Nl(o);s.call(u)}}var o=F0(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=o,t[_i]=o.current,Uo(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Nl(l);a.call(u)}}var l=Vd(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=l,t[_i]=l.current,Uo(t.nodeType===8?t.parentNode:t),Rr(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Nl(o);a.call(l)}}iu(e,o,t,r)}else o=jx(n,e,t,r,i);return Nl(o)}dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(cd(e,n|1),on(e,yt()),!(Qe&6)&&(Fs=yt()+500,ir()))}break;case 13:Rr(function(){var i=vi(t,1);if(i!==null){var r=qt();Wn(i,t,1,r)}}),Gd(t,1)}};fd=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=qt();Wn(e,t,134217728,n)}Gd(t,134217728)}};hg=function(t){if(t.tag===13){var e=ji(t),n=vi(t,e);if(n!==null){var i=qt();Wn(n,t,e,i)}Gd(t,e)}};pg=function(){return it};mg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Uc=function(t,e,n){switch(e){case"input":if(Cc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(se(90));jm(i),Cc(i,r)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};tg=kd;ng=Rr;var Yx={usingClientEntryPoint:!1,Events:[Yo,fs,Kl,Jm,eg,kd]},to={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{jl=pa.inject($x),ti=pa}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(se(200));return Wx(t,e,null,n)};_n.createRoot=function(t,e){if(!Xd(t))throw Error(se(299));var n=!1,i="",r=O0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vd(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Uo(t.nodeType===8?t.parentNode:t),new Wd(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Rr(t)};_n.hydrate=function(t,e,n){if(!su(e))throw Error(se(200));return ou(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=O0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F0(e,null,t,1,n??null,r,!1,s,o),t[_i]=e.current,Uo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};_n.render=function(t,e,n){if(!su(e))throw Error(se(200));return ou(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!su(t))throw Error(se(40));return t._reactRootContainer?(Rr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};_n.unstable_batchedUpdates=kd;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return ou(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function k0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k0)}catch(t){console.error(t)}}k0(),km.exports=_n;var qx=km.exports,z0,_p=qx;z0=_p.createRoot,_p.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jd="168",Kx=0,vp=1,Zx=2,B0=1,H0=2,li=3,Ji=0,an=1,Bn=2,$i=0,As=1,xp=2,yp=3,Sp=4,Qx=5,mr=100,Jx=101,ey=102,ty=103,ny=104,iy=200,ry=201,sy=202,oy=203,pf=204,mf=205,ay=206,ly=207,uy=208,cy=209,fy=210,dy=211,hy=212,py=213,my=214,gy=0,_y=1,vy=2,Fl=3,xy=4,yy=5,Sy=6,My=7,au=0,Ey=1,wy=2,qi=0,Ty=1,Ay=2,Cy=3,Ry=4,by=5,Py=6,Ly=7,V0=300,Os=301,ks=302,gf=303,_f=304,lu=306,vf=1e3,yr=1001,xf=1002,Cn=1003,Dy=1004,ma=1005,Hn=1006,Hu=1007,Sr=1008,yi=1009,G0=1010,W0=1011,Go=1012,Yd=1013,br=1014,hi=1015,qo=1016,$d=1017,qd=1018,zs=1020,X0=35902,j0=1021,Y0=1022,Vn=1023,$0=1024,q0=1025,Cs=1026,Bs=1027,K0=1028,Kd=1029,Z0=1030,Zd=1031,Qd=1033,rl=33776,sl=33777,ol=33778,al=33779,yf=35840,Sf=35841,Mf=35842,Ef=35843,wf=36196,Tf=37492,Af=37496,Cf=37808,Rf=37809,bf=37810,Pf=37811,Lf=37812,Df=37813,If=37814,Uf=37815,Nf=37816,Ff=37817,Of=37818,kf=37819,zf=37820,Bf=37821,ll=36492,Hf=36494,Vf=36495,Q0=36283,Gf=36284,Wf=36285,Xf=36286,Iy=3200,Uy=3201,Jd=0,Ny=1,Fi="",Zn="srgb",rr="srgb-linear",eh="display-p3",uu="display-p3-linear",Ol="linear",ut="srgb",kl="rec709",zl="p3",kr=7680,Mp=519,Fy=512,Oy=513,ky=514,J0=515,zy=516,By=517,Hy=518,Vy=519,jf=35044,Ep="300 es",pi=2e3,Bl=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,Yf=180/Math.PI;function Ki(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function Gy(t,e){return(t%e+e)%e}function Vu(t,e,n){return(1-n)*t+n*e}function ei(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],y=r[0],m=r[3],c=r[6],g=r[1],_=r[4],v=r[7],F=r[2],b=r[5],w=r[8];return s[0]=o*y+a*g+l*F,s[3]=o*m+a*_+l*b,s[6]=o*c+a*v+l*w,s[1]=u*y+d*g+h*F,s[4]=u*m+d*_+h*b,s[7]=u*c+d*v+h*w,s[2]=f*y+p*g+x*F,s[5]=f*m+p*_+x*b,s[8]=f*c+p*v+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=d*o-a*u,f=a*l-d*s,p=u*s-o*l,x=n*h+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*u-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gu.makeScale(e,n)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new $e;function e_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Wy(){const t=Hl("canvas");return t.style.display="block",t}const wp={};function Rs(t){t in wp||(wp[t]=!0,console.warn(t))}function Xy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Tp=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ap=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[rr]:{transfer:Ol,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:ut,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[uu]:{transfer:Ol,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ap),fromReference:t=>t.applyMatrix3(Tp)},[eh]:{transfer:ut,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ap),fromReference:t=>t.applyMatrix3(Tp).convertLinearToSRGB()}},jy=new Set([rr,uu]),nt={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!jy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=no[e].toReference,r=no[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return no[t].primaries},getTransfer:function(t){return t===Fi?Ol:no[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(no[e].luminanceCoefficients)}};function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class Yy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zr===void 0&&(zr=Hl("canvas")),zr.width=e.width,zr.height=e.height;const i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $y=0;class t_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class Kt extends Xs{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=yr,r=yr,s=Hn,o=Sr,a=Vn,l=yi,u=Kt.DEFAULT_ANISOTROPY,d=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ki(),this.name="",this.source=new t_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=V0;Kt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,v=(p+1)/2,F=(c+1)/2,b=(d+f)/4,w=(h+y)/4,I=(x+m)/4;return _>v&&_>F?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=w/i):v>F?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=b/r,s=I/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=w/s,r=I/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-y)/g,this.z=(f-d)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ky extends Xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new t_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends Ky{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n_ extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zy extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==f||u!==p||d!==x){let m=1-a;const c=l*f+u*p+d*x+h*y,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const F=Math.sqrt(_),b=Math.atan2(F,c*g);m=Math.sin(m*b)/F,a=Math.sin(a*b)/F}const v=a*g;if(l=l*m+f*v,u=u*m+p*v,d=d*m+x*v,h=h*m+y*v,m===1-a){const F=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=F,u*=F,d*=F,h*=F}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*p-u*f,e[n+1]=l*x+d*f+u*h-a*p,e[n+2]=u*x+d*p+a*f-l*h,e[n+3]=d*x-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h+f*p*x;break;case"YZX":this._x=f*d*h+u*p*x,this._y=u*p*h+f*d*x,this._z=u*d*x-f*p*h,this._w=u*d*h-f*p*x;break;case"XZY":this._x=f*d*h-u*p*x,this._y=u*p*h-f*d*x,this._z=u*d*x+f*p*h,this._w=u*d*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*d,this.y=i+l*d+a*u-s*h,this.z=r+l*h+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new W,Cp=new Ko;class Zo{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),_a.subVectors(this.max,io),Br.subVectors(e.a,io),Hr.subVectors(e.b,io),Vr.subVectors(e.c,io),Ti.subVectors(Hr,Br),Ai.subVectors(Vr,Hr),or.subVectors(Br,Vr);let n=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-or.z,or.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,or.z,0,-or.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-or.y,or.x,0];return!Yu(n,Br,Hr,Vr,_a)||(n=[1,0,0,0,1,0,0,0,1],!Yu(n,Br,Hr,Vr,_a))?!1:(va.crossVectors(Ti,Ai),n=[va.x,va.y,va.z],Yu(n,Br,Hr,Vr,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new W,new W,new W,new W,new W,new W,new W,new W],Un=new W,ga=new Zo,Br=new W,Hr=new W,Vr=new W,Ti=new W,Ai=new W,or=new W,io=new W,_a=new W,va=new W,ar=new W;function Yu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ar.fromArray(t,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),d=i.dot(ar);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Qy=new Zo,ro=new W,$u=new W;class cu{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const n=ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add($u)),this.expandByPoint(ro.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new W,qu=new W,xa=new W,Ci=new W,Ku=new W,ya=new W,Zu=new W;class th{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qu.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(qu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xa),a=Ci.dot(this.direction),l=-Ci.dot(xa),u=Ci.lengthSq(),d=Math.abs(1-o*o);let h,f,p,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const y=1/d;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qu).addScaledVector(xa,f),p}intersectSphere(e,n){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){Ku.subVectors(n,e),ya.subVectors(i,e),Zu.crossVectors(Ku,ya);let o=this.direction.dot(Zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(Ci,ya));if(l<0)return null;const u=a*this.direction.dot(Ku.cross(Ci));if(u<0||l+u>o)return null;const d=-a*Ci.dot(Zu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,o,a,l,u,d,h,f,p,x,y,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,h,f,p,x,y,m)}set(e,n,i,r,s,o,a,l,u,d,h,f,p,x,y,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=f,c[3]=p,c[7]=x,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=p+x*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=x+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,x=u*d,y=u*h;n[0]=f+y*a,n[4]=x*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-x,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,x=u*d,y=u*h;n[0]=f-y*a,n[4]=-o*h,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=x*u-p,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=p*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,x=a*l,y=a*u;n[0]=l*d,n[4]=y-f*h,n[8]=x*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*h+x,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,p=o*u,x=a*l,y=a*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+y,n[5]=o*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jy,e,eS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ri.crossVectors(i,cn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ri.crossVectors(i,cn)),Ri.normalize(),Sa.crossVectors(cn,Ri),r[0]=Ri.x,r[4]=Sa.x,r[8]=cn.x,r[1]=Ri.y,r[5]=Sa.y,r[9]=cn.y,r[2]=Ri.z,r[6]=Sa.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],y=i[6],m=i[10],c=i[14],g=i[3],_=i[7],v=i[11],F=i[15],b=r[0],w=r[4],I=r[8],E=r[12],S=r[1],D=r[5],R=r[9],z=r[13],q=r[2],V=r[6],j=r[10],Y=r[14],U=r[3],G=r[7],Q=r[11],te=r[15];return s[0]=o*b+a*S+l*q+u*U,s[4]=o*w+a*D+l*V+u*G,s[8]=o*I+a*R+l*j+u*Q,s[12]=o*E+a*z+l*Y+u*te,s[1]=d*b+h*S+f*q+p*U,s[5]=d*w+h*D+f*V+p*G,s[9]=d*I+h*R+f*j+p*Q,s[13]=d*E+h*z+f*Y+p*te,s[2]=x*b+y*S+m*q+c*U,s[6]=x*w+y*D+m*V+c*G,s[10]=x*I+y*R+m*j+c*Q,s[14]=x*E+y*z+m*Y+c*te,s[3]=g*b+_*S+v*q+F*U,s[7]=g*w+_*D+v*V+F*G,s[11]=g*I+_*R+v*j+F*Q,s[15]=g*E+_*z+v*Y+F*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],x=e[3],y=e[7],m=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+y*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*d-s*l*d)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*d-i*u*d)+c*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],x=e[12],y=e[13],m=e[14],c=e[15],g=h*m*u-y*f*u+y*l*p-a*m*p-h*l*c+a*f*c,_=x*f*u-d*m*u-x*l*p+o*m*p+d*l*c-o*f*c,v=d*y*u-x*h*u+x*a*p-o*y*p-d*a*c+o*h*c,F=x*h*l-d*y*l-x*a*f+o*y*f+d*a*m-o*h*m,b=n*g+i*_+r*v+s*F;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=g*w,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*c-i*f*c)*w,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*c+i*l*c)*w,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(d*m*s-x*f*s+x*r*p-n*m*p-d*r*c+n*f*c)*w,e[6]=(x*l*s-o*m*s-x*r*u+n*m*u+o*r*c-n*l*c)*w,e[7]=(o*f*s-d*l*s+d*r*u-n*f*u-o*r*p+n*l*p)*w,e[8]=v*w,e[9]=(x*h*s-d*y*s-x*i*p+n*y*p+d*i*c-n*h*c)*w,e[10]=(o*y*s-x*a*s+x*i*u-n*y*u-o*i*c+n*a*c)*w,e[11]=(d*a*s-o*h*s-d*i*u+n*h*u+o*i*p-n*a*p)*w,e[12]=F*w,e[13]=(d*y*r-x*h*r+x*i*f-n*y*f-d*i*m+n*h*m)*w,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,h=a+a,f=s*u,p=s*d,x=s*h,y=o*d,m=o*h,c=a*h,g=l*u,_=l*d,v=l*h,F=i.x,b=i.y,w=i.z;return r[0]=(1-(y+c))*F,r[1]=(p+v)*F,r[2]=(x-_)*F,r[3]=0,r[4]=(p-v)*b,r[5]=(1-(f+c))*b,r[6]=(m+g)*b,r[7]=0,r[8]=(x+_)*w,r[9]=(m-g)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,d=1/o,h=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=pi){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(a===pi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Bl)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pi){const l=this.elements,u=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*u,p=(i+r)*d;let x,y;if(a===pi)x=(o+s)*h,y=-2*h;else if(a===Bl)x=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new W,Nn=new dt,Jy=new W(0,0,0),eS=new W(1,1,1),Ri=new W,Sa=new W,cn=new W,Rp=new dt,bp=new Ko;class Yn{constructor(e=0,n=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bp.setFromEuler(this),this.setFromQuaternion(bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tS=0;const Pp=new W,Wr=new Ko,si=new dt,Ma=new W,so=new W,nS=new W,iS=new Ko,Lp=new W(1,0,0),Dp=new W(0,1,0),Ip=new W(0,0,1),Up={type:"added"},rS={type:"removed"},Xr={type:"childadded",child:null},Qu={type:"childremoved",child:null};class It extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new W,n=new Yn,i=new Ko,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new $e}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Lp,e)}rotateY(e){return this.rotateOnAxis(Dp,e)}rotateZ(e){return this.rotateOnAxis(Ip,e)}translateOnAxis(e,n){return Pp.copy(e).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Lp,e)}translateY(e){return this.translateOnAxis(Dp,e)}translateZ(e){return this.translateOnAxis(Ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(so,Ma,this.up):si.lookAt(Ma,so,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(si),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Up),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rS),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Up),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,nS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,iS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new W(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new W,oi=new W,Ju=new W,ai=new W,jr=new W,Yr=new W,Np=new W,ec=new W,tc=new W,nc=new W;class Tn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),oi.subVectors(i,n),Ju.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(oi),l=Fn.dot(Ju),u=oi.dot(oi),d=oi.dot(Ju),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),oi.subVectors(e,n),Fn.cross(oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;jr.subVectors(r,i),Yr.subVectors(s,i),ec.subVectors(e,i);const l=jr.dot(ec),u=Yr.dot(ec);if(l<=0&&u<=0)return n.copy(i);tc.subVectors(e,r);const d=jr.dot(tc),h=Yr.dot(tc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(jr,o);nc.subVectors(e,s);const p=jr.dot(nc),x=Yr.dot(nc);if(x>=0&&p<=x)return n.copy(s);const y=p*u-l*x;if(y<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Yr,a);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return Np.subVectors(s,r),a=(h-d)/(h-d+(p-x)),n.copy(r).addScaledVector(Np,a);const c=1/(m+y+f);return o=y*c,a=f*c,n.copy(i).addScaledVector(jr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function ic(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Gy(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ic(o,s,e+1/3),this.g=ic(o,s,e),this.b=ic(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return nt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(en(Ht.r*255,0,255))*65536+Math.round(en(Ht.g*255,0,255))*256+Math.round(en(Ht.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Zn){nt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Ea);const i=Vu(bi.h,Ea.h,n),r=Vu(bi.s,Ea.s,n),s=Vu(bi.l,Ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ge;Ge.NAMES=i_;let sS=0;class sr extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=As,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pf&&(i.blendSrc=this.blendSrc),this.blendDst!==mf&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class r_ extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new W,wa=new We;class Xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jf&&(e.usage=this.usage),e}}class s_ extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bn extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oS=0;const Sn=new dt,rc=new It,$r=new W,fn=new Zo,oo=new Zo,Pt=new W;class gn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?o_:s_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(fn.min,oo.min),fn.expandByPoint(Pt),Pt.addVectors(fn.max,oo.max),fn.expandByPoint(Pt)):(fn.expandByPoint(oo.min),fn.expandByPoint(oo.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Pt.fromBufferAttribute(a,u),l&&($r.fromBufferAttribute(e,u),Pt.add($r)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new W,l[I]=new W;const u=new W,d=new W,h=new W,f=new We,p=new We,x=new We,y=new W,m=new W;function c(I,E,S){u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,E),x.fromBufferAttribute(s,S),d.sub(u),h.sub(u),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),a[I].add(y),a[E].add(y),a[S].add(y),l[I].add(m),l[E].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let I=0,E=g.length;I<E;++I){const S=g[I],D=S.start,R=S.count;for(let z=D,q=D+R;z<q;z+=3)c(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new W,v=new W,F=new W,b=new W;function w(I){F.fromBufferAttribute(r,I),b.copy(F);const E=a[I];_.copy(E),_.sub(F.multiplyScalar(F.dot(E))).normalize(),v.crossVectors(b,E);const D=v.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,E=g.length;I<E;++I){const S=g[I],D=S.start,R=S.count;for(let z=D,q=D+R;z<q;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,d=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(l.length*d);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let c=0;c<d;c++)f[x++]=u[p++]}return new Xn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fp=new dt,lr=new th,Ta=new cu,Op=new W,qr=new W,Kr=new W,Zr=new W,sc=new W,Aa=new W,Ca=new We,Ra=new We,ba=new We,kp=new W,zp=new W,Bp=new W,Pa=new W,La=new W;class tn extends It{constructor(e=new gn,n=new r_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Aa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],h=s[l];d!==0&&(sc.fromBufferAttribute(h,e),o?Aa.addScaledVector(sc,d):Aa.addScaledVector(sc.sub(n),d))}n.add(Aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Ta.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Ta,Op)===null||lr.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(Fp.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Fp),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,F=_;v<F;v+=3){const b=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);r=Da(this,c,e,i,u,d,h,b,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const g=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);r=Da(this,o,e,i,u,d,h,g,_,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],c=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,F=_;v<F;v+=3){const b=v,w=v+1,I=v+2;r=Da(this,c,e,i,u,d,h,b,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const g=m,_=m+1,v=m+2;r=Da(this,o,e,i,u,d,h,g,_,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aS(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;La.copy(a),La.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(La);return u<n.near||u>n.far?null:{distance:u,point:La.clone(),object:t}}function Da(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,qr),t.getVertexPosition(l,Kr),t.getVertexPosition(u,Zr);const d=aS(t,e,n,i,qr,Kr,Zr,Pa);if(d){r&&(Ca.fromBufferAttribute(r,a),Ra.fromBufferAttribute(r,l),ba.fromBufferAttribute(r,u),d.uv=Tn.getInterpolation(Pa,qr,Kr,Zr,Ca,Ra,ba,new We)),s&&(Ca.fromBufferAttribute(s,a),Ra.fromBufferAttribute(s,l),ba.fromBufferAttribute(s,u),d.uv1=Tn.getInterpolation(Pa,qr,Kr,Zr,Ca,Ra,ba,new We)),o&&(kp.fromBufferAttribute(o,a),zp.fromBufferAttribute(o,l),Bp.fromBufferAttribute(o,u),d.normal=Tn.getInterpolation(Pa,qr,Kr,Zr,kp,zp,Bp,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new W,materialIndex:0};Tn.getNormal(qr,Kr,Zr,h.normal),d.face=h}return d}class Lr extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(u,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(h,2));function x(y,m,c,g,_,v,F,b,w,I,E){const S=v/w,D=F/I,R=v/2,z=F/2,q=b/2,V=w+1,j=I+1;let Y=0,U=0;const G=new W;for(let Q=0;Q<j;Q++){const te=Q*D-z;for(let ce=0;ce<V;ce++){const Fe=ce*S-R;G[y]=Fe*g,G[m]=te*_,G[c]=q,u.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[c]=b>0?1:-1,d.push(G.x,G.y,G.z),h.push(ce/w),h.push(1-Q/I),Y+=1}}for(let Q=0;Q<I;Q++)for(let te=0;te<w;te++){const ce=f+te+V*Q,Fe=f+te+V*(Q+1),K=f+(te+1)+V*(Q+1),ie=f+(te+1)+V*Q;l.push(ce,Fe,ie),l.push(Fe,K,ie),U+=6}a.addGroup(p,U,E),p+=U,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function lS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const uS={clone:Hs,merge:Yt};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=fS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l_ extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new W,Hp=new We,Vp=new We;class wn extends l_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,n){return this.getViewBounds(e,Hp,Vp),n.subVectors(Vp,Hp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class dS extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new wn(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new wn(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const a=new wn(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new wn(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new wn(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class u_ extends Kt{constructor(e,n,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hS extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new u_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lr(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:$i});s.uniforms.tEquirect.value=n;const o=new tn(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Hn),new dS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const oc=new W,pS=new W,mS=new $e;class Ii{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=oc.subVectors(i,n).cross(pS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(oc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mS.getNormalMatrix(e),r=this.coplanarPoint(oc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new cu,Ia=new W;class ih{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],y=r[10],m=r[11],c=r[12],g=r[13],_=r[14],v=r[15];if(i[0].setComponents(l-s,f-u,m-p,v-c).normalize(),i[1].setComponents(l+s,f+u,m+p,v+c).normalize(),i[2].setComponents(l+o,f+d,m+x,v+g).normalize(),i[3].setComponents(l-o,f-d,m-x,v-g).normalize(),i[4].setComponents(l-a,f-h,m-y,v-_).normalize(),n===pi)i[5].setComponents(l+a,f+h,m+y,v+_).normalize();else if(n===Bl)i[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ia.x=r.normal.x>0?e.max.x:e.min.x,Ia.y=r.normal.y>0?e.max.y:e.min.y,Ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gS(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&f.length===0&&t.bufferSubData(u,0,d),f.length!==0){for(let p=0,x=f.length;p<x;p++){const y=f[p];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class zi extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,h=e/a,f=n/l,p=[],x=[],y=[],m=[];for(let c=0;c<d;c++){const g=c*f-o;for(let _=0;_<u;_++){const v=_*h-s;x.push(v,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,v=g+u*(c+1),F=g+1+u*(c+1),b=g+1+u*c;p.push(_,v,b),p.push(v,F,b)}this.setIndex(p),this.setAttribute("position",new bn(x,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var _S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
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
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ES=`#ifdef USE_AOMAP
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
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
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
#endif`,AS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PS=`#ifdef USE_IRIDESCENCE
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
#endif`,LS=`#ifdef USE_BUMPMAP
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
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,BS=`#define PI 3.141592653589793
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
} // validated`,HS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VS=`vec3 transformedNormal = objectNormal;
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
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`
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
}`,qS=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
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
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
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
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,cM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
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
#endif`,mM=`struct PhysicalMaterial {
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
}`,gM=`
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,IM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,BM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tE=`float getShadowMask() {
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
}`,nE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iE=`#ifdef USE_SKINNING
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
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cE=`#ifdef USE_TRANSMISSION
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
#endif`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
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
}`,EE=`#if DEPTH_PACKING == 3200
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
}`,wE=`#define DISTANCE
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
}`,TE=`#define DISTANCE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
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
}`,bE=`uniform vec3 diffuse;
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
}`,PE=`#include <common>
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
}`,LE=`uniform vec3 diffuse;
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
}`,DE=`#define LAMBERT
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
}`,IE=`#define LAMBERT
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
}`,UE=`#define MATCAP
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
}`,NE=`#define MATCAP
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
}`,FE=`#define NORMAL
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
}`,OE=`#define NORMAL
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
}`,kE=`#define PHONG
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
}`,zE=`#define PHONG
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
}`,BE=`#define STANDARD
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
}`,HE=`#define STANDARD
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
}`,VE=`#define TOON
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
}`,GE=`#define TOON
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
}`,WE=`uniform float size;
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
}`,XE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
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
}`,YE=`uniform vec3 color;
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
}`,$E=`uniform float rotation;
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
}`,qE=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:_S,alphahash_pars_fragment:vS,alphamap_fragment:xS,alphamap_pars_fragment:yS,alphatest_fragment:SS,alphatest_pars_fragment:MS,aomap_fragment:ES,aomap_pars_fragment:wS,batching_pars_vertex:TS,batching_vertex:AS,begin_vertex:CS,beginnormal_vertex:RS,bsdfs:bS,iridescence_fragment:PS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:US,clipping_planes_vertex:NS,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:kS,color_vertex:zS,common:BS,cube_uv_reflection_fragment:HS,defaultnormal_vertex:VS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:XS,emissivemap_pars_fragment:jS,colorspace_fragment:YS,colorspace_pars_fragment:$S,envmap_fragment:qS,envmap_common_pars_fragment:KS,envmap_pars_fragment:ZS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:uM,envmap_vertex:JS,fog_vertex:eM,fog_pars_vertex:tM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:cM,lights_toon_pars_fragment:fM,lights_phong_fragment:dM,lights_phong_pars_fragment:hM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:_M,lights_fragment_end:vM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:MM,map_fragment:EM,map_pars_fragment:wM,map_particle_fragment:TM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:bM,morphcolor_vertex:PM,morphnormal_vertex:LM,morphtarget_pars_vertex:DM,morphtarget_vertex:IM,normal_fragment_begin:UM,normal_fragment_maps:NM,normal_pars_fragment:FM,normal_pars_vertex:OM,normal_vertex:kM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:BM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:GM,opaque_fragment:WM,packing:XM,premultiplied_alpha_fragment:jM,project_vertex:YM,dithering_fragment:$M,dithering_pars_fragment:qM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:JM,shadowmap_vertex:eE,shadowmask_pars_fragment:tE,skinbase_vertex:nE,skinning_pars_vertex:iE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:aE,tonemapping_fragment:lE,tonemapping_pars_fragment:uE,transmission_fragment:cE,transmission_pars_fragment:fE,uv_pars_fragment:dE,uv_pars_vertex:hE,uv_vertex:pE,worldpos_vertex:mE,background_vert:gE,background_frag:_E,backgroundCube_vert:vE,backgroundCube_frag:xE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:EE,distanceRGBA_vert:wE,distanceRGBA_frag:TE,equirect_vert:AE,equirect_frag:CE,linedashed_vert:RE,linedashed_frag:bE,meshbasic_vert:PE,meshbasic_frag:LE,meshlambert_vert:DE,meshlambert_frag:IE,meshmatcap_vert:UE,meshmatcap_frag:NE,meshnormal_vert:FE,meshnormal_frag:OE,meshphong_vert:kE,meshphong_frag:zE,meshphysical_vert:BE,meshphysical_frag:HE,meshtoon_vert:VE,meshtoon_frag:GE,points_vert:WE,points_frag:XE,shadow_vert:jE,shadow_frag:YE,sprite_vert:$E,sprite_frag:qE},_e={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Qn={basic:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([_e.lights,_e.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Qn.physical={uniforms:Yt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ua={r:0,b:0,g:0},cr=new Yn,KE=new dt;function ZE(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,u,d,h=null,f=0,p=null;function x(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function y(g){let _=!1;const v=x(g);v===null?c(a,l):v&&v.isColor&&(c(v,1),_=!0);const F=t.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const v=x(_);v&&(v.isCubeTexture||v.mapping===lu)?(d===void 0&&(d=new tn(new Lr(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Hs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),cr.copy(_.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(cr)),d.material.toneMapped=nt.getTransfer(v.colorSpace)!==ut,(h!==v||f!==v.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new tn(new zi(2,2),new er({name:"BackgroundMaterial",uniforms:Hs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(Ua,a_(t)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:y,addToRenderList:m}}function QE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,D,R,z,q){let V=!1;const j=h(z,R,D);s!==j&&(s=j,u(s.object)),V=p(S,z,R,q),V&&x(S,z,R,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(S,D,R,z),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,D,R){const z=R.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let V=q[D.id];V===void 0&&(V={},q[D.id]=V);let j=V[z];return j===void 0&&(j=f(l()),V[z]=j),j}function f(S){const D=[],R=[],z=[];for(let q=0;q<n;q++)D[q]=0,R[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,D,R,z){const q=s.attributes,V=D.attributes;let j=0;const Y=R.getAttributes();for(const U in Y)if(Y[U].location>=0){const Q=q[U];let te=V[U];if(te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),Q===void 0||Q.attribute!==te||te&&Q.data!==te.data)return!0;j++}return s.attributesNum!==j||s.index!==z}function x(S,D,R,z){const q={},V=D.attributes;let j=0;const Y=R.getAttributes();for(const U in Y)if(Y[U].location>=0){let Q=V[U];Q===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const te={};te.attribute=Q,Q&&Q.data&&(te.data=Q.data),q[U]=te,j++}s.attributes=q,s.attributesNum=j,s.index=z}function y(){const S=s.newAttributes;for(let D=0,R=S.length;D<R;D++)S[D]=0}function m(S){c(S,0)}function c(S,D){const R=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;R[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),q[S]!==D&&(t.vertexAttribDivisor(S,D),q[S]=D)}function g(){const S=s.newAttributes,D=s.enabledAttributes;for(let R=0,z=D.length;R<z;R++)D[R]!==S[R]&&(t.disableVertexAttribArray(R),D[R]=0)}function _(S,D,R,z,q,V,j){j===!0?t.vertexAttribIPointer(S,D,R,q,V):t.vertexAttribPointer(S,D,R,z,q,V)}function v(S,D,R,z){y();const q=z.attributes,V=R.getAttributes(),j=D.defaultAttributeValues;for(const Y in V){const U=V[Y];if(U.location>=0){let G=q[Y];if(G===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){const Q=G.normalized,te=G.itemSize,ce=e.get(G);if(ce===void 0)continue;const Fe=ce.buffer,K=ce.type,ie=ce.bytesPerElement,me=K===t.INT||K===t.UNSIGNED_INT||G.gpuType===Yd;if(G.isInterleavedBufferAttribute){const pe=G.data,De=pe.stride,Ie=G.offset;if(pe.isInstancedInterleavedBuffer){for(let ze=0;ze<U.locationSize;ze++)c(U.location+ze,pe.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<U.locationSize;ze++)m(U.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ze=0;ze<U.locationSize;ze++)_(U.location+ze,te/U.locationSize,K,Q,De*ie,(Ie+te/U.locationSize*ze)*ie,me)}else{if(G.isInstancedBufferAttribute){for(let pe=0;pe<U.locationSize;pe++)c(U.location+pe,G.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let pe=0;pe<U.locationSize;pe++)m(U.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let pe=0;pe<U.locationSize;pe++)_(U.location+pe,te/U.locationSize,K,Q,te*ie,te/U.locationSize*pe*ie,me)}}else if(j!==void 0){const Q=j[Y];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(U.location,Q);break;case 3:t.vertexAttrib3fv(U.location,Q);break;case 4:t.vertexAttrib4fv(U.location,Q);break;default:t.vertexAttrib1fv(U.location,Q)}}}}g()}function F(){I();for(const S in i){const D=i[S];for(const R in D){const z=D[R];for(const q in z)d(z[q].object),delete z[q];delete D[R]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const R in D){const z=D[R];for(const q in z)d(z[q].object),delete z[q];delete D[R]}delete i[S.id]}function w(S){for(const D in i){const R=i[D];if(R[S.id]===void 0)continue;const z=R[S.id];for(const q in z)d(z[q].object),delete z[q];delete R[S.id]}}function I(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function JE(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];n.update(p,i,1)}function l(u,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)o(u[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let x=0;for(let y=0;y<h;y++)x+=d[y];for(let y=0;y<f.length;y++)n.update(x,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Vn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const w=b===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==yi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hi&&!w)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,F=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,maxSamples:F}}function t1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ii,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):u();else{const g=s?0:i,_=g*4;let v=c.clippingState||null;l.value=v,v=d(x,f,_,p);for(let F=0;F!==_;++F)v[F]=n[F];c.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const c=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,v=p;_!==y;++_,v+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function n1(t){let e=new WeakMap;function n(o,a){return a===gf?o.mapping=Os:a===_f&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gf||a===_f)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class f_ extends l_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vs=4,Gp=[.125,.215,.35,.446,.526,.582],gr=20,ac=new f_,Wp=new Ge;let lc=null,uc=0,cc=0,fc=!1;const pr=(1+Math.sqrt(5))/2,es=1/pr,Xp=[new W(-pr,es,0),new W(pr,es,0),new W(-es,0,pr),new W(es,0,pr),new W(0,pr,-es),new W(0,pr,es),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,uc,cc),this._renderer.xr.enabled=fc,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:qo,format:Vn,colorSpace:rr,depthBuffer:!1},r=Yp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(s)),this._blurMaterial=r1(s,e,n)}return r}_compileMaterial(e){const n=new tn(this._lodPlanes[0],e);this._renderer.compile(n,ac)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Wp),d.toneMapping=qi,d.autoClear=!1;const p=new r_({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new tn(new Lr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Wp),y=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Na(r,g*_,c>2?_:0,_,_),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Os||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Na(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xp[(r-s-1)%Xp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new tn(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),y=s/x,m=isFinite(s)?1+Math.floor(d*y):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const c=[];let g=0;for(let w=0;w<gr;++w){const I=w/y,E=Math.exp(-I*I/2);c.push(E),w===0?g+=E:w<m&&(g+=2*E)}for(let w=0;w<c.length;w++)c[w]=c[w]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=c,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const v=this._sizeLods[r],F=3*v*(r>_-vs?r-_+vs:0),b=4*(this._cubeSize-v);Na(n,F,b,3*v,2*v),l.setRenderTarget(n),l.render(h,ac)}}function i1(t){const e=[],n=[],i=[];let r=t;const s=t-vs+1+Gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-vs?l=Gp[o-t+vs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,y=3,m=2,c=1,g=new Float32Array(y*x*p),_=new Float32Array(m*x*p),v=new Float32Array(c*x*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,I=b>2?0:-1,E=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];g.set(E,y*x*b),_.set(f,m*x*b);const S=[b,b,b,b,b,b];v.set(S,c*x*b)}const F=new gn;F.setAttribute("position",new Xn(g,y)),F.setAttribute("uv",new Xn(_,m)),F.setAttribute("faceIndex",new Xn(v,c)),e.push(F),r>vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Yp(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function r1(t,e,n){const i=new Float32Array(gr),r=new W(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function $p(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function qp(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}function s1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===gf||l===_f,d=l===Os||l===ks;if(u||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new jp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new jp(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function o1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Rs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function a1(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let m=0,c=y.length;m<c;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const y=p[x];for(let m=0,c=y.length;m<c;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,v=g.length;_<v;_+=3){const F=g[_+0],b=g[_+1],w=g[_+2];f.push(F,b,b,w,w,F)}}else if(x!==void 0){const g=x.array;y=x.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const F=_+0,b=_+1,w=_+2;f.push(F,b,b,w,w,F)}}else return;const m=new(e_(f)?o_:s_)(f,1);m.version=y;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function l1(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,f*o,x),n.update(p,i,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,x);let m=0;for(let c=0;c<x;c++)m+=p[c];n.update(m,i,1)}function h(f,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<f.length;c++)u(f[c]/o,p[c],y[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,x);let c=0;for(let g=0;g<x;g++)c+=p[g];for(let g=0;g<y.length;g++)n.update(c,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function u1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function c1(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let F=a.attributes.position.count*v,b=1;F>e.maxTextureSize&&(b=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const w=new Float32Array(F*b*4*h),I=new n_(w,F,b,h);I.type=hi,I.needsUpdate=!0;const E=v*4;for(let D=0;D<h;D++){const R=c[D],z=g[D],q=_[D],V=F*b*4*D;for(let j=0;j<R.count;j++){const Y=j*E;x===!0&&(r.fromBufferAttribute(R,j),w[V+Y+0]=r.x,w[V+Y+1]=r.y,w[V+Y+2]=r.z,w[V+Y+3]=0),y===!0&&(r.fromBufferAttribute(z,j),w[V+Y+4]=r.x,w[V+Y+5]=r.y,w[V+Y+6]=r.z,w[V+Y+7]=0),m===!0&&(r.fromBufferAttribute(q,j),w[V+Y+8]=r.x,w[V+Y+9]=r.y,w[V+Y+10]=r.z,w[V+Y+11]=q.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new We(F,b)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function f1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class d_ extends Kt{constructor(e,n,i,r,s,o,a,l,u,d=Cs){if(d!==Cs&&d!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Cs&&(i=br),i===void 0&&d===Bs&&(i=zs),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const h_=new Kt,Kp=new d_(1,1),p_=new n_,m_=new Zy,g_=new u_,Zp=[],Qp=[],Jp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zp[r];if(s===void 0&&(s=new Float32Array(r),Zp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=Qp[e];n===void 0&&(n=new Int32Array(e),Qp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function d1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;tm.set(i),t.uniformMatrix2fv(this.addr,!1,tm),Rt(n,i)}}function _1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;em.set(i),t.uniformMatrix3fv(this.addr,!1,em),Rt(n,i)}}function v1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Jp.set(i),t.uniformMatrix4fv(this.addr,!1,Jp),Rt(n,i)}}function x1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function E1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Kp.compareFunction=J0,s=Kp):s=h_,n.setTexture2D(e||s,r)}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m_,r)}function b1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g_,r)}function P1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p_,r)}function L1(t){switch(t){case 5126:return d1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return x1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return w1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return P1}}function D1(t,e){t.uniform1fv(this.addr,e)}function I1(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function U1(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function N1(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function F1(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function O1(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k1(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function z1(t,e){t.uniform1iv(this.addr,e)}function B1(t,e){t.uniform2iv(this.addr,e)}function H1(t,e){t.uniform3iv(this.addr,e)}function V1(t,e){t.uniform4iv(this.addr,e)}function G1(t,e){t.uniform1uiv(this.addr,e)}function W1(t,e){t.uniform2uiv(this.addr,e)}function X1(t,e){t.uniform3uiv(this.addr,e)}function j1(t,e){t.uniform4uiv(this.addr,e)}function Y1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||h_,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||m_,s[o])}function q1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||g_,s[o])}function K1(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||p_,s[o])}function Z1(t){switch(t){case 5126:return D1;case 35664:return I1;case 35665:return U1;case 35666:return N1;case 35674:return F1;case 35675:return O1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return B1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return X1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return K1}}class Q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=L1(n.type)}}class J1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Z1(n.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function nm(t,e){t.seq.push(e),t.map[e.id]=e}function tw(t,e,n){const i=t.name,r=i.length;for(dc.lastIndex=0;;){const s=dc.exec(i),o=dc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){nm(n,u===void 0?new Q1(a,t,e):new J1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new ew(a),nm(n,h)),n=h}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);tw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function im(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nw=37297;let iw=0;function rw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function sw(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case rr:case uu:return[i,"LinearTransferOETF"];case Zn:case eh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function rm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rw(t.getShaderSource(e),o)}else return r}function ow(t,e){const n=sw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aw(t,e){let n;switch(e){case Ty:n="Linear";break;case Ay:n="Reinhard";break;case Cy:n="Cineon";break;case Ry:n="ACESFilmic";break;case Py:n="AgX";break;case Ly:n="Neutral";break;case by:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fa=new W;function lw(){nt.getLuminanceCoefficients(Fa);const t=Fa.x.toFixed(4),e=Fa.y.toFixed(4),n=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function go(t){return t!==""}function sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function om(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(t){return t.replace(dw,pw)}const hw=new Map;function pw(t,e){let n=Ye[e];if(n===void 0){const i=hw.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $f(n)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(t){return t.replace(mw,gw)}function gw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function _w(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===H0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function vw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case Ey:e="ENVMAP_BLENDING_MIX";break;case wy:e="ENVMAP_BLENDING_ADD";break}return e}function Sw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Mw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_w(n),u=vw(n),d=xw(n),h=yw(n),f=Sw(n),p=uw(n),x=cw(s),y=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(go).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(go).join(`
`),c.length>0&&(c+=`
`)):(m=[lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),c=[lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==qi?aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,ow("linearToOutputTexel",n.outputColorSpace),lw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(go).join(`
`)),o=$f(o),o=sm(o,n),o=om(o,n),a=$f(a),a=sm(a,n),a=om(a,n),o=am(o),a=am(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+o,v=g+c+a,F=im(r,r.VERTEX_SHADER,_),b=im(r,r.FRAGMENT_SHADER,v);r.attachShader(y,F),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(D){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(F).trim(),q=r.getShaderInfoLog(b).trim();let V=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,F,b);else{const Y=rm(r,F,"vertex"),U=rm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+R+`
`+Y+`
`+U)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||q==="")&&(j=!1);j&&(D.diagnostics={runnable:V,programLog:R,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:c}})}r.deleteShader(F),r.deleteShader(b),I=new cl(r,y),E=fw(r,y)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,nw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=F,this.fragmentShader=b,this}let Ew=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Tw(e),n.set(e,i)),i}}class Tw{constructor(e){this.id=Ew++,this.code=e,this.usedTimes=0}}function Aw(t,e,n,i,r,s,o){const a=new nh,l=new ww,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,R,z){const q=R.fog,V=z.geometry,j=E.isMeshStandardMaterial?R.environment:null,Y=(E.isMeshStandardMaterial?n:e).get(E.envMap||j),U=Y&&Y.mapping===lu?Y.image.height:null,G=x[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Q!==void 0?Q.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let Fe,K,ie,me;if(G){const Ae=Qn[G];Fe=Ae.vertexShader,K=Ae.fragmentShader}else Fe=E.vertexShader,K=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const pe=t.getRenderTarget(),De=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,ze=!!E.map,ae=!!E.matcap,N=!!Y,Xe=!!E.aoMap,fe=!!E.lightMap,le=!!E.bumpMap,oe=!!E.normalMap,Ue=!!E.displacementMap,Ce=!!E.emissiveMap,ve=!!E.metalnessMap,L=!!E.roughnessMap,M=E.anisotropy>0,X=E.clearcoat>0,ee=E.dispersion>0,re=E.iridescence>0,ne=E.sheen>0,Te=E.transmission>0,ge=M&&!!E.anisotropyMap,Me=X&&!!E.clearcoatMap,He=X&&!!E.clearcoatNormalMap,ue=X&&!!E.clearcoatRoughnessMap,ye=re&&!!E.iridescenceMap,Ke=re&&!!E.iridescenceThicknessMap,Pe=ne&&!!E.sheenColorMap,we=ne&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ve=!!E.specularColorMap,ot=!!E.specularIntensityMap,P=Te&&!!E.transmissionMap,A=Te&&!!E.thicknessMap,C=!!E.gradientMap,k=!!E.alphaMap,$=E.alphaTest>0,de=!!E.alphaHash,je=!!E.extensions;let Ze=qi;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ze=t.toneMapping);const at={shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:Fe,fragmentShader:K,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:rr,alphaToCoverage:!!E.alphaToCoverage,map:ze,matcap:ae,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:U,aoMap:Xe,lightMap:fe,bumpMap:le,normalMap:oe,displacementMap:f&&Ue,emissiveMap:Ce,normalMapObjectSpace:oe&&E.normalMapType===Ny,normalMapTangentSpace:oe&&E.normalMapType===Jd,metalnessMap:ve,roughnessMap:L,anisotropy:M,anisotropyMap:ge,clearcoat:X,clearcoatMap:Me,clearcoatNormalMap:He,clearcoatRoughnessMap:ue,dispersion:ee,iridescence:re,iridescenceMap:ye,iridescenceThicknessMap:Ke,sheen:ne,sheenColorMap:Pe,sheenRoughnessMap:we,specularMap:Be,specularColorMap:Ve,specularIntensityMap:ot,transmission:Te,transmissionMap:P,thicknessMap:A,gradientMap:C,opaque:E.transparent===!1&&E.blending===As&&E.alphaToCoverage===!1,alphaMap:k,alphaTest:$,alphaHash:de,combine:E.combine,mapUv:ze&&y(E.map.channel),aoMapUv:Xe&&y(E.aoMap.channel),lightMapUv:fe&&y(E.lightMap.channel),bumpMapUv:le&&y(E.bumpMap.channel),normalMapUv:oe&&y(E.normalMap.channel),displacementMapUv:Ue&&y(E.displacementMap.channel),emissiveMapUv:Ce&&y(E.emissiveMap.channel),metalnessMapUv:ve&&y(E.metalnessMap.channel),roughnessMapUv:L&&y(E.roughnessMap.channel),anisotropyMapUv:ge&&y(E.anisotropyMap.channel),clearcoatMapUv:Me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(E.sheenRoughnessMap.channel),specularMapUv:Be&&y(E.specularMap.channel),specularColorMapUv:Ve&&y(E.specularColorMap.channel),specularIntensityMapUv:ot&&y(E.specularIntensityMap.channel),transmissionMapUv:P&&y(E.transmissionMap.channel),thicknessMapUv:A&&y(E.thicknessMap.channel),alphaMapUv:k&&y(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(oe||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(ze||k),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bn,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return at.vertexUv1s=u.has(1),at.vertexUv2s=u.has(2),at.vertexUv3s=u.has(3),u.clear(),at}function c(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(g(S,E),_(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function g(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function v(E){const S=x[E.type];let D;if(S){const R=Qn[S];D=uS.clone(R.uniforms)}else D=E.uniforms;return D}function F(E,S){let D;for(let R=0,z=d.length;R<z;R++){const q=d[R];if(q.cacheKey===S){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Mw(t,S,E,s),d.push(D)),D}function b(E){if(--E.usedTimes===0){const S=d.indexOf(E);d[S]=d[d.length-1],d.pop(),E.destroy()}}function w(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:v,acquireProgram:F,releaseProgram:b,releaseShaderCache:w,programs:d,dispose:I}}function Cw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Rw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,x,y,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=f,c.material=p,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=y,c.group=m),e++,c}function a(h,f,p,x,y,m){const c=o(h,f,p,x,y,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,f,p,x,y,m){const c=o(h,f,p,x,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,f){n.length>1&&n.sort(h||Rw),i.length>1&&i.sort(f||um),r.length>1&&r.sort(f||um)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function bw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new cm,t.set(i,[o])):r>=s.length?(o=new cm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Ge};break;case"SpotLight":n={position:new W,direction:new W,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function Lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Dw=0;function Iw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Uw(t){const e=new Pw,n=Lw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new dt,o=new dt;function a(u){let d=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,x=0,y=0,m=0,c=0,g=0,_=0,v=0,F=0,b=0,w=0;u.sort(Iw);for(let E=0,S=u.length;E<S;E++){const D=u[E],R=D.color,z=D.intensity,q=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=R.r*z,h+=R.g*z,f+=R.b*z;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],z);w++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,U=n.get(D);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=j,p++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(R).multiplyScalar(z),j.distance=q,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[y]=j;const Y=D.shadow;if(D.map&&(i.spotLightMap[F]=D.map,F++,Y.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[y]=Y.matrix,D.castShadow){const U=n.get(D);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=V,v++}y++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(R).multiplyScalar(z),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const Y=D.shadow,U=n.get(D);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=V,i.pointShadowMatrix[x]=D.shadow.matrix,_++}i.point[x]=j,x++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(z),j.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[c]=j,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==x||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==c||I.numDirectionalShadows!==g||I.numPointShadows!==_||I.numSpotShadows!==v||I.numSpotMaps!==F||I.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+F-b,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,I.directionalLength=p,I.pointLength=x,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=c,I.numDirectionalShadows=g,I.numPointShadows=_,I.numSpotShadows=v,I.numSpotMaps=F,I.numLightProbes=w,i.version=Dw++)}function l(u,d){let h=0,f=0,p=0,x=0,y=0;const m=d.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function fm(t){const e=new Uw(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Nw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new fm(t),e.set(r,[a])):s>=o.length?(a=new fm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Fw extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
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
}`;function Bw(t,e,n){let i=new ih;const r=new We,s=new We,o=new Tt,a=new Fw({depthPacking:Uy}),l=new Ow,u={},d=n.maxTextureSize,h={[Ji]:an,[an]:Ji,[Bn]:Bn},f=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:kw,fragmentShader:zw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new gn;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tn(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B0;let c=this.type;this.render=function(b,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),R=t.state;R.setBlending($i),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const z=c!==li&&this.type===li,q=c===li&&this.type!==li;for(let V=0,j=b.length;V<j;V++){const Y=b[V],U=Y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const G=U.getFrameExtents();if(r.multiply(G),s.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,U.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,U.mapSize.y=s.y)),U.map===null||z===!0||q===!0){const te=this.type!==li?{minFilter:Cn,magFilter:Cn}:{};U.map!==null&&U.map.dispose(),U.map=new Pr(r.x,r.y,te),U.map.texture.name=Y.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Q=U.getViewportCount();for(let te=0;te<Q;te++){const ce=U.getViewport(te);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),R.viewport(o),U.updateMatrices(Y,te),i=U.getFrustum(),v(w,I,U.camera,Y,this.type)}U.isPointLightShadow!==!0&&this.type===li&&g(U,I),U.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,D)};function g(b,w){const I=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pr(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,I,f,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,I,p,y,null)}function _(b,w,I,E){let S=null;const D=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const R=S.uuid,z=w.uuid;let q=u[R];q===void 0&&(q={},u[R]=q);let V=q[z];V===void 0&&(V=S.clone(),q[z]=V,w.addEventListener("dispose",F)),S=V}if(S.visible=w.visible,S.wireframe=w.wireframe,E===li?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=t.properties.get(S);R.light=I}return S}function v(b,w,I,E,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===li)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const z=e.update(b),q=b.material;if(Array.isArray(q)){const V=z.groups;for(let j=0,Y=V.length;j<Y;j++){const U=V[j],G=q[U.materialIndex];if(G&&G.visible){const Q=_(b,G,E,S);b.onBeforeShadow(t,b,w,I,z,Q,U),t.renderBufferDirect(I,null,z,Q,b,U),b.onAfterShadow(t,b,w,I,z,Q,U)}}}else if(q.visible){const V=_(b,q,E,S);b.onBeforeShadow(t,b,w,I,z,V,null),t.renderBufferDirect(I,null,z,V,b,null),b.onAfterShadow(t,b,w,I,z,V,null)}}const R=b.children;for(let z=0,q=R.length;z<q;z++)v(R[z],w,I,E,S)}function F(b){b.target.removeEventListener("dispose",F);for(const I in u){const E=u[I],S=b.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Hw(t){function e(){let P=!1;const A=new Tt;let C=null;const k=new Tt(0,0,0,0);return{setMask:function($){C!==$&&!P&&(t.colorMask($,$,$,$),C=$)},setLocked:function($){P=$},setClear:function($,de,je,Ze,at){at===!0&&($*=Ze,de*=Ze,je*=Ze),A.set($,de,je,Ze),k.equals(A)===!1&&(t.clearColor($,de,je,Ze),k.copy(A))},reset:function(){P=!1,C=null,k.set(-1,0,0,0)}}}function n(){let P=!1,A=null,C=null,k=null;return{setTest:function($){$?me(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function($){A!==$&&!P&&(t.depthMask($),A=$)},setFunc:function($){if(C!==$){switch($){case gy:t.depthFunc(t.NEVER);break;case _y:t.depthFunc(t.ALWAYS);break;case vy:t.depthFunc(t.LESS);break;case Fl:t.depthFunc(t.LEQUAL);break;case xy:t.depthFunc(t.EQUAL);break;case yy:t.depthFunc(t.GEQUAL);break;case Sy:t.depthFunc(t.GREATER);break;case My:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}C=$}},setLocked:function($){P=$},setClear:function($){k!==$&&(t.clearDepth($),k=$)},reset:function(){P=!1,A=null,C=null,k=null}}}function i(){let P=!1,A=null,C=null,k=null,$=null,de=null,je=null,Ze=null,at=null;return{setTest:function(Ae){P||(Ae?me(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(Ae){A!==Ae&&!P&&(t.stencilMask(Ae),A=Ae)},setFunc:function(Ae,gt,bt){(C!==Ae||k!==gt||$!==bt)&&(t.stencilFunc(Ae,gt,bt),C=Ae,k=gt,$=bt)},setOp:function(Ae,gt,bt){(de!==Ae||je!==gt||Ze!==bt)&&(t.stencilOp(Ae,gt,bt),de=Ae,je=gt,Ze=bt)},setLocked:function(Ae){P=Ae},setClear:function(Ae){at!==Ae&&(t.clearStencil(Ae),at=Ae)},reset:function(){P=!1,A=null,C=null,k=null,$=null,de=null,je=null,Ze=null,at=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,x=!1,y=null,m=null,c=null,g=null,_=null,v=null,F=null,b=new Ge(0,0,0),w=0,I=!1,E=null,S=null,D=null,R=null,z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=j>=2);let U=null,G={};const Q=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),ce=new Tt().fromArray(Q),Fe=new Tt().fromArray(te);function K(P,A,C,k){const $=new Uint8Array(4),de=t.createTexture();t.bindTexture(P,de),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<C;je++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(A,0,t.RGBA,1,1,k,0,t.RGBA,t.UNSIGNED_BYTE,$):t.texImage2D(A+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,$);return de}const ie={};ie[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(t.DEPTH_TEST),s.setFunc(Fl),le(!1),oe(vp),me(t.CULL_FACE),Xe($i);function me(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function pe(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function De(P,A){return d[P]!==A?(t.bindFramebuffer(P,A),d[P]=A,P===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=A),P===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=A),!0):!1}function Ie(P,A){let C=f,k=!1;if(P){C=h.get(A),C===void 0&&(C=[],h.set(A,C));const $=P.textures;if(C.length!==$.length||C[0]!==t.COLOR_ATTACHMENT0){for(let de=0,je=$.length;de<je;de++)C[de]=t.COLOR_ATTACHMENT0+de;C.length=$.length,k=!0}}else C[0]!==t.BACK&&(C[0]=t.BACK,k=!0);k&&t.drawBuffers(C)}function ze(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const ae={[mr]:t.FUNC_ADD,[Jx]:t.FUNC_SUBTRACT,[ey]:t.FUNC_REVERSE_SUBTRACT};ae[ty]=t.MIN,ae[ny]=t.MAX;const N={[iy]:t.ZERO,[ry]:t.ONE,[sy]:t.SRC_COLOR,[pf]:t.SRC_ALPHA,[fy]:t.SRC_ALPHA_SATURATE,[uy]:t.DST_COLOR,[ay]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[mf]:t.ONE_MINUS_SRC_ALPHA,[cy]:t.ONE_MINUS_DST_COLOR,[ly]:t.ONE_MINUS_DST_ALPHA,[dy]:t.CONSTANT_COLOR,[hy]:t.ONE_MINUS_CONSTANT_COLOR,[py]:t.CONSTANT_ALPHA,[my]:t.ONE_MINUS_CONSTANT_ALPHA};function Xe(P,A,C,k,$,de,je,Ze,at,Ae){if(P===$i){x===!0&&(pe(t.BLEND),x=!1);return}if(x===!1&&(me(t.BLEND),x=!0),P!==Qx){if(P!==y||Ae!==I){if((m!==mr||_!==mr)&&(t.blendEquation(t.FUNC_ADD),m=mr,_=mr),Ae)switch(P){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.ONE,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}c=null,g=null,v=null,F=null,b.set(0,0,0),w=0,y=P,I=Ae}return}$=$||A,de=de||C,je=je||k,(A!==m||$!==_)&&(t.blendEquationSeparate(ae[A],ae[$]),m=A,_=$),(C!==c||k!==g||de!==v||je!==F)&&(t.blendFuncSeparate(N[C],N[k],N[de],N[je]),c=C,g=k,v=de,F=je),(Ze.equals(b)===!1||at!==w)&&(t.blendColor(Ze.r,Ze.g,Ze.b,at),b.copy(Ze),w=at),y=P,I=!1}function fe(P,A){P.side===Bn?pe(t.CULL_FACE):me(t.CULL_FACE);let C=P.side===an;A&&(C=!C),le(C),P.blending===As&&P.transparent===!1?Xe($i):Xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const k=P.stencilWrite;o.setTest(k),k&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ce(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function le(P){E!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),E=P)}function oe(P){P!==Kx?(me(t.CULL_FACE),P!==S&&(P===vp?t.cullFace(t.BACK):P===Zx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),S=P}function Ue(P){P!==D&&(V&&t.lineWidth(P),D=P)}function Ce(P,A,C){P?(me(t.POLYGON_OFFSET_FILL),(R!==A||z!==C)&&(t.polygonOffset(A,C),R=A,z=C)):pe(t.POLYGON_OFFSET_FILL)}function ve(P){P?me(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function L(P){P===void 0&&(P=t.TEXTURE0+q-1),U!==P&&(t.activeTexture(P),U=P)}function M(P,A,C){C===void 0&&(U===null?C=t.TEXTURE0+q-1:C=U);let k=G[C];k===void 0&&(k={type:void 0,texture:void 0},G[C]=k),(k.type!==P||k.texture!==A)&&(U!==C&&(t.activeTexture(C),U=C),t.bindTexture(P,A||ie[P]),k.type=P,k.texture=A)}function X(){const P=G[U];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(P){ce.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function we(P){Fe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Fe.copy(P))}function Be(P,A){let C=l.get(A);C===void 0&&(C=new WeakMap,l.set(A,C));let k=C.get(P);k===void 0&&(k=t.getUniformBlockIndex(A,P.name),C.set(P,k))}function Ve(P,A){const k=l.get(A).get(P);a.get(A)!==k&&(t.uniformBlockBinding(A,k,P.__bindingPointIndex),a.set(A,k))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,G={},d={},h=new WeakMap,f=[],p=null,x=!1,y=null,m=null,c=null,g=null,_=null,v=null,F=null,b=new Ge(0,0,0),w=0,I=!1,E=null,S=null,D=null,R=null,z=null,ce.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:pe,bindFramebuffer:De,drawBuffers:Ie,useProgram:ze,setBlending:Xe,setMaterial:fe,setFlipSided:le,setCullFace:oe,setLineWidth:Ue,setPolygonOffset:Ce,setScissorTest:ve,activeTexture:L,bindTexture:M,unbindTexture:X,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:ye,texImage3D:Ke,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:He,texStorage3D:ue,texSubImage2D:ne,texSubImage3D:Te,compressedTexSubImage2D:ge,compressedTexSubImage3D:Me,scissor:Pe,viewport:we,reset:ot}}function dm(t,e,n,i){const r=Vw(i);switch(n){case j0:return t*e;case $0:return t*e;case q0:return t*e*2;case K0:return t*e/r.components*r.byteLength;case Kd:return t*e/r.components*r.byteLength;case Z0:return t*e*2/r.components*r.byteLength;case Zd:return t*e*2/r.components*r.byteLength;case Y0:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case Qd:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sf:case Ef:return Math.max(t,16)*Math.max(e,8)/4;case yf:case Mf:return Math.max(t,8)*Math.max(e,8)/2;case wf:case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case Hf:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Q0:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wf:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Vw(t){switch(t){case yi:case G0:return{byteLength:1,components:1};case Go:case W0:case qo:return{byteLength:2,components:1};case $d:case qd:return{byteLength:2,components:4};case br:case Yd:case hi:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Gw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new We,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,M){return p?new OffscreenCanvas(L,M):Hl("canvas")}function y(L,M,X){let ee=1;const re=ve(L);if((re.width>X||re.height>X)&&(ee=X/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ne=Math.floor(ee*re.width),Te=Math.floor(ee*re.height);h===void 0&&(h=x(ne,Te));const ge=M?x(ne,Te):h;return ge.width=ne,ge.height=Te,ge.getContext("2d").drawImage(L,0,0,ne,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ne+"x"+Te+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Cn&&L.minFilter!==Hn}function c(L){t.generateMipmap(L)}function g(L,M,X,ee,re=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=M;if(M===t.RED&&(X===t.FLOAT&&(ne=t.R32F),X===t.HALF_FLOAT&&(ne=t.R16F),X===t.UNSIGNED_BYTE&&(ne=t.R8)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ne=t.R8UI),X===t.UNSIGNED_SHORT&&(ne=t.R16UI),X===t.UNSIGNED_INT&&(ne=t.R32UI),X===t.BYTE&&(ne=t.R8I),X===t.SHORT&&(ne=t.R16I),X===t.INT&&(ne=t.R32I)),M===t.RG&&(X===t.FLOAT&&(ne=t.RG32F),X===t.HALF_FLOAT&&(ne=t.RG16F),X===t.UNSIGNED_BYTE&&(ne=t.RG8)),M===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ne=t.RG8UI),X===t.UNSIGNED_SHORT&&(ne=t.RG16UI),X===t.UNSIGNED_INT&&(ne=t.RG32UI),X===t.BYTE&&(ne=t.RG8I),X===t.SHORT&&(ne=t.RG16I),X===t.INT&&(ne=t.RG32I)),M===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),M===t.RGBA){const Te=re?Ol:nt.getTransfer(ee);X===t.FLOAT&&(ne=t.RGBA32F),X===t.HALF_FLOAT&&(ne=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ne=Te===ut?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(L,M){let X;return L?M===null||M===br||M===zs?X=t.DEPTH24_STENCIL8:M===hi?X=t.DEPTH32F_STENCIL8:M===Go&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===br||M===zs?X=t.DEPTH_COMPONENT24:M===hi?X=t.DEPTH_COMPONENT32F:M===Go&&(X=t.DEPTH_COMPONENT16),X}function v(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==Hn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function F(L){const M=L.target;M.removeEventListener("dispose",F),w(M),M.isVideoTexture&&d.delete(M)}function b(L){const M=L.target;M.removeEventListener("dispose",b),E(M)}function w(L){const M=i.get(L);if(M.__webglInit===void 0)return;const X=L.source,ee=f.get(X);if(ee){const re=ee[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&I(L),Object.keys(ee).length===0&&f.delete(X)}i.remove(L)}function I(L){const M=i.get(L);t.deleteTexture(M.__webglTexture);const X=L.source,ee=f.get(X);delete ee[M.__cacheKey],o.memory.textures--}function E(L){const M=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let re=0;re<M.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=L.textures;for(let ee=0,re=X.length;ee<re;ee++){const ne=i.get(X[ee]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(X[ee])}i.remove(L)}let S=0;function D(){S=0}function R(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function z(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function q(L,M){const X=i.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(X,L,M);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function V(L,M){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Fe(X,L,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function j(L,M){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Fe(X,L,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function Y(L,M){const X=i.get(L);if(L.version>0&&X.__version!==L.version){K(X,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const U={[vf]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[xf]:t.MIRRORED_REPEAT},G={[Cn]:t.NEAREST,[Dy]:t.NEAREST_MIPMAP_NEAREST,[ma]:t.NEAREST_MIPMAP_LINEAR,[Hn]:t.LINEAR,[Hu]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},Q={[Fy]:t.NEVER,[Vy]:t.ALWAYS,[Oy]:t.LESS,[J0]:t.LEQUAL,[ky]:t.EQUAL,[Hy]:t.GEQUAL,[zy]:t.GREATER,[By]:t.NOTEQUAL};function te(L,M){if(M.type===hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Hn||M.magFilter===Hu||M.magFilter===ma||M.magFilter===Sr||M.minFilter===Hn||M.minFilter===Hu||M.minFilter===ma||M.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,U[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,U[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,U[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,G[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,G[M.minFilter]),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==ma&&M.minFilter!==Sr||M.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ce(L,M){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",F));const ee=M.source;let re=f.get(ee);re===void 0&&(re={},f.set(ee,re));const ne=z(M);if(ne!==L.__cacheKey){re[ne]===void 0&&(re[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[ne].usedTimes++;const Te=re[L.__cacheKey];Te!==void 0&&(re[L.__cacheKey].usedTimes--,Te.usedTimes===0&&I(M)),L.__cacheKey=ne,L.__webglTexture=re[ne].texture}return X}function Fe(L,M,X){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const re=ce(L,M),ne=M.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+X);const Te=i.get(ne);if(ne.version!==Te.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const ge=nt.getPrimaries(nt.workingColorSpace),Me=M.colorSpace===Fi?null:nt.getPrimaries(M.colorSpace),He=M.colorSpace===Fi||ge===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ue=y(M.image,!1,r.maxTextureSize);ue=Ce(M,ue);const ye=s.convert(M.format,M.colorSpace),Ke=s.convert(M.type);let Pe=g(M.internalFormat,ye,Ke,M.colorSpace,M.isVideoTexture);te(ee,M);let we;const Be=M.mipmaps,Ve=M.isVideoTexture!==!0,ot=Te.__version===void 0||re===!0,P=ne.dataReady,A=v(M,ue);if(M.isDepthTexture)Pe=_(M.format===Bs,M.type),ot&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Pe,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ue.width,ue.height,0,ye,Ke,null));else if(M.isDataTexture)if(Be.length>0){Ve&&ot&&n.texStorage2D(t.TEXTURE_2D,A,Pe,Be[0].width,Be[0].height);for(let C=0,k=Be.length;C<k;C++)we=Be[C],Ve?P&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,we.width,we.height,ye,Ke,we.data):n.texImage2D(t.TEXTURE_2D,C,Pe,we.width,we.height,0,ye,Ke,we.data);M.generateMipmaps=!1}else Ve?(ot&&n.texStorage2D(t.TEXTURE_2D,A,Pe,ue.width,ue.height),P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,ye,Ke,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ue.width,ue.height,0,ye,Ke,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,A,Pe,Be[0].width,Be[0].height,ue.depth);for(let C=0,k=Be.length;C<k;C++)if(we=Be[C],M.format!==Vn)if(ye!==null)if(Ve){if(P)if(M.layerUpdates.size>0){const $=dm(we.width,we.height,M.format,M.type);for(const de of M.layerUpdates){const je=we.data.subarray(de*$/we.data.BYTES_PER_ELEMENT,(de+1)*$/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,de,we.width,we.height,1,ye,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,we.width,we.height,ue.depth,ye,we.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,C,Pe,we.width,we.height,ue.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,we.width,we.height,ue.depth,ye,Ke,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,C,Pe,we.width,we.height,ue.depth,0,ye,Ke,we.data)}else{Ve&&ot&&n.texStorage2D(t.TEXTURE_2D,A,Pe,Be[0].width,Be[0].height);for(let C=0,k=Be.length;C<k;C++)we=Be[C],M.format!==Vn?ye!==null?Ve?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,C,0,0,we.width,we.height,ye,we.data):n.compressedTexImage2D(t.TEXTURE_2D,C,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?P&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,we.width,we.height,ye,Ke,we.data):n.texImage2D(t.TEXTURE_2D,C,Pe,we.width,we.height,0,ye,Ke,we.data)}else if(M.isDataArrayTexture)if(Ve){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,A,Pe,ue.width,ue.height,ue.depth),P)if(M.layerUpdates.size>0){const C=dm(ue.width,ue.height,M.format,M.type);for(const k of M.layerUpdates){const $=ue.data.subarray(k*C/ue.data.BYTES_PER_ELEMENT,(k+1)*C/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,k,ue.width,ue.height,1,ye,Ke,$)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ke,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ue.width,ue.height,ue.depth,0,ye,Ke,ue.data);else if(M.isData3DTexture)Ve?(ot&&n.texStorage3D(t.TEXTURE_3D,A,Pe,ue.width,ue.height,ue.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,Ke,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ue.width,ue.height,ue.depth,0,ye,Ke,ue.data);else if(M.isFramebufferTexture){if(ot)if(Ve)n.texStorage2D(t.TEXTURE_2D,A,Pe,ue.width,ue.height);else{let C=ue.width,k=ue.height;for(let $=0;$<A;$++)n.texImage2D(t.TEXTURE_2D,$,Pe,C,k,0,ye,Ke,null),C>>=1,k>>=1}}else if(Be.length>0){if(Ve&&ot){const C=ve(Be[0]);n.texStorage2D(t.TEXTURE_2D,A,Pe,C.width,C.height)}for(let C=0,k=Be.length;C<k;C++)we=Be[C],Ve?P&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,ye,Ke,we):n.texImage2D(t.TEXTURE_2D,C,Pe,ye,Ke,we);M.generateMipmaps=!1}else if(Ve){if(ot){const C=ve(ue);n.texStorage2D(t.TEXTURE_2D,A,Pe,C.width,C.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Ke,ue)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ye,Ke,ue);m(M)&&c(ee),Te.__version=ne.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function K(L,M,X){if(M.image.length!==6)return;const ee=ce(L,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const ne=i.get(re);if(re.version!==ne.__version||ee===!0){n.activeTexture(t.TEXTURE0+X);const Te=nt.getPrimaries(nt.workingColorSpace),ge=M.colorSpace===Fi?null:nt.getPrimaries(M.colorSpace),Me=M.colorSpace===Fi||Te===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let k=0;k<6;k++)!He&&!ue?ye[k]=y(M.image[k],!0,r.maxCubemapSize):ye[k]=ue?M.image[k].image:M.image[k],ye[k]=Ce(M,ye[k]);const Ke=ye[0],Pe=s.convert(M.format,M.colorSpace),we=s.convert(M.type),Be=g(M.internalFormat,Pe,we,M.colorSpace),Ve=M.isVideoTexture!==!0,ot=ne.__version===void 0||ee===!0,P=re.dataReady;let A=v(M,Ke);te(t.TEXTURE_CUBE_MAP,M);let C;if(He){Ve&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,A,Be,Ke.width,Ke.height);for(let k=0;k<6;k++){C=ye[k].mipmaps;for(let $=0;$<C.length;$++){const de=C[$];M.format!==Vn?Pe!==null?Ve?P&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,0,0,de.width,de.height,Pe,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,Be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,0,0,de.width,de.height,Pe,we,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,Be,de.width,de.height,0,Pe,we,de.data)}}}else{if(C=M.mipmaps,Ve&&ot){C.length>0&&A++;const k=ve(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,A,Be,k.width,k.height)}for(let k=0;k<6;k++)if(ue){Ve?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ye[k].width,ye[k].height,Pe,we,ye[k].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Be,ye[k].width,ye[k].height,0,Pe,we,ye[k].data);for(let $=0;$<C.length;$++){const je=C[$].image[k].image;Ve?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,0,0,je.width,je.height,Pe,we,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,Be,je.width,je.height,0,Pe,we,je.data)}}else{Ve?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Pe,we,ye[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Be,Pe,we,ye[k]);for(let $=0;$<C.length;$++){const de=C[$];Ve?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,0,0,Pe,we,de.image[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,Be,Pe,we,de.image[k])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),ne.__version=re.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ie(L,M,X,ee,re,ne){const Te=s.convert(X.format,X.colorSpace),ge=s.convert(X.type),Me=g(X.internalFormat,Te,ge,X.colorSpace);if(!i.get(M).__hasExternalTextures){const ue=Math.max(1,M.width>>ne),ye=Math.max(1,M.height>>ne);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ne,Me,ue,ye,M.depth,0,Te,ge,null):n.texImage2D(re,ne,Me,ue,ye,0,Te,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),oe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,i.get(X).__webglTexture,0,le(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,i.get(X).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(L,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer){const ee=M.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,ne=_(M.stencilBuffer,re),Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=le(M);oe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,ne,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,L)}else{const ee=M.textures;for(let re=0;re<ee.length;re++){const ne=ee[re],Te=s.convert(ne.format,ne.colorSpace),ge=s.convert(ne.type),Me=g(ne.internalFormat,Te,ge,ne.colorSpace),He=le(M);X&&oe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Me,M.width,M.height):oe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,Me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,re=le(M);if(M.depthTexture.format===Cs)oe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Bs)oe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(L){const M=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=ee}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");pe(M.__webglFramebuffer,L)}else if(X){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),me(M.__webglDepthbuffer[ee],L,!1);else{const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ne)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),me(M.__webglDepthbuffer,L,!1);else{const ee=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(L,M,X){const ee=i.get(L);M!==void 0&&ie(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&De(L)}function ze(L){const M=L.texture,X=i.get(L),ee=i.get(M);L.addEventListener("dispose",b);const re=L.textures,ne=L.isWebGLCubeRenderTarget===!0,Te=re.length>1;if(Te||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),ne){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let Me=0;Me<M.mipmaps.length;Me++)X.__webglFramebuffer[ge][Me]=t.createFramebuffer()}else X.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)X.__webglFramebuffer[ge]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ge=0,Me=re.length;ge<Me;ge++){const He=i.get(re[ge]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&oe(L)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const Me=re[ge];X.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);const He=s.convert(Me.format,Me.colorSpace),ue=s.convert(Me.type),ye=g(Me.internalFormat,He,ue,Me.colorSpace,L.isXRRenderTarget===!0),Ke=le(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,ye,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),me(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),te(t.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ie(X.__webglFramebuffer[ge][Me],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else ie(X.__webglFramebuffer[ge],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ge=0,Me=re.length;ge<Me;ge++){const He=re[ge],ue=i.get(He);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),te(t.TEXTURE_2D,He),ie(X.__webglFramebuffer,L,He,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m(He)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ee.__webglTexture),te(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ie(X.__webglFramebuffer[Me],L,M,t.COLOR_ATTACHMENT0,ge,Me);else ie(X.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,ge,0);m(M)&&c(ge),n.unbindTexture()}L.depthBuffer&&De(L)}function ae(L){const M=L.textures;for(let X=0,ee=M.length;X<ee;X++){const re=M[X];if(m(re)){const ne=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(re).__webglTexture;n.bindTexture(ne,Te),c(ne),n.unbindTexture()}}}const N=[],Xe=[];function fe(L){if(L.samples>0){if(oe(L)===!1){const M=L.textures,X=L.width,ee=L.height;let re=t.COLOR_BUFFER_BIT;const ne=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(L),ge=M.length>1;if(ge)for(let Me=0;Me<M.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const He=i.get(M[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,X,ee,0,0,X,ee,re,t.NEAREST),l===!0&&(N.length=0,Xe.length=0,N.push(t.COLOR_ATTACHMENT0+Me),L.depthBuffer&&L.resolveDepthBuffer===!1&&(N.push(ne),Xe.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Xe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<M.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const He=i.get(M[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function le(L){return Math.min(r.maxSamples,L.samples)}function oe(L){const M=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(L){const M=o.render.frame;d.get(L)!==M&&(d.set(L,M),L.update())}function Ce(L,M){const X=L.colorSpace,ee=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==rr&&X!==Fi&&(nt.getTransfer(X)===ut?(ee!==Vn||re!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=R,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Ie,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=oe}function Ww(t,e){function n(i,r=Fi){let s;const o=nt.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===$d)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===G0)return t.BYTE;if(i===W0)return t.SHORT;if(i===Go)return t.UNSIGNED_SHORT;if(i===Yd)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===qo)return t.HALF_FLOAT;if(i===j0)return t.ALPHA;if(i===Y0)return t.RGB;if(i===Vn)return t.RGBA;if(i===$0)return t.LUMINANCE;if(i===q0)return t.LUMINANCE_ALPHA;if(i===Cs)return t.DEPTH_COMPONENT;if(i===Bs)return t.DEPTH_STENCIL;if(i===K0)return t.RED;if(i===Kd)return t.RED_INTEGER;if(i===Z0)return t.RG;if(i===Zd)return t.RG_INTEGER;if(i===Qd)return t.RGBA_INTEGER;if(i===rl||i===sl||i===ol||i===al)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yf||i===Sf||i===Mf||i===Ef)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wf||i===Tf||i===Af)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wf||i===Tf)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Af)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cf||i===Rf||i===bf||i===Pf||i===Lf||i===Df||i===If||i===Uf||i===Nf||i===Ff||i===Of||i===kf||i===zf||i===Bf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Df)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===Hf||i===Vf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ll)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Q0||i===Gf||i===Wf||i===Xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Xw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oa extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jw={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;u.inputState.pinching&&f>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$w=`
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

}`;class qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:Yw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kw extends Xs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,h=null,f=null,p=null,x=null;const y=new qw,m=n.getContextAttributes();let c=null,g=null;const _=[],v=[],F=new We;let b=null;const w=new wn;w.layers.enable(1),w.viewport=new Tt;const I=new wn;I.layers.enable(2),I.viewport=new Tt;const E=[w,I],S=new Xw;S.layers.enable(1),S.layers.enable(2);let D=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=_[K];return ie===void 0&&(ie=new hc,_[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=_[K];return ie===void 0&&(ie=new hc,_[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=_[K];return ie===void 0&&(ie=new hc,_[K]=ie),ie.getHandSpace()};function z(K){const ie=v.indexOf(K.inputSource);if(ie===-1)return;const me=_[ie];me!==void 0&&(me.update(K.inputSource,K.frame,u||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",V);for(let K=0;K<_.length;K++){const ie=v[K];ie!==null&&(v[K]=null,_[K].disconnect(ie))}D=null,R=null,y.reset(),e.setRenderTarget(c),p=null,f=null,h=null,r=null,g=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Pr(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,me=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Bs:Cs,me=m.stencil?zs:br);const De={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Pr(f.textureWidth,f.textureHeight,{format:Vn,type:yi,depthTexture:new d_(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(K){for(let ie=0;ie<K.removed.length;ie++){const me=K.removed[ie],pe=v.indexOf(me);pe>=0&&(v[pe]=null,_[pe].disconnect(me))}for(let ie=0;ie<K.added.length;ie++){const me=K.added[ie];let pe=v.indexOf(me);if(pe===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=v.length){v.push(me),pe=Ie;break}else if(v[Ie]===null){v[Ie]=me,pe=Ie;break}if(pe===-1)break}const De=_[pe];De&&De.connect(me)}}const j=new W,Y=new W;function U(K,ie,me){j.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const pe=j.distanceTo(Y),De=ie.projectionMatrix.elements,Ie=me.projectionMatrix.elements,ze=De[14]/(De[10]-1),ae=De[14]/(De[10]+1),N=(De[9]+1)/De[5],Xe=(De[9]-1)/De[5],fe=(De[8]-1)/De[0],le=(Ie[8]+1)/Ie[0],oe=ze*fe,Ue=ze*le,Ce=pe/(-fe+le),ve=Ce*-fe;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),De[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const L=ze+Ce,M=ae+Ce,X=oe-ve,ee=Ue+(pe-ve),re=N*ae/M*L,ne=Xe*ae/M*L;K.projectionMatrix.makePerspective(X,ee,re,ne,L,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function G(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,me=K.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(me=y.depthFar)),S.near=I.near=w.near=ie,S.far=I.far=w.far=me,(D!==S.near||R!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,R=S.far);const pe=K.parent,De=S.cameras;G(S,pe);for(let Ie=0;Ie<De.length;Ie++)G(De[Ie],pe);De.length===2?U(S,w,I):S.projectionMatrix.copy(w.projectionMatrix),Q(K,S,pe)};function Q(K,ie,me){me===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let te=null;function ce(K,ie){if(d=ie.getViewerPose(u||o),x=ie,d!==null){const me=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let pe=!1;me.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Ie=0;Ie<me.length;Ie++){const ze=me[Ie];let ae=null;if(p!==null)ae=p.getViewport(ze);else{const Xe=h.getViewSubImage(f,ze);ae=Xe.viewport,Ie===0&&(e.setRenderTargetTextures(g,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(g))}let N=E[Ie];N===void 0&&(N=new wn,N.layers.enable(Ie),N.viewport=new Tt,E[Ie]=N),N.matrix.fromArray(ze.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(ze.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(ae.x,ae.y,ae.width,ae.height),Ie===0&&(S.matrix.copy(N.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(N)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ie=h.getDepthInformation(me[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let me=0;me<_.length;me++){const pe=v[me],De=_[me];pe!==null&&De!==void 0&&De.update(pe,ie,u||o)}te&&te(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const Fe=new c_;Fe.setAnimationLoop(ce),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}}const fr=new Yn,Zw=new dt;function Qw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,a_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,_,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),d(m,c)):c.isMeshStandardMaterial?(s(m,c),f(m,c),c.isMeshPhysicalMaterial&&p(m,c,v)):c.isMeshMatcapMaterial?(s(m,c),x(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),y(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===an&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===an&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,fr.copy(v),fr.x*=-1,fr.y*=-1,fr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(fr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===an&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function u(g,_){let v=r[g.id];v===void 0&&(x(g),v=d(g),r[g.id]=v,g.addEventListener("dispose",m));const F=_.program;i.updateUBOMapping(g,F);const b=e.render.frame;s[g.id]!==b&&(f(g),s[g.id]=b)}function d(g){const _=h();g.__bindingPointIndex=_;const v=t.createBuffer(),F=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,F,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,v),v}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],v=g.uniforms,F=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,w=v.length;b<w;b++){const I=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,S=I.length;E<S;E++){const D=I[E];if(p(D,b,E,F)===!0){const R=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let V=0;V<z.length;V++){const j=z[V],Y=y(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,R+q,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,R,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,v,F){const b=g.value,w=_+"_"+v;if(F[w]===void 0)return typeof b=="number"||typeof b=="boolean"?F[w]=b:F[w]=b.clone(),!0;{const I=F[w];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return F[w]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function x(g){const _=g.uniforms;let v=0;const F=16;for(let w=0,I=_.length;w<I;w++){const E=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,D=E.length;S<D;S++){const R=E[S],z=Array.isArray(R.value)?R.value:[R.value];for(let q=0,V=z.length;q<V;q++){const j=z[q],Y=y(j),U=v%F,G=U%Y.boundary,Q=U+G;v+=G,Q!==0&&F-Q<Y.storage&&(v+=F-Q),R.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=v,v+=Y.storage}}}const b=v%F;return b>0&&(v+=F-b),g.__size=v,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class eT{constructor(e={}){const{canvas:n=Wy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=qi,this.toneMappingExposure=1;const _=this;let v=!1,F=0,b=0,w=null,I=-1,E=null;const S=new Tt,D=new Tt;let R=null;const z=new Ge(0);let q=0,V=n.width,j=n.height,Y=1,U=null,G=null;const Q=new Tt(0,0,V,j),te=new Tt(0,0,V,j);let ce=!1;const Fe=new ih;let K=!1,ie=!1;const me=new dt,pe=new W,De=new Tt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ae(){return w===null?Y:1}let N=i;function Xe(T,B){return n.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jd}`),n.addEventListener("webglcontextlost",C,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",$,!1),N===null){const B="webgl2";if(N=Xe(B,T),N===null)throw Xe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,le,oe,Ue,Ce,ve,L,M,X,ee,re,ne,Te,ge,Me,He,ue,ye,Ke,Pe,we,Be,Ve,ot;function P(){fe=new o1(N),fe.init(),Be=new Ww(N,fe),le=new e1(N,fe,e,Be),oe=new Hw(N),Ue=new u1(N),Ce=new Cw,ve=new Gw(N,fe,oe,Ce,le,Be,Ue),L=new n1(_),M=new s1(_),X=new gS(N),Ve=new QE(N,X),ee=new a1(N,X,Ue,Ve),re=new f1(N,ee,X,Ue),Ke=new c1(N,le,ve),He=new t1(Ce),ne=new Aw(_,L,M,fe,le,Ve,He),Te=new Qw(_,Ce),ge=new bw,Me=new Nw(fe),ye=new ZE(_,L,M,oe,re,f,l),ue=new Bw(_,re,le),ot=new Jw(N,Ue,le,oe),Pe=new JE(N,fe,Ue),we=new l1(N,fe,Ue),Ue.programs=ne.programs,_.capabilities=le,_.extensions=fe,_.properties=Ce,_.renderLists=ge,_.shadowMap=ue,_.state=oe,_.info=Ue}P();const A=new Kw(_,N);this.xr=A,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(V,j,!1))},this.getSize=function(T){return T.set(V,j)},this.setSize=function(T,B,Z=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,j=B,n.width=Math.floor(T*Y),n.height=Math.floor(B*Y),Z===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(V*Y,j*Y).floor()},this.setDrawingBufferSize=function(T,B,Z){V=T,j=B,Y=Z,n.width=Math.floor(T*Z),n.height=Math.floor(B*Z),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,B,Z,J){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,B,Z,J),oe.viewport(S.copy(Q).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,B,Z,J){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,B,Z,J),oe.scissor(D.copy(te).multiplyScalar(Y).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(T){oe.setScissorTest(ce=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(T=!0,B=!0,Z=!0){let J=0;if(T){let H=!1;if(w!==null){const he=w.texture.format;H=he===Qd||he===Zd||he===Kd}if(H){const he=w.texture.type,xe=he===yi||he===br||he===Go||he===zs||he===$d||he===qd,Re=ye.getClearColor(),be=ye.getClearAlpha(),Oe=Re.r,ke=Re.g,Le=Re.b;xe?(p[0]=Oe,p[1]=ke,p[2]=Le,p[3]=be,N.clearBufferuiv(N.COLOR,0,p)):(x[0]=Oe,x[1]=ke,x[2]=Le,x[3]=be,N.clearBufferiv(N.COLOR,0,x))}else J|=N.COLOR_BUFFER_BIT}B&&(J|=N.DEPTH_BUFFER_BIT),Z&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",C,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",$,!1),ge.dispose(),Me.dispose(),Ce.dispose(),L.dispose(),M.dispose(),re.dispose(),Ve.dispose(),ot.dispose(),ne.dispose(),A.dispose(),A.removeEventListener("sessionstart",bt),A.removeEventListener("sessionend",$n),Wt.stop()};function C(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=Ue.autoReset,B=ue.enabled,Z=ue.autoUpdate,J=ue.needsUpdate,H=ue.type;P(),Ue.autoReset=T,ue.enabled=B,ue.autoUpdate=Z,ue.needsUpdate=J,ue.type=H}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){const B=T.target;B.removeEventListener("dispose",de),je(B)}function je(T){Ze(T),Ce.remove(T)}function Ze(T){const B=Ce.get(T).programs;B!==void 0&&(B.forEach(function(Z){ne.releaseProgram(Z)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Z,J,H,he){B===null&&(B=Ie);const xe=H.isMesh&&H.matrixWorld.determinant()<0,Re=y_(T,B,Z,J,H);oe.setMaterial(J,xe);let be=Z.index,Oe=1;if(J.wireframe===!0){if(be=ee.getWireframeAttribute(Z),be===void 0)return;Oe=2}const ke=Z.drawRange,Le=Z.attributes.position;let Je=ke.start*Oe,_t=(ke.start+ke.count)*Oe;he!==null&&(Je=Math.max(Je,he.start*Oe),_t=Math.min(_t,(he.start+he.count)*Oe)),be!==null?(Je=Math.max(Je,0),_t=Math.min(_t,be.count)):Le!=null&&(Je=Math.max(Je,0),_t=Math.min(_t,Le.count));const vt=_t-Je;if(vt<0||vt===1/0)return;Ve.setup(H,J,Re,Z,be);let ln,et=Pe;if(be!==null&&(ln=X.get(be),et=we,et.setIndex(ln)),H.isMesh)J.wireframe===!0?(oe.setLineWidth(J.wireframeLinewidth*ae()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(H.isLine){let Ne=J.linewidth;Ne===void 0&&(Ne=1),oe.setLineWidth(Ne*ae()),H.isLineSegments?et.setMode(N.LINES):H.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else H.isPoints?et.setMode(N.POINTS):H.isSprite&&et.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ne=H._multiDrawStarts,Ut=H._multiDrawCounts,tt=H._multiDrawCount,Dn=be?X.get(be).bytesPerElement:1,Fr=Ce.get(J).currentProgram.getUniforms();for(let un=0;un<tt;un++)Fr.setValue(N,"_gl_DrawID",un),et.render(Ne[un]/Dn,Ut[un])}else if(H.isInstancedMesh)et.renderInstances(Je,vt,H.count);else if(Z.isInstancedBufferGeometry){const Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ut=Math.min(Z.instanceCount,Ne);et.renderInstances(Je,vt,Ut)}else et.render(Je,vt)};function at(T,B,Z){T.transparent===!0&&T.side===Bn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Nr(T,B,Z),T.side=Ji,T.needsUpdate=!0,Nr(T,B,Z),T.side=Bn):Nr(T,B,Z)}this.compile=function(T,B,Z=null){Z===null&&(Z=T),m=Me.get(Z),m.init(B),g.push(m),Z.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==Z&&T.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const J=new Set;return T.traverse(function(H){const he=H.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Re=he[xe];at(Re,Z,H),J.add(Re)}else at(he,Z,H),J.add(he)}),g.pop(),m=null,J},this.compileAsync=function(T,B,Z=null){const J=this.compile(T,B,Z);return new Promise(H=>{function he(){if(J.forEach(function(xe){Ce.get(xe).currentProgram.isReady()&&J.delete(xe)}),J.size===0){H(T);return}setTimeout(he,10)}fe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ae=null;function gt(T){Ae&&Ae(T)}function bt(){Wt.stop()}function $n(){Wt.start()}const Wt=new c_;Wt.setAnimationLoop(gt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(T){Ae=T,A.setAnimationLoop(T),T===null?Wt.stop():Wt.start()},A.addEventListener("sessionstart",bt),A.addEventListener("sessionend",$n),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(B),B=A.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,w),m=Me.get(T,g.length),m.init(B),g.push(m),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(me),ie=this.localClippingEnabled,K=He.init(this.clippingPlanes,ie),y=ge.get(T,c.length),y.init(),c.push(y),A.enabled===!0&&A.isPresenting===!0){const he=_.xr.getDepthSensingMesh();he!==null&&xn(he,B,-1/0,_.sortObjects)}xn(T,B,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(U,G),ze=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,ze&&ye.addToRenderList(y,T),this.info.render.frame++,K===!0&&He.beginShadows();const Z=m.state.shadowsArray;ue.render(Z,T,B),K===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,H=y.transmissive;if(m.setupLights(),B.isArrayCamera){const he=B.cameras;if(H.length>0)for(let xe=0,Re=he.length;xe<Re;xe++){const be=he[xe];Xt(J,H,T,be)}ze&&ye.render(T);for(let xe=0,Re=he.length;xe<Re;xe++){const be=he[xe];Ys(y,T,be,be.viewport)}}else H.length>0&&Xt(J,H,T,B),ze&&ye.render(T),Ys(y,T,B);w!==null&&(ve.updateMultisampleRenderTarget(w),ve.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,B),Ve.resetDefaultState(),I=-1,E=null,g.pop(),g.length>0?(m=g[g.length-1],K===!0&&He.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function xn(T,B,Z,J){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){J&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const xe=re.update(T),Re=T.material;Re.visible&&y.push(T,xe,Re,Z,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){const xe=re.update(T),Re=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Re)){const be=xe.groups;for(let Oe=0,ke=be.length;Oe<ke;Oe++){const Le=be[Oe],Je=Re[Le.materialIndex];Je&&Je.visible&&y.push(T,xe,Je,Z,De.z,Le)}}else Re.visible&&y.push(T,xe,Re,Z,De.z,null)}}const he=T.children;for(let xe=0,Re=he.length;xe<Re;xe++)xn(he[xe],B,Z,J)}function Ys(T,B,Z,J){const H=T.opaque,he=T.transmissive,xe=T.transparent;m.setupLightsView(Z),K===!0&&He.setGlobalState(_.clippingPlanes,Z),J&&oe.viewport(S.copy(J)),H.length>0&&Mi(H,B,Z),he.length>0&&Mi(he,B,Z),xe.length>0&&Mi(xe,B,Z),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Xt(T,B,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Pr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?qo:yi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const he=m.state.transmissionRenderTarget[J.id],xe=J.viewport||S;he.setSize(xe.z,xe.w);const Re=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(z),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),ze&&ye.render(Z);const be=_.toneMapping;_.toneMapping=qi;const Oe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),K===!0&&He.setGlobalState(_.clippingPlanes,J),Mi(T,Z,J),ve.updateMultisampleRenderTarget(he),ve.updateRenderTargetMipmap(he),fe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Le=0,Je=B.length;Le<Je;Le++){const _t=B[Le],vt=_t.object,ln=_t.geometry,et=_t.material,Ne=_t.group;if(et.side===Bn&&vt.layers.test(J.layers)){const Ut=et.side;et.side=an,et.needsUpdate=!0,Ur(vt,Z,J,ln,et,Ne),et.side=Ut,et.needsUpdate=!0,ke=!0}}ke===!0&&(ve.updateMultisampleRenderTarget(he),ve.updateRenderTargetMipmap(he))}_.setRenderTarget(Re),_.setClearColor(z,q),Oe!==void 0&&(J.viewport=Oe),_.toneMapping=be}function Mi(T,B,Z){const J=B.isScene===!0?B.overrideMaterial:null;for(let H=0,he=T.length;H<he;H++){const xe=T[H],Re=xe.object,be=xe.geometry,Oe=J===null?xe.material:J,ke=xe.group;Re.layers.test(Z.layers)&&Ur(Re,B,Z,be,Oe,ke)}}function Ur(T,B,Z,J,H,he){T.onBeforeRender(_,B,Z,J,H,he),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,B,Z,J,T,he),H.transparent===!0&&H.side===Bn&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,_.renderBufferDirect(Z,B,J,H,T,he),H.side=Ji,H.needsUpdate=!0,_.renderBufferDirect(Z,B,J,H,T,he),H.side=Bn):_.renderBufferDirect(Z,B,J,H,T,he),T.onAfterRender(_,B,Z,J,H,he)}function Nr(T,B,Z){B.isScene!==!0&&(B=Ie);const J=Ce.get(T),H=m.state.lights,he=m.state.shadowsArray,xe=H.state.version,Re=ne.getParameters(T,H.state,he,B,Z),be=ne.getProgramCacheKey(Re);let Oe=J.programs;J.environment=T.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(T.isMeshStandardMaterial?M:L).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",de),Oe=new Map,J.programs=Oe);let ke=Oe.get(be);if(ke!==void 0){if(J.currentProgram===ke&&J.lightsStateVersion===xe)return ah(T,Re),ke}else Re.uniforms=ne.getUniforms(T),T.onBeforeCompile(Re,_),ke=ne.acquireProgram(Re,be),Oe.set(be,ke),J.uniforms=Re.uniforms;const Le=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=He.uniform),ah(T,Re),J.needsLights=M_(T),J.lightsStateVersion=xe,J.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=ke,J.uniformsList=null,ke}function oh(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=cl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ah(T,B){const Z=Ce.get(T);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function y_(T,B,Z,J,H){B.isScene!==!0&&(B=Ie),ve.resetTextureUnits();const he=B.fog,xe=J.isMeshStandardMaterial?B.environment:null,Re=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rr,be=(J.isMeshStandardMaterial?M:L).get(J.envMap||xe),Oe=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Le=!!Z.morphAttributes.position,Je=!!Z.morphAttributes.normal,_t=!!Z.morphAttributes.color;let vt=qi;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(vt=_.toneMapping);const ln=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,et=ln!==void 0?ln.length:0,Ne=Ce.get(J),Ut=m.state.lights;if(K===!0&&(ie===!0||T!==E)){const yn=T===E&&J.id===I;He.setState(J,T,yn)}let tt=!1;J.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ut.state.version||Ne.outputColorSpace!==Re||H.isBatchedMesh&&Ne.batching===!1||!H.isBatchedMesh&&Ne.batching===!0||H.isBatchedMesh&&Ne.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ne.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ne.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ne.instancingMorph===!1&&H.morphTexture!==null||Ne.envMap!==be||J.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==He.numPlanes||Ne.numIntersection!==He.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==ke||Ne.morphTargets!==Le||Ne.morphNormals!==Je||Ne.morphColors!==_t||Ne.toneMapping!==vt||Ne.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ne.__version=J.version);let Dn=Ne.currentProgram;tt===!0&&(Dn=Nr(J,B,H));let Fr=!1,un=!1,du=!1;const St=Dn.getUniforms(),Ei=Ne.uniforms;if(oe.useProgram(Dn.program)&&(Fr=!0,un=!0,du=!0),J.id!==I&&(I=J.id,un=!0),Fr||E!==T){St.setValue(N,"projectionMatrix",T.projectionMatrix),St.setValue(N,"viewMatrix",T.matrixWorldInverse);const yn=St.map.cameraPosition;yn!==void 0&&yn.setValue(N,pe.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,un=!0,du=!0)}if(H.isSkinnedMesh){St.setOptional(N,H,"bindMatrix"),St.setOptional(N,H,"bindMatrixInverse");const yn=H.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),St.setValue(N,"boneTexture",yn.boneTexture,ve))}H.isBatchedMesh&&(St.setOptional(N,H,"batchingTexture"),St.setValue(N,"batchingTexture",H._matricesTexture,ve),St.setOptional(N,H,"batchingIdTexture"),St.setValue(N,"batchingIdTexture",H._indirectTexture,ve),St.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(N,"batchingColorTexture",H._colorsTexture,ve));const hu=Z.morphAttributes;if((hu.position!==void 0||hu.normal!==void 0||hu.color!==void 0)&&Ke.update(H,Z,Dn),(un||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,St.setValue(N,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ei.envMap.value=be,Ei.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(Ei.envMapIntensity.value=B.environmentIntensity),un&&(St.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&S_(Ei,du),he&&J.fog===!0&&Te.refreshFogUniforms(Ei,he),Te.refreshMaterialUniforms(Ei,J,Y,j,m.state.transmissionRenderTarget[T.id]),cl.upload(N,oh(Ne),Ei,ve)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(cl.upload(N,oh(Ne),Ei,ve),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(N,"center",H.center),St.setValue(N,"modelViewMatrix",H.modelViewMatrix),St.setValue(N,"normalMatrix",H.normalMatrix),St.setValue(N,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let pu=0,E_=yn.length;pu<E_;pu++){const lh=yn[pu];ot.update(lh,Dn),ot.bind(lh,Dn)}}return Dn}function S_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function M_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,Z){Ce.get(T.texture).__webglTexture=B,Ce.get(T.depthTexture).__webglTexture=Z;const J=Ce.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const Z=Ce.get(T);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Z=0){w=T,F=B,b=Z;let J=!0,H=null,he=!1,xe=!1;if(T){const be=Ce.get(T);if(be.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(be.__webglFramebuffer===void 0)ve.setupRenderTarget(T);else if(be.__hasExternalTextures)ve.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(be.__boundDepthTexture!==Le){if(Le!==null&&Ce.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const ke=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?H=ke[B][Z]:H=ke[B],he=!0):T.samples>0&&ve.useMultisampledRTT(T)===!1?H=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[Z]:H=ke,S.copy(T.viewport),D.copy(T.scissor),R=T.scissorTest}else S.copy(Q).multiplyScalar(Y).floor(),D.copy(te).multiplyScalar(Y).floor(),R=ce;if(oe.bindFramebuffer(N.FRAMEBUFFER,H)&&J&&oe.drawBuffers(T,H),oe.viewport(S),oe.scissor(D),oe.setScissorTest(R),he){const be=Ce.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,Z)}else if(xe){const be=Ce.get(T.texture),Oe=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,Z||0,Oe)}I=-1},this.readRenderTargetPixels=function(T,B,Z,J,H,he,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Re=Re[xe]),Re){oe.bindFramebuffer(N.FRAMEBUFFER,Re);try{const be=T.texture,Oe=be.format,ke=be.type;if(!le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-J&&Z>=0&&Z<=T.height-H&&N.readPixels(B,Z,J,H,Be.convert(Oe),Be.convert(ke),he)}finally{const be=w!==null?Ce.get(w).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,B,Z,J,H,he,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Re=Re[xe]),Re){oe.bindFramebuffer(N.FRAMEBUFFER,Re);try{const be=T.texture,Oe=be.format,ke=be.type;if(!le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-J&&Z>=0&&Z<=T.height-H){const Le=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(B,Z,J,H,Be.convert(Oe),Be.convert(ke),0),N.flush();const Je=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await Xy(N,Je,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Le),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he)}finally{N.deleteBuffer(Le),N.deleteSync(Je)}return he}}finally{const be=w!==null?Ce.get(w).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(T,B=null,Z=0){T.isTexture!==!0&&(Rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-Z),H=Math.floor(T.image.width*J),he=Math.floor(T.image.height*J),xe=B!==null?B.x:0,Re=B!==null?B.y:0;ve.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,xe,Re,H,he),oe.unbindTexture()},this.copyTextureToTexture=function(T,B,Z=null,J=null,H=0){T.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],B=arguments[2],H=arguments[3]||0,Z=null);let he,xe,Re,be,Oe,ke;Z!==null?(he=Z.max.x-Z.min.x,xe=Z.max.y-Z.min.y,Re=Z.min.x,be=Z.min.y):(he=T.image.width,xe=T.image.height,Re=0,be=0),J!==null?(Oe=J.x,ke=J.y):(Oe=0,ke=0);const Le=Be.convert(B.format),Je=Be.convert(B.type);ve.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const _t=N.getParameter(N.UNPACK_ROW_LENGTH),vt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=N.getParameter(N.UNPACK_SKIP_PIXELS),et=N.getParameter(N.UNPACK_SKIP_ROWS),Ne=N.getParameter(N.UNPACK_SKIP_IMAGES),Ut=T.isCompressedTexture?T.mipmaps[H]:T.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),N.pixelStorei(N.UNPACK_SKIP_ROWS,be),T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,Oe,ke,he,xe,Le,Je,Ut.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,Oe,ke,Ut.width,Ut.height,Le,Ut.data):N.texSubImage2D(N.TEXTURE_2D,H,Oe,ke,he,xe,Le,Je,Ut),N.pixelStorei(N.UNPACK_ROW_LENGTH,_t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne),H===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Z=null,J=null,H=0){T.isTexture!==!0&&(Rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,T=arguments[2],B=arguments[3],H=arguments[4]||0);let he,xe,Re,be,Oe,ke,Le,Je,_t;const vt=T.isCompressedTexture?T.mipmaps[H]:T.image;Z!==null?(he=Z.max.x-Z.min.x,xe=Z.max.y-Z.min.y,Re=Z.max.z-Z.min.z,be=Z.min.x,Oe=Z.min.y,ke=Z.min.z):(he=vt.width,xe=vt.height,Re=vt.depth,be=0,Oe=0,ke=0),J!==null?(Le=J.x,Je=J.y,_t=J.z):(Le=0,Je=0,_t=0);const ln=Be.convert(B.format),et=Be.convert(B.type);let Ne;if(B.isData3DTexture)ve.setTexture3D(B,0),Ne=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)ve.setTexture2DArray(B,0),Ne=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Ut=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Dn=N.getParameter(N.UNPACK_SKIP_PIXELS),Fr=N.getParameter(N.UNPACK_SKIP_ROWS),un=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke),T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ne,H,Le,Je,_t,he,xe,Re,ln,et,vt.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,H,Le,Je,_t,he,xe,Re,ln,vt.data):N.texSubImage3D(Ne,H,Le,Je,_t,he,xe,Re,ln,et,vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ut),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,un),H===0&&B.generateMipmaps&&N.generateMipmap(Ne),oe.unbindTexture()},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&ve.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){F=0,b=0,w=null,oe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===eh?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===uu?"display-p3":"srgb"}}class sh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tT extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class nT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=jf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new W;class Vl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ei(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Xn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fl extends sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ts;const ao=new W,ns=new W,is=new W,rs=new We,lo=new We,__=new dt,ka=new W,uo=new W,za=new W,hm=new We,pc=new We,pm=new We;class mc extends It{constructor(e=new fl){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new gn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new nT(n,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new Vl(i,3,0,!1)),ts.setAttribute("uv",new Vl(i,2,3,!1))}this.geometry=ts,this.material=e,this.center=new We(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),__.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ba(ka.set(-.5,-.5,0),is,o,ns,r,s),Ba(uo.set(.5,-.5,0),is,o,ns,r,s),Ba(za.set(.5,.5,0),is,o,ns,r,s),hm.set(0,0),pc.set(1,0),pm.set(1,1);let a=e.ray.intersectTriangle(ka,uo,za,!1,ao);if(a===null&&(Ba(uo.set(-.5,.5,0),is,o,ns,r,s),pc.set(0,1),a=e.ray.intersectTriangle(ka,za,uo,!1,ao),a===null))return;const l=e.ray.origin.distanceTo(ao);l<e.near||l>e.far||n.push({distance:l,point:ao.clone(),uv:Tn.getInterpolation(ao,ka,uo,za,hm,pc,pm,new We),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ba(t,e,n,i,r,s){rs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(lo.x=s*rs.x-r*rs.y,lo.y=r*rs.x+s*rs.y):lo.copy(rs),t.copy(e),t.x+=lo.x,t.y+=lo.y,t.applyMatrix4(__)}class xs extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new W,Wl=new W,mm=new dt,co=new th,Ha=new cu,gc=new W,gm=new W;class qf extends It{constructor(e=new gn,n=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gl.fromBufferAttribute(n,r-1),Wl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gl.distanceTo(Wl);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;mm.copy(r).invert(),co.copy(e.ray).applyMatrix4(mm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=p,m=x-1;y<m;y+=u){const c=d.getX(y),g=d.getX(y+1),_=Va(this,e,co,l,c,g);_&&n.push(_)}if(this.isLineLoop){const y=d.getX(x-1),m=d.getX(p),c=Va(this,e,co,l,y,m);c&&n.push(c)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=p,m=x-1;y<m;y+=u){const c=Va(this,e,co,l,y,y+1);c&&n.push(c)}if(this.isLineLoop){const y=Va(this,e,co,l,x-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Va(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Gl.fromBufferAttribute(o,r),Wl.fromBufferAttribute(o,s),n.distanceSqToSegment(Gl,Wl,gc,gm)>i)return;gc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(gc);if(!(l<e.near||l>e.far))return{distance:l,point:gm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const _m=new W,vm=new W;class Kf extends qf{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)_m.fromBufferAttribute(n,r),vm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_m.distanceTo(vm);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v_ extends Kt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ga=new W,Wa=new W,_c=new W,Xa=new Tn;class xm extends gn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(ul*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,u=[0,0,0],d=["a","b","c"],h=new Array(3),f={},p=[];for(let x=0;x<l;x+=3){o?(u[0]=o.getX(x),u[1]=o.getX(x+1),u[2]=o.getX(x+2)):(u[0]=x,u[1]=x+1,u[2]=x+2);const{a:y,b:m,c}=Xa;if(y.fromBufferAttribute(a,u[0]),m.fromBufferAttribute(a,u[1]),c.fromBufferAttribute(a,u[2]),Xa.getNormal(_c),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(c.x*r)},${Math.round(c.y*r)},${Math.round(c.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){const _=(g+1)%3,v=h[g],F=h[_],b=Xa[d[g]],w=Xa[d[_]],I=`${v}_${F}`,E=`${F}_${v}`;E in f&&f[E]?(_c.dot(f[E].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(w.x,w.y,w.z)),f[E]=null):I in f||(f[I]={index0:u[g],index1:u[_],normal:_c.clone()})}}for(const x in f)if(f[x]){const{index0:y,index1:m}=f[x];Ga.fromBufferAttribute(a,y),Wa.fromBufferAttribute(a,m),p.push(Ga.x,Ga.y,Ga.z),p.push(Wa.x,Wa.y,Wa.z)}this.setAttribute("position",new bn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class iT extends sr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vc extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x_ extends It{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const xc=new dt,ym=new W,Sm=new W;class rT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(ym),Sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sm),n.updateMatrixWorld(),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sT extends rT{constructor(){super(new f_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oT extends x_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new sT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aT extends x_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mm=new dt;class lT{constructor(e,n,i=0,r=1/0){this.ray=new th(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new nh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Mm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mm),this}intersectObject(e,n=!0,i=[]){return Zf(e,this,i,n),i.sort(Em),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Zf(e[r],this,i,n);return i.sort(Em),i}}function Em(t,e){return t.distance-e.distance}function Zf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Zf(s[o],e,n,!0)}}class uT extends Kf{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let f=0,p=0,x=-a;f<=n;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const y=f===s?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const d=new gn;d.setAttribute("position",new bn(l,3)),d.setAttribute("color",new bn(u,3));const h=new xs({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);const cT={name:"40ft High Cube Container",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},wm=[{name:"20ft Standard",innerLength:5898,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:28200},{name:"40ft Standard",innerLength:12032,innerWidth:2352,innerHeight:2393,doorWidth:2340,doorHeight:2280,maxPayload:26750},{name:"40ft High Cube",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580},{name:"45ft High Cube",innerLength:13556,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:27700},{name:"Custom",innerLength:12032,innerWidth:2352,innerHeight:2698,doorWidth:2340,doorHeight:2585,maxPayload:26580}],Tm=[{id:"hilux_dc",name:"Hilux Revo (4Dr)",length:5325,width:1855,height:1815,weight:2050,wheelbase:3085,cabRatio:.55},{id:"hilux_sc",name:"Hilux Revo (2Dr)",length:5255,width:1855,height:1815,weight:1910,wheelbase:3085,cabRatio:.4},{id:"ranger_dc",name:"Ranger (4Dr)",length:5362,width:1860,height:1821,weight:2150,wheelbase:3220,cabRatio:.55},{id:"triton_dc",name:"Triton (4Dr)",length:5305,width:1815,height:1795,weight:1950,wheelbase:3e3,cabRatio:.55},{id:"dmax_dc",name:"D-Max (4Dr)",length:5265,width:1870,height:1790,weight:1990,wheelbase:3020,cabRatio:.55},{id:"navara_dc",name:"Navara (4Dr)",length:5260,width:1850,height:1840,weight:2050,wheelbase:3150,cabRatio:.55},{id:"custom",name:"กำหนดเอง (Custom)",length:5300,width:1850,height:1800,weight:2e3,wheelbase:3e3,cabRatio:.5}],Am=[{id:"eu_pallet",name:"EU Pallet",length:1200,width:800,height:1450,weight:800},{id:"th_pallet",name:"TH Pallet",length:1100,width:1100,height:1450,weight:800},{id:"box_s",name:"กล่อง S",length:600,width:400,height:400,weight:20},{id:"box_m",name:"กล่อง M",length:800,width:600,height:600,weight:40},{id:"box_l",name:"กล่อง L",length:1200,width:800,height:800,weight:80},{id:"box_custom",name:"กำหนดเอง",length:1e3,width:800,height:800,weight:50}],ss=["#3B82F6","#EF4444","#10B981","#F59E0B","#8B5CF6","#EC4899","#06B6D4","#F97316"],yc=()=>Math.random().toString(36).substr(2,9);function fT(t,e=45){const n=t.naturalWidth||t.width,i=t.naturalHeight||t.height,r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.drawImage(t,0,0);const o=s.getImageData(0,0,n,i),a=o.data,l=a[0],u=a[1],d=a[2],h=new Uint8Array(n*i),f=[0,n-1,(i-1)*n,i*n-1];for(;f.length;){const p=f.pop();if(p<0||p>=n*i||h[p])continue;h[p]=1;const x=p*4;if(Math.abs(a[x]-l)+Math.abs(a[x+1]-u)+Math.abs(a[x+2]-d)>e*3)continue;a[x+3]=0;const y=p%n;y>0&&f.push(p-1),y<n-1&&f.push(p+1),f.push(p-n,p+n)}return s.putImageData(o,0,0),r}const dT=Se.forwardRef(function({container:e,vehicles:n,selectedId:i,onSelectVehicle:r,onUpdateVehicle:s},o){const a=Se.useRef(null);Se.useImperativeHandle(o,()=>({getCanvas:()=>a.current}),[]);const l=Se.useRef({}),[u,d]=Se.useState(null),[h,f]=Se.useState(1),[p,x]=Se.useState({x:0,y:0}),y=Se.useRef({zoom:1,pan:{x:0,y:0}}),m=Se.useRef(null),c=Se.useCallback((D,R)=>{y.current={zoom:D,pan:R},f(D),x(R)},[]),g=60;Se.useEffect(()=>{n.forEach(D=>{if(!D.sideImage)return;const R=`${D.id}_${D.removeBg?1:0}`;if(l.current[R])return;const z=new Image;z.src=D.sideImage,z.onload=()=>{l.current[R]=D.removeBg?fT(z):z,v()}})},[n]);const _=Se.useCallback(()=>{const D=a.current;if(!D)return{scale:1,ox:g,oy:g,cW:0,cH:0,baseScale:1};const R=D.getBoundingClientRect(),z=Math.min((R.width-g*2)/e.innerLength,(R.height-g*2)/e.innerHeight),q=z*h,V=e.innerLength*q,j=e.innerHeight*q,Y=(R.height-e.innerHeight*z)/2,U=g+p.x,G=Y+p.y;return{scale:q,ox:U,oy:G,cW:V,cH:j,baseScale:z}},[e,h,p]),v=Se.useCallback(()=>{const D=a.current;if(!D)return;const R=D.getContext("2d"),z=D.getBoundingClientRect(),q=Math.min(window.devicePixelRatio||1,2);D.width=z.width*q,D.height=z.height*q,R.scale(q,q);const V=z.width,j=z.height,{scale:Y,ox:U,oy:G,cW:Q,cH:te}=_();R.fillStyle="#18253a",R.fillRect(0,0,V,j),R.fillStyle="#ffffff",R.fillRect(U,G,Q,te);const ce=(()=>{const ae=45/Y;return ae<=100?100:ae<=200?200:ae<=500?500:ae<=1e3?1e3:2e3})();for(let ae=ce;ae<e.innerLength;ae+=ce){const N=U+ae*Y;N<U||N>U+Q||(R.strokeStyle=ae%1e3===0?"#00000060":"#00000035",R.lineWidth=ae%1e3===0?1:.5,R.beginPath(),R.moveTo(N,G),R.lineTo(N,G+te),R.stroke())}for(let ae=ce;ae<e.innerHeight;ae+=ce){const N=G+te-ae*Y;N<G||N>G+te||(R.strokeStyle=ae%1e3===0?"#00000060":"#00000035",R.lineWidth=ae%1e3===0?1:.5,R.beginPath(),R.moveTo(U,N),R.lineTo(U+Q,N),R.stroke())}R.strokeStyle="#00ffaa",R.lineWidth=2,R.strokeRect(U,G,Q,te),R.fillStyle="#d0e8d088",R.fillRect(U,G+te-5,Q,5);const Fe=G+te-e.doorHeight*Y;R.strokeStyle="#dd7700cc",R.lineWidth=1.5,R.setLineDash([8,4]),R.beginPath(),R.moveTo(U,Fe),R.lineTo(U+Q,Fe),R.stroke(),R.setLineDash([]),R.fillStyle="#dd7700ee",R.font="bold 9px monospace",R.textAlign="right",R.fillText(`⚠ DOOR MAX ${e.doorHeight}mm`,U+Q-4,Fe-4);const K=22,ie=36,me=Math.max(0,Math.floor(Math.max(0,-U)/Y/100)*100),pe=Math.min(e.innerLength,Math.ceil((V-U)/Y/100)*100+100),De=Math.max(0,Math.floor(Math.max(0,G+te-j)/Y/100)*100),Ie=Math.min(e.innerHeight,Math.ceil((G+te)/Y/100)*100+100),ze=ae=>ae>=1e3&&ce>=1e3?`${ae/1e3}m`:`${ae}`;[{base:G+te+2,dir:1},{base:G-2,dir:-1}].forEach(({base:ae,dir:N})=>{R.fillStyle="#141e30ee",R.fillRect(U,N===1?ae:ae-K,Q,K);for(let Xe=me;Xe<=pe;Xe+=100){const fe=U+Xe*Y;if(fe<U-1||fe>U+Q+1)continue;const le=Xe%ce===0,oe=Xe%500===0&&!le,Ue=(le?13:oe?8:4)*N;R.strokeStyle=le?"#00ffaadd":oe?"#00ffaa55":"#00000022",R.lineWidth=le?1.2:.5,R.beginPath(),R.moveTo(fe,ae),R.lineTo(fe,ae+Ue),R.stroke(),le&&(R.fillStyle="#00ffaaee",R.font="bold 8px monospace",R.textAlign="center",R.fillText(ze(Xe),fe,N===1?ae+K:ae-4))}}),[{base:U-2,dir:-1},{base:U+Q+2,dir:1}].forEach(({base:ae,dir:N})=>{R.fillStyle="#141e30ee",R.fillRect(N===-1?ae-ie:ae,G,ie,te);for(let Xe=De;Xe<=Ie;Xe+=100){const fe=G+te-Xe*Y;if(fe<G-1||fe>G+te+1)continue;const le=Xe%ce===0,oe=Xe%500===0&&!le,Ue=(le?13:oe?8:4)*N;R.strokeStyle=le?"#00ffaadd":oe?"#00ffaa55":"#00000022",R.lineWidth=le?1.2:.5,R.beginPath(),R.moveTo(ae,fe),R.lineTo(ae+Ue,fe),R.stroke(),le&&(R.fillStyle="#00ffaaee",R.font="bold 8px monospace",R.textAlign=N===-1?"right":"left",R.fillText(`${Xe}`,N===-1?ae-4:ae+4,fe+3))}}),R.fillStyle="#00ffaacc",R.font="bold 10px monospace",R.textAlign="center",R.fillText(`${e.innerLength} mm`,U+Q/2,G-K-4),R.save(),R.translate(U-ie-14,G+te/2),R.rotate(-Math.PI/2),R.fillText(`${e.innerHeight} mm`,0,0),R.restore(),n.forEach(ae=>{const N=ae.sideX??200,Xe=ae.sideY??0,fe=(ae.sideAngle??0)*Math.PI/180,le=ae.length*Y,oe=ae.height*Y,Ue=U+N*Y+le/2,Ce=G+te-Xe*Y-oe/2,ve=ae.id===i;R.save(),R.translate(Ue,Ce),R.rotate(fe);const L=`${ae.id}_${ae.removeBg?1:0}`,M=l.current[L];if(M&&M.complete!==!1){const X=(ae.imgRealLength??ae.length)*Y,ee=(ae.imgRealHeight??ae.height)*Y;ae.flipX&&R.scale(-1,1),R.drawImage(M,-X/2,-ee/2,X,ee),ae.flipX&&R.scale(-1,1)}else{R.fillStyle=ae.color+"22",R.strokeStyle=ae.color+"cc",R.lineWidth=1.5,R.fillRect(-le/2,-oe/2,le,oe),R.strokeRect(-le/2,-oe/2,le,oe);const X=le*(ae.cabRatio??.5);R.strokeStyle=ae.color+"77",R.lineWidth=1,R.beginPath(),R.moveTo(-le/2+X,-oe/2),R.lineTo(-le/2+X,oe/2),R.stroke(),R.fillStyle="#ffffffaa",R.font=`bold ${Math.max(8,le*.04)}px sans-serif`,R.textAlign="center",R.textBaseline="middle",R.fillText(ae.preset,0,0)}ve&&(R.strokeStyle="#ffffff",R.lineWidth=2,R.setLineDash([4,3]),R.strokeRect(-le/2-3,-oe/2-3,le+6,oe+6),R.setLineDash([]),R.strokeStyle="#00ffaa",R.lineWidth=1.5,R.beginPath(),R.moveTo(0,-oe/2-2),R.lineTo(0,-oe/2-14),R.stroke(),R.fillStyle="#00ffaadd",R.strokeStyle="#00ffaa",R.lineWidth=1,R.beginPath(),R.arc(0,-oe/2-21,7,0,Math.PI*2),R.fill(),R.stroke(),R.fillStyle="#ffffff88",R.font="8px monospace",R.textAlign="left",R.textBaseline="top",R.fillText(`${Math.round((ae.sideAngle??0)*10)/10}°`,le/2+5,-oe/2)),R.restore()})},[e,n,i,_]);Se.useEffect(()=>{v()},[v]),Se.useEffect(()=>(window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[v]),Se.useEffect(()=>{const D=a.current;if(!D)return;const R=z=>{z.preventDefault();const q=D.getBoundingClientRect(),V=z.clientX-q.left,j=z.clientY-q.top,{zoom:Y,pan:U}=y.current,G=Math.min((q.width-g*2)/e.innerLength,(q.height-g*2)/e.innerHeight),Q=G*Y,te=(q.height-e.innerHeight*G)/2,ce=g+U.x,Fe=te+U.y,K=z.deltaY<0?1.15:1/1.15,ie=Math.max(.5,Math.min(20,Y*K)),me=G*ie,pe=V-(V-ce)*me/Q,De=j-(j-Fe)*me/Q;c(ie,{x:pe-g,y:De-te})};return D.addEventListener("wheel",R,{passive:!1}),()=>D.removeEventListener("wheel",R)},[e,c]);const F=D=>{const R=a.current.getBoundingClientRect();return{mx:D.clientX-R.left,my:D.clientY-R.top}},b=D=>{const{scale:R,ox:z,oy:q,cH:V}=_(),j=D.length*R,Y=D.height*R,U=z+(D.sideX??200)*R+j/2,G=q+V-(D.sideY??0)*R-Y/2;return{cx:U,cy:G,vW:j,vH:Y}},w=D=>{if(D.button===1){D.preventDefault();const{mx:q,my:V}=F(D);m.current={mx:q,my:V,panX:y.current.pan.x,panY:y.current.pan.y},d({id:null,type:"pan"});return}const{mx:R,my:z}=F(D);for(let q=n.length-1;q>=0;q--){const V=n[q],{cx:j,cy:Y,vW:U,vH:G}=b(V),Q=(V.sideAngle??0)*Math.PI/180;if(V.id===i){const Fe=-G/2-21,K=j-Fe*Math.sin(Q),ie=Y+Fe*Math.cos(Q);if(Math.hypot(R-K,z-ie)<12){r(V.id),d({id:V.id,type:"rotate",cx:j,cy:Y});return}}const te=(R-j)*Math.cos(-Q)-(z-Y)*Math.sin(-Q),ce=(R-j)*Math.sin(-Q)+(z-Y)*Math.cos(-Q);if(Math.abs(te)<=U/2+5&&Math.abs(ce)<=G/2+5){r(V.id),d({id:V.id,type:"move",offX:R-j,offY:z-Y});return}}r(null),m.current={mx:R,my:z,panX:y.current.pan.x,panY:y.current.pan.y},d({id:null,type:"pan"})},I=D=>{if((u==null?void 0:u.type)==="pan"&&m.current){const{mx:G,my:Q}=F(D);c(y.current.zoom,{x:m.current.panX+G-m.current.mx,y:m.current.panY+Q-m.current.my});return}if(!u)return;const{mx:R,my:z}=F(D),{scale:q,ox:V,oy:j,cH:Y}=_(),U=n.find(G=>G.id===u.id);if(U){if(u.type==="move"){const G=U.length*q,Q=U.height*q,te=R-u.offX,ce=z-u.offY;s(U.id,{sideX:Math.round((te-V-G/2)/q),sideY:Math.max(0,Math.round((j+Y-ce-Q/2)/q))})}else if(u.type==="rotate"){const G=Math.atan2(R-u.cx,-(z-u.cy))*180/Math.PI;s(U.id,{sideAngle:Math.round(G*10)/10})}}},E=()=>d(null),S=(u==null?void 0:u.type)==="pan"||u?"grabbing":"crosshair";return O.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[O.jsx("canvas",{ref:a,style:{width:"100%",height:"100%",cursor:S,display:"block"},onMouseDown:w,onMouseMove:I,onMouseUp:E,onMouseLeave:E}),O.jsxs("div",{style:{position:"absolute",bottom:10,right:10,display:"flex",gap:4,alignItems:"center"},children:[O.jsx("button",{onClick:()=>c(Math.min(20,y.current.zoom*1.3),y.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"+"}),O.jsx("button",{onClick:()=>c(Math.max(.5,y.current.zoom/1.3),y.current.pan),style:{width:28,height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",cursor:"pointer",fontSize:16,lineHeight:1},children:"−"}),O.jsxs("button",{onClick:()=>c(1,{x:0,y:0}),style:{padding:"0 8px",height:28,borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#00ddaa",cursor:"pointer",fontSize:10,fontFamily:"monospace"},children:[h.toFixed(1),"× ↺"]})]})]})});function hT({container:t,boxes:e,selectedId:n,onSelectBox:i,onMoveBox:r,collisions:s}){const o=Se.useRef(null),[a,l]=Se.useState(null),[u,d]=Se.useState({x:0,y:0}),h=Se.useRef(1),f=50,p=Se.useCallback(()=>{const _=o.current;if(!_)return 1;const v=_.getBoundingClientRect();return Math.min((v.width-f*2)/t.innerLength,(v.height-f*2)/t.innerWidth)},[t]),x=Se.useCallback(()=>{const _=o.current;if(!_)return;const v=_.getContext("2d"),F=_.getBoundingClientRect(),b=Math.min(window.devicePixelRatio||1,2);_.width=F.width*b,_.height=F.height*b,v.scale(b,b);const w=F.width,I=F.height,E=p();h.current=E;const S=f,D=f,R=t.innerLength*E,z=t.innerWidth*E;v.fillStyle="#18253a",v.fillRect(0,0,w,I),v.strokeStyle="#ffffff10",v.lineWidth=.5;for(let V=1e3;V<t.innerLength;V+=1e3)v.beginPath(),v.moveTo(S+V*E,D),v.lineTo(S+V*E,D+z),v.stroke();for(let V=500;V<t.innerWidth;V+=500)v.beginPath(),v.moveTo(S,D+V*E),v.lineTo(S+R,D+V*E),v.stroke();v.strokeStyle="#00ffaa",v.lineWidth=2,v.strokeRect(S,D,R,z);const q=(t.innerWidth-t.doorWidth)/2;v.strokeStyle="#00ffaa88",v.lineWidth=3,v.setLineDash([8,4]),v.beginPath(),v.moveTo(S+R,D+q*E),v.lineTo(S+R,D+(q+t.doorWidth)*E),v.stroke(),v.setLineDash([]),v.fillStyle="#00ffaa",v.font="bold 11px monospace",v.textAlign="center",v.fillText(`${t.innerLength} mm`,S+R/2,D-16),v.save(),v.translate(S-20,D+z/2),v.rotate(-Math.PI/2),v.fillText(`${t.innerWidth} mm`,0,0),v.restore(),v.fillStyle="#00ffaa66",v.font="10px sans-serif",v.textAlign="left",v.fillText("DOOR →",S+R+8,D+z/2+4),e.forEach(V=>{const j=S+V.x*E,Y=D+V.y*E,U=V.length*E,G=V.width*E,Q=V.id===n,te=s.has(V.id);v.fillStyle="rgba(0,0,0,0.2)",v.fillRect(j+2,Y+2,U,G),v.fillStyle=V.color+(te?"cc":"99"),v.fillRect(j,Y,U,G),v.strokeStyle=te?"#ff4444":Q?"#ffffff":V.color,v.lineWidth=Q?2:1.5,v.strokeRect(j,Y,U,G),v.strokeStyle=V.color+"44",v.lineWidth=.5,v.beginPath(),v.moveTo(j,Y),v.lineTo(j+U,Y+G),v.moveTo(j+U,Y),v.lineTo(j,Y+G),v.stroke();const ce=Math.max(8,Math.min(U,G)*.16);v.fillStyle="#ffffffcc",v.font=`${Q?"bold ":""}${ce}px sans-serif`,v.textAlign="center",v.textBaseline="middle",v.fillText(V.name||V.preset,j+U/2,Y+G/2-ce*.5),v.font=`${Math.max(7,ce*.8)}px monospace`,v.fillStyle="#ffffff88",v.fillText(`${V.length}×${V.width}×${V.height}`,j+U/2,Y+G/2+ce*.5),Q&&(v.strokeStyle="#ffffff",v.lineWidth=2,v.setLineDash([4,3]),v.strokeRect(j-3,Y-3,U+6,G+6),v.setLineDash([]))})},[t,e,n,s,p]);Se.useEffect(()=>{x()},[x]),Se.useEffect(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]);const y=_=>{const v=o.current.getBoundingClientRect();return{cx:_.clientX-v.left,cy:_.clientY-v.top}},m=_=>{const{cx:v,cy:F}=y(_),b=h.current;for(let w=e.length-1;w>=0;w--){const I=e[w],E=f+I.x*b,S=f+I.y*b,D=I.length*b,R=I.width*b;if(v>=E&&v<=E+D&&F>=S&&F<=S+R){i(I.id),l(I.id),d({x:v-E,y:F-S});return}}i(null)},c=_=>{if(!a)return;const{cx:v,cy:F}=y(_),b=h.current,w=e.find(S=>S.id===a);if(!w)return;const I=Math.max(0,Math.min(t.innerLength-w.length,Math.round((v-f-u.x)/b))),E=Math.max(0,Math.min(t.innerWidth-w.width,Math.round((F-f-u.y)/b)));r(a,I,E)},g=()=>l(null);return O.jsx("canvas",{ref:o,style:{width:"100%",height:"100%",cursor:a?"grabbing":"crosshair",display:"block"},onMouseDown:m,onMouseMove:c,onMouseUp:g,onMouseLeave:g})}function pT(t,e){const n=document.createElement("canvas");n.width=400,n.height=72;const i=n.getContext("2d");return i.fillStyle="rgba(0,0,0,0.72)",i.fillRect(0,0,400,72),i.strokeStyle=e||"#ffffff",i.lineWidth=4,i.strokeRect(2,2,396,68),i.fillStyle="#ffffff",i.font="bold 26px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(t,200,36),new v_(n)}function mT({container:t,boxes:e,selectedId:n,onMoveBox:i,onSelectBox:r,onPlaceBox:s}){const o=Se.useRef(null),a=Se.useRef(null),l=Se.useRef(null),u=Se.useRef(null),d=Se.useRef({}),h=Se.useRef(null),f=Se.useRef({});return Se.useEffect(()=>{f.current={boxes:e,container:t,onMoveBox:i,onSelectBox:r,onPlaceBox:s,selectedId:n}}),Se.useEffect(()=>{const p=o.current;if(!p)return;const x=p.clientWidth,y=p.clientHeight,m=new tT;m.background=new Ge(14477557),m.fog=new sh(14477557,4e-5);const c=new wn(50,x/y,10,1e5),g=new eT({antialias:!0});g.setSize(x,y),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.shadowMap.enabled=!0,g.shadowMap.type=H0,p.appendChild(g.domElement),a.current=m,l.current=c,u.current=g,m.add(new aT(16777215,1.2));const _=new oT(16777215,1.8);_.position.set(15e3,2e4,1e4),_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.camera.near=100,_.shadow.camera.far=5e4,_.shadow.camera.left=-15e3,_.shadow.camera.right=15e3,_.shadow.camera.top=15e3,_.shadow.camera.bottom=-15e3,m.add(_);const v=new tn(new zi(6e4,6e4),new vc({color:13162728}));v.rotation.x=-Math.PI/2,v.position.y=-5,v.receiveShadow=!0,m.add(v),m.add(new uT(4e4,40,8952251,11189196));const F=new lT,b=new We,w=new Ii(new W(0,1,0),0),I=new W;let E=!1,S=0,D=0,R=.7,z=.55,q=2e4,V=!1,j=null,Y=0,U=0,G=0,Q=0,te=!1,ce=null,Fe=0;const K=new W(6e3,1200,0),ie=()=>{c.position.set(K.x+q*Math.sin(z)*Math.cos(R),K.y+q*Math.cos(z),K.z+q*Math.sin(z)*Math.sin(R)),c.lookAt(K)};ie();const me=()=>{const fe=[];return m.traverse(le=>{le.userData.isBoxMesh&&fe.push(le)}),fe},pe=fe=>{var le,oe;if(S=fe.clientX,D=fe.clientY,fe.altKey){fe.preventDefault();const Ue=f.current.selectedId,Ce=f.current.boxes.find(ve=>ve.id===Ue);Ce&&(ce=Ue,Fe=Ce.z,te=!0,g.domElement.style.cursor="ns-resize");return}if(!fe.ctrlKey&&!fe.shiftKey){const Ue=g.domElement.getBoundingClientRect();b.x=(fe.clientX-Ue.left)/Ue.width*2-1,b.y=-((fe.clientY-Ue.top)/Ue.height)*2+1,F.setFromCamera(b,c);const Ce=F.intersectObjects(me());if(Ce.length>0){const ve=Ce[0].object.userData.boxId;(oe=(le=f.current).onSelectBox)==null||oe.call(le,ve),F.ray.intersectPlane(w,I);const L=f.current.boxes.find(X=>X.id===ve),M=f.current.container;L&&(Y=I.x-(L.x+L.length/2),U=I.z-(L.y-M.innerWidth/2+L.width/2),G=L.x,Q=L.y,j=ve,V=!0,g.domElement.style.cursor="grabbing");return}}E=!0,g.domElement.style.cursor="grabbing"},De=fe=>{const le=fe.clientX-S,oe=fe.clientY-D;if(S=fe.clientX,D=fe.clientY,te&&ce){const{boxes:Ue,container:Ce}=f.current,ve=Ue.find(X=>X.id===ce);if(!ve)return;const L=Ce.innerHeight/p.clientHeight*2;Fe=Math.max(0,Math.min(Ce.innerHeight-ve.height,Fe-oe*L));const M=d.current[ce];if(M){const X=ve.x+ve.length/2,ee=ve.y-Ce.innerWidth/2+ve.width/2;M.mesh.position.set(X,Fe+ve.height/2,ee),M.edges.position.set(X,Fe+ve.height/2,ee),M.label&&M.label.position.set(X,Fe+ve.height+280,ee)}return}if(V&&j){const Ue=g.domElement.getBoundingClientRect();if(b.x=(fe.clientX-Ue.left)/Ue.width*2-1,b.y=-((fe.clientY-Ue.top)/Ue.height)*2+1,F.setFromCamera(b,c),!F.ray.intersectPlane(w,I))return;const{boxes:Ce,container:ve}=f.current,L=Ce.find(ge=>ge.id===j);if(!L)return;const M=I.x-Y,X=I.z-U;G=Math.max(0,Math.min(ve.innerLength-L.length,M-L.length/2)),Q=Math.max(0,Math.min(ve.innerWidth-L.width,X+ve.innerWidth/2-L.width/2));const ee=G+L.length/2,re=L.z+L.height/2,ne=Q-ve.innerWidth/2+L.width/2,Te=d.current[j];Te&&(Te.mesh.position.set(ee,re,ne),Te.edges.position.set(ee,re,ne),Te.label&&Te.label.position.set(ee,L.z+L.height+280,ne));return}if(E){if(fe.shiftKey){const Ue=q/p.clientHeight;K.y-=oe*Ue}else if(fe.ctrlKey){const Ue=q/p.clientHeight;K.x-=Math.sin(R)*le*Ue,K.z+=Math.cos(R)*le*Ue,K.x-=Math.cos(R)*oe*Ue,K.z-=Math.sin(R)*oe*Ue}else R+=le*.005,z=Math.max(.1,Math.min(Math.PI/2-.05,z-oe*.005));ie()}},Ie=()=>{var fe,le,oe,Ue;te&&ce&&((le=(fe=f.current).onPlaceBox)==null||le.call(fe,ce,null,null,Fe)),V&&j&&((Ue=(oe=f.current).onMoveBox)==null||Ue.call(oe,j,G,Q)),te=!1,ce=null,V=!1,j=null,E=!1,g.domElement.style.cursor="grab"},ze=fe=>{if(fe.preventDefault(),fe.ctrlKey){const le=q/p.clientHeight;K.y-=fe.deltaY*le*.5}else q=Math.max(4e3,Math.min(45e3,q+fe.deltaY*12));ie()},ae=fe=>{if(fe.target.tagName==="INPUT"||fe.target.tagName==="TEXTAREA")return;const le=q*.05;fe.key==="ArrowLeft"&&(K.x-=Math.sin(R)*le,K.z+=Math.cos(R)*le),fe.key==="ArrowRight"&&(K.x+=Math.sin(R)*le,K.z-=Math.cos(R)*le),fe.key==="ArrowUp"&&(K.y+=le*.4),fe.key==="ArrowDown"&&(K.y-=le*.4),ie()};g.domElement.addEventListener("mousedown",pe),g.domElement.addEventListener("mousemove",De),g.domElement.addEventListener("mouseup",Ie),g.domElement.addEventListener("mouseleave",Ie),g.domElement.addEventListener("wheel",ze,{passive:!1}),g.domElement.style.cursor="grab",window.addEventListener("keydown",ae);const N=()=>{h.current=requestAnimationFrame(N),g.render(m,c)};N();const Xe=()=>{const fe=p.clientWidth,le=p.clientHeight;c.aspect=fe/le,c.updateProjectionMatrix(),g.setSize(fe,le)};return window.addEventListener("resize",Xe),()=>{cancelAnimationFrame(h.current),window.removeEventListener("resize",Xe),window.removeEventListener("keydown",ae),g.domElement.removeEventListener("mousedown",pe),g.domElement.removeEventListener("mousemove",De),g.domElement.removeEventListener("mouseup",Ie),g.domElement.removeEventListener("mouseleave",Ie),g.domElement.removeEventListener("wheel",ze),p.contains(g.domElement)&&p.removeChild(g.domElement),g.dispose()}},[]),Se.useEffect(()=>{const p=a.current;if(!p)return;const x=[];p.traverse(w=>{w.userData.dynamic&&x.push(w)}),x.forEach(w=>p.remove(w)),d.current={};const y=new Kf(new xm(new Lr(t.innerLength,t.innerHeight,t.innerWidth)),new xs({color:65450}));y.position.set(t.innerLength/2,t.innerHeight/2,0),y.userData.dynamic=!0,p.add(y);const m=new tn(new zi(t.innerLength,t.innerWidth),new vc({color:1718826,transparent:!0,opacity:.4,side:Bn}));m.rotation.x=-Math.PI/2,m.position.set(t.innerLength/2,2,0),m.receiveShadow=!0,m.userData.dynamic=!0,p.add(m);const c=new vc({color:8956620,transparent:!0,opacity:.1,side:Bn});[-1,1].forEach(w=>{const I=new tn(new zi(t.innerLength,t.innerHeight),c);I.position.set(t.innerLength/2,t.innerHeight/2,w*t.innerWidth/2),I.userData.dynamic=!0,p.add(I)});const g=new tn(new zi(t.innerWidth,t.innerHeight),c);g.rotation.y=Math.PI/2,g.position.set(0,t.innerHeight/2,0),g.userData.dynamic=!0,p.add(g);const _=w=>{const I=document.createElement("canvas");I.width=256,I.height=64;const E=I.getContext("2d");return E.fillStyle="rgba(0,20,40,0.82)",E.fillRect(0,0,256,64),E.fillStyle="#00ffaa",E.font="bold 28px monospace",E.textAlign="center",E.textBaseline="middle",E.fillText(w,128,32),new v_(I)},v=1e3;for(let w=0;w<=t.innerLength;w+=v){const I=new mc(new fl({map:_(`${w}`),depthTest:!1}));I.scale.set(700,175,1),I.position.set(w,-250,t.innerWidth/2+200),I.userData.dynamic=!0,p.add(I);const E=[new W(w,-10,t.innerWidth/2),new W(w,-300,t.innerWidth/2)],S=new qf(new gn().setFromPoints(E),new xs({color:65450}));S.userData.dynamic=!0,p.add(S)}const F=500;for(let w=0;w<=t.innerHeight;w+=F){const I=new mc(new fl({map:_(`${w}`),depthTest:!1}));I.scale.set(600,150,1),I.position.set(-450,w,t.innerWidth/2),I.userData.dynamic=!0,p.add(I);const E=[new W(-10,w,t.innerWidth/2),new W(-300,w,t.innerWidth/2)],S=new qf(new gn().setFromPoints(E),new xs({color:65450}));S.userData.dynamic=!0,p.add(S)}const b=new Set;for(let w=0;w<e.length;w++)for(let I=w+1;I<e.length;I++){const E=e[w],S=e[I];E.x<S.x+S.length&&E.x+E.length>S.x&&E.y<S.y+S.width&&E.y+E.width>S.y&&E.z<S.z+S.height&&E.z+E.height>S.z&&(b.add(E.id),b.add(S.id))}e.forEach(w=>{const E=b.has(w.id)?new Ge(8947848):new Ge(w.color),S=w.id===n,D=new Lr(w.length,w.height,w.width),R=new tn(D,new iT({color:E,specular:2236962,shininess:40,transparent:!0,opacity:S?1:.88}));R.position.set(w.x+w.length/2,w.z+w.height/2,w.y-t.innerWidth/2+w.width/2),R.castShadow=!0,R.userData.dynamic=!0,R.userData.isBoxMesh=!0,R.userData.boxId=w.id,p.add(R);const z=new Kf(new xm(D),new xs({color:S?16777215:0,transparent:!0,opacity:S?.9:.25}));z.position.copy(R.position),z.userData.dynamic=!0,p.add(z);const q=pT(`${w.length}×${w.width}×${w.height} mm`,w.color),V=new mc(new fl({map:q,depthTest:!1})),j=Math.max(w.length,1400);V.scale.set(j,j*.18,1),V.position.set(w.x+w.length/2,w.z+w.height+280,w.y-t.innerWidth/2+w.width/2),V.userData.dynamic=!0,p.add(V),d.current[w.id]={mesh:R,edges:z,label:V}})},[t,e,n]),O.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[O.jsx("div",{ref:o,style:{width:"100%",height:"100%"}}),O.jsx("div",{style:{position:"absolute",bottom:10,left:10,fontSize:10,color:"#6677aa",pointerEvents:"none",background:"rgba(0,0,0,0.4)",padding:"4px 9px",borderRadius:4,lineHeight:1.7},children:"🖱 Drag = หมุน  |  Ctrl+Drag = เลื่อน  |  Shift+Drag = บนล่าง  |  Scroll = ซูม  |  ↑↓←→ = เลื่อน  |  ลากกล่อง = จัดพื้น  |  Alt+ลาก(เลือกกล่องก่อน) = ยกขึ้นลง  |  ⬜ = ชนกัน"})]})}function gT(){const[t,e]=Se.useState([]),[n,i]=Se.useState(null),[r,s]=Se.useState("car"),[o,a]=Se.useState(!1),[l,u]=Se.useState("hilux_dc"),[d,h]=Se.useState({length:5300,width:1850,height:1800,weight:2e3,label:""}),[f,p]=Se.useState({...cT}),[x,y]=Se.useState(!1),[m,c]=Se.useState([]),[g,_]=Se.useState([]),[v,F]=Se.useState([]),[b,w]=Se.useState(null),[I,E]=Se.useState(!1),[S,D]=Se.useState("eu_pallet"),[R,z]=Se.useState({length:1e3,width:800,height:800,weight:50,label:""}),[q,V]=Se.useState(-1500),[j,Y]=Se.useState(0),[U,G]=Se.useState(0),[Q,te]=Se.useState("My Project"),ce=Se.useRef([]);ce.current=t;const Fe=Se.useRef(null),K=Se.useRef(null),ie=()=>{const A={projectName:Q,container:f,vehicles:t,boxes:v},C=new Blob([JSON.stringify(A,null,2)],{type:"application/json"}),k=document.createElement("a");k.href=URL.createObjectURL(C),k.download=`${Q.replace(/\s+/g,"_")||"project"}.clp.json`,k.click(),URL.revokeObjectURL(k.href)},me=A=>{const C=new FileReader;C.onload=k=>{try{const $=JSON.parse(k.target.result);$.container&&p($.container),$.vehicles&&(e($.vehicles),i(null)),$.boxes&&(F($.boxes),w(null)),$.projectName&&te($.projectName)}catch{alert("ไฟล์ไม่ถูกต้อง")}},C.readAsText(A)},pe=()=>{var k;const A=(k=Fe.current)==null?void 0:k.getCanvas();if(!A){alert("สลับไปหน้า Car Load ก่อน");return}const C=document.createElement("a");C.href=A.toDataURL("image/png"),C.download=`${Q.replace(/\s+/g,"_")||"layout"}.png`,C.click()},De=()=>{var $;const A=($=Fe.current)==null?void 0:$.getCanvas();if(!A){alert("สลับไปหน้า Car Load ก่อน");return}const C=A.toDataURL("image/png"),k=window.open("","_blank");k.document.write(`<!DOCTYPE html><html><head><title>${Q}</title><style>*{margin:0;padding:0}body{background:#fff}img{max-width:100%;display:block}h3{font-family:sans-serif;padding:8px 12px;font-size:13px}@media print{h3{margin:0}}</style></head><body><h3>${Q} — ${f.name} | ${new Date().toLocaleDateString("th-TH")}</h3><img src="${C}"/></body></html>`),k.document.close(),k.addEventListener("load",()=>k.print())},Ie=t.reduce((A,C)=>A+C.weight,0),ze=Ie>f.maxPayload,ae=Se.useMemo(()=>{if(!t.length)return{lenUsed:0,lenLeft:f.innerLength};let A=0;return t.forEach(C=>{const k=C.x+(C.rotated?C.width:C.length);k>A&&(A=k)}),{lenUsed:A,lenLeft:f.innerLength-A}},[t,f]),N=Se.useMemo(()=>{const A=new Set;for(let C=0;C<t.length;C++)for(let k=C+1;k<t.length;k++){const $=t[C],de=t[k],je=$.rotated?$.width:$.length,Ze=$.rotated?$.length:$.width,at=de.rotated?de.width:de.length,Ae=de.rotated?de.length:de.width;$.x<de.x+at&&$.x+je>de.x&&$.y<de.y+Ae&&$.y+Ze>de.y&&(A.add($.id),A.add(de.id))}return t.forEach(C=>{const k=C.rotated?C.width:C.length,$=C.rotated?C.length:C.width;(C.x<0||C.y<0||C.x+k>f.innerLength||C.y+$>f.innerWidth)&&A.add(C.id)}),A},[t,f]),Xe=()=>{const A=Tm.find($=>$.id===l),C=l==="custom",k={id:yc(),preset:C?d.label||"Custom":A.name,length:C?d.length:A.length,width:C?d.width:A.width,height:C?d.height:A.height,weight:C?d.weight:A.weight,cabRatio:C?.5:A.cabRatio,x:200,y:Math.round((f.innerWidth-(C?d.width:A.width))/2),rotated:!1,rearLifted:!1,color:ss[t.length%ss.length],sideX:200,sideY:0,sideAngle:0,sideImage:null,removeBg:!0,flipX:!1,imgRealLength:C?d.length:A.length,imgRealHeight:C?d.height:A.height};le(),e($=>[...$,k]),i(k.id),a(!1)},fe=(A,C)=>{const k=new FileReader;k.onload=$=>Pe(A,{sideImage:$.target.result}),k.readAsDataURL(C)},le=Se.useCallback(()=>{c(A=>[...A.slice(-49),ce.current]),_([])},[]),oe=Se.useCallback(()=>{c(A=>{if(!A.length)return A;const C=A[A.length-1];return _(k=>[ce.current,...k.slice(0,49)]),e(C),A.slice(0,-1)})},[]),Ue=Se.useCallback(()=>{_(A=>{if(!A.length)return A;const C=A[0];return c(k=>[...k.slice(-49),ce.current]),e(C),A.slice(1)})},[]);Se.useEffect(()=>{const A=C=>{C.target.tagName==="INPUT"||C.target.tagName==="TEXTAREA"||(C.ctrlKey&&!C.shiftKey&&C.key==="z"&&(C.preventDefault(),oe()),C.ctrlKey&&(C.key==="y"||C.shiftKey&&C.key==="z")&&(C.preventDefault(),Ue()))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[oe,Ue]);const Ce=Se.useMemo(()=>{const A=new Set;for(let C=0;C<v.length;C++)for(let k=C+1;k<v.length;k++){const $=v[C],de=v[k];$.x<de.x+de.length&&$.x+$.length>de.x&&$.y<de.y+de.width&&$.y+$.width>de.y&&(A.add($.id),A.add(de.id))}return v.forEach(C=>{(C.x<0||C.y<0||C.x+C.length>f.innerLength||C.y+C.width>f.innerWidth)&&A.add(C.id)}),A},[v,f]),ve=v.reduce((A,C)=>A+C.weight,0),L=f.innerLength*f.innerWidth*f.innerHeight,M=v.reduce((A,C)=>A+C.length*C.width*C.height,0),X=Math.round(M/L*100),ee=v.filter(A=>A.x>=0&&A.x+A.length<=f.innerLength&&A.y>=0&&A.y+A.width<=f.innerWidth).length,re=()=>{const A=Am.find(de=>de.id===S),C=S==="box_custom",k=C?R.width:A.width;le();const $={id:yc(),preset:C?R.label||"Custom":A.name,name:C?R.label||"Custom":A.name,length:C?R.length:A.length,width:k,height:C?R.height:A.height,weight:C?R.weight:A.weight,x:q,y:Math.max(0,Math.min(f.innerWidth-k,j)),z:Math.max(0,U),color:ss[v.length%ss.length]};F(de=>[...de,$]),w($.id),E(!1)},ne=Se.useRef(null),Te=(A,C)=>F(k=>k.map($=>$.id===A?{...$,...C}:$)),ge=(A,C,k)=>Te(A,{x:Math.max(0,C),y:Math.max(0,k)}),Me=(A,C)=>{const k=[...A].sort((Ae,gt)=>gt.length*gt.width-Ae.length*Ae.width),$=[];let de=0,je=0,Ze=0;const at=[];for(const Ae of k)de+Ae.length>C.innerLength&&(de=0,je+=Ze,Ze=0),je+Ae.width<=C.innerWidth?($.push({...Ae,x:de,y:je,z:0}),de+=Ae.length,Ze=Math.max(Ze,Ae.width)):at.push(Ae);for(const Ae of at){let gt=null;for(const bt of $){const $n=bt.x,Wt=bt.y,xn=bt.z+bt.height;if($n+Ae.length>C.innerLength||Wt+Ae.width>C.innerWidth||xn+Ae.height>C.innerHeight)continue;!$.some(Xt=>{const Mi=Math.min($n+Ae.length,Xt.x+Xt.length)-Math.max($n,Xt.x),Ur=Math.min(Wt+Ae.width,Xt.y+Xt.width)-Math.max(Wt,Xt.y),Nr=Math.min(xn+Ae.height,Xt.z+Xt.height)-Math.max(xn,Xt.z);return Mi>1&&Ur>1&&Nr>1})&&(!gt||xn<gt.tz)&&(gt={tx:$n,ty:Wt,tz:xn})}$.push(gt?{...Ae,x:gt.tx,y:gt.ty,z:gt.tz}:{...Ae})}return $},He=()=>{le(),F(A=>Me(A,f))},ue=A=>{const C=new FileReader;C.onload=k=>{var at;const de=k.target.result.split(/\r?\n/).filter(Ae=>Ae.trim()).map(Ae=>Ae.split(/[,;\t]/)),je=isNaN(Number((at=de[0])==null?void 0:at[1]))?1:0,Ze=[];if(de.slice(je).forEach((Ae,gt)=>{var Xt;const bt=((Xt=Ae[0])==null?void 0:Xt.trim())||`Item ${gt+1}`,$n=Math.round(Number(Ae[1])||500),Wt=Math.round(Number(Ae[2])||400),xn=Math.round(Number(Ae[3])||400),Ys=Math.round(Number(Ae[4])||0);$n>0&&Wt>0&&xn>0&&Ze.push({id:yc(),preset:bt,name:bt,length:$n,width:Wt,height:xn,weight:Ys,x:q,y:j,z:U+Ze.reduce((Mi,Ur)=>Mi+Ur.height,0),color:ss[(v.length+Ze.length)%ss.length]})}),!Ze.length){alert("ไม่พบข้อมูล — format: ชื่อ,ยาว,กว้าง,สูง[,น้ำหนัก]");return}le(),F(Ae=>[...Ae,...Ze])},C.readAsText(A,"UTF-8")},ye=(A,C,k,$)=>{const de={};C!=null&&(de.x=Math.max(0,C)),k!=null&&(de.y=Math.max(0,k)),$!=null&&(de.z=Math.max(0,$)),Te(A,de)},Ke=A=>{le(),F(C=>C.filter(k=>k.id!==A)),b===A&&w(null)},Pe=(A,C)=>e(k=>k.map($=>$.id===A?{...$,...C}:$)),we=A=>{le(),e(C=>C.filter(k=>k.id!==A)),n===A&&i(null)},Be=()=>{le();const A=[...t].sort((k,$)=>$.length-k.length);let C=100;e(A.map(k=>{const $={...k,x:C,y:Math.round((f.innerWidth-(k.rotated?k.length:k.width))/2)};return C+=(k.rotated?k.width:k.length)+200,$}))},Ve=ae.lenUsed/f.innerLength*100,ot=Ie/f.maxPayload*100,P={app:{fontFamily:"'Segoe UI','Noto Sans Thai',sans-serif",background:"#1c2333",color:"#e8eaf5",height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden",fontSize:13},hdr:{background:"linear-gradient(135deg,#1e3a5f,#2d5a8e)",padding:"8px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #00ddaa55",flexShrink:0},body:{display:"flex",flex:1,overflow:"hidden"},side:{width:290,background:"#212a3e",borderRight:"1px solid #2e3a52",display:"flex",flexDirection:"column",overflow:"hidden",flexShrink:0},sec:{padding:"10px 12px",borderBottom:"1px solid #2e3a52"},lbl:{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#00ddaa",marginBottom:6},vp:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},tb:{display:"flex",gap:5,padding:"6px 10px",background:"#1c2840",borderBottom:"1px solid #2e3a52",alignItems:"center",flexShrink:0},va:{flex:1,position:"relative",overflow:"hidden"},btn:{padding:"5px 10px",borderRadius:5,border:"1px solid #3a4a66",background:"#263048",color:"#c8cedf",cursor:"pointer",fontSize:11,fontWeight:500},btnA:{background:"#00ddaa22",borderColor:"#00ddaa",color:"#00ddaa"},btnP:{background:"linear-gradient(135deg,#00ddaa,#00aa88)",border:"none",color:"#0a1a14",fontWeight:700},btnD:{background:"#ff44441a",borderColor:"#ff6666",color:"#ff8888"},inp:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},sel:{width:"100%",padding:"5px 7px",borderRadius:4,border:"1px solid #3a4a66",background:"#1e2a42",color:"#e8eaf5",fontSize:12,boxSizing:"border-box"},card:(A,C)=>({padding:"7px 9px",borderRadius:6,border:`1px solid ${C?"#ff6666":A?"#00ddaa":"#2e3a52"}`,background:A?"#00ddaa15":"#1e2a40",cursor:"pointer",marginBottom:5}),bar:{height:4,borderRadius:2,background:"#2e3a52",marginTop:3,overflow:"hidden"},fill:(A,C)=>({height:"100%",width:`${Math.min(100,A)}%`,background:A>95?"#ff5555":C,borderRadius:2,transition:"width .3s"}),badge:A=>({display:"inline-block",padding:"1px 5px",borderRadius:3,fontSize:9,fontWeight:600,background:A+"22",color:A,marginLeft:5}),status:{padding:"5px 12px",background:"#1a2235",borderTop:"1px solid #2e3a52",display:"flex",justifyContent:"space-between",fontSize:10,color:"#7a8aaa",flexShrink:0}};return O.jsxs("div",{style:P.app,children:[O.jsxs("div",{style:P.hdr,children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[O.jsx("div",{style:{width:32,height:32,background:"linear-gradient(135deg,#00ffaa,#00aa77)",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#0a0a18"},children:"📦"}),O.jsxs("div",{children:[O.jsx("div",{style:{fontSize:15,fontWeight:700,color:"#00ffaa"},children:"CONTAINER LOADING PLANNER"}),O.jsx("input",{value:Q,onChange:A=>te(A.target.value),style:{background:"transparent",border:"none",borderBottom:"1px solid #3a4a66",color:"#aab",fontSize:10,outline:"none",width:180,padding:"1px 2px"},placeholder:"ชื่อ Project..."})]})]}),O.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[O.jsx("button",{style:P.btn,onClick:ie,title:"Export โปรเจกต์เป็น JSON",children:"💾 Export"}),O.jsxs("label",{style:{...P.btn,cursor:"pointer"},title:"Import โปรเจกต์จาก JSON",children:["📂 Import",O.jsx("input",{ref:K,type:"file",accept:".json,.clp.json",style:{display:"none"},onChange:A=>{A.target.files[0]&&(me(A.target.files[0]),A.target.value="")}})]}),O.jsx("button",{style:P.btn,onClick:pe,title:"ดาวน์โหลด PNG (Car Load view)",children:"⬇ PNG"}),O.jsx("button",{style:P.btn,onClick:De,title:"Print / PDF (Car Load view)",children:"🖨 Print"}),O.jsx("button",{style:P.btn,onClick:Be,disabled:!t.length,children:"⚡ Auto"})]})]}),O.jsxs("div",{style:P.body,children:[O.jsxs("div",{style:P.side,children:[O.jsxs("div",{style:P.sec,children:[O.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:O.jsxs("div",{onClick:()=>y(!x),style:{...P.lbl,cursor:"pointer",marginBottom:0},children:["📦 Container ",x?"▲":"▼"]})}),O.jsx("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:O.jsx("span",{style:{color:"#888",fontSize:11},children:f.name})}),O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"2px 0"},children:[O.jsx("span",{style:{color:"#888",fontSize:10},children:"L×W×H"}),O.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:10},children:[f.innerLength,"×",f.innerWidth,"×",f.innerHeight]})]}),x&&O.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:5},children:[O.jsx("select",{style:P.sel,onChange:A=>{const C=wm.find(k=>k.name===A.target.value);C&&p({...C})},children:wm.map(A=>O.jsx("option",{value:A.name,children:A.name},A.name))}),O.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[["ยาว (mm)","innerLength"],["กว้าง (mm)","innerWidth"],["สูง (mm)","innerHeight"],["Door H (mm)","doorHeight"],["Door W (mm)","doorWidth"],["Max kg","maxPayload"]].map(([A,C])=>O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:A}),O.jsx("input",{style:P.inp,type:"number",value:f[C],onChange:k=>p($=>({...$,[C]:Number(k.target.value),name:"Custom"}))})]},C))})]})]}),O.jsxs("div",{style:P.sec,children:[O.jsx("div",{style:P.lbl,children:"📐 Clearance & Weight"}),O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0"},children:[O.jsx("span",{style:{color:"#888",fontSize:11},children:"ใช้ความยาว"}),O.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11},children:[Math.round(ae.lenUsed)," mm (",Math.round(Ve),"%)"]})]}),O.jsx("div",{style:P.bar,children:O.jsx("div",{style:P.fill(Ve,"#00ffaa")})}),O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:4},children:[O.jsx("span",{style:{color:"#888",fontSize:11},children:"เหลือ"}),O.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:ae.lenLeft<500?"#ff6666":"#00ffaa"},children:[Math.round(ae.lenLeft)," mm"]})]}),O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"3px 0",marginTop:6},children:[O.jsx("span",{style:{color:"#888",fontSize:11},children:"น้ำหนักรวม"}),O.jsxs("span",{style:{fontFamily:"monospace",fontWeight:600,fontSize:11,color:ze?"#ff4444":"#ddd"},children:[Ie.toLocaleString()," / ",f.maxPayload.toLocaleString()," kg"]})]}),O.jsx("div",{style:P.bar,children:O.jsx("div",{style:P.fill(ot,ze?"#ff4444":"#F59E0B")})}),ze&&O.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:3,fontWeight:600},children:["⚠️ เกิน ",(Ie-f.maxPayload).toLocaleString()," kg"]}),N.size>0&&O.jsxs("div",{style:{color:"#ff4444",fontSize:10,marginTop:4,fontWeight:600},children:["⚠️ ชนกัน/เกินขอบ ",N.size," คัน"]})]}),r==="car"?O.jsxs("div",{style:{...P.sec,flex:1,overflow:"auto"},children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[O.jsxs("div",{style:P.lbl,children:["🚗 รถในตู้ (",t.length,")"]}),O.jsx("button",{style:{...P.btn,...P.btnP,padding:"3px 8px"},onClick:()=>a(!o),children:"+ เพิ่มรถ"})]}),o&&O.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[O.jsx("select",{style:P.sel,value:l,onChange:A=>u(A.target.value),children:Tm.map(A=>O.jsxs("option",{value:A.id,children:[A.name," ",A.id!=="custom"?`(${A.length}×${A.width})`:""]},A.id))}),l==="custom"&&O.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["น้ำหนัก kg","weight","number"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"]].map(([A,C,k])=>O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:A}),O.jsx("input",{style:P.inp,type:k,value:d[C],onChange:$=>h({...d,[C]:k==="number"?Number($.target.value):$.target.value})})]},C))}),O.jsx("button",{style:{...P.btn,...P.btnP,width:"100%",marginTop:7},onClick:Xe,children:"✓ เพิ่มรถเข้าตู้"})]}),t.map(A=>O.jsxs("div",{style:P.card(A.id===n,N.has(A.id)),onClick:()=>i(A.id===n?null:A.id),children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[O.jsx("div",{style:{width:10,height:10,borderRadius:2,background:A.color}}),O.jsx("span",{style:{fontWeight:600,fontSize:11},children:A.preset})]}),O.jsx("button",{style:{...P.btn,...P.btnD,padding:"1px 5px",fontSize:10},onClick:C=>{C.stopPropagation(),we(A.id)},children:"✕"})]}),O.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[A.length,"×",A.width,"×",A.height," mm • ",A.weight," kg",A.rearLifted&&O.jsx("span",{style:P.badge("#F59E0B"),children:"ยกล้อหลัง"}),A.rotated&&O.jsx("span",{style:P.badge("#8B5CF6"),children:"หมุน 90°"})]}),A.id===n&&O.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:5},children:[O.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4},children:[O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:A.x,onChange:C=>Pe(A.id,{x:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:A.y,onChange:C=>Pe(A.id,{y:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]}),O.jsxs("div",{style:{display:"flex",gap:4},children:[O.jsx("button",{style:{...P.btn,flex:1,...A.rearLifted?P.btnA:{},fontSize:10,padding:3},onClick:C=>{C.stopPropagation(),Pe(A.id,{rearLifted:!A.rearLifted})},children:"⬆ ยกล้อหลัง"}),O.jsx("button",{style:{...P.btn,flex:1,...A.rotated?P.btnA:{},fontSize:10,padding:3},onClick:C=>{C.stopPropagation(),Pe(A.id,{rotated:!A.rotated})},children:"🔄 หมุน 90°"})]}),O.jsx("button",{style:{...P.btn,fontSize:10,padding:3},onClick:C=>{C.stopPropagation(),Pe(A.id,{x:Math.round(A.x/50)*50,y:Math.round(A.y/50)*50})},children:"📐 Snap 50mm"}),O.jsxs("div",{style:{borderTop:"1px solid #252540",paddingTop:5},children:[O.jsx("div",{style:{fontSize:9,color:"#00ffaa88",marginBottom:4,fontWeight:600,letterSpacing:1},children:"SIDE ELEV"}),O.jsxs("div",{style:{display:"flex",gap:4,marginBottom:4},children:[O.jsxs("label",{style:{...P.btn,flex:1,textAlign:"center",cursor:"pointer",fontSize:10,padding:"4px 0"},onClick:C=>C.stopPropagation(),children:["🖼 ",A.sideImage?"เปลี่ยนรูป":"Upload รูป",O.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:C=>{C.target.files[0]&&fe(A.id,C.target.files[0])},onClick:C=>C.stopPropagation()})]}),O.jsx("button",{style:{...P.btn,fontSize:10,padding:"4px 6px",...A.removeBg?P.btnA:{}},onClick:C=>{C.stopPropagation(),Pe(A.id,{removeBg:!A.removeBg})},title:"ลบพื้นหลังสีขาว",children:"✂ BG"}),O.jsx("button",{style:{...P.btn,fontSize:10,padding:"4px 6px",...A.flipX?P.btnA:{}},onClick:C=>{C.stopPropagation(),Pe(A.id,{flipX:!A.flipX})},title:"พลิกภาพซ้าย-ขวา",children:"⇄ Flip"})]}),O.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"Side X"}),O.jsx("input",{style:P.inp,type:"number",value:A.sideX??200,onChange:C=>Pe(A.id,{sideX:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"Floor Y"}),O.jsx("input",{style:P.inp,type:"number",value:A.sideY??0,onChange:C=>Pe(A.id,{sideY:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"องศา°"}),O.jsx("input",{style:P.inp,type:"number",step:"0.5",value:A.sideAngle??0,onChange:C=>Pe(A.id,{sideAngle:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]}),O.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginTop:5},children:[O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความยาวรูป (mm)"}),O.jsx("input",{style:P.inp,type:"number",step:"1",value:A.imgRealLength??A.length,onChange:C=>Pe(A.id,{imgRealLength:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ความสูงรูป (mm)"}),O.jsx("input",{style:P.inp,type:"number",step:"1",value:A.imgRealHeight??A.height,onChange:C=>Pe(A.id,{imgRealHeight:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]}),O.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}})]})]})]},A.id)),!t.length&&O.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่มรถ" เพื่อเริ่มวางแผน'})]}):O.jsxs("div",{style:{...P.sec,flex:1,overflow:"auto"},children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[O.jsxs("div",{style:P.lbl,children:["📦 สินค้า (",v.length,") • ",ve.toLocaleString()," kg"]}),O.jsx("button",{style:{...P.btn,...P.btnP,padding:"3px 8px"},onClick:()=>E(!I),children:"+ เพิ่ม"})]}),O.jsxs("div",{style:{fontSize:10,color:"#7a8aaa",marginBottom:5,display:"flex",justifyContent:"space-between"},children:[O.jsxs("span",{children:["ในตู้: ",ee,"/",v.length," ชิ้น"]}),O.jsxs("span",{style:{color:X>100?"#ff5555":X>80?"#F59E0B":"#00ddaa"},children:["Vol: ",X,"%"]})]}),O.jsx("div",{style:P.bar,children:O.jsx("div",{style:P.fill(Math.min(X,100),X>100?"#ff5555":X>80?"#F59E0B":"#00ddaa")})}),O.jsxs("div",{style:{display:"flex",gap:4,marginBottom:6},children:[O.jsxs("label",{style:{...P.btn,flex:1,textAlign:"center",cursor:"pointer",fontSize:10,padding:"3px 0"},children:["📂 Import CSV",O.jsx("input",{ref:ne,type:"file",accept:".csv,.txt,.tsv",style:{display:"none"},onChange:A=>{A.target.files[0]&&(ue(A.target.files[0]),A.target.value="")}})]}),O.jsx("button",{style:{...P.btn,flex:1,fontSize:10,padding:"3px 0"},onClick:He,disabled:!v.length,children:"⚡ Auto Pack"})]}),I&&O.jsxs("div",{style:{background:"#161638",borderRadius:7,padding:9,marginBottom:8,border:"1px solid #00ffaa33"},children:[O.jsx("select",{style:P.sel,value:S,onChange:A=>D(A.target.value),children:Am.map(A=>O.jsxs("option",{value:A.id,children:[A.name," ",A.id!=="box_custom"?`(${A.length}×${A.width}×${A.height}mm)`:""]},A.id))}),S==="box_custom"&&O.jsx("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[["ชื่อ","label","text"],["ยาว mm","length","number"],["กว้าง mm","width","number"],["สูง mm","height","number"],["น้ำหนัก kg","weight","number"]].map(([A,C,k])=>O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:A}),O.jsx("input",{style:P.inp,type:k,value:R[C],onChange:$=>z({...R,[C]:k==="number"?Number($.target.value):$.target.value})})]},C))}),O.jsxs("div",{style:{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"จุดเกิด X (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:q,onChange:A=>V(Number(A.target.value))}),O.jsx("div",{style:{fontSize:9,color:"#555",marginTop:1},children:"ลบ = นอกตู้"})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"จุดเกิด Y (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:j,onChange:A=>Y(Number(A.target.value))}),O.jsx("div",{style:{fontSize:9,color:"#555",marginTop:1},children:"0 = ผนังซ้าย"})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"จุดเกิด Z (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:U,onChange:A=>G(Number(A.target.value))}),O.jsx("div",{style:{fontSize:9,color:"#555",marginTop:1},children:"0 = พื้น"})]})]}),O.jsx("button",{style:{...P.btn,...P.btnP,width:"100%",marginTop:7},onClick:re,children:"✓ เพิ่มสินค้า"})]}),v.map(A=>O.jsxs("div",{style:P.card(A.id===b,Ce.has(A.id)),onClick:()=>w(A.id===b?null:A.id),children:[O.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[O.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[O.jsx("div",{style:{width:10,height:10,borderRadius:2,background:A.color}}),O.jsx("span",{style:{fontWeight:600,fontSize:11},children:A.name||A.preset})]}),O.jsx("button",{style:{...P.btn,...P.btnD,padding:"1px 5px",fontSize:10},onClick:C=>{C.stopPropagation(),Ke(A.id)},children:"✕"})]}),O.jsxs("div",{style:{fontSize:10,color:"#777",marginTop:3},children:[A.length,"×",A.width,"×",A.height," mm • ",A.weight," kg"]}),A.id===b&&O.jsxs("div",{style:{marginTop:6,display:"flex",flexDirection:"column",gap:4},children:[O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#00ddaa"},children:"ชื่อสินค้า"}),O.jsx("input",{style:P.inp,value:A.name||A.preset,onChange:C=>Te(A.id,{name:C.target.value}),onClick:C=>C.stopPropagation(),placeholder:"ชื่อสินค้า..."})]}),O.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4},children:[O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"X (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:A.x,onChange:C=>Te(A.id,{x:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"Y (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:A.y,onChange:C=>Te(A.id,{y:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]}),O.jsxs("div",{children:[O.jsx("label",{style:{fontSize:9,color:"#777"},children:"Z พื้น (mm)"}),O.jsx("input",{style:P.inp,type:"number",value:A.z,onChange:C=>Te(A.id,{z:Number(C.target.value)}),onClick:C=>C.stopPropagation()})]})]})]})]},A.id)),!v.length&&O.jsx("div",{style:{textAlign:"center",color:"#444",padding:16,fontSize:12},children:'กด "+ เพิ่ม" เพื่อเพิ่มสินค้า'})]})]}),O.jsxs("div",{style:P.vp,children:[O.jsxs("div",{style:P.tb,children:[O.jsx("span",{style:{fontSize:10,color:"#555",marginRight:3},children:"VIEW:"}),[["car","🚗 Car Load"],["boxtop","📦 Box Top"],["box3d","📦 Box 3D"]].map(([A,C])=>O.jsx("button",{style:{...P.btn,...r===A?P.btnA:{},padding:"3px 9px"},onClick:()=>s(A),children:C},A)),O.jsx("div",{style:{flex:1}}),O.jsx("button",{style:{...P.btn,padding:"3px 8px",opacity:m.length?1:.35},onClick:oe,disabled:!m.length,title:"Ctrl+Z",children:"↩ Undo"}),O.jsx("button",{style:{...P.btn,padding:"3px 8px",opacity:g.length?1:.35},onClick:Ue,disabled:!g.length,title:"Ctrl+Y",children:"↪ Redo"})]}),O.jsxs("div",{style:P.va,children:[r==="car"&&O.jsx(dT,{ref:Fe,container:f,vehicles:t,selectedId:n,onSelectVehicle:i,onUpdateVehicle:Pe}),r==="boxtop"&&O.jsx(hT,{container:f,boxes:v,selectedId:b,onSelectBox:w,onMoveBox:ge,collisions:Ce}),r==="box3d"&&O.jsx(mT,{container:f,boxes:v,selectedId:b,onMoveBox:ge,onSelectBox:w,onPlaceBox:ye})]})]})]}),O.jsxs("div",{style:P.status,children:[O.jsxs("span",{children:[f.name," | ",f.innerLength,"×",f.innerWidth,"×",f.innerHeight," mm"]}),r==="car"?O.jsxs("span",{children:["Vehicles: ",t.length," | ",Ie.toLocaleString()," kg | Length: ",Math.round(Ve),"%"]}):O.jsxs("span",{children:["Boxes: ",v.length," | ",ve.toLocaleString()," kg ",ve>f.maxPayload?`⚠️ +${(ve-f.maxPayload).toLocaleString()}kg`:""]})]})]})}z0(document.getElementById("root")).render(O.jsx(Se.StrictMode,{children:O.jsx(gT,{})}));
