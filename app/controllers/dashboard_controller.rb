class DashboardController < ApplicationController
  

  def show_uaq_projects
  	respond_to do |format|
  		format.js
  	end
  end


  def show_cobaq_projects
  	respond_to do |format|
  		format.js
  	end
  end


   def show_cecyteq_projects
  	respond_to do |format|
  		format.js
  	end
  end


   def show_conalep_projects
  	respond_to do |format|
  		format.js
  	end
  end

   def show_cetis_projects
  	respond_to do |format|
  		format.js
  	end
  end

end