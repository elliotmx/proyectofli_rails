/*
 * JavaScript Load Image 1.2.1
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
/*jslint nomen: true */
/*global window, document, URL, webkitURL, Blob, File, FileReader, define */
(function(e){"use strict";var t=function(e,n,r){var i=document.createElement("img"),s,o;return i.onerror=n,i.onload=function(){o&&(!r||!r.noRevoke)&&t.revokeObjectURL(o),n(t.scale(i,r))},window.Blob&&e instanceof Blob||window.File&&e instanceof File?s=o=t.createObjectURL(e):s=e,s?(i.src=s,i):t.readFile(e,function(e){i.src=e})},n=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;t.scale=function(e,t){t=t||{};var n=document.createElement("canvas"),r=e.width,i=e.height,s=Math.max((t.minWidth||r)/r,(t.minHeight||i)/i);return s>1&&(r=parseInt(r*s,10),i=parseInt(i*s,10)),s=Math.min((t.maxWidth||r)/r,(t.maxHeight||i)/i),s<1&&(r=parseInt(r*s,10),i=parseInt(i*s,10)),e.getContext||t.canvas&&n.getContext?(n.width=r,n.height=i,n.getContext("2d").drawImage(e,0,0,r,i),n):(e.width=r,e.height=i,e)},t.createObjectURL=function(e){return n?n.createObjectURL(e):!1},t.revokeObjectURL=function(e){return n?n.revokeObjectURL(e):!1},t.readFile=function(e,t){if(window.FileReader&&FileReader.prototype.readAsDataURL){var n=new FileReader;return n.onload=function(e){t(e.target.result)},n.readAsDataURL(e),n}return!1},typeof define=="function"&&define.amd?define(function(){return t}):e.loadImage=t})(this);