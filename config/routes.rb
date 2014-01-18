CmCalculator::Application.routes.draw do
  root 'home#index'
  resources :items, defaults: {format: :json}
end
