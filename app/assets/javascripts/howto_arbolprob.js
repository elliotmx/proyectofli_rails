$(document).ready(function(){


	//ACCIONES PARA HOWTO de árbol de problemas

		var nivelArbol = 0;
        var ar = new Array();
        ar.left = "-=250px";
        moveArrowBox("#arrow_box_diagramaCausas",ar,"slow");
        $("#arrow_box_diagramaCausas").hide();


	 $("#arrow_box_diagramaCausas").on("click",function(){
	 		nivelArbol++;
	 		tutorialArbolProblemas(nivelArbol);
	 });

	 $("#edit_diagram_diagramaCausas").on("click",function(){
	 		nivelArbol++;
        	tutorialArbolProblemas(nivelArbol);
 	   });


});


/*Funcion para Desplazar Objeto sobre el Canvas */
function moveArrowBox(idArrowBox, objDireccion, speed){
   
	$(idArrowBox).animate({"top": objDireccion.top,
	"bottom":objDireccion.bottom, "left": objDireccion.left, "right":
	objDireccion.right }, speed);

}



function tutorialArbolProblemas(nivel){



			
	switch(nivel){

		//Visión General del árbol
		case 1:
			$("#arrow_box_diagramaCausas").fadeIn();
			
			var objDir = new Array();
			objDir.top = "+=180px";
			objDir.left = "+=115px";

			moveArrowBox("#arrow_box_diagramaCausas", objDir,"slow");
		break;
		//señalar problema
			
		case 2:
			var objDir = new Array();
			objDir.top = "-=140px";
			objDir.left = "-=115px";
			$("#arrow_box_diagramaCausas").html("Éste es el problema que quieres resolver");
			moveArrowBox("#arrow_box_diagramaCausas", objDir,"slow");
		break;
		//señalar causas
		case 3:
			var objDir = new Array();
			objDir.top = "+=280px";
			objDir.left = "-=250px";
			$("#arrow_box_diagramaCausas").removeClass("arrow_box");
			$("#arrow_box_diagramaCausas").addClass("arrow_box_top");
			$("#arrow_box_diagramaCausas").html("Indica cuales son las causas de tal problema");
			moveArrowBox("#arrow_box_diagramaCausas", objDir,"slow");
			setTimeout(function(){
				$("#arrow_box_diagramaCausas").hide();
			 },3000);
		break;


	}





}