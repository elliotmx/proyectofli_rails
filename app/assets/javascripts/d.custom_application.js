$(document).ready(function(){

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
            cargarDiagrama("diagramaConsecuencias");
            cargarDiagrama("diagramaCausas"); // mostrar los arboles de problema
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

    $("#edit_diagram_diagramaCausas").on("click",function(){
        //alert("clic a esta madre .arrow_box_diagramaCausas ");
        //$("#arrow_box_diagramaCausas").addClass("move_in");
        $("#arrow_box_diagramaCausas").animate({"left": "-=140px"}, "slow");

        setTimeout(moveArrowBow("#arrow_box_diagramaCausas"),3000);

    });




});


function moveArrowBow(idArrowBox){
    //$("#arrow_box_diagramaCausas").fadeOut("slow");
    $(idArrowBox).animate({"top": "+=180px", "left": "+=115px"}, "slow");

   // $(idArrowBox).fadeOut("slow");
}

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