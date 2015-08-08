var Query=function(t){"use strict";var e=function(t){var e,n,r,u,o=[];if("undefined"==typeof t||null===t||""===t)return o;for(0===t.indexOf("?")&&(t=t.substring(1)),n=t.toString().split(/[&;]/),e=0;e<n.length;e++)r=n[e],u=r.split("="),o.push([u[0],u[1]]);return o},n=e(t),r=function(){var t,e,r="";for(t=0;t<n.length;t++)e=n[t],r.length>0&&(r+="&"),r+=e.join("=");return r.length>0?"?"+r:r},u=function(t){return t=decodeURIComponent(t),t=t.replace("+"," ")},o=function(t){var e,r;for(r=0;r<n.length;r++)if(e=n[r],u(t)===u(e[0]))return e[1]},i=function(t){var e,r,o=[];for(e=0;e<n.length;e++)r=n[e],u(t)===u(r[0])&&o.push(r[1]);return o},a=function(t,e){var r,o,i,a,f=[];for(r=0;r<n.length;r++)o=n[r],i=u(o[0])===u(t),a=u(o[1])===u(e),(1===arguments.length&&!i||2===arguments.length&&!i&&!a)&&f.push(o);return n=f,this},f=function(t,e,r){return 3===arguments.length&&-1!==r?(r=Math.min(r,n.length),n.splice(r,0,[t,e])):arguments.length>0&&n.push([t,e]),this},s=function(t,e,r){var o,i,s=-1;if(3===arguments.length){for(o=0;o<n.length;o++)if(i=n[o],u(i[0])===u(t)&&decodeURIComponent(i[1])===u(r)){s=o;break}a(t,r).addParam(t,e,s)}else{for(o=0;o<n.length;o++)if(i=n[o],u(i[0])===u(t)){s=o;break}a(t),f(t,e,s)}return this};return{getParamValue:o,getParamValues:i,deleteParam:a,addParam:f,replaceParam:s,toString:r}},Uri=function(t){"use strict";var e=!1,n=function(t){for(var n={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],u={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},o=n[e?"strict":"loose"].exec(t),i={},a=14;a--;)i[r[a]]=o[a]||"";return i[u.name]={},i[r[12]].replace(u.parser,function(t,e,n){e&&(i[u.name][e]=n)}),i},r=n(t||""),u=new Query(r.query),o=function(t){return"undefined"!=typeof t&&(r.protocol=t),r.protocol},i=null,a=function(t){return"undefined"!=typeof t&&(i=t),null===i?-1!==r.source.indexOf("//"):i},f=function(t){return"undefined"!=typeof t&&(r.userInfo=t),r.userInfo},s=function(t){return"undefined"!=typeof t&&(r.host=t),r.host},c=function(t){return"undefined"!=typeof t&&(r.port=t),r.port},l=function(t){return"undefined"!=typeof t&&(r.path=t),r.path},h=function(t){return"undefined"!=typeof t&&(u=new Query(t)),u},d=function(t){return"undefined"!=typeof t&&(r.anchor=t),r.anchor},g=function(t){return o(t),this},p=function(t){return a(t),this},m=function(t){return f(t),this},y=function(t){return s(t),this},P=function(t){return c(t),this},v=function(t){return l(t),this},x=function(t){return h(t),this},Q=function(t){return d(t),this},I=function(t){return h().getParamValue(t)},S=function(t){return h().getParamValues(t)},U=function(t,e){return 2===arguments.length?h().deleteParam(t,e):h().deleteParam(t),this},O=function(t,e,n){return 3===arguments.length?h().addParam(t,e,n):h().addParam(t,e),this},V=function(t,e,n){return 3===arguments.length?h().replaceParam(t,e,n):h().replaceParam(t,e),this},q=function(){var t="",e=function(t){return null!==t&&""!==t};return e(o())?(t+=o(),o().indexOf(":")!==o().length-1&&(t+=":"),t+="//"):a()&&e(s())&&(t+="//"),e(f())&&e(s())&&(t+=f(),f().indexOf("@")!==f().length-1&&(t+="@")),e(s())&&(t+=s(),e(c())&&(t+=":"+c())),e(l())?t+=l():e(s())&&(e(h().toString())||e(d()))&&(t+="/"),e(h().toString())&&(0!==h().toString().indexOf("?")&&(t+="?"),t+=h().toString()),e(d())&&(0!==d().indexOf("#")&&(t+="#"),t+=d()),t},w=function(){return new Uri(q())};return{protocol:o,hasAuthorityPrefix:a,userInfo:f,host:s,port:c,path:l,query:h,anchor:d,setProtocol:g,setHasAuthorityPrefix:p,setUserInfo:m,setHost:y,setPort:P,setPath:v,setQuery:x,setAnchor:Q,getQueryParamValue:I,getQueryParamValues:S,deleteQueryParam:U,addQueryParam:O,replaceQueryParam:V,toString:q,clone:w}},jsUri=Uri;