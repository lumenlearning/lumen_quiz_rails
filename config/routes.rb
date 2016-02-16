Rails.application.routes.draw do
  resources :quizzes, only: [:index, :create, :show]
end
