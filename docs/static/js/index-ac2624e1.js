import{d as c,F as w,u as z,g as _,h as k,G as B,i as a,j as u,H as v,b as e,c as n,k as o,m as d,t as f,l as b}from"./index-cc7e4d0d.js";const j={class:"scroll-y"},D={class:"mt-10px mb-10px font-bold"},N={class:"mt-10px mb-10px font-bold"},S={class:"mt-10px mb-10px font-bold"},V={class:"mb-10px font-bold mt-20px"},G={class:"mt-30px font-bold mb-10px"},L={class:"mb-40px w-900px h-10px text-16px"},T={class:"mt-30px font-bold mb-10px"},E=c({}),q=c({...E,__name:"index",setup(F){const{setTheme:m,theme:H,setSize:p,size:O,setLanguage:C}=w(),$=z(),g=x=>{var t;C(x,(t=$.meta)==null?void 0:t.title)},i=_(0),h=_({test:"i am global var from vite.config.js define"});return(x,t)=>{const s=k("el-button"),y=k("el-link"),r=B("lang");return a(),u("div",j,[v((a(),u("div",D,[e("switch theme")])),[[r]]),n(s,{onClick:t[0]||(t[0]=l=>d(m)("base-theme"))},{default:o(()=>[e("base-theme(default)")]),_:1}),n(s,{onClick:t[1]||(t[1]=l=>d(m)("lighting-theme"))},{default:o(()=>[e("lighting-theme")]),_:1}),n(s,{onClick:t[2]||(t[2]=l=>d(m)("china-red"))},{default:o(()=>[e("china-red(default)")]),_:1}),n(s,{onClick:t[3]||(t[3]=l=>d(m)("dark"))},{default:o(()=>[e("dark-theme")]),_:1}),v((a(),u("div",N,[e("switch size")])),[[r]]),n(s,{onClick:t[4]||(t[4]=l=>d(p)("large"))},{default:o(()=>[e("large")]),_:1}),n(s,{onClick:t[5]||(t[5]=l=>d(p)("default"))},{default:o(()=>[e("default")]),_:1}),n(s,{onClick:t[6]||(t[6]=l=>d(p)("small"))},{default:o(()=>[e("small")]),_:1}),v((a(),u("div",S,[e("switch language")])),[[r]]),n(s,{onClick:t[7]||(t[7]=l=>g("en"))},{default:o(()=>[e("en")]),_:1}),n(s,{onClick:t[8]||(t[8]=l=>g("zh"))},{default:o(()=>[e("zh")]),_:1}),v((a(),u("div",V,[e("Button Group")])),[[r]]),n(s,{type:"primary",onClick:t[9]||(t[9]=l=>i.value++)},{default:o(()=>[e("count is: "+f(i.value),1)]),_:1}),n(s,{type:"success",onClick:t[10]||(t[10]=l=>i.value++)},{default:o(()=>[e("count is: "+f(i.value),1)]),_:1}),n(s,{type:"warning",onClick:t[11]||(t[11]=l=>i.value++)},{default:o(()=>[e("count is: "+f(i.value),1)]),_:1}),n(s,{type:"danger",onClick:t[12]||(t[12]=l=>i.value++)},{default:o(()=>[e("count is: "+f(i.value),1)]),_:1}),n(s,{type:"info",onClick:t[13]||(t[13]=l=>i.value++)},{default:o(()=>[e("count is: "+f(i.value),1)]),_:1}),v((a(),u("div",G,[e("unocss using")])),[[r]]),b("div",L,[b("div",null,[e(" you can look "),n(y,{class:"text-red",href:"https://uno.antfu.me/",target:"_blank"},{default:o(()=>[e("https://uno.antfu.me/")]),_:1}),e(' to search you need such as "margin-left:10px" and then get the sortcut(ml-10px) ')])]),v((a(),u("div",T,[e("global var")])),[[r]]),e(" "+f(h.value),1)])}}});export{q as default};