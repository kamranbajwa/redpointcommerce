/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*!
 * Freetile.js v0.3.1
 * A dynamic layout plugin for jQuery.
 */

(function(b){b.fn.freetile=function(c){if(typeof a[c]==="function"){return a[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)}else{b.error("Method "+c+" does not exist on jQuery.Freetile")}}return this};var a={init:function(e){var d=this,f=a.setupOptions(d,e),g=a.newContent(f.contentToAppend);if(!f.tiled){a.setupContainerBindings(d,f)}if(f.tiled&&g){d.append(g);g.filter(f.selector||"*").filter(f.loadCheckSelector).imagesLoaded(function(){a.positionAll(d,f)})}else{d.children(f.loadCheckSelector).imagesLoaded(function(){a.positionAll(d,f)})}return d},append:function(e){var d=this,f=a.setupOptions(d,e),g=a.newContent(f.contentToAppend);if(f.tiled&&g){d.append(g);g.filter(f.loadCheckSelector).imagesLoaded(function(){a.positionAll(d,f)})}return d},layout:function(d){var c=this,e=a.setupOptions(c,d);a.positionAll(c,e);return c},destroy:function(){var c=this,d=c.data("FreetileData");a.resetElementsStyle(c,d);b(window).off("resize",this.windowResizeCallback);c.off(d.customEvents,this.customEventsCallback);return true},setupOptions:function(d,e){var c=d.data("FreetileData");var f=b.extend(true,{},this.defaults,c,this.reset,e);d.data("FreetileData",f);f.tiled=(c!==undefined);f._animate=f.animate&&f.tiled&&b.isEmptyObject(f.contentToAppend);this.reset.callback=f.persistentCallback&&f.callback?f.callback:function(){};return f},windowResizeCallback:function(c,d,e){clearTimeout(c.data("FreetileTimeout"));c.data("FreetileTimeout",setTimeout(function(){var h=b(window),g=h.width(),f=h.height();if(g!=d||f!=e){d=g,e=f;c.freetile("layout")}},400))},customEventsCallback:function(c){clearTimeout(c.data("FreetileTimeout"));c.data("FreetileTimeout",setTimeout(function(){c.freetile("layout")},400))},setupContainerBindings:function(c,f){if(f.containerResize){var e=b(window),d=e.width(),g=e.height();e.resize(b.proxy(this.windowResizeCallback,c,c,d,g))}if(f.customEvents){c.bind(f.customEvents,b.proxy(this.customEventsCallback,c,c))}return c},newContent:function(c){if((typeof c==="object"&&!b.isEmptyObject(c))||(typeof c==="string"&&b(c).length)){return b(c)}return false},calculatePositions:function(c,d,e){d.each(function(o){var p=b(this),n=0;e.ElementWidth=p.outerWidth(true);e.ElementHeight=p.outerHeight(true);e.ElementTop=0;e.ElementIndex=o;e.IndexStart=0;e.IndexEnd=0;e.BestScore=0;e.TestedTop=0;e.TestedLeft=0;e.TestedTop=e.currentPos[0].top;for(n=1;n<e.currentPos.length&&e.currentPos[n].left<e.ElementWidth;n++){e.TestedTop=Math.max(e.TestedTop,e.currentPos[n].top)}e.ElementTop=e.TestedTop;e.IndexEnd=n;e.BestScore=e.scoreFunction(e);for(var o=1;(o<e.currentPos.length)&&(e.currentPos[o].left+e.ElementWidth<=e.containerWidth);o++){e.TestedLeft=e.currentPos[o].left;e.TestedTop=e.currentPos[o].top;for(n=o+1;(n<e.currentPos.length)&&(e.currentPos[n].left-e.currentPos[o].left<e.ElementWidth);n++){e.TestedTop=Math.max(e.TestedTop,e.currentPos[n].top)}var l=e.scoreFunction(e);if(l>e.BestScore){e.IndexStart=o;e.IndexEnd=n;e.ElementTop=e.TestedTop;e.BestScore=l}}var h=p.position(),q={left:e.currentPos[e.IndexStart].left+e.xPadding,top:e.ElementTop+e.yPadding};if(h.top!=q.top||h.left!=q.left){var k={el:p,f:"css",d:0};if(e._animate&&!p.hasClass("noanim")){var f=p.offset(),m={left:q.left+(f.left-h.left),top:q.top+(f.top-h.top)};if((f.top+e.ElementHeight>e.viewportY&&f.top<e.viewportYH||m.top+e.ElementHeight>e.viewportY&&m.top<e.viewportYH)){k.f="animate";k.d=e.currentDelay;++(e.iteration);e.currentDelay+=e.elementDelay}}k.style=q;e.styleQueue.push(k)}--(e.iteration);var r=e.currentPos[e.IndexEnd-1].top,s=e.currentPos[e.IndexEnd]?e.currentPos[e.IndexEnd].left:e.containerWidth,g=e.currentPos[e.IndexStart].left+e.ElementWidth;e.currentPos[e.IndexStart].top=e.ElementTop+e.ElementHeight;if(g<s){e.currentPos.splice(e.IndexStart+1,e.IndexEnd-e.IndexStart-1,{left:g,top:r})}else{e.currentPos.splice(e.IndexStart+1,e.IndexEnd-e.IndexStart-1)}})},prepareElements:function(c,d,e){d.each(function(){var f=b(this);if(f.is(":visible")){f.css({display:"block"})}}).css({position:"absolute"})},applyStyles:function(f){var e;for(var d=0,c=f.styleQueue.length;d<c;d++){e=f.styleQueue[d];if(e.f=="animate"){e.el.delay(e.d).animate(e.style,b.extend(true,{},f.animationOptions))}else{e.el.css(e.style)}}},positionAll:function(c,g){if(b.isEmptyObject(g.contentToAppend)){var j=g.selector?c.children(g.selector):c.children()}else{var j=g.selector?g.contentToAppend.filter(g.selector):g.contentToAppend}g.ElementsCount=j.length;if(!g.ElementsCount){c.data("FreetilePos",null);if(typeof(g.callback=="function")){g.callback(g)}c[g._animate&&g.containerAnimate?"animate":"css"]({height:"0px"});return c}var d=c.css("display")||"";var f=c.css("visibility")||"";c.css({display:"block",width:"",visibility:"hidden"});g.containerWidth=c.width();var i=c.data("FreetilePos");g.currentPos=!b.isEmptyObject(g.contentToAppend)&&i?i:[{left:0,top:0}];g.xPadding=parseInt(c.css("padding-left"),10);g.yPadding=parseInt(c.css("padding-top"),10);g.viewportY=b(window).scrollTop();g.viewportYH=g.viewportY+b(window).height();g.iteration=j.length;g.currentDelay=0;g.styleQueue=[];g.animationOptions.complete=function(){if(--(g.iteration)<=0){g.callback(g)}};a.prepareElements(c,j,g);a.calculatePositions(c,j,g);a.applyStyles(g);var h={};if(d){h.display=d}if(f){h.visibility=f}if(c.css("position")=="static"){h.position="relative"}if(g.forceWidth&&g.containerWidthStep>0){h.width=g.containerWidthStep*(parseInt(c.width()/g.containerWidthStep,10))}c.css(h);var e=b.map(g.currentPos,function(l,k){return l.top});h={height:Math.max.apply(Math,e)};if(g._animate&&g.containerAnimate){c.stop().animate(h,b.extend(true,{},g.animationOptions))}else{c.css(h)}if(g.iteration<=0){g.callback(g)}c.data("FreetilePos",g.currentPos);j.addClass("tiled");return c},resetElementsStyle:function(c,d){var e;if(b.isEmptyObject(d.contentToAppend)){e=d.selector?c.children(d.selector):c.children()}else{e=d.selector?d.contentToAppend.filter(d.selector):d.contentToAppend}e.each(function(){b(this).attr("style","")})},defaults:{selector:"*",animate:false,elementDelay:0,containerResize:true,containerAnimate:false,customEvents:"",persistentCallback:false,forceWidth:false,containerWidthStep:1,loadCheckSelector:":not(.ignore-load-check)",scoreFunction:function(c){return -(c.TestedTop)}},reset:{animationOptions:{complete:function(){}},callback:function(){},contentToAppend:{}}}})(jQuery);
/*!
 * imagesLoaded PACKAGED v3.0.2
 * JavaScript is all like "You images are done yet or what?"
 */
(function(d){function b(){}function f(h,g){if(c){return g.indexOf(h)}for(var i=g.length;i--;){if(g[i]===h){return i}}return -1}var a=b.prototype,c=Array.prototype.indexOf?!0:!1;a._getEvents=function(){return this._events||(this._events={})},a.getListeners=function(j){var h,k,g=this._getEvents();if("object"==typeof j){h={};for(k in g){g.hasOwnProperty(k)&&j.test(k)&&(h[k]=g[k])}}else{h=g[j]||(g[j]=[])}return h},a.getListenersAsObject=function(h){var g,i=this.getListeners(h);return i instanceof Array&&(g={},g[h]=i),g||i},a.addListener=function(k,h){var g,j=this.getListenersAsObject(k);for(g in j){j.hasOwnProperty(g)&&-1===f(h,j[g])&&j[g].push(h)}return this},a.on=a.addListener,a.defineEvent=function(g){return this.getListeners(g),this},a.defineEvents=function(h){for(var g=0;h.length>g;g+=1){this.defineEvent(h[g])}return this},a.removeListener=function(l,h){var g,k,j=this.getListenersAsObject(l);for(k in j){j.hasOwnProperty(k)&&(g=f(h,j[k]),-1!==g&&j[k].splice(g,1))}return this},a.off=a.removeListener,a.addListeners=function(h,g){return this.manipulateListeners(!1,h,g)},a.removeListeners=function(h,g){return this.manipulateListeners(!0,h,g)},a.manipulateListeners=function(l,h,p){var g,k,j=l?this.removeListener:this.addListener,m=l?this.removeListeners:this.addListeners;if("object"!=typeof h||h instanceof RegExp){for(g=p.length;g--;){j.call(this,h,p[g])}}else{for(g in h){h.hasOwnProperty(g)&&(k=h[g])&&("function"==typeof k?j.call(this,g,k):m.call(this,g,k))}}return this},a.removeEvent=function(j){var h,k=typeof j,g=this._getEvents();if("string"===k){delete g[j]}else{if("object"===k){for(h in g){g.hasOwnProperty(h)&&j.test(h)&&delete g[h]}}else{delete this._events}}return this},a.emitEvent=function(l,h){var m,g,k,j=this.getListenersAsObject(l);for(g in j){if(j.hasOwnProperty(g)){for(m=j[g].length;m--;){k=h?j[g][m].apply(null,h):j[g][m](),k===!0&&this.removeListener(l,j[g][m])}}}return this},a.trigger=a.emitEvent,a.emit=function(h){var g=Array.prototype.slice.call(arguments,1);return this.emitEvent(h,g)},"function"==typeof define&&define.amd?define(function(){return b}):d.EventEmitter=b})(this),function(d){var b=document.documentElement,f=function(){};b.addEventListener?f=function(h,g,i){h.addEventListener(g,i,!1)}:b.attachEvent&&(f=function(g,h,e){g[h+e]=e.handleEvent?function(){var i=d.event;i.target=i.target||i.srcElement,e.handleEvent.call(e,i)}:function(){var i=d.event;i.target=i.target||i.srcElement,e.call(g,i)},g.attachEvent("on"+h,g[h+e])});var a=function(){};b.removeEventListener?a=function(h,g,i){h.removeEventListener(g,i,!1)}:b.detachEvent&&(a=function(j,h,k){j.detachEvent("on"+h,j[h+k]);try{delete j[h+k]}catch(g){j[h+k]=void 0}});var c={bind:f,unbind:a};"function"==typeof define&&define.amd?define(c):d.eventie=c}(this),function(j){function l(h,a){for(var i in a){h[i]=a[i]}return h}function d(a){return"[object Array]"===k.call(a)}function f(o){var h=[];if(d(o)){h=o}else{if("number"==typeof o.length){for(var a=0,n=o.length;n>a;a++){h.push(o[a])}}else{h.push(o)}}return h}function b(p,q){function i(r,t,s){if(!(this instanceof i)){return new i(r,t)}"string"==typeof r&&(r=document.querySelectorAll(r)),this.elements=f(r),this.options=l({},this.options),"function"==typeof t?s=t:l(this.options,t),s&&this.on("always",s),this.getImages(),m&&(this.jqDeferred=new m.Deferred);var a=this;setTimeout(function(){a.check()})}function h(a){this.img=a}i.prototype=new p,i.prototype.options={},i.prototype.getImages=function(){this.images=[];for(var x=0,u=this.elements.length;u>x;x++){var z=this.elements[x];"IMG"===z.nodeName&&this.addImage(z);for(var a=z.querySelectorAll("img"),w=0,v=a.length;v>w;w++){var y=a[w];this.addImage(y)}}},i.prototype.addImage=function(n){var a=new h(n);this.images.push(a)},i.prototype.check=function(){function x(s,n){return u.options.debug&&g&&c.log("confirm",s,n),u.progress(s),y++,y===a&&u.complete(),!0}var u=this,y=0,a=this.images.length;if(this.hasAnyBroken=!1,!a){return this.complete(),void 0}for(var w=0;a>w;w++){var v=this.images[w];v.on("confirm",x),v.check()}},i.prototype.progress=function(a){this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded,this.emit("progress",this,a),this.jqDeferred&&this.jqDeferred.notify(this,a)},i.prototype.complete=function(){var n=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(n,this),this.emit("always",this),this.jqDeferred){var a=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[a](this)}},m&&(m.fn.imagesLoaded=function(r,a){var s=new i(this,r,a);return s.jqDeferred.promise(m(this))});var o={};return h.prototype=new p,h.prototype.check=function(){var n=o[this.img.src];if(n){return this.useCached(n),void 0}if(o[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth){return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0}var a=this.proxyImage=new Image;q.bind(a,"load",this),q.bind(a,"error",this),a.src=this.img.src},h.prototype.useCached=function(n){if(n.isConfirmed){this.confirm(n.isLoaded,"cached was confirmed")}else{var a=this;n.on("confirm",function(r){return a.confirm(r.isLoaded,"cache emitted confirmed"),!0})}},h.prototype.confirm=function(n,a){this.isConfirmed=!0,this.isLoaded=n,this.emit("confirm",this,a)},h.prototype.handleEvent=function(n){var a="on"+n.type;this[a]&&this[a](n)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},h.prototype.unbindProxyEvents=function(){q.unbind(this.proxyImage,"load",this),q.unbind(this.proxyImage,"error",this)},i}var m=j.jQuery,c=j.console,g=c!==void 0,k=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter","eventie"],b):j.imagesLoaded=b(j.EventEmitter,j.eventie)}(window);
/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);
if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42311076-2', 'burak-aydin.com');
  ga('send', 'pageview');

// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

(function(){
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [px]
    stepSize         : 120, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 8,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 20,  // 20
    accelerationMax   : 1,   // 1

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,     // [px]

    // Other
    touchpadSupport   : true,
    fixedBackground   : true, 
    excluded          : ""    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var deltaBuffer = [ 120, 120, 120 ];

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };


/***********************************************
 * SETTINGS
 ***********************************************/

var options = defaultOptions;


/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {

    var disableKeyboard = false; 
    
    // disable keyboard support if anything above requested it
    if (disableKeyboard) {
        removeEvent("keydown", keydown);
    }

    if (options.keyboardSupport && !disableKeyboard) {
        addEvent("keydown", keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (!document.body) return;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();
    initDone = true;

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        // DOMChange (throttle): fix height
        var pending = false;
        var refresh = function () {
            if (!pending && html.scrollHeight != document.height) {
                pending = true; // add a new pending action
                setTimeout(function () {
                    html.style.height = document.height + 'px';
                    pending = false;
                }, 500); // act rarely to stay fast
            }
        };
        html.style.height = 'auto';
        setTimeout(refresh, 10);

        // clearfix
        if (root.offsetHeight <= windowHeight) {
            var underlay = document.createElement("div"); 	
            underlay.style.clear = "both";
            body.appendChild(underlay);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = "scroll";
        html.style.backgroundAttachment = "scroll";
    }
}


/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = +new Date;

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top, delay) {
    
    delay || (delay = 1000);
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = +new Date;
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (30 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = +new Date;
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: +new Date
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollWindow = (elem === document.body);
    
    var step = function (time) {
        
        var now = +new Date;
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (delay / options.frameRate + 1)); 
        } else { 
            pending = false;
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;
    var overflowing = overflowingAncestor(target);
    
    // use default if there's no overflowing
    // element or default action is prevented    
    if (!overflowing || event.defaultPrevented ||
        isNodeName(activeElement, "embed") ||
       (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
        return true;
    }

    var deltaX = event.wheelDeltaX || 0;
    var deltaY = event.wheelDeltaY || 0;
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = event.wheelDelta || 0;
    }

    // check if it's a touchpad scroll that should be ignored
    if (!options.touchpadSupport && isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, -deltaX, -deltaY);
    event.preventDefault();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    if ( /input|textarea|select|embed/i.test(target.nodeName) ||
         target.isContentEditable || 
         event.defaultPrevented   ||
         modifier ) {
      return true;
    }
    // spacebar should trigger button press
    if (isNodeName(target, "button") &&
        event.keyCode === key.spacebar) {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            y = -elem.scrollTop;
            break;
        case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt+10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(elem, x, y);
    event.preventDefault();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/
 
var cache = {}; // cleared out every once in while
setInterval(function () { cache = {}; }, 10 * 1000);

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

function setCache(elems, overflowing) {
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function overflowingAncestor(el) {
    var elems = [];
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = cache[uniqueID(el)];
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                return setCache(elems, document.body); // scrolling root in WebKit
            }
        } else if (el.clientHeight + 10 < el.scrollHeight) {
            overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
                return setCache(elems, el);
            }
        }
    } while (el = el.parentNode);
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, bubble) {
    window.addEventListener(type, fn, (bubble||false));
}

function removeEvent(type, fn, bubble) {
    window.removeEventListener(type, fn, (bubble||false));  
}

function isNodeName(el, tag) {
    return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

var deltaBufferTimer;

function isTouchpad(deltaY) {
    if (!deltaY) return;
    deltaY = Math.abs(deltaY)
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
                        isDivisible(deltaBuffer[1], 120) &&
                        isDivisible(deltaBuffer[2], 120));
    return !allDivisable;
} 

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

var requestFrame = (function () {
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              function (callback, element, delay) {
                  window.setTimeout(callback, delay || (1000/60));
              };
})();


/***********************************************
 * PULSE
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}

var isChrome = /chrome/i.test(window.navigator.userAgent);
var wheelEvent = null;
if ("onwheel" in document.createElement("div"))
	wheelEvent = "wheel";
else if ("onmousewheel" in document.createElement("div"))
	wheelEvent = "mousewheel";

if (wheelEvent && isChrome) {
	addEvent(wheelEvent, wheel);
	addEvent("mousedown", mousedown);
	addEvent("load", init);
}

})();
/*! jQuery UI - v1.11.2 - 2014-12-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, datepicker.js, slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(d.inline?d.dpDiv.parent()[0]:d.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var h=0,l=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=l.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=l.call(arguments,1),r=this;return n=!a&&o.length?e.widget.extend.apply(null,[n].concat(o)):n,a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))}),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var u=!1;e(document).mouseup(function(){u=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!u){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),u=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),u=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.extend(e.ui,{datepicker:{version:"1.11.2"}});var d;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,d=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)
},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,N,M,C,P,A,I,z,H,F,E,W,O,L,j=new Date,R=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),Y=this._get(e,"isRTL"),J=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),U=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),G=1!==V[0]||1!==V[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-U,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-V[0]*V[1]+1,$.getDate())),t=Q&&Q>t?Q:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-q,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><i class='fa fa-chevron-left'></i></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+q,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><i class='fa fa-chevron-right'></i></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:R,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=J?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;V[0]>w;w++){for(k="",this.maxRows=4,T=0;V[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",N="",G){if(N+="<div class='ui-datepicker-group",V[1]>1)switch(T){case 0:N+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case V[1]-1:N+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:N+=" ui-datepicker-group-middle",S=""}N+="'>"}for(N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,Q,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,M+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[C]+"'>"+p[C]+"</span></th>";for(N+=M+"</tr></thead><tbody>",P=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,P)),A=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((A+P)/7),z=G?this.maxRows>I?this.maxRows:I:I,this.maxRows=z,H=this._daylightSavingAdjust(new Date(et,Z,1-A)),F=0;z>F;F++){for(N+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)W=g?g.apply(e.input?e.input[0]:null,[H]):[!0,""],O=H.getMonth()!==Z,L=O&&!y||!W[0]||Q&&Q>H||$&&H>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+(H.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===H.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!v?"":" "+W[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(O&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(O&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===R.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);N+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),N+="</tbody></table>"+(G?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=N}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.2",e.datepicker,e.widget("ui.slider",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-e},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})});
/*
Plugin Name: jQuery Team Slider
Author: Burak Aydin
*/


(function($){

$.fn.teamslider=function(){


	'use strict';

	var defaults={

		times:300,

	};


	var customopt=$.extend(defaults,customopt);

	var slideLeft=182.5;

	var allImage=this.find('.img-inner-wrap').length;

	var currentImage=0;

	var teamimgslider=this.find('.team-img-inner');

	var teamtextslider=this.find('.team-text-inner');

	var teamtextinner=teamtextslider.children('.text-inner-wrap');

	var imginnerwrap=this.find('.img-inner-wrap');



	this.find('.img-inner-wrap div').css({

		width:150,
		height:150

	});

	if($(window).width()<992){

		this.find('.img-inner-wrap div').css({

			width:120,
			height:120

		});

	}
	

	$('.team-wrap').find('.arrow-left').click(function(){

		
		currentImage--;

		if(currentImage<-1){
			currentImage=-1;
		}

		setPosition(currentImage);

	});


	$('.team-wrap').find('.arrow-right').click(function(){

		currentImage++;

		if(currentImage>=allImage-1){

			currentImage=allImage-2;

		}

		setPosition(currentImage);

	});


	if($(window).width()<992){

		slideLeft=152.5;

	}
	


	function setPosition(pos){

		var px=slideLeft*pos;

		var indexImg=pos+1;

		imginnerwrap.removeClass('team-shadow');

		imginnerwrap.eq(indexImg).addClass('team-shadow');


		teamimgslider.stop().animate({

			left:-px

		},{duration:customopt.times});


		teamimgslider.children('.img-inner-wrap').find('div').stop().animate({

			width:150,
			height:150


		},{duration:250});

		


		teamimgslider.children('.img-inner-wrap').eq(indexImg).find('div').stop().animate({

			width:350,
			height:440

		},{duration:250,step:function(){

			teamimgslider.freetile();

		}});	



		if($(window).width()<1200){


			teamimgslider.children('.img-inner-wrap').eq(indexImg).find('div').stop().animate({

			width:320,
			height:397

		},{duration:250,step:function(){

			teamimgslider.freetile();

		}});

		}


		if($(window).width()<992){


			teamimgslider.children('.img-inner-wrap').find('div').stop().animate({

			width:120,
			height:120


		},{duration:250});


			teamimgslider.children('.img-inner-wrap').eq(indexImg).find('div').stop().animate({

			width:300,
			height:370

		},{duration:250,step:function(){

			teamimgslider.freetile();

		}});

		}




		if(currentImage<0){

			teamtextinner.eq(0).fadeIn(300).animate({

				marginLeft:0

			},{duration:300,queue:false});



			teamtextinner.eq(1).stop().fadeOut(300).css('display','none');


		}else if(currentImage==allImage-2){

			teamtextinner.eq(allImage-1).fadeIn(500).animate({

				marginLeft:0

			},{duration:300,queue:false});

			teamtextinner.eq(allImage-2).fadeOut(300).css('display','none');

		}else{

			teamtextinner.stop().css({
				marginLeft:60,
				display:'none'
			});

			
			teamtextinner.eq(indexImg).stop().fadeIn(500).animate({

				marginLeft:0

			},{duration:300,queue:false});

		}


	}
	

	$('.img-inner-wrap').eq(1).find('div').css({

		width:350,
		height:440

	});



	if($(window).width()<1200){

		$('.img-inner-wrap').eq(1).find('div').css({

			width:320,
			height:397

		});

	}


	if($(window).width()<992){

		$('.img-inner-wrap').eq(1).find('div').css({

			width:300,
			height:372

		});

	}



	teamtextinner.eq(1).css('display','block');

	imginnerwrap.eq(1).addClass('team-shadow');


}

})(jQuery);
/*
 * Swiper 2.7.0
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: August 30, 2014
*/

var Swiper = function (selector, params) {
    'use strict';

    /*=========================
      A little bit dirty but required part for IE8 and old FF support
      ===========================*/
    if (!document.body.outerHTML && document.body.__defineGetter__) {
        if (HTMLElement) {
            var element = HTMLElement.prototype;
            if (element.__defineGetter__) {
                element.__defineGetter__('outerHTML', function () { return new XMLSerializer().serializeToString(this); });
            }
        }
    }

    if (!window.getComputedStyle) {
        window.getComputedStyle = function (el, pseudo) {
            this.el = el;
            this.getPropertyValue = function (prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') prop = 'styleFloat';
                if (re.test(prop)) {
                    prop = prop.replace(re, function () {
                        return arguments[2].toUpperCase();
                    });
                }
                return el.currentStyle[prop] ? el.currentStyle[prop] : null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            for (var i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) { return i; }
            }
            return -1;
        };
    }
    if (!document.querySelectorAll) {
        if (!window.jQuery) return;
    }
    function $$(selector, context) {
        if (document.querySelectorAll)
            return (context || document).querySelectorAll(selector);
        else
            return jQuery(selector, context);
    }

    /*=========================
      Check for correct selector
      ===========================*/
    if (typeof selector === 'undefined') return;

    if (!(selector.nodeType)) {
        if ($$(selector).length === 0) return;
    }

     /*=========================
      _this
      ===========================*/
    var _this = this;

     /*=========================
      Default Flags and vars
      ===========================*/
    _this.touches = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
        abs: 0
    };
    _this.positions = {
        start: 0,
        abs: 0,
        diff: 0,
        current: 0
    };
    _this.times = {
        start: 0,
        end: 0
    };

    _this.id = (new Date()).getTime();
    _this.container = (selector.nodeType) ? selector : $$(selector)[0];
    _this.isTouched = false;
    _this.isMoved = false;
    _this.activeIndex = 0;
    _this.centerIndex = 0;
    _this.activeLoaderIndex = 0;
    _this.activeLoopIndex = 0;
    _this.previousIndex = null;
    _this.velocity = 0;
    _this.snapGrid = [];
    _this.slidesGrid = [];
    _this.imagesToLoad = [];
    _this.imagesLoaded = 0;
    _this.wrapperLeft = 0;
    _this.wrapperRight = 0;
    _this.wrapperTop = 0;
    _this.wrapperBottom = 0;
    _this.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;
    var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize;

    /*=========================
      Default Parameters
      ===========================*/
    var defaults = {
        eventTarget: 'wrapper', // or 'container'
        mode : 'horizontal', // or 'vertical'
        touchRatio : 1,
        speed : 300,
        freeMode : false,
        freeModeFluid : false,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        slidesPerView : 1,
        slidesPerGroup : 1,
        slidesPerViewFit: true, //Fit to slide when spv "auto" and slides larger than container
        simulateTouch : true,
        followFinger : true,
        shortSwipes : true,
        longSwipesRatio: 0.5,
        moveStartThreshold: false,
        onlyExternal : false,
        createPagination : true,
        pagination : false,
        paginationElement: 'span',
        paginationClickable: false,
        paginationAsRange: true,
        resistance : true, // or false or 100%
        scrollContainer : false,
        preventLinks : true,
        preventLinksPropagation: false,
        noSwiping : false, // or class
        noSwipingClass : 'swiper-no-swiping', //:)
        initialSlide: 0,
        keyboardControl: false,
        mousewheelControl : false,
        mousewheelControlForceToAxis : false,
        useCSS3Transforms : true,
        // Autoplay
        autoplay: false,
        autoplayDisableOnInteraction: true,
        autoplayStopOnLast: false,
        //Loop mode
        loop: false,
        loopAdditionalSlides: 0,
        // Round length values
        roundLengths: false,
        //Auto Height
        calculateHeight: false,
        //Apply CSS for width and/or height
        cssWidthAndHeight: false, // or true or 'width' or 'height'
        //Images Preloader
        updateOnImagesReady : true,
        //Form elements
        releaseFormElements : true,
        //Watch for active slide, useful when use effects on different slide states
        watchActiveIndex: false,
        //Slides Visibility Fit
        visibilityFullFit : false,
        //Slides Offset
        offsetPxBefore : 0,
        offsetPxAfter : 0,
        offsetSlidesBefore : 0,
        offsetSlidesAfter : 0,
        centeredSlides: false,
        //Queue callbacks
        queueStartCallbacks : false,
        queueEndCallbacks : false,
        //Auto Resize
        autoResize : true,
        resizeReInit : false,
        //DOMAnimation
        DOMAnimation : true,
        //Slides Loader
        loader: {
            slides: [], //array with slides
            slidesHTMLType: 'inner', // or 'outer'
            surroundGroups: 1, //keep preloaded slides groups around view
            logic: 'reload', //or 'change'
            loadAllSlides: false
        },
        // One way swipes
        swipeToPrev: true,
        swipeToNext: true,
        //Namespace
        slideElement: 'div',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        wrapperClass: 'swiper-wrapper',
        paginationElementClass: 'swiper-pagination-switch',
        paginationActiveClass: 'swiper-active-switch',
        paginationVisibleClass: 'swiper-visible-switch'
    };
    params = params || {};
    for (var prop in defaults) {
        if (prop in params && typeof params[prop] === 'object') {
            for (var subProp in defaults[prop]) {
                if (! (subProp in params[prop])) {
                    params[prop][subProp] = defaults[prop][subProp];
                }
            }
        }
        else if (! (prop in params)) {
            params[prop] = defaults[prop];
        }
    }
    _this.params = params;
    if (params.scrollContainer) {
        params.freeMode = true;
        params.freeModeFluid = true;
    }
    if (params.loop) {
        params.resistance = '100%';
    }
    var isH = params.mode === 'horizontal';

    /*=========================
      Define Touch Events
      ===========================*/
    var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
    if (_this.browser.ie10) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
    if (_this.browser.ie11) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];

    _this.touchEvents = {
        touchStart : _this.support.touch || !params.simulateTouch  ? 'touchstart' : desktopEvents[0],
        touchMove : _this.support.touch || !params.simulateTouch ? 'touchmove' : desktopEvents[1],
        touchEnd : _this.support.touch || !params.simulateTouch ? 'touchend' : desktopEvents[2]
    };

    /*=========================
      Wrapper
      ===========================*/
    for (var i = _this.container.childNodes.length - 1; i >= 0; i--) {
        if (_this.container.childNodes[i].className) {
            var _wrapperClasses = _this.container.childNodes[i].className.split(/\s+/);
            for (var j = 0; j < _wrapperClasses.length; j++) {
                if (_wrapperClasses[j] === params.wrapperClass) {
                    wrapper = _this.container.childNodes[i];
                }
            }
        }
    }

    _this.wrapper = wrapper;
    /*=========================
      Slide API
      ===========================*/
    _this._extendSwiperSlide = function  (el) {
        el.append = function () {
            if (params.loop) {
                el.insertAfter(_this.slides.length - _this.loopedSlides);
            }
            else {
                _this.wrapper.appendChild(el);
                _this.reInit();
            }

            return el;
        };
        el.prepend = function () {
            if (params.loop) {
                _this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]);
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else {
                _this.wrapper.insertBefore(el, _this.wrapper.firstChild);
            }
            _this.reInit();
            return el;
        };
        el.insertAfter = function (index) {
            if (typeof index === 'undefined') return false;
            var beforeSlide;

            if (params.loop) {
                beforeSlide = _this.slides[index + 1 + _this.loopedSlides];
                if (beforeSlide) {
                    _this.wrapper.insertBefore(el, beforeSlide);
                }
                else {
                    _this.wrapper.appendChild(el);
                }
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else {
                beforeSlide = _this.slides[index + 1];
                _this.wrapper.insertBefore(el, beforeSlide);
            }
            _this.reInit();
            return el;
        };
        el.clone = function () {
            return _this._extendSwiperSlide(el.cloneNode(true));
        };
        el.remove = function () {
            _this.wrapper.removeChild(el);
            _this.reInit();
        };
        el.html = function (html) {
            if (typeof html === 'undefined') {
                return el.innerHTML;
            }
            else {
                el.innerHTML = html;
                return el;
            }
        };
        el.index = function () {
            var index;
            for (var i = _this.slides.length - 1; i >= 0; i--) {
                if (el === _this.slides[i]) index = i;
            }
            return index;
        };
        el.isActive = function () {
            if (el.index() === _this.activeIndex) return true;
            else return false;
        };
        if (!el.swiperSlideDataStorage) el.swiperSlideDataStorage = {};
        el.getData = function (name) {
            return el.swiperSlideDataStorage[name];
        };
        el.setData = function (name, value) {
            el.swiperSlideDataStorage[name] = value;
            return el;
        };
        el.data = function (name, value) {
            if (typeof value === 'undefined') {
                return el.getAttribute('data-' + name);
            }
            else {
                el.setAttribute('data-' + name, value);
                return el;
            }
        };
        el.getWidth = function (outer, round) {
            return _this.h.getWidth(el, outer, round);
        };
        el.getHeight = function (outer, round) {
            return _this.h.getHeight(el, outer, round);
        };
        el.getOffset = function () {
            return _this.h.getOffset(el);
        };
        return el;
    };

    //Calculate information about number of slides
    _this.calcSlides = function (forceCalcSlides) {
        var oldNumber = _this.slides ? _this.slides.length : false;
        _this.slides = [];
        _this.displaySlides = [];
        for (var i = 0; i < _this.wrapper.childNodes.length; i++) {
            if (_this.wrapper.childNodes[i].className) {
                var _className = _this.wrapper.childNodes[i].className;
                var _slideClasses = _className.split(/\s+/);
                for (var j = 0; j < _slideClasses.length; j++) {
                    if (_slideClasses[j] === params.slideClass) {
                        _this.slides.push(_this.wrapper.childNodes[i]);
                    }
                }
            }
        }
        for (i = _this.slides.length - 1; i >= 0; i--) {
            _this._extendSwiperSlide(_this.slides[i]);
        }
        if (oldNumber === false) return;
        if (oldNumber !== _this.slides.length || forceCalcSlides) {

            // Number of slides has been changed
            removeSlideEvents();
            addSlideEvents();
            _this.updateActiveSlide();
            if (_this.params.pagination) _this.createPagination();
            _this.callPlugins('numberOfSlidesChanged');
        }
    };

    //Create Slide
    _this.createSlide = function (html, slideClassList, el) {
        slideClassList = slideClassList || _this.params.slideClass;
        el = el || params.slideElement;
        var newSlide = document.createElement(el);
        newSlide.innerHTML = html || '';
        newSlide.className = slideClassList;
        return _this._extendSwiperSlide(newSlide);
    };

    //Append Slide
    _this.appendSlide = function (html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).append();
        }
        else {
            return _this.createSlide(html, slideClassList, el).append();
        }
    };
    _this.prependSlide = function (html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).prepend();
        }
        else {
            return _this.createSlide(html, slideClassList, el).prepend();
        }
    };
    _this.insertSlideAfter = function (index, html, slideClassList, el) {
        if (typeof index === 'undefined') return false;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).insertAfter(index);
        }
        else {
            return _this.createSlide(html, slideClassList, el).insertAfter(index);
        }
    };
    _this.removeSlide = function (index) {
        if (_this.slides[index]) {
            if (params.loop) {
                if (!_this.slides[index + _this.loopedSlides]) return false;
                _this.slides[index + _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else _this.slides[index].remove();
            return true;
        }
        else return false;
    };
    _this.removeLastSlide = function () {
        if (_this.slides.length > 0) {
            if (params.loop) {
                _this.slides[_this.slides.length - 1 - _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else _this.slides[_this.slides.length - 1].remove();
            return true;
        }
        else {
            return false;
        }
    };
    _this.removeAllSlides = function () {
        for (var i = _this.slides.length - 1; i >= 0; i--) {
            _this.slides[i].remove();
        }
    };
    _this.getSlide = function (index) {
        return _this.slides[index];
    };
    _this.getLastSlide = function () {
        return _this.slides[_this.slides.length - 1];
    };
    _this.getFirstSlide = function () {
        return _this.slides[0];
    };

    //Currently Active Slide
    _this.activeSlide = function () {
        return _this.slides[_this.activeIndex];
    };

    /*=========================
     Wrapper for Callbacks : Allows additive callbacks via function arrays
     ===========================*/
    _this.fireCallback = function () {
        var callback = arguments[0];
        if (Object.prototype.toString.call(callback) === '[object Array]') {
            for (var i = 0; i < callback.length; i++) {
                if (typeof callback[i] === 'function') {
                    callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        } else if (Object.prototype.toString.call(callback) === '[object String]') {
            if (params['on' + callback]) _this.fireCallback(params['on' + callback], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        } else {
            callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
    };
    function isArray(obj) {
        if (Object.prototype.toString.apply(obj) === '[object Array]') return true;
        return false;
    }

    /**
     * Allows user to add callbacks, rather than replace them
     * @param callback
     * @param func
     * @return {*}
     */
    _this.addCallback = function (callback, func) {
        var _this = this, tempFunc;
        if (_this.params['on' + callback]) {
            if (isArray(this.params['on' + callback])) {
                return this.params['on' + callback].push(func);
            } else if (typeof this.params['on' + callback] === 'function') {
                tempFunc = this.params['on' + callback];
                this.params['on' + callback] = [];
                this.params['on' + callback].push(tempFunc);
                return this.params['on' + callback].push(func);
            }
        } else {
            this.params['on' + callback] = [];
            return this.params['on' + callback].push(func);
        }
    };
    _this.removeCallbacks = function (callback) {
        if (_this.params['on' + callback]) {
            _this.params['on' + callback] = null;
        }
    };

    /*=========================
      Plugins API
      ===========================*/
    var _plugins = [];
    for (var plugin in _this.plugins) {
        if (params[plugin]) {
            var p = _this.plugins[plugin](_this, params[plugin]);
            if (p) _plugins.push(p);
        }
    }
    _this.callPlugins = function (method, args) {
        if (!args) args = {};
        for (var i = 0; i < _plugins.length; i++) {
            if (method in _plugins[i]) {
                _plugins[i][method](args);
            }
        }
    };

    /*=========================
      Windows Phone 8 Fix
      ===========================*/
    if ((_this.browser.ie10 || _this.browser.ie11) && !params.onlyExternal) {
        _this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal' : 'vertical'));
    }

    /*=========================
      Free Mode Class
      ===========================*/
    if (params.freeMode) {
        _this.container.className += ' swiper-free-mode';
    }

    /*==================================================
        Init/Re-init/Resize Fix
    ====================================================*/
    _this.initialized = false;
    _this.init = function (force, forceCalcSlides) {
        var _width = _this.h.getWidth(_this.container, false, params.roundLengths);
        var _height = _this.h.getHeight(_this.container, false, params.roundLengths);
        if (_width === _this.width && _height === _this.height && !force) return;

        _this.width = _width;
        _this.height = _height;

        var slideWidth, slideHeight, slideMaxHeight, wrapperWidth, wrapperHeight, slideLeft;
        var i; // loop index variable to avoid JSHint W004 / W038
        containerSize = isH ? _width : _height;
        var wrapper = _this.wrapper;

        if (force) {
            _this.calcSlides(forceCalcSlides);
        }

        if (params.slidesPerView === 'auto') {
            //Auto mode
            var slidesWidth = 0;
            var slidesHeight = 0;

            //Unset Styles
            if (params.slidesOffset > 0) {
                wrapper.style.paddingLeft = '';
                wrapper.style.paddingRight = '';
                wrapper.style.paddingTop = '';
                wrapper.style.paddingBottom = '';
            }
            wrapper.style.width = '';
            wrapper.style.height = '';
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }

            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - this.slides[0].getWidth(true, params.roundLengths)) / 2;
                    _this.wrapperRight = (containerSize - _this.slides[_this.slides.length - 1].getWidth(true, params.roundLengths)) / 2;
                }
                else {
                    _this.wrapperTop = (containerSize - _this.slides[0].getHeight(true, params.roundLengths)) / 2;
                    _this.wrapperBottom = (containerSize - _this.slides[_this.slides.length - 1].getHeight(true, params.roundLengths)) / 2;
                }
            }

            if (isH) {
                if (_this.wrapperLeft >= 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight >= 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            }
            else {
                if (_this.wrapperTop >= 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom >= 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }
            slideLeft = 0;
            var centeredSlideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];

            slideMaxHeight = 0;
            for (i = 0; i < _this.slides.length; i++) {
                slideWidth = _this.slides[i].getWidth(true, params.roundLengths);
                slideHeight = _this.slides[i].getHeight(true, params.roundLengths);
                if (params.calculateHeight) {
                    slideMaxHeight = Math.max(slideMaxHeight, slideHeight);
                }
                var _slideSize = isH ? slideWidth : slideHeight;
                if (params.centeredSlides) {
                    var nextSlideWidth = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getWidth(true, params.roundLengths);
                    var nextSlideHeight = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getHeight(true, params.roundLengths);
                    var nextSlideSize = isH ? nextSlideWidth : nextSlideHeight;
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize + _this.wrapperLeft);
                        }
                        else {
                            for (var j = 0; j <= Math.floor(_slideSize / (containerSize + _this.wrapperLeft)); j++) {
                                if (j === 0) _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                                else _this.snapGrid.push(slideLeft + _this.wrapperLeft + containerSize * j);
                            }
                        }
                        _this.slidesGrid.push(slideLeft + _this.wrapperLeft);
                    }
                    else {
                        _this.snapGrid.push(centeredSlideLeft);
                        _this.slidesGrid.push(centeredSlideLeft);
                    }
                    centeredSlideLeft += _slideSize / 2 + nextSlideSize / 2;
                }
                else {
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize);
                        }
                        else {
                            if (containerSize !== 0) {
                                for (var k = 0; k <= Math.floor(_slideSize / containerSize); k++) {
                                    _this.snapGrid.push(slideLeft + containerSize * k);
                                }
                            }
                            else {
                                _this.snapGrid.push(slideLeft);
                            }
                        }

                    }
                    else {
                        _this.snapGrid.push(slideLeft);
                    }
                    _this.slidesGrid.push(slideLeft);
                }

                slideLeft += _slideSize;

                slidesWidth += slideWidth;
                slidesHeight += slideHeight;
            }
            if (params.calculateHeight) _this.height = slideMaxHeight;
            if (isH) {
                wrapperSize = slidesWidth + _this.wrapperRight + _this.wrapperLeft;
                wrapper.style.width = (slidesWidth) + 'px';
                wrapper.style.height = (_this.height) + 'px';
            }
            else {
                wrapperSize = slidesHeight + _this.wrapperTop + _this.wrapperBottom;
                wrapper.style.width = (_this.width) + 'px';
                wrapper.style.height = (slidesHeight) + 'px';
            }

        }
        else if (params.scrollContainer) {
            //Scroll Container
            wrapper.style.width = '';
            wrapper.style.height = '';
            wrapperWidth = _this.slides[0].getWidth(true, params.roundLengths);
            wrapperHeight = _this.slides[0].getHeight(true, params.roundLengths);
            wrapperSize = isH ? wrapperWidth : wrapperHeight;
            wrapper.style.width = wrapperWidth + 'px';
            wrapper.style.height = wrapperHeight + 'px';
            slideSize = isH ? wrapperWidth : wrapperHeight;

        }
        else {
            //For usual slides
            if (params.calculateHeight) {
                slideMaxHeight = 0;
                wrapperHeight = 0;
                //ResetWrapperSize
                if (!isH) _this.container.style.height = '';
                wrapper.style.height = '';

                for (i = 0; i < _this.slides.length; i++) {
                    //ResetSlideSize
                    _this.slides[i].style.height = '';
                    slideMaxHeight = Math.max(_this.slides[i].getHeight(true), slideMaxHeight);
                    if (!isH) wrapperHeight += _this.slides[i].getHeight(true);
                }
                slideHeight = slideMaxHeight;
                _this.height = slideHeight;

                if (isH) wrapperHeight = slideHeight;
                else {
                    containerSize = slideHeight;
                    _this.container.style.height = containerSize + 'px';
                }
            }
            else {
                slideHeight = isH ? _this.height : _this.height / params.slidesPerView;
                if (params.roundLengths) slideHeight = Math.ceil(slideHeight);
                wrapperHeight = isH ? _this.height : _this.slides.length * slideHeight;
            }
            slideWidth = isH ? _this.width / params.slidesPerView : _this.width;
            if (params.roundLengths) slideWidth = Math.ceil(slideWidth);
            wrapperWidth = isH ? _this.slides.length * slideWidth : _this.width;
            slideSize = isH ? slideWidth : slideHeight;

            if (params.offsetSlidesBefore > 0) {
                if (isH) _this.wrapperLeft = slideSize * params.offsetSlidesBefore;
                else _this.wrapperTop = slideSize * params.offsetSlidesBefore;
            }
            if (params.offsetSlidesAfter > 0) {
                if (isH) _this.wrapperRight = slideSize * params.offsetSlidesAfter;
                else _this.wrapperBottom = slideSize * params.offsetSlidesAfter;
            }
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }
            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - slideSize) / 2;
                    _this.wrapperRight = (containerSize - slideSize) / 2;
                }
                else {
                    _this.wrapperTop = (containerSize - slideSize) / 2;
                    _this.wrapperBottom = (containerSize - slideSize) / 2;
                }
            }
            if (isH) {
                if (_this.wrapperLeft > 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight > 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            }
            else {
                if (_this.wrapperTop > 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom > 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }

            wrapperSize = isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft : wrapperHeight + _this.wrapperTop + _this.wrapperBottom;
            if (parseFloat(wrapperWidth) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'height')) {
                wrapper.style.width = wrapperWidth + 'px';
            }
            if (parseFloat(wrapperHeight) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'width')) {
                wrapper.style.height = wrapperHeight + 'px';
            }
            slideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];
            for (i = 0; i < _this.slides.length; i++) {
                _this.snapGrid.push(slideLeft);
                _this.slidesGrid.push(slideLeft);
                slideLeft += slideSize;
                if (parseFloat(slideWidth) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'height')) {
                    _this.slides[i].style.width = slideWidth + 'px';
                }
                if (parseFloat(slideHeight) > 0 && (!params.cssWidthAndHeight || params.cssWidthAndHeight === 'width')) {
                    _this.slides[i].style.height = slideHeight + 'px';
                }
            }

        }

        if (!_this.initialized) {
            _this.callPlugins('onFirstInit');
            if (params.onFirstInit) _this.fireCallback(params.onFirstInit, _this);
        }
        else {
            _this.callPlugins('onInit');
            if (params.onInit) _this.fireCallback(params.onInit, _this);
        }
        _this.initialized = true;
    };

    _this.reInit = function (forceCalcSlides) {
        _this.init(true, forceCalcSlides);
    };

    _this.resizeFix = function (reInit) {
        _this.callPlugins('beforeResizeFix');

        _this.init(params.resizeReInit || reInit);

        // swipe to active slide in fixed mode
        if (!params.freeMode) {
            _this.swipeTo((params.loop ? _this.activeLoopIndex : _this.activeIndex), 0, false);
            // Fix autoplay
            if (params.autoplay) {
                if (_this.support.transitions && typeof autoplayTimeoutId !== 'undefined') {
                    if (typeof autoplayTimeoutId !== 'undefined') {
                        clearTimeout(autoplayTimeoutId);
                        autoplayTimeoutId = undefined;
                        _this.startAutoplay();
                    }
                }
                else {
                    if (typeof autoplayIntervalId !== 'undefined') {
                        clearInterval(autoplayIntervalId);
                        autoplayIntervalId = undefined;
                        _this.startAutoplay();
                    }
                }
            }
        }
        // move wrapper to the beginning in free mode
        else if (_this.getWrapperTranslate() < -maxWrapperPosition()) {
            _this.setWrapperTransition(0);
            _this.setWrapperTranslate(-maxWrapperPosition());
        }

        _this.callPlugins('afterResizeFix');
    };

    /*==========================================
        Max and Min Positions
    ============================================*/
    function maxWrapperPosition() {
        var a = (wrapperSize - containerSize);
        if (params.freeMode) {
            a = wrapperSize - containerSize;
        }
        // if (params.loop) a -= containerSize;
        if (params.slidesPerView > _this.slides.length && !params.centeredSlides) {
            a = 0;
        }
        if (a < 0) a = 0;
        return a;
    }

    /*==========================================
        Event Listeners
    ============================================*/
    function initEvents() {
        var bind = _this.h.addEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
        //Touch Events
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                bind(eventTarget, 'touchstart', onTouchStart);
                bind(eventTarget, 'touchmove', onTouchMove);
                bind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                bind(eventTarget, 'mousedown', onTouchStart);
                bind(document, 'mousemove', onTouchMove);
                bind(document, 'mouseup', onTouchEnd);
            }
        }
        else {
            bind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            bind(document, _this.touchEvents.touchMove, onTouchMove);
            bind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }

        //Resize Event
        if (params.autoResize) {
            bind(window, 'resize', _this.resizeFix);
        }
        //Slide Events
        addSlideEvents();
        //Mousewheel
        _this._wheelEvent = false;
        if (params.mousewheelControl) {
            if (document.onmousewheel !== undefined) {
                _this._wheelEvent = 'mousewheel';
            }
            if (!_this._wheelEvent) {
                try {
                    new WheelEvent('wheel');
                    _this._wheelEvent = 'wheel';
                } catch (e) {}
            }
            if (!_this._wheelEvent) {
                _this._wheelEvent = 'DOMMouseScroll';
            }
            if (_this._wheelEvent) {
                bind(_this.container, _this._wheelEvent, handleMousewheel);
            }
        }

        //Keyboard
        function _loadImage(src) {
            var image = new Image();
            image.onload = function () {
                if (typeof _this === 'undefined' || _this === null) return;
                if (_this.imagesLoaded !== undefined) _this.imagesLoaded++;
                if (_this.imagesLoaded === _this.imagesToLoad.length) {
                    _this.reInit();
                    if (params.onImagesReady) _this.fireCallback(params.onImagesReady, _this);
                }
            };
            image.src = src;
        }

        if (params.keyboardControl) {
            bind(document, 'keydown', handleKeyboardKeys);
        }
        if (params.updateOnImagesReady) {
            _this.imagesToLoad = $$('img', _this.container);

            for (var i = 0; i < _this.imagesToLoad.length; i++) {
                _loadImage(_this.imagesToLoad[i].getAttribute('src'));
            }
        }
    }

    //Remove Event Listeners
    _this.destroy = function () {
        var unbind = _this.h.removeEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
        //Touch Events
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                unbind(eventTarget, 'touchstart', onTouchStart);
                unbind(eventTarget, 'touchmove', onTouchMove);
                unbind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                unbind(eventTarget, 'mousedown', onTouchStart);
                unbind(document, 'mousemove', onTouchMove);
                unbind(document, 'mouseup', onTouchEnd);
            }
        }
        else {
            unbind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            unbind(document, _this.touchEvents.touchMove, onTouchMove);
            unbind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }

        //Resize Event
        if (params.autoResize) {
            unbind(window, 'resize', _this.resizeFix);
        }

        //Init Slide Events
        removeSlideEvents();

        //Pagination
        if (params.paginationClickable) {
            removePaginationEvents();
        }

        //Mousewheel
        if (params.mousewheelControl && _this._wheelEvent) {
            unbind(_this.container, _this._wheelEvent, handleMousewheel);
        }

        //Keyboard
        if (params.keyboardControl) {
            unbind(document, 'keydown', handleKeyboardKeys);
        }

        //Stop autoplay
        if (params.autoplay) {
            _this.stopAutoplay();
        }
        _this.callPlugins('onDestroy');

        //Destroy variable
        _this = null;
    };

    function addSlideEvents() {
        var bind = _this.h.addEventListener,
            i;

        //Prevent Links Events
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                bind(links[i], 'click', preventClick);
            }
        }
        //Release Form Elements
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }

        //Slide Clicks & Touches
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
    }
    function removeSlideEvents() {
        var unbind = _this.h.removeEventListener,
            i;

        //Slide Clicks & Touches
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
        //Release Form Elements
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }
        //Prevent Links Events
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                unbind(links[i], 'click', preventClick);
            }
        }
    }
    /*==========================================
        Keyboard Control
    ============================================*/
    function handleKeyboardKeys(e) {
        var kc = e.keyCode || e.charCode;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
        if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
            var inView = false;
            //Check that swiper should be inside of visible area of window
            var swiperOffset = _this.h.getOffset(_this.container);
            var scrollLeft = _this.h.windowScroll().left;
            var scrollTop = _this.h.windowScroll().top;
            var windowWidth = _this.h.windowWidth();
            var windowHeight = _this.h.windowHeight();
            var swiperCoord = [
                [swiperOffset.left, swiperOffset.top],
                [swiperOffset.left + _this.width, swiperOffset.top],
                [swiperOffset.left, swiperOffset.top + _this.height],
                [swiperOffset.left + _this.width, swiperOffset.top + _this.height]
            ];
            for (var i = 0; i < swiperCoord.length; i++) {
                var point = swiperCoord[i];
                if (
                    point[0] >= scrollLeft && point[0] <= scrollLeft + windowWidth &&
                    point[1] >= scrollTop && point[1] <= scrollTop + windowHeight
                ) {
                    inView = true;
                }

            }
            if (!inView) return;
        }
        if (isH) {
            if (kc === 37 || kc === 39) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 39) _this.swipeNext();
            if (kc === 37) _this.swipePrev();
        }
        else {
            if (kc === 38 || kc === 40) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 40) _this.swipeNext();
            if (kc === 38) _this.swipePrev();
        }
    }

    _this.disableKeyboardControl = function () {
        params.keyboardControl = false;
        _this.h.removeEventListener(document, 'keydown', handleKeyboardKeys);
    };

    _this.enableKeyboardControl = function () {
        params.keyboardControl = true;
        _this.h.addEventListener(document, 'keydown', handleKeyboardKeys);
    };

    /*==========================================
        Mousewheel Control
    ============================================*/
    var lastScrollTime = (new Date()).getTime();
    function handleMousewheel(e) {
        var we = _this._wheelEvent;
        var delta = 0;

        //Opera & IE
        if (e.detail) delta = -e.detail;
        //WebKits
        else if (we === 'mousewheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX;
                    else return;
                }
                else {
                    if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                    else return;
                }
            }
            else {
                delta = e.wheelDelta;
            }
        }
        //Old FireFox
        else if (we === 'DOMMouseScroll') delta = -e.detail;
        //New FireFox
        else if (we === 'wheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX;
                    else return;
                }
                else {
                    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                    else return;
                }
            }
            else {
                delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY;
            }
        }

        if (!params.freeMode) {
            if ((new Date()).getTime() - lastScrollTime > 60) {
                if (delta < 0) _this.swipeNext();
                else _this.swipePrev();
            }
            lastScrollTime = (new Date()).getTime();

        }
        else {
            //Freemode or scrollContainer:
            var position = _this.getWrapperTranslate() + delta;

            if (position > 0) position = 0;
            if (position < -maxWrapperPosition()) position = -maxWrapperPosition();

            _this.setWrapperTransition(0);
            _this.setWrapperTranslate(position);
            _this.updateActiveSlide(position);

            // Return page scroll on edge positions
            if (position === 0 || position === -maxWrapperPosition()) return;
        }
        if (params.autoplay) _this.stopAutoplay(true);

        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    _this.disableMousewheelControl = function () {
        if (!_this._wheelEvent) return false;
        params.mousewheelControl = false;
        _this.h.removeEventListener(_this.container, _this._wheelEvent, handleMousewheel);
        return true;
    };

    _this.enableMousewheelControl = function () {
        if (!_this._wheelEvent) return false;
        params.mousewheelControl = true;
        _this.h.addEventListener(_this.container, _this._wheelEvent, handleMousewheel);
        return true;
    };

    /*=========================
      Grab Cursor
      ===========================*/
    if (params.grabCursor) {
        var containerStyle = _this.container.style;
        containerStyle.cursor = 'move';
        containerStyle.cursor = 'grab';
        containerStyle.cursor = '-moz-grab';
        containerStyle.cursor = '-webkit-grab';
    }

    /*=========================
      Slides Events Handlers
      ===========================*/

    _this.allowSlideClick = true;
    function slideClick(event) {
        if (_this.allowSlideClick) {
            setClickedSlide(event);
            _this.fireCallback(params.onSlideClick, _this, event);
        }
    }

    function slideTouch(event) {
        setClickedSlide(event);
        _this.fireCallback(params.onSlideTouch, _this, event);
    }

    function setClickedSlide(event) {

        // IE 6-8 support
        if (!event.currentTarget) {
            var element = event.srcElement;
            do {
                if (element.className.indexOf(params.slideClass) > -1) {
                    break;
                }
                element = element.parentNode;
            } while (element);
            _this.clickedSlide = element;
        }
        else {
            _this.clickedSlide = event.currentTarget;
        }

        _this.clickedSlideIndex     = _this.slides.indexOf(_this.clickedSlide);
        _this.clickedSlideLoopIndex = _this.clickedSlideIndex - (_this.loopedSlides || 0);
    }

    _this.allowLinks = true;
    function preventClick(e) {
        if (!_this.allowLinks) {
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            if (params.preventLinksPropagation && 'stopPropagation' in e) {
                e.stopPropagation();
            }
            return false;
        }
    }
    function releaseForms(e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.returnValue = false;
        return false;

    }

    /*==================================================
        Event Handlers
    ====================================================*/
    var isTouchEvent = false;
    var allowThresholdMove;
    var allowMomentumBounce = true;
    function onTouchStart(event) {
        if (params.preventLinks) _this.allowLinks = true;
        //Exit if slider is already was touched
        if (_this.isTouched || params.onlyExternal) {
            return false;
        }

        // Blur active elements
        var eventTarget = event.target || event.srcElement;
        if (document.activeElement) {
            if (document.activeElement !== eventTarget) document.activeElement.blur();
        }

        // Form tag names
        var formTagNames = ('input select textarea').split(' ');

        // Check for no swiping
        if (params.noSwiping && (eventTarget) && noSwipingSlide(eventTarget)) return false;
        allowMomentumBounce = false;
        //Check For Nested Swipers
        _this.isTouched = true;
        isTouchEvent = event.type === 'touchstart';

        // prevent user enter with right and the swiper move (needs isTouchEvent)
        if (!isTouchEvent && 'which' in event && event.which === 3) return false;

        if (!isTouchEvent || event.targetTouches.length === 1) {
            _this.callPlugins('onTouchStartBegin');
            if (!isTouchEvent && !_this.isAndroid && formTagNames.indexOf(eventTarget.tagName.toLowerCase()) < 0) {

                if (event.preventDefault) event.preventDefault();
                else event.returnValue = false;
            }

            var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
            var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

            //Start Touches to check the scrolling
            _this.touches.startX = _this.touches.currentX = pageX;
            _this.touches.startY = _this.touches.currentY = pageY;

            _this.touches.start = _this.touches.current = isH ? pageX : pageY;

            //Set Transition Time to 0
            _this.setWrapperTransition(0);

            //Get Start Translate Position
            _this.positions.start = _this.positions.current = _this.getWrapperTranslate();

            //Set Transform
            _this.setWrapperTranslate(_this.positions.start);

            //TouchStartTime
            _this.times.start = (new Date()).getTime();

            //Unset Scrolling
            isScrolling = undefined;

            //Set Treshold
            if (params.moveStartThreshold > 0) {
                allowThresholdMove = false;
            }

            //CallBack
            if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this, event);
            _this.callPlugins('onTouchStartEnd');

        }
    }
    var velocityPrevPosition, velocityPrevTime;
    function onTouchMove(event) {
        // If slider is not touched - exit
        if (!_this.isTouched || params.onlyExternal) return;
        if (isTouchEvent && event.type === 'mousemove') return;

        var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
        var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

        //check for scrolling
        if (typeof isScrolling === 'undefined' && isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX));
        }
        if (typeof isScrolling === 'undefined' && !isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX));
        }
        if (isScrolling) {
            _this.isTouched = false;
            return;
        }

        // One way swipes
        if (isH) {
            if ((!params.swipeToNext && pageX < _this.touches.startX) || ((!params.swipeToPrev && pageX > _this.touches.startX))) {
                return;
            }
        }
        else {
            if ((!params.swipeToNext && pageY < _this.touches.startY) || ((!params.swipeToPrev && pageY > _this.touches.startY))) {
                return;
            }
        }

        //Check For Nested Swipers
        if (event.assignedToSwiper) {
            _this.isTouched = false;
            return;
        }
        event.assignedToSwiper = true;

        //Block inner links
        if (params.preventLinks) {
            _this.allowLinks = false;
        }
        if (params.onSlideClick) {
            _this.allowSlideClick = false;
        }

        //Stop AutoPlay if exist
        if (params.autoplay) {
            _this.stopAutoplay(true);
        }
        if (!isTouchEvent || event.touches.length === 1) {

            //Moved Flag
            if (!_this.isMoved) {
                _this.callPlugins('onTouchMoveStart');

                if (params.loop) {
                    _this.fixLoop();
                    _this.positions.start = _this.getWrapperTranslate();
                }
                if (params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this);
            }
            _this.isMoved = true;

            // cancel event
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;

            _this.touches.current = isH ? pageX : pageY;

            _this.positions.current = (_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start;

            //Resistance Callbacks
            if (_this.positions.current > 0 && params.onResistanceBefore) {
                _this.fireCallback(params.onResistanceBefore, _this, _this.positions.current);
            }
            if (_this.positions.current < -maxWrapperPosition() && params.onResistanceAfter) {
                _this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition()));
            }
            //Resistance
            if (params.resistance && params.resistance !== '100%') {
                var resistance;
                //Resistance for Negative-Back sliding
                if (_this.positions.current > 0) {
                    resistance = 1 - _this.positions.current / containerSize / 2;
                    if (resistance < 0.5)
                        _this.positions.current = (containerSize / 2);
                    else
                        _this.positions.current = _this.positions.current * resistance;
                }
                //Resistance for After-End Sliding
                if (_this.positions.current < -maxWrapperPosition()) {

                    var diff = (_this.touches.current - _this.touches.start) * params.touchRatio + (maxWrapperPosition() + _this.positions.start);
                    resistance = (containerSize + diff) / (containerSize);
                    var newPos = _this.positions.current - diff * (1 - resistance) / 2;
                    var stopPos = -maxWrapperPosition() - containerSize / 2;

                    if (newPos < stopPos || resistance <= 0)
                        _this.positions.current = stopPos;
                    else
                        _this.positions.current = newPos;
                }
            }
            if (params.resistance && params.resistance === '100%') {
                //Resistance for Negative-Back sliding
                if (_this.positions.current > 0 && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = 0;
                }
                //Resistance for After-End Sliding
                if (_this.positions.current < -maxWrapperPosition() && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = -maxWrapperPosition();
                }
            }
            //Move Slides
            if (!params.followFinger) return;

            if (!params.moveStartThreshold) {
                _this.setWrapperTranslate(_this.positions.current);
            }
            else {
                if (Math.abs(_this.touches.current - _this.touches.start) > params.moveStartThreshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        _this.touches.start = _this.touches.current;
                        return;
                    }
                    _this.setWrapperTranslate(_this.positions.current);
                }
                else {
                    _this.positions.current = _this.positions.start;
                }
            }

            if (params.freeMode || params.watchActiveIndex) {
                _this.updateActiveSlide(_this.positions.current);
            }

            //Grab Cursor
            if (params.grabCursor) {
                _this.container.style.cursor = 'move';
                _this.container.style.cursor = 'grabbing';
                _this.container.style.cursor = '-moz-grabbin';
                _this.container.style.cursor = '-webkit-grabbing';
            }
            //Velocity
            if (!velocityPrevPosition) velocityPrevPosition = _this.touches.current;
            if (!velocityPrevTime) velocityPrevTime = (new Date()).getTime();
            _this.velocity = (_this.touches.current - velocityPrevPosition) / ((new Date()).getTime() - velocityPrevTime) / 2;
            if (Math.abs(_this.touches.current - velocityPrevPosition) < 2) _this.velocity = 0;
            velocityPrevPosition = _this.touches.current;
            velocityPrevTime = (new Date()).getTime();
            //Callbacks
            _this.callPlugins('onTouchMoveEnd');
            if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this, event);

            return false;
        }
    }
    function onTouchEnd(event) {
        //Check For scrolling
        if (isScrolling) {
            _this.swipeReset();
        }
        // If slider is not touched exit
        if (params.onlyExternal || !_this.isTouched) return;
        _this.isTouched = false;

        //Return Grab Cursor
        if (params.grabCursor) {
            _this.container.style.cursor = 'move';
            _this.container.style.cursor = 'grab';
            _this.container.style.cursor = '-moz-grab';
            _this.container.style.cursor = '-webkit-grab';
        }

        //Check for Current Position
        if (!_this.positions.current && _this.positions.current !== 0) {
            _this.positions.current = _this.positions.start;
        }

        //For case if slider touched but not moved
        if (params.followFinger) {
            _this.setWrapperTranslate(_this.positions.current);
        }

        // TouchEndTime
        _this.times.end = (new Date()).getTime();

        //Difference
        _this.touches.diff = _this.touches.current - _this.touches.start;
        _this.touches.abs = Math.abs(_this.touches.diff);

        _this.positions.diff = _this.positions.current - _this.positions.start;
        _this.positions.abs = Math.abs(_this.positions.diff);

        var diff = _this.positions.diff;
        var diffAbs = _this.positions.abs;
        var timeDiff = _this.times.end - _this.times.start;

        if (diffAbs < 5 && (timeDiff) < 300 && _this.allowLinks === false) {
            if (!params.freeMode && diffAbs !== 0) _this.swipeReset();
            //Release inner links
            if (params.preventLinks) {
                _this.allowLinks = true;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = true;
            }
        }

        setTimeout(function () {
            //Release inner links
            if (typeof _this === 'undefined' || _this === null) return;
            if (params.preventLinks) {
                _this.allowLinks = true;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = true;
            }
        }, 100);

        var maxPosition = maxWrapperPosition();

        //Not moved or Prevent Negative Back Sliding/After-End Sliding
        if (!_this.isMoved && params.freeMode) {
            _this.isMoved = false;
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
            _this.callPlugins('onTouchEnd');
            return;
        }
        if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {
            _this.swipeReset();
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
            _this.callPlugins('onTouchEnd');
            return;
        }

        _this.isMoved = false;

        //Free Mode
        if (params.freeMode) {
            if (params.freeModeFluid) {
                var momentumDuration = 1000 * params.momentumRatio;
                var momentumDistance = _this.velocity * momentumDuration;
                var newPosition = _this.positions.current + momentumDistance;
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(_this.velocity) * 20 * params.momentumBounceRatio;
                if (newPosition < -maxPosition) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition + maxPosition < -bounceAmount) newPosition = -maxPosition - bounceAmount;
                        afterBouncePosition = -maxPosition;
                        doBounce = true;
                        allowMomentumBounce = true;
                    }
                    else newPosition = -maxPosition;
                }
                if (newPosition > 0) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition > bounceAmount) newPosition = bounceAmount;
                        afterBouncePosition = 0;
                        doBounce = true;
                        allowMomentumBounce = true;
                    }
                    else newPosition = 0;
                }
                //Fix duration
                if (_this.velocity !== 0) momentumDuration = Math.abs((newPosition - _this.positions.current) / _this.velocity);

                _this.setWrapperTranslate(newPosition);

                _this.setWrapperTransition(momentumDuration);

                if (params.momentumBounce && doBounce) {
                    _this.wrapperTransitionEnd(function () {
                        if (!allowMomentumBounce) return;
                        if (params.onMomentumBounce) _this.fireCallback(params.onMomentumBounce, _this);
                        _this.callPlugins('onMomentumBounce');

                        _this.setWrapperTranslate(afterBouncePosition);
                        _this.setWrapperTransition(300);
                    });
                }

                _this.updateActiveSlide(newPosition);
            }
            if (!params.freeModeFluid || timeDiff >= 300) _this.updateActiveSlide(_this.positions.current);

            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
            _this.callPlugins('onTouchEnd');
            return;
        }

        //Direction
        direction = diff < 0 ? 'toNext' : 'toPrev';

        //Short Touches
        if (direction === 'toNext' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
            else _this.swipeNext(true);
        }

        if (direction === 'toPrev' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
            else _this.swipePrev(true);
        }

        //Long Touches
        var targetSlideSize = 0;
        if (params.slidesPerView === 'auto') {
            //Define current slide's width
            var currentPosition = Math.abs(_this.getWrapperTranslate());
            var slidesOffset = 0;
            var _slideSize;
            for (var i = 0; i < _this.slides.length; i++) {
                _slideSize = isH ? _this.slides[i].getWidth(true, params.roundLengths) : _this.slides[i].getHeight(true, params.roundLengths);
                slidesOffset += _slideSize;
                if (slidesOffset > currentPosition) {
                    targetSlideSize = _slideSize;
                    break;
                }
            }
            if (targetSlideSize > containerSize) targetSlideSize = containerSize;
        }
        else {
            targetSlideSize = slideSize * params.slidesPerView;
        }
        if (direction === 'toNext' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                _this.swipeNext(true);
            }
            else {
                _this.swipeReset();
            }
        }
        if (direction === 'toPrev' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                _this.swipePrev(true);
            }
            else {
                _this.swipeReset();
            }
        }
        if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
        _this.callPlugins('onTouchEnd');
    }


    /*==================================================
        noSwiping Bubble Check by Isaac Strack
    ====================================================*/
    function noSwipingSlide(el) {
        /*This function is specifically designed to check the parent elements for the noSwiping class, up to the wrapper.
        We need to check parents because while onTouchStart bubbles, _this.isTouched is checked in onTouchStart, which stops the bubbling.
        So, if a text box, for example, is the initial target, and the parent slide container has the noSwiping class, the _this.isTouched
        check will never find it, and what was supposed to be noSwiping is able to be swiped.
        This function will iterate up and check for the noSwiping class in parents, up through the wrapperClass.*/

        // First we create a truthy variable, which is that swiping is allowd (noSwiping = false)
        var noSwiping = false;

        // Now we iterate up (parentElements) until we reach the node with the wrapperClass.
        do {

            // Each time, we check to see if there's a 'swiper-no-swiping' class (noSwipingClass).
            if (el.className.indexOf(params.noSwipingClass) > -1)
            {
                noSwiping = true; // If there is, we set noSwiping = true;
            }

            el = el.parentElement;  // now we iterate up (parent node)

        } while (!noSwiping && el.parentElement && el.className.indexOf(params.wrapperClass) === -1); // also include el.parentElement truthy, just in case.

        // because we didn't check the wrapper itself, we do so now, if noSwiping is false:
        if (!noSwiping && el.className.indexOf(params.wrapperClass) > -1 && el.className.indexOf(params.noSwipingClass) > -1)
            noSwiping = true; // if the wrapper has the noSwipingClass, we set noSwiping = true;

        return noSwiping;
    }

    function addClassToHtmlString(klass, outerHtml) {
        var par = document.createElement('div');
        var child;

        par.innerHTML = outerHtml;
        child = par.firstChild;
        child.className += ' ' + klass;

        return child.outerHTML;
    }


    /*==================================================
        Swipe Functions
    ====================================================*/
    _this.swipeNext = function (internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipeNext');
        var currentPosition = _this.getWrapperTranslate();
        var newPosition = currentPosition;
        if (params.slidesPerView === 'auto') {
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i + 1];
                    break;
                }
            }
        }
        else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.floor(Math.abs(currentPosition) / Math.floor(groupSize)) * groupSize + groupSize);
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'next');
        return true;
    };
    _this.swipePrev = function (internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipePrev');

        var currentPosition = Math.ceil(_this.getWrapperTranslate());
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 1; i < _this.snapGrid.length; i++) {
                if (-currentPosition === _this.snapGrid[i]) {
                    newPosition = -_this.snapGrid[i - 1];
                    break;
                }
                if (-currentPosition > _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i];
                    break;
                }
            }
        }
        else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.ceil(-currentPosition / groupSize) - 1) * groupSize;
        }

        if (newPosition > 0) newPosition = 0;

        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'prev');
        return true;

    };
    _this.swipeReset = function () {
        _this.callPlugins('onSwipeReset');
        var currentPosition = _this.getWrapperTranslate();
        var groupSize = slideSize * params.slidesPerGroup;
        var newPosition;
        var maxPosition = -maxWrapperPosition();
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if (-currentPosition === _this.snapGrid[i]) return;
                if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    if (_this.positions.diff > 0) newPosition = -_this.snapGrid[i + 1];
                    else newPosition = -_this.snapGrid[i];
                    break;
                }
            }
            if (-currentPosition >= _this.snapGrid[_this.snapGrid.length - 1]) newPosition = -_this.snapGrid[_this.snapGrid.length - 1];
            if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition();
        }
        else {
            newPosition = currentPosition < 0 ? Math.round(currentPosition / groupSize) * groupSize : 0;
            if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition();
        }
        if (params.scrollContainer)  {
            newPosition = currentPosition < 0 ? currentPosition : 0;
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (params.scrollContainer && (containerSize > slideSize)) {
            newPosition = 0;
        }

        if (newPosition === currentPosition) return false;

        swipeToPosition(newPosition, 'reset');
        return true;
    };

    _this.swipeTo = function (index, speed, runCallbacks) {
        index = parseInt(index, 10);
        _this.callPlugins('onSwipeTo', {index: index, speed: speed});
        if (params.loop) index = index + _this.loopedSlides;
        var currentPosition = _this.getWrapperTranslate();
        if (index > (_this.slides.length - 1) || index < 0) return;
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = -_this.slidesGrid[index];
        }
        else {
            newPosition = -index * slideSize;
        }
        if (newPosition < - maxWrapperPosition()) {
            newPosition = - maxWrapperPosition();
        }

        if (newPosition === currentPosition) return false;

        runCallbacks = runCallbacks === false ? false : true;
        swipeToPosition(newPosition, 'to', {index: index, speed: speed, runCallbacks: runCallbacks});
        return true;
    };

    function swipeToPosition(newPosition, action, toOptions) {
        var speed = (action === 'to' && toOptions.speed >= 0) ? toOptions.speed : params.speed;
        var timeOld = + new Date();

        function anim() {
            var timeNew = + new Date();
            var time = timeNew - timeOld;
            currentPosition += animationStep * time / (1000 / 60);
            condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
            if (condition) {
                _this.setWrapperTranslate(Math.ceil(currentPosition));
                _this._DOMAnimating = true;
                window.setTimeout(function () {
                    anim();
                }, 1000 / 60);
            }
            else {
                if (params.onSlideChangeEnd) {
                    if (action === 'to') {
                        if (toOptions.runCallbacks === true) _this.fireCallback(params.onSlideChangeEnd, _this, direction);
                    }
                    else {
                        _this.fireCallback(params.onSlideChangeEnd, _this, direction);
                    }

                }
                _this.setWrapperTranslate(newPosition);
                _this._DOMAnimating = false;
            }
        }

        if (_this.support.transitions || !params.DOMAnimation) {
            _this.setWrapperTranslate(newPosition);
            _this.setWrapperTransition(speed);
        }
        else {
            //Try the DOM animation
            var currentPosition = _this.getWrapperTranslate();
            var animationStep = Math.ceil((newPosition - currentPosition) / speed * (1000 / 60));
            var direction = currentPosition > newPosition ? 'toNext' : 'toPrev';
            var condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
            if (_this._DOMAnimating) return;

            anim();
        }

        //Update Active Slide Index
        _this.updateActiveSlide(newPosition);

        //Callbacks
        if (params.onSlideNext && action === 'next') {
            _this.fireCallback(params.onSlideNext, _this, newPosition);
        }
        if (params.onSlidePrev && action === 'prev') {
            _this.fireCallback(params.onSlidePrev, _this, newPosition);
        }
        //'Reset' Callback
        if (params.onSlideReset && action === 'reset') {
            _this.fireCallback(params.onSlideReset, _this, newPosition);
        }

        //'Next', 'Prev' and 'To' Callbacks
        if (action === 'next' || action === 'prev' || (action === 'to' && toOptions.runCallbacks === true))
            slideChangeCallbacks(action);
    }
    /*==================================================
        Transition Callbacks
    ====================================================*/
    //Prevent Multiple Callbacks
    _this._queueStartCallbacks = false;
    _this._queueEndCallbacks = false;
    function slideChangeCallbacks(direction) {
        //Transition Start Callback
        _this.callPlugins('onSlideChangeStart');
        if (params.onSlideChangeStart) {
            if (params.queueStartCallbacks && _this.support.transitions) {
                if (_this._queueStartCallbacks) return;
                _this._queueStartCallbacks = true;
                _this.fireCallback(params.onSlideChangeStart, _this, direction);
                _this.wrapperTransitionEnd(function () {
                    _this._queueStartCallbacks = false;
                });
            }
            else _this.fireCallback(params.onSlideChangeStart, _this, direction);
        }
        //Transition End Callback
        if (params.onSlideChangeEnd) {
            if (_this.support.transitions) {
                if (params.queueEndCallbacks) {
                    if (_this._queueEndCallbacks) return;
                    _this._queueEndCallbacks = true;
                    _this.wrapperTransitionEnd(function (swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                }
                else {
                    _this.wrapperTransitionEnd(function (swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                }
            }
            else {
                if (!params.DOMAnimation) {
                    setTimeout(function () {
                        _this.fireCallback(params.onSlideChangeEnd, _this, direction);
                    }, 10);
                }
            }
        }
    }

    /*==================================================
        Update Active Slide Index
    ====================================================*/
    _this.updateActiveSlide = function (position) {
        if (!_this.initialized) return;
        if (_this.slides.length === 0) return;
        _this.previousIndex = _this.activeIndex;
        if (typeof position === 'undefined') position = _this.getWrapperTranslate();
        if (position > 0) position = 0;
        var i;
        if (params.slidesPerView === 'auto') {
            var slidesOffset = 0;
            _this.activeIndex = _this.slidesGrid.indexOf(-position);
            if (_this.activeIndex < 0) {
                for (i = 0; i < _this.slidesGrid.length - 1; i++) {
                    if (-position > _this.slidesGrid[i] && -position < _this.slidesGrid[i + 1]) {
                        break;
                    }
                }
                var leftDistance = Math.abs(_this.slidesGrid[i] + position);
                var rightDistance = Math.abs(_this.slidesGrid[i + 1] + position);
                if (leftDistance <= rightDistance) _this.activeIndex = i;
                else _this.activeIndex = i + 1;
            }
        }
        else {
            _this.activeIndex = Math[params.visibilityFullFit ? 'ceil' : 'round'](-position / slideSize);
        }

        if (_this.activeIndex === _this.slides.length) _this.activeIndex = _this.slides.length - 1;
        if (_this.activeIndex < 0) _this.activeIndex = 0;

        // Check for slide
        if (!_this.slides[_this.activeIndex]) return;

        // Calc Visible slides
        _this.calcVisibleSlides(position);

        // Mark visible and active slides with additonal classes
        if (_this.support.classList) {
            var slide;
            for (i = 0; i < _this.slides.length; i++) {
                slide = _this.slides[i];
                slide.classList.remove(params.slideActiveClass);
                if (_this.visibleSlides.indexOf(slide) >= 0) {
                    slide.classList.add(params.slideVisibleClass);
                } else {
                    slide.classList.remove(params.slideVisibleClass);
                }
            }
            _this.slides[_this.activeIndex].classList.add(params.slideActiveClass);
        } else {
            var activeClassRegexp = new RegExp('\\s*' + params.slideActiveClass);
            var inViewClassRegexp = new RegExp('\\s*' + params.slideVisibleClass);

            for (i = 0; i < _this.slides.length; i++) {
                _this.slides[i].className = _this.slides[i].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, '');
                if (_this.visibleSlides.indexOf(_this.slides[i]) >= 0) {
                    _this.slides[i].className += ' ' + params.slideVisibleClass;
                }
            }
            _this.slides[_this.activeIndex].className += ' ' + params.slideActiveClass;
        }

        //Update loop index
        if (params.loop) {
            var ls = _this.loopedSlides;
            _this.activeLoopIndex = _this.activeIndex - ls;
            if (_this.activeLoopIndex >= _this.slides.length - ls * 2) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 - _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 + _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) _this.activeLoopIndex = 0;
        }
        else {
            _this.activeLoopIndex = _this.activeIndex;
        }
        //Update Pagination
        if (params.pagination) {
            _this.updatePagination(position);
        }
    };
    /*==================================================
        Pagination
    ====================================================*/
    _this.createPagination = function (firstInit) {
        if (params.paginationClickable && _this.paginationButtons) {
            removePaginationEvents();
        }
        _this.paginationContainer = params.pagination.nodeType ? params.pagination : $$(params.pagination)[0];
        if (params.createPagination) {
            var paginationHTML = '';
            var numOfSlides = _this.slides.length;
            var numOfButtons = numOfSlides;
            if (params.loop) numOfButtons -= _this.loopedSlides * 2;
            for (var i = 0; i < numOfButtons; i++) {
                paginationHTML += '<' + params.paginationElement + ' class="' + params.paginationElementClass + '"></' + params.paginationElement + '>';
            }
            _this.paginationContainer.innerHTML = paginationHTML;
        }
        _this.paginationButtons = $$('.' + params.paginationElementClass, _this.paginationContainer);
        if (!firstInit) _this.updatePagination();
        _this.callPlugins('onCreatePagination');
        if (params.paginationClickable) {
            addPaginationEvents();
        }
    };
    function removePaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.removeEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function addPaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.addEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function paginationClick(e) {
        var index;
        var target = e.target || e.srcElement;
        var pagers = _this.paginationButtons;
        for (var i = 0; i < pagers.length; i++) {
            if (target === pagers[i]) index = i;
        }
        if (params.autoplay) _this.stopAutoplay(true);
        _this.swipeTo(index);
    }
    _this.updatePagination = function (position) {
        if (!params.pagination) return;
        if (_this.slides.length < 1) return;
        var activePagers = $$('.' + params.paginationActiveClass, _this.paginationContainer);
        if (!activePagers) return;

        //Reset all Buttons' class to not active
        var pagers = _this.paginationButtons;
        if (pagers.length === 0) return;
        for (var i = 0; i < pagers.length; i++) {
            pagers[i].className = params.paginationElementClass;
        }

        var indexOffset = params.loop ? _this.loopedSlides : 0;
        if (params.paginationAsRange) {
            if (!_this.visibleSlides) _this.calcVisibleSlides(position);
            //Get Visible Indexes
            var visibleIndexes = [];
            var j; // lopp index - avoid JSHint W004 / W038
            for (j = 0; j < _this.visibleSlides.length; j++) {
                var visIndex = _this.slides.indexOf(_this.visibleSlides[j]) - indexOffset;

                if (params.loop && visIndex < 0) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 + visIndex;
                }
                if (params.loop && visIndex >= _this.slides.length - _this.loopedSlides * 2) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 - visIndex;
                    visIndex = Math.abs(visIndex);
                }
                visibleIndexes.push(visIndex);
            }

            for (j = 0; j < visibleIndexes.length; j++) {
                if (pagers[visibleIndexes[j]]) pagers[visibleIndexes[j]].className += ' ' + params.paginationVisibleClass;
            }

            if (params.loop) {
                if (pagers[_this.activeLoopIndex] !== undefined) {
                    pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass;
                }
            }
            else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass;
            }
        }
        else {
            if (params.loop) {
                if (pagers[_this.activeLoopIndex]) pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            }
            else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            }
        }
    };
    _this.calcVisibleSlides = function (position) {
        var visibleSlides = [];
        var _slideLeft = 0, _slideSize = 0, _slideRight = 0;
        if (isH && _this.wrapperLeft > 0) position = position + _this.wrapperLeft;
        if (!isH && _this.wrapperTop > 0) position = position + _this.wrapperTop;

        for (var i = 0; i < _this.slides.length; i++) {
            _slideLeft += _slideSize;
            if (params.slidesPerView === 'auto')
                _slideSize  = isH ? _this.h.getWidth(_this.slides[i], true, params.roundLengths) : _this.h.getHeight(_this.slides[i], true, params.roundLengths);
            else _slideSize = slideSize;

            _slideRight = _slideLeft + _slideSize;
            var isVisibile = false;
            if (params.visibilityFullFit) {
                if (_slideLeft >= -position && _slideRight <= -position + containerSize) isVisibile = true;
                if (_slideLeft <= -position && _slideRight >= -position + containerSize) isVisibile = true;
            }
            else {
                if (_slideRight > -position && _slideRight <= ((-position + containerSize))) isVisibile = true;
                if (_slideLeft >= -position && _slideLeft < ((-position + containerSize))) isVisibile = true;
                if (_slideLeft < -position && _slideRight > ((-position + containerSize))) isVisibile = true;
            }

            if (isVisibile) visibleSlides.push(_this.slides[i]);

        }
        if (visibleSlides.length === 0) visibleSlides = [_this.slides[_this.activeIndex]];

        _this.visibleSlides = visibleSlides;
    };

    /*==========================================
        Autoplay
    ============================================*/
    var autoplayTimeoutId, autoplayIntervalId;
    _this.startAutoplay = function () {
        if (_this.support.transitions) {
            if (typeof autoplayTimeoutId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplay();
        }
        else {
            if (typeof autoplayIntervalId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplayIntervalId = setInterval(function () {
                if (params.loop) {
                    _this.fixLoop();
                    _this.swipeNext(true);
                }
                else if (!_this.swipeNext(true)) {
                    if (!params.autoplayStopOnLast) _this.swipeTo(0);
                    else {
                        clearInterval(autoplayIntervalId);
                        autoplayIntervalId = undefined;
                    }
                }
            }, params.autoplay);
        }
    };
    _this.stopAutoplay = function (internal) {
        if (_this.support.transitions) {
            if (!autoplayTimeoutId) return;
            if (autoplayTimeoutId) clearTimeout(autoplayTimeoutId);
            autoplayTimeoutId = undefined;
            if (internal && !params.autoplayDisableOnInteraction) {
                _this.wrapperTransitionEnd(function () {
                    autoplay();
                });
            }
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        }
        else {
            if (autoplayIntervalId) clearInterval(autoplayIntervalId);
            autoplayIntervalId = undefined;
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        }
    };
    function autoplay() {
        autoplayTimeoutId = setTimeout(function () {
            if (params.loop) {
                _this.fixLoop();
                _this.swipeNext(true);
            }
            else if (!_this.swipeNext(true)) {
                if (!params.autoplayStopOnLast) _this.swipeTo(0);
                else {
                    clearTimeout(autoplayTimeoutId);
                    autoplayTimeoutId = undefined;
                }
            }
            _this.wrapperTransitionEnd(function () {
                if (typeof autoplayTimeoutId !== 'undefined') autoplay();
            });
        }, params.autoplay);
    }
    /*==================================================
        Loop
    ====================================================*/
    _this.loopCreated = false;
    _this.removeLoopedSlides = function () {
        if (_this.loopCreated) {
            for (var i = 0; i < _this.slides.length; i++) {
                if (_this.slides[i].getData('looped') === true) _this.wrapper.removeChild(_this.slides[i]);
            }
        }
    };

    _this.createLoop = function () {
        if (_this.slides.length === 0) return;
        if (params.slidesPerView === 'auto') {
            _this.loopedSlides = params.loopedSlides || 1;
        }
        else {
            _this.loopedSlides = params.slidesPerView + params.loopAdditionalSlides;
        }

        if (_this.loopedSlides > _this.slides.length) {
            _this.loopedSlides = _this.slides.length;
        }

        var slideFirstHTML = '',
            slideLastHTML = '',
            i;
        var slidesSetFullHTML = '';
        /**
                loopedSlides is too large if loopAdditionalSlides are set.
                Need to divide the slides by maximum number of slides existing.

                @author        Tomaz Lovrec <tomaz.lovrec@blanc-noir.at>
        */
        var numSlides = _this.slides.length;
        var fullSlideSets = Math.floor(_this.loopedSlides / numSlides);
        var remainderSlides = _this.loopedSlides % numSlides;
        // assemble full sets of slides
        for (i = 0; i < (fullSlideSets * numSlides); i++) {
            var j = i;
            if (i >= numSlides) {
                var over = Math.floor(i / numSlides);
                j = i - (numSlides * over);
            }
            slidesSetFullHTML += _this.slides[j].outerHTML;
        }
        // assemble remainder slides
        // assemble remainder appended to existing slides
        for (i = 0; i < remainderSlides;i++) {
            slideLastHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        // assemble slides that get preppended to existing slides
        for (i = numSlides - remainderSlides; i < numSlides;i++) {
            slideFirstHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        // assemble all slides
        var slides = slideFirstHTML + slidesSetFullHTML + wrapper.innerHTML + slidesSetFullHTML + slideLastHTML;
        // set the slides
        wrapper.innerHTML = slides;

        _this.loopCreated = true;
        _this.calcSlides();

        //Update Looped Slides with special class
        for (i = 0; i < _this.slides.length; i++) {
            if (i < _this.loopedSlides || i >= _this.slides.length - _this.loopedSlides) _this.slides[i].setData('looped', true);
        }
        _this.callPlugins('onCreateLoop');

    };

    _this.fixLoop = function () {
        var newIndex;
        //Fix For Negative Oversliding
        if (_this.activeIndex < _this.loopedSlides) {
            newIndex = _this.slides.length - _this.loopedSlides * 3 + _this.activeIndex;
            _this.swipeTo(newIndex, 0, false);
        }
        //Fix For Positive Oversliding
        else if ((params.slidesPerView === 'auto' && _this.activeIndex >= _this.loopedSlides * 2) || (_this.activeIndex > _this.slides.length - params.slidesPerView * 2)) {
            newIndex = -_this.slides.length + _this.activeIndex + _this.loopedSlides;
            _this.swipeTo(newIndex, 0, false);
        }
    };

    /*==================================================
        Slides Loader
    ====================================================*/
    _this.loadSlides = function () {
        var slidesHTML = '';
        _this.activeLoaderIndex = 0;
        var slides = params.loader.slides;
        var slidesToLoad = params.loader.loadAllSlides ? slides.length : params.slidesPerView * (1 + params.loader.surroundGroups);
        for (var i = 0; i < slidesToLoad; i++) {
            if (params.loader.slidesHTMLType === 'outer') slidesHTML += slides[i];
            else {
                slidesHTML += '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
        }
        _this.wrapper.innerHTML = slidesHTML;
        _this.calcSlides(true);
        //Add permanent transitionEnd callback
        if (!params.loader.loadAllSlides) {
            _this.wrapperTransitionEnd(_this.reloadSlides, true);
        }
    };

    _this.reloadSlides = function () {
        var slides = params.loader.slides;
        var newActiveIndex = parseInt(_this.activeSlide().data('swiperindex'), 10);
        if (newActiveIndex < 0 || newActiveIndex > slides.length - 1) return; //<-- Exit
        _this.activeLoaderIndex = newActiveIndex;
        var firstIndex = Math.max(0, newActiveIndex - params.slidesPerView * params.loader.surroundGroups);
        var lastIndex = Math.min(newActiveIndex + params.slidesPerView * (1 + params.loader.surroundGroups) - 1, slides.length - 1);
        //Update Transforms
        if (newActiveIndex > 0) {
            var newTransform = -slideSize * (newActiveIndex - firstIndex);
            _this.setWrapperTranslate(newTransform);
            _this.setWrapperTransition(0);
        }
        var i; // loop index
        //New Slides
        if (params.loader.logic === 'reload') {
            _this.wrapper.innerHTML = '';
            var slidesHTML = '';
            for (i = firstIndex; i <= lastIndex; i++) {
                slidesHTML += params.loader.slidesHTMLType === 'outer' ? slides[i] : '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
            _this.wrapper.innerHTML = slidesHTML;
        }
        else {
            var minExistIndex = 1000;
            var maxExistIndex = 0;

            for (i = 0; i < _this.slides.length; i++) {
                var index = _this.slides[i].data('swiperindex');
                if (index < firstIndex || index > lastIndex) {
                    _this.wrapper.removeChild(_this.slides[i]);
                }
                else {
                    minExistIndex = Math.min(index, minExistIndex);
                    maxExistIndex = Math.max(index, maxExistIndex);
                }
            }
            for (i = firstIndex; i <= lastIndex; i++) {
                var newSlide;
                if (i < minExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild);
                }
                if (i > maxExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.appendChild(newSlide);
                }
            }
        }
        //reInit
        _this.reInit(true);
    };

    /*==================================================
        Make Swiper
    ====================================================*/
    function makeSwiper() {
        _this.calcSlides();
        if (params.loader.slides.length > 0 && _this.slides.length === 0) {
            _this.loadSlides();
        }
        if (params.loop) {
            _this.createLoop();
        }
        _this.init();
        initEvents();
        if (params.pagination) {
            _this.createPagination(true);
        }

        if (params.loop || params.initialSlide > 0) {
            _this.swipeTo(params.initialSlide, 0, false);
        }
        else {
            _this.updateActiveSlide(0);
        }
        if (params.autoplay) {
            _this.startAutoplay();
        }
        /**
         * Set center slide index.
         *
         * @author        Tomaz Lovrec <tomaz.lovrec@gmail.com>
         */
        _this.centerIndex = _this.activeIndex;

        // Callbacks
        if (params.onSwiperCreated) _this.fireCallback(params.onSwiperCreated, _this);
        _this.callPlugins('onSwiperCreated');
    }

    makeSwiper();
};

Swiper.prototype = {
    plugins : {},

    /*==================================================
        Wrapper Operations
    ====================================================*/
    wrapperTransitionEnd : function (callback, permanent) {
        'use strict';
        var a = this,
            el = a.wrapper,
            events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i;

        function fireCallBack(e) {
            if (e.target !== el) return;
            callback(a);
            if (a.params.queueEndCallbacks) a._queueEndCallbacks = false;
            if (!permanent) {
                for (i = 0; i < events.length; i++) {
                    a.h.removeEventListener(el, events[i], fireCallBack);
                }
            }
        }

        if (callback) {
            for (i = 0; i < events.length; i++) {
                a.h.addEventListener(el, events[i], fireCallBack);
            }
        }
    },

    getWrapperTranslate : function (axis) {
        'use strict';
        var el = this.wrapper,
            matrix, curTransform, curStyle, transformMatrix;

        // automatic axis detection
        if (typeof axis === 'undefined') {
            axis = this.params.mode === 'horizontal' ? 'x' : 'y';
        }

        if (this.support.transforms && this.params.useCSS3Transforms) {
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
        }
        else {
            if (axis === 'x') curTransform = parseFloat(el.style.left, 10) || 0;
            if (axis === 'y') curTransform = parseFloat(el.style.top, 10) || 0;
        }
        return curTransform || 0;
    },

    setWrapperTranslate : function (x, y, z) {
        'use strict';
        var es = this.wrapper.style,
            coords = {x: 0, y: 0, z: 0},
            translate;

        // passed all coordinates
        if (arguments.length === 3) {
            coords.x = x;
            coords.y = y;
            coords.z = z;
        }

        // passed one coordinate and optional axis
        else {
            if (typeof y === 'undefined') {
                y = this.params.mode === 'horizontal' ? 'x' : 'y';
            }
            coords[y] = x;
        }

        if (this.support.transforms && this.params.useCSS3Transforms) {
            translate = this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)' : 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate;
        }
        else {
            es.left = coords.x + 'px';
            es.top  = coords.y + 'px';
        }
        this.callPlugins('onSetWrapperTransform', coords);
        if (this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords);
    },

    setWrapperTransition : function (duration) {
        'use strict';
        var es = this.wrapper.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's';
        this.callPlugins('onSetWrapperTransition', {duration: duration});
        if (this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration);

    },

    /*==================================================
        Helpers
    ====================================================*/
    h : {
        getWidth: function (el, outer, round) {
            'use strict';
            var width = window.getComputedStyle(el, null).getPropertyValue('width');
            var returnWidth = parseFloat(width);
            //IE Fixes
            if (isNaN(returnWidth) || width.indexOf('%') > 0 || returnWidth < 0) {
                returnWidth = el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            }
            if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            if (round) return Math.ceil(returnWidth);
            else return returnWidth;
        },
        getHeight: function (el, outer, round) {
            'use strict';
            if (outer) return el.offsetHeight;

            var height = window.getComputedStyle(el, null).getPropertyValue('height');
            var returnHeight = parseFloat(height);
            //IE Fixes
            if (isNaN(returnHeight) || height.indexOf('%') > 0 || returnHeight < 0) {
                returnHeight = el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            }
            if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            if (round) return Math.ceil(returnHeight);
            else return returnHeight;
        },
        getOffset: function (el) {
            'use strict';
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop  = el.clientTop  || body.clientTop  || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop  = window.pageYOffset || el.scrollTop;
            var scrollLeft = window.pageXOffset || el.scrollLeft;
            if (document.documentElement && !window.pageYOffset) {
                //IE7-8
                scrollTop  = document.documentElement.scrollTop;
                scrollLeft = document.documentElement.scrollLeft;
            }
            return {
                top: box.top  + scrollTop  - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        },
        windowWidth : function () {
            'use strict';
            if (window.innerWidth) return window.innerWidth;
            else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
        },
        windowHeight : function () {
            'use strict';
            if (window.innerHeight) return window.innerHeight;
            else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
        },
        windowScroll : function () {
            'use strict';
            if (typeof pageYOffset !== 'undefined') {
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
            }
            else if (document.documentElement) {
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                };
            }
        },

        addEventListener : function (el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }

            if (el.addEventListener) {
                el.addEventListener(event, listener, useCapture);
            }
            else if (el.attachEvent) {
                el.attachEvent('on' + event, listener);
            }
        },

        removeEventListener : function (el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }

            if (el.removeEventListener) {
                el.removeEventListener(event, listener, useCapture);
            }
            else if (el.detachEvent) {
                el.detachEvent('on' + event, listener);
            }
        }
    },
    setTransform : function (el, transform) {
        'use strict';
        var es = el.style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform;
    },
    setTranslate : function (el, translate) {
        'use strict';
        var es = el.style;
        var pos = {
            x : translate.x || 0,
            y : translate.y || 0,
            z : translate.z || 0
        };
        var transformString = this.support.transforms3d ? 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)' : 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString;
        if (!this.support.transforms) {
            es.left = pos.x + 'px';
            es.top = pos.y + 'px';
        }
    },
    setTransition : function (el, duration) {
        'use strict';
        var es = el.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms';
    },
    /*==================================================
        Feature Detection
    ====================================================*/
    support: {

        touch : (window.Modernizr && Modernizr.touch === true) || (function () {
            'use strict';
            return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
        })(),

        transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
        })(),

        transforms : (window.Modernizr && Modernizr.csstransforms === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('transform' in div || 'WebkitTransform' in div || 'MozTransform' in div || 'msTransform' in div || 'MsTransform' in div || 'OTransform' in div);
        })(),

        transitions : (window.Modernizr && Modernizr.csstransitions === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('transition' in div || 'WebkitTransition' in div || 'MozTransition' in div || 'msTransition' in div || 'MsTransition' in div || 'OTransition' in div);
        })(),

        classList : (function () {
            'use strict';
            var div = document.createElement('div');
            return 'classList' in div;
        })()
    },

    browser : {

        ie8 : (function () {
            'use strict';
            var rv = -1; // Return value assumes failure.
            if (navigator.appName === 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                if (re.exec(ua) !== null)
                    rv = parseFloat(RegExp.$1);
            }
            return rv !== -1 && rv < 9;
        })(),

        ie10 : window.navigator.msPointerEnabled,
        ie11 : window.navigator.pointerEnabled
    }
};

/*=========================
  jQuery & Zepto Plugins
  ===========================*/
if (window.jQuery || window.Zepto) {
    (function ($) {
        'use strict';
        $.fn.swiper = function (params) {
            var firstInstance;
            this.each(function (i) {
                var that = $(this);
                if (!that.data('swiper')) {
                    var s = new Swiper(that[0], params);
                    if (!i) firstInstance = s;
                    that.data('swiper', s);
                }
            });
            return firstInstance;
        };
    })(window.jQuery || window.Zepto);
}

// component
if (typeof(module) !== 'undefined')
{
    module.exports = Swiper;
}

// requirejs support
if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return Swiper;
    });
}
;
/*!
 * Isotope PACKAGED v2.0.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */


(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,d=s.length;d>f;f++){var l=s[f],c=o[l];c=a(t,c);var y=parseFloat(c);n[l]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var o=l[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=c[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=l(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):d(o)&&(i=o),this[t]=i?l(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=l(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,d=i[s],l=d.getAttribute(n);try{f=l&&JSON.parse(l)}catch(c){u&&u.error("Error parsing "+n+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var y=new o(d,f);p&&p.data(d,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var d=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=u,d.LayoutMode=h,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},d.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},d.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},d.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.prototype.updateSortData=function(t){this._getSorters(),t=o(t);
var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=d.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},d.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(c.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
/*
 Plugin Name: jQuery Vertical Slider
 Author: Burak Aydin
*/


(function($){


$.fn.verticalSlider=function(options){


	var slider=this,
	inner=$('.vertical-inner'),
	height=0,
	length=inner.find('.slide').length,
	innerTop=0,
	totalHeight=0,
	winWidth=$(window).width();


	var defaults={

		index:1,		
		itemDistance:15, // each item distance between them as padding.
		animateTime:300,
		animateType:'linear',
		slideTop:'.vertical-top',
		slideBottom:'.vertical-bottom',

	};


		options=$.extend(defaults,options);



		inner.find('.slide').css({

			paddingTop:options.itemDistance,
			paddingBottom:options.itemDistance

		});



		inner.find('.slide').each(function(){

			totalHeight+=$(this).outerHeight();

		});		




		function add_class(opt){

			inner.find('.slide').removeClass('active-vertical');

			inner.find('.slide').eq(opt).addClass('active-vertical');

		}

		add_class(options.index);



		function activeHeight(opt){

			height=inner.find('.slide').eq(opt).outerHeight();

			slider.height(height);

		}

		activeHeight(options.index);




		function innerPosition(opt){

			innerTop=0;

			$('.slide').eq(opt).prevAll('.slide').each(function(){			

				innerTop=$(this).outerHeight()+innerTop;
				
				inner.css('marginTop',-innerTop+'px');				

			});

		}

		innerPosition(options.index);



		function setSlide(opt){

			var innerTop=0;

			inner.find('.slide').eq(opt).prevAll('.slide').each(function(){					

				innerTop=$(this).outerHeight()+innerTop;

			});				

			inner.animate({

				marginTop:-innerTop

			},options.animateTime,options.animateType);

		}		

		


		$(window).resize(function(){			

			activeHeight(options.index);
		
			innerPosition(options.index);	

		});
		


		$(options.slideBottom).click(function(){

			if(options.index<length-1){

				options.index++;

				setSlide(options.index);

				activeHeight(options.index);

				add_class(options.index);								

			}

		});



		$(options.slideTop).click(function(){

			if(options.index>0){

				options.index--;				

				setSlide(options.index);

				activeHeight(options.index);

				add_class(options.index);

			}

		});
	
}



})(jQuery);
/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.YTPlayer.js                                                                                                                      _
 _ last modified: 19/08/14 20.13                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/


var ytp = ytp || {};

function onYouTubePlayerAPIReady() {
	if(ytp.YTAPIReady)
		return;

	ytp.YTAPIReady=true;
	jQuery(document).trigger("YTAPIReady");
}

(function (jQuery, ytp) {

	/*Browser detection patch*/
	var nAgt = navigator.userAgent;
	if (!jQuery.browser) {
		jQuery.browser = {};
		jQuery.browser.mozilla = !1;
		jQuery.browser.webkit = !1;
		jQuery.browser.opera = !1;
		jQuery.browser.safari = !1;
		jQuery.browser.chrome = !1;
		jQuery.browser.msie = !1;
		jQuery.browser.ua = nAgt;
		jQuery.browser.name = navigator.appName;
		jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
		var nameOffset, verOffset, ix;
		if (-1 != (verOffset = nAgt.indexOf("Opera")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("MSIE")))jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
			jQuery.browser.msie = !0;
			jQuery.browser.name = "Microsoft Internet Explorer";
			var start = nAgt.indexOf("rv:") + 3, end = start + 4;
			jQuery.browser.fullVersion = nAgt.substring(start, end)
		} else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
		-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
		-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
		jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
		isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
		jQuery.browser.version = jQuery.browser.majorVersion
	}
	jQuery.browser.android = /Android/i.test(nAgt);
	jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
	jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
	jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
	jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);
	jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
	jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;

	/*******************************************************************************
	 * jQuery.mb.components: jquery.mb.CSSAnimate
	 ******************************************************************************/

	jQuery.fn.CSSAnimate=function(a,g,p,m,h){function r(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function f(a,f){return"string"!==typeof a||a.match(/^[\-0-9\.]+$/)?""+a+f:a}jQuery.support.CSStransition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}();return this.each(function(){var e=this,k=jQuery(this);e.id=e.id||"CSSA_"+ (new Date).getTime();var l=l||{type:"noEvent"};if(e.CSSAIsRunning&&e.eventType==l.type)e.CSSqueue=function(){k.CSSAnimate(a,g,p,m,h)};else if(e.CSSqueue=null,e.eventType=l.type,0!==k.length&&a){e.CSSAIsRunning=!0;"function"==typeof g&&(h=g,g=jQuery.fx.speeds._default);"function"==typeof p&&(h=p,p=0);"function"==typeof m&&(h=m,m="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof g)for(var b in jQuery.fx.speeds)if(g==b){g=jQuery.fx.speeds[b];break}else g=jQuery.fx.speeds._default;g||(g=jQuery.fx.speeds._default); if(jQuery.support.CSStransition){l={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)", easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)", easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};l[m]&&(m=l[m]);var d="",q="transitionEnd";jQuery.browser.webkit?(d="-webkit-",q="webkitTransitionEnd"):jQuery.browser.mozilla?(d="-moz-",q="transitionend"):jQuery.browser.opera?(d="-o-",q="otransitionend"):jQuery.browser.msie&&(d="-ms-",q="msTransitionEnd");l=[];for(c in a){b=c;"transform"===b&&(b=d+"transform",a[b]=a[c],delete a[c]);"filter"===b&&(b=d+"filter",a[b]=a[c],delete a[c]);if("transform-origin"=== b||"origin"===b)b=d+"transform-origin",a[b]=a[c],delete a[c];"x"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" translateX("+f(a[c],"px")+")",delete a[c]);"y"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" translateY("+f(a[c],"px")+")",delete a[c]);"z"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" translateZ("+f(a[c],"px")+")",delete a[c]);"rotate"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotate("+f(a[c],"deg")+")",delete a[c]);"rotateX"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotateX("+f(a[c],"deg")+ ")",delete a[c]);"rotateY"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotateY("+f(a[c],"deg")+")",delete a[c]);"rotateZ"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" rotateZ("+f(a[c],"deg")+")",delete a[c]);"scale"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" scale("+f(a[c],"")+")",delete a[c]);"scaleX"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" scaleX("+f(a[c],"")+")",delete a[c]);"scaleY"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" scaleY("+f(a[c],"")+")",delete a[c]);"scaleZ"===b&&(b=d+"transform", a[b]=a[b]||"",a[b]+=" scaleZ("+f(a[c],"")+")",delete a[c]);"skew"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" skew("+f(a[c],"deg")+")",delete a[c]);"skewX"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" skewX("+f(a[c],"deg")+")",delete a[c]);"skewY"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" skewY("+f(a[c],"deg")+")",delete a[c]);"perspective"===b&&(b=d+"transform",a[b]=a[b]||"",a[b]+=" perspective("+f(a[c],"px")+")",delete a[c]);0>l.indexOf(b)&&l.push(r(b))}var c=l.join(","),s=function(){k.off(q+"."+ e.id);clearTimeout(e.timeout);k.css(d+"transition","");"function"==typeof h&&h(k);e.called=!0;e.CSSAIsRunning=!1;"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null)},n={};jQuery.extend(n,a);n[d+"transition-property"]=c;n[d+"transition-duration"]=g+"ms";n[d+"transition-delay"]=p+"ms";n[d+"transition-style"]="preserve-3d";n[d+"transition-timing-function"]=m;setTimeout(function(){k.one(q+"."+e.id,s);k.css(n)},1);e.timeout=setTimeout(function(){k.called||!h?(k.called=!1,e.CSSAIsRunning=!1):(k.css(d+ "transition",""),h(k),e.CSSAIsRunning=!1,"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null))},g+p+100)}else{for(var c in a)"transform"===c&&delete a[c],"filter"===c&&delete a[c],"transform-origin"===c&&delete a[c],"auto"===a[c]&&delete a[c];h&&"string"!==typeof h||(h="linear");k.animate(a,g,h)}}})};

	/******************************************************************************/

	var getYTPVideoID = function (url) {

		var videoID, playlistID;

		if (url.indexOf("youtu.be") > 0) {
			videoID = url.substr(url.lastIndexOf("/")+1, url.length);
			playlistID = videoID.indexOf("?list=") > 0 ? videoID.substr(videoID.lastIndexOf("="), videoID.length) : null;
			videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf("?")) : videoID;
		} else if (url.indexOf("http") > -1) {
			videoID = url.match(/[\\?&]v=([^&#]*)/)[1];
			playlistID = url.indexOf("list=")>0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null;
		} else {
			videoID = url.length > 15 ? null : url;
			playlistID = videoID ? null : url;
		}

		return {videoID: videoID, playlistID: playlistID};
	};

	/* todo:
	 setPlaybackRate()
	 playlist
	 */


	jQuery.mbYTPlayer = {
		name   : "jquery.mb.YTPlayer",
		version: "2.7.6",
		author : "Matteo Bicocchi",

		defaults: {
			containment            : "body",
			ratio                  : "16/9",
			videoURL               : null,
			playlistURL            : null,
			startAt                : 0,
			stopAt                 : 0,
			autoPlay               : true,
			vol                    : 100, // 1 to 100
			addRaster              : false,
			opacity                : 1,
			quality                : "default", //or “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”
			mute                   : false,
			loop                   : true,
			showControls           : true,
			showAnnotations        : false,
			showYTLogo             : true,
			stopMovieOnClick       : false,
			stopMovieOnBlur        : true,
			realfullscreen         : false,
			gaTrack                : true,
			onReady                : function (player) {}
		},

		/*@fontface icons*/
		controls: {
			play    : "P",
			pause   : "p",
			mute    : "A",
			unmute  : "M",
			onlyYT  : "O",
			showSite: "R",
			ytLogo  : "Y"
		},

		locationProtocol: "https:",

		buildPlayer: function (options) {
			return this.each(function () {
				var YTPlayer = this;
				var $YTPlayer = jQuery(YTPlayer);

				YTPlayer.loop = 0;
				YTPlayer.opt = {};

				$YTPlayer.addClass("mb_YTVPlayer");

				var property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval('(' + $YTPlayer.data("property") + ')') : $YTPlayer.data("property");

				if (typeof property != "undefined" && typeof property.vol != "undefined")
					property.vol = property.vol == 0 ? property.vol = 1 : property.vol;

				jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);

				/* It was changed by me */
				YTPlayer.opt.realfullscreen = false;

				if (!$YTPlayer.attr("id"))
					$YTPlayer.attr("id", "video_" + new Date().getTime());

				var playerID = "mbYTP_" + YTPlayer.id;

				YTPlayer.isAlone = false;
				YTPlayer.hasFocus = true;

				var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : false;
				var playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : false;

				YTPlayer.videoID = videoID;
				YTPlayer.playlistID = playlistID;

				YTPlayer.opt.showAnnotations = (YTPlayer.opt.showAnnotations) ? '0' : '3';
				var playerVars = { 'autoplay': 0, 'modestbranding': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'enablejsapi': 1, 'version': 3, 'playerapiid': playerID, 'origin': '*', 'allowfullscreen': true, 'wmode': 'transparent', 'iv_load_policy': YTPlayer.opt.showAnnotations};

				var canPlayHTML5 = false;
				var v = document.createElement('video');
				if (v.canPlayType) {
					canPlayHTML5 = true;
				}

				if (canPlayHTML5)
					jQuery.extend(playerVars, {'html5': 1});

				if (jQuery.browser.msie && jQuery.browser.version < 9) {
					this.opt.opacity = 1;
				}

				var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
				var overlay = jQuery("<div/>").css({position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}).addClass("YTPOverlay");

				YTPlayer.isSelf = YTPlayer.opt.containment == "self";
				YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);
				YTPlayer.isBackground = YTPlayer.opt.containment.get(0).tagName.toLowerCase() == "body";

				if (YTPlayer.isBackground && ytp.backgroundIsInited)
					return;

				if (!YTPlayer.opt.containment.is(jQuery(this))) {
					$YTPlayer.hide();
				} else {
					YTPlayer.isPlayer = true;
				}

				if (jQuery.browser.mobile && YTPlayer.isBackground) {
					$YTPlayer.remove();
					return;
				}

				if (YTPlayer.opt.addRaster) {
					var classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";

					var retina = (window.retina || window.devicePixelRatio > 1);
					overlay.addClass(retina ? classN + " retina" : classN);
				} else {

					overlay.removeClass(function (index, classNames) {

						// change the list into an array
						var current_classes = classNames.split(" "),
						// array of classes which are to be removed
								classes_to_remove = [];

						jQuery.each(current_classes, function (index, class_name) {
							// if the classname begins with bg add it to the classes_to_remove array
							if (/raster-.*/.test(class_name)) {
								classes_to_remove.push(class_name);
							}
						});

						classes_to_remove.push("retina");
						// turn the array back into a string
						return classes_to_remove.join(" ");
					})
				}

				var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
				wrapper.css({position: "absolute", zIndex: 0, minWidth: "100%", minHeight: "100%", left: 0, top: 0, overflow: "hidden", opacity: 0});
				playerBox.css({position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0, overflow: "hidden"});
				wrapper.append(playerBox);

				YTPlayer.opt.containment.children().not("script, style").each(function () {
					if (jQuery(this).css("position") == "static")
						jQuery(this).css("position", "relative");
				});

				if (YTPlayer.isBackground) {
					jQuery("body").css({position: "absolute", minWidth: "100%", minHeight: "100%", zIndex: 1, boxSizing: "border-box"});
					wrapper.css({position: "fixed", top: 0, left: 0, zIndex: 0, webkitTransform: "translateZ(0)"});
					$YTPlayer.hide();
				} else if (YTPlayer.opt.containment.css("position") == "static")
					YTPlayer.opt.containment.css({position: "relative"});

				YTPlayer.opt.containment.prepend(wrapper);
				YTPlayer.wrapper = wrapper;

				playerBox.css({opacity: 1});

				if (!jQuery.browser.mobile) {
					playerBox.after(overlay);
					YTPlayer.overlay = overlay;
				}

				if (!YTPlayer.isBackground) {
					overlay.on("mouseenter", function () {
						$YTPlayer.find(".mb_YTVPBar").addClass("visible");
					}).on("mouseleave", function () {
						$YTPlayer.find(".mb_YTVPBar").removeClass("visible");
					})
				}

				if (!ytp.YTAPIReady) {
					jQuery("#YTAPI").remove();
					var tag = jQuery("<script></script>").attr({"src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api?v=" + jQuery.mbYTPlayer.version, "id": "YTAPI"});
					jQuery("head title").after(tag);
				} else {
					setTimeout(function () {
						jQuery(document).trigger("YTAPIReady");
					}, 100)
				}

				jQuery(document).on("YTAPIReady", function () {

					if ((YTPlayer.isBackground && ytp.backgroundIsInited) || YTPlayer.isInit)
						return;

					if (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick)
						jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function (e) {
							var target = jQuery(e.target);
							if (target.is("a") || target.parents().is("a")) {
								$YTPlayer.pauseYTP();
							}
						});

					if (YTPlayer.isBackground) {
						ytp.backgroundIsInited = true;
					}

					YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? (YTPlayer.isBackground ? true : false) : YTPlayer.opt.autoPlay;
					YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;

					jQuery.mbYTPlayer.getDataFromFeed(YTPlayer);

					jQuery(YTPlayer).on("YTPChanged", function () {

						if (YTPlayer.isInit)
							return;

						YTPlayer.isInit = true;

						//if is mobile fallback to the default YT player
						if (jQuery.browser.mobile && !YTPlayer.isBackground) {
							new YT.Player(playerID, {
								videoId: YTPlayer.videoID.toString(),
								height : '100%',
								width  : '100%',
								videoId: YTPlayer.videoID,
								events : {
									'onReady'      : function (event) {
										YTPlayer.player = event.target;
										playerBox.css({opacity: 1});
										YTPlayer.wrapper.css({opacity: YTPlayer.opt.opacity});
										$YTPlayer.optimizeDisplay();
									},
									'onStateChange': function () {}
								}
							});
							return;
						}

						new YT.Player(playerID, {
							videoId   : YTPlayer.videoID.toString(),
							playerVars: playerVars,
							events    : {
								'onReady': function (event) {

									YTPlayer.player = event.target;

									if (YTPlayer.isReady)
										return;

									YTPlayer.isReady = true;

									YTPlayer.playerEl = YTPlayer.player.getIframe();

									$YTPlayer.optimizeDisplay();

									YTPlayer.videoID = videoID;

									jQuery(window).on("resize.YTP", function () {
										$YTPlayer.optimizeDisplay();
									});

									if (YTPlayer.opt.showControls)
										jQuery(YTPlayer).buildYTPControls();

									var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;

									YTPlayer.player.setVolume(0);
									jQuery(YTPlayer).muteYTPVolume();

									jQuery.mbYTPlayer.checkForState(YTPlayer);

									YTPlayer.checkForStartAt = setInterval(function () {

										var canPlayVideo = (YTPlayer.player.getVideoLoadedFraction() > startAt / YTPlayer.player.getDuration());

										if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {

											clearInterval(YTPlayer.checkForStartAt);

											YTPlayer.player.setVolume(0);
											jQuery(YTPlayer).muteYTPVolume();

											if (typeof YTPlayer.opt.onReady == "function")
												YTPlayer.opt.onReady(YTPlayer);

											if (!YTPlayer.opt.mute)
												jQuery(YTPlayer).unmuteYTP();

											jQuery.mbYTPlayer.checkForState(YTPlayer);

											YTPlayer.player.pauseVideo();

											setTimeout(function () {

												YTPlayer.canTrigger = true;

												if (YTPlayer.opt.autoPlay) {
													$YTPlayer.playYTP();
													$YTPlayer.css("background-image", "none");
													YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2000);
												} else {
													YTPlayer.player.pauseVideo();
												}

											}, 100)

										} else {
											YTPlayer.player.playVideo();
											YTPlayer.player.seekTo(startAt, true);
										}
									}, jQuery.browser.chrome ? 1000 : 1);
								},

								'onStateChange': function (event) {
									/*
									 -1 (unstarted)
									 0 (ended)
									 1 (playing)
									 2 (paused)
									 3 (buffering)
									 5 (video cued).
									 */

									if (typeof event.target.getPlayerState != "function")
										return;

									var state = event.target.getPlayerState();

									if (YTPlayer.state == state)
										return;

									YTPlayer.state = state;

									var controls = jQuery("#controlBar_" + YTPlayer.id);
									var data = YTPlayer.opt;

									var eventType;

									switch (state) {
										case -1: //------------------------------------------------ unstarted

											eventType = "YTPUnstarted";
											break;

										case 0:  //------------------------------------------------ ended

											eventType = "YTPEnd";
											YTPlayer.player.pauseVideo();
											var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;

											if (data.loop) {
												YTPlayer.wrapper.css({opacity: 0});
												$YTPlayer.playYTP();
												YTPlayer.player.seekTo(startAt, true);

											} else if (!YTPlayer.isBackground) {
												YTPlayer.player.seekTo(startAt, true);
												$YTPlayer.playYTP();
												setTimeout(function () {
													$YTPlayer.pauseYTP();
												}, 10);
											}

											if (!data.loop && YTPlayer.isBackground)
												YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2000);
											else if (data.loop) {
												YTPlayer.loop++;
											}

											controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);

											break;

										case 1:  //------------------------------------------------ play

											eventType = "YTPStart";

											if (!jQuery.browser.chrome)
												YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);

											controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause);

											if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack))
												_gaq.push(['_trackEvent', 'YTPlayer', 'Play', (YTPlayer.title || YTPlayer.videoID.toString())]);

											if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack))
												ga('send', 'event', 'YTPlayer', 'play', (YTPlayer.title || YTPlayer.videoID.toString()));

											break;

										case 2:  //------------------------------------------------ pause

											eventType = "YTPPause";

											controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);

											break;

										case 3:  //------------------------------------------------ buffer

											eventType = "YTPBuffering";

											if (!jQuery.browser.chrome)
												YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);

											controls.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);

											break;

										case 5:  //------------------------------------------------ cued
											eventType = "YTPCued";
											break;

										default:
											break;

									}

									// Trigger state events
									var YTPevent = jQuery.Event(eventType);
									YTPevent.time = YTPlayer.player.time;
									if (YTPlayer.canTrigger)
										jQuery(YTPlayer).trigger(YTPevent);

								},

								'onPlaybackQualityChange': function (e) {

									var quality = e.target.getPlaybackQuality();

									var YTPQualityChange = jQuery.Event("YTPQualityChange");
									YTPQualityChange.quality = quality;
									jQuery(YTPlayer).trigger(YTPQualityChange);

								},

								'onError': function (err) {

									if (err.data == 150) {
										console.log("Embedding this video is restricted by Youtube.");
										if (YTPlayer.isPlayList)
											jQuery(YTPlayer).playNext();
									}
									if (err.data == 2 && YTPlayer.isPlayList)
										jQuery(YTPlayer).playNext();

									if (typeof YTPlayer.opt.onError == "function")
										YTPlayer.opt.onError($YTPlayer, err);
								}
							}
						});
					});
				})
			});
		},

		getDataFromFeed: function (YTPlayer) {
			//Get video info from FEEDS API

			if (!(jQuery.browser.msie && jQuery.browser.version < 9)) {
				jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + '//gdata.youtube.com/feeds/api/videos/' + YTPlayer.videoID + '?v=2&alt=jsonc', function (data, status, xhr) {
					YTPlayer.dataReceived = true;
					YTPlayer.videoData = data.data;
					jQuery(YTPlayer).trigger("YTPChanged");
					var YTPData = jQuery.Event("YTPData");
					YTPData.prop = {};
					for (var x in YTPlayer.videoData)
						YTPData.prop[x] = YTPlayer.videoData[x];
					jQuery(YTPlayer).trigger(YTPData);
					YTPlayer.title = YTPlayer.videoData.title;
					if (YTPlayer.opt.ratio == "auto")
						if (YTPlayer.videoData.aspectRatio && YTPlayer.videoData.aspectRatio === "widescreen")
							YTPlayer.opt.ratio = "16/9";
						else
							YTPlayer.opt.ratio = "4/3";
					if (!YTPlayer.hasData) {
						YTPlayer.hasData = true;
						if (YTPlayer.isPlayer) {
							var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
							YTPlayer.opt.containment.css({background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center", backgroundSize: "cover"});
						}
					}
				});
				setTimeout(function () {
					if (!YTPlayer.dataReceived && !YTPlayer.hasData) {
						YTPlayer.hasData = true;
						jQuery(YTPlayer).trigger("YTPChanged");
					}
				}, 1500)

			} else {
				YTPlayer.opt.ratio == "auto" ? YTPlayer.opt.ratio = "16/9" : YTPlayer.opt.ratio;

				if (!YTPlayer.hasData) {
					YTPlayer.hasData = true;
					setTimeout(function () {
						jQuery(YTPlayer).trigger("YTPChanged");
					}, 100)
				}
			}
		},

		getVideoData: function () {
			var YTPlayer = this.get(0);
			return YTPlayer.videoData;
		},

		getVideoID: function () {
			var YTPlayer = this.get(0);
			return YTPlayer.videoID || false;
		},

		setVideoQuality: function (quality) {
			var YTPlayer = this.get(0);

			if (!jQuery.browser.chrome)
				YTPlayer.player.setPlaybackQuality(quality);
		},

		YTPlaylist: function (videos, shuffle, callback) {
			var YTPlayer = this.get(0);

			YTPlayer.isPlayList = true;

			if (shuffle)
				videos = jQuery.shuffle(videos);

			if (!YTPlayer.videoID) {
				YTPlayer.videos = videos;
				YTPlayer.videoCounter = 0;
				YTPlayer.videoLength = videos.length;

				jQuery(YTPlayer).data("property", videos[0]);
				jQuery(YTPlayer).mb_YTPlayer();
			}

			if (typeof callback == "function")
				jQuery(YTPlayer).on("YTPChanged", function () {
					callback(YTPlayer);
				});

			jQuery(YTPlayer).on("YTPEnd", function () {
				jQuery(YTPlayer).playNext();
			});
		},

		playNext: function () {
			var YTPlayer = this.get(0);
			YTPlayer.videoCounter++;
			if (YTPlayer.videoCounter >= YTPlayer.videoLength)
				YTPlayer.videoCounter = 0;
			jQuery(YTPlayer.playerEl).css({opacity: 0});
			jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
		},

		playPrev: function () {
			var YTPlayer = this.get(0);
			YTPlayer.videoCounter--;
			if (YTPlayer.videoCounter < 0)
				YTPlayer.videoCounter = YTPlayer.videoLength - 1;
			jQuery(YTPlayer.playerEl).css({opacity: 0});
			jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
		},

		changeMovie: function (opt) {
			var YTPlayer = this.get(0);

			YTPlayer.opt.startAt = 0;
			YTPlayer.opt.stopAt = 0;
			YTPlayer.opt.mute = true;

			if (opt) {
				jQuery.extend(YTPlayer.opt, opt);
			}

			YTPlayer.videoID = getYTPVideoID(YTPlayer.opt.videoURL).videoID;

			jQuery(YTPlayer).pauseYTP();

			var timer = jQuery.browser.msie ? 1000 : 0;

			jQuery(YTPlayer.playerEl).CSSAnimate({opacity: 0}, timer);


			setTimeout(function () {
				var quality = !jQuery.browser.chrome ? YTPlayer.opt.quality : "default";

				jQuery(YTPlayer).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer.videoID), 1, quality);

				jQuery(YTPlayer).playYTP();


				jQuery(YTPlayer).one("YTPStart", function () {
					YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 1000);
					jQuery(YTPlayer.playerEl).CSSAnimate({opacity: 1}, timer);

					if (YTPlayer.opt.startAt) {
						YTPlayer.player.seekTo(YTPlayer.opt.startAt);
					}
					jQuery.mbYTPlayer.checkForState(YTPlayer);

					if (!YTPlayer.opt.autoPlay)
						jQuery(YTPlayer).pauseYTP();

				});

				if (YTPlayer.opt.mute) {
					jQuery(YTPlayer).muteYTPVolume();
				} else {
					jQuery(YTPlayer).unmuteYTP();
				}

			}, timer);

			if (YTPlayer.opt.addRaster) {
				var retina = (window.retina || window.devicePixelRatio > 1);
				YTPlayer.overlay.addClass(retina ? "raster retina" : "raster");
			} else {
				YTPlayer.overlay.removeClass("raster");
				YTPlayer.overlay.removeClass("retina");
			}

			jQuery("#controlBar_" + YTPlayer.id).remove();

			if (YTPlayer.opt.showControls)
				jQuery(YTPlayer).buildYTPControls();

			jQuery.mbYTPlayer.getDataFromFeed(YTPlayer);
			jQuery(YTPlayer).optimizeDisplay();
		},

		getPlayer: function () {
			return jQuery(this).get(0).player;
		},

		playerDestroy: function () {
			var YTPlayer = this.get(0);
			ytp.YTAPIReady = false;
			ytp.backgroundIsInited = false;
			YTPlayer.isInit = false;
			YTPlayer.videoID = null;
			var playerBox = YTPlayer.wrapper;
			playerBox.remove();
			jQuery("#controlBar_" + YTPlayer.id).remove();
		},

		fullscreen: function (real) {

			var YTPlayer = this.get(0);

			if (typeof real == "undefined")
				real = YTPlayer.opt.realfullscreen;

			real = eval(real);

			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var fullScreenBtn = controls.find(".mb_OnlyYT");
			var videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
			//var videoWrapper = YTPlayer.wrapper;

			if (real) {
				var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
				jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
					var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");

					if (!isFullScreen) {
						YTPlayer.isAlone = false;
						fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
						jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality);
						videoWrapper.removeClass("fullscreen");

						videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500);
						videoWrapper.css({zIndex: 0});

						if (YTPlayer.isBackground) {
							jQuery("body").after(controls);
						} else {
							YTPlayer.wrapper.before(controls);
						}
						jQuery(window).resize();
						jQuery(YTPlayer).trigger("YTPFullScreenEnd");

					} else {
						jQuery(YTPlayer).setVideoQuality("default");
						jQuery(YTPlayer).trigger("YTPFullScreenStart");
					}
				});
			}

			if (!YTPlayer.isAlone) {

				if (real) {

					videoWrapper.css({opacity: 0});
					videoWrapper.addClass("fullscreen");
					launchFullscreen(videoWrapper.get(0));
					setTimeout(function () {
						videoWrapper.CSSAnimate({opacity: 1}, 1000);
						YTPlayer.wrapper.append(controls);
						jQuery(YTPlayer).optimizeDisplay();

						YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true);
					}, 500)
				} else
					videoWrapper.css({zIndex: 10000}).CSSAnimate({opacity: 1}, 1000);


				fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
				YTPlayer.isAlone = true;

			} else {

				if (real) {
					cancelFullscreen();
				} else {
					videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500);
					videoWrapper.css({zIndex: 0});
				}


				fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT)
				YTPlayer.isAlone = false;
			}

			function RunPrefixMethod(obj, method) {
				var pfx = ["webkit", "moz", "ms", "o", ""];
				var p = 0, m, t;
				while (p < pfx.length && !obj[m]) {
					m = method;
					if (pfx[p] == "") {
						m = m.substr(0, 1).toLowerCase() + m.substr(1);
					}
					m = pfx[p] + m;
					t = typeof obj[m];
					if (t != "undefined") {
						pfx = [pfx[p]];
						return (t == "function" ? obj[m]() : obj[m]);
					}
					p++;
				}
			}

			function launchFullscreen(element) {
				RunPrefixMethod(element, "RequestFullScreen");
			}

			function cancelFullscreen() {
				if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
					RunPrefixMethod(document, "CancelFullScreen");
				}
			}
		},

		playYTP: function () {
			var YTPlayer = this.get(0);

			if (typeof YTPlayer.player === "undefined")
				return;

			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var playBtn = controls.find(".mb_YTVPPlaypause");
			playBtn.html(jQuery.mbYTPlayer.controls.pause);
			YTPlayer.player.playVideo();

			YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2000);
			jQuery(YTPlayer).on("YTPStart", function () {
				jQuery(YTPlayer).css("background-image", "none");
			})
		},

		toggleLoops: function () {
			var YTPlayer = this.get(0);
			var data = YTPlayer.opt;
			if (data.loop == 1) {
				data.loop = 0;
			} else {
				if (data.startAt) {
					YTPlayer.player.seekTo(data.startAt);
				} else {
					YTPlayer.player.playVideo();
				}
				data.loop = 1;
			}
		},

		stopYTP: function () {
			var YTPlayer = this.get(0);
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var playBtn = controls.find(".mb_YTVPPlaypause");
			playBtn.html(jQuery.mbYTPlayer.controls.play);
			YTPlayer.player.stopVideo();
		},

		pauseYTP: function () {
			var YTPlayer = this.get(0);
			var data = YTPlayer.opt;
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var playBtn = controls.find(".mb_YTVPPlaypause");
			playBtn.html(jQuery.mbYTPlayer.controls.play);
			YTPlayer.player.pauseVideo();
		},

		seekToYTP: function (val) {
			var YTPlayer = this.get(0);
			YTPlayer.player.seekTo(val, true);
		},

		setYTPVolume: function (val) {
			var YTPlayer = this.get(0);
			if (!val && !YTPlayer.opt.vol && YTPlayer.player.getVolume() == 0)
				jQuery(YTPlayer).unmuteYTP();
			else if ((!val && YTPlayer.player.getVolume() > 0) || (val && YTPlayer.player.getVolume() == val))
				jQuery(YTPlayer).muteYTPVolume();
			else
				YTPlayer.opt.vol = val;
			YTPlayer.player.setVolume(YTPlayer.opt.vol);
		},

		muteYTP: function () {
			var YTPlayer = this.get(0);
			YTPlayer.player.mute();
			YTPlayer.player.setVolume(0);

			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var muteBtn = controls.find(".mb_YTVPMuteUnmute");
			muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
			jQuery(YTPlayer).addClass("isMuted");
			jQuery(YTPlayer).trigger("YTPMuted");
		},

		unmuteYTP: function () {
			var YTPlayer = this.get(0);

			YTPlayer.player.unMute();
			YTPlayer.player.setVolume(YTPlayer.opt.vol);

			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var muteBtn = controls.find(".mb_YTVPMuteUnmute");
			muteBtn.html(jQuery.mbYTPlayer.controls.mute);

			jQuery(YTPlayer).removeClass("isMuted");
			jQuery(YTPlayer).trigger("YTPUnmuted");
		},

		manageYTPProgress: function () {

			var YTPlayer = this.get(0);
			var controls = jQuery("#controlBar_" + YTPlayer.id);
			var progressBar = controls.find(".mb_YTVPProgress");
			var loadedBar = controls.find(".mb_YTVPLoaded");
			var timeBar = controls.find(".mb_YTVTime");
			var totW = progressBar.outerWidth();

			var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
			var totalTime = Math.floor(YTPlayer.player.getDuration());
			var timeW = (currentTime * totW) / totalTime;
			var startLeft = 0;

			var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;

			loadedBar.css({left: startLeft, width: loadedW + "%"});
			timeBar.css({left: 0, width: timeW});
			return {totalTime: totalTime, currentTime: currentTime};
		},

		buildYTPControls: function () {
			var YTPlayer = this.get(0);
			var data = YTPlayer.opt;

			/** @data.printUrl is deprecated; use data.showYTLogo */
			data.showYTLogo = data.showYTLogo || data.printUrl;

			if (jQuery("#controlBar_" + YTPlayer.id).length)
				return;

			var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTVPBar").css({whiteSpace: "noWrap", position: YTPlayer.isBackground ? "fixed" : "absolute", zIndex: YTPlayer.isBackground ? 10000 : 1000}).hide();
			var buttonBar = jQuery("<div/>").addClass("buttonBar");

			var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTVPPlaypause ytpicon").click(function () {
				if (YTPlayer.player.getPlayerState() == 1)
					jQuery(YTPlayer).pauseYTP();
				else
					jQuery(YTPlayer).playYTP();
			});

			var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function () {
				if (YTPlayer.player.getVolume() == 0) {
					jQuery(YTPlayer).unmuteYTP();
				} else {
					jQuery(YTPlayer).muteYTP();
				}
			});

			var idx = jQuery("<span/>").addClass("mb_YTVPTime");

			var vURL = data.videoURL ? data.videoURL : "";

			if (vURL.indexOf("http") < 0)
				vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
			var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {window.open(vURL, "viewOnYT")});
			var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {jQuery(YTPlayer).fullscreen(data.realfullscreen);});

			var progressBar = jQuery("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function (e) {
				timeBar.css({width: (e.clientX - timeBar.offset().left)});
				YTPlayer.timeW = e.clientX - timeBar.offset().left;
				controlBar.find(".mb_YTVPLoaded").css({width: 0});
				var totalTime = Math.floor(YTPlayer.player.getDuration());
				YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();

				YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
				controlBar.find(".mb_YTVPLoaded").css({width: 0});
			});

			var loadedBar = jQuery("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute");
			var timeBar = jQuery("<div/>").addClass("mb_YTVTime").css("position", "absolute");

			progressBar.append(loadedBar).append(timeBar);
			buttonBar.append(playpause).append(MuteUnmute).append(idx);

			if (data.showYTLogo) {
				buttonBar.append(movieUrl);
			}

			if (YTPlayer.isBackground || (eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground))
				buttonBar.append(onlyVideo);

			controlBar.append(buttonBar).append(progressBar);

			if (!YTPlayer.isBackground) {
				controlBar.addClass("inlinePlayer");
				YTPlayer.wrapper.before(controlBar);
			} else {
				jQuery("body").after(controlBar);
			}
			controlBar.fadeIn();
		},

		checkForState: function (YTPlayer) {

			var interval = YTPlayer.opt.showControls ? 10 : 1000;
			clearInterval(YTPlayer.getState);

			YTPlayer.getState = setInterval(function () {
				var prog = jQuery(YTPlayer).manageYTPProgress();
				var $YTPlayer = jQuery(YTPlayer);
				var controlBar = jQuery("#controlBar_" + YTPlayer.id);
				var data = YTPlayer.opt;
				var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
				var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
				stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;

				if (YTPlayer.player.time != prog.currentTime) {
					var YTPevent = jQuery.Event("YTPTime");
					YTPevent.time = YTPlayer.player.time;
					jQuery(YTPlayer).trigger(YTPevent);
				}

				YTPlayer.player.time = prog.currentTime;

				if (YTPlayer.player.getVolume() == 0)
					$YTPlayer.addClass("isMuted");
				else
					$YTPlayer.removeClass("isMuted");

				if (YTPlayer.opt.showControls)
					if (prog.totalTime) {
						controlBar.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
					} else {
						controlBar.find(".mb_YTVPTime").html("-- : -- / -- : --");
					}

				if(YTPlayer.opt.stopMovieOnBlur)
					if (!document.hasFocus()) {

						if (YTPlayer.state == 1) {
							YTPlayer.hasFocus = false;
							$YTPlayer.pauseYTP();
						}

					} else if (document.hasFocus() && !YTPlayer.hasFocus) {

						YTPlayer.hasFocus = true;
						$YTPlayer.playYTP();
					}

				if (YTPlayer.player.getPlayerState() == 1 && (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() || (stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt))) {

					if (YTPlayer.isEnded)
						return;

					YTPlayer.isEnded = true;
					setTimeout(function () {YTPlayer.isEnded = false}, 2000);

					if (YTPlayer.isPlayList) {
						clearInterval(YTPlayer.getState);

						var YTPEnd = jQuery.Event("YTPEnd");
						YTPEnd.time = YTPlayer.player.time;
						jQuery(YTPlayer).trigger(YTPEnd);

						return;

					} else if (!data.loop) {
						YTPlayer.player.pauseVideo();
						YTPlayer.wrapper.CSSAnimate({opacity: 0}, 1000, function () {

							var YTPEnd = jQuery.Event("YTPEnd");
							YTPEnd.time = YTPlayer.player.time;
							jQuery(YTPlayer).trigger(YTPEnd);

							YTPlayer.player.seekTo(startAt, true);

							if (!YTPlayer.isBackground) {
								var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
								jQuery(YTPlayer).css({background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center", backgroundSize: "cover"});
							}

						});
					} else
						YTPlayer.player.seekTo(startAt, true);
				}
			}, interval);
		},

		formatTime: function (s) {
			var min = Math.floor(s / 60);
			var sec = Math.floor(s - (60 * min));
			return (min <= 9 ? "0" + min : min) + " : " + (sec <= 9 ? "0" + sec : sec);
		}
	};

	jQuery.fn.toggleVolume = function () {
		var YTPlayer = this.get(0);
		if (!YTPlayer)
			return;

		if (YTPlayer.player.isMuted()) {
			jQuery(YTPlayer).unmuteYTP();
			return true;
		} else {
			jQuery(YTPlayer).muteYTP();
			return false;
		}
	};

	jQuery.fn.optimizeDisplay = function () {

		var YTPlayer = this.get(0);
		var data = YTPlayer.opt;
		var playerBox = jQuery(YTPlayer.playerEl);
		var win = {};
		var el = YTPlayer.wrapper;

		win.width = el.outerWidth();
		win.height = el.outerHeight();

		var margin = 24;
		var overprint = 100;
		var vid = {};
		vid.width = win.width + ((win.width * margin) / 100);
		vid.height = data.ratio == "16/9" ? Math.ceil((9 * win.width) / 16) : Math.ceil((3 * win.width) / 4);
		vid.marginTop = -((vid.height - win.height) / 2);
		vid.marginLeft = -((win.width * (margin / 2)) / 100);

		if (vid.height < win.height) {
			vid.height = win.height + ((win.height * margin) / 100);
			vid.width = data.ratio == "16/9" ? Math.floor((16 * win.height) / 9) : Math.floor((4 * win.height) / 3);
			vid.marginTop = -((win.height * (margin / 2)) / 100);
			vid.marginLeft = -((vid.width - win.width) / 2);
		}

		vid.width += overprint;
		vid.height += overprint;
		vid.marginTop -= overprint / 2;
		vid.marginLeft -= overprint / 2;

		playerBox.css({width: vid.width, height: vid.height, marginTop: vid.marginTop, marginLeft: vid.marginLeft});
	};

	jQuery.shuffle = function (arr) {
		var newArray = arr.slice();
		var len = newArray.length;
		var i = len;
		while (i--) {
			var p = parseInt(Math.random() * len);
			var t = newArray[i];
			newArray[i] = newArray[p];
			newArray[p] = t;
		}
		return newArray;
	};

	/*Exposed method for external use*/
	jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
	jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist;
	jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
	jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
	jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
	jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
	jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
	jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
	jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
	jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls;
	jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP;
	jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
	jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP;
	jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP;
	jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP;
	jQuery.fn.muteYTP = jQuery.mbYTPlayer.muteYTP;
	jQuery.fn.unmuteYTP = jQuery.mbYTPlayer.unmuteYTP;
	jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume;
	jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
	jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress;
	jQuery.fn.getDataFromFeed = jQuery.mbYTPlayer.getVideoData;

	/** @deprecated **/
	jQuery.fn.mb_YTPlayer = jQuery.fn.YTPlayer;
	jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTP;
	jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTP;


})(jQuery, ytp);
/* ----------------------------------
jQuery Timelinr 0.9.54
tested with jQuery v1.6+

Copyright 2011, CSSLab.cl
Free under the MIT license.
http://www.opensource.org/licenses/mit-license.php

instructions: http://www.csslab.cl/2011/08/18/jquery-timelinr/
---------------------------------- */


jQuery.fn.timelinr = function(options){
	// default plugin settings
	settings = jQuery.extend({
		orientation: 				'horizontal',		// value: horizontal | vertical, default to horizontal
		containerDiv: 				'#timeline',		// value: any HTML tag or #id, default to #timeline
		datesDiv: 					'#dates',			// value: any HTML tag or #id, default to #dates
		datesSelectedClass: 		'selected',			// value: any class, default to selected
		datesSpeed: 				'normal',			// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
		issuesDiv: 					'#issues',			// value: any HTML tag or #id, default to #issues
		issuesSelectedClass: 		'selected',			// value: any class, default to selected
		issuesSpeed: 				'fast',				// value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
		issuesTransparency: 		0.2,				// value: integer between 0 and 1 (recommended), default to 0.2
		issuesTransparencySpeed: 	500,				// value: integer between 100 and 1000 (recommended), default to 500 (normal)
		prevButton: 				'#prev',			// value: any HTML tag or #id, default to #prev
		nextButton: 				'#next',			// value: any HTML tag or #id, default to #next
		arrowKeys: 					'false',			// value: true | false, default to false
		startAt: 					1,					// value: integer, default to 1 (first)
		autoPlay: 					'false',			// value: true | false, default to false
		autoPlayDirection: 			'forward',			// value: forward | backward, default to forward
		autoPlayPause: 				2000				// value: integer (1000 = 1 seg), default to 2000 (2segs)
	}, options);

	$(function(){
		// setting variables... many of them
		var howManyDates = $(settings.datesDiv+' li').length;
		var howManyIssues = $(settings.issuesDiv+' li').length;
		var currentDate = $(settings.datesDiv).find('a.'+settings.datesSelectedClass);
		var currentIssue = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass);
		var widthContainer = $(settings.containerDiv).width();
		var heightContainer = $(settings.containerDiv).height();
		var widthIssues = $(settings.issuesDiv).width();
		var heightIssues = $(settings.issuesDiv).height();
		var widthIssue = $(settings.issuesDiv+' li').width();
		var heightIssue = $(settings.issuesDiv+' li').height();
		var widthDates = $(settings.datesDiv).width();
		var heightDates = $(settings.datesDiv).height();
		var widthDate = $(settings.datesDiv+' li').width();
		var heightDate = $(settings.datesDiv+' li').height();
		// set positions!
		if(settings.orientation == 'horizontal') {	
			$(settings.issuesDiv).width(widthIssue*howManyIssues);
			$(settings.datesDiv).width(widthDate*howManyDates).css('marginLeft',widthContainer/2-widthDate/2);
			var defaultPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
		} else if(settings.orientation == 'vertical') {
			$(settings.issuesDiv).height(heightIssue*howManyIssues);
			$(settings.datesDiv).height(heightDate*howManyDates).css('marginTop',heightContainer/2-heightDate/2);
			var defaultPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
		}
		
		$(settings.datesDiv+' a').click(function(event){
			event.preventDefault();
			// first vars
			var whichIssue = $(this).text();
			var currentIndex = $(this).parent().prevAll().length;
			// moving the elements
			if(settings.orientation == 'horizontal') {
				$(settings.issuesDiv).animate({'marginLeft':-widthIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
			} else if(settings.orientation == 'vertical') {
				$(settings.issuesDiv).animate({'marginTop':-heightIssue*currentIndex},{queue:false, duration:settings.issuesSpeed});
			}
			$(settings.issuesDiv+' li').animate({'opacity':settings.issuesTransparency},{queue:false, duration:settings.issuesSpeed}).removeClass(settings.issuesSelectedClass).eq(currentIndex).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed,1);
			// prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows | bugfixed: arrows not showing when jumping from first to last date
			if(howManyDates == 1) {
				$(settings.prevButton+','+settings.nextButton).fadeOut('fast');
			} else if(howManyDates == 2) {
				if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.prevButton).fadeOut('fast');
				 	$(settings.nextButton).fadeIn('fast');
				} 
				else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.nextButton).fadeOut('fast');
					$(settings.prevButton).fadeIn('fast');
				}
			} else {
				if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.nextButton).fadeIn('fast');
					$(settings.prevButton).fadeOut('fast');
				} 
				else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.prevButton).fadeIn('fast');
					$(settings.nextButton).fadeOut('fast');
				}
				else {
					$(settings.nextButton+','+settings.prevButton).fadeIn('slow');
				}	
			}
			// now moving the dates
			$(settings.datesDiv+' a').removeClass(settings.datesSelectedClass);
			$(this).addClass(settings.datesSelectedClass);
			if(settings.orientation == 'horizontal') {
				$(settings.datesDiv).animate({'marginLeft':defaultPositionDates-(widthDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
			} else if(settings.orientation == 'vertical') {
				$(settings.datesDiv).animate({'marginTop':defaultPositionDates-(heightDate*currentIndex)},{queue:false, duration:'settings.datesSpeed'});
			}
		});

		$(settings.nextButton).bind('click', function(event){
			event.preventDefault();
			// bugixed from 0.9.54: now the dates gets centered when there's too much dates.
			var currentIndex = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass).index();
			if(settings.orientation == 'horizontal') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/widthIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
				var currentIssueDate = currentPositionDates-widthDate;
				if(currentPositionIssues <= -(widthIssue*howManyIssues-(widthIssue))) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:last-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						// bugixed from 0.9.52: now the dates gets centered when there's too much dates.
						$(settings.datesDiv+' li').eq(currentIndex+1).find('a').trigger('click');
					}
				}
			} else if(settings.orientation == 'vertical') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/heightIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
				var currentIssueDate = currentPositionDates-heightDate;
				if(currentPositionIssues <= -(heightIssue*howManyIssues-(heightIssue))) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:last-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						// bugixed from 0.9.54: now the dates gets centered when there's too much dates.
						$(settings.datesDiv+' li').eq(currentIndex+1).find('a').trigger('click');
					}
				}
			}
			// prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows
			if(howManyDates == 1) {
				$(settings.prevButton+','+settings.nextButton).fadeOut('fast');
			} else if(howManyDates == 2) {
				if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.prevButton).fadeOut('fast');
				 	$(settings.nextButton).fadeIn('fast');
				} 
				else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.nextButton).fadeOut('fast');
					$(settings.prevButton).fadeIn('fast');
				}
			} else {
				if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.prevButton).fadeOut('fast');
				} 
				else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.nextButton).fadeOut('fast');
				}
				else {
					$(settings.nextButton+','+settings.prevButton).fadeIn('slow');
				}	
			}
		});

		$(settings.prevButton).click(function(event){
			event.preventDefault();
			// bugixed from 0.9.54: now the dates gets centered when there's too much dates.
			var currentIndex = $(settings.issuesDiv).find('li.'+settings.issuesSelectedClass).index();
			if(settings.orientation == 'horizontal') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0,$(settings.issuesDiv).css('marginLeft').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/widthIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0,$(settings.datesDiv).css('marginLeft').indexOf('px')));
				var currentIssueDate = currentPositionDates+widthDate;
				if(currentPositionIssues >= 0) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:first-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						// bugixed from 0.9.54: now the dates gets centered when there's too much dates.
						$(settings.datesDiv+' li').eq(currentIndex-1).find('a').trigger('click');
					}
				}
			} else if(settings.orientation == 'vertical') {
				var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0,$(settings.issuesDiv).css('marginTop').indexOf('px')));
				var currentIssueIndex = currentPositionIssues/heightIssue;
				var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0,$(settings.datesDiv).css('marginTop').indexOf('px')));
				var currentIssueDate = currentPositionDates+heightDate;
				if(currentPositionIssues >= 0) {
					$(settings.issuesDiv).stop();
					$(settings.datesDiv+' li:first-child a').click();
				} else {
					if (!$(settings.issuesDiv).is(':animated')) {
						// bugixed from 0.9.54: now the dates gets centered when there's too much dates.
						$(settings.datesDiv+' li').eq(currentIndex-1).find('a').trigger('click');
					}
				}
			}
			// prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows
			if(howManyDates == 1) {
				$(settings.prevButton+','+settings.nextButton).fadeOut('fast');
			} else if(howManyDates == 2) {
				if($(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.prevButton).fadeOut('fast');
				 	$(settings.nextButton).fadeIn('fast');
				} 
				else if($(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass)) {
					$(settings.nextButton).fadeOut('fast');
					$(settings.prevButton).fadeIn('fast');
				}
			} else {
				if( $(settings.issuesDiv+' li:first-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.prevButton).fadeOut('fast');
				} 
				else if( $(settings.issuesDiv+' li:last-child').hasClass(settings.issuesSelectedClass) ) {
					$(settings.nextButton).fadeOut('fast');
				}
				else {
					$(settings.nextButton+','+settings.prevButton).fadeIn('slow');
				}	
			}
		});
		// keyboard navigation, added since 0.9.1
		if(settings.arrowKeys=='true') {
			if(settings.orientation=='horizontal') {
				$(document).keydown(function(event){
					if (event.keyCode == 39) { 
				       $(settings.nextButton).click();
				    }
					if (event.keyCode == 37) { 
				       $(settings.prevButton).click();
				    }
				});
			} else if(settings.orientation=='vertical') {
				$(document).keydown(function(event){
					if (event.keyCode == 40) { 
				       $(settings.nextButton).click();
				    }
					if (event.keyCode == 38) { 
				       $(settings.prevButton).click();
				    }
				});
			}
		}
		// default position startAt, added since 0.9.3
		$(settings.datesDiv+' li').eq(settings.startAt-1).find('a').trigger('click');
		// autoPlay, added since 0.9.4
		if(settings.autoPlay == 'true') { 
			setInterval("autoPlay()", settings.autoPlayPause);
		}
	});
};

// autoPlay, added since 0.9.4
function autoPlay(){
	var currentDate = $(settings.datesDiv).find('a.'+settings.datesSelectedClass);
	if(settings.autoPlayDirection == 'forward') {
		if(currentDate.parent().is('li:last-child')) {
			$(settings.datesDiv+' li:first-child').find('a').trigger('click');
		} else {
			currentDate.parent().next().find('a').trigger('click');
		}
	} else if(settings.autoPlayDirection == 'backward') {
		if(currentDate.parent().is('li:first-child')) {
			$(settings.datesDiv+' li:last-child').find('a').trigger('click');
		} else {
			currentDate.parent().prev().find('a').trigger('click');
		}
	}
}
;
/*! Magnific Popup - v0.9.9 - 2014-09-06
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2014 Dmitry Semenov; */

;(function($) {

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_body,
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		if(!_body) {
			_body = $(document.body);
		}

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || _body );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},



	
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		
		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
			

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
			

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
		
		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,
	
		removalDelay: 0,

		prependTo: null,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...'

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);
		
		/*
		 * As Zepto doesn't support .data() method for objects 
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			_body.removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur)
				_body.addClass(_ajaxCur);

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});





	

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined) 
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+					
					'<figure>'+
						'<h3 class="mfp-title"></h3>'+
						'<div class="mfp-close"></div>'+
						'<div class="mfp-img"></div>'+
						'<figcaption class="clearfix">'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-counter"></div>'+
								'<div class="desc"></div>'+								
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: '', 
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					_body.addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					_body.removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				
				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				
				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					
					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');
							
						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {										
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			} 

			return template;
		}
	}
});



/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;		
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
				
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
					
					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image); 
					
					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images 

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					
					
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}	
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*
			
			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					} 
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: '',
		tNext: '',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true; // true - next, false - prev
			
			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});			
					arrowRight[eName](function() {
						mfp.next();
					});	

					// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);		
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
			
				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		}, 
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*/


/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/

/*>>fastclick*/
/**
 * FastClick event implementation. (removes 300ms delay on touch devices)
 * Based on https://developers.google.com/mobile/articles/fast_buttons
 *
 * You may use it outside the Magnific Popup by calling just:
 *
 * $('.your-el').mfpFastClick(function() {
 *     console.log('Clicked!');
 * });
 *
 * To unbind:
 * $('.your-el').destroyMfpFastClick();
 * 
 * 
 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
 * 
 */

(function() {
	var ghostClickDelay = 1000,
		supportsTouch = 'ontouchstart' in window,
		unbindTouchMove = function() {
			_window.off('touchmove'+ns+' touchend'+ns);
		},
		eName = 'mfpFastClick',
		ns = '.'+eName;


	// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
	$.fn.mfpFastClick = function(callback) {

		return $(this).each(function() {

			var elem = $(this),
				lock;

			if( supportsTouch ) {

				var timeout,
					startX,
					startY,
					pointerMoved,
					point,
					numPointers;

				elem.on('touchstart' + ns, function(e) {
					pointerMoved = false;
					numPointers = 1;

					point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
					startX = point.clientX;
					startY = point.clientY;

					_window.on('touchmove'+ns, function(e) {
						point = e.originalEvent ? e.originalEvent.touches : e.touches;
						numPointers = point.length;
						point = point[0];
						if (Math.abs(point.clientX - startX) > 10 ||
							Math.abs(point.clientY - startY) > 10) {
							pointerMoved = true;
							unbindTouchMove();
						}
					}).on('touchend'+ns, function(e) {
						unbindTouchMove();
						if(pointerMoved || numPointers > 1) {
							return;
						}
						lock = true;
						e.preventDefault();
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							lock = false;
						}, ghostClickDelay);
						callback();
					});
				});

			}

			elem.on('click' + ns, function() {
				if(!lock) {
					callback();
				}
			});
		});
	};

	$.fn.destroyMfpFastClick = function() {
		$(this).off('touchstart' + ns + ' click' + ns);
		if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
	};
})();

/*>>fastclick*/
 _checkInstance(); })(window.jQuery || window.Zepto);
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/

(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/


(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, applyHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		
		function update (){
			
			$this.each(function(){
								
				firstTop = $this.offset().top;

			});				
			
				var pos = $window.scrollTop();				
	
				$this.each(function(){					
					
					if(applyHeight==true){

						$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");

					}else{
						
						var secondTop=windowHeight+pos;

						var secondVal=firstTop-secondTop;

						if(secondTop>firstTop){

							$this.css('backgroundPosition', xpos + " " + Math.round((secondVal) * speedFactor) + "px");

						}

					}
					
				});
			
		}		

		
		if (arguments.length < 1 || xpos === null) xpos = "50%";		
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;		
		if (arguments.length < 3 || applyHeight === null) applyHeight = true;

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="https://maps.googleapis.com/maps/api/js"' +
                   ' type="text/javascript"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/vt?lyrs=m@278000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=m@278000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@278000000",["https://mts0.google.com/vt?lyrs=m@278000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=m@278000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://khms0.googleapis.com/kh?v=159\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=159\u0026hl=en-US\u0026"],null,null,null,1,"159",["https://khms0.google.com/kh?v=159\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=159\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?lyrs=h@278000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=h@278000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"h@278000000",["https://mts0.google.com/vt?lyrs=h@278000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=h@278000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?lyrs=t@132,r@278000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=t@132,r@278000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@132,r@278000000",["https://mts0.google.com/vt?lyrs=t@132,r@278000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=t@132,r@278000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=84\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=84\u0026hl=en-US\u0026"],null,null,null,null,"84",["https://khms0.google.com/kh?v=84\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=84\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?hl=en-US\u0026","https://mts1.googleapis.com/vt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com"],["https://maps.gstatic.com/maps-api-v3/api/js/18/9","3.18.9"],[4211611591],1,null,null,null,null,null,"",null,null,1,"https://khms.googleapis.com/mz?v=159\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/vt/icon",[["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",278000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",278000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"m",278000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"m",278000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",132],[0,"r",132000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],0],[null,[[4,"t",132],[0,"r",132000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[63],[37,[["smartmaps"]]]]],3],[null,null,[null,"en-US","US",null,18],0],[null,null,[null,"en-US","US",null,18],3],[null,null,[null,"en-US","US",null,18],6],[null,null,[null,"en-US","US",null,18],0],["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt",278000000,132],2,500,["https://geo0.ggpht.com/cbk","https://g0.gstatic.com/landmark/tour","https://g0.gstatic.com/landmark/config","","https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/"],["https://www.google.com/maps/api/js/master?pb=!1m2!1u18!2s9!2sen-US!3sUS!4s18/9","https://www.google.com/maps/api/js/widget?pb=!1m2!1u18!2s9!2sen-US"],1,0], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("js/mainmap.js");
})();
$(function(){


'use strict';

/* ==============================================
Detect Mobile Devices
=============================================== */
var detectmob = false; 

    if(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {  

            detectmob = true;

    }


/* ==============================================
Ajax Contact Form
=============================================== */
$('#contact-form').submit(function(e){

  e.preventDefault();

  $(document).ajaxStart(function(){

    $('.contact-output').html('<p>Sending</p>');

  });

  $.ajax({

    url:'contactform.php',
    type:'post',
    data:$('#contact-form').serialize(),
    success:function(){

      $('.contact-output').html('<p class="contact-success">Your message was sent successfully</p>');

    },
    error:function(){

      $('.contact-output').html('<p class="contact-error">Failed to send your message</p>');

    }


  });

});



/* ==============================================
Page Animations
=============================================== */
$('.animated').waypoint(function(){

var elem = $(this);

    var animation = elem.data('animation');

    if ( !elem.hasClass('visible') ) {

      var animationDelay = elem.data('animation-delay');

      if ( animationDelay ) {

        setTimeout(function(){

          elem.addClass( animation + " visible" );

        }, animationDelay);

      } else {

        elem.addClass( animation + " visible" );

      }

    }

},{triggerOnce:true,offset: function() {

    return $(window).height()-100;

  }});

$('.blog-single-article, .free-content').find('img').addClass('animated');

  $('.blog-single-article, .free-content').find('img').waypoint(function(){

      $(this).delay(200).addClass('visible fadeIn');

  },{triggerOnce:true,offset: function() {

    return $(window).height()-200;

  }});

  





/* ==============================================
 Element Animations
=============================================== */ 
/* Menu */
function fixed_menu(){

  var windowWidth=$(window).width();

  var windowPos=$(window).scrollTop();

    if(windowPos>150 && windowWidth>992){

      $('.fixed-header').fadeIn(300);

    }else{

      $('.fixed-header').slideUp(100);

    }

}


fixed_menu();

$(window).scroll(fixed_menu);
$(window).resize(fixed_menu);



/* Sticky Menu */
$('.search-slip').find('.fa').click(function(){

  $('.search-slip').find('input').delay(100).fadeIn(0).animate({
    width:'100px'
  },100);

  $(this).fadeOut(100);

});


$('body').click(function(){

  $('.search-slip').find('input').animate({
    width:0
  },100).fadeOut(10);

  $('.search-slip').find('.fa').fadeIn();

});


$('.search-slip').find('input').click(function(e){

  e.stopPropagation();

});

$('.search-slip').find('.fa').click(function(e){

  e.stopPropagation();

});






/* Scrolling */
if($('.section-quote').length){

  var sectionQuote=$('.section-quote').offset().top;

  $(window).resize(function(){

    sectionQuote=$('.section-quote').offset().top;

  });


  $('.scrolling-btn').click(function(){

    $('body').animate({scrollTop:sectionQuote+12},600);

  });

}




/* Header Banner Height */
var windowHeight=$(window).height();

$('.front-header').css({

  height:windowHeight+'px'

});



$(window).resize(function(){

  var windowHeight=$(window).height();

  $('.front-header').css({

    height:windowHeight+'px'

  });



});


/* Top Texts */
function top_headline(){

  if($(window).width()>992){

    var topheadline=$('.top-headline').height();

    $('.front-header').find('.top-headline').css({

      marginTop:-topheadline/2+'px',
      position:'absolute',
      top:'45%'

    });

  }else{

    $('.front-header').find('.top-headline').css({
      marginTop:'30px',
      position:'relative',
      top:0
    });

    $('.blog-single-header').find('.top-headline').css({

      marginTop:'100px'

    });

  }

}

top_headline();

$(window).resize(top_headline);




/* ==============================================
Drop-down Menu
=============================================== */
$('.blog-header,.front-header,.fixed-header').find('.nav li').hover(function(){

 $(this).find('ul').stop().fadeIn(300); 

 $(this).find('ul').siblings('a').css('borderBottom','2px solid #ff9000');



},function(){

  $(this).find('ul').stop().fadeOut(300); 

  $(this).find('ul').siblings('a').css('borderBottom','2px solid transparent');


});



/* ==============================================
Accordion
=============================================== */
$('.panel-title').find('a').click(function(e){

    $('.panel-title').find('a').parent('h6').removeClass('panel-active');

    $(this).parent('h6').addClass('panel-active');

    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
        e.stopPropagation();
        e.preventDefault();
    }

});


/* ==============================================
Masonry
=============================================== */
var postContainer=$('.post-loop-wrap');
var itemContainer=$('.masonry-layout');

var mwindow=$(window);

postContainer.imagesLoaded( function() {

 postContainer.masonry({
    columnWidth: '.col-sm-6.col-md-4',
    gutterWidth: 30
  }); 

});






/* ==============================================
Parallax
=============================================== */
if (detectmob != true) {

    $( '.front-header' ).parallax('50%',0.3,true);
    $( '.section-features' ).parallax('50%',0.4,false);
    $( '.section-counter' ).parallax('50%',0.4,false);
    $( '.section-card' ).parallax('50%',0.4,false);
    $( '.blog-header' ).parallax('50%',0.5,true);
    $( '.blog-single-header' ).parallax('50%',0.3,true);      

}



/* ==============================================
Top Elements Fading
=============================================== */
function element_fading(){

    var top=$(window).scrollTop();
    var wrap=$('.front-header,.blog-header .top-headline');
    var title=$('.front-header,.blog-header .top-headline').find('h1');
    var desc=$('.front-header,.blog-header .top-headline').find('.description');
    var separator=$('.front-header,.blog-header .top-headline').find('.separator');
    var button=$('.front-header').find('.detail-button');

    wrap.css('position','relative');
    title.css('position','relative');
    desc.css('position','relative');
    separator.css('position','relative');
    button.css('position','relative');


      if($(window).width()>992){

          title.animate({ 

            top:(top/6)+'px',
            opacity:1-top/260

          },0);

          desc.animate({

              top:(top/1.5)+'px',
              opacity:.7-top/350

           },0);
          
          separator.animate({

               top:top/2,            
               opacity:1-top/400          

           },0);

          button.animate({

              top:top/2,
              opacity:1-top/300

          },0);

      }

}


$(window).scroll(element_fading);
$(window).resize(element_fading);




/* ==============================================
About Blog Content
=============================================== */
$('.dropdown-trigger').hover(function(){

    $(this).siblings('ul').stop().fadeToggle('fast');

});

$('.dropdown-trigger').siblings('ul').hover(function(){

    $(this).stop().fadeToggle('fast');

});




/* ==============================================
Isotope
=============================================== */
$('.isotope-container').imagesLoaded( function() {  

   var $container = $('.isotope-container').isotope({
    transitionDuration: '.6s',
    masonry: {
        columnWidth: '.col-sm-6.col-md-4.col-lg-3'
      }
  });

  $('.filter-group').find('a').click(function(){

      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });

  });

});







/* ==============================================
Gallery
=============================================== */
$('.zoom-gallery').magnificPopup({

    delegate: '.image-zoom',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    navigateByImgClick: false,


    mainClass: 'mfp-with-zoom mfp-img-mobile',         
       gallery: {
        enabled: true
      },

      image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
    zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.siblings('img');
        }
    },
    callbacks: {

        markupParse      : function (template, values, item) {
        template.find('.desc').html('');
        var $desc = item.el.data("desc");       
                           
        template.find('.desc').append($desc);                            

        },


    }
      
});

$('.isotope-container').find('.isotope-single').hover(function(){

    $(this).children('img').stop().animate({
        opacity:'.3'
    },200);


    $(this).find('.image-zoom').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);


},function(){

    $(this).children('img').stop().animate({
        opacity:'1'
    },200);

    $(this).find('.image-zoom').stop().animate({

        marginTop:'-40px',
        opacity:0

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:0,
        opacity:0

    },200);

});



$('.filter-inner').find('a').click(function(){

    $('.filter-inner').find('a').removeClass('default');
    $(this).addClass('default');

});



/* ==============================================
Number Counter
=============================================== */
$('.section-counter').find('.counter-number').counterUp({
            delay: 10,
            time: 1000
        });


/* ==============================================
Team Slider
=============================================== */
$('.team-img-inner').freetile();
  
$('.teamslider-wrap').teamslider();




/* ==============================================
Timeline Calling
=============================================== */
if($('.section-history').length){

  $('#timeline').timelinr({
        orientation:  'vertical',
        issuesSpeed:  250,
        datesSpeed:   100,
        startAt:    1
  });

}



/* ==============================================
Vertical Slider
=============================================== */
 $('.vertical').verticalSlider();




/* ==============================================
Gallery Big Button
=============================================== */
  $('.gallery-inner-span').hover(function(){

    $('.gallery-inner-button').css('outline-color','white');
    $('.border-line-two').css('borderColor','white');

  },function(){

    $('.gallery-inner-button').css('outline','5px solid rgba(190,190,190,.3)');   
    $('.border-line-two') .css('borderColor','#3a5386');

  });



/* ==============================================
Blog Post Slider
=============================================== */
var postSlider = new Swiper('.blog-post-slider',{

  loop:true,
  speed:500

});

$('.post-slider-left').on('click', function(e){
    e.preventDefault()
    postSlider.swipePrev()
});

$('.post-slider-right').on('click', function(e){
    e.preventDefault()
    postSlider.swipeNext()
});


var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });



$(window).resize(function(){

  var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });


});



$('.swiper-slide,.post-slider-right,.post-slider-left').click(function(){

  var contentHeight=$('.blog-post-slider .swiper-slide-active').find('img').height();

  $('.blog-post-slider').css({

    height:contentHeight+'px'

  });

});


/* ==============================================
Video
=============================================== */
$(".player").mb_YTPlayer();

$('.player-icon').click(function(){
  $('.player').playYTP();
});


$('.player').on("YTPStart",function(){   
  $('.video-text-wrap').fadeOut();
});


$('.player').on("YTPPause YTPEnd",function(){   
  $('.video-text-wrap').fadeIn();
});


/* ==============================================
Gallery Inner
=============================================== */
$('.zoom-gallery').magnificPopup({

    delegate: '.image-zoom',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    navigateByImgClick: false,


    mainClass: 'mfp-with-zoom mfp-img-mobile',         
       gallery: {
        enabled: true
      },

      image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          },
    zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.siblings('img');
        }
    },
    callbacks: {

        markupParse      : function (template, values, item) {
        template.find('.desc').html('');
        var $desc = item.el.data("desc");       
                           
        template.find('.desc').append($desc);                            

        },


    }
      
});

$('.isotope-container').find('.isotope-single').hover(function(){

    $(this).children('img').stop().animate({
        opacity:'.3'
    },200);


    $(this).find('.image-zoom').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:'-20px',
        opacity:1

    },200);


},function(){

    $(this).children('img').stop().animate({
        opacity:'1'
    },200);

    $(this).find('.image-zoom').stop().animate({

        marginTop:'-40px',
        opacity:0

    },200);

    $(this).find('.image-permalink').stop().animate({

        marginTop:0,
        opacity:0

    },200);

});



$('.filter-inner').find('a').click(function(){

    $('.filter-inner').find('a').removeClass('default');
    $(this).addClass('default');

});


/* ==============================================
Cross Browser
=============================================== */
/* IE */
if($.browser.msie){

  /* All IE */
  $('input[type="text"],input[type="email"]').addClass('padding-bottom');

  /* IE 10 */
  if($.browser.version==10){

    $('.gallery-inner-span').addClass('padding-left');

    $('.section-gallery-inner .filter-inner').find('a').addClass('padding-top');

  }

  /* IE 9 */
  if($.browser.version==9){

    $('.gallery-inner-span').addClass('padding-left');

    $('.section-gallery-inner .filter-inner').find('a').addClass('padding-top');

    $('input[type="text"]').val('Name');

    $('input[type="text"]').focus(function(){

      if($(this).val()=='Name'){

        $(this).val('');

      }

    });



    $('input[type="email"]').val('Email');

    $('input[type="email"]').focus(function(){

      if($(this).val()=='Email'){

        $(this).val('');

      }

    });


    $('textarea').val('Message');

    $('textarea').focus(function(){

      if($(this).val()=='Message'){

        $(this).val('');

      }

    });

  } 


}


/* Fittext */
$('h1').fitText(1.4, { minFontSize: '19px', maxFontSize: '50px' });

$('h2').fitText(1, { minFontSize: '17px', maxFontSize: '40px' });

$('h3').fitText(1, { minFontSize: '15px', maxFontSize: '30px' });

$('.section-items .h-product').find('.p-name').fitText(1, { minFontSize: '13px', maxFontSize: '20px' });

$('.h-product').find('.p-category').fitText(1, { minFontSize: '12px', maxFontSize: '15px' });





/* Responsive */
$('.menu-open').click(function(){

  $('.mobile-menu-wrap').slideDown(200);

});


$('.menu-close').click(function(){

  $('.mobile-menu-wrap').slideUp(200);

});



$('.mobile-menu-wrap').find('a').click(function(){

  $('.mobile-menu-wrap').slideUp(200);

});


$('.mobile-isotope').click(function(){

  $('.filter-inner').slideToggle(200);

  $('.filter-inner').find('a').click(function(){

    $('.filter-inner').slideUp(200);

  });

});


function mobile_menu(){

  if($(window).width()>992){
    $('.mobile-menu-wrap').css('display','none');
  }

}

mobile_menu();
$(window).resize(mobile_menu);




/* ==============================================
Datepicker
=============================================== */
$( "#datepicker" ).datepicker({
  inline: true
});


/* ==============================================
Range Slider
=============================================== */
$( "#range-slider" ).slider({
  range: true,
  min:0,
  max:50,
  values: [ 10, 30 ],
  slide: function( event, ui ) {
        $( "#range-amount-1" ).text( "$" + ui.values[ 0 ]);
        $( "#range-amount-2" ).text( "$" + ui.values[ 1 ]);
      }
  
});

 $( "#range-amount-1" ).text( "$" + $( "#range-slider" ).slider( "values", 0 ) );
 $( "#range-amount-2" ).text( "$" + $( "#range-slider" ).slider( "values", 1 ) );




/* ==============================================
Items
=============================================== */
$('.minus-icon').click(function(){

  var qty=$(this).siblings('.quantity').text();

  qty--;

  if(qty<1){
    qty=1;
  }

  $(this).siblings('.quantity').text(qty);

});


$('.plus-icon').click(function(){

  var qty=$(this).siblings('.quantity').text();

  qty++;

  $(this).siblings('.quantity').text(qty);

});


/* Single Item */
var price=$('.items-single').find('.p-price').text();

$('.items-single .quantity-wrap').find('.plus-icon').click(function(){

  var single_qty=$('.quantity').text();

  

  var result=single_qty*price;

  $('.items-single').find('.p-price').text(result.toFixed(2));

});



$('.items-single .quantity-wrap').find('.minus-icon').click(function(){

  var single_qty=$('.quantity').text();

  

  var result=single_qty*price;

  $('.items-single').find('.p-price').text(result.toFixed(2));

});







var items=$('.section-items').find('.h-product');

if(detectmob!=true){

  itemContainer.imagesLoaded( function() {

    $('.masonry-layout').masonry({
      columnWidth:'.h-product'
    });

  });



  

  $('.section-items').find('.h-product').hover(function(){

    $(this).children('.quantity-buy').stop().fadeToggle(200);

    $(this).stop().toggleClass('items-scale');

  });

}else{

  $('.section-items').find('.quantity-buy').css('display','block');

}



$('.rate-star').eq(4).prevAll().addClass('rate-star-active'); // You can DELETE!!!! this line.


$('.rate-star').click(function(){

  $(this).prevAll().andSelf().addClass('rate-star-active');
  $(this).nextAll().removeClass('rate-star-active');

});



/* ==============================================
Map Calling
=============================================== */
 function initialize() {

  var mapCanvas = document.getElementById('map_canvas');

  var myLocation = new google.maps.LatLng(39.9177, 32.8560);

  var mapOptions = {
    center: myLocation,
    zoom: 15,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl:false
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: myLocation,
      map: map,
      icon: 'img/marker.png'
  });


    map.set('styles', [
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { color: '#e4d4b4' },
      { weight: 1 }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { saturation: 1 },
      { invert_lightness: false }
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffff00' },
      { gamma: 1.4 },
      { saturation: 82 },
      { lightness: 96 }
    ]
  }, {
    featureType: 'poi.school',
    elementType: 'geometry',
    stylers: [
      { hue: '##21366c' },
     
    ]
  }
]);    


}


if($('.section-map').length){

  google.maps.event.addDomListener(window, 'load', initialize);
  
}


/* ==============================================
Page Loader
=============================================== */
$(document).imagesLoaded(function(){

  $('.page-loader').find('img').fadeOut(300);
$('.page-loader').delay(100).fadeOut(500);

});






/* ==============================================
Safari Fix
=============================================== */
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){

  $('.fixed-header').find('.col-sm-7').css({

    paddingBottom:'1px'

  });

}




});
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);




















