import{bl as de,bm as ke,h as fe,u as me,bn as pe,bo as ge,J as Ve,m as Z,ac as he,j as k,k as w,q as v,s as Fe,bp as De,bq as ze,Z as Ge,x as Ae,D as Me,br as Ue,bs as qe,F as be,bt as Ke,bu as He,a0 as Je}from"./index.742823bc.js";var Ze=Object.defineProperty,Be=Object.defineProperties,Qe=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,we=(r,a,e)=>a in r?Ze(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,G=(r,a)=>{for(var e in a||(a={}))We.call(a,e)&&we(r,e,a[e]);if(ye)for(var e of ye(a))Xe.call(a,e)&&we(r,e,a[e]);return r},B=(r,a)=>Be(r,Qe(a)),g=globalThis&&globalThis.__assign||function(){return g=Object.assign||function(r){for(var a,e=1,i=arguments.length;e<i;e++){a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},g.apply(this,arguments)},Ye=globalThis&&globalThis.__read||function(r,a){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var i=e.call(r),t,u=[],s;try{for(;(a===void 0||a-- >0)&&!(t=i.next()).done;)u.push(t.value)}catch(n){s={error:n}}finally{try{t&&!t.done&&(e=i.return)&&e.call(i)}finally{if(s)throw s.error}}return u};const er=window.React.useState,rr=window.React.useEffect,ar=window.React.useContext,tr=window.React.useRef;window.React.Fragment;var Pe=function(r){return he(r)?r.reduce(function(a,e){return a+(e.span||1)},0):0},nr={layout:"horizontal",column:3,tableLayout:"auto"};function ir(r){var a,e=ar(fe),i=e.getPrefixCls,t=e.componentConfig,u=e.rtl,s=me(r,nr,t==null?void 0:t.Descriptions),n=s.style,V=s.className,b=s.column,E=s.title,I=s.data,j=s.border,p=s.labelStyle,O=s.valueStyle,R=s.colon,y=s.layout,$=s.size,F=s.tableLayout,c=i("descriptions"),M=Ye(er(),2),C=M[0],U=M[1],P=tr(null);rr(function(){return P.current=pe.subscribe(function(o){for(var d=0;d<ge.length;d++){var l=ge[d];if(o[l]){U(l);break}}}),function(){pe.unsubscribe(P.current)}},[]);var m=3;Ve(b)&&(m=b[C]||3),Z(b)&&b>0&&(m=b);var N=[];if(he(I)&&I.length>0&&m){I.forEach(function(o){var d=N[N.length-1],l=Pe(d);l===0?N.push([g(g({},o),{span:o.span?o.span>m?m:o.span:1})]):l===m?N.push([g(g({},o),{span:o.span?o.span>m?m:o.span:1})]):d.push(g(g({},o),{span:o.span?o.span+l>m?m-l:o.span:1}))});var x=N[N.length-1],A=Pe(x);A<m&&(x[x.length-1].span=x[x.length-1].span+m-A)}function q(o,d){return w(be,{children:[v("tr",{className:c+"-row",children:o.map(function(l,L){var S=l.span>1?{colSpan:l.span}:{};return w("td",B(G({},g({key:(l.key||L)+"_label",className:c+"-item-label"},S,{style:p})),{children:[l.label,R]}))})}),v("tr",{className:c+"-row",children:o.map(function(l,L){var S=l.span>1?{colSpan:l.span}:{};return v("td",B(G({},g({key:(l.key||L)+"_value",className:c+"-item-value"},S,{style:O})),{children:l.value}))})})]})}function K(o,d){return v("tr",{className:c+"-row",children:o.map(function(l,L){var S=l.span>1?{colSpan:l.span*2-1}:{};return w(be,{children:[w("td",{className:c+"-item-label",style:p,children:[l.label,R]}),v("td",B(G({},g({className:c+"-item-value"},S,{style:O})),{children:l.value}))]})})},d)}function X(o,d){return v("tr",{className:c+"-row",children:o.map(function(l,L){var S=l.span>1?{colSpan:l.span}:{};return w("td",B(G({},g({key:l.key||L},S,{className:c+"-item"})),{children:[w("div",{className:c+"-item-label-inline",style:p,children:[l.label,R]}),v("div",{className:c+"-item-value-inline",style:O,children:l.value})]}))})},d)}function Y(o,d){return y==="inline-vertical"||y==="inline-horizontal"?X(o,d):y==="vertical"?q(o):K(o,d)}var T=k(c,(a={},a[c+"-border"]=j,a[c+"-layout-"+y]=y,a[c+"-size-"+$]=$,a[c+"-table-layout-fixed"]=F==="fixed",a[c+"-rtl"]=u,a),V);return w("div",{className:T,style:n,children:[E&&v("div",{className:c+"-title",children:E}),v("div",{className:c+"-body",children:v("table",{className:c+"-table",cellPadding:0,cellSpacing:0,children:v("tbody",{children:N.map(function(o,d){return Y(o,d)})})})})]})}ir.displayName="Descriptions";function Ne(r){var a=r.title,e=r.description,i=r.actions,t=a||e,u=i&&i.length,s=t||u;return[s,t,u]}var or=globalThis&&globalThis.__read||function(r,a){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var i=e.call(r),t,u=[],s;try{for(;(a===void 0||a-- >0)&&!(t=i.next()).done;)u.push(t.value)}catch(n){s={error:n}}finally{try{t&&!t.done&&(e=i.return)&&e.call(i)}finally{if(s)throw s.error}}return u};const h=window.React;var sr=function(r){var a,e=r.style,i=r.className,t=r.title,u=r.description,s=r.actions,n=r.prefixCls,V=r.simple,b=or(Ne({title:t,description:u,actions:s}),3),E=b[0],I=b[1],j=b[2];if(!E)return null;var p=n+"-footer",O=k(p,i,(a={},a[p+"-with-actions"]=j,a)),R=function(){var y=h.createElement("div",{className:n+"-actions-list"},s.map(function($,F){return h.createElement("div",{className:n+"-actions-item",key:""+F},$)}));return V?h.createElement("div",{className:n+"-actions-list"},h.createElement(Ke,{prefixCls:n,popup:function(){return y}},h.createElement("div",{className:k(n+"-actions-item",n+"-actions-item-trigger")},h.createElement("span",null,h.createElement(He,null))))):y};return h.createElement("div",{className:O,style:e},I&&h.createElement("div",{className:k(p+"-block",n+"-caption")},t&&h.createElement("div",{className:n+"-caption-title",title:t},t),u&&!V&&h.createElement("div",{className:n+"-caption-description",title:u},u)),j&&h.createElement("div",{className:k(p+"-block",n+"-actions")},R()))},Q=globalThis&&globalThis.__assign||function(){return Q=Object.assign||function(r){for(var a,e=1,i=arguments.length;e<i;e++){a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},Q.apply(this,arguments)},lr=globalThis&&globalThis.__rest||function(r,a){var e={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&a.indexOf(i)<0&&(e[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,i=Object.getOwnPropertySymbols(r);t<i.length;t++)a.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(r,i[t])&&(e[i[t]]=r[i[t]]);return e},_e=globalThis&&globalThis.__read||function(r,a){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var i=e.call(r),t,u=[],s;try{for(;(a===void 0||a-- >0)&&!(t=i.next()).done;)u.push(t.value)}catch(n){s={error:n}}finally{try{t&&!t.done&&(e=i.return)&&e.call(i)}finally{if(s)throw s.error}}return u};const cr=window.React,Ce=window.React.useContext,ne=window.React.useEffect,ur=window.React.useMemo,vr=window.React.useRef;var ie=0,dr={footerPosition:"inner",preview:!0};function fr(r,a){var e,i=Ce(fe),t=i.getPrefixCls,u=i.componentConfig,s=i.rtl,n=me(r,dr,u==null?void 0:u.Image),V=n.style,b=n.className,E=n.src,I=n.width,j=n.height,p=n.title,O=n.description,R=n.actions,y=n.footerPosition,$=n.simple,F=n.loader,c=n.loaderClassName,M=n.error,C=n.preview,U=n.previewProps,P=U===void 0?{}:U,m=n.alt,N=n.onClick,x=n.index,A=n._index,q=n.onError,K=n.onLoad,X=lr(n,["style","className","src","width","height","title","description","actions","footerPosition","simple","loader","loaderClassName","error","preview","previewProps","alt","onClick","index","_index","onError","onLoad"]),Y=Fe(),T=Ce(De),o=T.previewGroup,d=T.handleVisibleChange,l=T.registerPreviewUrl,L=T.registerPreviewProps,S=T.setCurrentIndex,H=P.src||E,D=ur(function(){return Z(x)||Z(A)?(ie=Z(x)?x:A,ie):ie++},[]),xe=_e(Ne({title:p,description:O,actions:R}),1),ee=xe[0],J=ze("beforeLoad"),oe=J.isLoading,re=J.isError,z=J.isLoaded,ae=J.setStatus,se=_e(Ge(!1,{defaultValue:P.defaultVisible,value:P.visible}),2),le=se[0],Se=se[1],ce=Ae(P,["visible","defaultVisible","src","onVisibleChange"]),f=t("image"),Ee=!Me(P.visible),Ie=k(f,(e={},e[f+"-rtl"]=s,e[f+"-simple"]=$,e[f+"-loading"]=oe,e[f+"-loading-error"]=re,e[f+"-with-footer-inner"]=z&&ee&&y==="inner",e[f+"-with-footer-outer"]=z&&ee&&y==="outer",e[f+"-with-preview"]=z&&C&&!re&&!Ee,e),b),te=vr();function Oe(_){ae("loaded"),K&&K(_)}function Re(_){ae("error"),q&&q(_)}function ue(_){C&&o?(S(D),d(!0)):C&&ve(!0),N&&N(_)}function ve(_){P.onVisibleChange&&P.onVisibleChange(_,le),Se(_)}ne(function(){Ue||!te.current||(te.current.src=E,ae("loading"))},[E]),ne(function(){if(!!o){var _=l(D,H,C),Te=L(D,ce);return function(){_(D),Te(D)}}},[o]),ne(function(){!o||l(D,H,C)},[H,C,o]);var Le=w("div",{className:f+"-error",children:[v("div",{className:f+"-error-icon",children:v(qe,{})}),m&&v("div",{className:f+"-error-alt",children:m})]}),je=v("div",{className:f+"-loader",children:w("div",{className:f+"-loader-spin",children:[v(Je,{}),v("div",{className:f+"-loader-spin-text",children:"Loading"})]})}),$e=function(){return F===!0?je:c?v("div",{className:k(f+"-loader",c)}):F||null};return w("div",{className:Ie,style:Object.assign({width:I,height:j},V),ref:a,children:[v("img",G({},Q({ref:te,className:f+"-img",tabIndex:0},Y({onPressEnter:ue}),X,{title:p,width:I,height:j,onLoad:Oe,onError:Re,onClick:ue,alt:m}))),!z&&w("div",{className:f+"-overlay",children:[re&&(M||Le),oe&&$e()]}),z&&ee&&v(sr,{title:p,description:O,actions:R,prefixCls:f,simple:$}),z&&C&&v(de,G({},Q({visible:le,src:H},ce,{onVisibleChange:ve})))]})}var mr=cr.forwardRef(fr),W=mr;W.Preview=de;W.PreviewGroup=ke;W.displayName="Image";var gr=W;export{ir as D,gr as I};
