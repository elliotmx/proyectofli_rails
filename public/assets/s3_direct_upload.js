(function(){var e;e=jQuery,e.fn.S3Uploader=function(t){var n,r,i,s,o,u,a,f;return this.length>1?(this.each(function(){return e(this).S3Uploader(t)}),this):(n=this,f={path:"",additional_data:null,before_add:null,remove_completed_progress_bar:!0,remove_failed_progress_bar:!1,progress_bar_target:null,click_submit_target:null,allow_multiple_files:!0},e.extend(f,t),s=[],o=[],f.click_submit_target&&f.click_submit_target.click(function(){var e,t,n;for(t=0,n=o.length;t<n;t++)e=o[t],e.submit();return!1}),a=function(){return n.fileupload({add:function(t,r){var i;i=r.files[0],i.unique_id=Math.random().toString(36).substr(2,16);if(!f.before_add||!!f.before_add(i))return s.push(r),e("#template-upload").length>0?(r.context=e(e.trim(tmpl("template-upload",i))),e(r.context).appendTo(f.progress_bar_target||n)):f.allow_multiple_files||(r.context=f.progress_bar_target),f.click_submit_target?f.allow_multiple_files?o.push(r):o=[r]:r.submit()},start:function(e){return n.trigger("s3_uploads_start",[e])},progress:function(e,t){var n;if(t.context)return n=parseInt(t.loaded/t.total*100,10),t.context.find(".bar").css("width",n+"%")},done:function(t,i){var o,u;u=r(n,i.files[0],i.result),o=n.data("callback-url"),o&&(u[n.data("callback-param")]=u.url,e.ajax({type:n.data("callback-method"),url:o,data:u,beforeSend:function(e,t){return n.trigger("ajax:beforeSend",[e,t])},complete:function(e,t){return n.trigger("ajax:complete",[e,t])},success:function(e,t,r){return n.trigger("ajax:success",[e,t,r])},error:function(e,t,r){return n.trigger("ajax:error",[e,t,r])}})),i.context&&f.remove_completed_progress_bar&&i.context.remove(),n.trigger("s3_upload_complete",[u]),s.splice(e.inArray(i,s),1);if(!s.length)return n.trigger("s3_uploads_complete",[u])},fail:function(e,t){var i;return i=r(n,t.files[0],t.result),i.error_thrown=t.errorThrown,t.context&&f.remove_failed_progress_bar&&t.context.remove(),n.trigger("s3_upload_failed",[i])},formData:function(e){var t,r,i;return t=e.serializeArray(),r="","type"in this.files[0]&&(r=this.files[0].type),t.push({name:"content-type",value:r}),i=n.data("key").replace("{timestamp}",(new Date).getTime()).replace("{unique_id}",this.files[0].unique_id),t[1].value=f.path+i,"FormData"in window||n.find("input[name='key']").val(f.path+i),t}})},r=function(t,n,r){var s,o;return s={},r?(s.url=e(r).find("Location").text(),s.filepath=e("<a />").attr("href",s.url)[0].pathname):(o=t.attr("action"),s.filepath=t.find("input[name=key]").val().replace("/${filename}",""),s.url=o+s.filepath+"/"+encodeURIComponent(n.name)),s.filename=n.name,"size"in n&&(s.filesize=n.size),"type"in n&&(s.filetype=n.type),"unique_id"in n&&(s.unique_id=n.unique_id),u(n)&&(s.relativePath=i(n)),f.additional_data&&(s=e.extend(s,f.additional_data)),s},u=function(e){return e.relativePath||e.webkitRelativePath},i=function(e){return e.relativePath||(e.webkitRelativePath?e.webkitRelativePath.split("/").slice(0,-1).join("/")+"/":void 0)},this.initialize=function(){return n.data("key",n.find("input[name='key']").val()),a(),this},this.path=function(e){return f.path=e},this.additional_data=function(e){return f.additional_data=e},this.initialize())}}).call(this);