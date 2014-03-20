class Addfaceeboofield < ActiveRecord::Migration
  def change
  	remove_column :pdf_previews,:facebook_url
  	remove_column :pdf_previews,:twitter_url
  	add_column :pdf_previews, :facebook_url, :text
  	add_column :pdf_previews, :twitter_url, :text
  end
end
