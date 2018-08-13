class Api::IssuesController < ApplicationController
    def index 
        @issues = Issue.all
        render json: @issues
    end
    def show
        @issue = Issue.find(params[:id])
        render json: @issue
    end
    def create
        # @user = current_user
        # @category = @user.categories.new(category_params)
        @issue = Issue.new(issue_params)
    
        if @issue.save
          render json: @issue, status: :created
        else
          render json: @issue.errors, status: :unprocessable_entity
        end
      end
    # def create
    #     @new_category = Category.new(category_params)
    #     @new_category.save
    #    puts "File saved"
    #   end
    private
      
    def issue_params
        params.require(:issue).permit(:title, :ticketCreate, :quoteCost, :notes, :location, :issueCreate, :closed, :actualCost)
    end
end
