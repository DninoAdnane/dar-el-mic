import{r as s,V as u,Y as k,X as g,j as l}from"./index-CQF6VbmO.js";import{P}from"./Package-ChJEEfVu.js";import{a as x}from"./index-Dx8QpkMH.js";import{c as E}from"./App-CGAj0umP.js";import"./createLucideIcon-CrivtZSe.js";const S=({match:c,setSelectedPackage:t,packagee:r})=>{const[o,p]=s.useState([]),[i,n]=s.useState(null),m=e=>{n(e),t(o[e].public_id)};return s.useEffect(async()=>{const e=await new u(k,null,"GET").fetchCall;if(e.error){console.log(error);return}const a=g(e.response);if(p(a),!r)return;const d=a.findIndex(f=>f.public_id===r);n(d)},[]),l.jsx("div",{className:"flex flex-wrap 2xl:px-64",children:o.map((e,a)=>l.jsx(P,{packageElemt:e,isClicked:a===i,handleClick:()=>m(a)},a))})},h=({reservation:c})=>{const{packagee:t}=c;return{packagee:t}},w=E(h,{setSelectedPackage:x})(S);export{w as default};
