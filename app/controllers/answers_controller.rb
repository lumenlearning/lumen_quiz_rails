class AnswersController < ApplicationController
  def update
    data = params[:data]
    @answer = Answer.find(params[:id])
    @question = Question.find(@answer.question_id)
    if @answer.update(content: data)
      render json: @question, include: :answers
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end
end