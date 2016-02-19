require 'pry'
class GuidsController < ApplicationController
  def update
    data = JSON.parse(params[:data])
    @guid = Guid.find(params[:id])
    @question = Question.find(params[:question_id])
    @guid.update(data)
    render json: @question, :include => [:answers, :guid]
  end
end