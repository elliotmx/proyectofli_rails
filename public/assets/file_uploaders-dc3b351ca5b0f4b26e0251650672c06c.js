(function(){jQuery(function(){return $("#fileupload").fileupload({add:function(e,t){var n,r;return r=/(\.|\/)(gif|jpe?g|png)$/i,n=t.files[0],r.test(n.type)||r.test(n.name)?(t.context=$(tmpl("template-upload",n)),$("#fileupload").append(t.context),t.submit()):alert(""+n.name+" is not a gif, jpeg, or png image file")},progress:function(e,t){var n;if(t.context)return n=parseInt(t.loaded/t.total*100,10),t.context.find(".bar").css("width",n+"%")},done:function(e,t){var n,r,i,s,o;i=t.files[0],r=$("#fileupload").attr("action"),s=$("#fileupload input[name=key]").val().replace("${filename}",i.name),o=$("#fileupload").data("post"),n={},n[$("#fileupload").data("as")]=r+s,$.post(o,n);if(t.context)return t.context.remove()},fail:function(e,t){return alert(""+t.files[0].name+" failed to upload."),console.log("Upload failed:"),console.log(t)}})})}).call(this);