class PdfPreview < ActiveRecord::Base
	belongs_to :application

	has_attached_file :document
end
