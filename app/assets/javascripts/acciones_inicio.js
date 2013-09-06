function cargarAccionesInicio(){

  //establecer campos para tags
	$('input.tags').tags();

  //establecer tabla que será cargada con datatable
  $("#tabApplicationsList").dataTable();
   
	$("#section_1").show();

  	$(".btnHowTo").hover(function(){
  		  $(this).children('.unoI').toggle('slow');
  		  $(this).children('.uno').toggle('slow');
  	});


	$(".btnHowTo").on("click", function(e){
  			//console.log(e);
  			$(".btnHowTo").removeClass("active");
  			$(this).addClass("active");
        	$(".btnguardar").show();

  			switch (e.currentTarget.id){
  				case 'registroInvolcradosBtn':
					$(".questions_section").hide();
  					$("#section_1").show();
  					break;
  				case 'conociendoMejorBtn':
  					$(".questions_section").hide();
  					$("#section_2").show();
            		cargarArbolProblemas();
                cargarArbolAcciones();
                copiarValoresTxtProblema();
  					break;
  				case 'primeroLoPrimeroBtn':
  					$(".questions_section").hide();
  					$("#section_3").show();
  					break;
  				case 'areaImpactoBtn':
  					$(".questions_section").hide();
  					$("#section_4").show();
  					break;
  				case 'manosObraBtn':
  					$(".questions_section").hide();
  					$("#section_5").show();
              cargarArbolProblemas();
              cargarArbolAcciones();
              copiarValoresTxtProblema();
              mostrarLineaAccion();
  					break;
  				case 'riesgosBtn':
  					$(".questions_section").hide();
  					$("#section_6").show();
  					break;
  				case 'comentariosFinBtn':
  					$(".questions_section").hide();
  					$("#section_7").show();
  					break;
  				case 'redactarProyectoBtn':
  					$(".questions_section").hide();
            		cargarPdfPreview();
  					$("#section_8").show();
  					break;
  				case 'conexionConvocatoriasBtn':
  					$(".questions_section").hide();
  					$("#section_9").show();
  					break;
  					}
  	});


	
	$("#btn_agrega_colaborador").on("click",function(){
    	$(this).hide();
	});

  $(".inputs.txtProblema").on('keyup',function(){
        copiarValoresTxtProblema();
  });
	
}

function generateNoty(layout, txt) {

        
      n = noty({
      text: txt,
      type: 'alert',
      dismissQueue: true,
      layout: layout,
      modal:true,
      timeout:200,
      template: '<div class="noty_message"><img src="../assets/okicon2.png" alt="logo">&nbsp;<span class="noty_text"></span><div class="noty_close"></div></div>',
      theme: 'defaultTheme'
      });

    }

function copiarValoresTxtProblema(){
      var txtProblemaVal  =  $(".inputs.txtProblema").val();

      $("#p1").val(txtProblemaVal);
      $("#op1").val(txtProblemaVal);
}


function showUserEditForm(userId){
    $("#btn_agrega_colaborador").hide();
    $(".user_edit_forms").hide();
    $('#edit_form_'+userId).show();
}

function hideUserEditForm(){
    $("#formNewUser").hide();
    $(".user_edit_forms").hide();
    $("#btn_agrega_colaborador").show();
}