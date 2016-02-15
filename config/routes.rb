Rails.application.routes.draw do
  resources :quizzes, only: [:index]
end
