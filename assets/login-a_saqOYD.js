import{O as f,r,j as s}from"./index-CQF6VbmO.js";import{R as N,C as b,I as o,B as g}from"./CustomBootstrap-B2nVt9bg.js";import{C as w,a as v,F as c,L as d}from"./Label-DUDP3Vr-.js";import{c as y,N as t}from"./App-CGAj0umP.js";import{F as k,a as F,b as m}from"./formik.esm-dgybL-yT.js";import"./index-B3mBBEQf.js";const S=a=>{let e;return a?a.length<4&&(e="Value must be longer than 3 characters"):e="Please enter your password",e},C=a=>{let e;return a?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a)||(e="Invalid email address"):e="Please enter your email address",e},L=({history:a,loading:e,error:i,loginUserAction:x})=>{const[p]=r.useState(""),[j]=r.useState("");r.useEffect(()=>{i&&alert(i)},[i]);const h=l=>{e||l.email!==""&&l.password!==""&&x(l,a)},u={email:p,password:j};return s.jsx(N,{className:"h-100",children:s.jsx(b,{xxs:"12",md:"10",className:"mx-auto my-auto",children:s.jsxs(w,{className:"auth-card",children:[s.jsx("div",{className:"position-relative image-side",children:s.jsxs("p",{className:"white mb-0",style:{fontSize:"16px"},children:["Please use your credentials to login.",s.jsx("br",{}),"If you are not a member, please"," ",s.jsx(t,{to:"/user/register",className:"white",children:s.jsx("a",{style:{fontWeight:600,fontSize:"18px",textDecoration:"underline"},children:"register"})}),"."]})}),s.jsxs("div",{className:"form-side",children:[s.jsx(t,{to:"/",className:"white",children:s.jsx("span",{className:"logo-single"})}),s.jsx(v,{className:"mb-4",children:s.jsx(o,{id:"user.login-title"})}),s.jsx(k,{initialValues:u,onSubmit:h,children:({errors:l,touched:n})=>s.jsxs(F,{className:"av-tooltip tooltip-label-bottom",children:[s.jsxs(c,{className:"form-group has-float-label",children:[s.jsx(d,{children:s.jsx(o,{id:"user.email"})}),s.jsx(m,{className:"form-control",name:"email",validate:C}),l.email&&n.email&&s.jsx("div",{className:"invalid-feedback d-block",children:l.email})]}),s.jsxs(c,{className:"form-group has-float-label",children:[s.jsx(d,{children:s.jsx(o,{id:"user.password"})}),s.jsx(m,{className:"form-control",type:"password",name:"password",validate:S}),l.password&&n.password&&s.jsx("div",{className:"invalid-feedback d-block",children:l.password})]}),s.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[s.jsx(t,{to:"/user/forgot-password",children:s.jsx(o,{id:"user.forgot-password-question"})}),s.jsxs(g,{color:"primary",className:`btn-shadow btn-multiple-state ${e?"show-spinner":""}`,size:"lg",children:[s.jsxs("span",{className:"spinner d-inline-block",children:[s.jsx("span",{className:"bounce1"}),s.jsx("span",{className:"bounce2"}),s.jsx("span",{className:"bounce3"})]}),s.jsx("span",{className:"label",children:s.jsx(o,{id:"user.login-button"})})]})]})]})})]})]})})})},P=({authUser:a})=>{const{loading:e,error:i}=a;return{loading:e,error:i}},Z=y(P,{loginUserAction:f})(L);export{Z as default};
