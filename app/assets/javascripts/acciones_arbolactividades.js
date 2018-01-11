function cargarAccionesArbolAcciones(){

	cargarAccionesParaSeleccionLineasAccion();

	$("#arbolAcciones").on("change",function(){

        var arbolAcciones = $("#arbolAcciones");

        var objMapa = {};
        //guardar problema
        objMapa.problema    = arbolAcciones.find("#op1").val();

        // guardar causas
        objMapa.impacto      = {};
        objMapa.impacto.uno  = arbolAcciones.find("#i1").val();
        objMapa.impacto.dos  = arbolAcciones.find("#i2").val();
        objMapa.impacto.tres = arbolAcciones.find("#i3").val();

        //guardar efectos
        objMapa.lineaAccion      = {};
        objMapa.lineaAccion.uno  = arbolAcciones.find("#la1").val();
        objMapa.lineaAccion.dos  = arbolAcciones.find("#la2").val();
        objMapa.lineaAccion.tres = arbolAcciones.find("#la3").val();

        objMapa.lineaAccion.uno_select  = $("#la1").hasClass("lineaAccionSelect");
        objMapa.lineaAccion.dos_select  = $("#la2").hasClass("lineaAccionSelect");
        objMapa.lineaAccion.tres_select = $("#la3").hasClass("lineaAccionSelect");
        //guardar en campo de texto oculto
        $(".jsonArbolAcciones").val( JSON.stringify(objMapa) );
    });

}

function cargarArbolAcciones(){
        
        if ( $(".jsonArbolAcciones").val() != "") {

             var jsonArbol = JSON.parse( $(".jsonArbolAcciones").val());

            var arbolProblemas = $("#arbolAcciones");

            //setear problema
            arbolProblemas.find("#op1").val(jsonArbol.problema.toString());

            // setear causas
            arbolProblemas.find("#i1").val(jsonArbol.impacto.uno.toString());
            arbolProblemas.find("#i2").val(jsonArbol.impacto.dos.toString());
            arbolProblemas.find("#i3").val(jsonArbol.impacto.tres.toString());

            //setear efectos
            arbolProblemas.find("#la1").val(jsonArbol.lineaAccion.uno.toString());
            arbolProblemas.find("#la2").val(jsonArbol.lineaAccion.dos.toString());
            arbolProblemas.find("#la3").val(jsonArbol.lineaAccion.tres.toString());

            if(jsonArbol.lineaAccion.uno_select){
            		arbolProblemas.find("#la1").addClass("lineaAccionSelect");
            }if(jsonArbol.lineaAccion.dos_select){
            		arbolProblemas.find("#la2").addClass("lineaAccionSelect");
            }if(jsonArbol.lineaAccion.tres_select){
            		arbolProblemas.find("#la3").addClass("lineaAccionSelect");
            }
        
        }
}


if( $("#la1").hasClass("lineaAccionSelect")){
    $("#txtActividades1").show();
    $("#txtActividades1Desc").val($(this).val());
}


function cargarAccionesParaSeleccionLineasAccion(){

	$(".lineaAccion").on('click',function(){
		var txtValue  = $(this).val();
		if(txtValue != ""){
			$(this).toggleClass('lineaAccionSelect').promise().done(function(event){
				if($(this).hasClass("lineaAccionSelect")){ 
					alert($(this).val() + " seleccionado" );
					$("#arbolAcciones").change();
				}
			});
		}
	});

}