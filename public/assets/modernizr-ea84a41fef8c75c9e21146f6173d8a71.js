window.Modernizr=function(e,t,n){function r(e){p.cssText=e}function o(e,t){return typeof e===t}var a,i,c,l="2.6.1",u={},s=t.documentElement,f="modernizr",d=t.createElement(f),p=d.style,h=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),m={},y=[],g=y.slice,v=function(e,n,r,o){var a,i,c,l=t.createElement("div"),u=t.body,d=u?u:t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:f+(r+1),l.appendChild(c);return a=["&#173;",'<style id="s',f,'">',e,"</style>"].join(""),l.id=f,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",s.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):d.parentNode.removeChild(d),!!i},b={}.hasOwnProperty;c=o(b,"undefined")||o(b.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return b.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=g.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(g.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(g.call(arguments)))};return r}),m.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:v(["@media (",h.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n};for(var E in m)c(m,E)&&(i=E.toLowerCase(),u[i]=m[E](),y.push((u[i]?"":"no-")+i));return u.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,enableClasses&&(s.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),d=a=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[h]];return t||(t={},m++,e[h]=m,y[m]=t),t}function a(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),a.canHaveChildren&&!d.test(e)?r.frag.appendChild(a):a}function i(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;l>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var r=o(e);return g.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),s||c(e,r),e}var u,s,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,h="_html5shiv",m=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,s=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:s,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=g,l(t)}(this,t),u._version=l,u._prefixes=h,u.testStyles=v,u}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=g.shift();v=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):v=0}function l(e,n,r,o,a,l,u){function s(t){if(!p&&i(f.readyState)&&(b.r=p=1,!v&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){C.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var u=u||d.errorTimeout,f=t.createElement(e),p=0,y=0,b={t:r,s:n,e:a,a:l,x:u};1===T[n]&&(y=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){s.call(this,y)},g.splice(o,0,b),"img"!=e&&(y||2===T[n]?(C.insertBefore(f,E?null:m),h(s,u)):T[n].push(f))}function u(e,t,n,r,a){return v=0,t=t||"j",o(e)?l("c"==t?j:S,e,t,this.i++,n,r,a):(g.splice(this.i++,0,e),1==g.length&&c()),this}function s(){var e=d;return e.loader={load:u,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,g=[],v=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,C=E?p:m.parentNode,p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,S=b?"object":p?"script":"img",j=p?"script":S,w=Array.isArray||function(e){return"[object Array]"==y.call(e)},x=[],T={},F={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=x.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;i>n;n++)r=e[n].split("="),(t=F[r.shift()])&&(a=t(a,r));for(n=0;o>n;n++)a=x[n](a);return a}function i(e,o,a,i,c){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,a,i,c):(T[l.url]?l.noexec=!0:T[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(u))&&a.load(function(){s(),o&&o(l.origUrl,c,i),u&&u(l.origUrl,c,i),T[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),i(e,f,t,0,u);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[l])),i(e[l],f,t,l,u))}else!n&&p()}var c,l,u=!!e.test,s=e.load||e.both,f=e.callback||a,d=f,p=e.complete||a;n(u?e.yep:e.nope,!!s),s&&n(s)}var l,u,f=this.yepnope.loader;if(o(e))i(e,0,f,0);else if(w(e))for(l=0;l<e.length;l++)u=e[l],o(u)?i(u,0,f,0):w(u)?d(u):Object(u)===u&&c(u,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){F[e]=t},d.addFilter=function(e){x.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,u){var s,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=u?c:n||a,p.onreadystatechange=p.onload=function(){!s&&i(p.readyState)&&(s=1,n(),p.onload=p.onreadystatechange=null)},h(function(){s||(s=1,n(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,i,l){var u,o=t.createElement("link"),n=l?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);i||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};