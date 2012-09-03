class AddAttachmentPhotoToUsers < ActiveRecord::Migration
  def self.up
    add_column  :users, :photo_file_name, :string
    add_column  :users, :photo_content_type, :integer
    add_column  :users, :photo_file_size, :integer
    add_column  :users, :photo_updated_at, :datetime
  end

  def self.down
    remove  :users, :photo_file_name, :string
    remove  :users, :photo_content_type, :integer
    remove  :users, :photo_file_size, :integer
    remove  :users, :photo_updated_at, :datetime
  end
end
