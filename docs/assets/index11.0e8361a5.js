import{q as a,be as _,bg as v,an as y}from"./index.742823bc.js";import{R as O}from"./index12.f75d2e20.js";import{T as z}from"./index7.549fc80c.js";import"./vendor.0b417fb8.js";var j=Object.defineProperty,x=Object.defineProperties,T=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,g=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,i=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&g(e,t,r[t]);if(b)for(var t of b(r))R.call(r,t)&&g(e,t,r[t]);return e},m=(e,r)=>x(e,T(r)),w=(e,r)=>{var t={};for(var n in e)P.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&b)for(var n of b(e))r.indexOf(n)<0&&R.call(e,n)&&(t[n]=e[n]);return t};const C=window.React.memo,E=window.React.useCallback,$=window.React.useState,S=window.React.useEffect,N=window.React.forwardRef,H=N((e,r)=>{const t=e,{handleAxis:n}=t,c=w(t,["handleAxis"]);return a("span",m(i({ref:r,className:`react-resizable-handle react-resizable-handle-${n}`},c),{onClick:p=>{p.stopPropagation()}}))}),k=e=>{const r=e,{onResize:t,width:n}=r,c=w(r,["onResize","width"]);return n?a(O,{width:n,height:0,handle:a(H,{}),onResize:t,draggableOpts:{enableUserSelectHack:!1},children:a("th",i({},c))}):a("th",i({},c))},A=e=>{const[r,t]=$([]);function n(u){return(f,{size:o})=>{t(h=>{const s=[...h];return s[u]=m(i({},s[u]),{width:o.width}),s})}}const c=E(()=>e.columns?e.columns.map((u,f)=>m(i({},u),{onHeaderCell:o=>({width:o.width,onResize:n(f)})})):[],[e.columns]);return S(()=>{t(c())},[e.columns]),a(_,m(i({className:"table-demo-resizable-column",borderCell:!0,components:{header:{th:k}}},e),{columns:r}))};var D=C(A);const F=window.React.useMemo;function U(e){var r=e,{resizable:t}=r,n=w(r,["resizable"]);const c=t?D:_,p=F(()=>(n.columns||[]).map(u=>{const f=u,{valueEnum:o,copyable:h}=f,s=w(f,["valueEnum","copyable"]);return o?i({render:d=>{const l=o[d]?d:void 0;return o[l]?"color"in o[l]?a(v,{color:o[l].color,children:o[l].label}):o[l].label:l}},s):h?i({render:d=>{if(d){const l=a(z.Paragraph,{ellipsis:s.ellipsis,className:"pro-table-typography",copyable:!0,children:d});return s.ellipsis?a(y,{content:d,children:l}):l}return d}},s):s}),[n.columns]);return a(c,m(i({rowKey:"id"},n),{columns:p}))}export{U as default};
