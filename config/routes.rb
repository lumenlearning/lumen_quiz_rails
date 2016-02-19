Rails.application.routes.draw do
  resources :quizzes, only: [:index, :create, :show]
  resources :questions, only: [:create, :update, :show] do
    resources :answers, only: [:create, :update]
  end
  match '*all', to: 'application#index', via: [:get]
end
