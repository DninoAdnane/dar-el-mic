import{r as l,j as s,V as b,Z as y,X as j}from"./index-CQF6VbmO.js";import{r as v,b as N}from"./index-Dx8QpkMH.js";import{c as h}from"./createLucideIcon-CrivtZSe.js";import{c as w,b as S}from"./App-CGAj0umP.js";/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M5 12h14",key:"1ays0h"}]],_=h("Minus",E);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],k=h("Plus",g),M=({service:{public_id:a,title:c,detail:o,price:d,priceUnit:u,minQuantity:p},isClicked:f,handleClick:i,quantity:r})=>{const[n,e]=l.useState(()=>r!==void 0?r:void 0);return l.useEffect(()=>{console.log(n)},[n]),l.useEffect(()=>{e(r!==void 0?r:void 0)},[r]),s.jsxs("div",{className:`px-[10px] py-[30px] rounded-[20px] mb-[20px] flex flex-col justify-between bg-[#e4e2e2] min-h-[200px] sm:min-h-[300px] items-stretch
                    transition-transform duration-300 ease-in-out shadow-md cursor-default flex-1
                    ${f?"border-4 border-sky-400":"hover:scale-102 hover:shadow-lg"}`,children:[s.jsx("h2",{className:"text-xl !font-semibold",children:c}),o&&s.jsx("p",{className:"text-black",children:o}),d&&s.jsxs("h4",{className:"!font-bold text-black !text-2xl",children:[d," DZD ",u&&`/ ${u}`]}),s.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[s.jsx("button",{onClick:()=>i&&i({public_id:a,quantity:f?0:1}),className:"btn btn-primary text-white px-4 py-2 rounded-xl font-semibold",disabled:p>0||r>0,children:"Sélectionner"}),n!==void 0&&s.jsxs("div",{className:"flex items-center",children:[s.jsx("button",{className:"btn btn-primary text-white rounded-full p-0 disabled:opacity-50 flex items-center justify-center",onClick:()=>i&&i({public_id:a,quantity:n-1}),disabled:n<=p,children:s.jsx(_,{size:24,className:"rounded-full text-white p-1"})}),s.jsx("span",{className:"mx-2 text-xl font-bold",children:n}),s.jsx("button",{className:"btn btn-primary text-white rounded-full p-0 flex items-center justify-center",onClick:()=>i&&i({public_id:a,quantity:n+1}),disabled:n>=10,children:s.jsx(k,{size:24,className:"rounded-full text-white p-1"})})]})]})]})},Q=({match:a,packagee:c,selectedServices:o,setSelectedService:d,removeSelectedService:u})=>{const p=S(),[f,i]=l.useState([]),r=({public_id:e,quantity:t})=>{if(console.log(t),t===0)return u(e);d({public_id:e,quantity:t})},n=e=>{e.forEach(t=>{t.minQuantity>0&&(o.some(x=>x.public_id===t.public_id)||d({public_id:t.public_id,quantity:t.minQuantity}))})};return l.useEffect(async()=>{c||p.push("package");const e=await new b(y(c),null,"GET").fetchCall;if(e.error){console.log(error);return}const t=j(e.response);n(t),i(t)},[]),l.useEffect(()=>{console.log(o)},[o]),s.jsx("div",{className:"flex flex-wrap 2xl:px-64",children:f.map((e,t)=>{const x=o.find(m=>m.public_id===e.public_id);return s.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 px-[4px] sm:px-[8px] md:px-[12px] mb-[20px]",children:s.jsx(M,{service:e,isClicked:!!o.some(m=>m.public_id===e.public_id),handleClick:m=>r(m),quantity:e.hasQuantity?(x==null?void 0:x.quantity)||e.minQuantity:void 0},t)})})})},C=({reservation:a})=>{const{packagee:c,services:o}=a;return{packagee:c,selectedServices:o}},D=w(C,{setSelectedService:N,removeSelectedService:v})(Q);export{D as default};
