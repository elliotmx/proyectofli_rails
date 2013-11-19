/*!
* jQuery Tags plugin v1.1
* http://github.com/aquilez/jquery-tags
*
* Copyright 2011, Santiago Dimattia
* Released under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*
*/
(function(e){e.fn.tags=function(t){var n={separator:",",maxTagWords:0,tagAdded:function(){},tagRemoved:function(){}},r=e.extend(n,t);e(this).each(function(){var t=e(this),n={textfield:t,taglist:{},init:function(){var e=this,t=this.textfield;if(!t.is("input[type=text]"))return;t.wrap('<div class="tag-manager" />'),t.before('<ul class="tag-list"></ul>'),t.before('<input type="hidden" name="'+t.attr("name")+'" />'),t.removeAttr("name"),e.add_tag(),t.parent().bind("click",function(){t.focus()}),t.bind("blur",function(){e.add_tag()}).keydown(function(t){t.keyCode==13&&(t.preventDefault(),e.add_tag())})},updateHiddenField:function(){var e="";for(i in this.taglist)e+=r.separator+this.taglist[i];this.textfield.parent().children("input[type=hidden]").val(e.substring(1))},add_tag:function(){var t=this,n=this.textfield;if(n.val()=="")return;tags=n.val().split(r.separator);for(i in tags){tag=tags[i].replace(/^\s+|\s+$/g,"");var s=tag.split(" ");if(r.maxTagWords!=0&&s.length>r.maxTagWords)for(var o=0;o<s.length-r.maxTagWords;o++)tag=tag.substring(0,tag.lastIndexOf(" "));t.taglist[tag.toLowerCase()]===undefined&&(n.parent().children("ul.tag-list").append('<li data-name="'+tag+'">'+tag+' <a class="tag-remove-link">X</a></li>'),t.taglist[tag.toLowerCase()]=tag,n.parent().find('li[data-name="'+tag+'"] a').unbind().click(function(){tagname=e(this).parent().data("name").toString().toLowerCase(),delete t.taglist[tagname],t.updateHiddenField(),e(this).parent().remove(),r.tagRemoved(tag,n)})),r.tagAdded(tag,n)}t.updateHiddenField(),n.val("")}};n.init()})}})(jQuery);