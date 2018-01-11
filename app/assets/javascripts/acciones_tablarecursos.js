function cargarAccionesTablaRecursos(){

        $("#btn_agregarRecurso").on("click",function(){
            if(validarCamposTablaRecursos()){
                var objResource = {};
                objResource.tipoRecurso = $("#sel_tipoMat_agregarRecurso").val();
                objResource.descripcion =$("#txt_desc_agregarRecurso").val();
                objResource.cantidad = $("#txt_cant_agregarRecurso").val();
                objResource.costo = $("#txt_cost_agregarRecurso").val();
                addElementToResourcesTable(objResource);
                limpiarCamposTablaRecursos();
            }
        });

        $("#tablaResourcesDef").on("change",function(){
                guardarJsonTablaRecursos();
        });

        parsearJsonTablaRecursos();
}

function addElementToResourcesTable(objResource){
        var stringElemento = "<tr class='renglonTablaRecursos'>";
        stringElemento += "<td class='tipoRecurso'>" + objResource.tipoRecurso +"</td>";
        stringElemento += "<td class='descripcion'>"+ objResource.descripcion +"</td>";
        stringElemento += "<td class='cantidad'>"+ objResource.cantidad +"</td>";
        stringElemento += "<td class='costo'>"+ objResource.costo +"</td>";
        stringElemento += "<td class='txtResourcesSubTotal'>"+ objResource.costo * objResource.cantidad + "</td>";
        stringElemento += "<td class='deleterow' onclick='eliminarRenglonTablaRecursos(this)' style='cursor:pointer'><center> X </center></td>";
        stringElemento += "</tr>";

        //eliminar total anterior
        $("#txtResourcesTotal").remove();

        //agregar nuevos elementos a tabla
        $("#tablaResourcesDef").append(stringElemento);

        calcularTotal();
        guardarJsonTablaRecursos();

}

function guardarJsonTablaRecursos(){

    var renglones_tabla = $("#tablaResourcesDef").find(".renglonTablaRecursos");
    var jsonTabla = new Array();

    if(renglones_tabla.length > 0){

        $(renglones_tabla).each(function(index,item){

                var jsonElementosTabla               = {};
                jsonElementosTabla.tipoRecurso       = $(item).find(".tipoRecurso").html();
                jsonElementosTabla.descripcion       = $(item).find(".descripcion").html();
                jsonElementosTabla.cantidad          = $(item).find(".cantidad").html();
                jsonElementosTabla.costo             = $(item).find(".costo").html();
                jsonElementosTabla.resourcesSubTotal = $(item).find(".txtResourcesSubTotal").html(); 
                jsonTabla.push(jsonElementosTabla);

                $(".jsonTablaRecursos").val(JSON.stringify(jsonTabla));
        });

        }else{
                $(".jsonTablaRecursos").val("");
        }

}

function calcularTotal(){

        var celdasDeTotales = $(".txtResourcesSubTotal");
        var sumTotal = 0;
        //sumar todas las celdas de subtotal
        if(celdasDeTotales.length > 0){
            celdasDeTotales.each(function(index,item){
                  sumTotal += parseFloat($(item).html());
            });
        }else{
            sumTotal = 0;
        }
        //colocar caja de total con cada nuevo resource
        var stringTotal = "<tr id='txtResourcesTotal'><td colspan='4' style='border: inset 0pt; text-align: right; font-size: 20px; font-weight: bold; padding-right: 12px;'>Total:</td><td>"+ sumTotal+"</td></tr>";
        $("#tablaResourcesDef").append(stringTotal);

}

function eliminarRenglonTablaRecursos(x){
        $(x).parent().remove();
        $("#txtResourcesTotal").remove();
        calcularTotal();
        guardarJsonTablaRecursos();
}


function limpiarCamposTablaRecursos(){
    $("#sel_tipoMat_agregarRecurso").val(0);
    $("#txt_desc_agregarRecurso").val("");
    $("#txt_cant_agregarRecurso").val("");
    $("#txt_cost_agregarRecurso").val("");
}


function validarCamposTablaRecursos(){
    var isInputCorrecto = true; 

    if($("#sel_tipoMat_agregarRecurso").val() == 0){
        alert("Ups, olvidaste el tipo de recurso");
        $("#sel_tipoMat_agregarRecurso").focus();
        isInputCorrecto = false;
    }
    else if($("#txt_desc_agregarRecurso").val() == ""){
        alert("La descripción está vacia");
        $("#txt_desc_agregarRecurso").focus();
        isInputCorrecto = false;
    }
    else if($("#txt_cant_agregarRecurso").val() == ""){
        alert("Agrega una cantidad");
        $("#txt_cant_agregarRecurso").focus();
        isInputCorrecto = false;
    }
    else if($("#txt_cost_agregarRecurso").val() == ""){
        alert("Agrega un costo");
        $("#txt_cost_agregarRecurso").focus();
        isInputCorrecto = false;
    }

    return isInputCorrecto;
}


function parsearJsonTablaRecursos(){

    if($(".jsonTablaRecursos").val() != ""){
        var valorTabla = $(".jsonTablaRecursos").val();

           var jsonTabla = JSON.parse(valorTabla);
           //console.log(jsonTabla); 

           $.each(jsonTabla, function(index,item){

                addElementToResourcesTable(item);

           });
    }
    
}
