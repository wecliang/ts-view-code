import{cs as $}from"./index.428f5c0a.js";import"./vendor.0b417fb8.js";var E=Object.defineProperty,D=Object.defineProperties,B=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,f=(t,n,_)=>n in t?E(t,n,{enumerable:!0,configurable:!0,writable:!0,value:_}):t[n]=_,i=(t,n)=>{for(var _ in n||(n={}))C.call(n,_)&&f(t,_,n[_]);if(m)for(var _ of m(n))w.call(n,_)&&f(t,_,n[_]);return t},p=(t,n)=>D(t,B(n));/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var h=Object.defineProperty,T=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,S=Object.prototype.hasOwnProperty,b=(t,n,_,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of P(n))!S.call(t,o)&&o!==_&&h(t,o,{get:()=>n[o],enumerable:!(e=T(n,o))||e.enumerable});return t},O=(t,n,_)=>(b(t,n,"default"),_&&b(_,n,"default")),a={};O(a,$);var d=["assign","flush","ftl","return","global","import","include","break","continue","local","nested","nt","setting","stop","t","lt","rt","fallback"],l=["attempt","autoesc","autoEsc","compress","comment","escape","noescape","function","if","list","items","sep","macro","noparse","noParse","noautoesc","noAutoEsc","outputformat","switch","visit","recurse"],u={close:">",id:"angle",open:"<"},c={close:"\\]",id:"bracket",open:"\\["},y={close:"[>\\]]",id:"auto",open:"[<\\[]"},g={close:"\\}",id:"dollar",open1:"\\$",open2:"\\{"},A={close:"\\]",id:"bracket",open1:"\\[",open2:"="};function k(t){return{brackets:[["<",">"],["[","]"],["(",")"],["{","}"]],comments:{blockComment:[`${t.open}--`,`--${t.close}`]},autoCloseBefore:`
\r	 }]),.:;=`,autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string"]}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],folding:{markers:{start:new RegExp(`${t.open}#(?:${l.join("|")})([^/${t.close}]*(?!/)${t.close})[^${t.open}]*$`),end:new RegExp(`${t.open}/#(?:${l.join("|")})[\\r\\n\\t ]*>`)}},onEnterRules:[{beforeText:new RegExp(`${t.open}#(?!(?:${d.join("|")}))([a-zA-Z_]+)([^/${t.close}]*(?!/)${t.close})[^${t.open}]*$`),afterText:new RegExp(`^${t.open}/#([a-zA-Z_]+)[\\r\\n\\t ]*${t.close}$`),action:{indentAction:a.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`${t.open}#(?!(?:${d.join("|")}))([a-zA-Z_]+)([^/${t.close}]*(?!/)${t.close})[^${t.open}]*$`),action:{indentAction:a.languages.IndentAction.Indent}}]}}function F(){return{brackets:[["<",">"],["[","]"],["(",")"],["{","}"]],autoCloseBefore:`
\r	 }]),.:;=`,autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string"]}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],folding:{markers:{start:new RegExp(`[<\\[]#(?:${l.join("|")})([^/>\\]]*(?!/)[>\\]])[^<\\[]*$`),end:new RegExp(`[<\\[]/#(?:${l.join("|")})[\\r\\n\\t ]*>`)}},onEnterRules:[{beforeText:new RegExp(`[<\\[]#(?!(?:${d.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`),afterText:new RegExp("^[<\\[]/#([a-zA-Z_]+)[\\r\\n\\t ]*[>\\]]$"),action:{indentAction:a.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`[<\\[]#(?!(?:${d.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`),action:{indentAction:a.languages.IndentAction.Indent}}]}}function r(t,n){const _=`_${t.id}_${n.id}`,e=s=>s.replace(/__id__/g,_),o=s=>{const v=s.source.replace(/__id__/g,_);return new RegExp(v,s.flags)};return{unicode:!0,includeLF:!1,start:e("default__id__"),ignoreCase:!1,defaultToken:"invalid",tokenPostfix:".freemarker2",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],[e("open__id__")]:new RegExp(t.open),[e("close__id__")]:new RegExp(t.close),[e("iOpen1__id__")]:new RegExp(n.open1),[e("iOpen2__id__")]:new RegExp(n.open2),[e("iClose__id__")]:new RegExp(n.close),[e("startTag__id__")]:o(/(@open__id__)(#)/),[e("endTag__id__")]:o(/(@open__id__)(\/#)/),[e("startOrEndTag__id__")]:o(/(@open__id__)(\/?#)/),[e("closeTag1__id__")]:o(/((?:@blank)*)(@close__id__)/),[e("closeTag2__id__")]:o(/((?:@blank)*\/?)(@close__id__)/),blank:/[ \t\n\r]/,keywords:["false","true","in","as","using"],directiveStartCloseTag1:/attempt|recover|sep|auto[eE]sc|no(?:autoe|AutoE)sc|compress|default|no[eE]scape|comment|no[pP]arse/,directiveStartCloseTag2:/else|break|continue|return|stop|flush|t|lt|rt|nt|nested|recurse|fallback|ftl/,directiveStartBlank:/if|else[iI]f|list|for[eE]ach|switch|case|assign|global|local|include|import|function|macro|transform|visit|stop|return|call|setting|output[fF]ormat|nested|recurse|escape|ftl|items/,directiveEndCloseTag1:/if|list|items|sep|recover|attempt|for[eE]ach|local|global|assign|function|macro|output[fF]ormat|auto[eE]sc|no(?:autoe|AutoE)sc|compress|transform|switch|escape|no[eE]scape/,escapedChar:/\\(?:[ntrfbgla\\'"\{=]|(?:x[0-9A-Fa-f]{1,4}))/,asciiDigit:/[0-9]/,integer:/[0-9]+/,nonEscapedIdStartChar:/[\$@-Z_a-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u1FFF\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183-\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3040-\u318F\u31A0-\u31BA\u31F0-\u31FF\u3300-\u337F\u3400-\u4DB5\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,escapedIdChar:/\\[\-\.:#]/,idStartChar:/(?:@nonEscapedIdStartChar)|(?:@escapedIdChar)/,id:/(?:@idStartChar)(?:(?:@idStartChar)|(?:@asciiDigit))*/,specialHashKeys:/\*\*|\*|false|true|in|as|using/,namedSymbols:/&lt;=|&gt;=|\\lte|\\lt|&lt;|\\gte|\\gt|&gt;|&amp;&amp;|\\and|-&gt;|->|==|!=|\+=|-=|\*=|\/=|%=|\+\+|--|<=|&&|\|\||:|\.\.\.|\.\.\*|\.\.<|\.\.!|\?\?|=|<|\+|-|\*|\/|%|\||\.\.|\?|!|&|\.|,|;/,arrows:["->","-&gt;"],delimiters:[";",":",",","."],stringOperators:["lte","lt","gte","gt"],noParseTags:["noparse","noParse","comment"],tokenizer:{[e("default__id__")]:[{include:e("@directive_token__id__")},{include:e("@interpolation_and_text_token__id__")}],[e("fmExpression__id__.directive")]:[{include:e("@blank_and_expression_comment_token__id__")},{include:e("@directive_end_token__id__")},{include:e("@expression_token__id__")}],[e("fmExpression__id__.interpolation")]:[{include:e("@blank_and_expression_comment_token__id__")},{include:e("@expression_token__id__")},{include:e("@greater_operators_token__id__")}],[e("inParen__id__.plain")]:[{include:e("@blank_and_expression_comment_token__id__")},{include:e("@directive_end_token__id__")},{include:e("@expression_token__id__")}],[e("inParen__id__.gt")]:[{include:e("@blank_and_expression_comment_token__id__")},{include:e("@expression_token__id__")},{include:e("@greater_operators_token__id__")}],[e("noSpaceExpression__id__")]:[{include:e("@no_space_expression_end_token__id__")},{include:e("@directive_end_token__id__")},{include:e("@expression_token__id__")}],[e("unifiedCall__id__")]:[{include:e("@unified_call_token__id__")}],[e("singleString__id__")]:[{include:e("@string_single_token__id__")}],[e("doubleString__id__")]:[{include:e("@string_double_token__id__")}],[e("rawSingleString__id__")]:[{include:e("@string_single_raw_token__id__")}],[e("rawDoubleString__id__")]:[{include:e("@string_double_raw_token__id__")}],[e("expressionComment__id__")]:[{include:e("@expression_comment_token__id__")}],[e("noParse__id__")]:[{include:e("@no_parse_token__id__")}],[e("terseComment__id__")]:[{include:e("@terse_comment_token__id__")}],[e("directive_token__id__")]:[[o(/(?:@startTag__id__)(@directiveStartCloseTag1)(?:@closeTag1__id__)/),t.id==="auto"?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${n.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${n.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{cases:{"@noParseTags":{token:"tag",next:e("@noParse__id__.$3")},"@default":{token:"tag"}}},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[o(/(?:@startTag__id__)(@directiveStartCloseTag2)(?:@closeTag2__id__)/),t.id==="auto"?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${n.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${n.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[o(/(?:@startTag__id__)(@directiveStartBlank)(@blank)/),t.id==="auto"?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${n.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${n.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"",next:e("@fmExpression__id__.directive")}]],[o(/(?:@endTag__id__)(@directiveEndCloseTag1)(?:@closeTag1__id__)/),t.id==="auto"?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${n.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${n.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[o(/(@open__id__)(@)/),t.id==="auto"?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${n.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${n.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive",next:e("@unifiedCall__id__")}]],[o(/(@open__id__)(\/@)((?:(?:@id)(?:\.(?:@id))*)?)(?:@closeTag1__id__)/),[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[o(/(@open__id__)#--/),t.id==="auto"?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${n.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${n.id}`}}}:{token:"comment",next:e("@terseComment__id__")}],[o(/(?:@startOrEndTag__id__)([a-zA-Z_]+)/),t.id==="auto"?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${n.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${n.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag.invalid",next:e("@fmExpression__id__.directive")}]]],[e("interpolation_and_text_token__id__")]:[[o(/(@iOpen1__id__)(@iOpen2__id__)/),[{token:n.id==="bracket"?"@brackets.interpolation":"delimiter.interpolation"},{token:n.id==="bracket"?"delimiter.interpolation":"@brackets.interpolation",next:e("@fmExpression__id__.interpolation")}]],[/[\$#<\[\{]|(?:@blank)+|[^\$<#\[\{\n\r\t ]+/,{token:"source"}]],[e("string_single_token__id__")]:[[/[^'\\]/,{token:"string"}],[/@escapedChar/,{token:"string.escape"}],[/'/,{token:"string",next:"@pop"}]],[e("string_double_token__id__")]:[[/[^"\\]/,{token:"string"}],[/@escapedChar/,{token:"string.escape"}],[/"/,{token:"string",next:"@pop"}]],[e("string_single_raw_token__id__")]:[[/[^']+/,{token:"string.raw"}],[/'/,{token:"string.raw",next:"@pop"}]],[e("string_double_raw_token__id__")]:[[/[^"]+/,{token:"string.raw"}],[/"/,{token:"string.raw",next:"@pop"}]],[e("expression_token__id__")]:[[/(r?)(['"])/,{cases:{"r'":[{token:"keyword"},{token:"string.raw",next:e("@rawSingleString__id__")}],'r"':[{token:"keyword"},{token:"string.raw",next:e("@rawDoubleString__id__")}],"'":[{token:"source"},{token:"string",next:e("@singleString__id__")}],'"':[{token:"source"},{token:"string",next:e("@doubleString__id__")}]}}],[/(?:@integer)(?:\.(?:@integer))?/,{cases:{"(?:@integer)":{token:"number"},"@default":{token:"number.float"}}}],[/(\.)(@blank*)(@specialHashKeys)/,[{token:"delimiter"},{token:""},{token:"identifier"}]],[/(?:@namedSymbols)/,{cases:{"@arrows":{token:"meta.arrow"},"@delimiters":{token:"delimiter"},"@default":{token:"operators"}}}],[/@id/,{cases:{"@keywords":{token:"keyword.$0"},"@stringOperators":{token:"operators"},"@default":{token:"identifier"}}}],[/[\[\]\(\)\{\}]/,{cases:{"\\[":{cases:{"$S2==gt":{token:"@brackets",next:e("@inParen__id__.gt")},"@default":{token:"@brackets",next:e("@inParen__id__.plain")}}},"\\]":{cases:p(i(i({},n.id==="bracket"?{"$S2==interpolation":{token:"@brackets.interpolation",next:"@popall"}}:{}),t.id==="bracket"?{"$S2==directive":{token:"@brackets.directive",next:"@popall"}}:{}),{[e("$S1==inParen__id__")]:{token:"@brackets",next:"@pop"},"@default":{token:"@brackets"}})},"\\(":{token:"@brackets",next:e("@inParen__id__.gt")},"\\)":{cases:{[e("$S1==inParen__id__")]:{token:"@brackets",next:"@pop"},"@default":{token:"@brackets"}}},"\\{":{cases:{"$S2==gt":{token:"@brackets",next:e("@inParen__id__.gt")},"@default":{token:"@brackets",next:e("@inParen__id__.plain")}}},"\\}":{cases:p(i({},n.id==="bracket"?{}:{"$S2==interpolation":{token:"@brackets.interpolation",next:"@popall"}}),{[e("$S1==inParen__id__")]:{token:"@brackets",next:"@pop"},"@default":{token:"@brackets"}})}}}],[/\$\{/,{token:"delimiter.invalid"}]],[e("blank_and_expression_comment_token__id__")]:[[/(?:@blank)+/,{token:""}],[/[<\[][#!]--/,{token:"comment",next:e("@expressionComment__id__")}]],[e("directive_end_token__id__")]:[[/>/,t.id==="bracket"?{token:"operators"}:{token:"@brackets.directive",next:"@popall"}],[o(/(\/)(@close__id__)/),[{token:"delimiter.directive"},{token:"@brackets.directive",next:"@popall"}]]],[e("greater_operators_token__id__")]:[[/>/,{token:"operators"}],[/>=/,{token:"operators"}]],[e("no_space_expression_end_token__id__")]:[[/(?:@blank)+/,{token:"",switchTo:e("@fmExpression__id__.directive")}]],[e("unified_call_token__id__")]:[[/(@id)((?:@blank)+)/,[{token:"tag"},{token:"",next:e("@fmExpression__id__.directive")}]],[o(/(@id)(\/?)(@close__id__)/),[{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive",next:"@popall"}]],[/./,{token:"@rematch",next:e("@noSpaceExpression__id__")}]],[e("no_parse_token__id__")]:[[o(/(@open__id__)(\/#?)([a-zA-Z]+)((?:@blank)*)(@close__id__)/),{cases:{"$S2==$3":[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:""},{token:"@brackets.directive",next:"@popall"}],"$S2==comment":[{token:"comment"},{token:"comment"},{token:"comment"},{token:"comment"},{token:"comment"}],"@default":[{token:"source"},{token:"source"},{token:"source"},{token:"source"},{token:"source"}]}}],[/[^<\[\-]+|[<\[\-]/,{cases:{"$S2==comment":{token:"comment"},"@default":{token:"source"}}}]],[e("expression_comment_token__id__")]:[[/--[>\]]/,{token:"comment",next:"@pop"}],[/[^\->\]]+|[>\]\-]/,{token:"comment"}]],[e("terse_comment_token__id__")]:[[o(/--(?:@close__id__)/),{token:"comment",next:"@popall"}],[/[^<\[\-]+|[<\[\-]/,{token:"comment"}]]}}}function x(t){const n=r(u,t),_=r(c,t),e=r(y,t);return p(i(i(i({},n),_),e),{unicode:!0,includeLF:!1,start:`default_auto_${t.id}`,ignoreCase:!1,defaultToken:"invalid",tokenPostfix:".freemarker2",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:i(i(i({},n.tokenizer),_.tokenizer),e.tokenizer)})}var R={conf:k(u),language:r(u,g)},z={conf:k(c),language:r(c,g)},L={conf:k(u),language:r(u,A)},Z={conf:k(c),language:r(c,A)},M={conf:F(),language:x(g)},N={conf:F(),language:x(A)};export{L as TagAngleInterpolationBracket,R as TagAngleInterpolationDollar,N as TagAutoInterpolationBracket,M as TagAutoInterpolationDollar,Z as TagBracketInterpolationBracket,z as TagBracketInterpolationDollar};
