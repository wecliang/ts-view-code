import{bX as Xe,k as N,q as c,bc as de,F as Ye,bU as Ze,a$ as J,bY as me,aV as ge,bZ as Y,b6 as Z,b_ as et,b$ as tt,c0 as rt,c1 as it,bI as ne,bG as $,bF as j,c2 as he,bT as be,ad as ee,c3 as at,ah as nt,a6 as ot,c4 as st,bV as oe,c5 as lt,bJ as ut,bK as ye,c6 as we,c7 as ct,bM as G,b5 as W,c8 as pt,an as ft}from"./index.428f5c0a.js";import{I as dt,D as mt}from"./image.459ce33c.js";import"./vendor.0b417fb8.js";var gt=Object.defineProperty,ht=Object.defineProperties,bt=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,Se=(e,i,r)=>i in e?gt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,s=(e,i)=>{for(var r in i||(i={}))ve.call(i,r)&&Se(e,r,i[r]);if(te)for(var r of te(i))Pe.call(i,r)&&Se(e,r,i[r]);return e},L=(e,i)=>ht(e,bt(i)),B=(e,i)=>{var r={};for(var a in e)ve.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&te)for(var a of te(e))i.indexOf(a)<0&&Pe.call(e,a)&&(r[a]=e[a]);return r};const Fe=window.React,_e=window.React.useMemo;var ze=e=>{var i=e,{schema:r,toolBarRender:a,headerTitle:u,filterKeys:t,addColumns:n}=i,l=B(i,["schema","toolBarRender","headerTitle","filterKeys","addColumns"]);const b=_e(()=>{let f=Xe(r);if(t){const m=new Map(f.map(P=>[P.dataIndex,P]));f=t.map(P=>m.get(P)).filter(P=>Boolean(P))}return n&&(f=f.concat(n)),f},[r]),_=_e(()=>u||a?N("div",{className:"items-center-between",style:{marginBottom:15},children:[c("div",{children:Array.isArray(u)?u.map(f=>Fe.cloneElement(f,{key:Math.random()})):u||null}),c(de,{children:a?a.map(f=>Fe.cloneElement(f,{key:Math.random()})):null})]}):null,[a,u]);return N(Ye,{children:[_,c(Ze,L(s({columns:b},l),{data:l.data}))]})};const De=window.React,yt=window.React.useEffect,se=window.React.useMemo,wt=window.React.useState;function le(e){var i=e,{form:r,schema:a,generagteProps:u,collapses:t,collapseProps:n,filterKeys:l}=i,b=B(i,["form","schema","generagteProps","collapses","collapseProps","filterKeys"]);const[_]=r?[r]:J.useForm(),f=se(()=>Array.isArray(a)?[]:me(a),[a]),m=se(()=>a&&a.formGenerateProps?s(s({},a.formGenerateProps),u):u,[u,a]),P=se(()=>{if(t){const R=t.map((p,d)=>c(ge.Item,L(s({},p.itemProps),{children:c(Y,s({form:_,cols:8,formItemList:f.filter(O=>p.keys.includes(O.field))},m))}),d));return c(ge,L(s({},n),{children:R}))}else{if(l){const R=new Map(f.map(d=>[d.field,d])),p=l.map(d=>R.get(d)).filter(d=>Boolean(d));return c(Y,s({form:_,cols:8,formItemList:p},m))}return c(Y,s({form:_,cols:8,formItemList:f},m))}},[f,JSON.stringify(l)]);return c(J,L(s({form:_},b),{children:P}))}le.Modal=e=>{var i=e,{trigger:r,onSuccess:a,modalProps:u}=i,t=B(i,["trigger","onSuccess","modalProps"]);const[n,l]=wt(!1),[b]=t.form?[t.form]:J.useForm();return yt(()=>{n||b.clearFields()},[n]),t.schema?N(De.Fragment,{children:[r&&De.cloneElement(r,{onClick:()=>{l(!0)}}),c(Z,L(s({visible:n,title:t.schema.title,onCancel:()=>{l(!1)},escToExit:!0,unmountOnExit:!0,onOk:()=>{b.submit()}},u),{children:c(le,L(s({},t),{onSubmit:(..._)=>{if(a)return b.validate().then(f=>{const m=a(f);if(et(m))return m.then(P=>{l(!1)}).finally(()=>{t.onSubmit&&t.onSubmit(..._)});l(!1),t.onSubmit&&t.onSubmit(..._)})},form:b}))}))]}):null};const vt=window.React.useMemo;var xt=e=>{var i=e,{schema:r,values:a,filterKeys:u}=i,t=B(i,["schema","values","filterKeys"]);const n=vt(()=>{let l=tt(r,a);u&&(l=l.filter(b=>u.includes(b.key)));for(const b of l)switch(b.format){case"image":b.value=c(dt,{width:80,src:b.value});break}return l},[r]);return c(mt,s({title:r.title,data:n},t))},x,Ee,Te,Re;function ue(e,i,r,a){!r||Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function re(e,i,r,a,u){var t={};return Object.keys(a).forEach(function(n){t[n]=a[n]}),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0),t=r.slice().reverse().reduce(function(n,l){return l(e,i,n)||n},t),u&&t.initializer!==void 0&&(t.value=t.initializer?t.initializer.call(u):void 0,t.initializer=void 0),t.initializer===void 0&&(Object.defineProperty(e,i,t),t=null),t}let Pt=(x=class{constructor(){ue(this,"cols",Ee,this),ue(this,"isAll",Te,this),ue(this,"setIsAll",Re,this)}get columnSpan(){return Math.floor(24/this.cols)}},Ee=re(x.prototype,"cols",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 8}}),re(x.prototype,"columnSpan",[rt],Object.getOwnPropertyDescriptor(x.prototype,"columnSpan"),x.prototype),Te=re(x.prototype,"isAll",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Re=re(x.prototype,"setIsAll",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{this.isAll=e}}}),x);const ie=window.React.useMemo,St=window.React.useState;function Ft(e){var i=e,{form:r,schema:a,tableSchema:u,generagteProps:t,filterKeys:n,onSubmit:l,labelWidth:b="120px"}=i,_=B(i,["form","schema","tableSchema","generagteProps","filterKeys","onSubmit","labelWidth"]);const[f]=r?[r]:J.useForm(),[m]=St(()=>new Pt),P=ie(()=>a||it(u),[a,u]);return ne(()=>{const R=()=>{const y=f.getFieldsValue();if(l)return l(y)},p=ie(()=>{let y=[];if(P&&!Array.isArray(P)&&(y=me(P),n)){const S=new Map(y.map(C=>[C.field,C]));y=n.map(C=>S.get(C)).filter(C=>Boolean(C))}return y.map(S=>(S.valueType===he.input&&(S.fieldProps=be.assign({onPressEnter:R},S.fieldProps||{})),be.omit(S,"rules","show","colProps")))},[P,n]),d=ie(()=>({QueryButton:({store:S})=>ne(()=>{const C=p.length>=S.columnSpan;return N(de,{style:{width:"100%"},className:"justify-end",children:[c(ee,{onClick:()=>{f.clearFields()},children:"\u91CD\u7F6E"}),c(at,{type:"primary",onClick:R,children:"\u67E5\u8BE2"},"id"),C&&(S.isAll?N(ee,{type:"text",onClick:()=>S.setIsAll(!1),children:["\u6536\u8D77",c(nt,{})]}):N(ee,{type:"text",onClick:()=>S.setIsAll(!0),children:["\u5C55\u5F00",c(ot,{})]}))]})})}),[p]),O=ie(()=>{const y=m.isAll?p:p.slice(0,m.columnSpan-1),S=()=>m.isAll?(m.columnSpan-y.length%m.columnSpan-1)*m.cols:(m.columnSpan-y.length-1)*m.cols;return c(Y,s({form:f,cols:m.cols,widgets:d,formItemList:[...y,{field:"id",colProps:{span:m.cols,offset:S()},formItemProps:{label:""},valueType:he.input,fieldProps:{store:m},widget:"QueryButton"}]},t))},[p,n,m.isAll]);return p.length===0?null:c(J,L(s({className:"schema-query-form",form:f,labelCol:{style:{maxWidth:b}},wrapperCol:{style:{flex:"1 0 100px"}}},_),{children:O}))})}var w,Ce,$e,Oe,Le,ke,Ke,Ae,Be,je,Ve,Ie,Me,xe,qe,Ne,Je,Ge;function D(e,i,r,a){!r||Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(a):void 0})}function Q(e,i,r){return i=_t(i),i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function _t(e){var i=zt(e,"string");return typeof i=="symbol"?i:String(i)}function zt(e,i){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,i||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function F(e,i,r,a,u){var t={};return Object.keys(a).forEach(function(n){t[n]=a[n]}),t.enumerable=!!t.enumerable,t.configurable=!!t.configurable,("value"in t||t.initializer)&&(t.writable=!0),t=r.slice().reverse().reduce(function(n,l){return l(e,i,n)||n},t),u&&t.initializer!==void 0&&(t.value=t.initializer?t.initializer.call(u):void 0,t.initializer=void 0),t.initializer===void 0&&(Object.defineProperty(e,i,t),t=null),t}let Dt=(w=class{constructor(i){Q(this,"api",void 0),D(this,"platform",Ce,this),D(this,"setPlatform",$e,this),D(this,"pagination",Oe,this),D(this,"setPagination",Le,this),D(this,"loading",ke,this),D(this,"list",Ke,this),D(this,"setList",Ae,this),D(this,"saveLoading",Be,this),D(this,"setSaveLoading",je,this),Q(this,"params",{}),D(this,"getTableData",Ve,this),D(this,"logVisible",Ie,this),Q(this,"logItem",null),D(this,"openLogVisible",Me,this),D(this,"closeLogVisible",xe,this),D(this,"getLogTableData",qe,this),D(this,"getDetail",Ne,this),Q(this,"postApi",r=>{if(this.api.post)return this.api.post(r)}),Q(this,"putApi",(r,a)=>{const u=Object.keys(r);for(const t of u)r[t]===void 0&&(r[t]=null);if(this.api.put)return this.api.put(r,a)}),Q(this,"delApi",r=>{if(this.api.del)return this.api.del(r)}),D(this,"selectedRows",Je,this),D(this,"setSelectedRows",Ge,this),this.api=i||{},this.getTableData()}resetPagination(){this.pagination={page:1,size:10,total:0}}resetParams(){this.params={}}},Ce=F(w.prototype,"platform",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return st.pc}}),$e=F(w.prototype,"setPlatform",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{this.platform=e}}}),Oe=F(w.prototype,"pagination",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{page:1,size:10,total:0}}}),F(w.prototype,"resetPagination",[$],Object.getOwnPropertyDescriptor(w.prototype,"resetPagination"),w.prototype),Le=F(w.prototype,"setPagination",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{this.pagination=s(s({},this.pagination),e)}}}),ke=F(w.prototype,"loading",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ke=F(w.prototype,"list",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ae=F(w.prototype,"setList",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{this.list=e}}}),Be=F(w.prototype,"saveLoading",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),je=F(w.prototype,"setSaveLoading",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{e?this.saveLoading=e:setTimeout($(()=>{this.saveLoading=e}),300)}}}),Ve=F(w.prototype,"getTableData",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>{if(this.logVisible=!1,this.api.find)return this.loading=!0,this.api.find(s({current:this.pagination.page,pageSize:this.pagination.size},this.params)).then(e=>{this.setList(e.list||[]),this.setPagination({total:e.total||0})}).finally($(()=>{this.loading=!1}))}}}),Ie=F(w.prototype,"logVisible",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Me=F(w.prototype,"openLogVisible",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{this.api.log&&(this.logItem=e,this.logVisible=!0)}}}),xe=F(w.prototype,"closeLogVisible",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>this.logVisible=!1}}),qe=F(w.prototype,"getLogTableData",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{if(console.log("getLogTableData",e),this.api.log)return this.api.log(this.logItem,e)}}}),Ne=F(w.prototype,"getDetail",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>this.api.get?this.api.get(e):Promise.resolve(e)}}),Je=F(w.prototype,"selectedRows",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Ge=F(w.prototype,"setSelectedRows",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return e=>{this.selectedRows=e}}}),w);const Et=window.React.useEffect,ce=window.React.useState,Tt={type:"object",properties:{id:{type:"string",title:"\u65E5\u5FD7id",columnProps:{ellipsis:!0}},updatedAt:{type:"string",title:"\u4FEE\u6539\u65F6\u95F4"},username:{type:"string",title:"\u4FEE\u6539\u4EBA"},field:{type:"string",title:"\u4FEE\u6539\u5B57\u6BB5",columnProps:{ellipsis:!0}},description:{type:"string",title:"\u4FEE\u6539\u8BF4\u660E",columnProps:{ellipsis:!0,render:e=>c(ft,{content:e||"\u7528\u6237\u89E6\u53D1\u4FEE\u6539",position:"tl",children:e||"\u7528\u6237\u89E6\u53D1\u4FEE\u6539"})}}}};var Rt=e=>{var i=e,{getTableData:r,params:a}=i,u=B(i,["getTableData","params"]);const[t,n]=ce({page:1,size:10,total:0}),[l,b]=ce([]),[_,f]=ce(!1),m=()=>{let p={page:1,size:10,total:0};return n(p),p},P=p=>{const d=s(s({},t),p);return n(s(s({},t),p)),d},R=p=>{f(!0),r({current:p.page,pageSize:p.size}).then(d=>{b(d.list),p.total=d.total,n(p)}).finally(()=>{f(!1)})};return Et(()=>{if(r){const p=m();R(p)}},[a]),c(ze,s({schema:Tt,loading:_,rowKey:"id",pagination:{sizeCanChange:!0,showTotal:!0,current:t.page,pageSize:t.size,total:t.total,onChange:(p,d)=>{const O=P({page:p,size:d});r&&R(O)}},data:l},u))};const Ct=window.React.forwardRef,$t=window.React.useCallback,Ot=window.React.useEffect,Lt=window.React.useImperativeHandle,H=window.React.useMemo,U=window.React.useState;function kt(e,i){var r=e,{schema:a,schemForm:u,schemaTable:t,queryForm:n,schemaView:l,rowSelection:b,queryFilterKeys:_,tableFilterKeys:f,formFilterKeys:m,viewFilterKeys:P,getToolBarRender:R,modalProps:p,api:d,treeBool:O,treeConfig:y,logProps:S}=r,C=B(r,["schema","schemForm","schemaTable","queryForm","schemaView","rowSelection","queryFilterKeys","tableFilterKeys","formFilterKeys","viewFilterKeys","getToolBarRender","modalProps","api","treeBool","treeConfig","logProps"]);const[o]=U(()=>new Dt(d));return ne(()=>{const[X]=(n==null?void 0:n.form)?[n.form]:J.useForm(),[k,V]=U("post"),[q,g]=U(()=>oe(a)||{}),[z,E]=U(!1),[A,I]=U(!1),[K]=(u==null?void 0:u.form)?[u.form]:J.useForm(),M=H(()=>lt.exports.assign({key:"id",parentKey:"parentId"},y),[y]),pe=H(()=>O?ut(ye(o.list),M.key,M.parentKey):ye(o.list),[o.list,O]);Lt(i,()=>({reload:()=>{o.getTableData()},reloadAndRest:()=>{o.resetPagination(),o.getTableData()},reset:()=>{o.resetPagination(),o.resetParams(),X.clearFields(),o.getTableData()},getTableData:()=>pe,getTableSelectedRow:()=>{const h=(t==null?void 0:t.rowKey)||"id";return{keys:o.selectedRows.map(v=>v[h]),rows:o.selectedRows}}}),[]);const We=$t(h=>{const v=[{title:"\u65B0\u589E",key:"add",hidden:!O||!d.post,onClick:()=>{V("post"),E(!0);let T=oe(a);O&&(T[M.parentKey]=h[M.key]),g(T)}},{title:"\u7F16\u8F91",key:"edit",hidden:!d.put,onClick:()=>o.getDetail(h).then(T=>{g(T),V("put"),E(!0)})},{title:"\u8BE6\u60C5",key:"view",hidden:!d.get,onClick:()=>o.getDetail(h).then(T=>{I(!0),g(T)})},{title:"\u65E5\u5FD7",key:"log",hidden:!d.log,onClick:()=>{o.openLogVisible(h)}},{title:"\u5220\u9664",key:"del",hidden:!d.del,onClick:()=>o.delApi(h).then(()=>{o.getTableData()})}];return C.getOperationList?C.getOperationList(v,h):v},[d,O]),fe=H(()=>{let h=s({},q);const v=Object.keys(q);for(const T of v)q[T]===null&&(h[T]=void 0);return h},[q]);Ot(()=>{z&&(K.clearFields(),K.setFieldsValue(fe))},[z]);const He=H(()=>{const h=()=>{V("post"),E(!0),g(oe(a))};return R?R({add:h}):d.post?[c(ee,{type:"primary",onClick:h,children:"\u65B0\u589E"})]:[]},[a]),Ue=H(()=>{const h={};if(b||(t==null?void 0:t.rowSelection)){const v=t.rowKey||"id";h.rowSelection=s({selectedRowKeys:o.selectedRows.map(T=>T[v]),onChange:(T,ae)=>{o.setSelectedRows(ae)}},t.rowSelection)}return h},[t,b,o.selectedRows]);return N("div",L(s({},C),{children:[c(Ft,s({tableSchema:a,form:X,onSubmit:h=>{var v=h,{name:T}=v,ae=B(v,["name"]);return o.params=L(s({},ae),{name$:T?`%${T}%`:void 0}),o.resetPagination(),o.getTableData()},filterKeys:_},n)),c("div",{className:"page-content",style:{marginTop:20},children:c(ze,s(s({loading:o.loading,schema:a,pagination:{sizeCanChange:!0,showTotal:!0,current:o.pagination.page,pageSize:o.pagination.size,total:o.pagination.total,onChange:(h,v)=>{o.setPagination({page:h,size:v}),o.getTableData()}},data:pe,filterKeys:f,headerTitle:[],toolBarRender:He,addColumns:[{title:"\u64CD\u4F5C",dataIndex:"id",width:140,render:(h,v)=>c("div",{style:{whiteSpace:"nowrap"},children:c(we,{list:We(v),argumentList:[v]})})}]},t),Ue))}),c(Z,L(s({visible:z,title:`${k==="put"?"\u7F16\u8F91":"\u6DFB\u52A0"}${a.title||""}`,style:{width:1e3},confirmLoading:o.saveLoading,onCancel:()=>E(!1),onConfirm:()=>{K.validate().then(h=>{o.setSaveLoading(!0),k==="post"?o.postApi(h).then(v=>{v!==!1&&(E(!1),o.getTableData())}).finally(()=>{o.setSaveLoading(!1)}):o.putApi(h,q).then(v=>{v!==!1&&(E(!1),o.getTableData())}).finally(()=>{o.setSaveLoading(!1)})})}},p),{children:c(ct.Provider,{value:{action:{put:k==="put",post:k==="post"}},children:c(le,s({schema:a,form:K,filterKeys:m,generagteProps:{cols:12},initialValues:fe,labelCol:{style:{maxWidth:120}},wrapperCol:{style:{flex:"1 0 100px"}}},u))})})),c(Z,{title:"\u65E5\u5FD7\u8BB0\u5F55",visible:o.logVisible,onCancel:()=>{o.closeLogVisible()},style:{width:1100},footer:!1,children:o.logVisible&&c(Rt,s({getTableData:o.getLogTableData},S))})]}))})}var Kt=Ct(kt);const At=window.React.forwardRef,Qe=window.React.useMemo,Bt=window.React.useRef;function jt(e,i){var r=e,{apijson:a,notPagination:u}=r,t=B(r,["apijson","notPagination"]);const{tableName:n,uniqueKey:l="id",findParams:b={},postParams:_={},notEdit:f=!1,notAdd:m=!1,notDel:P=!1,delConfirm:R,delMessage:p,notView:d=!1,logging:O=!1}=a,{schemaTable:y,schema:S,treeBool:C,treeConfig:o}=t,X=Qe(()=>{if(!S)return[];const g=(y==null?void 0:y.filterKeys)||t.tableFilterKeys;return g?g.includes(l)?g:[l,...g]:Object.keys(S.properties||{})},[y]),k={find:g=>{var z=g,{pageSize:E,current:A}=z,I=B(z,["pageSize","current"]);return G.post("/apijson/get",{[`${n}[]`]:{query:2,page:A,count:u?0:E,[`${n}`]:s(L(s({},I),{"@column":X.join(",")}),b)},"info@":`/${n}[]/info`}).then(K=>({list:K[n],total:K.info.total}))},get:g=>G.post("/apijson/get",{[`${n}`]:{[l]:g[l]}}).then(z=>s({},z[n])),post:g=>G.post("/apijson/post",{[`${n}`]:s(s({},g),_)}).then(()=>{W.success({content:"\u65B0\u589E\u6210\u529F"})}),put:(g,z)=>{if(C){const{key:E="id",parentKey:A="parentId",errMsg:I}=o||{};if(g[A]==z[E])return W.error(I||"\u4E0D\u80FD\u9009\u62E9\u81EA\u5DF1\u4F5C\u4E3A\u4E0A\u7EA7"),Promise.reject()}return G.post("/apijson/put",{[`${n}`]:s({[`${l}`]:z[l]},g)}).then(()=>{W.success({content:"\u66F4\u65B0\u6210\u529F"})})},del:g=>new Promise((z,E)=>{var A;const I=()=>G.post("/apijson/delete",{[`${n}`]:{[`${l}`]:g[l]}}).then(K=>{W.success({content:"\u5220\u9664\u6210\u529F"}),z(K)}).catch(E);if(R!==!1){const K=(y==null?void 0:y.filterKeys)||t.tableFilterKeys||Object.keys((A=t.schema)==null?void 0:A.properties);let M=`\u8BF7\u786E\u8BA4\u662F\u5426\u8981\u5220\u9664"${g.name||g[K[0]]}"?`;p&&(typeof p=="function"?M=p(g):M=pt(p,g)),Z.confirm({title:M,onOk:I,onCancel:E})}else I()}),log:(g,{current:z,pageSize:E})=>(console.log("pageRef",V),G.get("/log/tableLog",{tablename:n,key:g[l],page:z,size:E}).then(A=>({list:A.list,total:A.total})))},V=i||Bt(),q=Qe(()=>u?s({pagination:!1},y):y,[]);return!n||!S?null:c(Kt,L(s({},t),{ref:V,schemaTable:q,logProps:{addColumns:[{title:"\u8BBE\u7F6E",render:(g,z)=>c(we,{list:[{title:"\u6062\u590D",onClick:()=>{G.post("/log/restoreTableLog",{tablename:n,id:z.id}).then(E=>{W.success("\u6570\u636E\u6062\u590D\u6210\u529F"),V.current&&setTimeout(()=>{V.current.reload()},500)})}}]})}]},api:s({find:k.find,get:d?void 0:k.get,post:m?void 0:k.post,put:f?void 0:k.put,del:P?void 0:k.del,log:O?k.log:void 0},t.api)}))}var Jt=At(jt);export{Jt as SchemaApiJsonPage,le as SchemaForm,Kt as SchemaPage,Ft as SchemaQueryForm,ze as SchemaTable,xt as SchemaView};
