require 'pry'
class QuestionsController < ApplicationController
  def update
    data = params[:data]
    @question = Question.find(params[:id])
    if @question.update(content: data)
      render json: @question, status: :created
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def show
    @question = Question.find(params[:id])
    render json: @question
  end
end