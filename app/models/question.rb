class Question < ActiveRecord::Base
  validates_presence_of :content
  belongs_to :quiz
  has_many :answers
end