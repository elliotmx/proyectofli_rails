$(document).ready(function(){

$(".btnDiagramas").click(function(e){ 


    var idElemento = $(e.currentTarget).attr("rel");

    //diagramaCausas
    //diagramaConsecuencias
    //diagramaObjetivos

    var options = new primitives.orgdiagram.Config(); 

    var rootItem = new primitives.orgdiagram.ItemConfig(); 
    rootItem.title = "Problema"; 
    rootItem.description = $("#7").val(); 
    rootItem.image = null;

    var itemB = new primitives.orgdiagram.ItemConfig(); 
    itemB.title = "Causa"; 
    itemB.description = "Da clic para modificarme"; 
    rootItem.items.push(itemB); 

    var itemC = new primitives.orgdiagram.ItemConfig(); 
    itemC.title = "Causa"; 
    itemC.description = "Da clic para modificarme"; 
    rootItem.items.push(itemC); 

    var itemD = new primitives.orgdiagram.ItemConfig(); 
    itemD.title = "Causa"; 
    itemD.description = "Da clic para modificarme"; 
    rootItem.items.push(itemD);   
  
    var buttons = []; 
    
    buttons.push(new primitives.orgdiagram.ButtonConfig("add", "ui-icon-person", "Add")); 
    buttons.push(new primitives.orgdiagram.ButtonConfig("delete", "ui-icon-close", "Delete"));
    buttons.push(new primitives.orgdiagram.ButtonConfig("properties", "ui-icon-gear", "Info"))

    options.rootItem = rootItem; 
    options.cursorItem = rootItem; 
    options.buttons = buttons; 
    options.hasButtons = primitives.common.Enabled.Auto;   
    options.hasSelectorCheckbox = primitives.common.Enabled.False; 
    options.leavesPlacementType = primitives.orgdiagram.ChildrenPlacementType.Matrix; 
    options.onMouseClick = function(e, data){}

    options.onButtonClick = function(e, data) 
    { 
        switch(data.name) 
    { 
        case "delete": 
            if( data.parentItem == null ) 
            {   
                alert("Vas a borrar todo tu arbol!"); 
            } 
            else 
            { 
                var position = primitives.common.indexOf(data.parentItem.items, data.context); 
                data.parentItem.items.splice(position, 1); 
                $("#"+idElemento).orgDiagram("update", primitives.orgdiagram.UpdateMode.Refresh); 

            } 
            break; 
            
            case "add": 
                var itemZ = new primitives.orgdiagram.ItemConfig(); 
                itemZ .title = "Causa"; 
                var newInput = prompt("¿Qué crees que es la causa de :?");
                if(newInput!= null && newInput!=""){
                    itemZ .description = newInput;
                    data.context.items.push(itemZ);
                    $("#"+idElemento).orgDiagram("update", primitives.orgdiagram.UpdateMode.Refresh);      
                }

                
            break; 

            case "properties": 
                    var input=prompt("Modifica el Texto");
                    if (input!=null && input!="")
                            {data.context.description = input;}
                    $("#"+idElemento).orgDiagram("update", primitives.orgdiagram.UpdateMode.Refresh); 
            break; 
    } 
}; 

jQuery("#"+idElemento).orgDiagram(options);


}); 

});