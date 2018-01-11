require 'test_helper'

class PdfPreviewsControllerTest < ActionController::TestCase
  setup do
    @pdf_preview = pdf_previews(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pdf_previews)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pdf_preview" do
    assert_difference('PdfPreview.count') do
      post :create, pdf_preview: @pdf_preview.attributes
    end

    assert_redirected_to pdf_preview_path(assigns(:pdf_preview))
  end

  test "should show pdf_preview" do
    get :show, id: @pdf_preview
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pdf_preview
    assert_response :success
  end

  test "should update pdf_preview" do
    put :update, id: @pdf_preview, pdf_preview: @pdf_preview.attributes
    assert_redirected_to pdf_preview_path(assigns(:pdf_preview))
  end

  test "should destroy pdf_preview" do
    assert_difference('PdfPreview.count', -1) do
      delete :destroy, id: @pdf_preview
    end

    assert_redirected_to pdf_previews_path
  end
end
