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

    //uploader
  //$("#s3-uploader").S3Uploader();


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
              cargarArbolAcciones();
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

            $('html, body').animate({ scrollTop: 0 }, 'slow');
  	});


	
	$("#btn_agrega_colaborador").on("click",function(){
    	$(this).hide();
	});

  $(".inputs.txtProblema").on('keyup',function(){
        copiarValoresTxtProblema();
  });

  $('.chosen').chosen({width: "400px",disable_search_threshold: 10});
	
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


function generateNotyConfirm(layout, txt, url) {
      n = noty({
      text:'¿Quieres ver como quedó tu PDF?',
      modal:true,
      layout:layout,
      buttons: [
        {addClass: 'btn btn-primary', text: 'Ok', onClick: function($noty) {
        $noty.close();
        window.open( url ,'mywindow','width=800,height=400');
        }
      },
    {addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
        $noty.close();
        noty({text: 'You clicked "Cancel" button', type: 'error'});
      }
    }
  ]
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