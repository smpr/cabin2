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
end
