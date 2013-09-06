function mostrarLineaAccion(){
	if( $("#la1").hasClass("lineaAccionSelect")){
	    $("#laaccion1").show();
	    $("#labella1").html($("#la1").val());
	}
	if($("#la2").hasClass("lineaAccionSelect")){
	    $("#laaccion2").show();
	    $("#labella2").html($("#la2").val());
	}
	if($("#la3").hasClass("lineaAccionSelect")){
	    $("#laaccion3").show();
	    $("#labella3").html($("#la3").val());
	}
}