class ApplicationPdf < Prawn::Document

 require 'json'

 def initialize(_pdfpreview_in, view)
   super(top_margin: 70)
   @view = view
   @pdfpreview = _pdfpreview_in

   print_header #1

   print_body #2
 end


 def print_header
  move_down 1
  image "#{Rails.root}/app/assets/images/logo_fli_pdf.png"
  move_down 20
  text "Resumen de Proyecto: #{@pdfpreview.project_title} ", size: 15, style: :bold 
 end

 def print_coworkers(application_id)
    
 end


 def print_body
  move_down 15
  
  bold_text("Problematica que resuelve el proyecto")
  text @pdfpreview.problem + "\n\n"
  
  bold_text("Justificacion")
  text @pdfpreview.justification + "\n\n"

  bold_text("Objetivo")
  text @pdfpreview.objective + "\n\n"

  bold_text("Poblacion Objetivo")
  text @pdfpreview.objective_population + "\n\n"

  bold_text("Componentes/Estrategia")
  text @pdfpreview.components + "\n\n"

  bold_text("Actividades")
  text @pdfpreview.activities + "\n\n"

  bold_text("Presupuesto")
  print_table(@pdfpreview.budget)

  bold_text("Componentes/Estrategia")
  text @pdfpreview.components + "\n\n"

 end


 def bold_text(_text)
    text _text, style: :bold
 end

 def print_table(json_string)
    text "entra a creacion de tabla"+ "\n\n"
    hash = JSON.parse json_string


    hash.each do |object|
        # puts "budget " + object.to_json.inspect
        # text "budget " + object.to_json.inspect
    end


 end

end