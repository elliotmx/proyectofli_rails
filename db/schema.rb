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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140320175348) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text     "value"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "question_id"
    t.integer  "application_id"
  end

  add_index "answers", ["id"], name: "index_answers_on_id", unique: true, using: :btree

  create_table "applications", force: :cascade do |t|
    t.string   "name"
    t.string   "short_description"
    t.string   "video_url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "tags"
    t.integer  "market_id"
  end

  create_table "applications_users", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "application_id"
  end

  create_table "colleges", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "telefono"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comments", force: :cascade do |t|
    t.string   "text"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "development_stages", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "faculties", force: :cascade do |t|
    t.string   "name"
    t.integer  "idcollege"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "file_uploaders", force: :cascade do |t|
    t.string   "name"
    t.text     "url"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "invited_users", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
    t.integer  "college_id"
    t.integer  "user_id"
  end

  create_table "markets", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.string   "email"
    t.string   "subject"
    t.text     "body"
  end

  create_table "pdf_previews", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "problem"
    t.text     "justification"
    t.text     "objective"
    t.text     "components"
    t.text     "activities"
    t.text     "implementation"
    t.text     "cronogram"
    t.text     "risks"
    t.integer  "application_id"
    t.string   "document_file_name"
    t.string   "document_content_type"
    t.integer  "document_file_size"
    t.datetime "document_updated_at"
    t.text     "facebook_url"
    t.text     "twitter_url"
    t.text     "project_title"
    t.text     "objective_population"
    t.text     "budget"
  end

  add_index "pdf_previews", ["application_id"], name: "index_pdf_previews_on_application_id", using: :btree

  create_table "project_scopes", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "questions", force: :cascade do |t|
    t.string   "spa_description"
    t.string   "eng_description"
    t.boolean  "active"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "section_id"
    t.string   "html_for_field"
    t.string   "field_type"
    t.string   "extra_text_desc"
    t.integer  "position_question"
    t.string   "pop_name"
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles_users", id: false, force: :cascade do |t|
    t.integer "role_id"
    t.integer "user_id"
  end

  create_table "sections", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "service_types", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_profiles", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
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
    t.integer  "user_profile_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_file_name"
    t.integer  "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.integer  "sign_in_count",          default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "authentication_token"
    t.string   "invitation_token"
    t.string   "password"
    t.datetime "remember_created_at"
    t.string   "provider"
    t.string   "uid"
    t.integer  "college_id"
    t.integer  "role_id"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
