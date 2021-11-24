class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/tasks" do
    tasks = Task.all.order("created_at ASC")
    tasks.to_json
  end

  get "/categories" do
    categories = Category.all.order("id ASC")
    categories.to_json
  end

  get "/categories/:id" do
    categories = Category.find(params[:id])
    categories.to_json
  end


  post '/tasks' do
    task = Task.create(
      body: params[:body],
      username: params[:username],
      description: params[:description],
      category_id: params[:category_id]
    )
    task.to_json
  end

  patch '/tasks/:id' do
    task = Task.find(params[:id])
    task.update(
      body: params[:body],
      description: params[:description],
      category_id: params[:category_id]
    )
    task.to_json
  end

  delete '/tasks/:id' do
    task = Task.delete(params[:id])
    task.destroy
    tasks.to_json
  end
end