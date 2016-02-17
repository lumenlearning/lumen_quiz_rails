class QuestionsController < ApplicationController
  def new
    @quiz = Quiz.find(params[:quiz_id])
    render json: @quiz
  end
end