function cargarAccionesInicioPdfPreview(){

}

function cargarPdfPreview(){
	$(".btnguardar").hide();
	var txtInput;

	txtInput = $("#pdf_titulo").html();
	$("#pdf_preview_project_title").val(txtInput);

	txtInput = $(".txtProblema").val();
	$("#pdf_problematica").html(txtInput);
	$("#pdf_preview_problem").val(txtInput);

	/*
	txtInput = $("#pdf_justificacion").val(); --
	$("#pdf_justificación").val(txtInput);
	$("#pdf_preview_justification").val(txtInput);

	txtInput = $("#pdf_objetivo").val(); --
	$("#pdf_objetivo").val(txtInput);
	$("#pdf_preview_objective").val(txtInput);
	 */

	txtInput = $(".txtMercadoMeta").val();
	$("#pdf_pob_objetivo").html(txtInput);
	$("#pdf_preview_objective_population").val(txtInput);
		
		
	txtInput = $("#50").val();
	$("#pdf_propuesta p").html(txtInput);
		

		/*
	txtInput = $("#pdf_justificacion").val(); --
	$("#pdf_actividades").val(txtInput);
	$("#pdf_preview_activities").val(txtInput);
		
	txtInput = $("#pdf_justificacion").val(); --
	$("#pdf_implementacion").val(txtInput);
	$("#pdf_preview_implementation").val(txtInput);

	txtInput = $("#pdf_justificacion").val(); ---
	$("#pdf_cronograma").val(txtInput);
	$("#pdf_preview_cronogram").val(txtInput);

	*/

	txtInput = $(".jsonTablaRecursos").val();
	$("#pdf_presupuesto").html( $("#tablaResourcesDef").html() );
	$("#pdf_preview_budget").val(txtInput);

	txtInput = $(".jsonTablaComponentes").val();
	$("#pdf_riesgos_contingencia").html( $("#tablaComponentesDef").html());
	$("#pdf_preview_risks").val(txtInput);


}


