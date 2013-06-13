$(document).ready(function(){


	//ACCIONES PARA HOWTO de árbol de problemas

		var nivelArbol = 0;
        var ar = new Array();
        ar.left = "-=250px";
        moveArrowBox("#arrow_box_diagramaCausas",ar,"slow");
        $("#arrow_box_diagramaCausas").hide();


	 $("#edit_diagram_diagramaCausas").on("click",function(){
	 		nivelArbol++;
        	tutorialArbolProblemas(nivelArbol);
 	   });

	 $("#btn_nxt_tuto_diagramaCausas").on("click",function(){
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
			
			alert("nivel 2");
		//señalar problema
		case 2:

		break;
		//señalar causas
		case 3:

		break;


	}





}