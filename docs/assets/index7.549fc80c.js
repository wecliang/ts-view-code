import{h as ge,j as se,q as v,J as H,Z as Ue,ak as Te,y as Ve,z as We,A as ye,k as ce,D as me,F as Oe,t as Je,x as Ke,s as Xe,ac as Ze,an as we,bv as Qe,bw as Ye,bx as er,a3 as rr,N as Re,m as Ie}from"./index.742823bc.js";var tr=Object.defineProperty,nr=Object.defineProperties,ar=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,ir=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable,$e=(e,t,r)=>t in e?tr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))ir.call(t,r)&&$e(e,r,t[r]);if(Pe)for(var r of Pe(t))or.call(t,r)&&$e(e,r,t[r]);return e},Y=(e,t)=>nr(e,ar(t));const lr=window.React.useContext,sr=window.React.forwardRef;function cr(e,t){var r=lr(ge).getPrefixCls,a=r("typography"),n=e.className,i=e.style,o=e.children,s=se(a,n);return v("article",{ref:t,style:i,className:s,children:o})}var je=sr(cr);je.displayName="Typography";var ur=je,fr=globalThis&&globalThis.__awaiter||function(e,t,r,a){function n(i){return i instanceof r?i:new r(function(o){o(i)})}return new(r||(r=Promise))(function(i,o){function s(f){try{l(a.next(f))}catch(w){o(w)}}function y(f){try{l(a.throw(f))}catch(w){o(w)}}function l(f){f.done?i(f.value):n(f.value).then(s,y)}l((a=a.apply(e,t||[])).next())})},dr=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,n,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(l){return function(f){return y([l,f])}}function y(l){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,n=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(f){l=[6,f],n=0}finally{a=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};function vr(e){return fr(this,void 0,void 0,function(){var t,r,a,n,i;return dr(this,function(o){switch(o.label){case 0:if(!(navigator.clipboard&&navigator.clipboard.writeText))return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,navigator.clipboard.writeText(e)];case 2:return o.sent(),[2];case 3:return t=o.sent(),console.error(t!=null?t:new DOMException("The request is not allowed","NotAllowedError")),[3,4];case 4:r=document.createElement("span"),r.textContent=e,r.style.whiteSpace="pre",document.body.appendChild(r),a=window.getSelection(),n=window.document.createRange(),a.removeAllRanges(),n.selectNode(r),a.addRange(n),i=!1;try{i=window.document.execCommand("copy")}catch(s){console.log("error",s)}return a.removeAllRanges(),window.document.body.removeChild(r),[2,i?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))]}})})}const pr=window.React;var ke=function(e){return Re(e)||Ie(e)};function ee(e){var t=[""];return pr.Children.forEach(e,function(r){var a=t.length-1,n=t[a];ke(r)&&ke(n)?t[a]=""+n+r:r&&r.props&&r.props.children&&t.push(ee(r.props.children))}),t.join("")}var re=globalThis&&globalThis.__assign||function(){return re=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},re.apply(this,arguments)},hr=globalThis&&globalThis.__read||function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var a=r.call(e),n,i=[],o;try{for(;(t===void 0||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i};const gr=window.React.useState,yr=window.React.useRef,mr=window.React.useEffect;function wr(e){var t=e.children,r=e.copyable,a=e.editable,n=e.ellipsis,i=e.expanding,o=e.setEditing,s=e.onClickExpand,y=e.forceShowExpand,l=e.isEllipsis,f=e.currentContext,w=f===void 0?{}:f,G=Xe(),_=w.getPrefixCls,b=w.locale,O=_("typography"),V=hr(gr(!1),2),I=V[0],z=V[1],R=yr(null),P=H(r)?r:{},A=H(n)?n:{},g=H(a)?a:{},C=Ze(A.expandNodes)?A.expandNodes:[b.Typography.fold,b.Typography.unfold];mr(function(){return function(){clearTimeout(R.current),R.current=null}},[]);function B(D){if(!I){var N=P.text!==void 0?P.text:ee(t);vr(N),z(!0),P.onCopy&&P.onCopy(N,D),R.current=setTimeout(function(){z(!1)},3e3)}}var c=function(D){g.onStart&&g.onStart(ee(t),D),o(!0)},$=P.tooltips||[b.Typography.copy,b.Typography.copied],F=r&&v(we,{content:I?$[1]:$[0],children:v("span",Y(q({},re({className:I?O+"-operation-copied":O+"-operation-copy",onClick:B,role:"button","aria-label":$[0],tabIndex:0},G({onPressEnter:B}))),{children:I?v(Qe,{}):P.icon||v(Ye,{})}))}),x=a&&v(we,{content:b.Typography.edit,children:v("span",Y(q({},re({tabIndex:0,"aria-label":b.Typography.edit,role:"button",className:O+"-operation-edit",onClick:c},G({onPressEnter:c}))),{children:v(er,{})}))}),M=y||A.expandable&&l?v("a",Y(q({},re({className:O+"-operation-expand",onClick:s,role:"button",tabIndex:0,"aria-label":b.Typography.unfold},G({onPressEnter:s}))),{children:i?C[0]:C[1]})):null;return ce(Oe,{children:[M,x,F]})}const br=window.React.useEffect,Er=window.React.useRef;function _r(e){var t=e.prefixCls,r=e.children,a=e.setEditing,n=e.editableConfig,i=se(t+"-typography",t+"-edit-content"),o=ee(r),s=Er(null);br(function(){if(s.current&&s.current.focus&&s.current.focus(),s.current&&s.current.dom){var w=s.current.dom.value.length;s.current.dom.setSelectionRange(w,w)}},[]);function y(){a(!1),n.onEnd&&n.onEnd(o)}function l(w){n.onChange&&n.onChange(w)}function f(){y()}return v("div",{className:i,children:v(Ve.TextArea,{onBlur:f,ref:s,value:o,autoSize:!0,onChange:l,onPressEnter:y})})}var xr=globalThis&&globalThis.__read||function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var a=r.call(e),n,i=[],o;try{for(;(t===void 0||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i};const Cr=window.React.useMemo;var Nr=function(e,t){if(typeof window!="undefined"&&window.CSS&&window.CSS.supports)return me(t)?window.CSS.supports(e):window.CSS.supports(e,t);if(typeof document!="undefined"&&document.createElement){var r=document.createElement("div");return r.setAttribute("style",e+":"+t+";"),typeof r.style[e]!="undefined"}return!1},Sr={display:" -webkit-box","-webkit-line-clamp":2},Tr=function(){return Object.entries(Sr).every(function(e){var t=xr(e,2),r=t[0],a=t[1];return Nr(r,a)})};function Me(e){var t=e.cssEllipsis,r=e.ellipsisStr,a=r===void 0?"...":r,n=e.suffix,i=e.rows,o=Cr(function(){return!t||i>1&&!Tr()?!1:a==="..."&&!n},[a,t,i,n]),s={textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},y={textOverflow:"ellipsis",whiteSpace:"normal",overflow:"hidden",WebkitLineClamp:""+e.rows,WebkitBoxOrient:"vertical",display:"-webkit-box"};return{simpleEllipsis:o,ellipsisStyle:o?e.rows>1?y:s:{}}}var U=globalThis&&globalThis.__assign||function(){return U=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},U.apply(this,arguments)},te=globalThis&&globalThis.__read||function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var a=r.call(e),n,i=[],o;try{for(;(t===void 0||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i};const Or=window.React,De=window.React.useMemo,be=window.React.useRef,ue=window.React.useState;var Rr="hxj",h;(function(e){e[e.INIT=0]="INIT",e[e.BEFORE_MEASURE=1]="BEFORE_MEASURE",e[e.MEASURING=2]="MEASURING",e[e.MEASURE_END=3]="MEASURE_END",e[e.NO_NEED_ELLIPSIS=4]="NO_NEED_ELLIPSIS"})(h||(h={}));function Ir(e){var t=e.children,r=e.rows,a=r===void 0?1:r,n=e.width,i=e.expanding,o=e.renderMeasureContent,s=e.simpleEllipsis,y=e.onEllipsis,l=e.suffix,f=e.expandNodes,w=e.expandable,G=e.ellipsisStr,_=be(),b=be(),O=te(ue([0,0,0]),2),V=O[0],I=O[1],z=te(ue(0),2),R=z[0],P=z[1],A=te(ue(h.NO_NEED_ELLIPSIS),2),g=A[0],C=A[1],B=te(V,3),c=B[0],$=B[1],F=B[2],x=te(ue(!1),2),M=x[0],D=x[1],N=De(function(){return Or.Children.toArray(t)},[t]),ne=be(0),ae=Me({rows:a,cssEllipsis:!0}).ellipsisStyle;Te(function(){y&&y(M)},[M]);var W=function(u){return Re(u)||Ie(u)},de=function(u){var p=0;return u.forEach(function(m){W?p+=String(m).length:p+=1}),p},E=De(function(){return de(N)},[N]),X=We(function(u){return I(u)}),Z=function(u){var p=[],m=0;if(u>=E)return N;for(var L in N){var j=N[L];if(m>=u)return p;var k=W(j)?String(j).length:1;if(k>u-m)return p.push(String(j).slice(0,u-m)),m=u,p;m+=k,p.push(j)}return p},ve=function(){var u,p;if(R){if(g===h.INIT){var m=a*R,L=(u=b.current)===null||u===void 0?void 0:u.offsetHeight,j=L>m;!j||s||i?(C(h.MEASURE_END),D(j),I([0,E,E])):(D(!0),C(h.BEFORE_MEASURE))}else if(g===h.BEFORE_MEASURE){var k=_==null?void 0:_.current.offsetWidth,J=a*n;if(k>a*n){var K=Math.max(J/k-.1,0),le=Math.min(J/k+.1,1),He=Math.floor(K*E),qe=Math.ceil(le*E),Ge=Math.floor((He+qe)/2);ne.current=Ge}C(h.MEASURING)}else if(g===h.MEASURING)if(c!==F-1){var L=(p=b.current)===null||p===void 0?void 0:p.offsetHeight,m=a*R,pe=c,he=F;L<=m?pe=$:he=$;var ze=Math.floor((he+pe)/2);X([pe,ze,he])}else X([c,c,c]),C(h.MEASURE_END)}};ye(function(){e.rows&&n?(I([0,Math.floor(E/2),E]),C(h.INIT)):C(h.NO_NEED_ELLIPSIS)},[E,s,i,n,l,f,w,G,e.rows]),ye(function(){if(_.current&&g===h.INIT){var u=_.current.offsetHeight;P(u)}},[g]),ye(function(){ve()},[g,$,c,F,R]);var Q={zIndex:-999,position:"fixed",opacity:0,padding:0,margin:0},ie=U({whiteSpace:"nowrap"},Q),oe=s?U({textOverflow:"clip"},Q):Q,d;if(g===h.INIT||g===h.BEFORE_MEASURE)d=ce("div",{children:[v("div",{ref:_,style:ie,children:g===h.INIT?Rr:o(t,!1)}),v("div",{ref:b,style:U({width:n},oe),children:o(t,M)})]}),d=d.props.children;else if(g===h.MEASURING){var S=U({height:R*a,width:n},ae);d=ce("div",{children:[v("div",{ref:b,style:U({width:n},oe),children:o(Z($),M)}),v("div",{style:S,children:Z(ne.current)})]}),d=d.props.children}else g===h.MEASURE_END?d=o(Z($),M):g===h.NO_NEED_ELLIPSIS&&(d=o(t,!1));return{ellipsisNode:d,isEllipsis:M,measureStatus:g}}var T=globalThis&&globalThis.__assign||function(){return T=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},T.apply(this,arguments)},Pr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ee=globalThis&&globalThis.__read||function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var a=r.call(e),n,i=[],o;try{for(;(t===void 0||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i};const _e=window.React,Le=window.React.useState,$r=window.React.useContext;function jr(e,t){var r=e.type,a=e.bold,n=e.disabled,i=e.mark,o=e.underline,s=e.delete,y=e.code,l=[],f=[];return r&&f.push(t+"-"+r),n&&f.push(t+"-disabled"),a&&l.push("b"),o&&l.push("u"),s&&l.push("del"),y&&l.push("code"),i&&l.push("mark"),{component:l,className:f}}function xe(e){var t=e.componentType,r=e.style,a=e.className,n=e.children,i=e.editable,o=e.ellipsis,s=e.heading,y=e.blockquote,l=Pr(e,["componentType","style","className","children","editable","ellipsis","heading","blockquote"]),f=$r(ge),w=f.getPrefixCls,G=f.rtl,_=w("typography"),b=jr(e,_),O=b.component,V=b.className,I=Ee(Le(!1),2),z=I[0],R=I[1],P=Ee(Le(0),2),A=P[0],g=P[1],C=H(i)?i:{},B="editing"in C?C.editing:z,c=o?T({rows:1,ellipsisStr:"...",cssEllipsis:!1},H(o)?o:{}):{},$=c.wrapper||_e.Fragment,F=Ee(Ue(!1,{defaultValue:c.defaultExpanded,value:c.expanded}),2),x=F[0],M=F[1],D=Me(c),N=D.simpleEllipsis,ne=D.ellipsisStyle,ae=function(d,S){var u=me(c.ellipsisStr)?"...":c.ellipsisStr,p=!me(c.suffix)&&c.suffix;return ce($,{children:[d,S&&!x&&!N?u:"",p,ve(S)]})},W=Ir(T(T({},c),{children:n,expanding:x,width:A,renderMeasureContent:ae,simpleEllipsis:N||x})),de=W.ellipsisNode,E=W.isEllipsis,X=W.measureStatus,Z=function(d){var S=(d==null?void 0:d[0]).contentRect;if(S){var u=O.includes("code")?S.width-18:S.width,p=N&&c.rows===1?[h.NO_NEED_ELLIPSIS]:[h.NO_NEED_ELLIPSIS,h.MEASURE_END];p.includes(X)&&g(u)}};function ve(d){return v(Oe,{children:v(wr,q({},T({},e,{setEditing:R,onClickExpand:Q,expanding:x,isEllipsis:d,currentContext:f})))})}function Q(d){M(!x),e.onClickExpand&&e.onClickExpand(d),c.onExpand&&c.onExpand(!x,d)}Te(function(){c.onEllipsis&&c.onEllipsis(E)},[E]);function ie(d,S,u,p){p===void 0&&(p={});var m=d;return S.forEach(function(L,j){var k=j===0?p:{},J=H(u.mark)&&u.mark.color?T({style:{backgroundColor:u.mark.color}},k):T({},k);m=_e.createElement(L,T({},J),m)}),m}function oe(){var d,S=ee(_e.Children.toArray(n)),u=c.showTooltip,p=H(c.showTooltip)&&c.showTooltip.type==="popover"?"popover":"tooltip",m=H(c.showTooltip)?c.showTooltip.props||{}:{},L=p==="popover"?rr:we,j=E&&!u&&!x?{title:S}:{},k=T({style:r},j),J=E&&u&&!x,K;t==="Paragraph"?K=y?"blockquote":"div":t==="Title"?K="h"+s:t==="Text"&&(K=o?"div":"span");var le=v(Je,{onResize:Z,children:v(K,Y(q({},T({className:se(_,V,(d={},d[_+"-rtl"]=G,d),a)},k,Ke(l,["spacing","type","close","bold","disabled","mark","underline","delete","code","copyable","isEllipsis","expanding","onClickExpand","setEditing","forceShowExpand"]))),{children:N&&X!==h.INIT&&!x&&E?ie(ae(v("span",{style:ne,children:n}),E),O.length?O:["span"],e,{className:_+"-simple-ellipsis"}):ie(de,O,e)}))});return J?v(L,Y(q({},T({content:S},m)),{children:v("span",{children:le})})):le}return B?v(_r,q({},T({},e,{prefixCls:_,setEditing:R,editableConfig:C}))):oe()}var Ce=globalThis&&globalThis.__assign||function(){return Ce=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ce.apply(this,arguments)},kr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const Mr=window.React;function Ae(e){var t=e.heading,r=t===void 0?1:t,a=kr(e,["heading"]);return Mr.createElement(xe,Ce({heading:r},a,{componentType:"Title"}))}Ae.displayName="Title";var Ne=globalThis&&globalThis.__assign||function(){return Ne=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ne.apply(this,arguments)};const Dr=window.React;function Be(e){return Dr.createElement(xe,Ne({},e,{componentType:"Text"}))}Be.displayName="Text";var Se=globalThis&&globalThis.__assign||function(){return Se=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Se.apply(this,arguments)};const Lr=window.React.useContext;function Fe(e){var t=e.spacing,r=t===void 0?"default":t,a=e.className,n=Lr(ge).getPrefixCls,i=n("typography"),o=r==="close"?se(i+"-spacing-close",a):a;return v(xe,q({},Se({},e,{componentType:"Paragraph",className:o})))}Fe.displayName="Paragraph";var fe=ur;fe.Title=Ae;fe.Text=Be;fe.Paragraph=Fe;var Br=fe;export{Br as T};