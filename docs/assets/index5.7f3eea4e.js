import{k as g,q as s,ad as _,ch as T,au as m,a7 as I,ap as F,bk as D,y as C,bC as j,aA as S,aM as R,ci as A,an as E,aB as M}from"./index.742823bc.js";import{T as z}from"./index7.549fc80c.js";import"./vendor.0b417fb8.js";var B=Object.defineProperty,U=Object.defineProperties,V=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,w=(e,n,a)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,o=(e,n)=>{for(var a in n||(n={}))x.call(n,a)&&w(e,a,n[a]);if(v)for(var a of v(n))O.call(n,a)&&w(e,a,n[a]);return e},t=(e,n)=>U(e,V(n)),q=(e,n)=>{var a={};for(var l in e)x.call(e,l)&&n.indexOf(l)<0&&(a[l]=e[l]);if(e!=null&&v)for(var l of v(e))n.indexOf(l)<0&&O.call(e,l)&&(a[l]=e[l]);return a};const J=window.React.useCallback,N=window.React.useMemo,L=({file:e,onDel:n})=>{const{name:a,size:l,type:d}=e;return s(E,{content:JSON.stringify({name:a,size:l,type:d},null,"	"),children:s(z.Paragraph,{ellipsis:!0,copyable:{text:"\u5220\u9664",tooltips:["\u5220\u9664","\u5220\u9664\u6210\u529F"],icon:s(M,{}),onCopy:n},children:e.name})})},G=({item:e,supportType:n,update:a,isExpression:l,separator:d,isDescription:f,del:h})=>{const p=e.valueType||"Text",b=N(()=>{if(n&&n.length){const r=s(m,{children:n.map(c=>s(m.Item,{onClick:()=>{a(t(o({},e),{valueType:c}))},children:c},c))});return s("div",{className:"json-list-item-valueType",children:g(I,{droplist:r,trigger:"click",position:"br",children:["[",s(_,{type:"text",children:p}),"]"]})})}return null},[n,e]),y=N(()=>{switch(p){case"Text":return s(C,{placeholder:"value",disabled:!e.enable,className:"json-list-item-value",value:e.value,style:{flex:"2 0 100px"},onChange:r=>{a(t(o({},e),{value:r}))},addAfter:l?s(j,{onChange:r=>{a(t(o({},e),{value:r.value}))}}):void 0});case"File":return s("div",{className:"json-list-item-value",children:e.file?s(L,{file:e.file,onDel:()=>{a(t(o({},e),{file:void 0}))}}):s(D,{action:"/",limit:1,autoUpload:!1,disabled:!e.enable,onChange:r=>{a(t(o({},e),{file:r[0].originFile}))},customRequest:r=>{}})});case"Number":return s(F,{placeholder:"value",disabled:!e.enable,className:"json-list-item-value",value:e.value,style:{flex:"2 0 100px"},onChange:r=>{a(t(o({},e),{value:r.toString()}))}})}},[e]);return g("div",{className:"json-list-item",children:[s(S,{checked:e.enable,onChange:r=>{a(t(o({},e),{enable:r}))}}),s(C,{placeholder:"name",disabled:!e.enable,className:"json-list-item-input",value:e.name,onChange:r=>{a(t(o({},e),{name:r}))},addAfter:l?s(j,{onChange:r=>{a(t(o({},e),{name:r.value}))}}):void 0}),b,s("span",{className:"json-list-item-separator",children:d}),y,f&&s(C,{placeholder:"\u63CF\u8FF0",disabled:!e.enable,className:"json-list-item-description",value:e.description,onChange:r=>{a(t(o({},e),{description:r}))}}),s(R,{onClick:()=>h(e),style:{cursor:"pointer",fontSize:16}})]},e.key)};var W=e=>{var n=e,{value:a,onChange:l,addText:d="\u65B0\u589E",separator:f="=",isExpression:h,isDescription:p,supportType:b}=n,y=q(n,["value","onChange","addText","separator","isExpression","isDescription","supportType"]);const r=Array.isArray(a)?a:[],c=J(i=>{l&&l(i)},[l]),P=()=>{c([...r,{key:A(),enable:!0}])},k=i=>{c(r.filter(u=>u.key!==i.key))},$=i=>{c(r.map(u=>u.key===i.key?i:u))};return g("div",t(o({},y),{className:"custom-json-list",children:[r.map((i,u)=>s(G,{item:i,supportType:b,update:$,isExpression:h,separator:f,isDescription:p,del:k},i.key)),s("div",{children:s(_,{size:"mini",type:"secondary",shape:"round",icon:s(T,{}),onClick:P,children:d})})]}))};export{W as default};
