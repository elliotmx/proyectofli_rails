function showUserEditForm(e){$("#btn_agrega_colaborador").hide(),$(".user_edit_forms").hide(),$("#edit_form_"+e).show()}function hideUserEditForm(){$("#formNewUser").hide(),$(".user_edit_forms").hide(),$("#btn_agrega_colaborador").show()}$(document).ready(function(){$("#section_1").show(),$(".btnHowTo").hover(function(){$(this).children(".unoI").toggle("slow"),$(this).children(".uno").toggle("slow")}),$(".btnHowTo").on("click",function(e){$(".btnHowTo").removeClass("active"),$(this).addClass("active");switch(e.currentTarget.id){case"registroInvolcradosBtn":$(".questions_section").hide(),$("#section_1").show();break;case"conociendoMejorBtn":$(".questions_section").hide(),$("#section_2").show();break;case"primeroLoPrimeroBtn":$(".questions_section").hide(),$("#section_3").show();break;case"areaImpactoBtn":$(".questions_section").hide(),$("#section_4").show();break;case"manosObraBtn":$(".questions_section").hide(),$("#section_5").show();break;case"riesgosBtn":$(".questions_section").hide(),$("#section_6").show();break;case"comentariosFinBtn":$(".questions_section").hide(),$("#section_7").show();break;case"redactarProyectoBtn":$(".questions_section").hide(),$("#section_8").show();break;case"conexionConvocatoriasBtn":$(".questions_section").hide(),$("#section_9").show()}}),$("#btn_agrega_colaborador").on("click",function(){$(this).hide()})});