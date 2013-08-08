function cargarAccionesTablaRecursos(){

        $("#btn_agregarRecurso").on("click",function(){
        var objResource = {};
        objResource.tipoRecurso = $("#sel_tipoMat_agregarRecurso").val();
        objResource.descripcion =$("#txt_desc_agregarRecurso").val();
        objResource.cantidad = $("#txt_cant_agregarRecurso").val();
        objResource.costo = $("#txt_cost_agregarRecurso").val();

        addElementToResourcesTable(objResource);

        });

}

function addElementToResourcesTable(objResource){
        var stringElemento = "<tr>";
        stringElemento += "<td>" + objResource.tipoRecurso +"</td>";
        stringElemento += "<td>"+ objResource.descripcion +"</td>";
        stringElemento += "<td>"+ objResource.cantidad +"</td>";
        stringElemento += "<td>"+ objResource.costo +"</td>";
        stringElemento += "<td class='txtResourcesSubTotal'>"+ objResource.costo * objResource.cantidad + "</td>";
        stringElemento += "</tr>";

      
        //eliminar total anterior
        $("#txtResourcesTotal").remove();

        //agregar nuevos elementos a tabla
        $("#tablaResourcesDef").append(stringElemento);

        var celdasDeTotales = $(".txtResourcesSubTotal");
        
        var sumTotal = 0;
        //sumar todas las celdas de subtotal
        celdasDeTotales.each(function(index,item){
              sumTotal += parseInt($(item).html());
        });

        //colocar caja de total con cada nuevo resource
        var stringTotal = "<tr id='txtResourcesTotal'><td colspan='4' style='border: inset 0pt; text-align: right; font-size: 20px; font-weight: bold; padding-right: 12px;'>Total:</td><td>"+ sumTotal+"</td></tr>";
        $("#tablaResourcesDef").append(stringTotal);

}


//Funciones para Tabla de Recursos  ------> 
function isInputCorrect(){
   var currentSelection = $("#sel_tipoMat_agregarRecurso").val();

    if(currentSelection == "0"){
        alert("Selecciona el tipo de Recurso (humano, material)");
        return false;
    }else{
      return true;
    }
}
