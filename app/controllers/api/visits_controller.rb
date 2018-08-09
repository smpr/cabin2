class Api::VisitsController < ApplicationController
    def index
        @issue = Issue.find(params[:issue_id])
        @visits = @issue.visits.all
        render json: @visits
    end
end
