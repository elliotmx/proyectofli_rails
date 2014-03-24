function cargarAccionesTablaRecursos(){$("#btn_agregarRecurso").on("click",function(){if(validarCamposTablaRecursos()){var e={};e.tipoRecurso=$("#sel_tipoMat_agregarRecurso").val(),e.descripcion=$("#txt_desc_agregarRecurso").val(),e.cantidad=$("#txt_cant_agregarRecurso").val(),e.costo=$("#txt_cost_agregarRecurso").val(),addElementToResourcesTable(e),limpiarCamposTablaRecursos()}}),$("#tablaResourcesDef").on("change",function(){guardarJsonTablaRecursos()}),parsearJsonTablaRecursos()}function addElementToResourcesTable(e){var t="<tr class='renglonTablaRecursos'>";t+="<td class='tipoRecurso'>"+e.tipoRecurso+"</td>",t+="<td class='descripcion'>"+e.descripcion+"</td>",t+="<td class='cantidad'>"+e.cantidad+"</td>",t+="<td class='costo'>"+e.costo+"</td>",t+="<td class='txtResourcesSubTotal'>"+e.costo*e.cantidad+"</td>",t+="<td class='deleterow' onclick='eliminarRenglonTablaRecursos(this)' style='cursor:pointer'><center> X </center></td>",t+="</tr>",$("#txtResourcesTotal").remove(),$("#tablaResourcesDef").append(t),calcularTotal(),guardarJsonTablaRecursos()}function guardarJsonTablaRecursos(){var e=$("#tablaResourcesDef").find(".renglonTablaRecursos"),t=new Array;e.length>0?$(e).each(function(e,n){var r={};r.tipoRecurso=$(n).find(".tipoRecurso").html(),r.descripcion=$(n).find(".descripcion").html(),r.cantidad=$(n).find(".cantidad").html(),r.costo=$(n).find(".costo").html(),r.resourcesSubTotal=$(n).find(".txtResourcesSubTotal").html(),t.push(r),$(".jsonTablaRecursos").val(JSON.stringify(t))}):$(".jsonTablaRecursos").val("")}function calcularTotal(){var e=$(".txtResourcesSubTotal"),t=0;e.length>0?e.each(function(e,n){t+=parseFloat($(n).html())}):t=0;var n="<tr id='txtResourcesTotal'><td colspan='4' style='border: inset 0pt; text-align: right; font-size: 20px; font-weight: bold; padding-right: 12px;'>Total:</td><td>"+t+"</td></tr>";$("#tablaResourcesDef").append(n)}function eliminarRenglonTablaRecursos(e){$(e).parent().remove(),$("#txtResourcesTotal").remove(),calcularTotal(),guardarJsonTablaRecursos()}function limpiarCamposTablaRecursos(){$("#sel_tipoMat_agregarRecurso").val(0),$("#txt_desc_agregarRecurso").val(""),$("#txt_cant_agregarRecurso").val(""),$("#txt_cost_agregarRecurso").val("")}function validarCamposTablaRecursos(){var e=!0;return $("#sel_tipoMat_agregarRecurso").val()==0?(alert("Ups, olvidaste el tipo de recurso"),$("#sel_tipoMat_agregarRecurso").focus(),e=!1):$("#txt_desc_agregarRecurso").val()==""?(alert("La descripción está vacia"),$("#txt_desc_agregarRecurso").focus(),e=!1):$("#txt_cant_agregarRecurso").val()==""?(alert("Agrega una cantidad"),$("#txt_cant_agregarRecurso").focus(),e=!1):$("#txt_cost_agregarRecurso").val()==""&&(alert("Agrega un costo"),$("#txt_cost_agregarRecurso").focus(),e=!1),e}function parsearJsonTablaRecursos(){if($(".jsonTablaRecursos").val()!=""){var e=$(".jsonTablaRecursos").val(),t=JSON.parse(e);$.each(t,function(e,t){addElementToResourcesTable(t)})}};