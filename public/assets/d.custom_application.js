function showUserEditForm(e){$("#btn_agrega_colaborador").hide(),$(".user_edit_forms").hide(),$("#edit_form_"+e).show()}function hideUserEditForm(){$("#formNewUser").hide(),$(".user_edit_forms").hide(),$("#btn_agrega_colaborador").show()}function isInputCorrect(){var e=$("#sel_tipoMat_agregarRecurso").val();return e=="0"?(alert("Selecciona el tipo de Recurso (humano, material)"),!1):!0}function addElementToResourcesTable(e){var t="<tr>";t+="<td>"+e.tipoRecurso+"</td>",t+="<td>"+e.descripcion+"</td>",t+="<td>"+e.cantidad+"</td>",t+="<td>"+e.costo+"</td>",t+="</tr>",$("#resourcesTable").append(t)}function refreshCuantityResourcesTable(){}$(document).ready(function(){$("#section_1").show(),$(".btnHowTo").hover(function(){$(this).children(".unoI").toggle("slow"),$(this).children(".uno").toggle("slow")}),$(".btnHowTo").on("click",function(e){$(".btnHowTo").removeClass("active"),$(this).addClass("active");switch(e.currentTarget.id){case"registroInvolcradosBtn":$(".questions_section").hide(),$("#section_1").show();break;case"conociendoMejorBtn":$(".questions_section").hide(),$("#section_2").show(),cargarArbolProblemas();break;case"primeroLoPrimeroBtn":$(".questions_section").hide(),$("#section_3").show();break;case"areaImpactoBtn":$(".questions_section").hide(),$("#section_4").show();break;case"manosObraBtn":$(".questions_section").hide(),$("#section_5").show(),cargarDiagramaActividades();break;case"riesgosBtn":$(".questions_section").hide(),$("#section_6").show();break;case"comentariosFinBtn":$(".questions_section").hide(),$("#section_7").show();break;case"redactarProyectoBtn":$(".questions_section").hide(),$("#section_8").show();break;case"conexionConvocatoriasBtn":$(".questions_section").hide(),$("#section_9").show()}}),$("#btn_agrega_colaborador").on("click",function(){$(this).hide()}),$("#btn_agregarRecurso").on("click",function(){var e={};e.tipoRecurso=$("#sel_tipoMat_agregarRecurso").val(),e.descripcion=$("#txt_desc_agregarRecurso").val(),e.cantidad=$("#txt_cant_agregarRecurso").val(),e.costo=$("#txt_cost_agregarRecurso").val(),addElementToResourcesTable(e)}),$("#arbolProblemas").on("change",function(){var e=$("#arbolProblemas"),t={};t.problema=e.find("#p1").val(),t.causas={},t.causas.uno=e.find("#c1").val(),t.causas.dos=e.find("#c2").val(),t.causas.tres=e.find("#c3").val(),t.efectos={},t.efectos.uno=e.find("#e1").val(),t.efectos.dos=e.find("#e2").val(),t.efectos.tres=e.find("#e3").val(),$(".jsonArbolProblemas").val(JSON.stringify(t))}),$("#diagramaActividades").on("change",function(){var e=$("#diagramaActividades");objData={},objMapa.actividades={},objMapa.actividades.uno=e.find("#a1").val(),objMapa.actividades.dos=e.find("#a2").val(),objMapa.actividades.tres=e.find("#a3").val(),objMapa.tiempos={},objMapa.tiempos.uno=e.find("#t1").val(),objMapa.tiempos.dos=e.find("#t2").val(),objMapa.tiempos.tres=e.find("#t3").val(),$(".jsonDiagramaActividades").val(JSON.stringify(objMapa))})});