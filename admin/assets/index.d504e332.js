import{g as p,r as f,q as l,s as h,w as m,t as _,v as g,x as v,o as n,i as c,y as w,z as b,A as y,V as S}from"./vendor.6bf135c8.js";import{u as x}from"./index.a2bcdef1.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";const q=p({props:{authLoading:{type:Boolean,default:()=>!0,required:!0},authStatus:{type:String,default:()=>"pending",required:!0}},setup(e){const s=f("light"),u=l(),r=h(),i=()=>{u.meta.type==="not_found"||(e.authStatus==="authenticated"?r.push({name:"dashboard"}):r.push({name:"login"}))};m(e,()=>{i()});const o=_(),a=x();return r.beforeEach((t,P,d)=>{!e.authLoading&&(o.getters.authProfile&&t.meta.isPublic||!o.getters.authProfile&&!t.meta.isPublic)||(d(),a.value=t.meta.title)}),g(()=>{setTimeout(()=>{let t=document.querySelector("#initial_startup");t&&t.remove()},300)}),{theme:s}}});function L(e,s,u,r,i,o){const a=v("router-view");return n(),c(S,{theme:e.theme,id:"inspire"},{default:w(()=>[b((n(),c(a,{key:e.$route})),[[y,!e.authLoading]])]),_:1},8,["theme"])}var B=$(q,[["render",L]]);export{B as default};