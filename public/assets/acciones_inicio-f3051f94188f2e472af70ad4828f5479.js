function cargarAccionesInicio(){$("input.tags").tags(),$("#tabApplicationsList").dataTable(),$("#section_1").show(),$(".btnHowTo").hover(function(){$(this).children(".unoI").toggle("slow"),$(this).children(".uno").toggle("slow")}),$(".btnHowTo").on("click",function(e){$(".btnHowTo").removeClass("active"),$(this).addClass("active"),$(".btnguardar").show();switch(e.currentTarget.id){case"registroInvolcradosBtn":$(".questions_section").hide(),$("#section_1").show();break;case"conociendoMejorBtn":$(".questions_section").hide(),$("#section_2").show(),cargarArbolProblemas(),cargarArbolAcciones(),copiarValoresTxtProblema();break;case"primeroLoPrimeroBtn":$(".questions_section").hide(),$("#section_3").show();break;case"areaImpactoBtn":$(".questions_section").hide(),$("#section_4").show();break;case"manosObraBtn":$(".questions_section").hide(),$("#section_5").show(),cargarArbolAcciones(),mostrarLineaAccion(),cargarObjetivosJson();break;case"riesgosBtn":$(".questions_section").hide(),$("#section_6").show();break;case"comentariosFinBtn":$(".questions_section").hide(),$("#section_7").show();break;case"redactarProyectoBtn":alert("no podrás acceder a esta sección, hasta haber completado todo el proceso");break;case"conexionConvocatoriasBtn":$(".questions_section").hide(),$("#section_9").show()}$("html, body").animate({scrollTop:0},"slow")}),$("#section_1").show(),$(".btnPanel").on("click",function(e){$(".btnPanel").removeClass("active"),$(this).addClass("active"),$(".img").removeClass("active"),$(this).find(".img").addClass("active");switch(e.currentTarget.id){case"registroInvolcradosBtn":$(".questions_section").hide(),$("#section_1").show();break;case"conociendoMejorBtn":$(".questions_section").hide(),$("#section_2").show()}$("html, body").animate({scrollTop:0},"slow")}),$("#btn_agrega_colaborador").on("click",function(){$(this).hide()}),$(".inputs.txtProblema").on("keyup",function(){copiarValoresTxtProblema()}),$(".chosen_small").chosen({width:"350px",disable_search_threshold:10}),$(".chosen").chosen({width:"400px",disable_search_threshold:10})}function generateNoty(e,t){n=noty({text:t,type:"alert",dismissQueue:!0,layout:e,modal:!0,timeout:200,template:'<div class="noty_message"><img src="../assets/okicon2.png" alt="logo">&nbsp;<span class="noty_text"></span><div class="noty_close"></div></div>',theme:"defaultTheme"})}function generateNotyConfirm(e,t,r){n=noty({text:"¿Quieres ver como quedó tu PDF?",modal:!0,layout:e,buttons:[{addClass:"btn btn-primary",text:"Ok",onClick:function(e){e.close(),window.open(r,"mywindow","width=800,height=400")}},{addClass:"btn btn-danger",text:"Cancel",onClick:function(e){e.close(),noty({text:'You clicked "Cancel" button',type:"error"})}}]})}function copiarValoresTxtProblema(){var e=$(".inputs.txtProblema").val();$("#p1").val(e),$("#op1").val(e)}function showUserEditForm(e){$("#btn_agrega_colaborador").hide(),$(".user_edit_forms").hide(),$("#edit_form_"+e).show()}function hideUserEditForm(){$("#formNewUser").hide(),$(".user_edit_forms").hide(),$("#btn_agrega_colaborador").show()};