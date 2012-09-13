class Question < ActiveRecord::Base
	has_many :answers
	belongs_to :section
	accepts_nested_attributes_for :section
end
