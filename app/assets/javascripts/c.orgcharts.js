var selectedItemsArray = [];
$(document).ready(function(){
$("#btnGuardar_diagramaCausas").on("click",function(){ 


    console.log(selectedItemsArray);


    for(var index=0;index <selectedItemsArray.length;index++){
        console.log("pos "+index+": " + selectedItemsArray[index].description);
    }

    //for()
    //var selectedItem = $("#diagramaCausas").orgDiagram("option", "selectedItems");
    //console.log("root  " + selectedItem.title);
    // var childrens = $("#diagramaCausas").orgDiagram("option", "selectedItems");
    // //var selectedItems = data.context.items;
    // var message;
    // //alert(selectedItems);
    
    // console.log("items" + childrens.length);
    
    // for(var index = 0; index< childrens.length; index++)
    // {
    //   var itemConfig = childrens[index];
      
    //   if( message != "" )
    //     {
    //        message += ", ";
    //     }
    //     message += "<b>'" + itemConfig.title + "'</b>";
    //     console.log(itemConfig.title);
    // }

    //$("#8").empty().append("User selected next items: " + message);
});

});


function cargarDiagrama(_idElemento){
//$(".btnDiagramas").click(function(e){ 


    //var idElemento = $(e.currentTarget).attr("rel");
    var idElemento = _idElemento;
    var titleItem;
    var colorItem;

    //itemB.itemTitleColor = primitives.common.Colors.Green;
    //diagramaCausas
    if (idElemento == "diagramaCausas"){
        titleItem ="Causa";
        colorItem = primitives.common.Colors.Red;
    }else if(idElemento =="diagramaConsecuencias"){
        titleItem ="Efecto";
        colorItem = primitives.common.Colors.Red;
    }else if(idElemento == "diagramaObjetivos"){
        titleItem ="Objetivo";
        colorItem = primitives.common.Colors.Blue;
    }

    //diagramaConsecuencias
    //diagramaObjetivos

    var options = new primitives.orgdiagram.Config(); 

    var rootItem = new primitives.orgdiagram.ItemConfig(); 
    rootItem.title = "Problema"; 
    rootItem.description = $("#7").val(); 
    rootItem.image = null;
    rootItem.isSelected = true;
    //selectedItemsArray.push(rootItem);
    //rootItem.itemTitleColor = colorItem;

    var itemB = new primitives.orgdiagram.ItemConfig(); 
    itemB.title = titleItem;
    itemB.description = "Da clic para modificarme"; 
    //itemB.itemTitleColor = colorItem;
    //selectedItemsArray.push(itemB);
    rootItem.items.push(itemB); 

    var itemC = new primitives.orgdiagram.ItemConfig(); 
    itemC.title = titleItem; 
    itemC.description = "Da clic para modificarme"; 
    //itemC.itemTitleColor = colorItem;
    //selectedItemsArray.push(itemC);
    rootItem.items.push(itemC); 

    var itemD = new primitives.orgdiagram.ItemConfig(); 
    itemD.title = titleItem;
    itemD.description = "Da clic para modificarme";
    //itemD.itemTitleColor = colorItem;
    //selectedItemsArray.push(itemD);
    rootItem.items.push(itemD);   
  
    var buttons = []; 
    
    buttons.push(new primitives.orgdiagram.ButtonConfig("add", "ui-icon-person", "Add")); 
    buttons.push(new primitives.orgdiagram.ButtonConfig("delete", "ui-icon-close", "Delete"));
    buttons.push(new primitives.orgdiagram.ButtonConfig("properties", "ui-icon-gear", "Info"))

    options.rootItem = rootItem;
    options.isSelected = true; 
    options.cursorItem = rootItem; 
    options.buttons = buttons; 
    options.itemTitleColor = colorItem;
    options.hasButtons = primitives.common.Enabled.Auto;   
    options.hasSelectorCheckbox = primitives.common.Enabled.False; 
    options.leavesPlacementType = primitives.orgdiagram.ChildrenPlacementType.Matrix; 
    options.orientation = primitives.common.HorizontalAlignmentType.Center;

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
                itemZ.title = titleItem;
                var newInput = prompt("¿Qué crees que es la causa de :?");
                if(newInput!= null && newInput!=""){
                    itemZ .description = newInput;
                    //selectedItemsArray.push(itemZ);
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


        console.log("data 2" + data.context);
}; 

//$("#"+idElemento).orgDiagram({selectedItems:selectedItemsArray});
//options.selectedItems = selectedItemsArray;
jQuery("#"+idElemento).orgDiagram(options);


} 

