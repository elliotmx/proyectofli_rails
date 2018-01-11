class AddSocialNetFieldsToPdfPreview < ActiveRecord::Migration
  def change
  	add_column :pdf_previews, :facebook_url, :text
  	add_column :pdf_previews, :twitter_url, :text
  end
end
