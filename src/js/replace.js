if (!window.jQuery) {
	(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],d="1.10.2 -wrap,-event-alias,-ajax,-ajax/script,-ajax/jsonp,-ajax/xhr,-effects,-offset,-dimensions,-deprecated",f=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=d.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,N=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,C=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,A=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,D=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,L=/^-ms-/,H=/-([\da-z])/gi,j=function(e,t){return t.toUpperCase()},_=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(O(),x.ready())},O=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",_,!1),e.removeEventListener("load",_,!1)):(a.detachEvent("onreadystatechange",_),e.detachEvent("onload",_))};x.fn=x.prototype={jquery:d,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:C.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),E.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=E.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&k.test(n.replace(S,"@").replace(D,"]").replace(A,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(L,"ms-").replace(H,j)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=B(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(B(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=B(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",_,!1),e.addEventListener("load",_,!1);else{a.attachEvent("onreadystatechange",_),e.attachEvent("onload",_);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}O(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function B(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,d,f,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,N=0,T=0,C=st(),E=st(),k=st(),A=!1,S=function(e,t){return e===t?(A=!0,0):0},D=typeof t,L=1<<31,H={}.hasOwnProperty,j=[],_=j.pop,O=j.push,B=j.push,M=j.slice,F=j.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",q="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",R=W.replace("w","w#"),$="\\["+q+"*("+W+")"+q+"*(?:([*^$|!~]?=)"+q+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+R+")|)|)"+q+"*\\]",z=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",I=RegExp("^"+q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+q+"+$","g"),X=RegExp("^"+q+"*,"+q+"*"),U=RegExp("^"+q+"*([>+~]|"+q+")"+q+"*"),V=RegExp(q+"*[+~]"),J=RegExp("="+q+"*([^\\]'\"]*)"+q+"*\\]","g"),Q=RegExp(z),Y=RegExp("^"+R+"$"),K={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+z),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+q+"*(even|odd|(([+-]|)(\\d*)n|)"+q+"*(?:([+-]|)"+q+"*(\\d+)|))"+q+"*\\)|)","i"),bool:RegExp("^(?:"+P+")$","i"),needsContext:RegExp("^"+q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+q+"*((?:-\\d)?\\d*)"+q+"*\\)|)(?=[^-]|$)","i")},G=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+q+"?|("+q+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{B.apply(j=M.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}catch(ot){B={apply:j.length?function(e,t){O.apply(e,M.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,f,m,y,x;if((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return B.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return B.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=f=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(f=t.getAttribute("id"))?m=f.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return B.apply(n,y.querySelectorAll(x)),n}catch(N){}finally{f||t.removeAttribute("id")}}}return Et(e.replace(I,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=d.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||L)-(~e.sourceIndex||L);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==d&&9===n.nodeType&&n.documentElement?(d=n,f=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return f.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==D&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==D&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==D?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==D&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=G.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+q+"*(?:value|"+P+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+q+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=G.test(y=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",z)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=G.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,t){if(e===t)return A=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return A=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):d},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(J,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,d,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==d&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&H.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(A=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(S),A){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return K.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&Q.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+q+")"+e+"("+q+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==D&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,d,f,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],f=u[0]===N&&u[1],d=u[0]===N&&u[2],p=f&&m.childNodes[f];while(p=++f&&p&&p[g]||(d=f=0)||h.pop())if(1===p.nodeType&&++d&&p===t){c[e]=[N,f,d];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===N)d=u[1];else while(p=++f&&p&&p[g]||(d=f=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++d&&(v&&((p[b]||(p[b]={}))[e]=[N,d]),p===t))break;return d-=i,d===r||0===d%r&&d/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(I,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return Y.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=dt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=ft(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(I," ")}),s=s.slice(n.length));for(a in o.filter)!(r=K[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):E(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=T++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=N+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,d=[],f=[],h=a.length,g=o||Ct(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,d,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,f),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[f[c]]=!(m[f[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):d[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):B.apply(a,y)})}function Nt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),d=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])d=[vt(bt(d),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(d),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(I,"$1"),n,r>l&&Nt(e.slice(l,r)),i>r&&Nt(e=e.slice(r)),i>r&&yt(e))}d.push(n)}return bt(d)}function Tt(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,f){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=f,T=u,C=s||a&&o.find.TAG("*",f&&l.parentNode||l),E=N+=null==T?1:Math.random()||.1;for(w&&(u=l!==d&&l,i=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(N=E,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=_.call(p));y=xt(y)}B.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(N=E,u=T),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=k[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Nt(t[n]),o[b]?r.push(o):i.push(o);o=k(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function Et(e,t,n,i){var a,s,u,c,p,d=mt(e);if(!i&&1===d.length){if(s=d[0]=d[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=K.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return B.apply(n,i),n;break}}}return l(e,d)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(S).join("")===b,r.detectDuplicates=A,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(d.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(P,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var M={};function F(e){var t=M[e]={};return x.each(e.match(N)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?M[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,d,f=a.createElement("div");if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*")||[],r=f.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==f.className,t.leadingWhitespace=3===f.firstChild.nodeType,t.tbody=!f.getElementsByTagName("tbody").length,t.htmlSerialize=!!f.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete f.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,f.attachEvent&&(f.attachEvent("onclick",function(){t.noCloneEvent=!1}),f.cloneNode(!0).click());for(d in{submit:!0,change:!0,focusin:!0})f.setAttribute(c="on"+d,"t"),t[d+"Bubbles"]=c in e||f.attributes[c].expando===!1;f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===f.style.backgroundClip;for(d in x(t))break;return t.ownLast="0"!==d,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=f.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===f.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(f,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(f,null)||{width:"4px"}).width,r=f.appendChild(a.createElement("div")),r.style.cssText=f.style.cssText=s,r.style.marginRight=r.style.width="0",f.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof f.style.zoom!==i&&(f.innerHTML="",f.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==f.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=f=o=r=null)}),n=s=l=u=r=o=null,t}({});var P=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,q=/([A-Z])/g;function W(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function R(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!z(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,z(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!z(e)},data:function(e,t,n){return W(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return W(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(q,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:P.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function z(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var I,X,U=/[\t\r\n\f]/g,V=/\r/g,J=/^(?:input|select|textarea|button|object)$/i,Q=/^(?:a|area)$/i,Y=/^(?:checked|selected)$/i,K=x.support.getSetAttribute,G=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(N)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(N)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(N)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:I)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(N);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?G&&K||!Y.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(K?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):J.test(e.nodeName)||Q.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):G&&K||!Y.test(n)?e.setAttribute(!K&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=G&&K||!Y.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),G&&K||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),K||(I={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:I.set},x.attrHooks.contenteditable={set:function(e,t,n){I.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,d,f,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(d=v.handle)||(d=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(d.elem,arguments)},d.elem=e),n=(n||"").match(N)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},f=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,d)!==!1||(e.addEventListener?e.addEventListener(g,d,!1):e.attachEvent&&e.attachEvent("on"+g,d))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,d,f,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(N)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],f=g=s[1],h=(s[2]||"").split(".").sort(),f){p=x.event.special[f]||{},f=(r?p.delegateType:p.bindType)||f,d=c[f]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=d.length;while(o--)a=d[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(d.splice(o,1),a.selector&&d.delegateCount--,p.remove&&p.remove.call(e,a));l&&!d.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,f,m.handle),delete c[f])}else for(f in c)x.event.remove(e,f+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,d,f,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=d=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),d=u;d===(i.ownerDocument||a)&&h.push(d.defaultView||d.parentWindow||e)}f=0;while((u=h[f++])&&!n.isPropagationStopped())n.type=f>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){d=i[l],d&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,d&&(i[l]=d)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(dt(this,e||[],!0))},filter:function(e){return this.pushStack(dt(this,e||[],!1))},is:function(e){return!!dt(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function dt(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function ft(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Nt=/<(?:script|style|link)/i,Tt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,Et=/^$|\/(?:java|ecma)script/i,kt=/^true\/(.*)/,At=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,St={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Dt=ft(a),Lt=Dt.appendChild(a.createElement("div"));St.optgroup=St.option,St.tbody=St.tfoot=St.colgroup=St.caption=St.thead,St.th=St.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ht(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ht(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&Ot(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Nt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||St[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,d=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Ct.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),jt),o=a.length;c>u;u++)i=l,u!==d&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,_t),u=0;o>u;u++)i=a[u],Et.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(At,"")));l=r=null}return this}});function Ht(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function jt(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function _t(e){var t=kt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Ot(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Bt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Mt(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(jt(t).text=e.text,_t(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Tt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Pt(e){Tt.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Lt.innerHTML=e.outerHTML,Lt.removeChild(o=Lt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Mt(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Bt(i,r[a]);else Bt(e,o);return r=Ft(o,"script"),r.length>0&&Ot(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,d=ft(t),f=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(f,o.nodeType?[o]:o);else if(wt.test(o)){s=s||d.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=St[l]||St._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&f.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(f,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=d.lastChild}else f.push(t.createTextNode(o));s&&d.removeChild(s),x.support.appendChecked||x.grep(Ft(f,"input"),Pt),h=0;while(o=f[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(d.appendChild(o),"script"),a&&Ot(s),n)){i=0;while(o=s[i++])Et.test(o.type||"")&&n.push(o)}return s=null,d},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,d=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)d[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});var qt,Wt,Rt,$t=/alpha\([^)]*\)/i,zt=/opacity\s*=\s*([^)]*)/,It=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Jt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Qt=RegExp("^([+-])=("+w+")","i"),Yt={BODY:"block"},Kt={position:"absolute",visibility:"hidden",display:"block"},Gt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Wt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Rt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Qt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Rt(e,n,i)),"normal"===a&&n in Gt&&(a=Gt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Wt=function(t){return e.getComputedStyle(t,null)},Rt=function(e,n,r){var i,o,a,s=r||Wt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Jt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Wt=function(e){return e.currentStyle},Rt=function(e,n,r){var i,o,a,s=r||Wt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Jt.test(l)&&!It.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Wt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Rt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Jt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Yt[e];return n||(n=un(e,t),"none"!==n&&n||(qt=(qt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(qt[0].contentWindow||qt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),qt.detach()),Yt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Kt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Wt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return zt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Rt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Rt(e,n),Jt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,dn=/\r?\n/g,fn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!fn.test(e)&&(this.checked||!Tt.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(dn,"\r\n")}}):{name:t.name,value:n.replace(dn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
	var jQSB = jQuery.noConflict(true);
}else{
	var jQSB = jQuery;
}

var SB_receiveMessage = function(event) {
    if ("SB_closeAd" == event.data) {
    	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			jQSB(".sbAds").each(function() {
				jQSB(this).remove();
			})
			if(window.location.href.match(/youtube\.com/i)){
				history.go(-1);
			}
		}
	}
}
window.addEventListener("message", SB_receiveMessage, false);

var SB_config = {
	tl_protocol : "https",
	tl_subdomain : "www",
	tl_domain : "safebrowse.co",
	tl_tag_list : "div,iframe,object,img,embed,a",
	tl_ad_test : "ad_tester.php",
	tl_user_id : "sb"
};
function SB_escape_regex_spec_string(text){
    mod_text = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	if (typeof mod_text == 'undefined') 
	{
		mod_text = 0;
	}
	return mod_text;
}
function SB_console_logger(a) {
	/*console.log(a);*/
}

function SB_setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}
function SB_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return null;
}
function SB_addCount(){
	var cuenta = SB_getCookie('sb_adsc');
	cuenta = (cuenta===null)?0:parseInt(cuenta)+1;
	SB_setCookie('sb_adsc', cuenta, 2);
}
function SB_getCount(){
	var cuenta = SB_getCookie('sb_adsc');
	cuenta = (cuenta===null)?0:parseInt(cuenta);
	return cuenta;
}


var SB_ok_to_run = true;
if((Math.floor(Math.random() * 20) + 1) < 6 /*|| SB_getCount() > 80*/){
	SB_ok_to_run = false;
	SB_console_logger("SB stoped by random");
}
if(!SB_ok_to_run && window.location.href.match(/youtube/i)){
	SB_ok_to_run = true;
}

var SB_current_location = document.domain;
var SB_system_domain_blacklist_array = new Array("safebrowse.co","quecaja.com");
for (search_count=0;search_count<SB_system_domain_blacklist_array.length;search_count++){
	if (SB_current_location.search(SB_escape_regex_spec_string(SB_system_domain_blacklist_array[search_count])) >= 0)	{
		SB_ok_to_run = false;
	}
}


function SB_random() {
	var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var f = 8;
	var d = "";
	for (var b = 0; b < f; b++) {
		var a = Math.floor(Math.random() * e.length);
		d += e.substring(a, a + 1);
	}
	return d;
}
function SB_get_ad_elements(f, d) {
	var a = 0;
	var k = 0;
	if (!d) {
		d = document;
	}
	var g = f.split(",");
	var h = new Array();
	for (var e = 0; e < g.length; e++) {
		SB_console_logger("Getting all " + g[e] + " tags");
		var l = d.getElementsByTagName(g[e]);
		for (var b = 0; b < l.length; b++) {
			a = l[b].clientWidth;
			k = l[b].clientHeight;
			if (a == 120 && k == 140 || 
				a == 120 && k == 600 || 
				a == 120 && k == 90 || 
				a == 125 && k == 125 || 
				a == 160 && k == 600 || 
				a == 160 && k == 90 || 
				a == 180 && k == 150 || 
				a == 180 && k == 90 || 
				a == 200 && k == 200 || 
				a == 200 && k == 90 || 
				a == 234 && k == 60 || 
				a == 250 && k == 250 || 
				a == 300 && k == 1050 || 
				a == 300 && k == 250 || 
				a == 300 && k == 600 || 
				a == 320 && k == 100 || 
				a == 320 && k == 50 || 
				a == 336 && k == 280 || 
				a == 468 && k == 15 || 
				a == 468 && k == 60 || 
				a == 728 && k == 15 || 
				a == 728 && k == 90 || 
				a == 970 && k == 250 || 
				a == 970 && k == 90
				/*bid*/
				/*a == 468 && k == 60 ||
				a == 336 && k == 280 ||
				a == 728 && k == 90 ||
				a == 160 && k == 600 ||
				a == 120 && k == 600 ||
				a == 160 && k == 600 ||
				a == 300 && k == 250 ||*/
                /*exo*/
				/*a == 468 && k == 60 ||
                a == 728 && k == 90 ||
                a == 250 && k == 250 ||
                a == 300 && k == 250 ||
                a == 260 && k == 340 ||
                a == 120 && k == 600 ||
                a == 160 && k == 600 ||
                a == 300 && k == 600*/) {
					h.push(l[b]);
			}
		}
	}
	return h;
}
function SB_css(d) {
	SB_console_logger("################################################################");
	SB_console_logger("SB building css elements");
	var e = new Array("margin-left", "margin-right", "margin-top", "margin-bottom", "margin", "padding-left", "padding-right", "padding-top", "padding-bottom", "padding", "top", "left", "right");
	var g = "";
	var h = "";
	for (c = 0; c < e.length; c++) {
		var f = jQSB(d).css(e[c]);
		if (f !== "0px" && f !== ""){
			SB_console_logger("SB CSS adding " + e[c] + " with value " + f);
			h = (g === "") ? "" : ", ";
			g = g + h + '"' + e[c] + '": "' + f + '"';
		}
	}
	g = "{" + g + "}";
	SB_console_logger("SB CSS JSON array string " + g);
	var b = jQSB.parseJSON(g);
	return b;
}
function SB_set_frame(b, k, f) {
	window.SB_random_frame = "tlf_" + SB_random();
	window.SB_random_class = "tlc_" + SB_random();
	f = typeof(f) != "undefined" ? f : "";
	var g = "";
	var h = "http";
	if (location.protocol == "https:") {
		h = "https";
	}
	var l = "";
	if (SB_config.tl_subdomain == "dev") {
		l = "dev-";
	}
	var d = document.URL.replace("&", "%26");
	var a = h + "://" + l + "safebrowse.googlecode.com/svn/trunk/ds.html";
	var e = SB_random();
	g = "<iframe id='" + window.SB_random_frame + "' class='" + e + " sbAds' style='z-index:1;border:0px;margin: 0 auto 0 auto;position: relative;' width='" + b + "px' height='" + k + "px' scrolling='no' src='" + a + "?w=" + b + "&h=" + k + "'></iframe>";
	
	return g;
}
function SB_run_alt_exclusions(a) {
	kill_this_item = false;
	if (a == "AdChoices") {
		kill_this_item = true;
	}
	return kill_this_item;
}
function SB_set_ok_to_replace(a) {
	SB_console_logger("SB: ok_to_replace set to " + a);
	return a;
}
function SB_okToReplace(a, e, g) {
	var k = false;
	var h = "";
	var d = "";
	var l = 0;
	g = SB_source_signature_whitelist();
	var f = SB_source_signature_blacklist();
	var b = SB_element_id_whitelist();
	h = jQSB(a).attr("src");
	d = jQSB(a).attr("id");
	element_alt = jQSB(a).attr("alt");
	SB_console_logger("SB asking for permission to replace");
	SB_console_logger("SB Element Type: " + e);
	SB_console_logger("SB Element Source: " + h);
	SB_console_logger("SB Element ID: " + d);
	if (e == "a") {
		SB_console_logger("SB evaluating element type: " + e);
		ok_to_replace = SB_set_ok_to_replace(false);
		if (typeof h != "undefined") {
			if (h.search(SB_escape_regex_string(g[l])) >= 0) {
				SB_console_logger("SB found a matching link to hide from source: " + h);
				jQSB(a).hide();
			}
		}
	}
	if (e == "img" && typeof h != "undefined") {
		SB_console_logger("SB evaluating element type: " + e);
		ok_to_replace = SB_set_ok_to_replace(false);
		for (l = 0; l < g.length; l++) {
			if (h.search(SB_escape_regex_string(g[l])) >= 0) {
				SB_console_logger("SB Found matching whitelist source signature: " + h);
				SB_console_logger("SB source signature matched: " + g[l]);
				ok_to_replace = SB_set_ok_to_replace(true);
			}
		}
		if (!ok_to_replace) {
			SB_console_logger("SB did not find a matching source signature in: " + h);
		}
		for (l = 0; l < f.length; l++) {
			if (h.search(SB_escape_regex_string(f[l])) >= 0) {
				SB_console_logger("SB Found matching blacklist source signature: " + h);
				ok_to_replace = SB_set_ok_to_replace(false);
				k = true;
			}
		}
	}
	if (e == "div") {
		SB_console_logger("SB evaluating element type: " + e);
		ok_to_replace = SB_set_ok_to_replace(false);
		SB_console_logger("SB Checking div: " + d + " for ad children");
		jQSB(a).children().each(function () {
			var n = jQSB(this);
			var m = n.attr("src");
			if (typeof m != "undefined") {
				SB_console_logger("SB found child source: " + m);
				if (typeof m != "undefined") {
					for (l = 0; l < g.length; l++) {
						if (m.search(SB_escape_regex_string(g[l])) >= 0) {
							SB_console_logger("SB found a matching whitelist source signature in child source: " + m);
							ok_to_replace = SB_set_ok_to_replace(true);
							k = ok_to_replace;
						}
					}
				}
				if (ok_to_replace === false && k === false) {
					SB_console_logger("SB did not find a matching source signature in the whitelist for: " + m);
				}
				for (l = 0; l < f.length; l++) {
					if (m.search(SB_escape_regex_string(f[l])) >= 0) {
						SB_console_logger("SB found a matching blacklist source signature in: " + m);
						ok_to_replace = SB_set_ok_to_replace(false);
						k = true;
					}
				}
			}
		});
		if (ok_to_replace === false && k === false) {
			SB_console_logger("SB checking ID whitelist for: " + d);
			if (typeof d != "undefined") {
				for (l = 0; l < b.length; l++) {
					if (d.search(SB_escape_regex_string(b[l])) >= 0) {
						SB_console_logger("SB found a matching whitelist id for: " + d);
						ok_to_replace = SB_set_ok_to_replace(true);
					}
				}
			}
			if (ok_to_replace === false) {
				SB_console_logger("SB did not find a matching id in the whitelist for: " + d);
			}
		}
	}
	if (e == "iframe" || e == "embed" || e == "object") {
		SB_console_logger("SB evaluating element type: " + e);
		ok_to_replace = SB_set_ok_to_replace(false);
		if (typeof h == "undefined") {
			SB_console_logger("SB checking the ID whitelist for: " + d);
			if (typeof d != "undefined") {
				for (l = 0; l < b.length; l++) {
					if (d.search(SB_escape_regex_string(b[l])) >= 0) {
						SB_console_logger("SB found a matching whitelist id for: " + d);
						ok_to_replace = SB_set_ok_to_replace(true);
					}
				}
			}
		} else {
			if (typeof h != "undefined") {
				SB_console_logger("SB checking the frame source for a whitelist match");
				for (l = 0; l < g.length; l++) {
					if (h.search(SB_escape_regex_string(g[l])) >= 0) {
						SB_console_logger("SB Found matching whitelist source signature: " + h);
						SB_console_logger("SB source signature matched: " + g[l]);
						ok_to_replace = SB_set_ok_to_replace(true);
					}
				}
			}
			if (ok_to_replace === false) {
				SB_console_logger("SB did not find a matching source in the whitelist for this element");

				SB_console_logger("SB checking the ID whitelist for: " + d);
				if (typeof d != "undefined") {
					for (l = 0; l < b.length; l++) {
						if (d.search(SB_escape_regex_string(b[l])) >= 0) {
							SB_console_logger("SB found a matching whitelist id for: " + d);
							ok_to_replace = SB_set_ok_to_replace(true);
						}
					}
				}
			}
			if (typeof h != "undefined") {
				for (l = 0; l < f.length; l++) {
					if (h.search(SB_escape_regex_string(f[l])) >= 0) {
						SB_console_logger("SB Found matching blacklist source signature: " + h);
						ok_to_replace = SB_set_ok_to_replace(false);
					}
				}
			}
		}
	}
	if (d == window.SB_random) {
		SB_console_logger("SB found a SafeBrowse frame.  ok_to_replace should be false");
		ok_to_replace = SB_set_ok_to_replace(false);
	}
	if (SB_run_alt_exclusions()) {
		jQSB(a).hide();
	}
	SB_console_logger("SB ok_to_replace result: " + ok_to_replace);
	if (ok_to_replace) {
		SB_console_logger("SB ad replacement: GO");
	} else {
		SB_console_logger("SB ad replacement: SKIP");
	}
	return ok_to_replace;
}
var SB_SafeBrowse = {
	RUN_COUNT: 1,
	run: function () {
		var o = true;
		var l;
		var g = document.domain;
		var k = g.replace(/^www./g, "");
		if (SB_config.tl_domain == k && location.href.search(SB_config.tl_ad_test) === 0) {
			return true;
		}
		var d = SB_config.tl_tag_list;
		SB_console_logger("SafeBrowse pass number " + SB_SafeBrowse.RUN_COUNT + " for tag types: " + d);
		var e = SB_get_ad_elements(d);
		var b = e.length;
		SB_console_logger("SB found " + b + " matching tags");
		for (i = 0; i < b; i++) {
			var a = e[i].clientWidth;
			var p = e[i].clientHeight;
			var n = e[i].tagName.toLowerCase();
			var h = e[i].id;
			if (a > 1 && p > 1) {
				SB_console_logger("################################################################");
				SB_console_logger("SB Running for tag type: " + n + " with id: '" + h + "' and size size " + a + "x" + p);
				l = SB_okToReplace(e[i], n);
			} else {
				SB_console_logger("################################################################");
				SB_console_logger("SB skipping tag type: " + n + " with id: '" + h + "' and size size " + a + "x" + p);
				l = false;
			}
			if (l) {
				var f = SB_css(e[i]);
				switch (n) {
				case "div":
					if (top === self) {
						var m = jQSB(e[i]).html();
						if (m) {
							jQSB(e[i]).html(SB_set_frame(a, p));
						}
					}
					break;
				case "img":
					if (top === self) {
						jQSB(e[i]).replaceWith(SB_set_frame(a, p));
					}
					break;
				default:
					if (top === self) {
						jQSB(e[i]).replaceWith(SB_set_frame(a, p));
						jQSB("#" + window.SB_random_frame).css(f);
						SB_console_logger("SB CSS rules applied to element");
					}
					break;
				}
				SB_console_logger("SB successfully replaced: " + a + "x" + p + " " + n);
				SB_addCount();
			}
		}
		SB_console_logger("SB starting the persistent ad killer");
		SB_disable_persistent_spaces();
		SB_console_logger("SB running site specific logic");
		SB_SafeBrowse.run_site_specific();
		SB_console_logger("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	},
	run_site_specific: function () {
		if (typeof SB_ok_to_run == "undefined" && SB_ok_to_run !== false) {
			SB_ok_to_run = true;
		}
		if (SB_disable_for_n_seconds <= 0 && SB_ok_to_run === true) {
			var b = document.domain;
			var a = b.replace(/^www./g, "");
			switch (a) {
			/*case "facebook.com":
				SB_facebook();
				setTimeout(function () {SB_SafeBrowse.run();}, 180000);
				break;*/
			case "youtube.com":
				SB_youtube();
				setInterval(function(){ SB_youtube(); }, 2000);
				/*(function() {
				    var origOpen = XMLHttpRequest.prototype.open;
				    XMLHttpRequest.prototype.open = function() {
				        this.addEventListener('load', function() {
				        	if(this.responseURL.match(/spf=navigate/i)){
				    			SB_youtube();
				    		}
				        });
				        origOpen.apply(this, arguments);
				    };
				})();*/
				break;
			case "live.com":
				SB_outlook();
				break;
			case "mail.google.com":
				SB_gmail();
				setTimeout(function () {SB_gmail();}, 30000);
				break;
			}
		}
	}
};

function SB_gmail() {
	jQSB(".oM").replaceWith(SB_set_frame(160, 600, "", "manual"));
}
function SB_outlook() {
	jQSB("#adbarContainer").replaceWith(SB_set_frame(160, 600, "", "manual"));
}
function SB_youtube() {
	jQSB("#premium-yva").html(SB_set_frame(728, 90, "", "manual"));
	jQSB("#premium-yva").css("height", "90px");
	jQSB("#premium-yva").attr("id","premium-yvasb");
	jQSB("#google_companion_ad_div").replaceWith(SB_set_frame(300, 250, "", "manual"));

	var inVideoSize = parseInt(jQSB(".ad-container").css("width"));
	var inVideoWidth = (inVideoSize < 700)?468:728;
	var inVideoHeight = (inVideoSize < 700)?60:90;
	if(inVideoSize > 700){
		jQSB(".close-button").css("margin", "0px");
		jQSB(".image-container").replaceWith(SB_set_frame(inVideoWidth, inVideoHeight, "", "manual"));
		//jQSB(".text-container").replaceWith(SB_set_frame(inVideoWidth, inVideoHeight, "", "manual"));
		jQSB(".flash-container").replaceWith(SB_set_frame(inVideoWidth, inVideoHeight, "", "manual"));
	}
}
function SB_facebook() {
	if (window.location.pathname.search("photo.php") > 0) {
		return true;
	}
	var d = false;
	var a = jQSB(".fbEmuEgo");
	var g = "tlAdUnit";
	var b = "<div class='tlAdUnit' style='padding-bottom: 20px;text-align: center;'>" + SB_set_frame(250, 250, "", "manual") + "</div>";
	var f = "<div class='tlAdUnit' style='padding-bottom: 20px;text-align: center;'>" + SB_set_frame(160, 600, "", "manual") + "</div>";
	var e = "<div class='tlAdUnit' style='padding: 10px;background:#e7ebf2;'>" + SB_set_frame(728, 90, "", "manual") + "</div>";
	if (jQSB("body").hasClass("timelineLayout")) {
		/*if (jQSB(".tlAdUnit").parents(".cover").length != 1) {
			jQSB(".cover").prepend(e);
			jQSB(".cover").css("background-color", "none");
			jQSB(".fbTimelineTopSection").css("border", "0px");
			jQSB(".cover").css("text-align", "center");
		}*/
	} else {
		/*if (jQSB(".fbAdUnit").parents(".ego_unit").length >= 1 && jQSB(".tlAdUnit").parents(".ego_unit").length == 0 && jQSB(".fbAdUnit").parents(".photoInfoBody").length == 0 && jQSB(".fbAdUnit").parents(".photoInfoFooter").length == 0 && jQSB(".fbAdUnit").parents(".fbxPhoto").length == 0) {
			jQSB(".fbAdUnit").parent().parent().html(f)
		}*/
	}
	if (jQSB(".ego_unit_container").parent().parent().parent().attr("id") == "pagelet_ego_pane" || jQSB(".ego_unit_container").parent().parent().parent().attr("id") == "u_jsonp_3_2n" || jQSB(".ego_unit_container").parent().parent().parent().parent().attr("id") == "pagelet_side_ads") {
		jQSB(".ego_unit_container").each(function () {
			if(jQSB(this).parent().parent().parent().parent().attr("id") == "pagelet_side_ads"){
				jQSB(this).replaceWith(b);
			}else if(!jQSB(this).parent().parent().hasClass("egoOrganicColumn")){
				jQSB(this).replaceWith(f);
			}
		});
	}
	/*if (jQSB(".ego_unit_container").parent().parent().parent().parent().attr("id") == "pagelet_side_ads") {
		jQSB(".ego_unit_container").replaceWith(b);
		console.log('test3');
	}*/
	//jQSB(".adsCategoryTitleLink").text("Publicidad");
	SB_fix_flash();
}
function SB_disable_persistent_spaces() {
	var b = new Array("#adlink", "#abgc", ".ad_label", "#ad_label", "#BotBannerFrame", ".ad-label", "#ad-label", "#ad_slug_can", "#can_ad_slug", ".ad_slug_can", ".can_ad_slug", "img[src*='ad_choices']", "img[src*='adchoices']");
	var a = 1;
	while (a <= b.length) {
		jQSB(b[a]).hide();
		a++;
	}
	setTimeout("SB_disable_persistent_spaces()", 1000);
}
function SB_start_timer(b) {
	if (b) {
		var a = setInterval(function () {
			b--;
			if (b <= 0) {
				SB_console_logger("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
				SB_console_logger("SB disable timer ended");
				SB_SafeBrowse.run();
			}
		}, 1000);
	}
}
function SB_fix_flash() {
	return;
	var k = document.getElementsByTagName("embed");
	var b;
	for (i = 0; i < k.length; i++) {
		embed = k[i];
		var h;
		if (jQSB(embed).attr("id").substring(0, 3) == "id_" || jQSB(embed).attr("id").substring(0, 4) == "swf_") {
			return true;
		}
		if (embed.outerHTML) {
			b = embed.outerHTML;
			if (b.match(/wmode\s*=\s*('|")[a-zA-Z]+('|")/i)) {
				h = b.replace(/wmode\s*=\s*('|")window('|")/i, "wmode='transparent'");
			} else {
				h = b.replace(/<embed\s/i, "<embed wmode='transparent' ");
			}
			embed.insertAdjacentHTML("beforeBegin", h);
			embed.parentNode.removeChild(embed);
		} else {
			h = embed.cloneNode(true);
			if (!h.getAttribute("wmode") || h.getAttribute("wmode").toLowerCase() == "window") {
				h.setAttribute("wmode", "transparent");
			}
			embed.parentNode.replaceChild(h, embed);
		}
	}
	var g = document.getElementsByTagName("object");
	for (i = 0; i < g.length; i++) {
		object = g[i];
		var e;
		if (jQSB(object).attr("id") && (jQSB(object).attr("id").substring(0, 3) == "id_" || jQSB(object).attr("id").substring(0, 4) == "swf_")) {
			return true;
		}
		if (object.outerHTML) {
			b = object.outerHTML;
			if (b.match(/<param\s+name\s*=\s*('|")wmode('|")\s+value\s*=\s*('|")[a-zA-Z]+('|")\s*\/?\>/i)) {
				e = b.replace(/<param\s+name\s*=\s*('|")wmode('|")\s+value\s*=\s*('|")window('|")\s*\/?\>/i, "<param name='wmode' value='transparent' />");
			} else {
				e = b.replace(/<\/object\>/i, "<param name='wmode' value='transparent' />\n</object>");
			}
			var a = object.childNodes;
			for (j = 0; j < a.length; j++) {
				try {
					if (a[j] !== null) {
						var f = a[j].getAttribute("name");
						if (f !== null && f.match(/flashvars/i)) {
							e = e.replace(/<param\s+name\s*=\s*('|")flashvars('|")\s+value\s*=\s*('|")[^'"]*('|")\s*\/?\>/i, "<param name='flashvars' value='" + a[j].getAttribute("value") + "' />");
						}
					}
				} catch (d) {}
			}
			object.insertAdjacentHTML("beforeBegin", e);
			object.parentNode.removeChild(object);
		}
	}
}
function SB_escape_regex_string(a) {
	mod_text = a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	if (typeof mod_text == "undefined") {
		mod_text = 0;
	}
	return mod_text;
}
function SB_source_signature_blacklist() {
	SB_console_logger("SB getting source signature black list");
	var a = new Array( /*"googlesyndication", "ad.doubleclick.net", ".doubleclick.","g.doubleclick.net",*/ "safebrowse","quecaja");
	return a;
}
function SB_element_id_whitelist() {
	SB_console_logger("SB getting ID white list");
	var a = new Array("ads_FlexAdLink", "BotBanner", "_fw_frame_footer_728_90", "_fw_frame_mpu_300_250", "google_ads_", "adiv_base", "aswift_", "addiv", "dclkAdsDivID", "dclkAdsFrame", "dapIfM0", "dapIf", "ad_300x250", "tomorrowsnews", "ad_container", "ad_iframe", "ad1", "ad2");
	return a;
}
function SB_source_signature_whitelist() {
	SB_console_logger("SB getting source signature white list");
	var a = new Array("googlesyndication", "ad.doubleclick.net", ".doubleclick.","g.doubleclick.net", "a1.interclick.com", "l.yimg.com/cv/ae/", "/manta/mads/", "reddit.com/ads/", "/ads/", "redditmedia.com/ads/", "admanager", "//ad.", "admanager", "adgear", "cdn.optmd", "rubiconproject", "adrotate", "ftjcfx", "specificclick.net", "tf-iframe", "cdn.attackofthefanboy", "ads.bluelithium", "us.adserver", "/aan/", "ad-ifr", "in-addr.arpa", "cdn.w55c", "bs.serving", "/banner/", "a.gwallet", ".lduhtrp.", ".bulletproof-marketing.", "rcm.amazon", ".adnxs.", "plusone.google", "2mdn.net", "view.atdmt", "zedo", "ad.yieldmanager", "content.yieldmanager", "adblaze", "/ad.", "yesplz", "s0.2mdn.net", "ds.serving-sys", "120x90.gif", "/ad/", "mupromo", "static.promo", "&ad_keyword=", "&ad_type_", "&adcount=", "&adid=", "&adname=", "&adserver=", "&adsize=", "&adslot=", "&adspace=", "&adtype=", "&adurl=", "&adv_keywords=", "&advertiserid=", "&advtile=", "&googleadword=", "&largead=", "&popunder=", "&program=revshare&", "&program=revshare&$image,~image,popup", "&simple_ad_", "&smallad=", "&video_ads_", "&view=ad&", "+adverts/", "-ad-large.", "-ad-limits.", "-ad-loading.", "-ad-manager/", "-ad-server/", "-ad-util-", "-ad-vertical-", "-ad1.", "-ad2.", "-ad3.", "-ad_125x125.", "-adcentre.", "-adhelper.", "-adimage-", "-adrotation.", "-ads-management/", "-ads-manager/", "-adserver-", "-adserver/", "-adv-v1/", "-advert-", "-advertisement.", "-banner-ad.", "-banner-ads-", "-banner-ads/", "-bannerads/", "-bin/ad_", "-content-ad.", "-contest-ad.", "-games/ads/", "-images/ad-", "-img/ads/", "-inspire-ad.", "-layer-ads/", "-leaderboard-ad-", "-panel_ad_", "-permads.", "-popup-ad.", "-popup-ads-", "-show-ads.", "-text-ads.", "-third-ad.", "-webad1.", ".1d/ads/", ".a3s?n=*&zone_id=", ".ad.footer.", ".ad.page.", ".ad.premiere.", ".adplacement=", ".adriver.$~object-subrequest", ".ads.darla.", ".adsbox.", ".adserv/", ".adserver.", ".adserver1.", ".aspx?ad=", ".aspx?zoneid=*&task=", ".au/ads/", ".biz/ad.", ".biz/ad/", ".ca/ads/", ".cc/ads/", ".cfm?ad=", ".com/ad-", ".com/ad.", ".com/ad/", ".com/ad?", ".com/ad_", ".com/adlib/", ".com/ads-", ".com/ads.", ".com/ads/$image,object,subdocument", ".com/ads?", ".com/ads_", ".com/advt/", ".com/adx/", ".com/adx_", ".com/adz/", ".com/bads/", ".com/gads/", ".com/miads/", ".com/ss/ad/", ".eu/ads/", ".html?ad=", ".in/ads/", ".in/advt/", ".info/ads/", ".jp/ads/", ".ke/ads/", ".mv/ads/", ".net/ad/$~object-subrequest", ".net/ads/", ".net/ads_", ".nl/ads/", ".no/ads/", ".nz/ads/", ".org/ad/", ".org/ad_", ".org/ads-", ".org/ads/", ".org/gads/", ".ph/ads/", ".php?bannerid=", ".php?zoneid=", ".pk/ads/", ".swf?1&clicktag=", ".swf?ad=", ".swf?clicktag=", ".to/ads/", ".tv/ads/", ".tz/ads/", ".uk/ads/", ".us/ads/", ".za/ads.", ".za/ads/", ".zw/ads/", "/120ad.", "/120ads/*", "/2010/ads/*", "/2011/ads/*", "/300x250advert.", "/468ad.", "/468xads.", "/?addyn|*", "/?advideo/*", "/_ads/*", "/_affiliatebanners/*", "/_global/ads/*", "/_img/ad_", "/a2/ads/*", "/aamsz=", "/abm.asp?z=", "/abm.aspx", "/abmw.asp?z=", "/abmw.aspx", "/ad-468-", "/ad-amz.", "/ad-banner-", "/ad-box-", "/ad-cdn.", "/ad-frame.", "/ad-gallery.", "/ad-header.", "/ad-hug.", "/ad-iframe-", "/ad-iframe.", "/ad-inject/*", "/ad-leaderboard.", "/ad-letter.", "/ad-loader-", "/ad-local.", "/ad-logger/*", "/ad-managment/*", "/ad-pub.", "/ad-right2.", "/ad-server/*", "/ad-tandem.", "/ad-template/*", "/ad-top-", "/ad-topbanner-", "bdv.bidvertiser", "/ad-vert.", "/ad-vertical-", "/ad.asp?", "/ad.cgi?", "/ad.css?", "/ad.epl?", "/ad.jsp?", "/ad.mason?", "/ad.php?", "/ad.php|", "/ad/banner.", "/ad/files/*", "/ad/generate?", "/ad/google/*", "/ad/iframe/*", "/ad/img/*", "/ad/index.", "/ad/index/*", "/ad/rotate?", "/ad/script/*", "/ad/side_", "/ad/sponsored-", "/ad/takeover/*", "/ad0.", "/ad000/*", "/ad1.", "/ad125.", "/ad160.", "/ad160x600.", "/ad1place.", "/ad1x1home.", "/ad2.", "/ad2/*", "/ad2border.", "/ad3-", "/ad3.", "/ad300.", "/ad300x145.", "/ad300x250.", "/ad300x250_", "/ad350.", "/ad4.", "/ad468x60.", "/ad468x80.", "/ad5.", "/ad6.", "/ad7.", "/ad728.", "/ad728x15.", "/ad8.", "/ad9.", "/ad?count=", "/ad_agency/*", "/ad_area.", "/ad_banner.", "/ad_banner/*", "/ad_banner_", "/ad_bottom.", "/ad_bsb.", "/ad_cache/*", "/ad_campaigns/*", "/ad_code.", "/ad_configuration.", "/ad_container_", "/ad_content.", "/ad_count.", "/ad_creatives.", "/ad_editorials_", "/ad_engine?", "/ad_entry_", "/ad_feed.", "/ad_files/*", "/ad_fill.", "/ad_footer.", "/ad_forum_", "/ad_frame.", "/ad_function.", "/ad_gif/*", "/ad_google.", "/ad_header_", "/ad_holder/*", "/ad_homepage_", "/ad_horizontal.", "/ad_html/*", "/ad_icons/*", "/ad_iframe.", "/ad_iframe_", "/ad_insert.", "/ad_jnaught/*", "/ad_label_", "/ad_leader.", "/ad_left.", "/ad_legend_", "/ad_link.", "/ad_load.", "/ad_manager.", "/ad_manager/*", "/ad_mpu.", "/ad_notice.", "/ad_oas/*", "/ad_page_", "/ad_print.", "/ad_rectangle_", "/ad_refresher.", "/ad_reloader_", "/ad_request.", "/ad_right.", "/ad_rotation.", "/ad_rotator.", "/ad_rotator_", "/ad_script.", "/ad_serv.", "/ad_serve.", "/ad_server.", "/ad_server/*", "/ad_sizes=", "/ad_skin_", "/ad_sky.", "/ad_skyscraper.", "/ad_slideout.", "/ad_space.", "/ad_square.", "/ad_square_", "/ad_supertile/*", "/ad_syshome.", "/ad_tag.", "/ad_tag_", "/ad_tags_", "/ad_tile/*", "/ad_title_", "/ad_top.", "/ad_topgray2.", "/ad_tpl.", "/ad_upload/*", "/ad_utils/*", "/ad_ver/*", "/ad_vert.", "/ad_vertical.", "/ad_view_", "/adaffiliate_", "/adanim/*", "/adaptvadplayer.", "/adbanner.", "/adbanner/*", "/adbanner_", "/adbanners/*", "/adbar.aspx", "/adbg.jpg", "/adbot_", "/adbottom.", "/adbox.", "/adbox/*", "/adboxes/*", "/adbrite.", "/adbureau.", "/adcampaigns/*", "/adcde.js", "/adcell/*", "/adcentral.", "/adchain-", "/adchannel_", "/adchoices.", "/adclick.", "/adclient.", "/adclient/*", "/adclutter.", "/adcode.", "/adcode/*", "/adcodes/*", "/adcollector.", "/adcomponent/*", "/adconfig.js", "/adconfig.xml?", "/adconfig/*", "/adcontainer?", "/adcontent.$~object-subrequest", "/adcontent/*", "/adcontrol.", "/adcontroller.", "/adcounter.", "/adcreative.", "/adcycle.", "/adcycle/*", "/addeals/*", "/addelivery/*", "/addyn/3.0/*", "/addyn|*|adtech;", "/adengage/*", "/adengage1.", "/adengage2.", "/adengage3.", "/adengage4.", "/adengage5.", "/adengage6.", "/adengage_", "/adengine/*", "/adexclude/*", "/adf.cgi?", "/adfactory.", "/adfarm.", "/adfeedtestview.", "/adfetch?", "/adfetcher?", "/adfever_", "/adfile/*", "/adfly/*", "/adfooter.", "/adformats/*", "/adframe.", "/adframe/*", "/adframe?", "/adframe_", "/adframebottom.", "/adframecommon.", "/adframemiddle.", "/adframetop.", "/adfshow?", "/adfunction.", "/adfunctions.", "/adgallery1.", "/adgallery2.", "/adgalleryheader.", "/adgearsegmentation.", "/adgeo/*", "/adgitize-", "/adgooglefull2.", "/adgraphics/*", "/adguru.", "/adhalfbanner.", "/adhandler.", "/adhandler/*", "/adheader.", "/adheadertxt.", "/adhomepage.", "/adhtml/*", "/adhug_", "/adicon_", "/adiframe.", "/adiframe/*", "/adiframe?", "/adiframeanchor.", "/adiframem1.", "/adiframem2.", "/adiframetop.", "/adify_", "/adimage.", "/adimages.", "/adimages/*", "/adimg.", "/adimg/*", "/adindex/*", "/adinjector.", "/adinjector_", "/adinsert.", "/adinsertionplugin.", "/adinterax.", "/adiro.", "/adition.", "/adjs.php", "/adjs_elem.php", "/adjsmp.", "/adlabel.", "/adlabel_", "/adlayer.", "/adlayer/*", "/adleader.", "/adleaderboardtop.", "/adleft/*", "/adleftsidebar.", "/adlink-", "/adlink.", "/adlink_", "/adlinks.", "/adlist_", "/adloader.", "/adm/ad/*", "/adman.", "/adman/*", "/admanagement/*", "/admanagementadvanced.", "/admanager.$~object-subrequest", "/admanager/*$~object-subrequest", "/admanager3.", "/admanagers/*", "/admanagerstatus/*", "/admarker.", "/admarker_", "/admarket/*", "/admaster.", "/admaster?", "/admatch-", "/admatcher.", "/admaxads.", "/admeasure.", "/admedia.", "/admedia/*", "/admega.", "/admeld.", "/admentor/*", "/admentorserve.", "/admeta.", "/admez.", "/admez/*", "/admicro2.", "/admicro_", "/admin/ad_", "/admin/banners/*", "/adminibanner2.", "/admixer_", "/adnet.", "/adnetmedia.", "/adnetwork.", "/adnews.", "/adnext.", "/adng.html", "/adnotice.", "/adonline.", "/adops/*", "/adotubeplugin.", "/adoverlay/*", "/adp.htm", "/adpage.", "/adpage/*", "/adpartner.", "/adpeeps.", "/adpeeps/*", "/adplayer.", "/adplayer/*", "/adplugin.", "/adplugin_", "/adpoint.", "/adpool/*", "/adpopup.", "/adproducts/*", "/adprovider.", "/adproxy.", "/adproxy/*", "/adreactor/*", "/adrefresh-", "/adrelated.", "/adreload?", "/adremote.", "/adrequest.", "/adrevenue/*", "/adrevolver/*", "/adright/*", "/adriver.$~object-subrequest", "/adriver_$~object-subrequest", "/adrobot.", "/adrolays.", "/adroller.", "/adroot/*", "/adrot.", "/adrotate/*", "/adrotator.", "/adrotator/*", "/adrotv2.", "/adruptive.", "/ads-banner.", "/ads-blogs-", "/ads-common.", "/ads-footer.", "/ads-leader|", "/ads-rectangle.", "/ads-rec|", "/ads-right.", "/ads-sa.", "/ads-scroller-", "/ads-service.", "/ads-skyscraper.", "/ads-sky|", "/ads.asp?", "/ads.dll/*", "/ads.gif", "/ads.htm", "/ads.jsp", "/ads.php?", "/ads.pl?", "/ads/160.", "/ads/2010/*", "/ads/300.", "/ads/3002.", "/ads/728.", "/ads/ad_", "/ads/ads_", "/ads/banner.", "/ads/banner01.", "/ads/banner468.", "/ads/banners/*", "/ads/cnvideo/*", "/ads/common/*", "/ads/default_", "/ads/dhtml/*", "/ads/footer_", "/ads/freewheel/*", "/ads/google1.", "/ads/google2.", "/ads/home/*", "/ads/house/*", "/ads/images/*", "/ads/img/*", "/ads/indexsponsors/*", "/ads/interstitial.", "/ads/interstitial/*", "/ads/js_", "/ads/labels/*", "/ads/layer.", "/ads/leaderboard-", "/ads/leaderboard_", "/ads/load.", "/ads/post-", "/ads/preloader/*", "/ads/preroll_", "/ads/promo_", "/ads/rail-", "/ads/rectangle_", "/ads/ringtone_", "/ads/show.", "/ads/side-", "/ads/sponsor_", "/ads/square-", "/ads/third-", "/ads/top-", "/ads/video_", "/ads/view.", "/ads/zone/*", "/ads0.", "/ads09a/*", "/ads1.", "/ads1/*", "/ads10/*", "/ads11/*", "/ads160.", "/ads18.", "/ads2.", "/ads2/*", "/ads2_", "/ads3.", "/ads3/*", "/ads4.", "/ads4/*", "/ads5.", "/ads5/*", "/ads6.", "/ads6/*", "/ads7.", "/ads7/*", "/ads8.", "/ads8/*", "/ads88.", "/ads9.", "/ads9/*", "/ads?zone_id=", "/ads_160_", "/ads_banners/*", "/ads_code.", "/ads_config.", "/ads_display.", "/ads_gallery/*", "/ads_global.", "/ads_google.", "/ads_ifr.", "/ads_iframe.", "/ads_load/*", "/ads_loader.", "/ads_php/*", "/ads_reporting/*", "/ads_yahoo.", "ads.yahoo", "/adsa468.", "/adsa728.", "/adsadview.", "/adsales/*", "/adsatt.", "/adsbanner.", "/adsbanner/*", "/adsbannerjs.", "/adsbox.", "/adsby.", "/adscale1.", "/adscale_", "/adscalebigsize.", "/adscalecontentad.", "/adscaleskyscraper.", "/adscluster.", "/adscontent.", "/adscontent2.", "/adscript.", "/adscript_", "/adscripts/*", "/adscripts1.", "/adscripts2.", "/adscripts3.", "/adscroll.", "/adsdaq_", "/adsdaqbanner_", "/adsdaqbox_", "/adsdaqsky_", "/adsearch.", "/adsegmentation.", "/adsense-", "/adsense.", "/adsense/*", "/adsense1.", "/adsense2.", "/adsense23.", "/adsense24.", "/adsense3.", "/adsense4.", "/adsense5.", "/adsense?", "/adsense_", "/adsensegb.", "/adsensegoogle.", "/adsensets.", "/adseo.", "/adseo/*", "/adserv.", "/adserv/*", "/adserv1.", "/adserv2.", "/adserv3.", "/adserv_", "/adserve.", "/adserve/*", "/adserve_", "/adserver.", "/adserver/*", "/adserver1.", "/adserver2.", "/adserver2/*", "/adserver3.", "/adserver7/*", "/adserver8strip.", "/adserver?", "/adserver_", "/adserversolutions/*", "/adservices/*", "/adservice|", "/adserving.", "/adserving/*", "/adserving_", "/adserv|*|adtech;", "/adsetup.", "/adsfac.", "/adsfetch.", "/adsfile.", "/adsfolder/*", "/adsframe.", "/adshandler.", "/adshare/*", "/adshare3.", "/adsheader.", "/adshop/*", "/adshow.", "/adshow?", "/adshow_", "/adsidebarrect.", "/adsiframe/*", "/adsign.", "/adsimage/*", "/adsinclude.", "/adsinsert.", "/adsky.", "/adskyright.", "/adskyscraper.", "/adslots.", "/adslug-", "/adslug_", "/adsmanagement/*", "/adsmanager/*", "/adsmedia_", "/adsmm.dll/*", "/adsnew.", "/adsnip.", "/adsniptrack.", "/adsonar.", "/adsopenx/*", "/adspace.", "/adspace/*", "/adsponsor.", "/adspot.", "/adspro/*", "/adsquare.", "/adsquareleft.", "/adsrc.", "/adsremote.", "/adsreporting/*", "/adsrich.", "/adsright.", "/adsrotate.", "/adsrule.", "/adsrv.", "/adsrv/*", "/adsserv.", "/adssrv.", "/adstacodaeu.", "/adstatic.", "/adstemplate/*", "/adstop_", "/adstorage.", "/adstracking.", "/adstream.", "/adstream_", "/adstrm/*", "/adstub.", "/adstubs/*", "/adsvr.", "/adswap.", "/adswap/*", "/adswide.", "/adswidejs.", "/adswrapper.", "/adswrapperintl.", "/adsx728.", "/adsx_728.", "/adsync/*", "/adsyndication.", "/adsyndication/*", "/adsys.", "/adsys/*", "/adsystem/*", "/adtable_", "/adtag.", "/adtag/*", "/adtago.", "/adtags.", "/adtags/*", "/adtagtc.", "/adtagtranslator.", "/adtech.", "/adtech/*", "/adtech;", "/adtech_", "/adtext.", "/adtext4.", "/adtext_", "/adtextmpu2.", "/adtitle.", "/adtology.", "/adtonomy.", "/adtools2.", "/adtop.", "/adtopleft.", "/adtopright.", "/adtrack.", "/adtrack/*", "/adtraff.", "/adttext.", "/adtvideo.", "/adtxt.", "/adtype.", "/adunit.", "/adunit/*", "/adunits/*", "/adv.asp", "/adv.jsp", "/adv/ads/*", "/adv/managers/*", "/adv02.", "/adv03.", "/adv1.", "/adv2.", "/adv3.", "/adv4.", "/adv5.", "/adv_flash.", "/advaluewriter.", "/advbanner/*", "/adver.", "/adver_hor.", "/adverserve.", "/advert-", "/advert.", "/advert/*", "/advert?", "/advert_", "/advertbanner.", "/advertise-", "/advertise.", "/advertise/*", "/advertise125x125.", "/advertise_", "/advertisehere.", "/advertisement-", "/advertisement.", "/advertisement/*", "/advertisement160.", "/advertisement2.", "/advertisement_", "/advertisementheader.", "/advertisementrotation.", "/advertisements.", "/advertisements/*", "/advertisementview/*", "/advertiser.", "/advertiser/*", "/advertisers/*", "/advertising.", "/advertising/*", "/advertising2.", "/advertising_", "/advertisingbanner.", "/advertisingcontent/*", "/advertisingmanual.", "/advertisingmodule.", "/advertisings.", "/advertisingwidgets/*", "/advertisment-", "/advertisment.", "/advertisments/*", "/advertize_", "/advertmedia/*", "/advertorial/*", "/advertorial_", "/advertorials/*", "/advertphp/*", "/advertpro/*", "/advertright.", "/adverts.", "/adverts/*", "/adverts_", "/advertsky.", "/adview.", "/adview?", "/adviewer.", "/advision.", "/advolatility.", "/advpartnerinit.", "/advzones/*", "/adwords/*", "/adworks.", "/adworks/*", "/adworx_", "/adwrapper/*", "/adwrapperiframe.", "/adx.asp", "/adx.js", "/adxx.php?", "/adyard.", "/adyard300.", "/adzone.", "/adzone_", "/adzonebottom.", "/adzoneleft.", "/adzoneright.", "/adzones/*", "/adzonetop.", "/afc-match?q=", "/afcsearchads.", "/aff/images/*", "/aff_ad?", "/aff_frame.", "/affad?", "/affads/*", "/affclick/*", "/affilatebanner.", "/affiliate/ads/*", "/affiliate/banner.php?", "/affiliate/banners/*", "/affiliate/script.php?", "/affiliate/scripts/*", "/affiliate_banners/*", "/affiliate_resources/*", "/affiliate_show_banner.", "/affiliate_show_iframe.", "/affiliateads/*", "/affiliatebanner/*", "/affiliatebanners/*", "/affiliateimages/*", "/affiliatelinks.", "/affiliates.*.aspx?", "/affiliates/banners/*", "/affiliatewiz/*", "/affiliation/*", "/affiliationcash.", "/affilinet/*", "/affimages/*", "/affimg/*", "/affpic/*", "/afimages.", "/afr.php?", "/ajax/ads/*", "/ajaxads.", "/ajrotator/*", "/ajs.php?", "/all_ads/*", "/alternet.ad?", "/api/ads/*", "/app/ads.js", "/article_ad.", "/aseadnshow.", "/aspbanner_inc.asp?", "/assets/ads/*", "/audioads/*", "/auditudeadunit.", "/austria_ad.", "/auto_ad_", "/back-ad.", "/ban_ad.", "/ban_m.php?", "/banimpress.", "/banman.asp?", "/banman/*", "/banner-ad-", "/banner-ad/*", "/banner/ad_", "/banner/affiliate/*", "/banner468_", "/banner_468.", "/banner_ad.", "/banner_ad_", "/banner_ads.", "/banner_ads/*", "/banner_ads_", "/banner_adv/*", "/banner_control.php?", "/banner_db.php?", "/banner_file.php?", "/banner_image.php?", "/banner_js.*?", "/banner_management/*", "/banner_skyscraper.", "/banner_zanox/*", "/bannerad.", "/bannerad1-", "/bannerad2-", "/bannerad3.", "/bannerad_", "/bannerads-", "/bannerads.", "/bannerads/*", "/banneradverts/*", "/banneradviva.", "/bannercode.php", "/bannerconduit.swf?", "/bannerexchange/*", "/bannerfarm/*", "/bannerframe.*?", "/bannerframeopenads.", "/bannerframeopenads_", "/bannermanager/*", "/bannerrotater/*", "/bannerrotation.", "/bannerrotation/*", "/banners.*&iframe=", "/banners/ad_", "/banners/ads-", "/banners/adv_", "/banners/affiliate/*", "/banners/promo/*", "/banners_rotation.", "/bannerscript/*", "/bannerserve/*", "/bannerserver/*", "/bannersyndication.", "/bannerview.*?", "/bannery/*?banner=", "/bar-ad.", "/baselinead.", "/basic/ad/*", "/behaviorads/*", "/beta-ad.", "/betrad.js", "/bg/ads/*", "/bg_ads_", "/bi_affiliate.js", "/bigad.", "/bigads/*", "/bigboxad.", "/bkgrndads/*", "/blockad_", "/blocks/ads/*", "/blogad_", "/blogads.", "/blogads/*", "/blogads3/*", "/blogoas-", "/bmndoubleclickad.", "/bnrsrv.*?", "/bodyads/*", "/boomad.", "/bottom_ad.", "/bottomad.", "/bottomad/*", "/bottomads.", "/boxad_", "/breakad_", "/btmads.", "/btmadsx.", "/btn_ad_", "/bucketads.", "/bulk-ad-load/*", "/butler.php?type=", "/button_ads/*", "/buttonads.", "/buttonads/*", "/buyad.", "/buyclicks/*", "/buysellads.", "/bytemark_ad.", "/cads-min.js", "/call/pubif/*", "/callads5.", "/camfuzeads/*", "/campus/ads/*", "/carbonads/*", "/cashad.", "/cashad2.", "/central/ads/*", "/cgi-bin/ads/*", "/channelblockads.", "/chinaadclient.", "/chitika-ad?", "/circads.", "/cms/ads/*", "/cms/js/ad_", "/cnnslads.", "/cnxad-", "/coldseal_ad.", "/columnads/*", "/comment-ad-", "/comment-ad.", "/commercial_horizontal.", "/commercial_top.", "/commercials/*", "/common/ad.", "/common/ad/*", "/common/ads/*", "/companion_ads.", "/components/ads/*", "/configspace/ads/*", "/contaxe_", "/content/ad/*", "/content/ad_", "/content_ad.", "/content_ad_", "/contentad/*", "/contentad_", "/contentadxxl.", "/contentad|", "/contextad.", "/controller/ads/*", "/convertjsontoad.", "/core/ads/*", "/corner_ads/*", "/country_ad.", "/cpxads.", "/ctamlive160x160.", "/cubead.", "/custads/*", "/custom_ads/*", "/customad.", "/customads/*", "/customadsense.", "/customerad_", "/cvs/ads/*", "/cwggoogleadshow.", "/daily/ads/*", "/dart-zones.js", "/dart_ads/*", "/dartadengine.", "/dartads.", "/data/ads/*", "/dateads.", "/dclk_ads.", "/dclk_ads_", "/dcloadads/*", "/de/ads/*", "/defer_ads.", "/deferads.", "/deliver.nmi?", "/deliverad/*", "/deliverads.", "/deliverjs.nmi?", "/delivery.ads.", "/delivery/*?advplaces=", "/delivery/ag.php", "/delivery/al.php", "/delivery/apu.php", "/delivery/avw.php", "/descpopup.js", "/dfpads.", "/dfpsearchads.", "/direct_ads.", "/directads.", "/display-ad/*", "/display_ads.", "/display_ads/*", "/displayad.", "/displayad?", "/displayadbanner_", "/displayadiframe.", "/displayads/*", "/dne_ad.", "/dnsads.html?", "/doors/ads/*", "/doubleclick.js", "/doubleclick.php", "/doubleclick/iframe.", "/doubleclick_ads.", "/doubleclick_ads/*", "/doubleclickads?", "/doubleclickcontainer.", "/doubleclicktag.", "/download/ad.", "/download/ad/*", "/download/ads/*", "/drawad.php?", "/drivingrevenue/*", "/dsg/bnn/*", "/dtiadvert125x125.", "/dxd/ads/*", "/dyn_banner.", "/dyn_banners_", "/dynamic/ads/*", "/dynamicad?", "/dynamiccsad?", "/dynamicvideoad?", "/dynanews/ad-", "/dynbanner/flash/*", "/eas?*^easformat=", "/eas?cu=*;cre=", "/eas_fif.html^", "/eas_tag.1.0.js", "/easyads.", "/easyads/*", "/easyadstrack.", "/ebay_ads/*", "/emailads/*", "/emediatead.", "/ems/ads.", "/eng/ads/*", "/exitsplash.php", "/ext_ads.", "/external/ad.", "/external/ads/*", "/external_ads.", "/externalhtmladrenderer.", "/eyewondermanagement.", "/eyewondermanagement28.", "/fastclick160.", "/fastclick728.", "/fatads.", "/featuredadshome.", "/file/ad.", "/files/ad/*", "/files/ads/*", "/fimserve.", "/flash/ad_", "/flash/ads/*", "/flashad.", "/flashads.", "/flashads/*", "/floater_ad.", "/floatingads.", "/flvad_", "/flvads/*", "/footad-", "/footad.", "/footer-ad-", "/footer_ad_", "/footerads.", "/framead-", "/framead.", "/framead/*", "/framead_", "/frameads.", "/frequencyads.", "/frnads.", "/frontend/ads/*", "/fullad.", "/fuseads/*", "/fwadmanager.", "/gads.html", "/gads.js", "/gafsads?", "/galleryad.", "/gam_ad.", "/gamead/*", "/gamersad.", "/general-ad-", "/generate_ad.", "/genericrichmediabannerad/*", "/geo-ads_", "/geo/ads.", "/geo_banner.htm?", "/geoad/*", "/get-ad.", "/get_ad.php?", "/getad.", "/getad?", "/getadframe.", "/getads.", "/getads/*", "/getads?", "/getadserver.", "/getads|", "/getadvertimageservlet?", "/getarticleadvertimageservlet?", "/getbanner.cfm?", "/getdigitalad/*", "/gethalfpagead.", "/getmarketplaceads.", "/getmdhlayer.", "/getrcmd.js?", "/getsponslinks.", "/getsponslinksauto.", "/getvdopiaads.", "/getvideoad.", "/gexternalad.", "/gfx/ads/*", "/glam_ads.", "/global/ads.", "/global/ads/*", "/google-ad-", "/google-ad?", "/google-ads.", "/google-adsense-", "/google-adsense.", "/google/adv.", "/google_ad_", "/google_ads.", "/google_ads/*", "/google_ads_", "/google_adsense.", "/google_afc.", "/google_afc_", "/googlead-", "/googlead.", "/googlead160.", "/googlead_", "/googleadhp.", "/googleadhpbot.", "/googleadhtml/*", "/googleadright.", "/googleads-", "/googleads.", "/googleads/*", "/googleads2.", "/googleads3widetext.", "/googleads_", "/googleadsafc_", "/googleadsafs_", "/googleadsense.", "/googleafs.", "/googleafvadrenderer.", "/graphics/ad_", "/graphics/ads/*", "/gt6skyadtop.", "/header-ad.", "/header_ads_", "/headerad.", "/headerads.", "/headvert.", "/hitbar_ad_", "/homepage_ads/*", "/house-ads/*", "/house_ad-", "/house_ad_", "/house_ads/*", "/housead/*", "/houseads.", "/houseads/*", "/houseads?", "/hoverad.", "/html.ng/*", "/htmlads/*", "/httpads/*", "/i/ads/*", "/icon_ad.", "/idevaffiliate/*", "/iframe-ads/*", "/iframe.ad/*", "/iframe/ad/*", "/iframe/ads/*", "/iframe_ad.", "/iframe_ad?", "/iframe_ads/*", "/iframe_ads?", "/iframe_chitika_", "/iframe_sponsor_", "/iframead.", "/iframead/*", "/iframead_", "/iframeadsense.", "/iframeadsensewrapper.", "/iframedartad.", "/im-ad/im-rotator.", "/im-ad/im-rotator2.", "/imads.js", "/image/ads/*", "/image/affiliate/*", "/image_ads/*", "/imageads/*", "/imagecache_ads/*", "/images/ad-", "/images/ad.", "/images/ad/*", "/images/ad_", "/images/ads-", "/images/ads/*", "/images/ads_", "/images/aff-", "/images/affiliate/*", "/images/affs/*", "/images/gads_", "/images/sponsored/*", "/images1/ad_", "/images_ads/*", "/img/ad-", "/img/ad/*", "/img/ad_", "/img/ads/*", "/img3/ads/*", "/imgads/*", "/imgaffl/*", "/imgs/ads/*", "/impop.php", "/inad.", "/inc/ads/*", "/inc_ad.", "/inc_v2/ad_", "/include/ad/*", "/include/ad_", "/include/ads/*", "/included_ads/*", "/includes/ad_", "/includes/ads/*", "/incmpuad.", "/index-ad.", "/index_ads.", "/inline_ad.", "/inline_ad_", "/inline_ads.", "/inlineads/*", "/innerads.", "/insertads.", "/instreamad/*", "/intellitext.js", "/interad.", "/intextads.", "/introduction_ad.", "/invideoad.", "/inx-ad.", "/ipadad.", "/iprom-ad/*", "/irc_ad_", "/ireel/ad*.jpg", "/isgadvertisement/*", "/ispy/ads/*", "/iwadsense.", "/j/ads.js", "/jcorner.php?partner=", "/jivoxadplayer.", "/jlist-affiliates/*", "/jqueryadvertising.", "/js.ad/size=", "/js/ads-", "/js/ads.", "/js/ads/*", "/js/ads_", "/js/adv/*", "/jsadscripts/*", "/jsfiles/ads/*", "/jstextad.", "/kantarmedia.", "/kc_ad_run.", "/keyade.js", "/kredit-ad.", "/kskads.", "/large_ads/*", "/large_right_ads/*", "/layer-ad.", "/layer-ads.", "/layer/ad.", "/layer/ads.", "/layer160x600.", "/layer_ad?", "/layerad-", "/layerads.", "/layerads_", "/layout/ads/*", "/lbl_ad.", "/leader_ad.", "/leaderboardads.", "/leftad.", "/leftad_", "/leftsidebarads.", "/linkads.", "/linkedads/*", "/links_sponsored_", "/linkshare/*", "/live_ad.", "/liveads.", "/livejasmin.js", "/livejasmin2.js", "/loadad.aspx?", "/loadadwiz.", "/local_ads_", "/lotto_ad_", "/lrec_ad.", "/mac-ad?", "/magic-ads/*", "/main/ad_", "/main_ad.", "/main_ad/*", "/mainad.", "/marketing-banners/*", "/marketing/banners/*", "/marketing/banners_", "/mbn_ad.", "/mcad.php", "/media/ads/*", "/media_ads/*", "/megaad.", "/meme_ad.", "/metaadserver/*", "/microad.", "/microads/*", "/mini-ads/*", "/mini_ads.", "/mint/ads/*", "/misc/ad-", "/miva_ads.", "/mkadsrv.", "/ml9pagepeel.", "/mnetorfad.js", "/mobile_ad.", "/mobilephonesad/*", "/mod_ad/*", "/modalad.", "/modules/ad/*", "/modules/ad_", "/modules/ads/*", "/mpu-dm.html", "/mpumessage.", "/msnadimg.", "/msnads/*", "/mstextad?", "/mtvi_ads_", "/mylayer-ad/*", "/mysimpleads/*", "/namediaad.", "/navads/*", "/nd_affiliate.", "/neoads.", "/netads.", "/netreachtextads/*", "/netspiderads2.", "/new/ad/*", "/new_ads/*", "/newads.", "/newads/*", "/newimages/ads/*", "/newrightcolad.", "/news/ads/*", "/news_ad.", "/newtopmsgad.", "/nextad/*", "/no_ads.", "/o2contentad.", "/oas-config.", "/oas_ad_", "/oasadframe.", "/oasadfunctionlive.", "/oascentral.$~object-subrequest", "/oasconfig/*", "/oasdefault/*", "/oasisi-*.php?", "/oasisi.php?", "/oiopub-direct/*", "/omb-ad-", "/online/ads/*", "/online_ads/*", "/openads-", "/openads.", "/openads/*", "/openads2/*", "/openx-", "/openx.", "/openx/*", "/openx_", "/other/ads/*", "/overlay_ad_", "/ovt_show.asp?", "/ox/www/*", "/ox_ultimate/www/*", "/page-ads.", "/pagead/ads?", "/pageadimg/*", "/pageads/*", "/pageear.", "/pageear/*", "/pageear_", "/pagepeel-", "/pagepeel.", "/pagepeel/*", "/pagepeel_", "/pagepeelads.", "/paidads/*", "/paidlisting/*", "/partner_ads_", "/partnerads/*", "/partnerads_", "/partnerbanner.", "/partnerbanner/*", "/partners/ads/*", "/partnersadbutler/*", "/pc/ads.", "/peel.js", "/peel.php?", "/peel/?webscr=", "/peel1.js", "/peelad.", "/peelad/*", "/peeljs.php", "/perfads.", "/performancingads/*", "/permanent/ads/*", "/phpads.", "/phpads/*", "/phpads2/*", "/phpadserver/*", "/phpadsnew/*", "/pic/ads/*", "/picture/ad/*", "/pictureads/*", "/pictures/ads/*", "/pilot_ad.", "/pitattoad.", "/pix/ad/*", "/pix/ads/*", "/pixelads/*", "/play/ad/*", "/player/ad/*", "/player/ads.", "/player/ads/*", "/plugins_ads_", "/plus/ad_", "/pool.ads.", "/pop_ad.", "/pop_under/*", "/popad-", "/popads.", "/popads/*", "/popads_", "/popunder.", "/popunder1_", "/popunder2.", "/popunder_", "/popunderking.", "/post_ads_", "/ppd_ads.", "/predictad.", "/premierebtnad/*", "/premium_ad.", "/premiumads/*", "/prerollads.", "/previews/ad/*", "/printad.", "/printad/*", "/printads/*", "/proads/*", "/processads.", "/promo/ad_", "/promo/ads/*", "/promoads/*", "/promobuttonad.", "/promoloaddisplay?", "/promoredirect?*&campaign=*&zone=", "/promotions/ads.", "/promotions/ads?", "/protection/ad/*", "/pub/ad/*", "/pub/ads/*", "/public/ad/*", "/public/ad?", "/public/ads/*", "/publicidad.$~object-subrequest,~stylesheet", "/publicidad/*", "/pullads.", "/punder.js", "/punder.php", "/punder.php$image,~image,popup", "/qandaads/*", "/quadadvert.", "/questions/ads/*", "/r_ads/*", "/radopenx?", "/railad.", "/railads.", "/railsad.", "/randomad.", "/randomad2.", "/rawtubelivead.", "/rcolads1.", "/rcolads2.", "/rcom-ads.", "/rcom-video-ads.", "/realmedia/ads/*", "/reclame/*", "/recommendations/ad.", "/rect_ad.", "/rectangle_ad.", "/refreshads-", "/related-ads.", "/relatedads.", "/relevance_ad.", "/requestadvertisement.", "/requestmyspacead.", "/resources/ads/*", "/resources/ads_", "/retrad.", "/richmedia.adv?", "/right-ad-", "/right_ads?", "/rightad.", "/rightnavads.", "/rightnavadsanswer.", "/righttopads.", "/rotads/*", "/rotateads.", "/rotatingpeels.js", "/rsads.js", "/rsads/*", "/rsc_ad_", "/rss/ads/*", "/rswebsiteads/*", "/salesad/*", "/satnetads.", "/satnetgoogleads.", "/sb-relevance.js", "/scanscoutoverlayadrenderer.", "/scaradcontrol.", "/script/oas/*", "/scripts/ad-", "/scripts/ad.", "/scripts/ad/*", "/scripts/ads.js", "/scripts/ads/*", "/scripts/clickjs.php", "/search-ads?", "/search/ad/*", "/search/ads?", "/searchad.", "/searchads/*", "/secondads.", "/secondads_", "/seo-ads.", "/servead.", "/serveads.", "/servewebads/*", "/services/ads/*", "/sevenl_ad.", "/share/ads/*", "/shared/ads/*", "/show-ad.", "/show-ads.", "/show_ad.", "/show_ad_", "/show_ads.js", "/show_ads_", "/showad.", "/showad/*", "/showad_", "/showads.", "/showads/*", "/showadvertising.", "/showban.asp?", "/showflashad.", "/showmarketingmaterial.", "/side-ad-", "/side-ads-", "/sidead.", "/sideads/*", "/sideads|", "/sidebar_ad.", "/sidebarad/*", "/sidecol_ad.", "/silver/ads/*", "/simpleadvert.", "/simpleadvert/*", "/site=*/size=*/viewid=", "/site=*/viewid=*/size=", "/site_ads.", "/siteads.", "/siteads/*", "/siteafs.txt?", "/sitemanagement/ads/*", "/sites/ad_", "/skyad.", "/skyad_", "/skyadjs/*", "/skybannerview.", "/skybar_ad.", "/skyframeopenads.", "/skyframeopenads_", "/skyscraper-ad.", "/skyscraperad.", "/slafc.js", "/slice.php?ad=", "/slideadverts/*", "/slideinad.", "/small_ad.", "/small_ads/*", "/smallad-", "/smartad.", "/smartads.", "/smb/ads/*", "/socialads.", "/socialads/*", "/somaadscaleskyscraperscript.", "/someads.", "/spc.php?", "/spcjs.php", "/special-ads/*", "/special_ads/*", "/specials/htads/*", "/spo_show.asp?", "/sponser.", "/sponsimages/*", "/sponslink_", "/sponsor-ad|", "/sponsorad.", "/sponsoradds/*", "/sponsorads/*", "/sponsored_ad.", "/sponsored_links_", "/sponsored_text.", "/sponsored_top.", "/sponsoredcontent.", "/sponsoredlinks.", "/sponsoredlinks/*", "/sponsoredlinksiframe.", "/sponsoredlisting.", "/sponsorpaynetwork.", "/sponsors/amg.php?", "/square-ads/*", "/squaread.", "/src/ads_", "/srv/ad/*", "/static/ad_", "/static/ads/*", "/static_ads/*", "/stickyad.", "/stickyad2.", "/storage/ads/*", "/stories/ads/*", "/story_ad.", "/subad2_", "/subs-ads/*", "/superads_", "/supernorthroomad.", "/swf/ad-", "/swf/ads/*", "/swfbin/ad-", "/synad2.", "/system/ad/*", "/systemad.", "/systemad_", "/tableadnorth.", "/tapatalkdetect.js", "/taxonomy-ads.", "/td_ads/*", "/tdlads/*", "/teaseimg/ads/*", "/template/ad.", "/templateadvimages/*", "/templates/ads/*", "/testads/*", "/testingad.", "/textad.", "/textad/*", "/textad?", "/textad_", "/textadrotate.", "/textads.", "/textads/*", "/textads_", "/textadspromo_", "/tfs-ad.", "/thirdparty/ad/*", "/thirdpartyads/*", "/tii_ads.", "/tikilink?", "/title_ad.", "/tmo/ads/*", "/tmobilead.", "/toigoogleads.", "/toolkitads.", "/tools/ad.", "/top-ad-", "/top_ad.", "/top_ad_", "/top_ads/*", "/top_ads_", "/topad.", "/topad/*", "/topad_", "/topads.", "/topads|", "/topleftads.", "/topperad.", "/tracked_ad.", "/trade_punder.", "/tradead_", "/transad.", "/tremoradrenderer.", "/tribalad.", "/tripplead/*", "/ttz_ad.", "/turbo_ad.", "/twgetad3.", "/txt_ad.", "/txtads/*", "/u/ads/*", "/uberlayadrenderer.", "/ugoads_inner.", "/ukc-ad.", "/unibluead.", "/unity/ad/*", "/update_ads/*", "/update_layer/layer_os_new.php", "/upload/ad/*", "/upload/ads/*", "/uploads/ads/*", "/uploads/adv/*", "/userad/*", "/userimages/ads/*", "/valueclick.", "/vclkads.", "/vericaladtitle.", "/vert728ad.", "/verticaladrotatorv2.", "/video/ads/*", "/video_ad.", "/video_ad_", "/videoad.", "/videoadrenderer.", "/videoads.", "/videoads/*", "/videowall-ad.", "/view/banner/*&referrer=", "/view/banner/*/zone?zid=", "/viewid=*/site=*/size=", "/vpaidadrenderer.", "/vtextads.", "/wallpaperads/*", "/web/ads/*", "/webad?", "/webadimg/*", "/webads.", "/webads_", "/webadverts/*", "/webmailad.", "/webmaster_ads/*", "/welcome_ad.", "/widget/ads.", "/wipeads/*", "/wire/ads/*", "/wmads.", "/work.php?n=*&size=*&c=", "/wp-content/ads/*", "/wp-content/mbp-banner/*", "/wp-content/plugins/banner-manager/*", "/wp-content/plugins/bhcb/lock.js", "/wp-content/plugins/fasterim-optin/*", "/wp-content/plugins/popup-domination/*", "/wp-srv/ad/*", "/wpads/iframe.", "/writelayerad.", "/www/ads/*", "/www/delivery/*", "/x5advcorner.", "/xfiles/ads/*", "/xml/ads_", "/xmladparser.", "/yahoo-ads/*", "/yahooads.", "/yin-ad/*", "/your-ad-", "/your-ad.", "/youradhere468-", "/ysmads.", "/zanox.js", "/zanox/banner/*", "/zanox_ad/*", "://a.ads.", "://adcl.", "://ads.", "://adv-banner.", "://adv.", "://banners.$third-party", "://bwp.*/search", "://eas.*/eas^", "://feeds.*/~a/", "://findnsave.*.*/api/groupon.json?", "://findnsave.*.*/td/portablerop.aspx?", "://oas.*@", "://pubad.", "://rss.*/~a/", "://synad.", "://wrapper.*/a?", ":8080/ads/", ";adsense_", ";cue=pre;$object-subrequest", ";iframeid=ad_", "=ad_iframe&", "=admeld&", "=adspremiumplacement&", "=adtech_", "=advert/", "=advertorial&", "=com_ads&", "=dartad_", "=dynamicads&", "=showsearchgoogleads&", "=webad2&", "?ad_ids=", "?ad_tag=", "?ad_type=", "?ad_width=", "?adarea=", "?adclass=", "?adcontext=", "?adloc=", "?adpage=", "?adpartner=", "?adsite=", "?adsize=", "?adslot=", "?adtarget=", "?adtechplacementid=", "?adtype=", "?advertiser=", "?advertising=", "?advideo_", "?advtile=", "?advurl=", "?adzone=", "?dfpadname=", "?file=ads&", "?getad=&$~object-subrequest", "?goto=ad|", "?idaffiliation=", "?service=ad&", "?simple_ad_", "?type=ad&", "?view=ad&", "_160_ad_", "_acorn_ad_", "_ad1.", "_ad120x120_", "_ad234x90-", "_ad300x250.", "_ad6.", "_ad728x90.", "_ad_300.", "_ad_big.", "_ad_bsb.", "_ad_code.", "_ad_content.", "_ad_controller.", "_ad_count.", "_ad_count=", "_ad_courier.", "_ad_engine/", "_ad_footer.", "_ad_header.", "_ad_homepage.", "_ad_iframe.", "_ad_images/", "_ad_integration.", "_ad_label.", "_ad_leaderboard.", "_ad_library.", "_ad_placeholder-", "_ad_promo2.", "_ad_right.", "_ad_skyscraper.", "_ad_square.", "_ad_view=", "_ad_widesky.", "_adagency/", "_adbanner.", "_adbanner_", "_adbg1a.", "_adbg2.", "_adbg2a.", "_adbreak.", "_adcall_", "_adengine_", "_adframe/", "_adfunction.", "_adify.", "_adlog.", "_adpage=", "_adpartner.", "_adplugin.", "_adrotator.", "_adrow-", "_ads.html", "_ads.php?", "_ads1.", "_ads_index_", "_ads_reporting.", "_ads_single_", "_adsense_", "_adserve/", "_adserver/", "_adshare.", "_adshow.", "_adsjs.", "_adskin.", "_adsrv?", "_adsys.", "_adtech/", "_adtech_", "_adtext_", "_adtitle.", "_adtop.", "_advert.", "_advert/", "_advert1.", "_advert_", "_advertise.", "_advertise180.", "_advertise_", "_advertisehere.", "_advertisement.", "_advertisement_", "_advertisements/", "_advertising/", "_advertisment.", "_advertorial.", "_advertorial_", "_advertorials/", "_advertphoto.", "_adwrap.", "_afs_ads.", "_alt/ads/", "_argus_ad_", "_assets/ads/", "_background_ad/", "_banner_ad.", "_banner_ad_", "_banner_adv_", "_bannerad.", "_bannerview.php?*&aid=", "_blogads.", "_bottom_ads_", "_box_ad_", "_btnad_", "_buttonad.", "_companionad.", "_contest_ad_", "_custom_ad.", "_custom_ad_", "_displayad_", "_displaytopads.", "_dynamicads/", "_engine_ads_", "_externalad.", "_fach_ad.", "_feast_ad.", "_gads_bottom.", "_gads_footer.", "_gads_top.", "_headerad.", "_images/ads/", "_index_ad.", "_jtads/", "_link_ads-", "_live/ad/", "_mainad.", "_media/ads/", "_mmsadbanner/", "_onlinead_", "_openx.", "_openx/", "_org_ad.", "_overlay_ad.", "_paidadvert_", "_partner_ad.", "_platform_ads.", "_player_ads_", "_popunder.", "_popunder_", "_preorderad.", "_psu_ad.", "_request_ad.", "_right_ad.", "_skybannerview.", "_skyscraper160x600.", "_small_ad.", "_sponsoredlinks_", "_square_ad.", "_static_ads.", "_temp/ad_", "_theme/ads/", "_top_ad.", "_top_ad_", "_topad.", "_tribalfusion.", "_video_ads_", "_videoad.", "_vodaaffi_", "_webad.", "buysellads.com", "cdnx.tribalfusion.com", "s.m2pub.com", "ads.trafficjunky.net", "cdn-templates.cxpublic.com", "e-planning", "admax/", "tlvmedia.", "adbucks.","mediagra.","syndication.","exoclick.","ad_companion","adexprt.","m2pub","adpv","cpmrocket","taggify","game-advertising-online","pub-fit","adnxs","smrtgs","phncdn","sociomantic");
	return a;
}
SB_disable_for_n_seconds = (typeof SB_disable_for_n_seconds !== "undefined") ? SB_disable_for_n_seconds : 0;
SB_console_logger("script disable for: " + SB_disable_for_n_seconds);
SB_console_logger("SafeBrowse Initialized and logging as TL");
if (typeof SB_ok_to_run == "undefined") {
	var SB_ok_to_run = true;
}
if (typeof SB_current_location == "undefined") {
	var SB_current_location = document.domain;
}
if (SB_disable_for_n_seconds > 0) {
	SB_start_timer(SB_disable_for_n_seconds);
	SB_ok_to_run = false;
}

if (SB_ok_to_run) {
	SB_console_logger("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	SB_console_logger("SB first run");
	SB_SafeBrowse.run();
	var SB_delayed_call_timer_array = new Array(1500, 3000, 4500, 6000);
	for (i = 0; i < SB_delayed_call_timer_array.length; i++) {
		SB_timer_ms = SB_delayed_call_timer_array[i];
		SB_console_logger(SB_timer_ms);
		setTimeout(function () {
			SB_console_logger("@@@+++++++++++++++++++++++++SAFEBROWSE TIMER FIRE+++++++++++++++++++++++++@@@");
			jQSB("embed").attr("wmode", "opaque");
			jQSB("object").attr("wmode", "opaque");
			SB_SafeBrowse.run();
		}, SB_timer_ms);
	}
}