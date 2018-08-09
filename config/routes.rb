Rails.application.routes.draw do
 namespace :api do
  resources :issues do
    resources :visits do
    end
  end
end
end
