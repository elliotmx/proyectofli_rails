class ApplicationPdf < Prawn::Document

 require 'json'

 def initialize(_pdfpreview_in, view)
   super(top_margin: 70)
   @view = view
   @pdfpreview = _pdfpreview_in

   print_header #1

   print_body #2

   print_founders
 end


 def print_header
  move_down 1
  image "#{Rails.root}/app/assets/images/logo_fli_pdf.png"
  move_down 20
  text "Resumen de Proyecto: #{@pdfpreview.problem} ", size: 15, style: :bold 
 end

 def print_founders()
    move_down 10
    text "Colaboradores", size: 15, style: :bold

    table tbl_colaboradores do
        row(0).font_style = :bold
        columns(1..4).align = :right
        self.row_colors = ["#DDDDDD", "#FFFFFF"]
        self.header = true
    end

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

  bold_text("Actividades")
  text @pdfpreview.activities + "\n\n"

  bold_text("Riesgos/Plan de Contingencia")
  print_table(@pdfpreview.risks,"riesgos")

  bold_text("Presupuesto")
  print_table(@pdfpreview.budget,"presupuesto")

 end


 def bold_text(_text)
    text _text, style: :bold
 end


 def print_table(json_string,origenData)

    if json_string != "" 
      hash = JSON.parse json_string
    
      if origenData == "presupuesto"
        table tbl_presupuesto(hash) do
        row(0).font_style = :bold
        columns(1..4).align = :right
        self.row_colors = ["#DDDDDD", "#FFFFFF"]
        self.header = true
        end
      elsif origenData == "riesgos"
        table tbl_riesgos(hash) do
          row(0).font_style = :bold
        end
      end

    end
    text "\n\n"
  end


  def tbl_presupuesto(hash)
        [["Tipo Recurso", "Descripcion","Cantidad","Costo Aprox.", "Sub Total"]] +
        hash.map do |object|
          [ object['tipoRecurso'].to_s ,object['descripcion'].to_s , object['cantidad'].to_s, object['descripcion'].to_s, object['cantidad'].to_s ]
        end
  end


  def tbl_riesgos(hash)
          [["Componentes", "Actividades","Riesgos","Plan de Contingencia"]] +
        hash.map do |object|
          [ object['componentes'].to_s ,object['actividades'].to_s , object['riesgos'].to_s, object['plncontingencia'].to_s ]
      end
  end

  def tbl_colaboradores
    @a = Application.find(@pdfpreview.application_id)
    [["Nombre", "Edad", "Email", "Rol"]]+
    @a.users.map do |object|
        [ object.name, object.age, object.email, object.user_profile.description]
    end
  end



end