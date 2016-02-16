class QuizzesController < ApplicationController
  def index
    @quizzes = Quiz.all
    render json: @quizzes
  end

  def create
    data = JSON.parse(params[:data])
    @quiz = Quiz.create(name: data['name'])
    if @quiz.save
      render json: @quiz
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end
end