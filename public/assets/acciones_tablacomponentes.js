function cargarAccionesTablaComponentes(){$("#btn_agregarComponente").on("click",function(){if(validarCamposTablaComponentes()){var e={};e.componentes=$("#txt_desc_componentes").val(),e.actividades=$("#txt_actividades_componentes").val(),e.riesgos=$("#txt_riesgos_componentes").val(),e.plncontingencia=$("#txt_contingencia_componentes").val(),addElementToComponentsTable(e),limpiarCampos()}}),$("#tablaComponentesDef").on("change",function(){guardarJsonTablaComponentes()}),parsearJsonTablaComponetes()}function addElementToComponentsTable(e){var t="<tr class='renglonTablaComponentes'>";t+="<td class='componente_ctbl'>"+e.componentes+"</td>",t+="<td class='actividades_ctbl'>"+e.actividades+"</td>",t+="<td class='riesgos_ctbl'>"+e.riesgos+"</td>",t+="<td class='plncontingencia_ctbl'>"+e.plncontingencia+"</td>",t+="<td class='deleterow' onclick='eliminarRenglon(this)' style='cursor:pointer'><center> X </center></td>",t+="</tr>",$("#tablaComponentesDef").append(t),guardarJsonTablaComponentes()}function guardarJsonTablaComponentes(){var e=$("#tablaComponentesDef").find(".renglonTablaComponentes"),t=new Array;e.length>0?$(e).each(function(e,n){var r={};r.componentes=$(n).find(".componente_ctbl").html(),r.actividades=$(n).find(".actividades_ctbl").html(),r.riesgos=$(n).find(".riesgos_ctbl").html(),r.plncontingencia=$(n).find(".plncontingencia_ctbl").html(),t.push(r),$(".jsonTablaComponentes").val(JSON.stringify(t))}):$(".jsonTablaComponentes").val("")}function eliminarRenglon(e){$(e).parent().remove(),guardarJsonTablaComponentes()}function limpiarCampos(){$("#txt_desc_componentes").val(""),$("#txt_actividades_componentes").val(""),$("#txt_riesgos_componentes").val(""),$("#txt_contingencia_componentes").val("")}function validarCamposTablaComponentes(){var e=!0;return $("#txt_desc_componentes").val()==""?(alert("Ups, el campo de Fortalezas está vacio"),$("#txt_desc_componentes").focus(),e=!1):$("#txt_actividades_componentes").val()==""?(alert("Olvidaste llenar las Oportunidades"),$("#txt_actividades_componentes").focus(),e=!1):$("#txt_riesgos_componentes").val()==""?(alert("Indica las Debilidades"),$("#txt_riesgos_componentes").focus(),e=!1):$("#txt_contingencia_componentes").val()==""&&(alert("Amenazas está vacio"),$("#txt_contingencia_componentes").focus(),e=!1),e}function parsearJsonTablaComponetes(){if($(".jsonTablaComponentes").val()!=""){var e=$(".jsonTablaComponentes").val(),t=JSON.parse(e);$.each(t,function(e,t){addElementToComponentsTable(t)})}};