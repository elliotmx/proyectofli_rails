/*
 * JavaScript Templates 2.1.0
 * https://github.com/blueimp/JavaScript-Templates
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Inspired by John Resig's JavaScript Micro-Templating:
 * http://ejohn.org/blog/javascript-micro-templating/
 */
/*jslint evil: true, regexp: true */
/*global document, define */
(function(e){"use strict";var t=function(e,n){var r=/[^\w\-\.:]/.test(e)?new Function(t.arg+",tmpl","var _e=tmpl.encode"+t.helper+",_s='"+e.replace(t.regexp,t.func)+"';return _s;"):t.cache[e]=t.cache[e]||t(t.load(e));return n?r(n,t):function(e){return r(e,t)}};t.cache={},t.load=function(e){return document.getElementById(e).innerHTML},t.regexp=/([\s'\\])(?![^%]*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,t.func=function(e,t,n,r,i,s){if(t)return{"\n":"\\n","\r":"\\r","	":"\\t"," ":" "}[e]||"\\"+e;if(n)return n==="="?"'+_e("+r+")+'":"'+("+r+"||'')+'";if(i)return"';";if(s)return"_s+='"},t.encReg=/[<>&"'\x00]/g,t.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},t.encode=function(e){return String(e||"").replace(t.encReg,function(e){return t.encMap[e]||""})},t.arg="o",t.helper=",print=function(s,e){_s+=e&&(s||'')||_e(s);},include=function(s,d){_s+=tmpl(s,d);}",typeof define=="function"&&define.amd?define(function(){return t}):e.tmpl=t})(this);