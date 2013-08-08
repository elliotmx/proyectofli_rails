function cargarAccionesArbolActividades(){

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

}

