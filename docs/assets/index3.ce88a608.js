import{cb as P,cc as w,k as m,ae as f,q as n,ad as h,b6 as F,cd as j,ce as O}from"./index.a47e87b2.js";import S from"./index2.38abe274.js";import"./vendor.0b417fb8.js";var x=Object.defineProperty,E=Object.defineProperties,R=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,_=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))v.call(t,o)&&_(e,o,t[o]);if(u)for(var o of u(t))g.call(t,o)&&_(e,o,t[o]);return e},D=(e,t)=>E(e,R(t)),N=(e,t)=>{var o={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&u)for(var r of u(e))t.indexOf(r)<0&&g.call(e,r)&&(o[r]=e[r]);return o};const B="_module_g263m_1";var $={module:B};const I=window.React.useContext,q=window.React.useEffect,p=window.React.useState;function V(e){var t=e,{widgets:o,buttonProps:r}=t,a=N(t,["widgets","buttonProps"]);const[y,s]=p(!1),[d,C]=p(a.value&&typeof a.value=="object"?"node":"function"),l=I(P),[c]=p(()=>{const i=new w({control:!0,widgets:o,isFunction:!0});return l&&("platform"in l&&(i.platform=l.platform),i.settingStore.pageSchema={type:"object",properties:{argumentList:{type:"array",title:"\u51FD\u6570\u5165\u53C2",formGenerateProps:{to:"Modal"},items:{type:"object",properties:{name:{type:"string",title:"\u53C2\u6570\u540D\u79F0"},schema:{type:"string",title:"\u53C2\u6570\u63CF\u8FF0\uFF08Schema\uFF09",format:"schema"}}}}}}),i.settingStore.title="\u53C2\u6570\u8BBE\u7F6E",i});return q(()=>{!a.value||typeof a.value=="object"&&c.setData(a.value)},[a.value]),m("div",{children:[m(f.Group,{style:{marginBottom:10},value:d,onChange:C,children:[n(f,{value:"function",children:"Function"}),n(f,{value:"node",children:"FunctionNode"})]}),d==="function"?n(S,b({},a)):n(h,D(b({type:"primary",icon:n(O,{}),onClick:()=>{s(!0)}},r),{children:"FunctionNode"})),n(F,{visible:y,alignCenter:!0,title:"(...args) => ReactNode",focusLock:!1,className:$.module,onCancel:()=>{s(!1)},onConfirm:()=>{a.onChange&&a.onChange(c.getData()),s(!1)},children:n(j,{store:c})})]})}export{V as default};