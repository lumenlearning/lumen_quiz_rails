require 'pry'
class AnswersController < ApplicationController
  def update
    data = params[:data]
    @answer = Answer.find(params[:id])
    @question = Question.find(@answer.question_id)
    if data == "true" 
      @answer.update(correct: true)
    elsif data == "false"
      @answer.update(correct: false)
    else
      @answer.update(content: data)
    end
    render json: @question, :include => [:answers, :guid]
  end

  def create
    @question = Question.find(params[:question_id])
    @answer = Answer.create(correct: false, question_id: @question.id)
    render json: @question, :include => [:answers, :guid]
  end

  def destroy
    @answer = Answer.find(params[:id])
    @question = Question.find(params[:question_id])
    @answer.destroy
    render json: @question, :include => [:answers, :guid]
  end
end