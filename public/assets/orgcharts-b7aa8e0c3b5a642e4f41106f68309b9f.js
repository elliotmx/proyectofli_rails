$(document).ready(function(){$("#botonGraficas").click(function(){var e=new primitives.orgdiagram.Config,t=new primitives.orgdiagram.ItemConfig;t.title="Scott Aasrud",t.description=$("#7").val(),t.image=null;var n=new primitives.orgdiagram.ItemConfig;n.title="Ted Lucas",n.description="VP, Human Resources",n.image="http://www.basicprimitives.com/demo/images/photos/b.png",t.items.push(n);var r=new primitives.orgdiagram.ItemConfig;r.title="Joao Stuger",r.description="Business Solutions, US",r.image="http://www.basicprimitives.com/demo/images/photos/c.png",t.items.push(r);var i=new primitives.orgdiagram.ItemConfig;i.title="Lynne Rathinam",i.description="GM, Enterprise Services",i.image="http://www.basicprimitives.com/demo/images/photos/d.png",t.items.push(i);var s=[];s.push(new primitives.orgdiagram.ButtonConfig("delete","ui-icon-close","Delete")),s.push(new primitives.orgdiagram.ButtonConfig("add","ui-icon-person","Add")),e.rootItem=t,e.cursorItem=t,e.buttons=s,e.hasButtons=primitives.common.Enabled.Auto,e.hasSelectorCheckbox=primitives.common.Enabled.True,e.leavesPlacementType=primitives.orgdiagram.ChildrenPlacementType.Matrix,e.onButtonClick=function(e,t){switch(t.name){case"delete":if(t.parentItem==null)alert("Vas a borrar todo tu arbol!");else{var n=primitives.common.indexOf(t.parentItem.items,t.context);t.parentItem.items.splice(n,1),jQuery("#diagramaCausas").orgDiagram("update",primitives.orgdiagram.UpdateMode.Refresh)}break;case"add":var r=new primitives.orgdiagram.ItemConfig;r.title="Z Title",r.description="Z Description",r.image="http://www.basicprimitives.com/demo/images/photos/z.png",t.context.items.push(r),jQuery("#diagramaCausas").orgDiagram("update",primitives.orgdiagram.UpdateMode.Refresh)}},jQuery("#diagramaCausas").orgDiagram(e)})});