class QuizzesController < ApplicationController
  def index
    @quizzes = Quiz.all
    render json: @quizzes
  end

  def show
    @quiz = Quiz.find(params[:id])
    render json: @quiz, :include => {:questions => {:include => :answers}}
  end

  def create
    data = JSON.parse(params[:data])
    @quiz = Quiz.create(name: data['name'])
    @question = Question.create(content: '')
    @quiz.questions.push(@question)
    @answer = Answer.create(content: '', correct: false, question_id: @question.id)
    @guid = Guid.create(short_title: '', question_id: @question.id)
    if @quiz.save
      render json: @quiz, include: :questions, status: :created
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end
end