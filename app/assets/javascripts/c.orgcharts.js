
function cargarArbolProblemas(){


    var jsonArbol = JSON.parse( $(".jsonArbolProblemas").val());

    var arbolProblemas = $("#arbolProblemas");


    //setear problema
    arbolProblemas.find("#p1").val(jsonArbol.problema.toString());

    // setear causas
    arbolProblemas.find("#c1").val(jsonArbol.causas.uno.toString());
    arbolProblemas.find("#c2").val(jsonArbol.causas.dos.toString());
    arbolProblemas.find("#c3").val(jsonArbol.causas.tres.toString());

    //setear efectos
    arbolProblemas.find("#e1").val(jsonArbol.efectos.uno.toString());
    arbolProblemas.find("#e2").val(jsonArbol.efectos.dos.toString());
    arbolProblemas.find("#e3").val(jsonArbol.efectos.tres.toString());

}


function cargarDiagramaActividades(){

    var diagramaActividades = $("#diagramaActividades");
    var arbolProblemas = $("#arbolProblemas");

    diagramaActividades.find("#cAct1").val(arbolProblemas.find("#c1").val());
    diagramaActividades.find("#cAct2").val(arbolProblemas.find("#c2").val());
    diagramaActividades.find("#cAct3").val(arbolProblemas.find("#c3").val());

}