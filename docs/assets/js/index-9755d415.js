import{_ as N}from"./index-ff765685.js";import{E as z,a as A}from"./_element-plus@2.3.9@element-plus-1f0d90d6.js";import{A as w,n as B,V as o,Z as E,o as d,c as S,i as t,I as e,a as $,M as i,J as R,H as _,a0 as V}from"./_@vue_runtime-core@3.3.4@@vue-95679d18.js";import{r as L,j as I,u as O}from"./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js";import{M as F}from"./_@vue_shared@3.3.4@@vue-bf8f17aa.js";import"./_@vue_runtime-dom@3.3.4@@vue-333a3aa0.js";import"./_pinia@2.1.6@pinia-7dcc81d4.js";import"./_vue-demi@0.14.5@vue-demi-71ba0ef2.js";import"./_vue-router@4.2.4@vue-router-2f261a7a.js";import"./_js-cookie@3.0.5@js-cookie-edb2da2a.js";import"./_@element-plus_icons-vue@2.1.0@@element-plus-5b665c84.js";import"./_nprogress@0.2.0@nprogress-3926d3a9.js";import"./_call-bind@1.0.2@call-bind-2adaad32.js";import"./_get-intrinsic@1.2.1@get-intrinsic-d63970a8.js";import"./_has-symbols@1.0.3@has-symbols-0b1e4796.js";import"./_has-proto@1.0.1@has-proto-eb3a7269.js";import"./_function-bind@1.1.1@function-bind-a5934397.js";import"./_has@1.0.3@has-9a2a5c25.js";import"./_axios@1.4.0@axios-4a70c6fc.js";import"./_qs@6.11.2@qs-d0adad9e.js";import"./_side-channel@1.0.4@side-channel-388bb2db.js";import"./_object-inspect@1.12.3@object-inspect-fcbc4da0.js";import"./_mitt@3.0.1@mitt-f7ef348c.js";import"./_lodash-es@4.17.21@lodash-es-36eb724a.js";import"./_@vueuse_core@9.13.0@@vueuse-b381c12a.js";import"./_@vueuse_shared@9.13.0@@vueuse-e525be63.js";import"./_@sxzz_popperjs-es@2.11.7@@sxzz-c75af06c.js";import"./_@ctrl_tinycolor@3.6.0@@ctrl-f8748455.js";import"./_dayjs@1.11.9@dayjs-d3042338.js";import"./_async-validator@4.2.5@async-validator-dee29e8b.js";import"./_memoize-one@6.0.0@memoize-one-297ddbcb.js";import"./_escape-html@1.0.3@escape-html-d5914612.js";import"./_normalize-wheel-es@1.2.0@normalize-wheel-es-ed76fb12.js";import"./_@floating-ui_dom@1.5.1@@floating-ui-9840f9e3.js";import"./_@floating-ui_core@1.4.1@@floating-ui-ba0bb945.js";import"./_@floating-ui_utils@0.1.1@@floating-ui-97c5a6c2.js";const P={class:"system-dept-container layout-padding"},j={class:"system-dept-search mb15"},H=w({name:"systemDept"}),Mt=w({...H,setup(J){const D=V(()=>N(()=>import("./dialog-b5b07005.js"),["./dialog-b5b07005.js","./_@vue_runtime-core@3.3.4@@vue-95679d18.js","./_@vue_reactivity@3.3.4@@vue-7ec0c22d.js","./_@vue_shared@3.3.4@@vue-bf8f17aa.js"],import.meta.url)),m=L(),a=I({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),c=()=>{a.tableData.loading=!0,a.tableData.data=[],a.tableData.data.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"顶级部门",id:Math.random(),children:[{deptName:"IT外包服务",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"总部",id:Math.random()},{deptName:"资本控股",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"分部",id:Math.random()}]}),a.tableData.total=a.tableData.data.length,setTimeout(()=>{a.tableData.loading=!1},500)},u=n=>{m.value.openDialog(n)},g=(n,l)=>{m.value.openDialog(n,l)},v=n=>{z.confirm(`此操作将永久删除部门：${n.deptName}, 是否继续?`,"提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{c(),A.success("删除成功")}).catch(()=>{})};return B(()=>{c()}),(n,l)=>{const y=o("el-input"),x=o("ele-Search"),f=o("el-icon"),p=o("el-button"),k=o("ele-FolderAdd"),s=o("el-table-column"),h=o("el-tag"),C=o("el-table"),T=o("el-card"),M=E("loading");return d(),S("div",P,[t(T,{shadow:"hover",class:"layout-padding-auto"},{default:e(()=>[$("div",j,[t(y,{size:"default",placeholder:"请输入部门名称",style:{"max-width":"180px"}}),t(p,{size:"default",type:"primary",class:"ml10"},{default:e(()=>[t(f,null,{default:e(()=>[t(x)]),_:1}),i(" 查询 ")]),_:1}),t(p,{size:"default",type:"success",class:"ml10",onClick:l[0]||(l[0]=r=>u("add"))},{default:e(()=>[t(f,null,{default:e(()=>[t(k)]),_:1}),i(" 新增部门 ")]),_:1})]),R((d(),_(C,{data:a.tableData.data,style:{width:"100%"},"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:e(()=>[t(s,{prop:"deptName",label:"部门名称","show-overflow-tooltip":""}),t(s,{label:"排序","show-overflow-tooltip":"",width:"80"},{default:e(r=>[i(F(r.$index),1)]),_:1}),t(s,{prop:"status",label:"部门状态","show-overflow-tooltip":""},{default:e(r=>[r.row.status?(d(),_(h,{key:0,type:"success"},{default:e(()=>[i("启用")]),_:1})):(d(),_(h,{key:1,type:"info"},{default:e(()=>[i("禁用")]),_:1}))]),_:1}),t(s,{prop:"describe",label:"部门描述","show-overflow-tooltip":""}),t(s,{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}),t(s,{label:"操作","show-overflow-tooltip":"",width:"140"},{default:e(r=>[t(p,{size:"small",text:"",type:"primary",onClick:l[1]||(l[1]=b=>u("add"))},{default:e(()=>[i("新增")]),_:1}),t(p,{size:"small",text:"",type:"primary",onClick:b=>g("edit",r.row)},{default:e(()=>[i("修改")]),_:2},1032,["onClick"]),t(p,{size:"small",text:"",type:"primary",onClick:b=>v(r.row)},{default:e(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[M,a.tableData.loading]])]),_:1}),t(O(D),{ref_key:"deptDialogRef",ref:m,onRefresh:l[2]||(l[2]=r=>c())},null,512)])}}});export{Mt as default};
