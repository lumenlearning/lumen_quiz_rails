Rails.application.routes.draw do
  resources :quizzes, only: [:index, :create]
  match '*all', to: 'application#index', via: [:get]
end
