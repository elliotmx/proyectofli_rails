# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
=begin
Market.create(:id => 1, :description => "Automotriz")
Market.create(:id => 2, :description => "Comunicaciones y Conectividad")
Market.create(:id => 3, :description => "Desarrollo de Software")
Market.create(:id => 4, :description => "Distribución y Venta al por menor")
Market.create(:id => 5, :description => "Domótica y Hogar Digital")
Market.create(:id => 6, :description => "Educación")
Market.create(:id => 7, :description => "Energía y Ahorro de Energía")
Market.create(:id => 8, :description => "Entretenimiento: Cultura y Ocio")
Market.create(:id => 9, :description => "Entretenimiento: Eventos")
Market.create(:id => 10, :description => "Entretenimiento: Juegos y Juguetes")
Market.create(:id => 11, :description => "Entretenimiento: Música")
Market.create(:id => 12, :description => "Entretenimiento: Video y Audiovisual")
Market.create(:id => 13, :description => "Entretenimiento: HW,Redes y Plataformas")
Market.create(:id => 14, :description => "Innovación Social")
Market.create(:id => 15, :description => "Internet: Citas Online")
Market.create(:id => 16, :description => "Internet:Servcios Digitales")
Market.create(:id => 17, :description => "Medios de Comunicación y Contenidos")
Market.create(:id => 18, :description => "Moda")
Market.create(:id => 19, :description => "Publicidad")
Market.create(:id => 20, :description => "RRHH: Empleo y Contratación")
Market.create(:id => 21, :description => "Salud y Bienestar")
Market.create(:id => 22, :description => "Sector Agricola")
Market.create(:id => 23, :description => "Seguridad")
Market.create(:id => 24, :description => "Servicios Financieros")
Market.create(:id => 25, :description => "Servicios de Tecnologías de Información ( TI para empresas)")
Market.create(:id => 26, :description => "Servicios sectoriales para las empresas")
Market.create(:id => 27, :description => "Tecnologías Limpias")
Market.create(:id => 28, :description => "Viajes, Turismo, Hotelería")
Market.create(:id => 29, :description => "Alimentos")
=end

=begin
Question.create(:id => 1, :spa_description => "¿De qué se trata tu idea de proyecto? (Como si se lo estuvieras contando a un amigo tuyo: claro y conciso)", :active => true, :section_id => 2, :field_type => "text_field")
Question.create(:id => 2, :spa_description => "¿De donde surgió tu idea? ", :active => true, :section_id => 2, :field_type => "text_field")
Question.create(:id => 3, :spa_description => "¿Sabias que un alto porcentaje de los proyectos que se realizan fracasan solo por no identificar correctamente el problema o necesidad? (Muchas veces buscamos soluciones sin identificar primero el problema o necesidad real)", :active => true, :section_id => 2, :field_type => "label")
Question.create(:id => 4, :spa_description => "¿Quieres saber si tu idea de proyecto va por buen camino?", :active => true, :section_id => 2, :field_type => "label")
Question.create(:id => 5, :spa_description => "<b>Empecemos definiendo el problema o necesidad. <b></br>\r\nSeguramente tu idea de proyecto ha surgido como consecuencia de querer resolver un problema o atender una necesidad. \r\n", :active => true, :section_id => 2, :field_type => "label")
Question.create(:id => 6, :spa_description => "¿En qué área impactará directamente tu proyecto? (educativa,social,laboral,económica, etc.)", :active => true, :section_id => 2, :field_type => "text_field")
Question.create(:id => 7, :spa_description => "En tu caso ¿Cuál es ese problema que tu idea de proyecto busca resolver? (resúmelo en una frase clara y concisa)", :active => true, :section_id => 2, :field_type => "text_area")
Question.create(:id => 8, :spa_description => "json_causas", :eng_description => "json_causas", :active => true, :section_id => 2, :field_type => "hidden_field")
Question.create(:id => 9, :spa_description => "json_consecuencias", :eng_description => "json_consecuencias", :active => true, :section_id => 2, :field_type => "hidden_field")
Question.create(:id => 10, :spa_description => "json_objetivos", :eng_description => "json_objetivos", :active => true, :section_id => 2, :field_type => "hidden_field")
Question.create(:id => 11, :spa_description => "Define tu proyecto en una frase", :eng_description => "Define your project in one phrase", :active => true, :section_id => 3, :field_type => "text_field")
Question.create(:id => 12, :spa_description => "Frase simple y sencilla. (Ejemplo 1: Desarrollo de un sistema electrónico para monitoreo de humedad y temperatura en invernaderos, Ejemplo 2: Creación de un manual de apoyo para familias mexicanas en el  cuidado de personas con discapacidad motriz.)", :active => true, :section_id => 3, :field_type => "pop_field")
Question.create(:id => 14, :spa_description => "¿Qué te gustaría lograr con tu proyecto?", :eng_description => "What would you like to accomplish with your project?", :active => true, :section_id => 3, :field_type => "text_area")
Question.create(:id => 15, :spa_description => "Platícanos en que consiste tu proyecto! (Esta será la información que publiquemos en la sección publica de proyectos)", :eng_description => "Tell us what your project consists. ( This will be the info pubished on the public project area)", :active => true, :section_id => 3, :field_type => "text_area")
Question.create(:id => 16, :spa_description => "Necesidades/Problema detectado ", :eng_description => "Needings/ Problem detected", :active => true, :section_id => 3, :field_type => "text_area")
Question.create(:id => 17, :spa_description => "¿Por qué es valioso tu proyecto?", :eng_description => "¿Why your project is valuable?", :active => true, :section_id => 3, :field_type => "text_area")
Question.create(:id => 18, :spa_description => "¿Cuál es el mercado o área específica en la que encaja tu proyecto?", :active => true, :section_id => 3, :html_for_field => "Market", :field_type => "radio")
=end

Section.create(:id => 1, :description => "Registro Involucrados")
Section.create(:id => 2, :description => "Conociendo Mejor")
Section.create(:id => 3, :description => "Primero lo primero")
Section.create(:id => 4, :description => "Área Impacto")
Section.create(:id => 5, :description => "Manos a la Obra")
Section.create(:id => 6, :description => "Riesgos")
Section.create(:id => 7, :description => "Comentarios Finales")
Section.create(:id => 8, :description => "Redacción Proyecto")
Section.create(:id => 9, :description => "Conexiones")

=begin
ServiceType.create(:id => 1, :description => "Aplicaciones Moviles")
ServiceType.create(:id => 2, :description => "Crowdsourcing")
ServiceType.create(:id => 3, :description => "Gestión de Relación con clientes(CRM)")
ServiceType.create(:id => 4, :description => "Herramientas de Colaboración")
ServiceType.create(:id => 5, :description => "Instrumentos de Pago")
ServiceType.create(:id => 6, :description => "Infraestructura")
ServiceType.create(:id => 7, :description => "Mercado y Comercio Electronico")
ServiceType.create(:id => 8, :description => "Motores de Busqueda o Herramientas de Directorio")
ServiceType.create(:id => 9, :description => "Optimización y Racionalización de Procesos")
ServiceType.create(:id => 10, :description => "Recomendaciones y Categorizaciones")
ServiceType.create(:id => 11, :description => "Redes Sociales y Comunidades")
ServiceType.create(:id => 12, :description => "Servicios y Aplicaciones en el punto de venta")
ServiceType.create(:id => 13, :description => "Consultoría")
ServiceType.create(:id => 14, :description => "Consultoría Digital")
=end

=begin
UserProfile.create(:id => 1, :description => "Co-worker")
UserProfile.create(:id => 2, :description => "Lider")
UserProfile.create(:id => 3, :description => "Tutor")
=end