# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130410071337) do

  create_table "answers", :force => true do |t|
    t.string   "value"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.integer  "question_id"
    t.integer  "application_id"
  end

  create_table "applications", :force => true do |t|
    t.string   "name"
    t.string   "short_description"
    t.string   "video_url"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
    t.string   "tags"
  end

  create_table "applications_users", :id => false, :force => true do |t|
    t.integer "user_id"
    t.integer "application_id"
  end

  create_table "colleges", :force => true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "telefono"
    t.string   "email"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "comments", :force => true do |t|
    t.string   "text"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "development_stages", :force => true do |t|
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "faculties", :force => true do |t|
    t.string   "name"
    t.integer  "idcollege"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "markets", :force => true do |t|
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "project_scopes", :force => true do |t|
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "questions", :force => true do |t|
    t.string   "spa_description"
    t.string   "eng_description"
    t.boolean  "active"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.integer  "section_id"
    t.string   "html_for_field"
    t.string   "field_type"
  end

  create_table "sections", :force => true do |t|
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "service_types", :force => true do |t|
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "user_profiles", :force => true do |t|
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.integer  "age"
    t.string   "address"
    t.string   "email"
    t.integer  "semester"
    t.string   "phone"
    t.string   "extra_phone"
    t.string   "twitter"
    t.string   "linkedin"
    t.string   "photo"
    t.integer  "motivation"
    t.integer  "faculty_id"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.integer  "user_profile_id"
    t.string   "photo_file_name"
    t.integer  "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "authentication_token"
    t.string   "invitation_token"
    t.string   "password"
    t.datetime "remember_created_at"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
