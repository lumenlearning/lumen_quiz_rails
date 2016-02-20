class QuestionsController < ApplicationController
  def update
    data = params[:data]
    @question = Question.find(params[:id])
    if @question.update(content: data)
      render json: @question, :include => [:answers, :guid]
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def create
    @quiz = Quiz.find(params[:quizID])
    @question = Question.create(content: '', quiz_id: @quiz.id)
    @answer = Answer.create(content: '', correct: false, question_id: @question.id)
    @guid = Guid.create(short_title: '', question_id: @question.id)
    render json: @question, :include => [:answers, :guid]
  end

  def show
    @question = Question.find(params[:id])
    render json: @question, :include => [:answers, :guid]
  end

  def destroy
    @question = Question.find(params[:id])
    @quiz = Quiz.find(@question.quiz_id)
    @question.destroy
    render json: @quiz, :include => {:questions => {:include => :answers}}
  end
end