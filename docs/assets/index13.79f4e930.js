import{g as Y,cn as J,co as W}from"./index.428f5c0a.js";import"./vendor.0b417fb8.js";var j=Y(W),O={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},V=O;function N(t){this.mode=V.MODE_8BIT_BYTE,this.data=t}N.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var Z=N,I={L:1,M:0,Q:3,H:2},M=I;function E(t,e){this.totalCount=t,this.dataCount=e}E.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];E.getRSBlocks=function(t,e){var n=E.getRsBlockTable(t,e);if(n==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,i=new Array,o=0;o<r;o++)for(var u=n[o*3+0],a=n[o*3+1],h=n[o*3+2],f=0;f<u;f++)i.push(new E(a,h));return i};E.getRsBlockTable=function(t,e){switch(e){case M.L:return E.RS_BLOCK_TABLE[(t-1)*4+0];case M.M:return E.RS_BLOCK_TABLE[(t-1)*4+1];case M.Q:return E.RS_BLOCK_TABLE[(t-1)*4+2];case M.H:return E.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};var q=E;function S(){this.buffer=new Array,this.length=0}S.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var n=0;n<e;n++)this.putBit((t>>>e-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var tt=S,p={glog:function(t){if(t<1)throw new Error("glog("+t+")");return p.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return p.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var l=0;l<8;l++)p.EXP_TABLE[l]=1<<l;for(var l=8;l<256;l++)p.EXP_TABLE[l]=p.EXP_TABLE[l-4]^p.EXP_TABLE[l-5]^p.EXP_TABLE[l-6]^p.EXP_TABLE[l-8];for(var l=0;l<255;l++)p.LOG_TABLE[p.EXP_TABLE[l]]=l;var H=p,D=H;function y(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&t[n]==0;)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}y.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=D.gexp(D.glog(this.get(n))+D.glog(t.get(r)));return new y(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=D.glog(this.get(0))-D.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(var r=0;r<t.getLength();r++)n[r]^=D.gexp(D.glog(t.get(r))+e);return new y(n,0).mod(t)}};var x=y,d=O,Q=x,et=H,A={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},v={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(t){for(var e=t<<10;v.getBCHDigit(e)-v.getBCHDigit(v.G15)>=0;)e^=v.G15<<v.getBCHDigit(e)-v.getBCHDigit(v.G15);return(t<<10|e)^v.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;v.getBCHDigit(e)-v.getBCHDigit(v.G18)>=0;)e^=v.G18<<v.getBCHDigit(e)-v.getBCHDigit(v.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return v.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case A.PATTERN000:return(e+n)%2==0;case A.PATTERN001:return e%2==0;case A.PATTERN010:return n%3==0;case A.PATTERN011:return(e+n)%3==0;case A.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case A.PATTERN101:return e*n%2+e*n%3==0;case A.PATTERN110:return(e*n%2+e*n%3)%2==0;case A.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new Q([1],0),n=0;n<t;n++)e=e.multiply(new Q([1,et.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case d.MODE_NUMBER:return 10;case d.MODE_ALPHA_NUM:return 9;case d.MODE_8BIT_BYTE:return 8;case d.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case d.MODE_NUMBER:return 12;case d.MODE_ALPHA_NUM:return 11;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case d.MODE_NUMBER:return 14;case d.MODE_ALPHA_NUM:return 13;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var i=0;i<e;i++){for(var o=0,u=t.isDark(r,i),a=-1;a<=1;a++)if(!(r+a<0||e<=r+a))for(var h=-1;h<=1;h++)i+h<0||e<=i+h||a==0&&h==0||u==t.isDark(r+a,i+h)&&o++;o>5&&(n+=3+o-5)}for(var r=0;r<e-1;r++)for(var i=0;i<e-1;i++){var f=0;t.isDark(r,i)&&f++,t.isDark(r+1,i)&&f++,t.isDark(r,i+1)&&f++,t.isDark(r+1,i+1)&&f++,(f==0||f==4)&&(n+=3)}for(var r=0;r<e;r++)for(var i=0;i<e-6;i++)t.isDark(r,i)&&!t.isDark(r,i+1)&&t.isDark(r,i+2)&&t.isDark(r,i+3)&&t.isDark(r,i+4)&&!t.isDark(r,i+5)&&t.isDark(r,i+6)&&(n+=40);for(var i=0;i<e;i++)for(var r=0;r<e-6;r++)t.isDark(r,i)&&!t.isDark(r+1,i)&&t.isDark(r+2,i)&&t.isDark(r+3,i)&&t.isDark(r+4,i)&&!t.isDark(r+5,i)&&t.isDark(r+6,i)&&(n+=40);for(var s=0,i=0;i<e;i++)for(var r=0;r<e;r++)t.isDark(r,i)&&s++;var P=Math.abs(100*s/e/e-50)/5;return n+=P*10,n}},rt=v,nt=Z,$=q,G=tt,w=rt,it=x;function T(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var g=T.prototype;g.addData=function(t){var e=new nt(t);this.dataList.push(e),this.dataCache=null};g.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]};g.getModuleCount=function(){return this.moduleCount};g.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=$.getRSBlocks(t,this.errorCorrectLevel),n=new G,r=0,i=0;i<e.length;i++)r+=e[i].dataCount;for(var i=0;i<this.dataList.length;i++){var o=this.dataList[i];n.put(o.mode,4),n.put(o.getLength(),w.getLengthInBits(o.mode,t)),o.write(n)}if(n.getLengthInBits()<=r*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())};g.makeImpl=function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=T.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)};g.setupPositionProbePattern=function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4?this.modules[t+n][e+r]=!0:this.modules[t+n][e+r]=!1)};g.getBestMaskPattern=function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=w.getLostPoint(this);(n==0||t>r)&&(t=r,e=n)}return e};g.createMovieClip=function(t,e,n){var r=t.createEmptyMovieClip(e,n),i=1;this.make();for(var o=0;o<this.modules.length;o++)for(var u=o*i,a=0;a<this.modules[o].length;a++){var h=a*i,f=this.modules[o][a];f&&(r.beginFill(0,100),r.moveTo(h,u),r.lineTo(h+i,u),r.lineTo(h+i,u+i),r.lineTo(h,u+i),r.endFill())}return r};g.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)};g.setupPositionAdjustPattern=function(){for(var t=w.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],i=t[n];if(this.modules[r][i]==null)for(var o=-2;o<=2;o++)for(var u=-2;u<=2;u++)o==-2||o==2||u==-2||u==2||o==0&&u==0?this.modules[r+o][i+u]=!0:this.modules[r+o][i+u]=!1}};g.setupTypeNumber=function(t){for(var e=w.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&(e>>n&1)==1;this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(var n=0;n<18;n++){var r=!t&&(e>>n&1)==1;this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}};g.setupTypeInfo=function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=w.getBCHTypeInfo(n),i=0;i<15;i++){var o=!t&&(r>>i&1)==1;i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(var i=0;i<15;i++){var o=!t&&(r>>i&1)==1;i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t};g.mapData=function(t,e){for(var n=-1,r=this.moduleCount-1,i=7,o=0,u=this.moduleCount-1;u>0;u-=2)for(u==6&&u--;;){for(var a=0;a<2;a++)if(this.modules[r][u-a]==null){var h=!1;o<t.length&&(h=(t[o]>>>i&1)==1);var f=w.getMask(e,r,u-a);f&&(h=!h),this.modules[r][u-a]=h,i--,i==-1&&(o++,i=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}};T.PAD0=236;T.PAD1=17;T.createData=function(t,e,n){for(var r=$.getRSBlocks(t,e),i=new G,o=0;o<n.length;o++){var u=n[o];i.put(u.mode,4),i.put(u.getLength(),w.getLengthInBits(u.mode,t)),u.write(i)}for(var a=0,o=0;o<r.length;o++)a+=r[o].dataCount;if(i.getLengthInBits()>a*8)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+a*8+")");for(i.getLengthInBits()+4<=a*8&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=a*8||(i.put(T.PAD0,8),i.getLengthInBits()>=a*8));)i.put(T.PAD1,8);return T.createBytes(i,r)};T.createBytes=function(t,e){for(var n=0,r=0,i=0,o=new Array(e.length),u=new Array(e.length),a=0;a<e.length;a++){var h=e[a].dataCount,f=e[a].totalCount-h;r=Math.max(r,h),i=Math.max(i,f),o[a]=new Array(h);for(var s=0;s<o[a].length;s++)o[a][s]=255&t.buffer[s+n];n+=h;var P=w.getErrorCorrectPolynomial(f),R=new it(o[a],P.getLength()-1),c=R.mod(P);u[a]=new Array(P.getLength()-1);for(var s=0;s<u[a].length;s++){var B=s+c.getLength()-u[a].length;u[a][s]=B>=0?c.get(B):0}}for(var m=0,s=0;s<e.length;s++)m+=e[s].totalCount;for(var _=new Array(m),L=0,s=0;s<r;s++)for(var a=0;a<e.length;a++)s<o[a].length&&(_[L++]=o[a][s]);for(var s=0;s<i;s++)for(var a=0;a<e.length;a++)s<u[a].length&&(_[L++]=u[a][s]);return _};var ot=T,at=ot,U=I,K=function(t,e){e=e||{};var n=new at(e.typeNumber||-1,e.errorCorrectLevel||U.H);return n.addData(t),n.make(),n};K.ErrorCorrectLevel=U;var ut=K,st=j.jsx,ht=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function ft(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function vt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var z=window.React,C=J.exports,gt=window.ReactDOM,dt=ut;function pt(t){return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1}var b;/^0\.14/.test(z.version)?b=function(e){return e}:b=function(e){return gt.findDOMNode(e)};var k=function(t){vt(e,t);function e(){return ft(this,e),lt(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return ht(e,[{key:"shouldComponentUpdate",value:function(r){var i=this;return Object.keys(e.propTypes).some(function(o){return i.props[o]!==r[o]})}},{key:"componentDidMount",value:function(){this.update()}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"utf16to8",value:function(r){var i,o,u,a;for(i="",u=r.length,o=0;o<u;o++)a=r.charCodeAt(o),a>=1&&a<=127?i+=r.charAt(o):a>2047?(i+=String.fromCharCode(224|a>>12&15),i+=String.fromCharCode(128|a>>6&63),i+=String.fromCharCode(128|a>>0&63)):(i+=String.fromCharCode(192|a>>6&31),i+=String.fromCharCode(128|a>>0&63));return i}},{key:"update",value:function(){var r=this.utf16to8(this.props.value),i=dt(r),o=b(this.refs.canvas),u=o.getContext("2d"),a=i.modules,h=this.props.size/a.length,f=this.props.size/a.length,s=(window.devicePixelRatio||1)/pt(u);if(o.height=o.width=this.props.size*s,u.scale(s,s),a.forEach(function(B,m){B.forEach(function(_,L){u.fillStyle=_?this.props.fgColor:this.props.bgColor;var X=Math.ceil((L+1)*h)-Math.floor(L*h),F=Math.ceil((m+1)*f)-Math.floor(m*f);u.fillRect(Math.round(L*h),Math.round(m*f),X,F)},this)},this),this.props.logo){var P=this,R=this.props.size,c=document.createElement("img");c.src=this.props.logo,c.onload=function(){var B=P.props.logoWidth||R*.2,m=P.props.logoHeight||c.height/c.width*B,_=(R-B)/2,L=(R-m)/2;c.width=B,c.height=m,u.drawImage(c,_,L,B,m)}}}},{key:"render",value:function(){return st("canvas",{style:{height:this.props.size,width:this.props.size},height:this.props.size,width:this.props.size,ref:"canvas"})}}]),e}(z.Component);k.propTypes={value:C.string.isRequired,size:C.number,bgColor:C.string,fgColor:C.string,logo:C.string,logoWidth:C.number,logoHeight:C.number};k.defaultProps={size:128,bgColor:"#FFFFFF",fgColor:"#000000",value:"http://facebook.github.io/react/"};var ct=k,Tt=ct;export{Tt as default};
