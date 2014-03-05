require 'test_helper'

class FileUploadersControllerTest < ActionController::TestCase
  setup do
    @file_uploader = file_uploaders(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:file_uploaders)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create file_uploader" do
    assert_difference('FileUploader.count') do
      post :create, file_uploader: @file_uploader.attributes
    end

    assert_redirected_to file_uploader_path(assigns(:file_uploader))
  end

  test "should show file_uploader" do
    get :show, id: @file_uploader
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @file_uploader
    assert_response :success
  end

  test "should update file_uploader" do
    put :update, id: @file_uploader, file_uploader: @file_uploader.attributes
    assert_redirected_to file_uploader_path(assigns(:file_uploader))
  end

  test "should destroy file_uploader" do
    assert_difference('FileUploader.count', -1) do
      delete :destroy, id: @file_uploader
    end

    assert_redirected_to file_uploaders_path
  end
end
