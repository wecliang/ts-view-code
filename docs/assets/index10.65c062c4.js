import{cb as g,cc as C,k as w,q as f,ad as P,b6 as b,cd as O,ce as y}from"./index.428f5c0a.js";import"./vendor.0b417fb8.js";var S=Object.defineProperty,h=Object.defineProperties,E=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,a,e)=>a in t?S(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,j=(t,a)=>{for(var e in a||(a={}))u.call(a,e)&&d(t,e,a[e]);if(c)for(var e of c(a))p.call(a,e)&&d(t,e,a[e]);return t},x=(t,a)=>h(t,E(a)),R=(t,a)=>{var e={};for(var r in t)u.call(t,r)&&a.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&c)for(var r of c(t))a.indexOf(r)<0&&p.call(t,r)&&(e[r]=t[r]);return e};const D="_module_g263m_1";var A={module:D};const N=window.React.useContext,B=window.React.useEffect,m=window.React.useState;function q(t){var a=t,{isComponent:e,widgets:r,buttonProps:v}=a,o=R(a,["isComponent","widgets","buttonProps"]);const[_,i]=m(!1),n=N(g),[s]=m(()=>{const l=new C({control:e,widgets:r,nodeContent:!e,isComponent:e});return n&&("pageSchema"in n&&(l.settingStore.pageSchema=n.pageSchema),"platform"in n&&(l.platform=n.platform)),l.settingStore.title="\u6A21\u5757\u8BBE\u7F6E",l});return B(()=>{!o.value||(e?s.setData(o.value||{}):Array.isArray(o.value)&&s.setData({list:o.value}))},[o.value]),w("div",{children:[f(P,x(j({type:"primary",icon:f(y,{}),onClick:()=>{i(!0)}},v),{children:"ReactNode"})),f(b,{visible:_,alignCenter:!0,title:e?"\u81EA\u5B9A\u4E49\u7EC4\u4EF6":"ReactNode",focusLock:!1,className:A.module,onCancel:()=>{i(!1)},onConfirm:()=>{o.onChange&&(e?o.onChange(s.getData()):o.onChange(s.getData().list)),i(!1)},children:f(O,{store:s})})]})}export{q as default};
