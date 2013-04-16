$(document).ready(function(){

$("#botonGraficas").click(function(){ 


    var options = new primitives.orgdiagram.Config(); 

    var rootItem = new primitives.orgdiagram.ItemConfig(); 
    rootItem.title = "Scott Aasrud"; 
    rootItem.description = $("#7").val(); 
    rootItem.image = null;

    var itemB = new primitives.orgdiagram.ItemConfig(); 
    itemB.title = "Ted Lucas"; 
    itemB.description = "VP, Human Resources"; 
    itemB.image = "http://www.basicprimitives.com/demo/images/photos/b.png"; 
    rootItem.items.push(itemB); 

    var itemC = new primitives.orgdiagram.ItemConfig(); 
    itemC.title = "Joao Stuger"; 
    itemC.description = "Business Solutions, US"; 
    itemC.image = "http://www.basicprimitives.com/demo/images/photos/c.png"; 
    rootItem.items.push(itemC); 

    var itemD = new primitives.orgdiagram.ItemConfig(); 
    itemD.title = "Lynne Rathinam"; 
    itemD.description = "GM, Enterprise Services"; 
    itemD.image = "http://www.basicprimitives.com/demo/images/photos/d.png"; 
    rootItem.items.push(itemD);   
  
    var buttons = []; 
    
    buttons.push(new primitives.orgdiagram.ButtonConfig("add", "ui-icon-person", "Add")); 
    buttons.push(new primitives.orgdiagram.ButtonConfig("delete", "ui-icon-close", "Delete")); 

    options.rootItem = rootItem; 
    options.cursorItem = rootItem; 
    options.buttons = buttons; 
    options.hasButtons = primitives.common.Enabled.Auto;   
    options.hasSelectorCheckbox = primitives.common.Enabled.False; 
    options.leavesPlacementType = primitives.orgdiagram.ChildrenPlacementType.Matrix; 

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
                jQuery("#diagramaCausas").orgDiagram("update", primitives.orgdiagram.UpdateMode.Refresh); 

            } 
            break; 
            
        case "add": 
            var itemZ = new primitives.orgdiagram.ItemConfig(); 
            itemZ .title = "Z Title"; 
            itemZ .description = "Z Description"; 
            itemZ .image = "http://www.basicprimitives.com/demo/images/photos/z.png"; 
            data.context.items.push(itemZ); 
            
            jQuery("#diagramaCausas").orgDiagram("update", primitives.orgdiagram.UpdateMode.Refresh); 
            break; 
    } 
}; 

jQuery("#diagramaCausas").orgDiagram(options);
}); 

});