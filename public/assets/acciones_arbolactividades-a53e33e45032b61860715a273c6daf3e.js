function cargarAccionesArbolActividades(){$("#diagramaActividades").on("change",function(){var e=$("#diagramaActividades");objData={},objMapa.actividades={},objMapa.actividades.uno=e.find("#a1").val(),objMapa.actividades.dos=e.find("#a2").val(),objMapa.actividades.tres=e.find("#a3").val(),objMapa.tiempos={},objMapa.tiempos.uno=e.find("#t1").val(),objMapa.tiempos.dos=e.find("#t2").val(),objMapa.tiempos.tres=e.find("#t3").val(),$(".jsonDiagramaActividades").val(JSON.stringify(objMapa))})};