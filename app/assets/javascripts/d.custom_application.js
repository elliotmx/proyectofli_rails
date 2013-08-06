$(document).ready(function(){

  $('input.tags').tags();
   
	$("#section_1").show();

  $(".btnHowTo").hover(function(){
  	$(this).children('.unoI').toggle('slow');
  	$(this).children('.uno').toggle('slow');
  });


  $(".btnHowTo").on("click", function(e){
  			//console.log(e);
  			$(".btnHowTo").removeClass("active");
  			$(this).addClass("active");

  			switch (e.currentTarget.id){
  				case 'registroInvolcradosBtn':
					$(".questions_section").hide();
  					$("#section_1").show();
  					break;
  				case 'conociendoMejorBtn':
  					$(".questions_section").hide();
  					$("#section_2").show();
            cargarArbolProblemas();
  					break;
  				case 'primeroLoPrimeroBtn':
  					$(".questions_section").hide();
  					$("#section_3").show();
  					break;
  				case 'areaImpactoBtn':
  					$(".questions_section").hide();
  					$("#section_4").show();
  					break;
  				case 'manosObraBtn':
  					$(".questions_section").hide();
  					$("#section_5").show();
            cargarDiagramaActividades();
  					break;
  				case 'riesgosBtn':
  					$(".questions_section").hide();
  					$("#section_6").show();
  					break;
  				case 'comentariosFinBtn':
  					$(".questions_section").hide();
  					$("#section_7").show();
  					break;
  				case 'redactarProyectoBtn':
  					$(".questions_section").hide();
  					$("#section_8").show();
  					break;
  				case 'conexionConvocatoriasBtn':
  					$(".questions_section").hide();
  					$("#section_9").show();
  					break;
  					}
  	});

$("#btn_agrega_colaborador").on("click",function(){
    $(this).hide();
});



$("#btn_agregarRecurso").on("click",function(){

    var objResource = {};
    objResource.tipoRecurso = $("#sel_tipoMat_agregarRecurso").val();
    objResource.descripcion =$("#txt_desc_agregarRecurso").val();
    objResource.cantidad = $("#txt_cant_agregarRecurso").val();
    objResource.costo = $("#txt_cost_agregarRecurso").val();

    addElementToResourcesTable(objResource);

});


// Funcion que guardará el estado del arbol problemas
$("#arbolProblemas").on("change",function(){


    var arbolProblemas = $("#arbolProblemas");

    var objMapa = {};

    //guardar problema
    objMapa.problema = arbolProblemas.find("#p1").val();

    // guardar causas
    objMapa.causas      = {};
    objMapa.causas.uno  = arbolProblemas.find("#c1").val();
    objMapa.causas.dos  = arbolProblemas.find("#c2").val();
    objMapa.causas.tres = arbolProblemas.find("#c3").val();

    //guardar efectos
    objMapa.efectos      = {};
    objMapa.efectos.uno  = arbolProblemas.find("#e1").val();
    objMapa.efectos.dos  = arbolProblemas.find("#e2").val();
    objMapa.efectos.tres = arbolProblemas.find("#e3").val();

    //guardar en campo de texto oculto
    $(".jsonArbolProblemas").val(JSON.stringify(objMapa));


});


// Funcion que guardará el estado del diagrama de actividades y tiempos

$("#diagramaActividades").on("change",function(){

    var diagramaActividades = $("#diagramaActividades");

    objData = {};

    objMapa.actividades      = {};
    objMapa.actividades.uno  = diagramaActividades.find("#a1").val();
    objMapa.actividades.dos  = diagramaActividades.find("#a2").val();
    objMapa.actividades.tres = diagramaActividades.find("#a3").val();

    //guardar efectos
    objMapa.tiempos      = {};
    objMapa.tiempos.uno  = diagramaActividades.find("#t1").val();
    objMapa.tiempos.dos  = diagramaActividades.find("#t2").val();
    objMapa.tiempos.tres = diagramaActividades.find("#t3").val();

    $(".jsonDiagramaActividades").val(JSON.stringify(objMapa));

});





});

function showUserEditForm(userId){
    $("#btn_agrega_colaborador").hide();
    $(".user_edit_forms").hide();
    $('#edit_form_'+userId).show();
}

function hideUserEditForm(){
    $("#formNewUser").hide();
    $(".user_edit_forms").hide();
    $("#btn_agrega_colaborador").show();
}


//Funciones para Tabla de Recursos  ------> 
function isInputCorrect(){
   var currentSelection = $("#sel_tipoMat_agregarRecurso").val();

    if(currentSelection == "0"){
        alert("Selecciona el tipo de Recurso (humano, material)");
        return false;
    }else{
      return true;
    }
}

function addElementToResourcesTable(objResource){
    var stringElemento = "<tr>";
    stringElemento += "<td>" + objResource.tipoRecurso +"</td>";
    stringElemento += "<td>"+ objResource.descripcion +"</td>";
    stringElemento += "<td>"+ objResource.cantidad +"</td>";
    stringElemento += "<td>"+ objResource.costo +"</td>";
    stringElemento += "</tr>";

    $("#resourcesTable").append(stringElemento);

}

function refreshCuantityResourcesTable(){

}
// registroInvolcradosBtn
// conociendoMejorBtn
// primeroLoPrimeroBtn
// areaImpactoBtn
// manosObraBtn
// riesgosBtn
// comentariosFinBtn
// redactarProyectoBtn
// conexionConvocatoriasBtn