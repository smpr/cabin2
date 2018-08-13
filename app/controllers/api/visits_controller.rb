class Api::VisitsController < ApplicationController
    def index
        @issue = Issue.find(params[:issue_id])
        @visits = @issue.visits.all
        render json: @visits
    end
    def show
        @visit = Visit.find(params[:id])
        render json: @visit
    end
    def create
        @issue = Issue.find params[:issue_id]
        @issue.visits.create(visit_params)
        puts "Visit Create Hit"
      end
    # def create
    #     @new_category = Category.new(category_params)
    #     @new_category.save
    #    puts "File saved"
    #   end
    private
      
    def visit_params
        params.require(:visit).permit(:technician, :dateVisit, :fixedProblem, :notes)
    end
end
