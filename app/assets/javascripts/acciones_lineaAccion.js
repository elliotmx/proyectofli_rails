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


	$(".obj_input").on("change",function(){
		//$(this).attr("id");
		//var elemento = $(this).find();
		var idElemento = $(this).attr("id");
		var jsonObj = {};

		if(idElemento == "act1" || idElemento == "tiem1"){
			jsonObj.act = $("#act1").val();
			jsonObj.tiem = $("#tiem1").val();

			$(".jsonObjetivos1").val(JSON.stringify(jsonObj));
		}else if(idElemento == "act2" || idElemento == "tiem2"){
			jsonObj.act = $("#act2").val();
			jsonObj.tiem = $("#tiem2").val();

			$(".jsonObjetivos2").val(JSON.stringify(jsonObj));

		}else if(idElemento =="act3" || idElemento == "tiem3"){
			jsonObj.act = $("#act3").val();
			jsonObj.tiem = $("#tiem3").val();

			$(".jsonObjetivos3").val(JSON.stringify(jsonObj));
		}


	});


}


function cargarObjetivosJson(){

		var jsOb1 = $(".jsonObjetivos1").val();
		var jsOb2 = $(".jsonObjetivos2").val();
		var jsOb3 = $(".jsonObjetivos3").val();

		if(jsOb1 != ""){
			 var parsedJson = JSON.parse(jsOb1);
			 
			  $("#act1").val(parsedJson.act.toString());
			  $("#tiem1").val(parsedJson.tiem.toString());
		}


		if(jsOb2 != ""){
			
			 var parsedJson = JSON.parse(jsOb2);
			  $("#act2").val(parsedJson.act.toString());
			  $("#tiem2").val(parsedJson.tiem.toString());
		}


		if(jsOb3 != ""){
			
			 var parsedJson = JSON.parse(jsOb3);
			  $("#act3").val(parsedJson.act.toString());
			  $("#tiem3").val(parsedJson.tiem.toString());
		}

}