function cargarAccionesTablaComponentes(){

        $("#btn_agregarComponente").on("click",function(){
            if(validarCamposTablaComponentes()){
                var objComponentes = {};
                objComponentes.componentes     = $("#txt_desc_componentes").val();
                objComponentes.actividades     = $("#txt_actividades_componentes").val();
                objComponentes.riesgos         = $("#txt_riesgos_componentes").val();
                objComponentes.plncontingencia = $("#txt_contingencia_componentes").val();
                addElementToComponentsTable(objComponentes);
                limpiarCampos();
            }
        });

        $("#tablaComponentesDef").on("change",function(){
                guardarJsonTablaComponentes();
        });

        parsearJsonTablaComponetes();


}

function addElementToComponentsTable(objComponentes){
        var stringElemento = "<tr class='renglonTablaComponentes'>";
        stringElemento += "<td class='componente_ctbl'>" + objComponentes.componentes +"</td>";
        stringElemento += "<td class='actividades_ctbl'>"+ objComponentes.actividades +"</td>";
        stringElemento += "<td class='riesgos_ctbl'>"+ objComponentes.riesgos +"</td>";
        stringElemento += "<td class='plncontingencia_ctbl'>"+ objComponentes.plncontingencia +"</td>";
        stringElemento += "<td class='deleterow' onclick='eliminarRenglon(this)' style='cursor:pointer'><center> X </center></td>";
        stringElemento += "</tr>";

        //agregar nuevos elementos a tabla
        $("#tablaComponentesDef").append(stringElemento);

        guardarJsonTablaComponentes();

}


function guardarJsonTablaComponentes(){

    var renglones_tabla = $("#tablaComponentesDef").find(".renglonTablaComponentes");
    var jsonTabla = new Array();

    if(renglones_tabla.length > 0){

        $(renglones_tabla).each(function(index,item){

            var jsonElementosTabla               = {};
            jsonElementosTabla.componentes       = $(item).find(".componente_ctbl").html();
            jsonElementosTabla.actividades       = $(item).find(".actividades_ctbl").html();
            jsonElementosTabla.riesgos           = $(item).find(".riesgos_ctbl").html();
            jsonElementosTabla.plncontingencia   = $(item).find(".plncontingencia_ctbl").html();
            jsonTabla.push(jsonElementosTabla);

            $(".jsonTablaComponentes").val(JSON.stringify(jsonTabla));
        });

    }else{
            $(".jsonTablaComponentes").val("");
    }
    
}


function eliminarRenglon(x){
        $(x).parent().remove();
        guardarJsonTablaComponentes();
}


function limpiarCampos(){
    $("#txt_desc_componentes").val("");
    $("#txt_actividades_componentes").val("");
    $("#txt_riesgos_componentes").val("");
    $("#txt_contingencia_componentes").val("");
}


function validarCamposTablaComponentes(){
    var isInputCorrecto = true; 

    if($("#txt_desc_componentes").val() == ""){
        alert("Ups, el campo de Fortalezas está vacio");
        $("#txt_desc_componentes").focus();
        isInputCorrecto = false;
    }
    else if($("#txt_actividades_componentes").val() == ""){
        alert("Olvidaste llenar las Oportunidades");
        $("#txt_actividades_componentes").focus();
        isInputCorrecto = false;
    }
    else if($("#txt_riesgos_componentes").val() == ""){
        alert("Indica las Debilidades");
        $("#txt_riesgos_componentes").focus();
        isInputCorrecto = false;
    }
    else if($("#txt_contingencia_componentes").val() == ""){
        alert("Amenazas está vacio");
        $("#txt_contingencia_componentes").focus();
        isInputCorrecto = false;
    }

    return isInputCorrecto;
}


function parsearJsonTablaComponetes(){

        if($(".jsonTablaComponentes").val() != ""){
             var valorTabla = $(".jsonTablaComponentes").val();

           var jsonTabla = JSON.parse(valorTabla);
           //console.log(jsonTabla); 

           $.each(jsonTabla, function(index,item){

                addElementToComponentsTable(item);

           });
        }
           
}
