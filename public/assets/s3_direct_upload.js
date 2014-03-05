/*
 * jQuery UI Widget 1.10.0+amd
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})}),function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):e(window.jQuery)}(function(e){"use strict";var t=0;e.ajaxTransport("iframe",function(n){if(n.async){var r,i,s;return{send:function(o,u){r=e('<form style="display:none;"></form>'),r.attr("accept-charset",n.formAcceptCharset),s=/\?/.test(n.url)?"&":"?",n.type==="DELETE"?(n.url=n.url+s+"_method=DELETE",n.type="POST"):n.type==="PUT"?(n.url=n.url+s+"_method=PUT",n.type="POST"):n.type==="PATCH"&&(n.url=n.url+s+"_method=PATCH",n.type="POST"),i=e('<iframe src="javascript:false;" name="iframe-transport-'+(t+=1)+'"></iframe>').bind("load",function(){var t,s=e.isArray(n.paramName)?n.paramName:[n.paramName];i.unbind("load").bind("load",function(){var t;try{t=i.contents();if(!t.length||!t[0].firstChild)throw new Error}catch(n){t=undefined}u(200,"success",{iframe:t}),e('<iframe src="javascript:false;"></iframe>').appendTo(r),r.remove()}),r.prop("target",i.prop("name")).prop("action",n.url).prop("method",n.type),n.formData&&e.each(n.formData,function(t,n){e('<input type="hidden"/>').prop("name",n.name).val(n.value).appendTo(r)}),n.fileInput&&n.fileInput.length&&n.type==="POST"&&(t=n.fileInput.clone(),n.fileInput.after(function(e){return t[e]}),n.paramName&&n.fileInput.each(function(t){e(this).prop("name",s[t]||n.paramName)}),r.append(n.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),r.submit(),t&&t.length&&n.fileInput.each(function(n,r){var i=e(t[n]);e(r).prop("name",i.prop("name")),i.replaceWith(r)})}),r.append(i).appendTo(document.body)},abort:function(){i&&i.unbind("load").prop("src","javascript".concat(":false;")),r&&r.remove()}}}}),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})}),function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery","jquery.ui.widget"],e):e(window.jQuery)}(function(e){"use strict";e.support.xhrFileUpload=!!window.XMLHttpRequestUpload&&!!window.FileReader,e.support.xhrFormDataFileUpload=!!window.FormData,e.propHooks.elements={get:function(t){return e.nodeName(t,"form")?e.grep(t.elements,function(t){return!e.nodeName(t,"input")||t.type!=="file"}):null}},e.widget("blueimp.fileupload",{options:{dropZone:e(document),pasteZone:e(document),fileInput:undefined,replaceFileInput:!0,paramName:undefined,singleFileUploads:!0,limitMultiFileUploads:undefined,sequentialUploads:!1,limitConcurrentUploads:undefined,forceIframeTransport:!1,redirect:undefined,redirectParamName:undefined,postMessage:undefined,multipart:!0,maxChunkSize:undefined,uploadedBytes:undefined,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,formData:function(e){return e.serializeArray()},add:function(e,t){t.submit()},processData:!1,contentType:!1,cache:!1},_refreshOptionsList:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_BitrateTimer:function(){this.timestamp=+(new Date),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,n){var r=e-this.timestamp;if(!this.bitrate||!n||r>n)this.bitrate=(t-this.loaded)*(1e3/r)*8,this.loaded=t,this.timestamp=e;return this.bitrate}},_isXHRUpload:function(t){return!t.forceIframeTransport&&(!t.multipart&&e.support.xhrFileUpload||e.support.xhrFormDataFileUpload)},_getFormData:function(t){var n;return typeof t.formData=="function"?t.formData(t.form):e.isArray(t.formData)?t.formData:t.formData?(n=[],e.each(t.formData,function(e,t){n.push({name:e,value:t})}),n):[]},_getTotal:function(t){var n=0;return e.each(t,function(e,t){n+=t.size||1}),n},_onProgress:function(e,t){if(e.lengthComputable){var n=+(new Date),r,i;if(t._time&&t.progressInterval&&n-t._time<t.progressInterval&&e.loaded!==e.total)return;t._time=n,r=t.total||this._getTotal(t.files),i=parseInt(e.loaded/e.total*(t.chunkSize||r),10)+(t.uploadedBytes||0),this._loaded+=i-(t.loaded||t.uploadedBytes||0),t.lengthComputable=!0,t.loaded=i,t.total=r,t.bitrate=t._bitrateTimer.getBitrate(n,i,t.bitrateInterval),this._trigger("progress",e,t),this._trigger("progressall",e,{lengthComputable:!0,loaded:this._loaded,total:this._total,bitrate:this._bitrateTimer.getBitrate(n,this._loaded,t.bitrateInterval)})}},_initProgressListener:function(t){var n=this,r=t.xhr?t.xhr():e.ajaxSettings.xhr();r.upload&&(e(r.upload).bind("progress",function(e){var r=e.originalEvent;e.lengthComputable=r.lengthComputable,e.loaded=r.loaded,e.total=r.total,n._onProgress(e,t)}),t.xhr=function(){return r})},_initXHRData:function(t){var n,r=t.files[0],i=t.multipart||!e.support.xhrFileUpload,s=t.paramName[0];t.headers=t.headers||{},t.contentRange&&(t.headers["Content-Range"]=t.contentRange),i?e.support.xhrFormDataFileUpload&&(t.postMessage?(n=this._getFormData(t),t.blob?n.push({name:s,value:t.blob}):e.each(t.files,function(e,r){n.push({name:t.paramName[e]||s,value:r})})):(t.formData instanceof FormData?n=t.formData:(n=new FormData,e.each(this._getFormData(t),function(e,t){n.append(t.name,t.value)})),t.blob?(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"',n.append(s,t.blob,r.name)):e.each(t.files,function(e,r){(window.Blob&&r instanceof Blob||window.File&&r instanceof File)&&n.append(t.paramName[e]||s,r,r.name)})),t.data=n):(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"',t.contentType=r.type,t.data=t.blob||r),t.blob=null},_initIframeSettings:function(t){t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&e("<a></a>").prop("href",t.url).prop("host")!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e,"iframe")},_getParamName:function(t){var n=e(t.fileInput),r=t.paramName;return r?e.isArray(r)||(r=[r]):(r=[],n.each(function(){var t=e(this),n=t.prop("name")||"files[]",i=(t.prop("files")||[1]).length;while(i)r.push(n),i-=1}),r.length||(r=[n.prop("name")||"files[]"])),r},_initFormSettings:function(t){if(!t.form||!t.form.length)t.form=e(t.fileInput.prop("form")),t.form.length||(t.form=e(this.options.fileInput.prop("form")));t.paramName=this._getParamName(t),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||t.form.prop("method")||"").toUpperCase(),t.type!=="POST"&&t.type!=="PUT"&&t.type!=="PATCH"&&(t.type="POST"),t.formAcceptCharset||(t.formAcceptCharset=t.form.attr("accept-charset"))},_getAJAXSettings:function(t){var n=e.extend({},this.options,t);return this._initFormSettings(n),this._initDataSettings(n),n},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,n,r){var i=e.Deferred(),s=i.promise();return n=n||this.options.context||s,t===!0?i.resolveWith(n,r):t===!1&&i.rejectWith(n,r),s.abort=i.promise,this._enhancePromise(s)},_getUploadedBytes:function(e){var t=e.getResponseHeader("Range"),n=t&&t.split("-"),r=n&&n.length>1&&parseInt(n[1],10);return r&&r+1},_chunkedUpload:function(t,n){var r=this,i=t.files[0],s=i.size,o=t.uploadedBytes=t.uploadedBytes||0,u=t.maxChunkSize||s,a=i.slice||i.webkitSlice||i.mozSlice,f=e.Deferred(),l=f.promise(),c,h;return!(this._isXHRUpload(t)&&a&&(o||u<s))||t.data?!1:n?!0:o>=s?(i.error="Uploaded bytes exceed file size",this._getXHRPromise(!1,t.context,[null,"error",i.error])):(h=function(n){var l=e.extend({},t);l.blob=a.call(i,o,o+u,i.type),l.chunkSize=l.blob.size,l.contentRange="bytes "+o+"-"+(o+l.chunkSize-1)+"/"+s,r._initXHRData(l),r._initProgressListener(l),c=(r._trigger("chunksend",null,l)!==!1&&e.ajax(l)||r._getXHRPromise(!1,l.context)).done(function(n,i,u){o=r._getUploadedBytes(u)||o+l.chunkSize,(!l.loaded||l.loaded<l.total)&&r._onProgress(e.Event("progress",{lengthComputable:!0,loaded:o-l.uploadedBytes,total:o-l.uploadedBytes}),l),t.uploadedBytes=l.uploadedBytes=o,l.result=n,l.textStatus=i,l.jqXHR=u,r._trigger("chunkdone",null,l),r._trigger("chunkalways",null,l),o<s?h():f.resolveWith(l.context,[n,i,u])}).fail(function(e,t,n){l.jqXHR=e,l.textStatus=t,l.errorThrown=n,r._trigger("chunkfail",null,l),r._trigger("chunkalways",null,l),f.rejectWith(l.context,[e,t,n])})},this._enhancePromise(l),l.abort=function(){return c.abort()},h(),l)},_beforeSend:function(e,t){this._active===0&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer),this._active+=1,this._loaded+=t.uploadedBytes||0,this._total+=this._getTotal(t.files)},_onDone:function(t,n,r,i){if(!this._isXHRUpload(i)||!i.loaded||i.loaded<i.total){var s=this._getTotal(i.files)||1;this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:s,total:s}),i)}i.result=t,i.textStatus=n,i.jqXHR=r,this._trigger("done",null,i)},_onFail:function(e,t,n,r){r.jqXHR=e,r.textStatus=t,r.errorThrown=n,this._trigger("fail",null,r),r.recalculateProgress&&(this._loaded-=r.loaded||r.uploadedBytes||0,this._total-=r.total||this._getTotal(r.files))},_onAlways:function(e,t,n,r){this._active-=1,this._trigger("always",null,r),this._active===0&&(this._trigger("stop"),this._loaded=this._total=0,this._bitrateTimer=null)},_onSend:function(t,n){var r=this,i,s,o,u,a=r._getAJAXSettings(n),f=function(){return r._sending+=1,a._bitrateTimer=new r._BitrateTimer,i=i||((s||r._trigger("send",t,a)===!1)&&r._getXHRPromise(!1,a.context,s)||r._chunkedUpload(a)||e.ajax(a)).done(function(e,t,n){r._onDone(e,t,n,a)}).fail(function(e,t,n){r._onFail(e,t,n,a)}).always(function(e,t,n){r._sending-=1,r._onAlways(e,t,n,a);if(a.limitConcurrentUploads&&a.limitConcurrentUploads>r._sending){var i=r._slots.shift(),s;while(i){s=i.state?i.state()==="pending":!i.isRejected();if(s){i.resolve();break}i=r._slots.shift()}}}),i};return this._beforeSend(t,a),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(o=e.Deferred(),this._slots.push(o),u=o.pipe(f)):u=this._sequence=this._sequence.pipe(f,f),u.abort=function(){return s=[undefined,"abort","abort"],i?i.abort():(o&&o.rejectWith(a.context,s),f())},this._enhancePromise(u)):f()},_onAdd:function(t,n){var r=this,i=!0,s=e.extend({},this.options,n),o=s.limitMultiFileUploads,u=this._getParamName(s),a,f,l,c;if(!s.singleFileUploads&&!o||!this._isXHRUpload(s))l=[n.files],a=[u];else if(!s.singleFileUploads&&o){l=[],a=[];for(c=0;c<n.files.length;c+=o)l.push(n.files.slice(c,c+o)),f=u.slice(c,c+o),f.length||(f=u),a.push(f)}else a=u;return n.originalFiles=n.files,e.each(l||n.files,function(s,o){var u=e.extend({},n);return u.files=l?o:[o],u.paramName=a[s],u.submit=function(){return u.jqXHR=this.jqXHR=r._trigger("submit",t,this)!==!1&&r._onSend(t,this),this.jqXHR},i=r._trigger("add",t,u),i}),i},_replaceFileInput:function(t){var n=t.clone(!0);e("<form></form>").append(n)[0].reset(),t.after(n).detach(),e.cleanData(t.unbind("remove")),this.options.fileInput=this.options.fileInput.map(function(e,r){return r===t[0]?n[0]:r}),t[0]===this.element[0]&&(this.element=n)},_handleFileTreeEntry:function(t,n){var r=this,i=e.Deferred(),s=function(e){e&&!e.entry&&(e.entry=t),i.resolve([e])},o;return n=n||"",t.isFile?t._file?(t._file.relativePath=n,i.resolve(t._file)):t.file(function(e){e.relativePath=n,i.resolve(e)},s):t.isDirectory?(o=t.createReader(),o.readEntries(function(e){r._handleFileTreeEntries(e,n+t.name+"/").done(function(e){i.resolve(e)}).fail(s)},s)):i.resolve([]),i.promise()},_handleFileTreeEntries:function(t,n){var r=this;return e.when.apply(e,e.map(t,function(e){return r._handleFileTreeEntry(e,n)})).pipe(function(){return Array.prototype.concat.apply([],arguments)})},_getDroppedFiles:function(t){t=t||{};var n=t.items;return n&&n.length&&(n[0].webkitGetAsEntry||n[0].getAsEntry)?this._handleFileTreeEntries(e.map(n,function(e){var t;return e.webkitGetAsEntry?(t=e.webkitGetAsEntry(),t&&(t._file=e.getAsFile()),t):e.getAsEntry()})):e.Deferred().resolve(e.makeArray(t.files)).promise()},_getSingleFileInputFiles:function(t){t=e(t);var n=t.prop("webkitEntries")||t.prop("entries"),r,i;if(n&&n.length)return this._handleFileTreeEntries(n);r=e.makeArray(t.prop("files"));if(!r.length){i=t.prop("value");if(!i)return e.Deferred().resolve([]).promise();r=[{name:i.replace(/^.*\\/,"")}]}else r[0].name===undefined&&r[0].fileName&&e.each(r,function(e,t){t.name=t.fileName,t.size=t.fileSize});return e.Deferred().resolve(r).promise()},_getFileInputFiles:function(t){return t instanceof e&&t.length!==1?e.when.apply(e,e.map(t,this._getSingleFileInputFiles)).pipe(function(){return Array.prototype.concat.apply([],arguments)}):this._getSingleFileInputFiles(t)},_onChange:function(t){var n=this,r={fileInput:e(t.target),form:e(t.target.form)};this._getFileInputFiles(r.fileInput).always(function(e){r.files=e,n.options.replaceFileInput&&n._replaceFileInput(r.fileInput),n._trigger("change",t,r)!==!1&&n._onAdd(t,r)})},_onPaste:function(t){var n=t.originalEvent.clipboardData,r=n&&n.items||[],i={files:[]};e.each(r,function(e,t){var n=t.getAsFile&&t.getAsFile();n&&i.files.push(n)});if(this._trigger("paste",t,i)===!1||this._onAdd(t,i)===!1)return!1},_onDrop:function(e){var t=this,n=e.dataTransfer=e.originalEvent.dataTransfer,r={};n&&n.files&&n.files.length&&e.preventDefault(),this._getDroppedFiles(n).always(function(n){r.files=n,t._trigger("drop",e,r)!==!1&&t._onAdd(e,r)})},_onDragOver:function(t){var n=t.dataTransfer=t.originalEvent.dataTransfer;if(this._trigger("dragover",t)===!1)return!1;n&&e.inArray("Files",n.types)!==-1&&(n.dropEffect="copy",t.preventDefault())},_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop}),this._on(this.options.pasteZone,{paste:this._onPaste})),this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_setOption:function(t,n){var r=e.inArray(t,this._refreshOptionsList)!==-1;r&&this._destroyEventHandlers(),this._super(t,n),r&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;t.fileInput===undefined?t.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone)),t.pasteZone instanceof e||(t.pasteZone=e(t.pasteZone))},_create:function(){var t=this.options;e.extend(t,e(this.element[0].cloneNode(!1)).data()),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=this._loaded=this._total=0,this._initEventHandlers()},_destroy:function(){this._destroyEventHandlers()},add:function(t){var n=this;if(!t||this.options.disabled)return;t.fileInput&&!t.files?this._getFileInputFiles(t.fileInput).always(function(e){t.files=e,n._onAdd(null,t)}):(t.files=e.makeArray(t.files),this._onAdd(null,t))},send:function(t){if(t&&!this.options.disabled){if(t.fileInput&&!t.files){var n=this,r=e.Deferred(),i=r.promise(),s,o;return i.abort=function(){return o=!0,s?s.abort():(r.reject(null,"abort","abort"),i)},this._getFileInputFiles(t.fileInput).always(function(e){if(o)return;t.files=e,s=n._onSend(null,t).then(function(e,t,n){r.resolve(e,t,n)},function(e,t,n){r.reject(e,t,n)})}),this._enhancePromise(i)}t.files=e.makeArray(t.files);if(t.files.length)return this._onSend(null,t)}return this._getXHRPromise(!1,t&&t.context)}})}),function(e){"use strict";var t=function(e,n){var r=/[^\w\-\.:]/.test(e)?new Function(t.arg+",tmpl","var _e=tmpl.encode"+t.helper+",_s='"+e.replace(t.regexp,t.func)+"';return _s;"):t.cache[e]=t.cache[e]||t(t.load(e));return n?r(n,t):function(e){return r(e,t)}};t.cache={},t.load=function(e){return document.getElementById(e).innerHTML},t.regexp=/([\s'\\])(?![^%]*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,t.func=function(e,t,n,r,i,s){if(t)return{"\n":"\\n","\r":"\\r","	":"\\t"," ":" "}[e]||"\\"+e;if(n)return n==="="?"'+_e("+r+")+'":"'+("+r+"||'')+'";if(i)return"';";if(s)return"_s+='"},t.encReg=/[<>&"'\x00]/g,t.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},t.encode=function(e){return String(e||"").replace(t.encReg,function(e){return t.encMap[e]||""})},t.arg="o",t.helper=",print=function(s,e){_s+=e&&(s||'')||_e(s);},include=function(s,d){_s+=tmpl(s,d);}",typeof define=="function"&&define.amd?define(function(){return t}):e.tmpl=t}(this),function(){var e;e=jQuery,e.fn.S3Uploader=function(t){var n,r,i,s,o,u,a,f;return this.length>1?(this.each(function(){return e(this).S3Uploader(t)}),this):(n=this,f={path:"",additional_data:null,before_add:null,remove_completed_progress_bar:!0,remove_failed_progress_bar:!1,progress_bar_target:null,click_submit_target:null,allow_multiple_files:!0},e.extend(f,t),s=[],o=[],f.click_submit_target&&f.click_submit_target.click(function(){var e,t,n;for(t=0,n=o.length;t<n;t++)e=o[t],e.submit();return!1}),a=function(){return n.fileupload({add:function(t,r){var i;i=r.files[0],i.unique_id=Math.random().toString(36).substr(2,16);if(!f.before_add||!!f.before_add(i))return s.push(r),e("#template-upload").length>0?(r.context=e(e.trim(tmpl("template-upload",i))),e(r.context).appendTo(f.progress_bar_target||n)):f.allow_multiple_files||(r.context=f.progress_bar_target),f.click_submit_target?f.allow_multiple_files?o.push(r):o=[r]:r.submit()},start:function(e){return n.trigger("s3_uploads_start",[e])},progress:function(e,t){var n;if(t.context)return n=parseInt(t.loaded/t.total*100,10),t.context.find(".bar").css("width",n+"%")},done:function(t,i){var o,u;u=r(n,i.files[0],i.result),o=n.data("callback-url"),o&&(u[n.data("callback-param")]=u.url,e.ajax({type:n.data("callback-method"),url:o,data:u,beforeSend:function(e,t){return n.trigger("ajax:beforeSend",[e,t])},complete:function(e,t){return n.trigger("ajax:complete",[e,t])},success:function(e,t,r){return n.trigger("ajax:success",[e,t,r])},error:function(e,t,r){return n.trigger("ajax:error",[e,t,r])}})),i.context&&f.remove_completed_progress_bar&&i.context.remove(),n.trigger("s3_upload_complete",[u]),s.splice(e.inArray(i,s),1);if(!s.length)return n.trigger("s3_uploads_complete",[u])},fail:function(e,t){var i;return i=r(n,t.files[0],t.result),i.error_thrown=t.errorThrown,t.context&&f.remove_failed_progress_bar&&t.context.remove(),n.trigger("s3_upload_failed",[i])},formData:function(e){var t,r,i;return t=e.serializeArray(),r="","type"in this.files[0]&&(r=this.files[0].type),t.push({name:"content-type",value:r}),i=n.data("key").replace("{timestamp}",(new Date).getTime()).replace("{unique_id}",this.files[0].unique_id),t[1].value=f.path+i,"FormData"in window||n.find("input[name='key']").val(f.path+i),t}})},r=function(t,n,r){var s,o;return s={},r?(s.url=e(r).find("Location").text(),s.filepath=e("<a />").attr("href",s.url)[0].pathname):(o=t.attr("action"),s.filepath=t.find("input[name=key]").val().replace("/${filename}",""),s.url=o+s.filepath+"/"+encodeURIComponent(n.name)),s.filename=n.name,"size"in n&&(s.filesize=n.size),"type"in n&&(s.filetype=n.type),"unique_id"in n&&(s.unique_id=n.unique_id),u(n)&&(s.relativePath=i(n)),f.additional_data&&(s=e.extend(s,f.additional_data)),s},u=function(e){return e.relativePath||e.webkitRelativePath},i=function(e){return e.relativePath||(e.webkitRelativePath?e.webkitRelativePath.split("/").slice(0,-1).join("/")+"/":void 0)},this.initialize=function(){return n.data("key",n.find("input[name='key']").val()),a(),this},this.path=function(e){return f.path=e},this.additional_data=function(e){return f.additional_data=e},this.initialize())}}.call(this);