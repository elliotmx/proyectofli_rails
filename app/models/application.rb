class Application < ActiveRecord::Base
	has_and_belongs_to_many :users
	has_many :answers
	has_many :pdf_previews
	accepts_nested_attributes_for :pdf_previews
	belongs_to :market
	#attr_accessible :pdfpreviews_atributes

end