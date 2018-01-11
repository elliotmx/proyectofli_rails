# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( primitives.latest.css )
Rails.application.config.assets.precompile += %w( jquery.tags.css )
Rails.application.config.assets.precompile += %w( jquery.datatables.css )
Rails.application.config.assets.precompile += %w( jquery.chosen.css )
Rails.application.config.assets.precompile += %w( jquery.tags.min.js )
Rails.application.config.assets.precompile += %w( jquery.noty.js )
Rails.application.config.assets.precompile += %w( jquery.noty.theme.default.js )

Rails.application.config.assets.precompile += %w( jquery.noty.layout.top.js )
Rails.application.config.assets.precompile += %w( jquery.noty.layout.centerRight.js )
Rails.application.config.assets.precompile += %w( jquery.chosen.js )

Rails.application.config.assets.precompile += %w( jquery.datatables.min.js )
Rails.application.config.assets.precompile += %w( acciones_pdf.js )
Rails.application.config.assets.precompile += %w( acciones_lineaAccion.js )

Rails.application.config.assets.precompile += %w( acciones_arbolproblemas.js )
Rails.application.config.assets.precompile += %w( acciones_arbolactividades.js )
Rails.application.config.assets.precompile += %w( acciones_inicio.js )

Rails.application.config.assets.precompile += %w( acciones_tablarecursos.js )
Rails.application.config.assets.precompile += %w( acciones_tablacomponentes.js )
Rails.application.config.assets.precompile += %w( d.custom_application.js )

# Rails.application.config.assets.precompile += %w( search.js )
