/**
 * noty - jQuery Notification Plugin v2.1.0
 * Contributors: https://github.com/needim/noty/graphs/contributors
 *
 * Examples and Documentation - http://needim.github.com/noty/
 *
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
typeof Object.create!="function"&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e){var t={init:function(t){return this.options=e.extend({},e.noty.defaults,t),this.options.layout=this.options.custom?e.noty.layouts.inline:e.noty.layouts[this.options.layout],this.options.theme=e.noty.themes[this.options.theme],delete t.layout,delete t.theme,this.options=e.extend({},this.options,this.options.layout.options),this.options.id="noty_"+(new Date).getTime()*Math.floor(Math.random()*1e6),this.options=e.extend({},this.options,t),this._build(),this},_build:function(){var t=e('<div class="noty_bar"></div>').attr("id",this.options.id);t.append(this.options.template).find(".noty_text").html(this.options.text),this.$bar=this.options.layout.parent.object!==null?e(this.options.layout.parent.object).css(this.options.layout.parent.css).append(t):t;if(this.options.buttons){this.options.closeWith=[],this.options.timeout=!1;var n=e("<div/>").addClass("noty_buttons");this.options.layout.parent.object!==null?this.$bar.find(".noty_bar").append(n):this.$bar.append(n);var r=this;e.each(this.options.buttons,function(t,n){var i=e("<button/>").addClass(n.addClass?n.addClass:"gray").html(n.text).appendTo(r.$bar.find(".noty_buttons")).bind("click",function(){e.isFunction(n.onClick)&&n.onClick.call(i,r)})})}this.$message=this.$bar.find(".noty_message"),this.$closeButton=this.$bar.find(".noty_close"),this.$buttons=this.$bar.find(".noty_buttons"),e.noty.store[this.options.id]=this},show:function(){var t=this;return e(t.options.layout.container.selector).append(t.$bar),t.options.theme.style.apply(t),e.type(t.options.layout.css)==="function"?this.options.layout.css.apply(t.$bar):t.$bar.css(this.options.layout.css||{}),t.$bar.addClass(t.options.layout.addClass),t.options.layout.container.style.apply(e(t.options.layout.container.selector)),t.options.theme.callback.onShow.apply(this),e.inArray("click",t.options.closeWith)>-1&&t.$bar.css("cursor","pointer").one("click",function(e){t.stopPropagation(e),t.options.callback.onCloseClick&&t.options.callback.onCloseClick.apply(t),t.close()}),e.inArray("hover",t.options.closeWith)>-1&&t.$bar.one("mouseenter",function(){t.close()}),e.inArray("button",t.options.closeWith)>-1&&t.$closeButton.one("click",function(e){t.stopPropagation(e),t.close()}),e.inArray("button",t.options.closeWith)==-1&&t.$closeButton.remove(),t.options.callback.onShow&&t.options.callback.onShow.apply(t),t.$bar.animate(t.options.animation.open,t.options.animation.speed,t.options.animation.easing,function(){t.options.callback.afterShow&&t.options.callback.afterShow.apply(t),t.shown=!0}),t.options.timeout&&t.$bar.delay(t.options.timeout).promise().done(function(){t.close()}),this},close:function(){if(this.closed)return;if(this.$bar&&this.$bar.hasClass("i-am-closing-now"))return;var t=this;if(!this.shown){var n=[];e.each(e.noty.queue,function(e,r){r.options.id!=t.options.id&&n.push(r)}),e.noty.queue=n;return}t.$bar.addClass("i-am-closing-now"),t.options.callback.onClose&&t.options.callback.onClose.apply(t),t.$bar.clearQueue().stop().animate(t.options.animation.close,t.options.animation.speed,t.options.animation.easing,function(){t.options.callback.afterClose&&t.options.callback.afterClose.apply(t)}).promise().done(function(){t.options.modal&&(e.notyRenderer.setModalCount(-1),e.notyRenderer.getModalCount()==0&&e(".noty_modal").fadeOut("fast",function(){e(this).remove()})),e.notyRenderer.setLayoutCountFor(t,-1),e.notyRenderer.getLayoutCountFor(t)==0&&e(t.options.layout.container.selector).remove(),typeof t.$bar!="undefined"&&t.$bar!==null&&(t.$bar.remove(),t.$bar=null,t.closed=!0),delete e.noty.store[t.options.id],t.options.theme.callback.onClose.apply(t),t.options.dismissQueue||(e.noty.ontap=!0,e.notyRenderer.render()),t.options.maxVisible>0&&t.options.dismissQueue&&e.notyRenderer.render()})},setText:function(e){return this.closed||(this.options.text=e,this.$bar.find(".noty_text").html(e)),this},setType:function(e){return this.closed||(this.options.type=e,this.options.theme.style.apply(this),this.options.theme.callback.onShow.apply(this)),this},setTimeout:function(e){if(!this.closed){var t=this;this.options.timeout=e,t.$bar.delay(t.options.timeout).promise().done(function(){t.close()})}return this},stopPropagation:function(e){e=e||window.event,typeof e.stopPropagation!="undefined"?e.stopPropagation():e.cancelBubble=!0},closed:!1,shown:!1};e.notyRenderer={},e.notyRenderer.init=function(n){var r=Object.create(t).init(n);return r.options.force?e.noty.queue.unshift(r):e.noty.queue.push(r),e.notyRenderer.render(),e.noty.returns=="object"?r:r.options.id},e.notyRenderer.render=function(){var t=e.noty.queue[0];e.type(t)==="object"?t.options.dismissQueue?t.options.maxVisible>0?e(t.options.layout.container.selector+" li").length<t.options.maxVisible&&e.notyRenderer.show(e.noty.queue.shift()):e.notyRenderer.show(e.noty.queue.shift()):e.noty.ontap&&(e.notyRenderer.show(e.noty.queue.shift()),e.noty.ontap=!1):e.noty.ontap=!0},e.notyRenderer.show=function(t){t.options.modal&&(e.notyRenderer.createModalFor(t),e.notyRenderer.setModalCount(1)),e(t.options.layout.container.selector).length==0?t.options.custom?t.options.custom.append(e(t.options.layout.container.object).addClass("i-am-new")):e("body").append(e(t.options.layout.container.object).addClass("i-am-new")):e(t.options.layout.container.selector).removeClass("i-am-new"),e.notyRenderer.setLayoutCountFor(t,1),t.show()},e.notyRenderer.createModalFor=function(t){e(".noty_modal").length==0&&e("<div/>").addClass("noty_modal").data("noty_modal_count",0).css(t.options.theme.modal.css).prependTo(e("body")).fadeIn("fast")},e.notyRenderer.getLayoutCountFor=function(t){return e(t.options.layout.container.selector).data("noty_layout_count")||0},e.notyRenderer.setLayoutCountFor=function(t,n){return e(t.options.layout.container.selector).data("noty_layout_count",e.notyRenderer.getLayoutCountFor(t)+n)},e.notyRenderer.getModalCount=function(){return e(".noty_modal").data("noty_modal_count")||0},e.notyRenderer.setModalCount=function(t){return e(".noty_modal").data("noty_modal_count",e.notyRenderer.getModalCount()+t)},e.fn.noty=function(t){return t.custom=e(this),e.notyRenderer.init(t)},e.noty={},e.noty.queue=[],e.noty.ontap=!0,e.noty.layouts={},e.noty.themes={},e.noty.returns="object",e.noty.store={},e.noty.get=function(t){return e.noty.store.hasOwnProperty(t)?e.noty.store[t]:!1},e.noty.close=function(t){return e.noty.get(t)?e.noty.get(t).close():!1},e.noty.setText=function(t,n){return e.noty.get(t)?e.noty.get(t).setText(n):!1},e.noty.setType=function(t,n){return e.noty.get(t)?e.noty.get(t).setType(n):!1},e.noty.clearQueue=function(){e.noty.queue=[]},e.noty.closeAll=function(){e.noty.clearQueue(),e.each(e.noty.store,function(e,t){t.close()})};var n=window.alert;e.noty.consumeAlert=function(t){window.alert=function(n){t?t.text=n:t={text:n},e.notyRenderer.init(t)}},e.noty.stopConsumeAlert=function(){window.alert=n},e.noty.defaults={layout:"top",theme:"defaultTheme",type:"alert",text:"",dismissQueue:!0,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:"toggle"},close:{height:"toggle"},easing:"swing",speed:500},timeout:!1,force:!1,modal:!1,maxVisible:5,closeWith:["click"],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){},onCloseClick:function(){}},buttons:!1},e(window).resize(function(){e.each(e.noty.layouts,function(t,n){n.container.style.apply(e(n.container.selector))})})}(jQuery),window.noty=function(t){var n=0,r={animateOpen:"animation.open",animateClose:"animation.close",easing:"animation.easing",speed:"animation.speed",onShow:"callback.onShow",onShown:"callback.afterShow",onClose:"callback.onClose",onCloseClick:"callback.onCloseClick",onClosed:"callback.afterClose"};return jQuery.each(t,function(e,i){if(r[e]){n++;var s=r[e].split(".");t[s[0]]||(t[s[0]]={}),t[s[0]][s[1]]=i?i:function(){},delete t[e]}}),t.closeWith||(t.closeWith=jQuery.noty.defaults.closeWith),t.hasOwnProperty("closeButton")&&(n++,t.closeButton&&t.closeWith.push("button"),delete t.closeButton),t.hasOwnProperty("closeOnSelfClick")&&(n++,t.closeOnSelfClick&&t.closeWith.push("click"),delete t.closeOnSelfClick),t.hasOwnProperty("closeOnSelfOver")&&(n++,t.closeOnSelfOver&&t.closeWith.push("hover"),delete t.closeOnSelfOver),t.hasOwnProperty("custom")&&(n++,t.custom.container!="null"&&(t.custom=t.custom.container)),t.hasOwnProperty("cssPrefix")&&(n++,delete t.cssPrefix),t.theme=="noty_theme_default"&&(n++,t.theme="defaultTheme"),t.hasOwnProperty("dismissQueue")||(t.dismissQueue=jQuery.noty.defaults.dismissQueue),t.hasOwnProperty("maxVisible")||(t.maxVisible=jQuery.noty.defaults.maxVisible),t.buttons&&jQuery.each(t.buttons,function(e,t){t.click&&(n++,t.onClick=t.click,delete t.click),t.type&&(n++,t.addClass=t.type,delete t.type)}),n&&typeof console!="undefined"&&console.warn&&console.warn("You are using noty v2 with v1.x.x options. @deprecated until v2.2.0 - Please update your options."),jQuery.notyRenderer.init(t)};