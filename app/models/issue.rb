class Issue < ApplicationRecord
    has_many :visits, dependent: :destroy
end
