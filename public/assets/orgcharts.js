$(document).ready(function(){$(".btnDiagramas").click(function(e){var t=$(e.currentTarget).attr("rel"),n,r;t=="diagramaCausas"?(n="Causa",r=primitives.common.Colors.Red):t=="diagramaConsecuencias"?(n="Efecto",r=primitives.common.Colors.Red):t=="diagramaObjetivos"&&(n="Objetivo",r=primitives.common.Colors.Blue);var i=new primitives.orgdiagram.Config,s=new primitives.orgdiagram.ItemConfig;s.title="Problema",s.description=$("#7").val(),s.image=null;var o=new primitives.orgdiagram.ItemConfig;o.title=n,o.description="Da clic para modificarme",s.items.push(o);var u=new primitives.orgdiagram.ItemConfig;u.title=n,u.description="Da clic para modificarme",s.items.push(u);var a=new primitives.orgdiagram.ItemConfig;a.title=n,a.description="Da clic para modificarme",s.items.push(a);var f=[];f.push(new primitives.orgdiagram.ButtonConfig("add","ui-icon-person","Add")),f.push(new primitives.orgdiagram.ButtonConfig("delete","ui-icon-close","Delete")),f.push(new primitives.orgdiagram.ButtonConfig("properties","ui-icon-gear","Info")),i.rootItem=s,i.cursorItem=s,i.buttons=f,i.itemTitleColor=r,i.hasButtons=primitives.common.Enabled.Auto,i.hasSelectorCheckbox=primitives.common.Enabled.False,i.leavesPlacementType=primitives.orgdiagram.ChildrenPlacementType.Matrix,i.onMouseClick=function(e,t){},i.onButtonClick=function(e,r){switch(r.name){case"delete":if(r.parentItem==null)alert("Vas a borrar todo tu arbol!");else{var i=primitives.common.indexOf(r.parentItem.items,r.context);r.parentItem.items.splice(i,1),$("#"+t).orgDiagram("update",primitives.orgdiagram.UpdateMode.Refresh)}break;case"add":var s=new primitives.orgdiagram.ItemConfig;s.title=n;var o=prompt("¿Qué crees que es la causa de :?");o!=null&&o!=""&&(s.description=o,r.context.items.push(s),$("#"+t).orgDiagram("update",primitives.orgdiagram.UpdateMode.Refresh));break;case"properties":var u=prompt("Modifica el Texto");u!=null&&u!=""&&(r.context.description=u),$("#"+t).orgDiagram("update",primitives.orgdiagram.UpdateMode.Refresh)}},jQuery("#"+t).orgDiagram(i)})});