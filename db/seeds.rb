# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


DevelopmentStage.create(:description => "Solo tengo la idea en papel"	)
DevelopmentStage.create(:description => "Tengo un prototipo funcional o programa estructurado (la idea está totalmente
desarrollada y aplicada, pero no puede ser abiertamente lanzada o utilizada todavia).")
DevelopmentStage.create(:description => "He lanzado una versión pre-comercial o programa piloto (con un numero limitado de clientes o beneficiados).")
DevelopmentStage.create(:description => "El producto o el servicio ha sido lanzado comercial o públicamente.")


ProjectScope.create(:id=>30,:description => "Un grupo específico de personas con requisitos particulares.")
ProjectScope.create(:id=>30,:description => "Varios grupos de personas con los mismos problemas y necesidades")
ProjectScope.create(:id=>30,:description => "Uno o varios grupos de personas con diferentes problemas y necesidades.")

=begin

Market.create(:id=>30,:description => "Automotriz")
#Market.create(:id => 2, :description => "Comunicaciones y Conectividad")
Market.create(:id=>30, :description => "Desarrollo de Software")
Market.create(:id=>30,:description => "Distribución y Venta al por menor")
#Market.create(:id => 5, :description => "Domótica y Hogar Digital")
Market.create(:id=>30, :description => "Educación")
Market.create(:id=>30,:description => "Energía y Ahorro de Energía")
Market.create(:id=>30,:description => "Entretenimiento")
# Market.create(:id => 9, :description => "Entretenimiento: Eventos")
# Market.create(:id => 10, :description => "Entretenimiento: Juegos y Juguetes")
# Market.create(:id => 11, :description => "Entretenimiento: Música")
# Market.create(:id => 12, :description => "Entretenimiento: Video y Audiovisual")
# Market.create(:id => 13, :description => "Entretenimiento: HW,Redes y Plataformas")
# Market.create(:id => 14, :description => "Innovación Social")
#Market.create(:id => 15, :description => "Internet: Citas Online")
#Market.create(:id => 16, :description => "Internet:Servicios Digitales")
Market.create( :id=>30,:description => "Medios de Comunicación y Contenidos")
Market.create( :id=>30,:description => "Moda")
Market.create(:id=>30,:description => "Publicidad")
#Market.create(:id => 20, :description => "RRHH: Empleo y Contratación")
Market.create(:id=>30, :description => "Salud y Bienestar")
Market.create(:id=>30,:description => "Agricultura")
Market.create( :id=>30,:description => "Seguridad")
#Market.create(:id => 24, :description => "Servicios Financieros")
#Market.create(:id => 25, :description => "Servicios de Tecnologías de Información ( TI para empresas)")
#Market.create(:id => 26, :description => "Servicios sectoriales para las empresas")
#Market.create(:id => 27, :description => "Tecnologías Limpias")
Market.create(:id=>30, :description => "Viajes, Turismo, Hotelería")
Market.create( :id=>30,:description => "Actividades Pecuarias")
Market.create(:id=>30, :description => "Mineria")
Market.create(:id=>30, :description => "Alimentos")
=end


# Question.create(:id => 1, :spa_description => "¿De qué se trata tu idea de proyecto? (Como si se lo estuvieras contando a un amigo tuyo: claro y conciso)", :active => true, :section_id => 2, :field_type => "text_field")
# Question.create(:id => 2, :spa_description => "¿De donde surgió tu idea? ", :active => true, :section_id => 2, :field_type => "text_field")
# Question.create(:id => 3, :spa_description => "¿Sabias que un alto porcentaje de los proyectos que se realizan fracasan solo por no identificar correctamente el problema o necesidad? (Muchas veces buscamos soluciones sin identificar primero el problema o necesidad real)", :active => true, :section_id => 2, :field_type => "label")
# Question.create(:id => 4, :spa_description => "¿Quieres saber si tu idea de proyecto va por buen camino?", :active => true, :section_id => 2, :field_type => "label")
# Question.create(:id => 5, :spa_description => "<b>Empecemos definiendo el problema o necesidad. <b></br>\r\nSeguramente tu idea de proyecto ha surgido como consecuencia de querer resolver un problema o atender una necesidad. \r\n", :active => true, :section_id => 2, :field_type => "label")
# Question.create(:id => 6, :spa_description => "¿En qué área impactará directamente tu proyecto? (educativa,social,laboral,económica, etc.)", :active => true, :section_id => 2, :field_type => "text_field")
# Question.create(:id => 7, :spa_description => "En tu caso ¿Cuál es ese problema que tu idea de proyecto busca resolver? (resúmelo en una frase clara y concisa)", :active => true, :section_id => 2, :field_type => "text_area")
# Question.create(:id => 8, :spa_description => "json_causas", :eng_description => "json_causas", :active => true, :section_id => 2, :field_type => "hidden_field")
# Question.create(:id => 9, :spa_description => "json_consecuencias", :eng_description => "json_consecuencias", :active => true, :section_id => 2, :field_type => "hidden_field")
# Question.create(:id => 10, :spa_description => "json_objetivos", :eng_description => "json_objetivos", :active => true, :section_id => 2, :field_type => "hidden_field")
# Question.create(:id => 11, :spa_description => "Define tu proyecto en una frase", :eng_description => "Define your project in one phrase", :active => true, :section_id => 3, :field_type => "text_field")
# Question.create(:id => 12, :spa_description => "Frase simple y sencilla. (Ejemplo 1: Desarrollo de un sistema electrónico para monitoreo de humedad y temperatura en invernaderos, Ejemplo 2: Creación de un manual de apoyo para familias mexicanas en el  cuidado de personas con discapacidad motriz.)", :active => true, :section_id => 3, :field_type => "pop_field")
# Question.create(:id => 14, :spa_description => "¿Qué te gustaría lograr con tu proyecto?", :eng_description => "What would you like to accomplish with your project?", :active => true, :section_id => 3, :field_type => "text_area")
# Question.create(:id => 15, :spa_description => "Platícanos en que consiste tu proyecto! (Esta será la información que publiquemos en la sección publica de proyectos)", :eng_description => "Tell us what your project consists. ( This will be the info pubished on the public project area)", :active => true, :section_id => 3, :field_type => "text_area")
# Question.create(:id => 16, :spa_description => "Necesidades/Problema detectado ", :eng_description => "Needings/ Problem detected", :active => true, :section_id => 3, :field_type => "text_area")
# Question.create(:id => 17, :spa_description => "¿Por qué es valioso tu proyecto?", :eng_description => "¿Why your project is valuable?", :active => true, :section_id => 3, :field_type => "text_area")
# Question.create(:id => 18, :spa_description => "¿Cuál es el mercado o área específica en la que encaja tu proyecto?", :active => true, :section_id => 3, :html_for_field => "Market", :field_type => "radio")


# Section.create(:id => 1, :description => "Registro Involucrados")
# Section.create(:id => 2, :description => "Conociendo Mejor")
# Section.create(:id => 3, :description => "Primero lo primero")
# Section.create(:id => 4, :description => "Área Impacto")
# Section.create(:id => 5, :description => "Manos a la Obra")
# Section.create(:id => 6, :description => "Riesgos")
# Section.create(:id => 7, :description => "Comentarios Finales")
# Section.create(:id => 8, :description => "Redacción Proyecto")
# Section.create(:id => 9, :description => "Conexiones")


# ServiceType.create(:id => 1, :description => "Aplicaciones Moviles")
# ServiceType.create(:id => 2, :description => "Crowdsourcing")
# ServiceType.create(:id => 3, :description => "Gestión de Relación con clientes(CRM)")
# ServiceType.create(:id => 4, :description => "Herramientas de Colaboración")
# ServiceType.create(:id => 5, :description => "Instrumentos de Pago")
# ServiceType.create(:id => 6, :description => "Infraestructura")
# ServiceType.create(:id => 7, :description => "Mercado y Comercio Electronico")
# ServiceType.create(:id => 8, :description => "Motores de Busqueda o Herramientas de Directorio")
# ServiceType.create(:id => 9, :description => "Optimización y Racionalización de Procesos")
# ServiceType.create(:id => 10, :description => "Recomendaciones y Categorizaciones")
# ServiceType.create(:id => 11, :description => "Redes Sociales y Comunidades")
# ServiceType.create(:id => 12, :description => "Servicios y Aplicaciones en el punto de venta")
# ServiceType.create(:id => 13, :description => "Consultoría")
# ServiceType.create(:id => 14, :description => "Consultoría Digital")


#UserProfile.create(:id => 1, :description => "Co-worker")
#UserProfile.create(:id => 2, :description => "Lider")
#UserProfile.create(:id => 3, :description => "Tutor")

#College.create(:name=>"Colegio New")
#Faculty.create(:name => "Facultad Ciencias",:idcollege => 1)
#
#Role.create(:name =>"Admin")
#Role.create(:name =>"user")
#


# #USUARIOS CARGADOS
# User.create(:name=>'José Efrén Flores Badillo',:email=>'badilloefren121@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'6a210a84' )
# User.create(:name=>'María José González Torres',:email=>'aldoo_ssay@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'f23da894' )
# User.create(:name=>'José Manuel Ramírez Hernández',:email=>'mnuelrh27@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'657931f8' )
# User.create(:name=>'María de Jesús Rojas Mendoza',:email=>'marywuiwuichuy@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'27bcfd98' )
# User.create(:name=>'Javier Alejandro Salinas Cabrera',:email=>'javier.salinas1@outlook.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'895229d4' )
# User.create(:name=>'MIGUEL ANGEL CALLEJAS RESENDIZ',:email=>'miguel.jok@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'a7f23b1f' )
# User.create(:name=>'RAUL ALEJANDRO VILCHIS AGUILAR',:email=>'akeron_1296@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'45b0f9bf' )
# User.create(:name=>'Luis David Velarde Díaz',:email=>'bibiduff_96@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'1a631b97' )
# User.create(:name=>'Jordana Odalys Martínez Verdugo',:email=>'martinezverdugoj@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'77d2a5f8' )
# User.create(:name=>'Cesar Enrique Estrada Olvera',:email=>'denker_10@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'5c6a4a3e' )
# User.create(:name=>'Jorge Luis Estrada Olvera',:email=>'jeorge_619@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'842ca18b' )
# User.create(:name=>'Karen Guadalupe Ramírez Aguillón',:email=>'karen8_love@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'0f14d90b' )
# User.create(:name=>'Adrián David Cárdenas Cárdenas',:email=>'adriandavidc@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'27e625a3' )
# User.create(:name=>'PEREZ MORAN FREDDY',:email=>'alex_130197@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'ddee1647' )
# User.create(:name=>'BALDERAZ VAZQUEZ FERNANDA GUADALUPE',:email=>'fervaz.b95@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'5aa3171c' )
# User.create(:name=>'WANDA GABRIELA ANZALDO RODRIGUEZ',:email=>'teeross28@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'ec91c4c0' )
# User.create(:name=>'CAMARENA HERNANDEZ MARIA FERNANDA',:email=>'fer_csmarena@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'b738d646' )
# User.create(:name=>'NARDA PADRON GUTIERREZ',:email=>'danny_rocksound@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'2f5ee401' )
# User.create(:name=>'LEDESMA RIOS ERIKA ANAHI',:email=>'andromeda-0107@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'932d5ac1' )
# User.create(:name=>'MENDOZA QUINTANA JOHANY',:email=>'EPAY_BLACK@HOTMAIL.COM',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'468ac7f5' )
# User.create(:name=>'ARRIZU AZUA MARTA SUSANA',:email=>'madi_muequita@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'79e24708' )
# User.create(:name=>'ESPINOSA MARTINEZ JESUS EMMANUEL',:email=>'estreno_zapatos@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'483f3bb4' )
# User.create(:name=>'TRUJILLO AVILÉS MARICELA',:email=>'marita-1288@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'07d77291' )
# User.create(:name=>'HERNÁNDEZ PAREDES MARISOL',:email=>'lol-jocee@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'34bd215c' )
# User.create(:name=>'ÁNGELES OLVERA ERANDY',:email=>'antrojoven_proyecto@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'869cc624' )
# User.create(:name=>'JORGE MENDOZA SEGOBIA',:email=>'cuerpospin_75@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'099d0e29' )
# User.create(:name=>'Juan Fernando Marmolejo Sánchez',:email=>'luis.cbl123@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'b774bc34' )
# User.create(:name=>'Mitzi Gómez Bárcenas',:email=>'mitzigomezbarcenas@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'fdb74617' )
# User.create(:name=>'ZELTZIN CELESTE YAÑEZ MARTNEZ',:email=>'celeste_120296@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>5,:password=>'d0076c69' )
# User.create(:name=>'LORAINE LUNA HENESTROSA',:email=>'chipotle_666@live.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>5,:password=>'a5b1358c' )
# User.create(:name=>'Sanchez Reséndiz Sandra Guadalupe',:email=>'sabiduriaportatil13@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'8cafdb38' )
# User.create(:name=>'Manriquez Gómez Lizbeth',:email=>'nigth_style@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'59561e43' )
# User.create(:name=>'Ruiz Alcántara Alexandra Victoria',:email=>'agavitolate@outlook.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'0ba75341' )
# User.create(:name=>'Pérez Zamora Jaime',:email=>'xnx_rackzo@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'3bb89dba' )
# User.create(:name=>'Fentanes Deyta Ameyalli',:email=>'ameyallifentanes@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'8b094893' )
# User.create(:name=>'Hernández Bárcenas Luis Mario',:email=>'d24martha@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'4a133f84' )
# User.create(:name=>'Ibarra Pacheco Danya Jaqueline',:email=>'colci_cs@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'1a3c7a00' )
# User.create(:name=>'Rugerio Sánchez Mariana',:email=>'jocelinezubiate@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'a9275481' )
# User.create(:name=>'Godinez Gallardo Jesús Fernado',:email=>'dombm50314@yahoo.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'8683c7c9' )
# User.create(:name=>'Morales Mondragón Mario Alberto',:email=>'conversenaranjas@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'40cca5c2' )
# User.create(:name=>'González Becerril Jessica Michelle',:email=>'botemusical@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'a9171299' )
# User.create(:name=>'Acosta Carrasco Miguel Adrián',:email=>'jefret01@yahoo.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'2253919e' )
# User.create(:name=>'Reyes Colín Diana Patricia',:email=>'concepta-chairs@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'63e3de20' )
# User.create(:name=>'Salgado Galván Lizbeth Amalia',:email=>'rocasandy@yahoo.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'7181f89d' )
# User.create(:name=>'Sánchez Velasquez Rodrigo Azarel',:email=>'vivaldiqroq@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'e92ac32f' )
# User.create(:name=>'JULIO CÉSAR LÓPEZ BECERRIL',:email=>'julio4G@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>5,:password=>'3aa054f7' )
# User.create(:name=>'KARLA YANET VALLE MARTÍNEZ',:email=>'qarlaa-yaneet@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>5,:password=>'36245dc1' )
# User.create(:name=>'JORGE ALBERTO GALLARDO ISASSI',:email=>'jorge-ra12@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>5,:password=>'81a3af41' )
# User.create(:name=>'Uriel Vasquez Cruz',:email=>'uriel-vasquez-cruz@outlook.es',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'ee6633e0' )
# User.create(:name=>'Pacheco López Maria Paz',:email=>'jesus18710@hotmail.mx',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'ecc1dfd8' )
# User.create(:name=>'Guzmán Garcia Ulises javier',:email=>'digitalzone.publicidad@outlook.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'7eca65c4' )
# User.create(:name=>'PICHARDO RAMIREZ PATRICIA',:email=>'patipichi_26@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'41f7f923' )
# User.create(:name=>'González Hernández Mariana',:email=>'proyectoventas6.10@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'6f843590' )
# User.create(:name=>'LOPEZ SOTO CARLOS GERSAHIN',:email=>'charli_troy_24@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'f4f98897' )
# User.create(:name=>'MATEHUALA AGUILAR ANA LAURA',:email=>'anix-super.star@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'7ea2c5df' )
# User.create(:name=>'NOGUEZ SALINAS ANA KAREN',:email=>'kin.noguez@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'6e590fbc' )
# User.create(:name=>'SIXTOS LOPEZ GRECIA',:email=>'gre.2527@homail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'1cb33ec9' )
# User.create(:name=>'MEDINA GOMEZ JAZMIN',:email=>'jaz.star20@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'2bebf939' )
# User.create(:name=>'GARCIA RANGEL ERIKA CINTHYA',:email=>'erika-love84@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'6f7ec86d' )
# User.create(:name=>'JOSUE BECERRA RICO',:email=>'josuebecerra7@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'7366ce98' )
# User.create(:name=>'PAULINA ORTIZ CHAVEZ',:email=>'pawortc@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'65550b15' )
# User.create(:name=>'CORDERO ROSALES FELIPE',:email=>'felix-719@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'200d8765' )
# User.create(:name=>'HERNANDEZ CRUZ SOFIA IVONNE',:email=>'timkerbell_zoofia@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'2666f84f' )
# User.create(:name=>'DIAZ BADILLO FERNANDA',:email=>'feer-fish@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'2cd8518f' )
# User.create(:name=>'ANGELES CRUZ NALLELY GUADALUPE',:email=>'nallegpe-ac08@outlook.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'d5d99805' )
# User.create(:name=>'GOMEZ GONZALEZ KARLA',:email=>'karlita_wiii@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'bee5e267' )
# User.create(:name=>'MARTINEZ PIÑA LAURA ROCIO',:email=>'laura-0096@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'5306981d' )
# User.create(:name=>'GONZALEZ BAHENA ESTHER',:email=>'tete_gb1@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'5dd38013' )
# User.create(:name=>'Diana Laura Esquivel Barriga',:email=>'d_barriga@live.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'200da55e' )
# User.create(:name=>'Silvia Franco Zamora',:email=>'jenana885@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'e011e268' )
# User.create(:name=>'Maria Esperanza Becerra Becerra',:email=>'derhdz@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'df2a9e9c' )
# User.create(:name=>'Luis Alfredo Bravo Morales',:email=>'bravomorales@live.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'0e061a74' )
# User.create(:name=>'Ery Eduardo Gonzàlez Cabrera',:email=>'skare_3@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'4a87f684' )
# User.create(:name=>'PAMELA ITZEL LUNA ROBLES',:email=>'lunaroblespamelaitzel@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'0599a278' )
# User.create(:name=>'ANTONIO ISAIAS PEREZ CAMPOS',:email=>'tonyiperez@yahoo.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'c0447c4a' )
# User.create(:name=>'LUIS ALBERTO CANIZO RODRIGUEZ',:email=>'luis.imparablesol@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'64f1abb1' )
# User.create(:name=>'ADRIANA MARTINEZ GACHUZO',:email=>'breicca_prinsess@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'29d9bcd5' )
# User.create(:name=>'BRENDA SANTILLAN FONSECA',:email=>'breii_santillan@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'b168b94b' )
# User.create(:name=>'ERNESTO DE JESUS DE JESUS',:email=>'che_saimon13@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'50e76494' )
# User.create(:name=>'ARGENIS RODRIGUEZ SALAZAR',:email=>'argenis22queretaro@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'48871f7e' )
# User.create(:name=>'MARIA FERNANDA ARELLANOS MEJORADA',:email=>'arellanosfer@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'655b9965' )
# User.create(:name=>'LEONARDO DANIEL MENDEZ SANCHEZ',:email=>'leondani11@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'bb220205' )
# User.create(:name=>'BALTAZAR SANDOBAL DULCE MARIA',:email=>'coffeebreak-22@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'4ca67395' )
# User.create(:name=>'LUNA ALEJANDRA IAN UZZIELH',:email=>'boos956@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'1d61bfda' )
# User.create(:name=>'DARIO ESTRADA GARCES',:email=>'daesga1005@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'a09f005b' )
# User.create(:name=>'GALICIA VALDEZ MARCOS ANDRES',:email=>'andres_valdez@live.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'185169ec' )
# User.create(:name=>'PICHARDO GARCIA BLANCA MARGARITA',:email=>'blancapichardogarcia@yahoo.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'f2281ef7' )
# User.create(:name=>'SANCHEZ BALDERAS LUIS ANGEL.',:email=>'angel160634@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'fff86974' )
# User.create(:name=>'SANCHEZ OLVERA MARIA SOLEDAD',:email=>'sol_29k@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'26bc68c1' )
# User.create(:name=>'TREJO CABRERA SANDRA TONANTZIN',:email=>'andy_tkm_5@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'a5ca6040' )
# User.create(:name=>'RANGEL PADRON VIANEY',:email=>'vianey_rangel19@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'0fe3fb03' )
# User.create(:name=>'HERNANDEZ BUTTON AUREY GUADALUPE',:email=>'aury_xoxa@live.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'cb5c7ef0' )
# User.create(:name=>'SANCHEZ GONZALEZ JUAN CARLOS',:email=>'green-911@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'3e431f0a' )
# User.create(:name=>'ABRAHAM PADRON DEL CAMPO',:email=>'padroonnn@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'ab74c566' )
# User.create(:name=>'GONZALEZ AGUILAR DIANA LAURA',:email=>'diany0304@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'8d5fb439' )
# User.create(:name=>'ITZEL BOCANEGRA FAJARDO',:email=>'jizelbf_@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>5,:password=>'7f5a69a4' )
# User.create(:name=>'OSCAR RAMIREZ OCHOA',:email=>'ramirezoskr27@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'d1dc2730' )
# User.create(:name=>'VÍCTOR MANUEL SALINAS DE JESÚS',:email=>'somosmexico@outlook.es',:user_profile_id=>2, :role_id=>2,:college_id=>5,:password=>'376fc7f9' )
# User.create(:name=>'OLVERA BARRON MYRIAM BERENICE',:email=>'biak1327_jb@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'6bfbbf8a' )
# User.create(:name=>'LUNA MATEO ANA ESTEFANIA',:email=>'fanni-luna@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'bddbe34f' )
# User.create(:name=>'OCHOA GALVAN VERONICA',:email=>'beronica_og@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'da312817' )
# User.create(:name=>'ORTIZ LEDESMA FERNANDA',:email=>'andres_1234torres@outlook.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'653b6144' )
# User.create(:name=>'Flor Enriquez Gómez',:email=>'villygom@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'cf3a9bde' )
# User.create(:name=>'Mariel Gómez López',:email=>'en_ri_que_14@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'405ae565' )
# User.create(:name=>'Karla María Pico Cornejo',:email=>'azulyverdexlavida@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'3369cf4a' )
# User.create(:name=>'Alejandra Karolina Martínez Barrón',:email=>'mane.47@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'9ac37241' )
# User.create(:name=>'María Guadalupe De Jesús Rodriguez',:email=>'fphdm@hotmai.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'c2641e2e' )
# User.create(:name=>'VAZQUEZ JAIME LUIS EDUARDO',:email=>'crazylalo666@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'6ae9ee7b' )
# User.create(:name=>'LICEA LOPEZ LUIS ALFREDO',:email=>'fe1_121996@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'675aa721' )
# User.create(:name=>'ESMERADO MARTINEZ JANET',:email=>'janet.esmerado@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'4fbf3f6b' )
# User.create(:name=>'RUIZ GOMEZ RICARDO ABRAHAM',:email=>'203.ruiz.gomez.ricardo@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'9231cb19' )
# User.create(:name=>'SALINAS SUAREZ KATY YITZEL',:email=>'katy.salinassuarez@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'f251eeef' )
# User.create(:name=>'RICO ESPINO FRANCISCO',:email=>'franciscoricoes@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'1c9b6b56' )
# User.create(:name=>'JAIME GUERRERO MARIA DOLORES',:email=>'lolita-jaime3@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'13b58f32' )
# User.create(:name=>'María Guadalupe Ramírez De Jesús',:email=>'marilu_locua@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'ec6eeff1' )
# User.create(:name=>'MALDONADO RIVERA JUAN ANGEL',:email=>'juanito051295@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'1fa2e5c1' )
# User.create(:name=>'Sandra Parra Gómez',:email=>'sandraparragomez@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'690ebf62' )
# User.create(:name=>'María Guadalupe Hernandez Reyes',:email=>'marya.lupy@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'62f070fb' )
# User.create(:name=>'CABRERA ARVIZU MARTHA',:email=>'perljob_81@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'949a9f52' )
# User.create(:name=>'JESUS ALBERTO BECERRA SOTO',:email=>'jesusch_9@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'f8a8c051' )
# User.create(:name=>'SEGUNDO GARCIA GERARDO',:email=>'alfonso.57@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'ca759fa4' )
# User.create(:name=>'GUERRERO JIMENEZ SANTIAGO',:email=>'santy_july96@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'5ef8921e' )
# User.create(:name=>'Jose Alfonso Piña Alvarez',:email=>'karen-gueni@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'d9e415c3' )
# User.create(:name=>'Jesús Sampayo Monrroy',:email=>'seork_11@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'40157356' )
# User.create(:name=>'BRAMBILA VAZQUEZ FERNANDO',:email=>'mirysaga@yahoo.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'4fbd3356' )
# User.create(:name=>'Carlos Andres Gutierrez Garcia',:email=>'fastmexico@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'fe401bda' )
# User.create(:name=>'Nahum Cruz Sánchez',:email=>'radio17studio@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'5e45e8d5' )
# User.create(:name=>'Diego Septien Mata',:email=>'diegoseptien@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'b9078a3f' )
# User.create(:name=>'Diana Hernández Durán',:email=>'rellemex17@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'8a54f6aa' )
# User.create(:name=>'Uriel Domingo Rojas Trejo',:email=>'blue28_uriel@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'245c5a7c' )
# User.create(:name=>'Ofelia Bautista González',:email=>'ofe_poof@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'b2494b1b' )
# User.create(:name=>'EMMANUEL ORTIZ ANGELES',:email=>'elquinto_zok@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'dd5f8919' )
# User.create(:name=>'EMMANUEL CABALLERO PEREZ',:email=>'EMP198@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'0e85fe1f' )
# User.create(:name=>'ANDREA GOÑI DURAN',:email=>'andreagoni1896@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'4a7c9c5e' )
# User.create(:name=>'MIGUEL ANGEL SALAZAR ESTRADA',:email=>'miguelangel_salazarr@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'f3d05407' )
# User.create(:name=>'ESAU ARTURO FRAUSTO LAVANDEROS',:email=>'lian_gm@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'88d3b5e2' )
# User.create(:name=>'HECTOR VALENTIN BALTIERRA GARCIA',:email=>'hec9643@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'c236491f' )
# User.create(:name=>'ANGEL EMMANUEL PEREZ DE SANTIAGO',:email=>'zezar-pepito@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'a44b4f1e' )
# User.create(:name=>'NOE GUZMAN FAJARDO',:email=>'lunnox@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'65c65e56' )
# User.create(:name=>'GISELA EDITH GOMEZ MENDOZA',:email=>'gisela-hermosa@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'bb1019ed' )
# User.create(:name=>'MARIA SUSANA MUÑOZ UGALDE',:email=>'msusanmu18@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'ed3a5480' )
# User.create(:name=>'MARIA FERNANDA RAMIREZ CRISTOBAL',:email=>'pantera_1996@live.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'aef9c9d2' )
# User.create(:name=>'DIEGO JAVIER FRANCO CHAVEZ',:email=>'diegojavier@live.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'fd6c1fed' )
# User.create(:name=>'ALMAGUER CHAVEZ MONICA KAREN',:email=>'monialmaguerc@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'d6dd2ee3' )
# User.create(:name=>'MARTHA LESLIE LOPEZ BALTAZAR',:email=>'martica_81195@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'8d32b048' )
# User.create(:name=>'LUZ PONCE MARIA EUGENIA',:email=>'pillinp11@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'62b37176' )
# User.create(:name=>'Juan Luis RincónGonzález',:email=>'juanluisrincongonzalez22@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'1623e3ef' )
# User.create(:name=>'DENISS BARAJAS GASCA',:email=>'denia_307@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'39e57348' )
# User.create(:name=>'Lesly Itzel García Guerrero',:email=>'les1234_pollo@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'0c2eee48' )
# User.create(:name=>'ALITZEL GONZALEZ MARTINEZ',:email=>'lalyss.01@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'660fe4fd' )
# User.create(:name=>'IVAN ENRIQUE PEREZ GARCIA',:email=>'ivanex_28.10@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'ded55fc9' )
# User.create(:name=>'ILEANA SARAY PARRA BARRON',:email=>'strla_1395@hotmial.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'a2e84773' )
# User.create(:name=>'Miguel Ángel Bárcenas Pérez',:email=>'sablemike@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'88a72fff' )
# User.create(:name=>'SANCHEZ ISASSI BRENDA GABRIELA',:email=>'gabi_klinker@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'08db0fa3' )
# User.create(:name=>'ESDRAS MIGUEL FLORES ELVIRA',:email=>'esdras.miguel@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'9ee9b7e5' )
# User.create(:name=>'ESTEFANIA GASPERIN LOPEZ',:email=>'fantita_fantita@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'8c83a1a5' )
# User.create(:name=>'NADIA PAULINA RUIZ MARROQUIN',:email=>'monogogles_58@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'20df4dfa' )
# User.create(:name=>'MARIA LUCIA LÓPEZ SOLIS',:email=>'lucia_losl@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'f682d1e1' )
# User.create(:name=>'JOSE ENRIQUE GUTIERREZ REYES',:email=>'quique13521352@outlook.es',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'cc23ecc9' )
# User.create(:name=>'CARLOS IVAN GUERRERO CARRILLO',:email=>'ivan_andromeda@outlool.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'103d1d64' )
# User.create(:name=>'LICEA MORENO ARMANDO',:email=>'armando.licea.moreno@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'68d5f3a8' )
# User.create(:name=>'ROBLES RAMIREZ DIANA LAURA',:email=>'diana.laura.roblez.ramirez@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'289b5065' )
# User.create(:name=>'MORENO RUBIO REGINA RUTH',:email=>'mreno.rubio.regina.ruth@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'c3608747' )
# User.create(:name=>'BRAMBILA VAZQUEZ FERNANDO',:email=>'brambila.vazquez.fernando@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'545f8954' )
# User.create(:name=>'MORENO GUERRERO MARIA DEL PUEBLITO',:email=>'maria.del.pueblito.moreno.guerrero@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'9797a7e8' )
# User.create(:name=>'GALVAN ZALAZAR ROXANA',:email=>'roxana.galvan.zalazar@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'51363e40' )
# User.create(:name=>'ALDANA ARAIZA ANGELES RUBI',:email=>'rubi.aldana.araiza@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>3,:password=>'7fb9cdfb' )
# User.create(:name=>'JONATHAN ISAAC SÁNCHEZ VELAZQUEZ',:email=>'taz_isaac@hotmai.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'9dd9d47e' )
# User.create(:name=>'ITZEL RAYAS CEVICO',:email=>'sasame14@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'904e3f2f' )
# User.create(:name=>'BRANDON HERNANDEZ OCHOA',:email=>'barndon_1995@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'859e34c1' )
# User.create(:name=>'JUAN MANUEL MORENO HERNANDEZ',:email=>'japonesio_ska@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'bb23b99a' )
# User.create(:name=>'JESSICA ALEJANDRA SÁNCHEZ LÓPEZ',:email=>'jessica9ro@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'46f15741' )
# User.create(:name=>'DANIELA ANAID ROSAS BARRERA',:email=>'danycowco@live.com.mx',:user_profile_id=>2, :role_id=>2,:college_id=>6,:password=>'d8036284' )
# User.create(:name=>'Joan Eduardo Muñoz Gonzalez',:email=>'lalojm93@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'b887bd75' )
# User.create(:name=>'Abraham Bautista Aguilar',:email=>'abraham.foco@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'8c8a35fb' )
# User.create(:name=>'Carlos Castañon Nieves',:email=>'carloscn96@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'a8d24a8d' )
# User.create(:name=>'Sergio Olguin Villanueva',:email=>'sergio.olguin@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'5b0a0671' )
# User.create(:name=>'Marco Aurelio Elias Ruiz',:email=>'marco_aurelio_parck@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'99c60c17' )
# User.create(:name=>' Andrés Ávila Perea',:email=>'andres.ap.03.96@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'22a23ww' )
# User.create(:name=>'Karen Fernández Almaraz',:email=>'karen.fernandezal@gmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>2,:password=>'aa2qb2cc' )
# User.create(:name=>'Andrés Villegas Martínez',:email=>'andville_z_@hotmail.com',:user_profile_id=>2, :role_id=>2,:college_id=>4,:password=>'abc23456' )
