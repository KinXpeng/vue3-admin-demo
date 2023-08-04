import{u as T,b as U}from"./_vue-router@4.2.4@vue-router-2f261a7a.js";import{a as q}from"./_js-cookie@3.0.5@js-cookie-edb2da2a.js";import{s as B}from"./_pinia@2.1.6@pinia-7dcc81d4.js";import{u as A,S as y,i as D,f as E,N as M}from"./index-ff765685.js";import{a as $}from"./formatTime-29ac8c52.js";import{a as S}from"./_element-plus@2.3.9@element-plus-1f0d90d6.js";import{A as N,l as j,V as n,Z as z,o as f,H as g,I as o,i as e,a as V,J as I,M as J,a1 as O,a2 as H}from"./_@vue_runtime-core@3.3.4@@vue-95679d18.js";import{j as L}from"./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js";import{o as Z}from"./_@vue_shared@3.3.4@@vue-bf8f17aa.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import"./_vue-demi@0.14.5@vue-demi-71ba0ef2.js";import"./_@vue_runtime-dom@3.3.4@@vue-333a3aa0.js";import"./_@element-plus_icons-vue@2.1.0@@element-plus-5b665c84.js";import"./_nprogress@0.2.0@nprogress-3926d3a9.js";import"./_call-bind@1.0.2@call-bind-2adaad32.js";import"./_get-intrinsic@1.2.1@get-intrinsic-d63970a8.js";import"./_has-symbols@1.0.3@has-symbols-0b1e4796.js";import"./_has-proto@1.0.1@has-proto-eb3a7269.js";import"./_function-bind@1.1.1@function-bind-a5934397.js";import"./_has@1.0.3@has-9a2a5c25.js";import"./_axios@1.4.0@axios-4a70c6fc.js";import"./_qs@6.11.2@qs-d0adad9e.js";import"./_side-channel@1.0.4@side-channel-388bb2db.js";import"./_object-inspect@1.12.3@object-inspect-fcbc4da0.js";import"./_mitt@3.0.1@mitt-f7ef348c.js";import"./_lodash-es@4.17.21@lodash-es-36eb724a.js";import"./_@vueuse_core@9.13.0@@vueuse-b381c12a.js";import"./_@vueuse_shared@9.13.0@@vueuse-e525be63.js";import"./_@sxzz_popperjs-es@2.11.7@@sxzz-c75af06c.js";import"./_@ctrl_tinycolor@3.6.0@@ctrl-f8748455.js";import"./_dayjs@1.11.9@dayjs-d3042338.js";import"./_async-validator@4.2.5@async-validator-dee29e8b.js";import"./_memoize-one@6.0.0@memoize-one-297ddbcb.js";import"./_escape-html@1.0.3@escape-html-d5914612.js";import"./_normalize-wheel-es@1.2.0@normalize-wheel-es-ed76fb12.js";import"./_@floating-ui_dom@1.5.1@@floating-ui-9840f9e3.js";import"./_@floating-ui_core@1.4.1@@floating-ui-ba0bb945.js";import"./_@floating-ui_utils@0.1.1@@floating-ui-97c5a6c2.js";const K=c=>(O("data-v-d6a05d3e"),c=c(),H(),c),Q=K(()=>V("span",null,"登 录",-1)),W=N({name:"loginAccount"}),X=N({...W,setup(c){const C=A(),{themeConfig:k}=B(C),p=T(),w=U(),t=L({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),F=j(()=>$(new Date)),P=async()=>{if(t.loading.signIn=!0,y.set("token",Math.random().toString(36).substr(0)),q.set("userName",t.ruleForm.userName),k.value.isRequestRoutes){const a=await E();x(a)}else{const a=await D();x(a)}},x=a=>{var s,u,i,r;if(a)S.warning("抱歉，您没有登录权限"),y.clear();else{let l=F.value;(s=p.query)!=null&&s.redirect?w.push({path:(u=p.query)==null?void 0:u.redirect,query:Object.keys((i=p.query)==null?void 0:i.params).length>0?JSON.parse((r=p.query)==null?void 0:r.params):""}):w.push("/");const d="欢迎回来！";S.success(`${l}，${d}`),M.start()}t.loading.signIn=!1};return(a,s)=>{const u=n("ele-User"),i=n("el-icon"),r=n("el-input"),l=n("el-form-item"),d=n("ele-Unlock"),b=n("ele-Position"),_=n("el-col"),h=n("el-button"),R=n("el-form"),v=z("waves");return f(),g(R,{size:"large",class:"login-content-form"},{default:o(()=>[e(l,{class:"login-animation1"},{default:o(()=>[e(r,{text:"",placeholder:"用户名 admin 或不输均为 common",modelValue:t.ruleForm.userName,"onUpdate:modelValue":s[0]||(s[0]=m=>t.ruleForm.userName=m),clearable:"",autocomplete:"off"},{prefix:o(()=>[e(i,{class:"el-input__icon"},{default:o(()=>[e(u)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(l,{class:"login-animation2"},{default:o(()=>[e(r,{type:t.isShowPassword?"text":"password",placeholder:"密码：123456",modelValue:t.ruleForm.password,"onUpdate:modelValue":s[2]||(s[2]=m=>t.ruleForm.password=m),autocomplete:"off"},{prefix:o(()=>[e(i,{class:"el-input__icon"},{default:o(()=>[e(d)]),_:1})]),suffix:o(()=>[V("i",{class:Z(["iconfont el-input__icon login-content-password",t.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:s[1]||(s[1]=m=>t.isShowPassword=!t.isShowPassword)},null,2)]),_:1},8,["type","modelValue"])]),_:1}),e(l,{class:"login-animation3"},{default:o(()=>[e(_,{span:15},{default:o(()=>[e(r,{text:"",maxlength:"4",placeholder:"请输入验证码",modelValue:t.ruleForm.code,"onUpdate:modelValue":s[3]||(s[3]=m=>t.ruleForm.code=m),clearable:"",autocomplete:"off"},{prefix:o(()=>[e(i,{class:"el-input__icon"},{default:o(()=>[e(b)]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(_,{span:1}),e(_,{span:8},{default:o(()=>[I((f(),g(h,{class:"login-content-code"},{default:o(()=>[J("1234")]),_:1})),[[v]])]),_:1})]),_:1}),e(l,{class:"login-animation4"},{default:o(()=>[I((f(),g(h,{type:"primary",class:"login-content-submit",round:"",onClick:P,loading:t.loading.signIn},{default:o(()=>[Q]),_:1},8,["loading"])),[[v]])]),_:1})]),_:1})}}});const Eo=G(X,[["__scopeId","data-v-d6a05d3e"]]);export{Eo as default};
