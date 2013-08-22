function cargarAccionesArbolProblemas(){

        // Funcion que guardará el estado del arbol problemas
    $("#arbolProblemas").on("change",function(){

        var arbolProblemas = $("#arbolProblemas");

        var objMapa = {};

        //guardar problema
        objMapa.problema    = arbolProblemas.find("#p1").val();

        // guardar causas
        objMapa.causas      = {};
        objMapa.causas.uno  = arbolProblemas.find("#c1").val();
        objMapa.causas.dos  = arbolProblemas.find("#c2").val();
        objMapa.causas.tres = arbolProblemas.find("#c3").val();

        //guardar efectos
        objMapa.efectos      = {};
        objMapa.efectos.uno  = arbolProblemas.find("#e1").val();
        objMapa.efectos.dos  = arbolProblemas.find("#e2").val();
        objMapa.efectos.tres = arbolProblemas.find("#e3").val();

        //guardar en campo de texto oculto
        $(".jsonArbolProblemas").val(JSON.stringify(objMapa));
    });


}


function cargarArbolProblemas(){
        
        if ( $(".jsonArbolProblemas").val() != "") {

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
      

}