function cargarAccionesTablaRecursos(){

        $("#btn_agregarRecurso").on("click",function(){
        var objResource = {};
        objResource.tipoRecurso = $("#sel_tipoMat_agregarRecurso").val();
        objResource.descripcion =$("#txt_desc_agregarRecurso").val();
        objResource.cantidad = $("#txt_cant_agregarRecurso").val();
        objResource.costo = $("#txt_cost_agregarRecurso").val();

        addElementToResourcesTable(objResource);

        });

        $("#tablaResourcesDef").on("change",function(){
                guardarJsonTablaRecursos();
        });

}

function addElementToResourcesTable(objResource){
        var stringElemento = "<tr class='renglonTablaRecursos'>";
        stringElemento += "<td class='tipoRecurso'>" + objResource.tipoRecurso +"</td>";
        stringElemento += "<td class='descripcion'>"+ objResource.descripcion +"</td>";
        stringElemento += "<td class='cantidad'>"+ objResource.cantidad +"</td>";
        stringElemento += "<td class='costo'>"+ objResource.costo +"</td>";
        stringElemento += "<td class='txtResourcesSubTotal'>"+ objResource.costo * objResource.cantidad + "</td>";
        stringElemento += "</tr>";

      
        //eliminar total anterior
        $("#txtResourcesTotal").remove();

        //agregar nuevos elementos a tabla
        $("#tablaResourcesDef").append(stringElemento);

        agregarColumnaTotal();
        guardarJsonTablaRecursos();

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


function guardarJsonTablaRecursos(){

    var renglones_tabla = $("#tablaResourcesDef").find(".renglonTablaRecursos");

    renglones_tabla.find(".tipoRecurso");

    var jsonTabla = new Array();
    var jsonElementosTabla = {};


    $(renglones_tabla).each(function(index,item){

            console.log( $(item).find(".tipoRecurso").html()) ;
            console.log( $(item).find(".descripcion").html() );
            console.log( $(item).find(".cantidad").html() );
            console.log( $(item).find(".costo").html() );
            console.log( $(item).find(".txtResourcesSubTotal").html() );
            console.log("-----------"); 


            jsonElementosTabla.tipoRecurso       = $(item).find(".tipoRecurso").html();
            jsonElementosTabla.descripcion       = $(item).find(".descripcion").html();
            jsonElementosTabla.cantidad          = $(item).find(".cantidad").html();
            jsonElementosTabla.costo             = $(item).find(".costo").html();
            jsonElementosTabla.resourcesSubTotal = $(item).find(".txtResourcesSubTotal").html(); 
            jsonTabla.push(jsonElementosTabla);

            $(".jsonTablaRecursos").val(JSON.stringify(jsonTabla));
            //console.log(JSON.stringify(jsonTabla));

    });

    

}

function agregarColumnaTotal(){

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
