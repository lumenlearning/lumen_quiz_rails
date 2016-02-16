Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]
  resources :quizzes, only: [:index]
end
