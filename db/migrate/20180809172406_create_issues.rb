class CreateIssues < ActiveRecord::Migration[5.2]
  def change
    create_table :issues do |t|
      t.string :title
      t.string :location
      t.string :quoteCost
      t.string :actualCost
      t.string :issueCreate
      t.string :ticketCreate
      t.string :notes
      t.string :closed

      t.timestamps
    end
  end
end
