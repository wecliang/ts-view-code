import{a$ as _,cf as P,q as l,cg as g}from"./index.742823bc.js";import"./vendor.0b417fb8.js";var O=Object.defineProperty,w=Object.defineProperties,j=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,b=(e,r,a)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,d=(e,r)=>{for(var a in r||(r={}))y.call(r,a)&&b(e,a,r[a]);if(p)for(var a of p(r))u.call(r,a)&&b(e,a,r[a]);return e},c=(e,r)=>w(e,j(r)),v=(e,r)=>{var a={};for(var t in e)y.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&p)for(var t of p(e))r.indexOf(t)<0&&u.call(e,t)&&(a[t]=e[t]);return a};const h=window.React.useEffect,I=window.React.useMemo;function k({widgets:e,list:r,buttonProps:a,value:t,onChange:S}){const[m]=_.useForm(),n=I(()=>{const o={type:"object",properties:{radio:{type:"string",format:"radio",formItemProps:{noStyle:!0}}}},i={};if(Array.isArray(r)){console.log("list",r);for(const s of r)if(s.formItemProps={noStyle:!0},["function","node"].includes(s.format))i[s.format]||(i[s.format]=!0,o.properties[s.format]=c(d({},s),{show:{radio:s.format},formItemProps:c(d({},s.formItemProps),{noStyle:!0,shouldUpdate:["radio"]})}));else if(!Array.isArray(s.type)){const f=s.type||"string";i[f]||(i[f]=!0,o.properties[f]=c(d({type:f,show:{radio:f}},s),{formItemProps:c(d({},s.formItemProps),{noStyle:!0,shouldUpdate:["radio"]})}))}}return o.properties.radio.enum=Object.keys(i),o},[r]);return h(()=>{const o={};switch(typeof t){case"object":Array.isArray(t)?n.properties.node?o.radio="node":o.radio="array":o.radio="object";break;case"string":P(t)?o.radio="function":o.radio="string";break;case"boolean":case"number":o.radio=typeof t;break;case"bigint":o.radio="number";break}if(o.radio&&n.properties[o.radio])o[o.radio]=t,m.setFieldsValue(o);else{const i=Object.keys(n.properties);i[1]&&m.setFieldsValue({radio:i[1]})}},[t,n]),l("div",{children:l(g,{schema:n,form:m,layout:"vertical",generagteProps:{cols:24},onValuesChange:(o,i)=>{var s=i;v(s,["radio"])}})})}export{k as default};
