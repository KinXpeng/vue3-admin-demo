import{l as nt,u as Q,s as rt,j as ot,r as st}from"./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js";import{x as H,p as it,A as ze,l as L,h as Ge,z as ae,w as ct,N as at,R as lt,$ as ut}from"./_@vue_runtime-core@3.3.4@@vue-95679d18.js";/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const G=typeof window<"u";function ft(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const o=t[r];n[r]=N(o)?o.map(e):e(o)}return n}const F=()=>{},N=Array.isArray,ht=/\/$/,dt=e=>e.replace(ht,"");function ue(e,t,n="/"){let r,o={},l="",d="";const m=t.indexOf("#");let c=t.indexOf("?");return m<c&&m>=0&&(c=-1),c>-1&&(r=t.slice(0,c),l=t.slice(c+1,m>-1?m:t.length),o=e(l)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=vt(r??t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:o,hash:d}}function pt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ce(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function mt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&q(t.matched[r],n.matched[o])&&qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gt(e[n],t[n]))return!1;return!0}function gt(e,t){return N(e)?be(e,t):N(t)?be(t,e):e===t}function be(e,t){return N(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function vt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let l=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Y;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Y||(Y={}));function yt(e){if(!e)if(G){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),dt(e)}const Rt=/^[^#]+#/;function Et(e,t){return e.replace(Rt,"#")+t}function wt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.pageXOffset,top:window.pageYOffset});function Pt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=wt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function St(e,t){he.set(e,t)}function Ct(e){const t=he.get(e);return he.delete(e),t}let bt=()=>location.protocol+"//"+location.host;function Ue(e,t){const{pathname:n,search:r,hash:o}=t,l=e.indexOf("#");if(l>-1){let m=o.includes(e.slice(l))?e.slice(l).length:1,c=o.slice(m);return c[0]!=="/"&&(c="/"+c),Ce(c,"")}return Ce(n,e)+r+o}function kt(e,t,n,r){let o=[],l=[],d=null;const m=({state:u})=>{const g=Ue(e,location),R=n.value,k=t.value;let b=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}b=k?u.position-k.position:0}else r(g);o.forEach(E=>{E(n.value,R,{delta:b,type:X.pop,direction:b?b>0?Y.forward:Y.back:Y.unknown})})};function c(){d=n.value}function f(u){o.push(u);const g=()=>{const R=o.indexOf(u);R>-1&&o.splice(R,1)};return l.push(g),g}function s(){const{history:u}=window;u.state&&u.replaceState(S({},u.state,{scroll:te()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:c,listen:f,destroy:a}}function Ae(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function At(e){const{history:t,location:n}=window,r={value:Ue(e,n)},o={value:t.state};o.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,f,s){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+c:bt()+e+c;try{t[s?"replaceState":"pushState"](f,"",u),o.value=f}catch(g){console.error(g),n[s?"replace":"assign"](u)}}function d(c,f){const s=S({},t.state,Ae(o.value.back,c,o.value.forward,!0),f,{position:o.value.position});l(c,s,!0),r.value=c}function m(c,f){const s=S({},o.value,t.state,{forward:c,scroll:te()});l(s.current,s,!0);const a=S({},Ae(r.value,c,null),{position:s.position+1},f);l(c,a,!1),r.value=c}return{location:r,state:o,push:m,replace:d}}function Ot(e){e=yt(e);const t=At(e),n=kt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const o=S({location:"",base:e,go:r,createHref:Et.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function gn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ot(e)}function _t(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const I={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ve=Symbol("");var Oe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Oe||(Oe={}));function U(e,t){return S(new Error,{type:e,[Ve]:!0},t)}function j(e,t){return e instanceof Error&&Ve in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",xt={sensitive:!1,strict:!1,start:!0,end:!0},Mt=/[.+*?^${}()[\]/\\]/g;function Nt(e,t){const n=S({},xt,t),r=[];let o=n.start?"^":"";const l=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(o+="/"),o+=u.value.replace(Mt,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:k,optional:b,regexp:E}=u;l.push({name:R,repeatable:k,optional:b});const P=E||_e;if(P!==_e){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let _=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(_=b&&f.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),o+=_,g+=20,b&&(g+=-8),k&&(g+=-20),P===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function m(f){const s=f.match(d),a={};if(!s)return null;for(let u=1;u<s.length;u++){const g=s[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function c(f){let s="",a=!1;for(const u of e){(!a||!s.endsWith("/"))&&(s+="/"),a=!1;for(const g of u)if(g.type===0)s+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,E=R in f?f[R]:"";if(N(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=N(E)?E.join("/"):E;if(!P)if(b)u.length<2&&(s.endsWith("/")?s=s.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);s+=P}}return s||"/"}return{re:d,score:r,keys:l,parse:m,stringify:c}}function Lt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function $t(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const l=Lt(r[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jt={type:0,value:""},It=/[a-zA-Z0-9_]/;function Tt(e){if(!e)return[[]];if(e==="/")return[[jt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const o=[];let l;function d(){l&&o.push(l),l=[]}let m=0,c,f="",s="";function a(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:s,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=c}for(;m<e.length;){if(c=e[m++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&a(),d()):c===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:c==="("?n=2:It.test(c)?u():(a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--);break;case 2:c===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+c:n=3:s+=c;break;case 3:a(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&m--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),o}function Ht(e,t,n){const r=Nt(Tt(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Bt(e,t){const n=[],r=new Map;t=Le({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function l(s,a,u){const g=!u,R=zt(s);R.aliasOf=u&&u.record;const k=Le(t,s),b=[R];if("alias"in s){const _=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of _)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,P;for(const _ of b){const{path:M}=_;if(a&&M[0]!=="/"){const B=a.record.path,$=B[B.length-1]==="/"?"":"/";_.path=a.record.path+(M&&$+M)}if(E=Ht(_,a,k),u?u.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&s.name&&!Ne(E)&&d(s.name)),R.children){const B=R.children;for(let $=0;$<B.length;$++)l(B[$],E,u&&u.children[$])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return P?()=>{d(P)}:F}function d(s){if(Ke(s)){const a=r.get(s);a&&(r.delete(s),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(s);a>-1&&(n.splice(a,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function m(){return n}function c(s){let a=0;for(;a<n.length&&$t(s,n[a])>=0&&(s.record.path!==n[a].record.path||!De(s,n[a]));)a++;n.splice(a,0,s),s.record.name&&!Ne(s)&&r.set(s.record.name,s)}function f(s,a){let u,g={},R,k;if("name"in s&&s.name){if(u=r.get(s.name),!u)throw U(1,{location:s});k=u.record.name,g=S(Me(a.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),s.params&&Me(s.params,u.keys.map(P=>P.name))),R=u.stringify(g)}else if("path"in s)R=s.path,u=n.find(P=>P.re.test(R)),u&&(g=u.parse(R),k=u.record.name);else{if(u=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!u)throw U(1,{location:s,currentLocation:a});k=u.record.name,g=S({},a.params,s.params),R=u.stringify(g)}const b=[];let E=u;for(;E;)b.unshift(E.record),E=E.parent;return{name:k,path:R,params:g,matched:b,meta:qt(b)}}return e.forEach(s=>l(s)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:o}}function Me(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function zt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Gt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Gt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ne(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qt(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function De(e,t){return t.children.some(n=>n===e||De(e,n))}const We=/#/g,Ut=/&/g,Kt=/\//g,Vt=/=/g,Dt=/\?/g,Qe=/\+/g,Wt=/%5B/g,Qt=/%5D/g,Fe=/%5E/g,Ft=/%60/g,Ye=/%7B/g,Yt=/%7C/g,Xe=/%7D/g,Xt=/%20/g;function me(e){return encodeURI(""+e).replace(Yt,"|").replace(Wt,"[").replace(Qt,"]")}function Zt(e){return me(e).replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function de(e){return me(e).replace(Qe,"%2B").replace(Xt,"+").replace(We,"%23").replace(Ut,"%26").replace(Ft,"`").replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function Jt(e){return de(e).replace(Vt,"%3D")}function en(e){return me(e).replace(We,"%23").replace(Dt,"%3F")}function tn(e){return e==null?"":en(e).replace(Kt,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function nn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const l=r[o].replace(Qe," "),d=l.indexOf("="),m=ee(d<0?l:l.slice(0,d)),c=d<0?null:ee(l.slice(d+1));if(m in t){let f=t[m];N(f)||(f=t[m]=[f]),f.push(c)}else t[m]=c}return t}function $e(e){let t="";for(let n in e){const r=e[n];if(n=Jt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(N(r)?r.map(l=>l&&de(l)):[r&&de(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=N(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Ze=Symbol(""),je=Symbol(""),ne=Symbol(""),ge=Symbol(""),pe=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function on(e,t,n){const r=()=>{e[t].delete(n)};at(r),lt(r),ut(()=>{e[t].add(n)}),e[t].add(n)}function vn(e){const t=H(Ze,{}).value;t&&on(t,"updateGuards",e)}function T(e,t,n,r,o){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,m)=>{const c=a=>{a===!1?m(U(4,{from:n,to:t})):a instanceof Error?m(a):_t(a)?m(U(2,{from:t,to:a})):(l&&r.enterCallbacks[o]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[o],t,n,c);let s=Promise.resolve(f);e.length<3&&(s=s.then(c)),s.catch(a=>m(a))})}function fe(e,t,n,r){const o=[];for(const l of e)for(const d in l.components){let m=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(sn(m)){const f=(m.__vccOpts||m)[t];f&&o.push(T(f,n,r,l,d))}else{let c=m();o.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const s=ft(f)?f.default:f;l.components[d]=s;const u=(s.__vccOpts||s)[t];return u&&T(u,n,r,l,d)()}))}}return o}function sn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ie(e){const t=H(ne),n=H(ge),r=L(()=>t.resolve(Q(e.to))),o=L(()=>{const{matched:c}=r.value,{length:f}=c,s=c[f-1],a=n.matched;if(!s||!a.length)return-1;const u=a.findIndex(q.bind(null,s));if(u>-1)return u;const g=Te(c[f-2]);return f>1&&Te(s)===g&&a[a.length-1].path!==g?a.findIndex(q.bind(null,c[f-2])):u}),l=L(()=>o.value>-1&&un(n.params,r.value.params)),d=L(()=>o.value>-1&&o.value===n.matched.length-1&&qe(n.params,r.value.params));function m(c={}){return ln(c)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(F):Promise.resolve()}return{route:r,href:L(()=>r.value.href),isActive:l,isExactActive:d,navigate:m}}const cn=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ie,setup(e,{slots:t}){const n=ot(Ie(e)),{options:r}=H(ne),o=L(()=>({[He(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[He(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Ge("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),an=cn;function ln(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function un(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!N(o)||o.length!==r.length||r.some((l,d)=>l!==o[d]))return!1}return!0}function Te(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const He=(e,t,n)=>e??t??n,fn=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=H(pe),o=L(()=>e.route||r.value),l=H(je,0),d=L(()=>{let f=Q(l);const{matched:s}=o.value;let a;for(;(a=s[f])&&!a.components;)f++;return f}),m=L(()=>o.value.matched[d.value]);ae(je,L(()=>d.value+1)),ae(Ze,m),ae(pe,o);const c=st();return ct(()=>[c.value,m.value,e.name],([f,s,a],[u,g,R])=>{s&&(s.instances[a]=f,g&&g!==s&&f&&f===u&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),f&&s&&(!g||!q(s,g)||!u)&&(s.enterCallbacks[a]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,a=m.value,u=a&&a.components[s];if(!u)return Be(n.default,{Component:u,route:f});const g=a.props[s],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=Ge(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[s]=null)},ref:c}));return Be(n.default,{Component:b,route:f})||b}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const hn=fn;function yn(e){const t=Bt(e.routes,e),n=e.parseQuery||nn,r=e.stringifyQuery||$e,o=e.history,l=W(),d=W(),m=W(),c=nt(I);let f=I;G&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=le.bind(null,i=>""+i),a=le.bind(null,tn),u=le.bind(null,ee);function g(i,p){let h,v;return Ke(i)?(h=t.getRecordMatcher(i),v=p):v=i,t.addRoute(v,h)}function R(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(i=>i.record)}function b(i){return!!t.getRecordMatcher(i)}function E(i,p){if(p=S({},p||c.value),typeof i=="string"){const y=ue(n,i,p.path),O=t.resolve({path:y.path},p),D=o.createHref(y.fullPath);return S(y,O,{params:u(O.params),hash:ee(y.hash),redirectedFrom:void 0,href:D})}let h;if("path"in i)h=S({},i,{path:ue(n,i.path,p.path).path});else{const y=S({},i.params);for(const O in y)y[O]==null&&delete y[O];h=S({},i,{params:a(y)}),p.params=a(p.params)}const v=t.resolve(h,p),C=i.hash||"";v.params=s(u(v.params));const A=pt(r,S({},i,{hash:Zt(C),path:v.path})),w=o.createHref(A);return S({fullPath:A,hash:C,query:r===$e?rn(i.query):i.query||{}},v,{redirectedFrom:void 0,href:w})}function P(i){return typeof i=="string"?ue(n,i,c.value.path):S({},i)}function _(i,p){if(f!==i)return U(8,{from:p,to:i})}function M(i){return K(i)}function B(i){return M(S(P(i),{replace:!0}))}function $(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function K(i,p){const h=f=E(i),v=c.value,C=i.state,A=i.force,w=i.replace===!0,y=$(h);if(y)return K(S(P(y),{state:typeof y=="object"?S({},C,y.state):C,force:A,replace:w}),p||h);const O=h;O.redirectedFrom=p;let D;return!A&&mt(r,v,h)&&(D=U(16,{to:O,from:v}),Pe(v,v,!0,!1)),(D?Promise.resolve(D):ye(O,v)).catch(x=>j(x)?j(x,2)?x:se(x):oe(x,O,v)).then(x=>{if(x){if(j(x,2))return K(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},C,x.to.state):C,force:A}),p||O)}else x=Ee(O,v,!0,w,C);return Re(O,v,x),x})}function Je(i,p){const h=_(i,p);return h?Promise.reject(h):Promise.resolve()}function ve(i){const p=J.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(i):i()}function ye(i,p){let h;const[v,C,A]=dn(i,p);h=fe(v.reverse(),"beforeRouteLeave",i,p);for(const y of v)y.leaveGuards.forEach(O=>{h.push(T(O,i,p))});const w=Je.bind(null,i,p);return h.push(w),z(h).then(()=>{h=[];for(const y of l.list())h.push(T(y,i,p));return h.push(w),z(h)}).then(()=>{h=fe(C,"beforeRouteUpdate",i,p);for(const y of C)y.updateGuards.forEach(O=>{h.push(T(O,i,p))});return h.push(w),z(h)}).then(()=>{h=[];for(const y of A)if(y.beforeEnter)if(N(y.beforeEnter))for(const O of y.beforeEnter)h.push(T(O,i,p));else h.push(T(y.beforeEnter,i,p));return h.push(w),z(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=fe(A,"beforeRouteEnter",i,p),h.push(w),z(h))).then(()=>{h=[];for(const y of d.list())h.push(T(y,i,p));return h.push(w),z(h)}).catch(y=>j(y,8)?y:Promise.reject(y))}function Re(i,p,h){m.list().forEach(v=>ve(()=>v(i,p,h)))}function Ee(i,p,h,v,C){const A=_(i,p);if(A)return A;const w=p===I,y=G?history.state:{};h&&(v||w?o.replace(i.fullPath,S({scroll:w&&y&&y.scroll},C)):o.push(i.fullPath,C)),c.value=i,Pe(i,p,h,w),se()}let V;function et(){V||(V=o.listen((i,p,h)=>{if(!Se.listening)return;const v=E(i),C=$(v);if(C){K(S(C,{replace:!0}),v).catch(F);return}f=v;const A=c.value;G&&St(ke(A.fullPath,h.delta),te()),ye(v,A).catch(w=>j(w,12)?w:j(w,2)?(K(w.to,v).then(y=>{j(y,20)&&!h.delta&&h.type===X.pop&&o.go(-1,!1)}).catch(F),Promise.reject()):(h.delta&&o.go(-h.delta,!1),oe(w,v,A))).then(w=>{w=w||Ee(v,A,!1),w&&(h.delta&&!j(w,8)?o.go(-h.delta,!1):h.type===X.pop&&j(w,20)&&o.go(-1,!1)),Re(v,A,w)}).catch(F)}))}let re=W(),we=W(),Z;function oe(i,p,h){se(i);const v=we.list();return v.length?v.forEach(C=>C(i,p,h)):console.error(i),Promise.reject(i)}function tt(){return Z&&c.value!==I?Promise.resolve():new Promise((i,p)=>{re.add([i,p])})}function se(i){return Z||(Z=!i,et(),re.list().forEach(([p,h])=>i?h(i):p()),re.reset()),i}function Pe(i,p,h,v){const{scrollBehavior:C}=e;if(!G||!C)return Promise.resolve();const A=!h&&Ct(ke(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return it().then(()=>C(i,p,A)).then(w=>w&&Pt(w)).catch(w=>oe(w,i,p))}const ie=i=>o.go(i);let ce;const J=new Set,Se={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:E,options:e,push:M,replace:B,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:l.add,beforeResolve:d.add,afterEach:m.add,onError:we.add,isReady:tt,install(i){const p=this;i.component("RouterLink",an),i.component("RouterView",hn),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),G&&!ce&&c.value===I&&(ce=!0,M(o.location).catch(C=>{}));const h={};for(const C in I)Object.defineProperty(h,C,{get:()=>c.value[C],enumerable:!0});i.provide(ne,p),i.provide(ge,rt(h)),i.provide(pe,c);const v=i.unmount;J.add(i),i.unmount=function(){J.delete(i),J.size<1&&(f=I,V&&V(),V=null,c.value=I,ce=!1,Z=!1),v()}}};function z(i){return i.reduce((p,h)=>p.then(()=>ve(h)),Promise.resolve())}return Se}function dn(e,t){const n=[],r=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const m=t.matched[d];m&&(e.matched.find(f=>q(f,m))?r.push(m):n.push(m));const c=e.matched[d];c&&(t.matched.find(f=>q(f,c))||o.push(c))}return[n,r,o]}function Rn(){return H(ne)}function En(){return H(ge)}export{gn as a,Rn as b,yn as c,vn as o,En as u};
